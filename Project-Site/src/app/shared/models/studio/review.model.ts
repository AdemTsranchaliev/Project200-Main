export class Review {
    public userName: string;
    public rating: number;
    public comment: string;
    public createdOn: Date;
    public image: string;
  
    constructor(userName?: string, rating?: number, comment?: string) {
      this.userName = userName;
      this.rating = rating;
      this.comment = comment;
    }
}