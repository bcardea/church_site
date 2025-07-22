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
          "fixed top-0 left-0 z-50 h-full w-full sm:w-4/5 sm:max-w-sm bg-white shadow-xl transform transition-transform duration-300 " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Close menu" 
            onClick={onClose}
            className="hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Content */}
        <nav className="flex-1 px-6 pb-6 overflow-y-auto">
          {/* Main Links */}
          <div className="space-y-1 mb-8">
            {navItems.main.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="block py-3 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Dropdown Sections */}
          {navItems.dropdowns.map((dropdown, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {dropdown.label}
              </h3>
              <div className="space-y-1">
                {dropdown.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="block py-3 text-base text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer with Give Button */}
        <div className="p-6 border-t border-gray-100">
          <Button 
            asChild 
            size="lg" 
            className="w-full rounded-full bg-black text-white hover:bg-gray-800 font-medium"
          >
            <Link 
              href="https://lifepointhamptonroads.churchcenter.com/giving" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={onClose}
            >
              GIVE
            </Link>
          </Button>
        </div>
      </aside>
    </>
  );
}