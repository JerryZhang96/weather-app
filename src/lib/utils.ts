import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUnixTimestamp(timestamp: number) {
  if (!timestamp) return "00-00-0000 00:00am";
  // Convert the Unix timestamp to milliseconds
  const date = new Date(timestamp * 1000);

  // Extract the date components
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
  const year = date.getFullYear();

  // Extract the time components
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format the date and time
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}${ampm}`;

  return formattedDate;
}

export function formatNumber(value: number) {
  if (!value) return "-";
  if (Math.round(value) === 0) return "0";
  return Math.round(value);
}
