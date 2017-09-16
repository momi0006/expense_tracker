import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBalanceExpensePage } from './add-balance-expense';

@NgModule({
  declarations: [
    AddBalanceExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(AddBalanceExpensePage),
  ],
})
export class AddBalanceExpensePageModule {}
