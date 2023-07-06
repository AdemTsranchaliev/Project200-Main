import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-chips",
  templateUrl: "./chips.component.html",
  styleUrls: ["./chips.component.css"],
})
export class ChipsComponent {
  @ViewChild("itemInput") itemInput: any;

  @Input() allItems: string[] = [];
  @Input() label: string = "";
  @Input() addLabel: string = "";
  @Input() isRequired: boolean = false;
  @Output() itemsChangeEvent: EventEmitter<string[]> = new EventEmitter();

  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public itemCtrl = new FormControl("");
  public filteredItems: Observable<string[]>;
  public items: string[] = [];

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) =>
        item ? this._filter(item) : this.allItems.slice()
      )
    );
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    if (value) {
      this.items.push(value);
    }

    this.itemsChangeEvent.emit(this.items);
    // Clear the input value
    event.chipInput!.clear();

    this.itemCtrl.setValue(null);
  }

  public remove(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.itemsChangeEvent.emit(this.items);
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    this.itemsChangeEvent.emit(this.items);
    this.itemInput.nativeElement.value = "";
    this.itemCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allItems.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }
}
