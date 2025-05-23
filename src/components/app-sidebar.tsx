"use client";

import * as React from "react";
import {
  BarChartIcon,
  ClipboardPenLine,
  FolderIcon,
  Folders,
  House,
  ListIcon,
  Plane,
  SettingsIcon,
  ShoppingCart,
  Tags,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form";
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
  navSecondary: NavItem[];
};

const data: Data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
      url: "/ordermanagement",
      icon: <Tags />,
    },
    {
      title: SectionsName.ADMIN,
      url: "/admin",
      icon: <UsersIcon />,
    },
  ],
  navSecondary: [
    {
      title: SectionsName.CONFIG,
      url: "/config",
      icon: <SettingsIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
