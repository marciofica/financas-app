import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosFinanceirosComponent } from './eventos-financeiros.component';

describe('EventosFinanceirosComponent', () => {
  let component: EventosFinanceirosComponent;
  let fixture: ComponentFixture<EventosFinanceirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosFinanceirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosFinanceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
