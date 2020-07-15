
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  public lista: any
  constructor(public storage:Storage) {
    
  }
  
    getContatos(nome:string){
      let promise = this.storage.get(nome)
      return promise
    }
  
    setContato(contato){
        this.storage.set('lista',contato)
    }
}
