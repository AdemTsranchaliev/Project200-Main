export class WorkingTime {
  public startTime: Date;
  public endTime: Date;
  public dayOfWeek: number;
  public isOpen: boolean;

  constructor(
    startTimeHour?: number,
    startTimeMinutes?: number,
    endTimeHour?: number,
    endTimeMinutes?: number,
    dayOfWeek?: number
  ) {
    this.startTime = new Date(0, 0, 0, startTimeHour, startTimeMinutes);
    this.endTime = new Date(0, 0, 0, endTimeHour, endTimeMinutes);
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

  public getStartTimeHour(): number {
    return this.startTime.getHours();
  }

  public getEndTimeHour(): number {
    return this.endTime.getHours();
  }

  public getStartTimeHourPresentation(): string {
    return this.formatTimeToHHMM(this.startTime.getHours(), this.startTime.getMinutes());
  }

  public getEndTimeHourPresentation(): string {
    return this.formatTimeToHHMM(this.endTime.getHours(), this.endTime.getMinutes());
  }

  private formatTimeToHHMM(hour: number, minute: number): string {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  }
}
