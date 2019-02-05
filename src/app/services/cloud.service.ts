import { Injectable, Injector } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CloudService {

  AgrupCollection: AngularFirestoreCollection<any>;


  lastAgrupLoaded = null;  
  lastlasAgrupLoaded = null; 
  scrollAgrupEnabled = true;  
  isConnected = true; 

  constructor(private fireStone: AngularFirestore) {

    this.AgrupCollection = fireStone.collection<any>(environment.firebaseConfig.AgrupCollection);
    

  }

  isInfinityScrollEnabled() {
    return this.scrollAgrupEnabled;
  }
  isRInfinityScrollEnabled() {
    return this.scrollAgrupEnabled;
  }

  //cargar agrupaciones.
  /*
  getAgrups(tipo,reload?): Promise<iAgrup[]> {
    if(reload){
      this.lastlasAgrupLoaded=null;
      this.scrollAgrupEnabled=true;
    }

    this.lastAgrupLoaded=this.lastlasAgrupLoaded;
    return new Promise((resolve,reject) => {
      let lreq: iAgrup[]=[];
      let query;
      if(this.lastAgrupLoaded==null){
        query= this.AgrupCollection.ref.where("tipo","==",tipo).orderBy("nombre","asc").limit(10).get();
      }else{
        query= this.AgrupCollection.ref.where("tipo","==",tipo).orderBy("nombre","asc").startAfter(this.lastAgrupLoaded).limit(10).get();
      }

     
      
    });
    

  }
  */
leerAgrupss(tipo){
return this.AgrupCollection.get();
}

  leerAgrupsComparsa() {
    return this.AgrupCollection.ref.where("tipo","==","Comparsa").get();
  }
  leerAgrupsChirigota() {
    return this.AgrupCollection.ref.where("tipo","==","Chirigota").get();
  }
  leerAgrupsCoro() {
    return this.AgrupCollection.ref.where("tipo","==","Coro").get();
  }
  leerAgrupsCuarteta() {
    return this.AgrupCollection.ref.where("tipo","==","Cuarteta").get();
  }
  
  

  oneAgrup(id) {
    return this.AgrupCollection.doc(id).get();
  }
  

  




}
