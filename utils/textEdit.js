function tagCodeToStrong(str) {
  return str.replaceAll(/(?<=<\/?)code(?=>)/g, "strong");
}

export { tagCodeToStrong };
