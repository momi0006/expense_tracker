import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import "rxjs/add/operator/map";
import { AddBalanceExpensePage } from '../../pages/add-balance-expense/add-balance-expense';
import { EditBalancePage } from '../../pages/edit-balance/edit-balance';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ExpensesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesComponent {
  expenseId: string;
  items1: FirebaseListObservable<any[]>;
  items2: FirebaseListObservable<any[]>;
  items;

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {
    this.items1 = afDB.list('/expenses', {
      query: {
        orderByChild: 'date'
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    this.items2 = afDB.list('/balance', {
      query: {
        orderByChild: 'date'
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

    this.items1.subscribe((cardsOfUserOne ) => {
      this.items2.subscribe((cardsOfUserTwo ) => {
        this.items = cardsOfUserOne.concat(cardsOfUserTwo);
        //console.log(this.items);
      })
    });

    
  }

  onExpenseClick(expenseId){
    this.navCtrl.push(AddBalanceExpensePage, {id: expenseId});
  }

  onBalanceClick(balanceId){
    this.navCtrl.push(EditBalancePage, {balanceId: balanceId});
    //this.navCtrl.push(AddBalanceExpensePage, {balanceId: balanceId});
  }

}
