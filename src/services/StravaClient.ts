// FIXME: Count the amount of API calls.
import localforage from "localforage";

export default class StravaClient {

  static async getActivities(start: Date | null = null, end: Date | null = null) {
    // Get the last 30 activities by default.
    const url = new URL("https://www.strava.com/api/v3/athlete/activities");

    if (start && end) {
      url.searchParams.append("after", (start.getTime() / 1000).toString());
      url.searchParams.append("before", (end.getTime() / 1000).toString());
    }

    return await fetch(url.toString(), {
      headers: {
        Authorization: "Bearer " + (await localforage.getItem("access_token"))
      }
    }).then(res => {
      if (!res.ok) {
        // FIXME: Print an error message.
        return [];
      }
      return res.json();
    });
  }

  static async getActivity(id: number) {
    const url = new URL(`https://www.strava.com/api/v3/activities/${id}`);
    return await fetch(url.toString(), {
      headers: {
        Authorization: "Bearer " + (await localforage.getItem("access_token"))
      }
    }).then(res => res.json());
  }

  static async getActivityStream(id: number) {
    const url = new URL(
      `https://www.strava.com/api/v3/activities/${id}/streams`
    );
    url.searchParams.append("keys", "heartrate");
    url.searchParams.append("key_by_type", "true");
    url.searchParams.append("series_type", "time");
    url.searchParams.append("resolution", "high");
    return await fetch(url.toString(), {
      headers: {
        // FIXME: Wrap the token in a 'user' object.
        Authorization: "Bearer " + (await localforage.getItem("access_token"))
      }
    }).then(async res => {
      if (!res.ok) {
        // FIXME: Show a message.
        return {};
      }

      return res.json();
    });
  }
}
