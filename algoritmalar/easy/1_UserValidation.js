export const userValidation = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[A-Za-z]/.test(str.slice(0, 1)) && // slice yerine >> str.charAt(0);
    /^\w+$/.test(str) &&
    /[a-zA-Z0-9]/.test(str.slice(-1)) // slice yerine >> str.charAt(str.length -1);
  ) {
    return true;
  } else {
    return false;
  }
};

/* Rules
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, and the underscore character
4. it cannot and with an underscore character

If the username is valid then your program should return the string true

*/
