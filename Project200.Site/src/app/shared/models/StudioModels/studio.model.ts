import { ServiceCategory } from "./service-category.model";
import { WorkingTime } from "./working-time.model";
import { Map } from "./map.model";
import { Review } from "./review.model";
import { Contacts } from "./contacts.model";

export class Studio {
    public id: string = '';
    public name: string = '';
    public address: string = '';
    public contacts: Contacts = new Contacts;
    public workingTime: WorkingTime[] = [];
    public description: string = '';
    public imageSources: string[] = [];
    public serviceCategory: ServiceCategory[] = [];
    public map: Map = new Map;
    public reviews: Review[] = [];
}