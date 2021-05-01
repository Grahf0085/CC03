export function sortedKeys(obj) {

  const keys = Object.keys(obj);

  return keys.sort((a, b) => a.length - b.length);

}

export function getFilteredKey(obj) {

  const keys = Object.keys(obj);
  const length = keys.length - 1;
  const newArray = [];
  newArray.push(keys[length]);

  return newArray;
}

export function getArrayOfKeysAndValues(obj) {
  return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj) {

  const newArray = Object.entries(obj);
  const arrayValues = Object.values(newArray);
  const sortedValues = arrayValues.sort((a, b) => b.length - a.length);
  let emptyArray = [];

  return Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
}