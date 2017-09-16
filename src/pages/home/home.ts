import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabContainer } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';

import { ExpensesComponent } from '../../components/expenses/expenses';
import { AddBalanceExpensePage } from '../../pages/add-balance-expense/add-balance-expense';
import { EditBalancePage } from '../../pages/edit-balance/edit-balance';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName;  
  tabName;

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth, private platform: Platform) {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;      
    });

    this.tabName = 'expenses';
  }

  goToAddBalanceExpensePage(purpose, event, fab: FabContainer){
    fab.close();
    this.navCtrl.push(AddBalanceExpensePage, {param1: purpose});
  }
}