import { Day } from "@/types/Day";

export function tsb(yesterday: Day, today: Day): Day {
  const lambdaA = 2 / (7 + 1);
  const lambdaC = 2 / (42 + 1);

  const atlToday =
      (today.tss || 0) * lambdaA + (1 - lambdaA) * (yesterday.atl || 0);
  const ctlToday =
      (today.tss || 0) * lambdaC + (1 - lambdaC) * (yesterday.ctl || 0);

  return {
    atl: atlToday,
    ctl: ctlToday,
    form: (yesterday.ctl || 0) - (yesterday.atl || 0)
  };
}
