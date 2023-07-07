export class Foods{
    //data which we need
    id!:number;
    //you need to defineconstructor if you add a datatype, to avoid this "!" is used in angular
    price!:number;
    name!:string;
    favourite!:boolean;
    star:number=0; //when we define a value of something , you can remove the "!"
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string;

}