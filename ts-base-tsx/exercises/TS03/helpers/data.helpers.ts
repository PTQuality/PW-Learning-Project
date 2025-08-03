export function getBiggestNumber(values: number[]): number {
  if (values.length === 0) throw new Error("Array is empty");
  return Math.max(...values);
}
