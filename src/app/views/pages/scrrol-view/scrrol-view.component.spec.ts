import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrrolViewComponent } from './scrrol-view.component';

describe('ScrrolViewComponent', () => {
  let component: ScrrolViewComponent;
  let fixture: ComponentFixture<ScrrolViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrrolViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrrolViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
