export interface GreetingPeriod {
  start: number;
  end: number;
  message: string;
}

export const GREETINGS: GreetingPeriod[] = [
  {
    start: 5,
    end: 11,
    message: "Good Morning",
  },
  {
    start: 12,
    end: 16,
    message: "Good Afternoon",
  },
  {
    start: 17,
    end: 19,
    message: "Good Evening",
  },
  {
    start: 20,
    end: 4,
    message: "Good Night",
  },
];
