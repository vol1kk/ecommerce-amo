export default function groupByThree<T>(array: T[]) {
  const groupedArray = [];

  for (let i = 0; i < array.length; i += 3) {
    groupedArray.push(array.slice(i, i + 3));
  }

  return groupedArray;
}
