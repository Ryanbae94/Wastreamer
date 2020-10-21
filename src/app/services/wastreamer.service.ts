import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WastreamerService {

  public streamers: any; // streamer들 받아오기위해서 선언해줬읍니다.
  public boystreamers: any;

  baseUrl = 'https://wa-streamer.firebaseio.com/'; // 우리 파이어베이스 주소입니다.

  constructor(private http: HttpClient) { }// http API 를 사용하게 해 주는 모듈입니다. 파이어베이스 사용을 위해 HttpClient를 사용하였습니다.

  initialize() { // 서비스가 시작될 때, getStreamers()함수를 실행시키고 그 함수의 리턴값들을 데이터에 넣어줍니다.
    this.getStreamers()
    .then(data => this.streamers = data);

    this.getBoyStreamers()
    .then(data => this.boystreamers = data);
  }

  getStreamers() {  // 우리 기본주소 에서 Regions라고 네이밍 되어있는 제이슨 데이터를 가져옵니다.
    let requestUrl = `${this.baseUrl}/Regions.json`;
    return this.http.get(requestUrl).toPromise(); 
  }

  getBoyStreamers() {
    let requerstUrl = `${this.baseUrl}/Boys.json`;
    return this.http.get(requerstUrl).toPromise();
  }
}
