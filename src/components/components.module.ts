import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses/expenses';
import { BalanceComponent } from './balance/balance';
@NgModule({
	declarations: [ExpensesComponent,
    BalanceComponent],
	imports: [],
	exports: [ExpensesComponent,
    BalanceComponent]
})
export class ComponentsModule {}
