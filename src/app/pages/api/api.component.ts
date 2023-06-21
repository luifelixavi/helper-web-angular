import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Api } from 'src/app/modelos/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent 
{
  public form: FormGroup;
  showForeignKey = false;
  constructor
  (
    private formBuilder: FormBuilder,
  )
  {
    this.form = this.createForm(new Api());
  }

  salvar()
  {
    console.log(this.form.getRawValue());
  }

  createForm(objeto:any) 
  {
    return this.formBuilder.group({
      name: [objeto.nome || ''],
      local: [objeto.local || ''],
      tipoBaseDados: [objeto.tipoBaseDados || 0],
      models: this.formBuilder.array([]),
      enums: this.formBuilder.array([]),
    });
  }

  pegarModelsForm()
  {
    var retorno = this.form.get('models') as FormArray;
    return retorno.controls;
  }

  pegarCamposForm(index:number)
  {
    var models = this.form.get('models') as FormArray;
    var model = models.at(index);
    var campos = model.get('campos') as FormArray;
    return campos.controls;
  }



  newModel()
  {
    let models = this.form.get('models') as FormArray;
    models.push(
      this.formBuilder.group({
        name:[''],
        observacao:[''],
        aggregateRoot: this.formBuilder.group({
          nomeRota: ['']
        }),
        campos: this.formBuilder.array([]),
    }));
  }

  newCampo(index:number)
  {
    var models = this.form.get('models') as FormArray;
    var model = models.at(index);
    let campos = model.get('campos') as FormArray;
    campos.push(this.formBuilder.group({
      nome:'',
      tipo:'',
      tamanho:0,
      required:false,
      observacao:''
    }));
  }
  
  addForeingKey(i:number,c:number)
  {
    var models = this.form.get('models') as FormArray;
    var model = models.at(i);
    let campos = model.get('campos') as FormArray;
    var campo = campos.at(c) as FormGroup;
    campo.addControl('foreingKey', 
    this.formBuilder.group({
      nome:[''],
      referencia:[''],
      relacionamento:[0],
    }));
  }

  returnForeignKey(c:any)
  {
    var retorno = false;
    if(c)
    {
      retorno = true;
    }
    return retorno;
  }

  removeForeingKey(i:number,c:number)
  {
    
    var models = this.form.get('models') as FormArray;
    var model = models.at(i);
    let campos = model.get('campos') as FormArray;
    var campo = campos.at(c) as FormGroup;
    campo.removeControl('foreingKey');
    this.showForeignKey = false;
  }

  removeCampo(i:number, c:number) {
    var models = this.form.get('models') as FormArray;
    var model = models.at(i);
    let campos = model.get('campos') as FormArray;
    campos.removeAt(i);
  }

  removeModel(i:number) {
    let models = this.form.get('models') as FormArray;
    models.removeAt(i);
  }
}
