import jwt from "jsonwebtoken";

export default function generateJWT(id: string, email: string) {
  return jwt.sign({ email, id }, process.env.JWT_SECRET as string);
}
