/**
 * isUnique(s: string): boolean
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isUnique(s: string): boolean {
  const unique = new Set([...s.split("")]);

  return unique.size === s.length;
}

/**
 * isUniqueConstantSpace(s: string): boolean
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function isUniqueConstantSpace(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return false;
      }
    }
  }

  return true;
}

export { isUnique, isUniqueConstantSpace };
