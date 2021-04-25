import { Day } from "@/types/Day";
import {Activity} from "@/types/Activity";
import {timeline} from "@/services/calculators/calculator";

const lambdaA = 2 / (7 + 1);
const lambdaC = 2 / (42 + 1);

export function values(yesterday: Day, today: Day): Day {
  const atl =
      (today.tss || 0) * lambdaA + (1 - lambdaA) * (yesterday.atl || 0);
  const ctl =
      (today.tss || 0) * lambdaC + (1 - lambdaC) * (yesterday.ctl || 0);

  return {
    atl: atl,
    ctl: ctl,
    form: (yesterday.ctl || 0) - (yesterday.atl || 0)
  };
}

export function tsb(activities: Activity[]) {
  const days = timeline(activities);
  let yesterday: Day = {
    atl: 0,
    ctl: 0,
    form: 0,
    tss: 0,
  };

  for (const day of days) {
    const v = values(yesterday, day);

    day.atl = v.atl;
    day.ctl = v.ctl;
    day.form = v.form;

    yesterday = {...v};
  }

  return days;
}
