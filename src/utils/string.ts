import moment from "moment";

export const clsx = (...classes: (string | false | null | undefined)[]) => {
  return classes.filter((cls): cls is string => !!cls).join(" ");
};
export const isNotBlank = (val: any): val is string =>
  typeof val === "string" && val.trim().length > 0;

export const isBlank = (val: any) => !isNotBlank(val);

export const TEXT_INPUT_REGEX =
  /^(?!.*String\.fromCharCode.*|.*eval\(.*\).*|.*prompt\(.*\).*)(\w[–-\w.,'’"()&\s:%/]{0,50})$/i;

export const TEXTAREA_REGEX =
  /^(?!.*String\.fromCharCode.*|.*eval\(.*\).*|.*prompt\(.*\).*)(\w[–-\w.,'’"()&\s:%/]{0,1000})$/i;

export const readableDateFrom = (timestamp: Date | number | string) =>
  timestamp
    ? new Date(timestamp).toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";
export const formatTime = (date: Date | string | number, withSeconds = false) =>
  new Date(date).toLocaleTimeString("sv", {
    hour: "2-digit",
    minute: "2-digit",
    second: withSeconds ? "2-digit" : undefined,
    timeZone: "Asia/Kolkata",
  });

export const localFormatDate = (updateTime: any) => {
  const [year, month, day, hour, minute, second] = updateTime;
  const date = moment([year, month - 1, day, hour, minute, second]); // month is 0-indexed
  return date.format("DD-MM-YYYY HH:mm:ss");
};

export function base64ToBlob(base64: any, type = "application/octet-stream") {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: type });
}
