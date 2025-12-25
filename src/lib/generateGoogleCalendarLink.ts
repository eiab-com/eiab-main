import dayjs from "dayjs";


/**
 * Generates a Google Calendar link for an event.
 * @param title - The title of the event.
 * @param startDate - The start date of the event in ISO format.
 * @param endDate - The end date of the event in ISO format.
 * @param details - Additional details about the event.
 * @param location - The location of the event.
 * @returns A Google Calendar link.
 */
export function createGoogleCalendarLink(
  title: string,
  startDate: string,
  endDate: string,
  details: string = "",
  location: string = ""
): string {
  const baseUrl = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `🏍️ EIAB | `+` `+ title,
    dates: `${dayjs(startDate).format("YYYYMMDDTHHmmss")}Z/${dayjs(endDate).format("YYYYMMDDTHHmmss")}Z`,
    details,
    location
  });

  return `${baseUrl}?${params.toString()}`;
}

