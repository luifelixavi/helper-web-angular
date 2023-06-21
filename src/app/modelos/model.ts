import { AggregateRoot } from "./aggregateRoot";
import { CampoModel } from "./campoModel";

export class Model 
{
    name: string;
    observacao: string;
    aggregateRoot: AggregateRoot;
    campos: CampoModel[];
    
    constructor(name?:string, observacao?:string,aggregateRoot?:AggregateRoot, campos?:CampoModel[])
    {
        this.name = name || '';
        this.observacao = observacao || '';
        this.aggregateRoot = aggregateRoot || new AggregateRoot;
        this.campos = campos || [];
    }
}