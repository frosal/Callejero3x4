import { Component, OnInit } from '@angular/core';
import{ModalController, LoadingController, NavParams} from '@ionic/angular';
import{CloudService} from '../services/cloud.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  myloading: any;
  nombre: any;
  listado = [];
  listadoPanel = [];
  key:any;
  tipo:any;
  origen:any;
  horario=[];
  director:any;

  constructor(
    public modalCon: ModalController,
    public cloud: CloudService,
    private router: Router,
    public loadingContr: LoadingController,
    private navPar: NavParams
  ) {
    this.nombre=this.navPar.get('nombre');
    this.key=this.navPar.get('key');
    this.origen=this.navPar.get('origen');
    this.tipo=this.navPar.get('tipo');
    this.director=this.navPar.get('director');
    this.horario=this.navPar.get('horario');
   }

  ngOnInit() {
    
  }

 

 


  async presentLoading() {
    this.myloading = await this.loadingContr.create({
      message: 'Espere...'
    });
    return await this.myloading.present();

    
    
  }

  cerrar(){
this.modalCon.dismiss();
  }

}
