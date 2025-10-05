export function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  const monthStr = new Date(`${year}-${month}-01`).toLocaleString("en", {
    month: "short",
  });
  return `${year} ${monthStr} ${day}`;
}