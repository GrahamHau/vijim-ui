import type { WheelEvent as ReactWheelEvent } from "react";

/**
 * 宽表只接管明确的横向手势：触控板横移，或 Shift + 纵向滚轮。
 * 普通纵向滚轮继续交给页面，避免页面下滚时表格同时向右漂移。
 */
export function scrollWideTableOnWheel(event: ReactWheelEvent<HTMLElement>): void {
  const container = event.currentTarget;
  const scrollTarget = container.querySelector<HTMLElement>("[data-scrollarea-viewport]") ?? container;
  if (scrollTarget.scrollWidth <= scrollTarget.clientWidth) return;

  const hasHorizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY);
  const delta = hasHorizontalGesture
    ? event.deltaX
    : event.shiftKey
      ? event.deltaY
      : 0;
  if (!delta) return;

  event.preventDefault();
  scrollTarget.scrollBy({ left: delta, behavior: "auto" });
}
