import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/logo";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b px-10 py-3">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="size-6 text-primary" />
          <h2 className="text-lg font-bold leading-tight tracking-tighter">
            FitTrack
          </h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          <Link
            href="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Workouts
          </Link>
          <Link
            href="/user-routines"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Routines
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Progress
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative min-w-40 max-w-64">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search" className="pl-11 bg-secondary focus:ring-ring" />
        </div>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Bell className="size-5" />
        </Button>
        <Avatar className="size-10 border-2 border-transparent hover:border-primary transition-colors">
          <AvatarImage
            src="https://picsum.photos/id/237/40/40"
            alt="User avatar"
            data-ai-hint="person face"
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
