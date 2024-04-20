import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { HelperService } from 'src/app/services/helpers/helper.service';

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
  constructor(public helper: HelperService, private http: HttpClient) {
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

}
