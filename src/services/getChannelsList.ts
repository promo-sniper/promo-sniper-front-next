import { GetChannelsListApiResponseI } from "@/types";
import { get } from "@/utils/axios";
import environment from "@/utils/environment";

export async function getChannelsList() {
  try {
    const response = await get<GetChannelsListApiResponseI>(
      `${environment.UrlBaseAPI}/telegram/channel`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching channel list:", error);
    throw error;
  }
}
