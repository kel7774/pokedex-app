// converts height from decimeters to meters
export function convertHeight(height) {
  if (typeof height !== "number") return " ";
  return (height / 10).toFixed(1);
}

// converts weight from hectograms to kilograms
export function convertWeight(weight) {
  if (typeof weight !== "number") return " ";
  return (weight / 10).toFixed(0);
}
