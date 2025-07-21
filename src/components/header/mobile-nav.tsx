"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: {
    main: { label: string; href: string; external?: boolean }[];
    dropdowns: {
      label: string;
      items: { label: string; href: string; external?: boolean }[];
    }[];
  };
}

export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white text-gray-900 flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-end p-4 border-b">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Main Links */}
        {navItems.main.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : ""}
            className="block text-2xl font-semibold hover:text-primary transition-colors"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        {/* Dropdown Links */}
        {navItems.dropdowns.map((dropdown, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4">{dropdown.label}</h3>
            <div className="pl-4 space-y-4 border-l-2 border-gray-200">
              {dropdown.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  className="block text-lg text-muted-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t">
        <Button asChild size="lg" className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-800">
          <Link href="https://lifepointhamptonroads.churchcenter.com/giving" target="_blank" rel="noopener noreferrer" onClick={onClose}>
            GIVE
          </Link>
        </Button>
      </div>
    </div>
  );
}
