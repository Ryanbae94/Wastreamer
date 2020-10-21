import { Component, OnInit } from '@angular/core';
import { WastreamerService } from 'src/app/services/wastreamer.service';
import { from } from 'rxjs';
import _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  streamers: any; // 스트리머 목록을 초기화 해줍니다.

  constructor(private wsService: WastreamerService, private route: Router) { } // 서비스를 이용하기 위해 이용할 서비스를 wsService로 가져옵니다.

  ngOnInit() {
  
  }

  searchboyclicked() {
    this.route.navigate(['search-boy']);
  }

  searchgirlclicked() {
    this.route.navigate(['search']);
  }


  search(ev) {
    
    let searchText = ev.detail.value; // 이벤트가 발생 되었을 때 serchBar안에 내용을 가져와서 searchText안에 넣어줍니다.

    this.streamers= _.filter(this.wsService.streamers); // 검색기능은 필터함수를 이용해서 구현했습니다. lodash를 사용했는데 이는 자바스크립트 라이브러리입니다.

    if (searchText != '') { // user가 뭔가를 입력했을 때 해당 입력과 일치하는 스트리머가 있다면 스트리머스에 넣어주는 역할을 하고있는 함수입니다.
      this.streamers  =this.streamers.filter((streamer) => {
        return (streamer.Name.toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1);
      });
    }

    else { // 검색을 아무것도 하지 않았을때는 스트리머 목록을 화면에 표시하지 않기 위해서 null값으로 주었습니다.
      this.streamers = null;
    }


  }

}
