"use client";

import * as React from "react";
import {
  ClipboardPenLine,
  Folders,
  House,
  Plane,
  ShoppingCart,
  Tags,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SectionsName } from "@/enums/sections-name";

export type User = {
  name: string;
  email: string;
  avatar: string;
};

export type NavItem = {
  title: SectionsName;
  url: string;
  icon?: React.ReactNode;
};

export type Data = {
  user: User;
  navMain: NavItem[];
};

const data: Data = {
  user: {
    name: "Jon Gomes",
    email: "jon@barateira.com",
    avatar: "/avatars/avatar.jpg",
  },
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
