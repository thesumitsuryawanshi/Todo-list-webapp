import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxPlaylistComponent } from './relax-playlist.component';

describe('RelaxPlaylistComponent', () => {
  let component: RelaxPlaylistComponent;
  let fixture: ComponentFixture<RelaxPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaxPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
