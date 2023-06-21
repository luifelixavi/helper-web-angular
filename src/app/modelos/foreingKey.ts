export class ForeingKey 
{
    nome:string;
    referencia:string;
    relacionamento:number;
    
    constructor(nome?:string,referencia?:string,relacionamento?:number)
    {
        this.nome = nome || '';
        this.referencia = referencia || '';
        this.relacionamento = relacionamento || 0;
    }
}