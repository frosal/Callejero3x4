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
  /**
   * Metodo de consulta que devuelve todas las agrupaciones.
   * no implentado.
   * @returns AgrupCollection
   */
  leerAgrupss():Promise<firebase.firestore.QuerySnapshot>{
    return this.AgrupCollection.ref.get();
  }
/**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es comparsa
 * @returns AgrupCollection
 */
  leerAgrupsComparsa():Promise<any> {
    return this.AgrupCollection.ref.where("tipo","==","Comparsa").get();
  }
  /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es chirigota
 * @returns AgrupCollection
 */
  leerAgrupsChirigota():Promise<any> {
    return this.AgrupCollection.ref.where("tipo","==","Chirigota").get();
  }
  /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es coro
 * @returns AgrupCollection
 */
  leerAgrupsCoro():Promise<any> {
    return this.AgrupCollection.ref.where("tipo","==","Coro").get();
  }
  /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es cuarteta
 * @returns AgrupCollection
 */
  leerAgrupsCuarteta():Promise<any> {
    return this.AgrupCollection.ref.where("tipo","==","Cuarteta").get();
  }
  
  /**
 * Metodo de consulta a base de datos que devuelve los datos de una agrupacion
 * @returns AgrupCollection
 * @param id
 */

  oneAgrup(id) {
    return this.AgrupCollection.doc(id).get();
  }
  

  




}
