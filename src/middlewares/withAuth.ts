import { getServerSession } from "next-auth";

import verifyJWT from "@/utils/verifyJWT";
import { ProtectedRequest } from "@/types";
import { authOptions } from "@/lib/authOptions";

type HandlerProps<T> = (
  req: ProtectedRequest,
  res: T,
) => Response | Promise<Response>;

export default function withAuth<T>(handler: HandlerProps<T>) {
  return async function (req: Request, res: T) {
    try {
      const authHeader = req.headers.get("Authorization");
      const headerToken = authHeader?.split(" ")[1];

      let token;
      if (authHeader && headerToken !== "null" && headerToken !== "undefined") {
        token = headerToken;
      } else {
        const session = await getServerSession(authOptions);
        token = session?.user.accessToken;
      }

      if (!token) {
        return Response.json("Token couldn't be found anywhere", {
          status: 400,
        });
      }

      const verifiedToken = verifyJWT(token);

      const modifiedRequest = req as ProtectedRequest;
      modifiedRequest.verified = {
        id: verifiedToken.id,
        email: verifiedToken.email,
      };

      return handler(modifiedRequest, res);
    } catch (e) {
      return Response.json("Token verification failed", { status: 401 });
    }
  };
}
