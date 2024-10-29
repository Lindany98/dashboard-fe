import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";

import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Inventory",
        path: "/invoice",
        element: <Notifications />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Reports",
        path: "/tables",
        element: <Tables />,
      },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "Test",
      //   path: "/test",
      //   element: <Test />,
      // },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     // {
  //     //   icon: <RectangleStackIcon {...icon} />,
  //     //   name: "sign up",
  //     //   path: "/sign-up",
  //     //   element: <SignUp />,
  //     // },
  //   ],
  // },
];

export default routes;
