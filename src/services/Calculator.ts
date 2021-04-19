import { Activity } from "@/types/Activity";

const REST_HR = 42;
const MAX_HR = 208;
const TRES_HR = 193;
const TRIMP_FACTOR_M = 1.92;
const TRIMP_FACTOR_F = 1.67;

class Calculator {
  getTss(activity: any): number {
    const restHr = REST_HR;
    const maxHr = MAX_HR;

    let trimp = 0;
    const trimpFactor = TRIMP_FACTOR_M;

    const hr = activity.heartrate?.data;
    const time = activity.time?.data;

    if (!hr) {
      return 0;
    }

    for (let i = 1; i < hr.length; i++) {
      const seconds = time[i] - time[i - 1];

      const avghr = (hr[i] + hr[i - 1]) / 2;

      const hrReserveAvg = (avghr - restHr) / (maxHr - restHr);

      trimp +=
        (seconds / 60) *
        hrReserveAvg *
        0.64 *
        Math.exp(trimpFactor * hrReserveAvg);
    }

    const lacthr = TRES_HR;

    return Calculator.calculateHrTss(trimpFactor, maxHr, restHr, lacthr, trimp);
  }

  private static calculateHrTss(
    trimpFactor: number,
    maxHr: number,
    restHr: number,
    lacTHr: number,
    trimp: number
  ): number {
    const tresholdReserve = (lacTHr - restHr) / (maxHr - restHr);
    // 60 minutes
    const tresholdTrimp =
      60 * tresholdReserve * 0.64 * Math.exp(trimpFactor * tresholdReserve);

    return (trimp / tresholdTrimp) * 60;
  }
}

export default new Calculator();
