import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { HelperService } from 'src/app/services/helpers/helper.service';
import { LocationControllerService } from 'src/app/services/pages/location-controller.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss'],
})
export class AddTripComponent implements OnInit {

  frmData = {
    title: "",
    descriptions: "",
  }
  constructor(public helper: HelperService, 
    private location:LocationControllerService,
    private http: HttpClient) {
    this.loadCountries();
  }
  countries: any;
  ngOnInit() { }

  loadCountries() {
    // this.http.get('assets/jsons/all_states.json').subscribe(data => {
    //   this.countries = data;

    //   console.log(this.countries);
    // });
  }

  onSubmit() {

  }

  selectedFile: File | null = null;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.selectedFile = file;
  }


  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt // Camera, Photos or Prompt!
    });

    if (image) {
      console.log(image);
    }
  }

  //////Adress 
  isAddingAddress = false;

  addressAll = {
    country:0,
    state:0,
    city:0,
    address1:"",
    address2:"",
    title:"",
    lat:0.00,
    lng:0.00,

    labels:{
      country:"",
      city:"",
      state:"",
    }
  }
  async getCOuntries(){
    this.listTypeModal = 1;
    this.isOpenListModel = true;
    this.showListItems = [];
    this.loadingList = true;
    this.showListItems  = await this.location.getAllCountries();
    this.loadingList = false;;
  }

  async getStates(){
    this.listTypeModal = 2;
    this.isOpenListModel = true;
    this.showListItems = [];
    this.loadingList = true;
    this.showListItems  = await this.location.getAllStates(this.selectCountry.id);
    this.loadingList = false;;
  }

  selectCountry = {id:0,name:""}
  selectFromList(item:any){
    this.selectCountry = item;
    this.isOpenListModel = true;
  }
  changeSearch(ev:any){

  }

  // /List Modal

  isOpenListModel = false;
  listTypeTitle =  "";
  listTypeModal = 0;
  selectedItemFromList:any;
  showListItems:any=[];
  loadingList = false;

}
