import { MainNav } from "@/components/header/main-nav";
import { Search } from "@/components/header/search";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav className="mx-4" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
        </div>
      </div>
    </header>
  );
}
