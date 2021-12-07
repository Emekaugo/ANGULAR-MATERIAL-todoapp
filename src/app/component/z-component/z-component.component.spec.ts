import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZComponentComponent } from './z-component.component';

describe('ZComponentComponent', () => {
  let component: ZComponentComponent;
  let fixture: ComponentFixture<ZComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
