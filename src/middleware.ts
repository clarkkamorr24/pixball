export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/casinos",
    "/crm-users",
    "/clients",
    "/betting-monitor",
    "/bonuses",
    "/integrations",
    "/game-settings",
  ],
};
