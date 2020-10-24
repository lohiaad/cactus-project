import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalNewsComponent } from './normal-news.component';

describe('NormalNewsComponent', () => {
  let component: NormalNewsComponent;
  let fixture: ComponentFixture<NormalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
