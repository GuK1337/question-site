import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTabComponent } from './fourth-tab.component';

describe('FourthTabComponent', () => {
  let component: FourthTabComponent;
  let fixture: ComponentFixture<FourthTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
