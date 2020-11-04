import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core'; 
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
    @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;  
    private sub: any;
    getAddress: any;
    lat: any;
    lng: any;
    latitude: any;
    longitude: any;
    zoom: any;
    constructor(private slimLoader: SlimLoadingBarService, private router: Router, private apiloader: MapsAPILoader) {
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.slimLoader.start();
            } else if (event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError) {
                // this.slimLoader.complete();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }
    ngOnInit()  
  {  
    this.get()  
    this.agmMap.triggerResize(true);  
     this.zoom = 16;  
    } 
    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }
    get() {  
        if (navigator.geolocation) {  
            navigator.geolocation.getCurrentPosition((position: Position) => {  
                if (position) {  
                    this.lat = position.coords.latitude;  
                    this.lng = position.coords.longitude;  
                    this.getAddress = (this.lat, this.lng)  
                    console.log(position)  
                    this.apiloader.load().then(() => {  
                        let geocoder = new google.maps.Geocoder;  
                        let latlng = {  
                            lat: this.lat,  
                            lng: this.lng  
                        };  
                        geocoder.geocode({  
                            'location': latlng  
                        }, function(results) {  
                            if (results[0]) {  
                                this.currentLocation = results[0].formatted_address;  
                                console.log(this.assgin);  
                            } else {  
                                console.log('Not found');  
                            }  
                        });  
                    });  
                }  
            })  
        }  
    }   
    mapClicked($event: MouseEvent) {  
        this.latitude = $event.coords.lat,  
            this.longitude = $event.coords.lng  
        this.apiloader.load().then(() => {  
            let geocoder = new google.maps.Geocoder;  
            let latlng = {  
                lat: this.latitude,  
                lng: this.longitude  
            };  
            geocoder.geocode({  
                'location': latlng  
            }, function(results) {  
                if (results[0]) {  
                    this.currentLocation = results[0].formatted_address;  
                    console.log(this.currentLocation);  
                } else {  
                    console.log('Not found');  
                }  
            });  
        });  
    } 
}
