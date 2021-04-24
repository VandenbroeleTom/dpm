import {Activity} from "@/types/Activity";
import {User} from "@/types/User";

/**
 * The users threshold reserve.
 */
const thresholdReserve = (user: User) => {
  return (user.thresHr - user.restHr) / (user.maxHr - user.restHr);
};

/**
 * The maximum amount of trimp for 60' of training.
 */
const thresholdTrimp = (user: User) => {
  return 60 * thresholdReserve(user) * 0.64 * Math.exp(user.trimpFactor * thresholdReserve(user));
};

const trimpPart = (seconds: number, hrRes: number, user: User) => {
  return (seconds / 60) * hrRes * 0.64 * Math.exp(user.trimpFactor * hrRes);
}

const trimp = (activity: Activity, user: User) => {
  let trimp = 0;

  for (let i = 1; i < activity.heartrate.data.length; i++) {
    // The amount of seconds between the 2 data points.
    const seconds = activity.time.data[i] - activity.time.data[i - 1];

    // The average heart rate between the 2 data points.
    let hr = (activity.heartrate.data[i] + activity.heartrate.data[i - 1]) / 2;

    // The reserve of the average heart rate.
    hr = (hr - user.restHr) / (user.maxHr - user.restHr);

    trimp += trimpPart(seconds, hr, user);
  }

  return trimp;
}

const hrTss = (trimp: number, thresTrimp: number) => {
  return (trimp / thresTrimp) * 60;
}

export function tss(activity: Activity, user: User): number {
  return hrTss(trimp(activity, user), thresholdTrimp(user));
}
