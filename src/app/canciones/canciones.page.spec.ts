import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancionesPage } from './canciones.page';

describe('CancionesPage', () => {
  let component: CancionesPage;
  let fixture: ComponentFixture<CancionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
