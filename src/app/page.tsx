import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 justify-center py-5 sm:py-10">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Bienvenido a FitTrack
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tu compañero de fitness para seguir tus rutinas y progresar.
          </p>
          <Button asChild>
            <Link href="/routines">Ver mis rutinas</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
