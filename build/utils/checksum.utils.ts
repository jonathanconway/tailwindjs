import { createHash } from "crypto";

export function generateChecksum(input: string) {
  return createHash("md5").update(input).digest("hex");
}

export function verifyChecksum(input: string, checksum: string) {
  return createHash("md5").update(input).digest("hex") == checksum;
}
