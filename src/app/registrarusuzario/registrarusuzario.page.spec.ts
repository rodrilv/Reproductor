import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarusuzarioPage } from './registrarusuzario.page';

describe('RegistrarusuzarioPage', () => {
  let component: RegistrarusuzarioPage;
  let fixture: ComponentFixture<RegistrarusuzarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarusuzarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarusuzarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
