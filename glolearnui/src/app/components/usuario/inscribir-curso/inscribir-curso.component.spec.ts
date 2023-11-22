import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirCursoComponent } from './inscribir-curso.component';

describe('InscribirCursoComponent', () => {
  let component: InscribirCursoComponent;
  let fixture: ComponentFixture<InscribirCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscribirCursoComponent]
    });
    fixture = TestBed.createComponent(InscribirCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
