import { Component, OnInit } from '@angular/core';
import{ModalController, LoadingController, NavParams} from '@ionic/angular';
import{CloudService} from '../services/cloud.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
/**
 * 
 */
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
/**
 * Contructor de modal page, pasa por parametros los modulos necesarios
 * @param modalCon 
 * @param cloud 
 * @param router 
 * @param loadingContr 
 * @param navPar 
 */
  constructor(
    public modalCon: ModalController,
    public cloud: CloudService,
    private router: Router,
    public loadingContr: LoadingController,
    private navPar: NavParams
  ) 
  /**
   *  Valores que se recogen del item seleccionado.
   * */
  {
    this.nombre=this.navPar.get('nombre');
    this.key=this.navPar.get('key');
    this.origen=this.navPar.get('origen');
    this.tipo=this.navPar.get('tipo');
    this.director=this.navPar.get('director');
    this.horario=this.navPar.get('horario');
   }

  ngOnInit() {
    
  }

 

 /**
  * metodo asincrono que muestra un loading.
  * @returns loading con mensaje.
  */


  async presentLoading() {
    this.myloading = await this.loadingContr.create({
      message: 'Espere...'
    });
    return await this.myloading.present();

    
    
  }

  /**
   * Metodo que cierra el modal.
   */

  cerrar(){
this.modalCon.dismiss();
  }

}
