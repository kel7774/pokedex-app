// capitalizes first letter of string
export default function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//takes in url from pokedex fetch in search, matches only numbers, slices off 2 from `/v2`, joins array with no spaces, converts strings to numbers
export function formatURL(url) {
  let extractedNum = url.match(/\d/g).slice(1).join("");
  let parsed = parseInt(extractedNum, 10);
  return parsed;
}
