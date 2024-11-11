/**
 * Replace spec characters
 * @param str
 */
export const replaceSpecCharacters = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
