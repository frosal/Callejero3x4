import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonInfiniteScroll, NavController, ModalController, AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import{ModalPage} from '../modal/modal.page';
import { CloudService } from 'src/app/services/cloud.service';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  @ViewChild('dynamicList') dynamicList;
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
 

  
  
 // Slides
 SwipedTabsIndicator: any = null;
 tabs = ['selectTab(0)', 'selectTab(1)'];
 public category: any = '0';
 ntabs = 2;
 listaAgrupCom=[];
  listaAgrupComPanel=[];
  listaAgrupChi=[];
  listaAgrupChiPanel=[];
  listaAgrupCoro=[];
  listaAgrupCoroPanel=[];
  listaAgrupCuar=[];
  listaAgrupCuarPanel=[];
 style: any;
  

  constructor(private cloud: CloudService,
    public loadingController: LoadingController,
    private router: Router,
 
   public modalCont: ModalController,
  
    public actionSheetController: ActionSheetController){

    }

    ionViewDidEnter(){
      this.presentLoading('Cargando...');
      this.cloud.leerAgrupsComparsa()
      .then((misdatos)=>{
        this.listaAgrupCom=[];
        this.delete();

        misdatos.forEach((doc) => {
          this.listaAgrupCom.push({ id: doc.id, ...doc.data() });
        });
        this.listaAgrupComPanel = this.listaAgrupCom;
        this.loadingController.dismiss();

      });
      
      this.cloud.leerAgrupsChirigota()
      .then((miChiri)=>{
        this.listaAgrupChi=[];
        this.delete();
        miChiri.forEach((doc)=>{
          this.listaAgrupChi.push({id: doc.id, ...doc.data()});
        });
        this.listaAgrupChiPanel=this.listaAgrupChi;
        this.loadingController.dismiss();

      });
      this.cloud.leerAgrupsCoro()
      .then((miCoro)=>{
        this.listaAgrupCoro=[];
        this.delete();
        miCoro.forEach((doc)=>{
          this.listaAgrupCoro.push({id: doc.id, ...doc.data()});
        });
        this.listaAgrupCoroPanel=this.listaAgrupCoro;
        this.loadingController.dismiss();

      });
      this.cloud.leerAgrupsCuarteta()
      .then((miCuar)=>{
        this.listaAgrupCuar=[];
        this.delete();
        miCuar.forEach((doc)=>{
          this.listaAgrupCuar.push({id: doc.id, ...doc.data()});
        });
        this.listaAgrupCuarPanel=this.listaAgrupCuar;
        this.loadingController.dismiss();

      });

    }

    ngOnInit() {
      this.cloud.leerAgrupss;  //solo la primera vez, por fluidez no cargamos si navegamos por las tabs
    }
    

   

    


    async delete() { //para solucionar el tema de list-items-sliding con ngfor
      await this.dynamicList.closeSlidingItems();
    }

    async presentLoading(msg) {
      let myloading = await this.loadingController.create({
        message: msg
      });
      return await myloading.present();
    }

    
   
    

    async mostrarAgrup(key,nombre, director, origen, tipo, horario){
      const modal=await this.modalCont.create({
component: ModalPage,
componentProps:{
  key:key,
  nombre: nombre,
  director: director,
origen: origen,
tipo: tipo,
horario:horario

}
      });
      
      
      

      return await modal.present();
    }
    

    updateCat(cat: Promise<any>){
      cat.then(dat =>{
        this.category=dat;
        this.category= +this.category;

      })
    }

  

  
}
