"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  active: boolean;
  label: string;
  notifications?: number;
  disabled?: boolean;
  setActive: (label: any) => void;
}

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 p-4">
      <div className="flex items-center space-x-8">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => item.setActive(item.label)}
            className={cn(
              "relative flex items-center space-x-2 pb-2 text-sm font-medium transition-colors",
              item.active
                ? "text-primary border-b-2 border-primary"
                : item.disabled
                ? "text-tertiary cursor-not-allowed"
                : "text-secondary hover:text-primary"
            )}
            disabled={item.disabled}
          >
            <span>{item.label}</span>
            {item.notifications && (
              <Badge
                variant="default"
                className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center"
              >
                {item.notifications}
              </Badge>
            )}
          </button>
        ))}

        <Button variant="ghost" size="sm" className="p-1">
          <MoreHorizontal className="h-4 w-4 text-primary" />
        </Button>
      </div>
    </div>
  );
}
