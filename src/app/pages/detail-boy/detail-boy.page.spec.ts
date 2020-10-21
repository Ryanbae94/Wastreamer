import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailBoyPage } from './detail-boy.page';

describe('DetailBoyPage', () => {
  let component: DetailBoyPage;
  let fixture: ComponentFixture<DetailBoyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBoyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailBoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
