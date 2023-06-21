export class CampoEnum
{
    nome: string;
    valor: string;
    observacao:string;    
    constructor(nome?:string, valor?:string,observacao?:string)
    {
        this.nome = nome || '';
        this.valor = valor || '';
        this.observacao = observacao || '';
    }
}