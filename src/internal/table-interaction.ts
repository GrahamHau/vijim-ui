import type { WheelEvent as ReactWheelEvent } from "react";

/**
 * 宽表把滚轮统一解释为横向浏览；普通滚轮和 Shift + 滚轮行为一致。
 * 没有横向溢出时不拦截页面滚动。
 */
export function scrollWideTableOnWheel(event: ReactWheelEvent<HTMLElement>): void {
  const container = event.currentTarget;
  const scrollTarget = container.querySelector<HTMLElement>("[data-scrollarea-viewport]") ?? container;
  if (scrollTarget.scrollWidth <= scrollTarget.clientWidth) return;

  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY;
  if (!delta) return;

  event.preventDefault();
  scrollTarget.scrollBy({ left: delta, behavior: "auto" });
}
