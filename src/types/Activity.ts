export type Activity = {
  id: number;
  name: string;
  tss: number;
  heartrate: {
    data: number[];
  };
  time: {
    data: number[];
  };
  start_date: string;
  start_date_local: string;
};
