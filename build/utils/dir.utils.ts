import { existsSync, mkdirSync } from "fs";

export function mkdirIfNotExistsSync(path: string) {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
}
