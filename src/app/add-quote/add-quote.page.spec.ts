import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddQuotePage } from './add-quote.page';

describe('AddQuotePage', () => {
  let component: AddQuotePage;
  let fixture: ComponentFixture<AddQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
