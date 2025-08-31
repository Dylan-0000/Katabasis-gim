
import Image from "next/image";
import Link from "next/link";
import { Routine } from "@/lib/types";

export function RoutineCard({ routine }: { routine: Routine }) {
    return (
      <div className="flex flex-col gap-4 rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm">
        <div className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{routine.time}</p>
              <h3 className="text-lg font-bold">{routine.title}</h3>
            </div>
            <p className="text-sm font-semibold">{routine.days}</p>
          </div>
        </div>
        <div className="relative w-full aspect-video flex-1 rounded-lg overflow-hidden group">
          <Image
            src={routine.imageUrl}
            alt={routine.title}
            width={routine.imageWidth}
            height={routine.imageHeight}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={routine.imageHint}
          />
           <Link href="#" className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-semibold">View Details</span>
          </Link>
        </div>
      </div>
    );
  }
