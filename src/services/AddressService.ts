import { RequestService } from "@/services/RequestService";

export class AddressService extends RequestService {
  static serviceUrl = this.baseUrl + "/addresses";
  static async create(body: any) {
    const resp = await this.post(this.serviceUrl, {
      body,
    });

    return resp.json();
  }

  static async deleteById(id: string) {
    const resp = await this.delete(`${this.serviceUrl}/${id}`);

    return resp.json();
  }

  static async update(id: string, body: any) {
    const resp = await this.patch(`${this.serviceUrl}/${id}`, { body });

    return resp.json();
  }
}
