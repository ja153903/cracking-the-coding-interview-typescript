function urlify(url: string): string {
  // The replaceAll function is currently a target for esnext
  // and is not in the lib
  return url.trim().split(" ").join("%20");
}

export { urlify };
