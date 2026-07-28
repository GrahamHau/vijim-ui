import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

/** 业务日期契约：YYYY-MM-DD 或 null */
export type DateString = string | null;

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function isDateString(value: unknown): value is string {
  return typeof value === "string" && DATE_RE.test(value) && dayjs(value, "YYYY-MM-DD", true).isValid();
}

/** dayjs / Date / string → YYYY-MM-DD | null */
export function toDateString(value: unknown): DateString {
  if (value == null || value === "") return null;
  if (typeof value === "string") {
    if (isDateString(value)) return value;
    const parsed = dayjs(value);
    return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
  }
  if (value instanceof Date) {
    const parsed = dayjs(value);
    return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
  }
  if (dayjs.isDayjs(value)) {
    return value.isValid() ? value.format("YYYY-MM-DD") : null;
  }
  return null;
}

/** YYYY-MM-DD | null → Date | null（给 Mantine dates 内部） */
export function fromDateString(value: DateString): Date | null {
  if (!value || !isDateString(value)) return null;
  return dayjs(value, "YYYY-MM-DD", true).toDate();
}
