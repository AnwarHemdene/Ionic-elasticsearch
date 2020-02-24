import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteQuotePage } from './delete-quote.page';

describe('DeleteQuotePage', () => {
  let component: DeleteQuotePage;
  let fixture: ComponentFixture<DeleteQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
