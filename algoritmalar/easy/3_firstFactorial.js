export const firstFactorial = (num) => {
  let count = 1;
  for (let i = 2; i <= num; i++) {
    count *= i;
  }
  return count;
};

/*

First Factorial

Using the Javascript language have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it(ie. if num = 4, return (4 * 3 * 2 *1)). For the test cases, the range will be between i and 28

*/
