import {Activity} from "@/types/Activity";
import {Day} from "@/types/Day";
import {Days} from "@/types/Days";

export const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const timelineObject = (activities: Activity[]): Days => {
    const timeline: Days = {};

    for (const activity of activities) {
        const date = new Date(activity.start_date_local).toISOString().split('T')[0];

        if (timeline[date]) {
            timeline[date].tss = (timeline[date].tss || 0) + activity.tss;
            timeline[date].activities!.push({
                name: activity.name,
                id: activity.id,
            });
        } else {
            timeline[date] = {
                tss: activity.tss,
                activities: [{name: activity.name, id: activity.id}],
            };
        }
    }

    return timeline;
}

const timelineArray = (activities: Activity[]) => {
    const timeline: Day[] = [];
    const object = timelineObject(activities);

    for (const date of Object.keys(object)) {
        timeline.push({
            date: date,
            ...object[date],
        });
    }

    return timeline.sort((a, b) => {
        return new Date(a.date || '').getTime() - new Date(b.date || '').getTime();
    });
}

export function timeline(activities: Activity[]): Day[] {
    const timeline = [];
    const object = timelineObject(activities);
    let date = new Date('2021-01-01'); // FIXME
    const limit = new Date().getTime() + DAY_IN_MILLISECONDS * 14; // Predict 14 days into the future.

    while (date.getTime() <= limit) {
        const iso = date.toISOString().split('T')[0];
        const day = object[iso] || {
            date: iso,
            tss: 0,
        };
        timeline.push({
            date: iso,
            ...day,
        });

        date.setTime(date.getTime() + DAY_IN_MILLISECONDS);
    }

    return timeline;
}
