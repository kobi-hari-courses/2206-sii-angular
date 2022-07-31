import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsPresenterComponent } from './errors-presenter.component';

describe('ErrorsPresenterComponent', () => {
  let component: ErrorsPresenterComponent;
  let fixture: ComponentFixture<ErrorsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsPresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
