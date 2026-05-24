// ! Invert values code wars

// 1 code war version
function invert(array) {
  return array.map((array) => {
    return console.log(array * -1);
  });
}

invert([1, 2, 3, 4, 5, 0]);

// ! true version my version
// function invert(array) {
//   return array.map((array) => {
//     return console.log(array === 0 ? array * Math.abs(array) : array * -1);
//   });
// }

// invert([1, 2, 3, 4, 5, 0]);
