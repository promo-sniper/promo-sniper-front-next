import { RequestMetricsI } from "./generic";

export interface PromoItemI {
  numVisualizations: number;
  text: string;
  photoUrl: string;
  dateTime: string;
  telegramId: number;
}

export interface GetPromosByChannelNameApiResponseI {
  requestMetrics: RequestMetricsI;
  data: PromoItemI[];
}

export interface GetChannelsListApiResponseI {
  requestMetrics: RequestMetricsI;
  data: string[];
}
