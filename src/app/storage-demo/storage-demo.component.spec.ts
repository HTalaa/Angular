import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageDemoComponent } from './storage-demo.component';

describe('StorageDemoComponent', () => {
  let component: StorageDemoComponent;
  let fixture: ComponentFixture<StorageDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
