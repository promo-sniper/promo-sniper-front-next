"use client";

import { Button } from "@fluentui/react-components";
import { useQuery } from "@tanstack/react-query";

import { getChannelsList, getPromosByChannelName } from "@/services";

export default function ListUsers() {
  const { data: promo } = useQuery({
    queryKey: ["getPromosByChannelName"],
    queryFn: () => getPromosByChannelName({ channelName: "rapadura" }),
  });

  const { data: channelsList } = useQuery({
    queryKey: ["getChannelsList"],
    queryFn: () => getChannelsList(),
  });

  console.log({ promo });
  console.log({ channelsList });

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        {channelsList &&
          channelsList.data.length > 0 &&
          channelsList.data.map((item: string) => <li key={item}>{item}</li>)}
      </div>
      <Button>PROMO SNIPER</Button>
    </main>
  );
}
