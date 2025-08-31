import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserRoutine } from "@/lib/types";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from "next/link";

const userRoutines: UserRoutine[] = [
    { id: 1, name: 'Sophia Carter', routinesCount: 3, routineDetails: 'Full body workout' },
    { id: 2, name: 'Liam Harper', routinesCount: 2, routineDetails: 'Cardio and core' },
    { id: 3, name: 'Olivia Bennett', routinesCount: 4, routineDetails: 'Strength training' },
    { id: 4, name: 'Noah Foster', routinesCount: 1, routineDetails: 'Flexibility and yoga' },
    { id: 5, name: 'Ava Coleman', routinesCount: 3, routineDetails: 'Mixed routine' },
    { id: 6, name: 'Ethan Hayes', routinesCount: 2, routineDetails: 'Strength and cardio' },
    { id: 7, name: 'Isabella Reed', routinesCount: 4, routineDetails: 'Full body workout' },
    { id: 8, name: 'Jackson Price', routinesCount: 1, routineDetails: 'Cardio and core' },
    { id: 9, name: 'Mia Morgan', routinesCount: 3, routineDetails: 'Strength training' },
    { id: 10, name: 'Aiden Brooks', routinesCount: 2, routineDetails: 'Flexibility and yoga' },
];

const tags = ["Strength", "Cardio", "Flexibility", "Mixed"];

export default function UserRoutinesPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 justify-center py-5 sm:px-20 lg:px-40">
        <div className="w-full max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Rutinas de Usuario
            </h1>
            <Button variant="secondary" size="sm" className="rounded-full px-4 h-8">
              Añadir Rutina
            </Button>
          </div>
          <div className="p-4">
             <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input placeholder="Search user..." className="pl-12 h-12 bg-secondary rounded-xl border-none" />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 p-3">
              {tags.map((tag) => (
                  <Button key={tag} variant="secondary" size="sm" className="rounded-full h-8 px-4">
                      {tag}
                  </Button>
              ))}
          </div>
          <div className="p-4">
            <div className="overflow-hidden rounded-xl border">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background hover:bg-background">
                            <TableHead className="w-[400px]">User</TableHead>
                            <TableHead className="w-[400px]">Routines</TableHead>
                            <TableHead className="w-[400px]">Routine Details</TableHead>
                            <TableHead className="w-60"></TableHead>
                            <TableHead className="w-60"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userRoutines.map((routine) => (
                            <TableRow key={routine.id} className="h-[72px]">
                                <TableCell>{routine.name}</TableCell>
                                <TableCell className="text-muted-foreground">{routine.routinesCount}</TableCell>
                                <TableCell className="text-muted-foreground">{routine.routineDetails}</TableCell>
                                <TableCell className="font-bold text-sm text-muted-foreground">
                                    <Link href="#" className="hover:underline">View Full Routine</Link>
                                </TableCell>
                                <TableCell className="font-bold text-sm text-muted-foreground">
                                    <Link href="#" className="hover:underline">Progress</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
          </div>
           <div className="flex items-center justify-center p-4 gap-1">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="size-[18px]" />
              </Button>
              <Button variant="secondary" className="rounded-full w-10 h-10 font-bold">1</Button>
              <Button variant="ghost" className="rounded-full w-10 h-10">2</Button>
              <Button variant="ghost" className="rounded-full w-10 h-10">3</Button>
              <span className="flex items-center justify-center w-10 h-10">...</span>
              <Button variant="ghost" className="rounded-full w-10 h-10">10</Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="size-[18px]" />
              </Button>
            </div>
        </div>
      </main>
    </div>
  );
}
