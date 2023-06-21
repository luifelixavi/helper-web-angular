import { ForeingKey } from "./foreingKey";

export class CampoModel 
{
    nome: string;
    tipo: string;
    tamanho: number;
    foreingKey: ForeingKey;  
    required:boolean;
    observacao:string;    
    constructor(nome?:string, tipo?:string,tamanho?:number,foreingKey?:ForeingKey,required?:boolean,observacao?:string)
    {
        this.nome = nome || '';
        this.tipo = tipo || '';
        this.tamanho = tamanho || 0;
        this.foreingKey = foreingKey || new ForeingKey();
        this.required = required || false;
        this.observacao = observacao || '';
    }
}