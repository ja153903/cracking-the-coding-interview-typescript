/**
 * isPermutation(palindrome: string): boolean
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isPermutation(palindrome: string): boolean {
  const counter: Map<string, number> = new Map();

  // TODO: May need to do some pre-processing here
  // in case that the input string has nonalphabetic
  // characters

  for (let i = 0; i < palindrome.length; i++) {
    counter.set(palindrome[i], (counter.get(palindrome[i]) ?? 0) + 1);
  }

  let odd = 0;
  for (const value of counter.values()) {
    if (value % 2 == 1) {
      odd++;
    }
  }

  return odd <= 1;
}

export { isPermutation };
