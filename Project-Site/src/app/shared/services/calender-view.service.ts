import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalendarViewService {
    private componentToRender = new BehaviorSubject<number>(2);

    getComponentToRender() {
        return this.componentToRender.asObservable();
    }

    updateComponentToRender(componentNumber: number) {
        this.componentToRender.next(componentNumber);
    }
}
