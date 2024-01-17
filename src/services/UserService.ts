import { RequestService } from "@/services/RequestService";
import { Session, User } from "next-auth";

export class UserService extends RequestService {
  static serviceUrl = this.baseUrl + "/users";

  static async findOne(id: string) {
    const resp = await this.get(`${this.serviceUrl}/${id}`);
    return resp.json();
  }

  static async update(id: string, body: Partial<Session["user"]>) {
    let resp;
    if ("currentPass" in body) {
      resp = await this.patch(`${this.serviceUrl}/password/${id}`, {
        body,
      });
    } else {
      resp = await this.patch(`${this.serviceUrl}/${id}`, {
        body,
      });
    }

    return resp.json();
  }
}
