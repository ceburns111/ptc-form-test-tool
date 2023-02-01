import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWelcomeComponent } from './the-welcome.component';

describe('TheWelcomeComponent', () => {
  let component: TheWelcomeComponent;
  let fixture: ComponentFixture<TheWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
