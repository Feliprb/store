import { environment } from "src/environments/environment";
import { IProductResponse } from "../interfaces/product.interface";

export class Product{
    _id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    image: string;

    constructor(data?: IProductResponse ){
        this._id = data?._id ? data._id : '';
        this.sku = data?.sku ? data.sku : '';
        this.name = data?.name ? this.getNameUpperCase(data.name) : '';
        this.description = data?.description ? data.description : '';
        this.price = data?.price ? data.price : 0;
        this.image = data?.images ? data.images[0] : ''; //en la primera forma me trae todo el array y la segunda simplemente me trae la posicion 0.

        //this.image = data?.images ? `${environment.api}/${data.images[0]}` : '';forma de carga de imagenes cuando es con JSON Server
        console.log('data1', data?.images)
    }

    getNameUpperCase(name: string): string{
        return name.toUpperCase();
    }
}

// es una opción para implementar
/* export class Product implements IProductResponse{
    images: string[];
    _id: string;
    sku: string;
    name: string;
    description: string;
    unit: string;
    expiration: string;
    model: string;
    quantity: string;
    price: number;
    category: string;
    status: string;
} */