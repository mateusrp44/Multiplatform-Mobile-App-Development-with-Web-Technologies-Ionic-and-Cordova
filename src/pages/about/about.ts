import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LeaderProvider } from '../../providers/leader/leader';
import { Leader } from '../../shared/leader';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  leaders: Leader[];
  errMess: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private leaderService: LeaderProvider,
    @Inject('BaseURL') private BaseURL) {}

    ngOnInit() {
      this.leaderService.getLeaders()
        .subscribe(leaders => this.leaders = leaders,
          errmess => this.errMess = <any>errmess);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
}
