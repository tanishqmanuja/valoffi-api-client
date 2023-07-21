import { OffiApiClient } from "~/index";

const api = new OffiApiClient({
  parseResponseData: true,
});

const {
  data: { riotClientVersion },
} = await api.fetch("version");

console.log(
  "Latest RSO User-Agent\n",
  "->",
  `RiotClient/${riotClientVersion} rso-auth (Windows;10;;Professional, x64)`,
);
