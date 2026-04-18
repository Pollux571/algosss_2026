const str = 'bcadfgh';
let trimMyArr = str.split('');
function hasUnique() {
  const seen = new Set();

  for (let i = 0; i < trimMyArr.length; i++) {
    let char = trimMyArr[i];

    if (seen.has(char)) {
      return console.log(false);
    }

    seen.add(char);
  }

  return console.log(true);
}

hasUnique();

const str1 = 'glffgfjmnkopqrstt';
function secondWindow(myArr) {
  const myMap = new Set();
  for (let i = 0; i < myArr.length; i++) {
    let char = myArr[i];
    if (myMap.has(char)) {
      return console.log(false);
    }
    myMap.add(char);
  }
  return console.log(true);
}

secondWindow(str1.split(''));
