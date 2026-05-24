export const findIntersection = (arr) => {
  let set1 = arr[0].split(",");
  let set2 = arr[1].split(",");

  let includeNumbers = [];
  set1.forEach((item) => {
    if (set2.includes(item)) {
      includeNumbers.push(item);
    }
  });

  if (includeNumbers != 0) {
    return console.log(includeNumbers.toString());
  } else {
    return false;
  }
};
