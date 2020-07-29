export default function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatURL(num) {
  let extractedNum = num.match(/\d/g).slice(1).join("");
  let parsed = parseInt(extractedNum, 10);
  return parsed;
}
