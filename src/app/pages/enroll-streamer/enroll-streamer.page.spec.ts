import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollStreamerPage } from './enroll-streamer.page';

describe('EnrollStreamerPage', () => {
  let component: EnrollStreamerPage;
  let fixture: ComponentFixture<EnrollStreamerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollStreamerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollStreamerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
