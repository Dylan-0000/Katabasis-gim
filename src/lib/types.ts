export type Routine = {
  id: number;
  time: string;
  title: string;
  days: string;
  imageUrl: string;
  imageHint: string;
  imageWidth: number;
  imageHeight: number;
};

export type UserRoutine = {
  id: number;
  name: string;
  routinesCount: number;
  routineDetails: string;
};
