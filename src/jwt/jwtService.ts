import * as jwt from "jsonwebtoken";
class JwtSerivce {
  secretKey: string;

  constructor(secretKey?: string) {
    if (secretKey) this.secretKey = secretKey;
    else if (process.env.JWT_SECRET) this.secretKey = process.env.JWT_SECRET;
    else throw new Error("Secret key is missing");
  }

  parse(jwtToken: string): { [keyof: string]: unknown } {
    try {
      const payload = jwt.verify(jwtToken, this.secretKey!, {
        clockTimestamp: this.javaTimeStamp(),
      });
      return JSON.parse(payload.toString());
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }

  javaTimeStamp(): number {
    return Math.floor(Date.now() / 1000);
  }
}
