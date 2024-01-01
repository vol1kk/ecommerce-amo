import jwt from "jsonwebtoken";

export default function verifyJWT(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      email: string;
    };
  } catch (e) {
    throw new Error("Something went wrong");
  }
}
