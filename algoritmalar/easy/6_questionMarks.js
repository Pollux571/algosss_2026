export const questionMarks = (str) => {
  if (!str) {
    throw new Error("string should not be empty");
  }
  if (typeof str !== "string") {
    throw new Error("Parameter is not a string!");
  }

  const newStr = str.replace(/[^?]/g, "");
  const lastIndex = newStr.length - 1 + 1;
  return lastIndex;
};
