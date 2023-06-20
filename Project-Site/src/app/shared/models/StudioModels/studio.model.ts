import { ServiceCategory } from "./service-category.model";
import { WorkingTime } from "./working-time.model";
import { Map } from "./map.model";
import { Service } from "./service.model";

export class Studio {
    public id: string = '';
    public tags: string[] = ["test","te"];
    public phone: string = '';
    public facebook: string = '';
    public name: string = '';
    public address: string = '';
    public area: string = '';
    public town: string = '';
    public postalCode: string = '';
    public email: string = '';
    public description: string = '';
    public motto: string = '';
    public workingTime: WorkingTime[] = [];
    public services: Service[] = [];
    public imageSources: string[] = [];
    public map: Map;
}