import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionDialogComponent } from './new-transaction-dialog.component';

describe('NewTransactionDialogComponent', () => {
  let component: NewTransactionDialogComponent;
  let fixture: ComponentFixture<NewTransactionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTransactionDialogComponent]
    });
    fixture = TestBed.createComponent(NewTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
