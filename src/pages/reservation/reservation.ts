import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  reservation: FormGroup;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder) {
      this.reservation = this.formBuilder.group({
        guests: 3,
        smoking: false,
        dateTime: ['', Validators.required],
      });
  }

  onSubmit() {
    console.log(this.reservation.value);
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }
}
