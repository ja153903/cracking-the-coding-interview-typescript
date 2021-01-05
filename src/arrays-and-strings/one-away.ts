function isOneEditAway(s: string, t: string): boolean {
  return canReplace(s, t) || canAdd(s, t);
}

function canReplace(s: string, t: string): boolean {
  // cannot replace if length if different=
  if (s.length !== t.length) {
    return false;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      count++;
    }
  }

  return count <= 1;
}

function canAdd(s: string, t: string): boolean {
  if (Math.abs(s.length - t.length) > 1) {
    return false;
  }

  const counter = new Map();

  const shorter = s.length < t.length ? s : t;

  for (let i = 0; i < shorter.length; i++) {
    counter.set(shorter[i], (counter.get(shorter[i]) ?? 0) + 1);
  }

  const longer = s === shorter ? t : s;

  for (let i = 0; i < longer.length; i++) {
    if (counter.get(longer[i]) > 0) {
      counter.set(longer[i], (counter.get(longer[i]) ?? 1) - 1);
    }
  }

  return [...counter.values()].reduce((acc, curr) => acc + curr, 0) === 0;
}

export { isOneEditAway };
