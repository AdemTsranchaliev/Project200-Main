import { DaysOfWeek } from "../../enums/enums";

export class WorkingTime {
  public startTime: Date;
  public endTime: Date;
  public dayOfWeek: DaysOfWeek;
  public isOpen: boolean;

  constructor(
    startTimeHour: number,
    startTimeMinutes: number,
    endTimeHour: number,
    endTimeMinutes: number,
    dayOfWeek: DaysOfWeek
  ) {
    this.startTime = new Date(0, 0, 0, startTimeHour, startTimeMinutes);
    this.startTime = new Date(0, 0, 0, endTimeHour, endTimeMinutes);
    this.dayOfWeek = dayOfWeek;
  }

  public isWithinWorkingHours(date: Date): boolean {
    return (
      date.getHours() >= this.startTime.getHours() &&
      date.getMinutes() >= this.startTime.getMinutes() &&
      date.getHours() >= this.endTime.getHours() &&
      date.getMinutes() >= this.endTime.getMinutes() &&
      date.getDay() == this.dayOfWeek
    );
  }

  public getStartTimeHour(){
    return this.startTime.getHours();
  }

  public getEndTimeHour(){
    return this.endTime.getHours();
  }
}
