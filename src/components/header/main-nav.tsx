"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}

function DropdownMenu({ label, items, isOpen, onToggle }: DropdownMenuProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                onClick={() => onToggle()}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const aboutUsItems = [
    { label: "Our Beliefs", href: "/about/beliefs" },
    { label: "Our Pastors", href: "/about/pastors" },
    { label: "Our Mission", href: "/about/mission" },
  ];

  const getConnectedItems = [
    { label: "Join the Team", href: "/get-connected/join-team" },
    { label: "Small Groups", href: "/get-connected/small-groups" },
    { label: "Kidspoint", href: "/get-connected/kidspoint" },
    { label: "Youth", href: "/get-connected/youth" },
    { label: "Outreach", href: "/get-connected/outreach" },
    { label: "Baptism", href: "/get-connected/baptism" },
    { label: "Connect with Us", href: "/get-connected/connect" },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="flex items-center mr-6"
      >
        <Image
          src="https://storage.googleapis.com/msgsndr/X3eoYfldwznzUvmpfctr/media/67c5b50b9778f6800e21e53b.svg"
          alt="Lifepoint Hampton Roads"
          width={120}
          height={40}
          className="h-7 md:h-8 w-auto"
          priority
        />
      </Link>

      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/im-new"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          I'M NEW
        </Link>
        
        <DropdownMenu
          label="ABOUT US"
          items={aboutUsItems}
          isOpen={openDropdown === "about"}
          onToggle={() => handleDropdownToggle("about")}
        />
        
        <Link
          href="/our-why"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Our Why
        </Link>
        
        <Link
          href="/watch"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          WATCH
        </Link>
        
        <DropdownMenu
          label="GET CONNECTED"
          items={getConnectedItems}
          isOpen={openDropdown === "connected"}
          onToggle={() => handleDropdownToggle("connected")}
        />
        
        <Link
          href="/give"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          GIVE
        </Link>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden ml-auto">
        <Menu className="h-5 w-5" />
      </Button>
    </nav>
  );
}