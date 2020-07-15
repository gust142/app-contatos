import { Component } from '@angular/core';
import { NavController, ActionSheet, ActionSheetOptions, ActionSheetController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lista = []
  constructor(public navCtrl: NavController,public storage:StorageProvider, public actionSheetController: ActionSheetController ) {

  }
  tela_cadastro(){
    this.navCtrl.push(CadastroPage)
  }
  ionViewDidEnter(){
    this.storage.getContatos('lista').then(lista=>{
      this.lista = lista
      
    })
  }
  async action(){
    const actionSheet = await this.actionSheetController.create({
      
      buttons: [ {
        text: 'Ligar',
        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Editar',
        
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Excluir',
        role: 'destructive',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
