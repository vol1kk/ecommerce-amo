import { Item, SelectedItem } from "@/types";
import { RequestService } from "@/services/RequestService";
import { SelectedItemsTag } from "@/components/server/Shop";

export type SelectedItemTypes = "all" | "cart" | "wishlist";

export class ItemService extends RequestService {
  static itemsUrl = this.baseUrl + "/items";
  static selectedItemsUrl = this.baseUrl + "/selected";

  static async createSelected(body: any) {
    const res = await RequestService.post(this.selectedItemsUrl, { body });

    return res.json();
  }

  static async getItems(category?: string): Promise<Item[]> {
    const searchParams = new URLSearchParams();

    if (category) {
      searchParams.append("category", category);
    }

    const resp = await this.get(this.itemsUrl + `?${searchParams.toString()}`);

    return resp.json();
  }

  static async getSelectedItem(id: string): Promise<SelectedItem> {
    const resp = await this.get(`${this.selectedItemsUrl}/${id}`, {
      next: { tags: [SelectedItemsTag] },
    });

    return resp.json();
  }

  static async getSelectedItems(
    type?: SelectedItemTypes,
  ): Promise<SelectedItem[]> {
    const searchParams = new URLSearchParams();

    if (type) {
      searchParams.append("type", type);
    }

    const resp = await this.get(
      this.selectedItemsUrl + `?${searchParams.toString()}`,
      { next: { tags: [SelectedItemsTag] } },
    );

    return resp.json();
  }

  static async updateSelectedItem(id: string, body: Partial<SelectedItem>) {
    const resp = await this.patch(`${this.selectedItemsUrl}/${id}`, { body });

    return resp.json();
  }
}
