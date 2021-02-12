import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPlaylistComponent } from './energy-playlist.component';

describe('EnergyPlaylistComponent', () => {
  let component: EnergyPlaylistComponent;
  let fixture: ComponentFixture<EnergyPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
