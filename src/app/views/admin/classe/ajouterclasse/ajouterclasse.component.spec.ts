import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterclasseComponent } from './ajouterclasse.component';

describe('AjouterclasseComponent', () => {
  let component: AjouterclasseComponent;
  let fixture: ComponentFixture<AjouterclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterclasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
