
import { WastreamerService } from './services/wastreamer.service';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [ // 메인페이지 navbar에 보여질 페이지들을 설정해줬습니다. 각각 HOME탭 정보탭 그리고 스트리머 신청하기 탭 입니다.
    {
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Information',
      url: '/information',
      icon: 'information'
    },
    {
      title: 'Enroll-streamer',
      url: '/enroll-streamer',
      icon: 'add'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private wsService: WastreamerService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.wsService.initialize();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
