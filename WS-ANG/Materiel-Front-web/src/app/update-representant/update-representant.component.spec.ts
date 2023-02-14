import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRepresentantComponent } from './update-representant.component';

describe('UpdateRepresentantComponent', () => {
  let component: UpdateRepresentantComponent;
  let fixture: ComponentFixture<UpdateRepresentantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRepresentantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRepresentantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
