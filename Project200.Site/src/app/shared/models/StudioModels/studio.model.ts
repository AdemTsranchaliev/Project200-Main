import { ServiceCategory } from "./service-category.model";
import { WorkingTime } from "./working-time.model";
import { Map } from "./map.model";

export class Studio {
    public id: string = '';
    public name: string = '';
    public address: string = '';
    public phones: string[] = [];
    public workingTime: WorkingTime[] = [];
    public description: string = '';
    public imageSources: string = '';
    public serviceCategory: ServiceCategory[] = [];
    public map: Map = new Map;
}