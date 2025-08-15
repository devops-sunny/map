export function randomNumber(number: number): number {
  return Math.floor(Math.random() * number) + 1;
}
export function randomNumberRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const clsx = (...classes: (string | false | null | undefined)[]) => {
  return classes.filter((cls): cls is string => !!cls).join(" ");
};

export const isNotBlank = (val: any): val is string =>
  typeof val === "string" && val.trim().length > 0;

export const isBlank = (val: any) => !isNotBlank(val);

const formatter = new Intl.DateTimeFormat("en-CA", {
  dateStyle: "long",
  timeStyle: "short",
  hour12: false,
});
export const readableDateFrom = (timestamp: Date | number | string) =>
  timestamp ? formatter.format(new Date(timestamp)) : "";

export function convertDate(dateStr: string) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
