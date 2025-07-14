import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="relative w-full max-w-[300px]">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search"
        className="w-full rounded-full bg-muted pl-8 md:w-[300px] focus-visible:ring-0"
      />
    </div>
  );
}
