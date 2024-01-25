//tipos de interfaces que se pueden manejar para le servicio
/* export interface ITokenResponse{
    message:string;
    code:number;
    error:boolean;
    //data : Object;
    data : IToken[]
}

export interface IToken{
    name:string;
    lastname: string;
} */
export interface IToken{
    token: string;
}
