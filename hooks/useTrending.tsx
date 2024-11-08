import { atom, useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

const trendingAtom = atomWithQuery((get) => ({
  queryKey: ["trending"],
  queryFn: async () => {
    const res = await fetch(`/api/coingecko/trending`);

    return res.json();
  },
}));

export default function useTrending() {
  return useAtom(trendingAtom);
}
