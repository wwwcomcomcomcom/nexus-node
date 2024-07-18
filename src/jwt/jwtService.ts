class JwtSerivce {
  secretKey = process.env.JWT_SECRET;

  constructor(secretKey?: string) {
    if (secretKey) this.secretKey = secretKey;
    else if (process.env.JWT_SECRET) this.secretKey = process.env.JWT_SECRET;
    else throw new Error("Secret key is missing");
  }

  parse(jwtToken: string): string {
    throw new Error("Not implemented");
  }
}
