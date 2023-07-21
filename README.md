# VALOFFI API CLIENT

It is a type safe implementation of an api client for [VALORANT-API.com](https://valorant-api.com/).\
VALOFFI is VALORANT + Officer (alias for the developer who made valroant-api.com)

## Installation

Install @tqman/valoffi-api-client with npm, pnpm or yarn

```sh
npm i @tqman/valoffi-api-client@latest
```

```sh
pnpm add @tqman/valoffi-api-client@lastest
```

```sh
yarn add @tqman/valoffi-api-client@latest
```

## Example

```ts
import { OffiApiClient } from "@tqman/valoffi-api-client";

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
```

## Disclaimer

THIS PROJECT IS NOT ASSOCIATED OR ENDORSED BY RIOT GAMES. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc. Whilst effort has been made to abide by Riot's API rules; you acknowledge that use of this software is done so at your own risk.
