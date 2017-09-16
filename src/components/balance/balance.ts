import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import "rxjs/add/operator/map";
import { AddBalanceExpensePage } from '../../pages/add-balance-expense/add-balance-expense';
import { EditBalancePage } from '../../pages/edit-balance/edit-balance';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
/**
 * Generated class for the BalanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'balance',
  templateUrl: 'balance.html'
})
export class BalanceComponent {
  balanceId: string;
  items: FirebaseListObservable<any[]>;
  totalBalanceAmount = 0;
  totalExpenseAmount = 0;

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {
    afDB.list('/balance').subscribe(keys => {
      keys.forEach(key => this.totalBalanceAmount += parseFloat(key.amount));
    });

    afDB.list('/expenses').subscribe(keys => {
      keys.forEach(key => this.totalExpenseAmount += parseFloat(key.amount));
    });

    this.totalIncome();
    this.totalExpense();
  }
  totalIncome(){
    return this.totalBalanceAmount;
  }

  totalExpense(){
    return this.totalExpenseAmount;
  }

  balance(){
    return this.totalBalanceAmount - this.totalExpenseAmount;
  }
}
