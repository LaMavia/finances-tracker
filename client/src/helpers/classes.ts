export const classes = (raw: TemplateStringsArray, ...args: any[]) =>
  raw.slice(0, raw.length - 1).reduce((out, r, i) => (out += r + args[i]), '')
