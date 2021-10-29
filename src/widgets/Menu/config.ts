import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://app.soy.finance",
      },
      {
        label: "Liquidity",
        href: "https://app.soy.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.SOON,
  },
  {
    label: "CHOAM Sale",
    icon: "ChoamIcon",
    href: "https://choamtoken.com/",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    href: "/info",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/SoyFinance/soyfinance-swap",
      },
      {
        label: "Docs",
        href: "https://callisto.network/",
      },
      {
        label: "Blog",
        href: "https://callisto.network/blog/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/Soy_Finance",
      },
      {
        label: "Pусский",
        href: "https://t.me/Soy_Finance_Ru",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Soy_Finance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
