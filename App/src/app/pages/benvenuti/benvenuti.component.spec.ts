import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvenutiComponent } from './benvenuti.component';

describe('BenvenutiComponent', () => {
  let component: BenvenutiComponent;
  let fixture: ComponentFixture<BenvenutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenvenutiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenvenutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
