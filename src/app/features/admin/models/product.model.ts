import { IProductResponse } from "../interfaces/product.interface";

export class Product{
    _id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    image: string;
    expiration: string;
    quantity: string;
    category: string;
    status: string;
    /* unit: string;
    model: string;
    maker: string; */

    constructor(data?: IProductResponse ){
        this._id = data?._id ? data._id : '';
        this.sku = data?.sku ? data.sku : '';
        this.name = data?.name ? this.getNameUpperCase(data.name) : '';
        this.description = data?.description ? data.description : '';
        this.price = data?.price ? data.price : 0;
        this.image = data?.images ? data.images[0] : ''; //en la primera forma me trae todo el array y la segunda simplemente me trae la posicion 0.
        this.expiration = data?.expiration ? data.expiration : '';
        this.quantity = data?.quantity ? data.quantity : '';
        this.category = data?.category ? data.category : '';
        this.status = data?.status ? data.status : '';
        /* this.unit = data?.unit ? data.unit : '';
        this.model = data?.model ? data.model : '';
        this.maker = data?.maker ? data.maker : ''; */

        //this.image = data?.images ? `${environment.api}/${data.images[0]}` : '';forma de carga de imagenes cuando es con JSON Server
        console.log('data1', data?.images)
    }

    getNameUpperCase(name: string): string{
        return name.toUpperCase();
    }
}