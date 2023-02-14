import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementDetailsComponent } from './etablissement-details.component';

describe('EtablissementDetailsComponent', () => {
  let component: EtablissementDetailsComponent;
  let fixture: ComponentFixture<EtablissementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtablissementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
