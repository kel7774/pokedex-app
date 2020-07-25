export function convertHeight(height) {
  if (typeof height !== "number") return " ";
  return (height / 10).toFixed(1);
}

export function convertWeight(weight) {
  if (typeof weight !== "number") return " ";
  return (weight / 10).toFixed(0);
}
