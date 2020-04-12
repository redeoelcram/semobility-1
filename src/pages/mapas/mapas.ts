import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';


declare var google: any;
/**
 * Generated class for the MapasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapas',
  templateUrl: 'mapas.html',
})
export default class MapasPage {
   map: any;
   markers: any;

   estabelecimentos = [{
     nome:'CasaEDER',
     lat:  -15.817585,
     lng: -47.9973486
   },{
     nome:'SEMOB',
     lat: -15.7769251,
     lng: -47.9412619
   }]
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public geolocation: Geolocation, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapasPage');
  }

  ionViewWillEnter(){
    this.platform.ready().then(() =>{
      this.initPage();
    })
  }

    initPage(){
      this.geolocation.getCurrentPosition().then(result => {
        this.loadMap(result.coords.latitude, result.coords.longitude);

      })
    
    }

    loadMap(lat, lng){
      let latlng = new google.maps.latlng(lat, lng);
      
    }
 

}
