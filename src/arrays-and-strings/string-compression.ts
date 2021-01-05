function compress(s: string): string {
  if (s.length === 0) {
    return "";
  }

  const result: string[] = [];

  let prev: string = s[0];
  let count: number = 1;

  for (let i = 1; i <= s.length; i++) {
    if (i === s.length) {
      result.push(`${prev}${count}`);
    } else if (prev !== s[i]) {
      result.push(`${prev}${count}`);
      prev = s[i];
      count = 1;
    } else {
      count++;
    }
  }

  return result.join("");
}

export { compress };
