// 2574. Left and Right Sum Differences

var leftRigthDifference = function (a) {
   let n = a.length,
    pre = new Array(n),

    suf = new Array(n);
  for (let i = 0, /**/ s = 0; i < n; i++) pre[i] = s += a[i];
  for (let i = n - 1, s = 0; i >= 0; i--) suf[i] = s += a[i];

  let an = new Array(n);
  for (let i = 0; i < n; i++)
    an[i] = Math.abs((pre[i - 1] || 0) - (suf[i + 1] || 0));
  return an;
};

leftRigthDifference([10, 4, 8, 3]);

// prep = new Array;
// console.log(prep)
