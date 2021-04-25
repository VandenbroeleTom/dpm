import StravaClient from "@/services/StravaClient";
import Storage from "./Storage";
import {tss} from "@/services/calculators/tss-calculator";
import {TRIMP_FACTOR, User} from "@/types/User";

const user: User = {
  restHr: 43,
  thresHr: 193,
  maxHr: 208,
  trimpFactor: TRIMP_FACTOR.M,
}

export default class Importer {
  static async importStreams(ids: number[]) {
    const streams = [];

    for (const id of ids) {
      // FIXME: Set a soft limit on this.
      streams.push(await this.importStream(id));
    }

    return streams;
  }

  static async importStream(id: number) {
    let activity: { id?: number } =
      (await Storage.getItem("activity." + id.toString())) || {};

    if (!activity.id) {
      activity = await StravaClient.getActivity(id);
    }

    const stream = await StravaClient.getActivityStream(id);

    stream.tss = tss(stream, user);

    activity = {
      ...activity,
      ...stream
    };

    await Storage.setItem("activity." + id.toString(), activity);

    return activity;
  }
}
