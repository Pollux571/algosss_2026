function tsp() {
  const homeKm = [
    [0, 10, 15],
    // [10, 0, 20],
    // [15, 20, 0],
  ];

  let count = 0;
  for (const row of homeKm) {
    for (const value of row) {
      console.log(value);
      count += value;
    }
  }
  console.log(count);
}

tsp();


