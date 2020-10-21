import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendBoyPage } from './recommend-boy.page';

describe('RecommendBoyPage', () => {
  let component: RecommendBoyPage;
  let fixture: ComponentFixture<RecommendBoyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendBoyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendBoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
