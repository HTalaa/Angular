import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExComponent } from './my-ex.component';

describe('MyExComponent', () => {
  let component: MyExComponent;
  let fixture: ComponentFixture<MyExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
