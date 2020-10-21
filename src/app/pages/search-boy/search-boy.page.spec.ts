import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBoyPage } from './search-boy.page';

describe('SearchBoyPage', () => {
  let component: SearchBoyPage;
  let fixture: ComponentFixture<SearchBoyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
