import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestmentDialogComponent } from '../investment-dialog/investment-dialog.component';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent {
  // Define variables to hold investment data
  emergencyFund!: number;
  realEstateValue!: number;
  monthlySIP!: number;
  debtInvestment!: number;
  equityInvestment!: number;
  goldBondInvestment!: number;
  savingsInvestment!: number;

  constructor(private dialog: MatDialog) { }

  openInvestmentDialog(): void {
    const dialogRef = this.dialog.open(InvestmentDialogComponent, {
      width: '500px',
      data: {
        emergencyFund: this.emergencyFund,
        realEstateValue: this.realEstateValue,
        monthlySIP: this.monthlySIP,
        debtInvestment: this.debtInvestment,
        equityInvestment: this.equityInvestment,
        goldBondInvestment: this.goldBondInvestment,
        savingsInvestment: this.savingsInvestment
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateInvestments(result);
      }
    });
  }

  updateInvestments(data: any): void {
    // Update investment data based on the result from the dialog
    this.emergencyFund = data.emergencyFund;
    this.realEstateValue = data.realEstateValue;
    this.monthlySIP = data.monthlySIP;
    this.debtInvestment = data.debtInvestment;
    this.equityInvestment = data.equityInvestment;
    this.goldBondInvestment = data.goldBondInvestment;
    this.savingsInvestment = data.savingsInvestment;
  }
}
