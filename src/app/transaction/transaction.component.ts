import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTransactionDialogComponent } from '../new-transaction-dialog/new-transaction-dialog.component'; // Import TransactionData interface


// Define the TransactionData interface
export interface TransactionData {
  description: string;
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  transactions: TransactionData[] = []; // Initialize with your transaction data structure

  displayedColumns: string[] = ['description', 'amount', 'date', 'actions'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // Initialize transactions data
  }

  openNewTransactionDialog(): void {
    const dialogRef = this.dialog.open(NewTransactionDialogComponent, {
      width: '500px',
      // Add any necessary data or configuration here
    });

    dialogRef.afterClosed().subscribe((result: TransactionData) => {
      if (result) {
        this.transactions.push(result); // Add the new transaction to the transactions array
        console.log("this is data from dialog", result);
      }
    });
  }

  deleteTransaction(index: number): void {
    this.transactions.splice(index, 1); // Remove the transaction at the specified index
  }
}
