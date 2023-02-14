import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepresentantComponent } from './create-representant.component';

describe('CreateRepresentantComponent', () => {
  let component: CreateRepresentantComponent;
  let fixture: ComponentFixture<CreateRepresentantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepresentantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepresentantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
