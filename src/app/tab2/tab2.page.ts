import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonInfiniteScroll, NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalComponent }from '../modal/modal.component';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  @ViewChild('dynamicList') dynamicList;
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;

  listaAgrup=[];
  listaAgrupPanel=[];
  listaComp=[];
  listaCompPanel=[];
  listaChi=[];
  listaChiPanel=[];
  listaCoro=[];
  listaCoroPanel=[];
  listaCuar=[];
  listaCuarPanel=[];

  public category: any = "0";
  SwipedTabsIndicator: any = null;
  tabs = ["selectTab(0)", "selectTab(1)"];
  ntabs = 2;

  constructor(private cloud: CloudService,
    public loadingController: LoadingController,
    private router: Router,
    public alertCtrl: AlertController,
    public modalCont: ModalController,
    public navCont: NavController){

    }

    ionViewDidEnter(){
      
      

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

    doRefreshCom(refresher) {
      this.cloud.leerAgrupsComparsa()
        .then(querySnapshot => {
          this.listaComp = [];
          this.delete(); /* Es un hack para solucionar un bug con el refresher y las listas
  dinámicas (ngFor) */
          querySnapshot.forEach((doc) => {
            this.listaComp.push({ id: doc.id, ...doc.data() });
          });
          this.listaCompPanel = this.listaComp;
          refresher.target.complete();
        });
        
    }
    doRefreshCuar(refresher) {
      this.cloud.leerAgrupsCuarteta()
        .then(querySnapshot => {
          this.listaCuar = [];
          this.delete(); /* Es un hack para solucionar un bug con el refresher y las listas
  dinámicas (ngFor) */
          querySnapshot.forEach((doc) => {
            this.listaCuar.push({ id: doc.id, ...doc.data() });
          });
          this.listaCuarPanel = this.listaCuar;
          refresher.target.complete();
        });
    }
    doRefreshChi(refresher) {
      this.cloud.leerAgrupsChirigota()
        .then(querySnapshot => {
          this.listaChi = [];
          this.delete(); /* Es un hack para solucionar un bug con el refresher y las listas
  dinámicas (ngFor) */
          querySnapshot.forEach((doc) => {
            this.listaChi.push({ id: doc.id, ...doc.data() });
          });
          this.listaChiPanel = this.listaChi;
          refresher.target.complete();
        });
    }
    doRefreshCoro(refresher) {
      this.cloud.leerAgrupsCoro()
        .then(querySnapshot => {
          this.listaCoro = [];
          this.delete(); /* Es un hack para solucionar un bug con el refresher y las listas
  dinámicas (ngFor) */
          querySnapshot.forEach((doc) => {
            this.listaCoro.push({ id: doc.id, ...doc.data() });
          });
          this.listaCoroPanel = this.listaCoro;
          refresher.target.complete();
        });
    }

    async mostrarAgrup(key,nombre,director,origen,horario){
      const modal=await this.modalCont.create({
component: ModalComponent,
componentProps:{
  key:key,
  nombre:nombre,
  director:director,
  origen:origen,
  horario: horario
}
      });
      modal.onDidDismiss()
      .then(response =>{
        this.ionViewDidEnter()
      })
      .catch(error=>{
        console.log(error)
      });

      return await modal.present();
    }

  

  
}
