// https://fellrnr.com/wiki/Modeling_Human_Performance#The_Banister_Model

import {DAY_IN_MILLISECONDS, timeline} from "@/services/calculators/calculator";
import {Activity} from "@/types/Activity";

const kA = 1.0;
const kF = 1.8; // 1.8 - 2.0
const rA = 42; // 49 - 50
const rF = 11;

const fitness = (tss: number, t: number, s: number) => {
    return Math.exp(-(t - s) / rA) * tss;
}

const fatigue = (tss: number, t: number, s: number) => {
    return Math.exp(-(t - s) / rF) * tss;
}

const performance = (p0: number, fitness: number, fatigue: number) => {
    return p0 + kA * fitness - kF * fatigue;
}

export function bannister(activities: Activity[]) {
    const days = timeline(activities);

    // Performance at day 0.
    const p0 = 0;
    // Days since day 0.
    let t = 0;

    for (const day of days) {
        for (let s = 0; s < t; s++) {
            day.ctl = (day.ctl || 0) + fitness(days[s].tss || 0, t, s);
            day.atl = (day.atl || 0) + fatigue(days[s].tss || 0, t, s);
        }
        day.form = performance(p0, day.ctl || 0, day.atl || 0);

        // Next day.
        t++;
    }

    return days;
}
