export function trimEndSubstr(input: string, trim: string) {
  while (input.endsWith(trim)) {
    input = input.substring(0, input.length - 1);
  }
  return input;
}

String.prototype.trimEndSubstr = function (this: string, trim: string) {
  return trimEndSubstr(this, trim);
};

declare global {
  interface String {
    trimEndSubstr(this: String, trim: string): string;
  }
}
