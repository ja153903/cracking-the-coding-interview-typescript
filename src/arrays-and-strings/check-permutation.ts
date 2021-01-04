/**
 * Given two strings, write a method to decide if one is a permutation of the other
 */

/**
 * isPermutation(s: string, t: string): boolean
 *
 * Time Complexity: let r = max(s.length, t.length); O(r log r)
 * Space Complexity: let r = max(s.length, t.length); O(r)
 */
function isPermutation(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sChars = s.split("");
  sChars.sort((a, b) => a.localeCompare(b));

  const tChars = t.split("");
  tChars.sort((a, b) => a.localeCompare(b));

  return sChars.join("") === tChars.join("");
}

export { isPermutation };
