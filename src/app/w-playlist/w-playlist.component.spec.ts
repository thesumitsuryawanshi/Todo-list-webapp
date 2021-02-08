import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPlaylistComponent } from './w-playlist.component';

describe('WPlaylistComponent', () => {
  let component: WPlaylistComponent;
  let fixture: ComponentFixture<WPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
