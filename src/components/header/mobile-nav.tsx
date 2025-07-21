"use client";

import React from "react";

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
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      {/* Backdrop */}
      <div
        className={
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity " +
          (isOpen ? "opacity-100" : "opacity-0 pointer-events-none")
        }
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={
          "fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="flex items-center justify-end p-4 border-b">
          <Button variant="ghost" size="icon" aria-label="Close menu" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Main Links */}
          {navItems.main.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="block text-lg font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown Links */}
          {navItems.dropdowns.map((dropdown, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">{dropdown.label}</h3>
              <div className="pl-4 space-y-3 border-l border-gray-200">
                {dropdown.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="block text-base text-gray-600 hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t">
          <Button asChild size="lg" className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-800">
            <Link href="https://lifepointhamptonroads.churchcenter.com/giving" target="_blank" rel="noopener noreferrer" onClick={onClose}>
              GIVE
            </Link>
          </Button>
        </div>
      </aside>
    </>
  );
}
