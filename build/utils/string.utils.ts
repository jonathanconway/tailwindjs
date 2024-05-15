export function trimEndSubstr(input: string, trim: string) {
  while (input.endsWith(trim)) {
    input = input.substring(0, input.length - 1);
  }
  return input;
}

String.prototype.trimEndSubstr = function (this: string, trim: string) {
  return trimEndSubstr(this, trim);
};

export function sentenceCase(input: string) {
  return `${input[0].toUpperCase()}${input.substring(1)}}`;
}

String.prototype.sentenceCase = function (this: string) {
  return sentenceCase(this);
};

declare global {
  interface String {
    trimEndSubstr(this: String, trim: string): string;
    sentenceCase(this: String): string;
  }
}
