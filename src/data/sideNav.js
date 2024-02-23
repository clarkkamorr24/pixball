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
      icon: <IoGridOutline size={20} />,
    },
    label: "Dashboard",
    href: "/",
    pathname: "",
  },
  {
    icon: {
      icon: <IoCashOutline size={20} />,
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
      icon: <IoPeopleOutline size={20} />,
    },
    label: "CRM Users",
    href: "/crm-users",
    pathname: "crm-users",
    subMenus: [
      {
        label: "Manage Users",
        href: "/sub-1",
        pathname: "crmUser1",
      },
      {
        label: "Roles & Permissions",
        href: "/sub-2",
        pathname: "crmUser2",
      },
      {
        label: "Departments",
        href: "/sub-3",
        pathname: "crmUser3",
      },
    ],
  },
  {
    icon: {
      icon: <IoPersonOutline size={20} />,
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
      icon: <IoPersonOutline size={20} />,
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
      icon: <IoMedicalOutline size={20} />,
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
      icon: <IoTvOutline size={20} />,
    },
    label: "Live Monitor",
    href: "/live-monitor",
    pathname: "live-monitor",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "live1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "live2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "live3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "live4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "live5",
      },
    ],
  },
  {
    icon: {
      icon: <IoCalculatorOutline size={20} />,
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
      icon: <IoLogoBitcoin size={20} />,
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
      icon: <IoBasketballOutline size={20} />,
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
      icon: <IoGameControllerOutline size={20} />,
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
      icon: <IoSparklesOutline size={20} />,
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
      icon: <IoMailOutline size={20} />,
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
      icon: <IoRocketOutline size={20} />,
    },
    label: "Integrations",
    href: "/integrations",
    pathname: "integrations",
    subMenus: [
      {
        label: "sub-1",
        href: "/sub-1",
        pathname: "integration1",
      },
      {
        label: "sub-2",
        href: "/sub-2",
        pathname: "integration2",
      },
      {
        label: "sub-3",
        href: "/sub-3",
        pathname: "integration3",
      },
      {
        label: "sub-4",
        href: "/sub-4",
        pathname: "integration4",
      },
      {
        label: "sub-5",
        href: "/sub-5",
        pathname: "integration5",
      },
    ],
  },
];

export { sideNavItem };
