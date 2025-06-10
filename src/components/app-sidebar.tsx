"use client";

import {ComponentProps, ReactNode, useContext} from "react";
import {ClipboardPenLine, Folders, House, Plane, ShoppingCart, Tag, Tags, UsersIcon,} from "lucide-react";

import {NavMain} from "@/components/nav-main";
import {NavUser} from "@/components/nav-user";
import {Sidebar, SidebarContent, SidebarFooter,} from "@/components/ui/sidebar";
import {SectionsName} from "@/enums/sections-name";
import {AuthContext} from "@/features/auth/contexts/auth-context";
import {User} from "@/features/users/types/users";

export type NavItem = {
  title: SectionsName;
  url: string;
  icon?: ReactNode;
};

export type Data = {
  user: User;
  navMain: NavItem[];
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated || !user) return null;

  const data: Data = {
    user,
    navMain: [
      {
        title: SectionsName.HOME,
        url: "/home",
        icon: <House />,
      },
      {
        title: SectionsName.CATALOG,
        url: "/catalog",
        icon: <Folders />,
      },
      {
        title: SectionsName.PROMOTION,
        url: "/promotion",
        icon: <Tag />,
      },
      {
        title: SectionsName.SALES,
        url: "/sales",
        icon: <ShoppingCart />,
      },
      {
        title: SectionsName.DASHBOARDS,
        url: "/dashboards",
        icon: <Plane />,
      },
      {
        title: SectionsName.REQUISITON,
        url: "/requisition",
        icon: <ClipboardPenLine />,
      },
      {
        title: SectionsName.ORDER_MANAGEMENT,
        url: "/order-management",
        icon: <Tags />,
      },
      {
        title: SectionsName.ADMIN,
        url: "/admin",
        icon: <UsersIcon />,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
