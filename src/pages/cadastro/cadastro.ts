import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public nome:any
  public email:any
  public listaContato = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }


  cadastrar(){
    this.storage.getContatos('lista').then(lista=>{
     if(lista){
       lista.push({id:Math.random(),nome:this.nome,email: this.email})
       this.storage.setContato(lista)
       this.navCtrl.pop()
     }else{
       this.listaContato.push({id:Math.random(),nome:this.nome,email: this.email})
       this.storage.setContato(this.listaContato)
       this.navCtrl.pop()
     }
      
    })
  }

}
