import { Address } from './address.model';
import { Coordinates } from './coordinates.model';
import { Service } from './service.model';
import { WorkingTime } from './working-time.model';
import { Review } from './review.model';

export class Studio {
  public id: string = '';
  public tags: string[] = [];
  public phone: string = '';
  public facebookUrl: string = '';
  public instagramUrl: string = '';
  public email: string = '';
  public name: string = '';
  public description: string = '';
  public motto: string = '';

  public address: Address = new Address();
  public coordinates: Coordinates;
  public workingTime: WorkingTime[] = [];
  public images: string[] = [];
  public services: Service[] = [];
  public reviews: Review[] = [];
}
