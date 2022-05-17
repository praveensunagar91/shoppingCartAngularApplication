import { Ratings } from "./ratings";
export class Product{
  public constructor(
    public category : string,
    public description : string,
    public id : string,
    public image : string,
    public price : string,
    public rating : Ratings,
    public title : string
  ){}
}
