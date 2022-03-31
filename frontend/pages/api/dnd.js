import * as cheerio from "cheerio";
import axios from "axios";

export default async function handler(req, res) {
  const baseURL = "https://www.dndbeyond.com/my-campaigns";
  const cors = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(cors + baseURL, {
    credentials: "include",
    headers: {
      Cookie:
        '_pxhd=r9/FwSLAL5RATHQqkh9MeRtD0/HgjYja3bnhwrHGelAG0sJAebsw4VwtGo0VDZCjXHjzWwlW6iy0p7z2Fnnjsg==:QAEolM7j57N9nEUeCluKNqCO25Fn8GVaFCM7QuMtxcbooOwMXeu68iW3mLSu5-HNmhvo4BNwSHfu1S3lDS0h1A8/rEUCcsm-gbP90GpvIlA=; ResponsiveSwitch.DesktopMode=1; Geo={%22region%22:%22NJ%22%2C%22country%22:%22US%22%2C%22continent%22:%22NA%22}; sublevel=ANON; Preferences=undefined; CobaltSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..cK5HVtvNx9WdFuFt-4QJkw.OP3AgXW1UU8eqaN_pkTtNrkQWzC7VmQHygHeLzBQ_grrh8GvGZIt1vLf02MFrUFO.bJoSyRN9bqotVk85HIywAw; User.ID=108940633; User.Username=EmoMatt33939; Preferences.Language=1; UserInfo={"UserId":108940633,"UserJoinDate":"2020-11-18","UserSessionId":"a6017220-4525-47cf-b805-8c2b31de4bda"}; User=UserID=108940633&UserName=EmoMatt33939&AuthType=2&ExternalUserID=47943682&ExternalDisplayName=EmoMatt; Preferences.TimeZoneID=1; ddbSiteBanner:21737551-0d55-4b25-8889-8813960915e7=true; RequestVerificationToken=1b6f39fa-6992-42b2-98a6-7607bb0b58df; Ratings=null',
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.5",
      "Cache-Control": "max-age=0",
      Connection: " keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Upgrade-Insecure-Requests": 1,
    },
  });
  const body = await response.text();
  console.log(body); // prints a chock full of HTML richness

  res.status(200).json({ body });
}
