import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolvingPlaylistComponent } from './evolving-playlist.component';

describe('EvolvingPlaylistComponent', () => {
  let component: EvolvingPlaylistComponent;
  let fixture: ComponentFixture<EvolvingPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolvingPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolvingPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
