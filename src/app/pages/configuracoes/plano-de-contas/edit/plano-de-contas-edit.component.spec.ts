import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeContasEditComponent } from './plano-de-contas-edit.component';

describe('PlanoDeContasEditComponent', () => {
  let component: PlanoDeContasEditComponent;
  let fixture: ComponentFixture<PlanoDeContasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDeContasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDeContasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
