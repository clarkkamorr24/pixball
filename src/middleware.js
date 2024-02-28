export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/casinos",
    "/crm-users",
    "/crm-users/manage-users",
    "/crm-users/departments",
    "/clients",
    "/betting-monitor",
    "/bonuses",
    "/integrations",
    "/game-settings",
  ],
};
