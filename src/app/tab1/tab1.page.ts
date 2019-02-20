import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('map') mapContainer: ElementRef;
  map:Map;
  constructor(public navCtrl: NavController) {
 
  }
  /**
   * Metodo que se implementa al iniciar la ventana.
   * Dentro llama al metodo loadmap().
   */
 
  ionViewDidEnter() {
    this.loadmap();
  }

  /**
   * Metodo que carga un mapa con unas coordenadas predifinidas.
   */
 
  loadmap() {
    
   
    this.map = new Map("map").setView([ 37.8915500,-4.7727500],
      12);
    
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);

    marker([ 37.8915500,-4.7727500],{draggable: true}).addTo(this.map);

    
    
  }
}
