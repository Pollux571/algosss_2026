const str = 'bcadfgh';
let trimMyArr = str.split('');
function hasUnique(str) {
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
