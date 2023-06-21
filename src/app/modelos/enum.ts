import { CampoEnum } from "./campoEnum";

export class Enum 
{
    name: string;
    tipo: string;
    observacao: string;
    campos: CampoEnum[];      

    constructor(name?:string,tipo?:string,observacao?:string, campos?:CampoEnum[])
    {
        this.name = name || '';
        this.tipo = tipo || '';
        this.observacao = observacao || '';
        this.campos = campos || [];
    }
}