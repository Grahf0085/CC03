import { sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './object-keys-entries';

test('Given an object, return an array that has the keys sorted smallest to largest by length.', () => {
  const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; // arrange
  const output = sortedKeys(input); // act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); // assert
});

test('Given an object, return a new array that only includes the object key age.', () => {
  const input = { name: 'Angelina Jolie', isSpot: false, age: 80, }; // arrange
  const output = getFilteredKey(input); // act
  expect(output).toEqual(['age']); // assert
});

test('Given an object, it returns a new array of arrays of key value pairs.', () => {
  const input = { name: 'Angelina Jolie', age: 80 }; // arrange
  const output = getArrayOfKeysAndValues(input); // act
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); // assert
});

test('Given an object, return an array of arrays of key value pairs sorted longest to shortest by values length.', () => {
  const input = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; // arrange
  const output = sortedArraysByValuesLength(input); // act
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); // assert
});