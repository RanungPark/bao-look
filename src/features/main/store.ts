export interface ICalendar {
  msg: string;
  data: {
    calendarId: number;
    info: string;
    countDDay: number;
  };
}

export interface IMember {
  msg: string;
  data: {
    dday: number;
  };
}
