import { GetPromosByChannelNameApiResponseI } from "@/types";
import { get } from "@/utils/axios";
import environment from "@/utils/environment";

export interface GetPromosByChannelName {
  channelName: string;
}

export async function getPromosByChannelName({
  channelName,
}: GetPromosByChannelName): Promise<GetPromosByChannelNameApiResponseI> {
  try {
    const response = await get<GetPromosByChannelNameApiResponseI>(
      `${environment.UrlBaseAPI}/telegram/promo`,
      {
        params: { channelName },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promos by channel name:", error);
    throw error;
  }
}
