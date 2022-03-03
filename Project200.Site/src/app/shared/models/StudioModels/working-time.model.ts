import { KeyValue } from "@angular/common";

export class WorkingTime {
    public day: string = '';
    public isWorking: boolean = false;
    public fromTo: KeyValue<string, string>[] = [];
}