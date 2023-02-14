import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementDonComponent } from './etablissement-don.component';

describe('EtablissementDonComponent', () => {
  let component: EtablissementDonComponent;
  let fixture: ComponentFixture<EtablissementDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtablissementDonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
