import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeContasDeleteComponent } from './plano-de-contas-delete.component';

describe('PlanoDeContasDeleteComponent', () => {
  let component: PlanoDeContasDeleteComponent;
  let fixture: ComponentFixture<PlanoDeContasDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDeContasDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDeContasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
