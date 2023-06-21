import { Enum } from "./enum";
import { Model } from "./model";

export class Api {
    name: string;
    local: string;
    tipoBaseDados: number;
    models: Model[];
    enums: Enum[];
  
    constructor(name?:string,local?:string,tipoBaseDados?:number,models?:Model[],enums?:Enum[]) {
        this.name = name || "";
        this.local = local || "";
        this.tipoBaseDados = tipoBaseDados || 0;
        this.models = models || [];
        this.enums = enums || [];
    }

}