import { IProductResponse } from "../interfaces/product.interface";

export class ProductDetail{
    _id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    //image: string;
    images: string[]; //Con arreglo
    quantity: number;

    constructor(data?: IProductResponse ){//recibe un objeto tipo IProductResponse pero el modelo solo capptura algunos
        this._id = data?._id ? data._id : '';
        this.sku = data?.sku ? data.sku : '';
        this.name = data?.name ? this.getNameUpperCase(data.name) : '';
        this.description = data?.description ? data.description : '';
        this.price = data?.price ? data.price :0;
        //this.image = data?.images ? data.images[0] : '';
        this.images = data?.images ? data.images : []; //con BD
        this.quantity = data?.quantity ? Number(data.quantity) :0;//? es para decir en caso de no existir haga lo sgt
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