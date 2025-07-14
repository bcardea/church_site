import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
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
          href="/giving"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Give
        </Link>
        <Link
          href="/egroups"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Groups
        </Link>
        <Link
          href="/eteams"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Serve
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          About
        </Link>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden ml-auto">
        <Menu className="h-5 w-5" />
      </Button>
    </nav>
  );
}
