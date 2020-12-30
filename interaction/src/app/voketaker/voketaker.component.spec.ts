import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoketakerComponent } from './voketaker.component';

describe('VoketakerComponent', () => {
  let component: VoketakerComponent;
  let fixture: ComponentFixture<VoketakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoketakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoketakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
