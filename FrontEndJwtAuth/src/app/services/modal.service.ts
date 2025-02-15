import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal:boolean=false;
  constructor() { }

  private _notificarUpload=new EventEmitter();

  get notificarUpload():EventEmitter<any>{
    return this._notificarUpload;
  }
  abrirModal(){ this.modal=true;}
  cerrarModal(){ this.modal=false;}
}
