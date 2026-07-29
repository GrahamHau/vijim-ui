"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
} from "react";

export type FileInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type"
>;

/** 文件选择的唯一底层入口；触发器和上传流程由业务按场景组合。 */
export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(props, ref) {
    return <input {...props} ref={ref} type="file" data-slot="file-input" />;
  },
);
