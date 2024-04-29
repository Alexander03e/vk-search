const months: Record<string, string> = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  "10": "октября",
  "11": "ноября",
  "12": "декабря",
};
export const formateDate = (date: string) => {
  const arrDate = date.split("-").reverse();
  return `${arrDate[0]} ${months[String(arrDate[1])]} ${arrDate[2]} `;
};
