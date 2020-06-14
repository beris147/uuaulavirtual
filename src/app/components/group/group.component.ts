import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { S2BootstrapColumnsModel } from 'src/app/form-component/models/s2-bootstrap-columns.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { S2InputForm } from 'src/app/form-component/models/s2-input-form.model';
import { S2FormField } from 'src/app/form-component/models/s2-form-field.model';
import { S2FormGroupItemModel } from 'src/app/form-component/models/s2-form-group-item.model';
import { S2FormGroupModel } from 'src/app/form-component/models/s2-form-group.model';
import { S2ButtonModel } from 'src/app/form-component/models/s2-button.model';
import { S2SettingsFormGeneratorModel } from 'src/app/form-component/models/s2-settings-form-generator.model';
import { S2TableFormModel } from 'src/app/form-component/models/s2-table-form.model';
import { HeadersFormModel } from 'src/app/form-component/models/s2-headers-form.model';
import { Session } from 'protractor';
import { SessionService } from 'src/app/services/session.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group =[{
    _foto:"https://img.icons8.com/plasticine/2x/classroom.png",
    _nombre:"Grupo A",
    _cuerpo:" Ingeniera en Sistemas Octavo semestre grupo A",
    _id:1,
  },
  {
    _foto:"../../../assets/students.png",
    _nombre:"Grupo B",
    _cuerpo:" Ingeniera en Sistemas Octavo semestre grupo B",
    _id:2,
  },
  {
    _foto:"../../../assets/students.png",
    _nombre:"Grupo C",
    _cuerpo:" Ingeniera en Sistemas Octavo semestre grupo C",
    _id:3,
  },
  {
    _foto:"../../../assets/students.png",
    _nombre:"Grupo B",
    _cuerpo:" Ingeniera en Sistemas Octavo semestre grupo B",
    _id:4,
  },
  {
    _foto:"../../../assets/students.png",
    _nombre:"Grupo C",
    _cuerpo:" Ingeniera en Sistemas Octavo semestre grupo C",
    _id:5,
  },
  
]
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private groupService:GroupService
  ) { 
  }

  ngOnInit(): void {
    this.subscribeSession()
    this.getGroups()
  }

  getGroups():void{
    this.groupService.getAll().toPromise()
    .then((res:any)=>{
      this.group = res.item
    })
    .catch((rej)=>{

    })
  }

  subscribeSession():void{
    this.sessionService._session.subscribe(data =>{
      console.log(data)
    })
  }

  selectGroup(group: any):void{
    this.router.navigate([ '/class', group._id  ]);
  }

  editGroup(group: any):void{
    this.router.navigate([ '/edit-group', group._id]);
  }

  /*formulario*/

  headersTable = [
    {
      _title: "Numero de folio",
      _columName: "_idVenta",
      _filter: false
    } as HeadersFormModel,
    {
      _title: "Numero ",
      _columName: "_nombre",
      _filter: true
    } as HeadersFormModel,
 ]
  

 arrayAux = [
   {
  _idVenta:1,
  _nombre:"hola"
 },
 {
  _idVenta:2,
  _nombre:"hola"
 },
]

 
 inputColumns: S2BootstrapColumnsModel = { _lg: 12, _xl: 12, _md: 12, _xs: 12, _sm: 12 } as S2BootstrapColumnsModel;

  formGroup_newUserType: FormGroup = new FormGroup({
    _nombre: new FormControl(null, Validators.required),
    _idVenta:new FormControl(null, Validators.required),
    _descripcion: new FormControl(null, Validators.required),
  
  });

  settings_form = {
    _formGroup: this.formGroup_newUserType,
    _id: 'form-new-group',
    _groups: [
      {
        _nameAs: 'new-group',
        _items: [
          {
            _control: 'name',
            _config: {
              _id: 'name',
              _type: 'text',
              _input: {
                _label: 'Nombre',
                _placeholder: 'Ingresa un nombre',
                _columns: this.inputColumns
              } as S2InputForm
            } as S2FormField
          } as S2FormGroupItemModel,
          {
            _control: 'scholarship',
            _config: {
              _id: 'scholarship',
              _type: 'text',
              _input: {
                _label: 'Escolaridad',
                _placeholder: 'Ingrese la escolaridad',
                _columns: this.inputColumns
              } as S2InputForm
            } as S2FormField
          } as S2FormGroupItemModel,
          {
            _control: 'grade',
            _config: {
              _id: 'grade',
              _type: 'text',
              _input: {
                _label: 'Grado',
                _placeholder: 'Ingrese el grado',
                _columns: this.inputColumns
              } as S2InputForm
            } as S2FormField
          } as S2FormGroupItemModel,
        
        ],

      } as S2FormGroupModel,
     
      
    ],
    
    _saveButton: {
      _text: 'Guardar',
      _resetOnSuccess: true,
      _validToSend: true
    } as S2ButtonModel
  } as S2SettingsFormGeneratorModel

 


  
  fnOnSend(event) {
    console.log(event)
  }


  fnNewGroup(){
    this.router.navigate(['/new-group']);
    
  }
  

}
