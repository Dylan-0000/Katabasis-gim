import { Header } from "@/components/header";
import { RoutineCard } from "@/components/routine-card";
import { Routine } from "@/lib/types";

const routines: Routine[] = [
  {
    id: 1,
    time: "45-60 min",
    title: "Full Body Strength",
    days: "3 days/week",
    imageUrl: "https://picsum.photos/seed/workout1/600/400",
    imageHint: "gym workout",
    imageWidth: 600,
    imageHeight: 400,
  },
  {
    id: 2,
    time: "30 min",
    title: "HIIT Cardio",
    days: "2 days/week",
    imageUrl: "https://picsum.photos/seed/workout2/600/400",
    imageHint: "running cardio",
    imageWidth: 600,
    imageHeight: 400,
  },
  {
    id: 3,
    time: "60 min",
    title: "Yoga Flow",
    days: "5 days/week",
    imageUrl: "https://picsum.photos/seed/workout3/600/400",
    imageHint: "yoga peace",
    imageWidth: 600,
    imageHeight: 400,
  },
];

export default function RoutinesPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 justify-center py-5 sm:py-10">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center sm:text-left">
            Mis Rutinas
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routines.map((routine) => (
              <RoutineCard key={routine.id} routine={routine} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
