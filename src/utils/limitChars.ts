export const limitChars = (str: string, limit: number): string => {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};
