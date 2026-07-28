"use client";

import {
  useRef,
  useState,
  type CSSProperties,
  type ClipboardEvent,
  type DragEvent,
} from "react";
import { COLORS, MOTION, RADIUS } from "../theme/tokens";

const DEFAULT_MAX_SIZE = 6 * 1024 * 1024;

export type ImageGalleryUploadResult =
  | { ok: true; url: string }
  | { ok: false; message: string };

export type ImageGalleryUploadProps = {
  values: string[];
  onAdd: (url: string, file: File) => void;
  onRemove: (url: string) => void;
  onReorder?: (values: string[]) => void;
  upload?: (file: File) => Promise<ImageGalleryUploadResult>;
  accept?: string;
  maxSize?: number;
  maxItems?: number;
  multiple?: boolean;
  replaceable?: boolean;
  reorderable?: boolean;
  coverBadge?: boolean;
  removable?: boolean | ((url: string, index: number) => boolean);
  addLabel?: string;
  hint?: string;
  paste?: boolean;
  drop?: boolean;
  aspectRatio?: string;
  frameless?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}

async function defaultUpload(file: File): Promise<ImageGalleryUploadResult> {
  try {
    return { ok: true, url: await readFileAsDataUrl(file) };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "上传失败",
    };
  }
}

function validateImageFile(file: File, maxSize: number) {
  if (!file.type.startsWith("image/")) return `${file.name} 不是图片文件`;
  if (file.size > maxSize) return `${file.name} 超过 ${Math.round(maxSize / 1024 / 1024)}MB`;
  return null;
}

function isFileDrag(event: DragEvent<HTMLElement>) {
  return Array.from(event.dataTransfer.types).includes("Files");
}

export function ImageGalleryUpload({
  values,
  onAdd,
  onRemove,
  onReorder,
  upload = defaultUpload,
  accept = "image/*",
  maxSize = DEFAULT_MAX_SIZE,
  maxItems = Number.POSITIVE_INFINITY,
  multiple = false,
  replaceable = false,
  reorderable = false,
  coverBadge = false,
  removable = true,
  addLabel = "+ 上传图片",
  hint,
  paste = true,
  drop = true,
  aspectRatio = "1 / 1",
  frameless = false,
  disabled = false,
  readOnly = false,
}: ImageGalleryUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const dragDepthRef = useRef(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [droppingFiles, setDroppingFiles] = useState(false);

  const canReplace = replaceable && maxItems === 1 && values.length === 1;
  const canAdd = !readOnly && !disabled && !busy && (values.length < maxItems || canReplace);
  const canReorder = reorderable && typeof onReorder === "function" && !readOnly && !disabled;
  const busyOrDisabled = busy || disabled;

  async function uploadFiles(files: File[]) {
    if (!canAdd) return;
    const remaining = canReplace ? 1 : Math.max(0, maxItems - values.length);
    const list = (multiple ? files : files.slice(0, 1)).slice(0, remaining);
    if (!list.length) return;
    setError(files.length > remaining ? `最多上传 ${maxItems} 张图片` : null);
    setBusy(true);
    try {
      for (const file of list) {
        const invalid = validateImageFile(file, maxSize);
        if (invalid) {
          setError(invalid);
          continue;
        }
        const result = await upload(file);
        if (result.ok) onAdd(result.url, file);
        else setError(result.message);
      }
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "上传失败");
    } finally {
      setBusy(false);
    }
  }

  function pick(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (files.length) void uploadFiles(files);
  }

  function pasteImages(event: ClipboardEvent<HTMLDivElement>) {
    if (!paste || !canAdd) return;
    const files = Array.from(event.clipboardData.files).filter((file) => file.type.startsWith("image/"));
    if (!files.length) return;
    event.preventDefault();
    void uploadFiles(files);
  }

  function enterDropZone(event: DragEvent<HTMLDivElement>) {
    if (!drop || !canAdd || !isFileDrag(event)) return;
    event.preventDefault();
    dragDepthRef.current += 1;
    setDroppingFiles(true);
  }

  function leaveDropZone(event: DragEvent<HTMLDivElement>) {
    if (!drop || !isFileDrag(event)) return;
    event.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setDroppingFiles(false);
  }

  function dropImages(event: DragEvent<HTMLDivElement>) {
    if (!drop || !canAdd || !isFileDrag(event)) return;
    event.preventDefault();
    event.stopPropagation();
    dragDepthRef.current = 0;
    setDroppingFiles(false);
    const files = Array.from(event.dataTransfer.files);
    if (files.length) void uploadFiles(files);
  }

  function reorder(fromIndex: number | null, toIndex: number) {
    setDraggingIndex(null);
    setDragOverIndex(null);
    if (!canReorder || busy || fromIndex === null || fromIndex === toIndex) return;
    const next = [...values];
    const [moved] = next.splice(fromIndex, 1);
    if (!moved) return;
    next.splice(toIndex, 0, moved);
    onReorder?.(next);
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: maxItems === 1 ? "minmax(0, 1fr)" : "repeat(auto-fill, minmax(108px, 1fr))",
    gap: 10,
  } satisfies CSSProperties;

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  } satisfies CSSProperties;

  if (readOnly) {
    if (!values.length) {
      return (
        <span data-slot="image-gallery-upload" style={{ fontSize: 11.5, color: COLORS.faint }}>
          无图
        </span>
      );
    }
    return (
      <div data-slot="image-gallery-upload" style={gridStyle}>
        {values.map((url, index) => (
          <a
            key={`${url}-${index}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{
              position: "relative",
              aspectRatio,
              borderRadius: frameless ? 0 : RADIUS.element,
              overflow: "hidden",
              border: frameless ? "none" : `1px solid ${COLORS.border}`,
              background: COLORS.surfaceMuted,
            }}
          >
            <img src={url} alt={`图片 ${index + 1}`} referrerPolicy="no-referrer" loading="lazy" style={imageStyle} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      data-slot="image-gallery-upload"
      onPaste={pasteImages}
      onDragEnter={enterDropZone}
      onDragOver={(event) => {
        if (!drop || !canAdd || !isFileDrag(event)) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
      }}
      onDragLeave={leaveDropZone}
      onDrop={dropImages}
      style={{
        position: "relative",
        borderRadius: frameless ? 0 : RADIUS.element,
        outline: droppingFiles ? `2px solid ${COLORS.brand}` : "2px solid transparent",
        outlineOffset: droppingFiles ? 4 : 0,
        background: droppingFiles ? COLORS.brandMuted : "transparent",
        transition: `outline-color ${MOTION.fast}, background-color ${MOTION.fast}`,
      }}
    >
      {droppingFiles ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 4,
            display: "grid",
            placeItems: "center",
            borderRadius: RADIUS.element,
            background: "color-mix(in oklab, var(--surface) 88%, transparent)",
            color: COLORS.brand,
            fontSize: 13,
            fontWeight: 650,
            pointerEvents: "none",
            backdropFilter: "blur(3px)",
          }}
        >
          松开即可上传图片
        </div>
      ) : null}
      {error ? (
        <p style={{ margin: "0 0 10px", fontSize: 11.5, color: COLORS.danger }}>{error}</p>
      ) : hint ? (
        <p style={{ margin: "0 0 10px", fontSize: 11.5, color: COLORS.faint }}>{hint}</p>
      ) : null}
      <div style={gridStyle}>
        {values.map((url, index) => (
          <div
            key={`${url}-${index}`}
            draggable={canReorder && !busy}
            onPointerEnter={() => setHoverIndex(index)}
            onPointerLeave={() => setHoverIndex((current) => (current === index ? null : current))}
            onDragStart={(event) => {
              if (!canReorder || busy) return;
              setDraggingIndex(index);
              event.dataTransfer.effectAllowed = "move";
              event.dataTransfer.setData("text/plain", String(index));
            }}
            onDragOver={(event) => {
              if (!canReorder || busy || draggingIndex === index) return;
              event.preventDefault();
              event.dataTransfer.dropEffect = "move";
              setDragOverIndex(index);
            }}
            onDragLeave={() => setDragOverIndex((current) => (current === index ? null : current))}
            onDrop={(event) => {
              event.preventDefault();
              const from = draggingIndex != null ? draggingIndex : Number(event.dataTransfer.getData("text/plain"));
              reorder(Number.isFinite(from) ? from : null, index);
            }}
            onDragEnd={() => {
              setDraggingIndex(null);
              setDragOverIndex(null);
            }}
            style={{
              position: "relative",
              aspectRatio,
              borderRadius: frameless ? 0 : RADIUS.element,
              overflow: "hidden",
              border: frameless ? "none" : `1px solid ${COLORS.border}`,
              background: COLORS.surfaceMuted,
              cursor: canReorder && !busy ? "grab" : canReplace && !busy ? "pointer" : "default",
              outline: dragOverIndex === index ? `2px solid ${COLORS.brand}` : "none",
              outlineOffset: dragOverIndex === index ? -2 : undefined,
              opacity: draggingIndex === index ? 0.55 : 1,
            }}
          >
            <img src={url} alt="" referrerPolicy="no-referrer" loading="lazy" style={imageStyle} />
            {canReplace ? (
              <button
                type="button"
                onClick={() => canAdd && fileRef.current?.click()}
                disabled={!canAdd}
                aria-label="更换图片"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  color: "white",
                  cursor: canAdd ? "pointer" : "default",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  font: "inherit",
                }}
              >
                <span
                  style={{
                    marginBottom: 8,
                    padding: "3px 9px",
                    borderRadius: 999,
                    background: "rgba(18, 19, 23, 0.58)",
                    fontSize: 11,
                    fontWeight: 600,
                    opacity: hoverIndex === index ? 1 : 0,
                    transition: `opacity ${MOTION.fast}`,
                    backdropFilter: "blur(3px)",
                  }}
                >
                  更换图片
                </span>
              </button>
            ) : null}
            {coverBadge && index === 0 ? (
              <span
                style={{
                  position: "absolute",
                  left: 8,
                  top: 8,
                  padding: "1px 8px",
                  borderRadius: 999,
                  fontSize: 10.5,
                  fontWeight: 700,
                  background: "color-mix(in oklab, var(--surface) 86%, transparent)",
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.brand,
                  backdropFilter: "blur(4px)",
                }}
              >
                封面
              </span>
            ) : null}
            {(typeof removable === "function" ? removable(url, index) : removable) ? (
              <button
                type="button"
                onClick={() => !busyOrDisabled && onRemove(url)}
                disabled={busyOrDisabled}
                aria-label="移除"
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 1,
                  right: 1,
                  width: 28,
                  height: 28,
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  cursor: busyOrDisabled ? "default" : "pointer",
                  opacity: hoverIndex === index ? (busyOrDisabled ? 0.4 : 1) : busyOrDisabled ? 0.35 : 0.8,
                  transition: `opacity ${MOTION.fast}`,
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1,
                  textShadow: "0 1px 8px rgba(0, 0, 0, 0.45)",
                }}
              >
                ×
              </button>
            ) : null}
          </div>
        ))}
        {values.length < maxItems ? (
          <button
            type="button"
            onClick={() => canAdd && fileRef.current?.click()}
            disabled={!canAdd}
            style={{
              aspectRatio,
              border: frameless ? "none" : `1px dashed ${COLORS.borderStrong}`,
              borderRadius: frameless ? 0 : RADIUS.element,
              outline: "none",
              background: COLORS.surfaceMuted,
              color: COLORS.ink2,
              fontSize: 12.5,
              fontWeight: 550,
              padding: "0 6px",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              cursor: canAdd ? "pointer" : "default",
              opacity: canAdd ? 1 : 0.6,
              transition: `border-color ${MOTION.fast}, color ${MOTION.fast}, box-shadow ${MOTION.fast}`,
            }}
          >
            {busy ? "上传中…" : addLabel}
          </button>
        ) : null}
      </div>
      <input ref={fileRef} type="file" accept={accept} multiple={multiple} hidden onChange={pick} disabled={!canAdd} />
    </div>
  );
}
