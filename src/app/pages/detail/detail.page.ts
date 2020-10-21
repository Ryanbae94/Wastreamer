import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  streamer = null;
  number = 0;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const props = this.activatedRoute.snapshot.params;
    this.streamer = JSON.parse(props[this.number]);
    console.log(this.streamer);
    console.log(Object.keys(props).length);

  }

  alertMessageStart(){
    const alert = document.createElement('ion-alert');
    alert.message = '첫 번째 스트리머 입니다.';
    alert.buttons = ['OK'];
    document.body.append(alert);
    return alert.present();
  }

  alertMessageEnd(){
    const alert = document.createElement('ion-alert');
    alert.message = '마지막 스트리머 입니다.';
    alert.buttons = ['OK'];
    document.body.append(alert);
    return alert.present();
  }

  rightButton(){
    const props = this.activatedRoute.snapshot.params;
    if (this.number === Object.keys(props).length - 1){
      this.alertMessageEnd();
    } else{
      this.number = this.number + 1;
      this.streamer = JSON.parse(props[this.number]);
    }
  }

  leftButton(){
    const props = this.activatedRoute.snapshot.params;
    if (this.number === 0){
      this.alertMessageStart();
    } else{
      this.number = this.number - 1;
      this.streamer = JSON.parse(props[this.number]);
    }
  }

}
