import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WastreamerService } from 'src/app/services/wastreamer.service';
import _ from 'lodash';
import { AnimationController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { shuffle } from '../../../utils/suffle'

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.page.html',
  styleUrls: ['./recommend.page.scss'],
})
export class RecommendPage implements OnInit {

  streamerTags = [];
  //기준이 되는 스트리머 태그를 담는 배열

  points = [];
  // {point:9, streamer:<스트리머 오브젝트>} 형태로 들어가는 포인트와 스트리머들

  streamer: any;
  // 검색된 기준이 되는 스트리머

  allStreamers: any;
  // 모든 스트리머를 가져온다


  constructor(private wsService: WastreamerService, private activatedRoute: ActivatedRoute, private animationCtrl : AnimationController, public loadingController: LoadingController) {
  } // 파이썬으로 치면 init이랑 비슷한 느낌

  ngOnInit() {
    //유사도 (Recommend)페이지가 열릴 때 마다 밑에가 실행된다

    this.allStreamers = this.wsService.streamers;
    this.streamer = this.activatedRoute.snapshot.params;
    this.streamerTags = this.streamer.Tag.split(',');
    shuffle(this.allStreamers);

    for(let z in this.allStreamers){
      this.points.push({'point': 0, 'streamer': this.allStreamers[z]})
    }
    // 먼저 point라는 배열에 모든 스트리머 점수를 0으로 초기화 해주고, 스트리머 객체를 넣어줍니다.

    for(let i in this.streamerTags){
      let tmp = this.streamerTags[i]
      // tmp에는 Tag하나의 값이 들어가 있습니다. 만약 같다면 포인트를 1점씩 올려주는 식으로 구성했습니다. game, sexy, 등등 
   
      for (let j in this.allStreamers){
        if (this.allStreamers[j].Name == this.streamer.Name){
          this.points[j].point += 1
        }
      // 선택된 스트리머와 비교하는 전체 스트리머군 안에 들어있는 같은 스트리머는 점수를 tag수만큼 더 주는 행위를 추가하여 for루프를 다 돌렸을때 확실하게 가장 앞에 오도록 구성했습니다. 
      // 이후 html로 화면에 나올 때 중간에 있는 '선택된 스트리머'를 배열 [0]으로 불러오게 구성했습니다.
        for (let k in this.allStreamers[j].Tag){
          if (this.allStreamers[j].Tag[k] == tmp){
              this.points[j].point += 1
          }
        }
      }
    }
    this.points = _.sortBy(this.points, 'point').reverse();
    // 위에서 넣어준 점수들을 내림차순으로 정렬해 반환했습니다.
  }


  getTop6(){
    let jsonData = [];
    for (let i in this.points){
      jsonData.push(JSON.stringify(this.points[i].streamer))
    }
    return ['/detail', jsonData]
  }

  getRefresh(){
    let ls = this.points.slice(1, 7)
    this.points = this.points.concat(ls)
    this.points.splice(1, 6)
  }
  // 앞에 6명을 빼주는 역할

  refresh(){
    this.getRefresh()
    this.presentLoading()
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: "더 많은 스트리머를 찾고 있습니다!",
      duration: 2000
    });
    await loading.present();


  }

}
