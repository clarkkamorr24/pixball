import {
  IoGridOutline,
  IoRocketOutline,
  IoCashOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoMedicalOutline,
  IoTvOutline,
  IoCalculatorOutline,
  IoLogoBitcoin,
  IoBasketballOutline,
  IoGameControllerOutline,
  IoSparklesOutline,
  IoMailOutline,
} from "react-icons/io5";

const sideNavItem = [
  {
    icon: {
      icon: <IoGridOutline size={17} />,
    },
    label: "Dashboard",
    href: "/",
    pathname: "",
  },
  {
    icon: {
      icon: <IoCashOutline size={17} />,
    },
    label: "Casinos",
    href: "/casinos",
    pathname: "casinos",
    subMenus: [
      {
        label: "Manage Casino",
        href: "/sub-1",
        pathname: "casino1",
      },
      {
        label: "Licenses",
        href: "/sub-2",
        pathname: "casino2",
      },
    ],
  },
  {
    icon: {
      icon: <IoPeopleOutline size={17} />,
    },
    label: "CRM Users",
    href: "/crm-users",
    pathname: "crm-users",
    subMenus: [
      {
        label: "Manage Users",
        href: "/crm-users/manage-users",
        pathname: "crmUser1",
      },
      {
        label: "Departments",
        href: "/crm-users/departments",
        pathname: "crmUser3",
      },
    ],
  },
  {
    icon: {
      icon: <IoPersonOutline size={17} />,
    },
    label: "Clients",
    href: "/clients",
    pathname: "clients",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "client1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "client2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "client3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "client4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "client5",
      },
    ],
  },
  {
    icon: {
      icon: <IoPersonOutline size={17} />,
    },
    label: "Agents",
    href: "/agents",
    pathname: "agents",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "employee1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "employee2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "employee3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "employee4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "employee5",
      },
    ],
  },
  {
    icon: {
      icon: <IoMedicalOutline size={17} />,
    },
    label: "Affiliates",
    href: "/affiliates",
    pathname: "affiliates",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "affiliate1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "affiliate2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "affiliate3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "affiliate4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "affiliate5",
      },
    ],
  },
  {
    icon: {
      icon: <IoTvOutline size={17} />,
    },
    label: "Live Monitor",
    href: "/live-monitor",
    pathname: "live1",
    subMenus: [
      {
        label: "Bet Monitor",
        href: "/bet",
        pathname: "live2",
      },
      {
        label: "Analytics Monitor",
        href: "/analytics",
        pathname: "live3",
      },
      {
        label: "Odds Monitor",
        href: "/odds",
        pathname: "live4",
      },
      {
        label: "API Monitor",
        href: "/api",
        pathname: "live5",
      },
    ],
  },
  {
    icon: {
      icon: <IoCalculatorOutline size={17} />,
    },
    label: "Finance",
    href: "/finance",
    pathname: "finance",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "finance1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "finance2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "finance3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "finance4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "finance5",
      },
    ],
  },
  {
    icon: {
      icon: <IoLogoBitcoin size={17} />,
    },
    label: "Bonuses",
    href: "/bonuses",
    pathname: "bonuses",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "bonus1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "bonus2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "bonus3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "bonus4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "bonus5",
      },
    ],
  },
  {
    icon: {
      icon: <IoBasketballOutline size={17} />,
    },
    label: "Sports Settings",
    href: "/sport-settings",
    pathname: "sport-settings",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "sport1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "sport2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "sport3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "sport4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "sport5",
      },
    ],
  },
  {
    icon: {
      icon: <IoGameControllerOutline size={17} />,
    },
    label: "Games Settings",
    href: "/game-settings",
    pathname: "game-settings",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "game1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "game2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "game3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "game4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "game5",
      },
    ],
  },
  {
    icon: {
      icon: <IoSparklesOutline size={17} />,
    },
    label: "CRM",
    href: "/crm",
    pathname: "crm",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "crm1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "crm2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "crm3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "crm4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "crm5",
      },
    ],
  },
  {
    icon: {
      icon: <IoMailOutline size={17} />,
    },
    label: "CMS",
    href: "/cms",
    pathname: "cms",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "cms1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "cms2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "cms3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "cms4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "cms5",
      },
    ],
  },
  {
    icon: {
      icon: <IoRocketOutline size={17} />,
    },
    label: "Integrations",
    href: "/integrations",
    pathname: "integrations",
    subMenus: [
      {
        label: "PSP",
        href: "/psp",
        pathname: "int1",
      },
      {
        label: "Slot and Games",
        href: "/sub-2",
        pathname: "int2",
      },
      {
        label: "Live Dealer",
        href: "/live-dealer",
        pathname: "int3",
      },
      {
        label: "Sports",
        href: "/sports",
        pathname: "int4",
      },
      {
        label: "SMTP",
        href: "/smtp",
        pathname: "int5",
      },
      {
        label: "Affiliates",
        href: "/affiliates",
        pathname: "int6",
      },
      {
        label: "Analytics",
        href: "/analytics",
        pathname: "int7",
      },
      {
        label: "Telegram",
        href: "/Telegram",
        pathname: "int8",
      },
    ],
  },
];

export { sideNavItem };
