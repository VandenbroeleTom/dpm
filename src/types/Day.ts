export type Day = {
  date?: string;
  tss?: number;
  ctl?: number;
  atl?: number;
  form?: number;
  activities?: { name: string; id: number }[];
};
