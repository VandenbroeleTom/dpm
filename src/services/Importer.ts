import StravaClient from "@/services/StravaClient";
import Calculator from "@/services/Calculator";
import Storage from "./Storage";

export default class Importer {
  static async importStreams(ids: number[]) {
    for (const id of ids) {
      // FIXME: Set a soft limit on this.
      await this.importStream(id);
    }
  }

  static async importStream(id: number) {
    let activity: { id?: number } =
      (await Storage.getItem("activity." + id.toString())) || {};

    if (!activity.id) {
      activity = await StravaClient.getActivity(id);
    }

    const stream = await StravaClient.getActivityStream(id);

    stream.tss = Calculator.getTss(stream);

    activity = {
      ...activity,
      ...stream
    };

    await Storage.setItem("activity." + id.toString(), activity);

    return activity;
  }
}
