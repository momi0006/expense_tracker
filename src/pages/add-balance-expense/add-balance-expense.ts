import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddBalanceExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-balance-expense',
  templateUrl: 'add-balance-expense.html',
})
export class AddBalanceExpensePage {
  purpose: string;
  myDate: string;
  amount: string;
  description: string;
  selectCategory: string;
  expense: string;
  balance: string;
  balanceCategory: string;
  items: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,
    public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.purpose = this.navParams.get('param1');
    this.items = afDB.list('/category');
  }

  ionViewDidLoad() {
    this.myDate = new Date().toISOString();
    this.balanceCategory = "Income";
    this.expense = this.navParams.get('id');
    var expenseId = this.navParams.get('id');
    this.balance = this.navParams.get('balanceId');
    var balanceId = this.navParams.get('balanceId');
    if(expenseId){
      firebase.database().ref('/expenses/' + expenseId).once('value').then((snapshot) =>{
        this.updateFields(snapshot.val());
      });
    }
    else if(balanceId){
      firebase.database().ref('/balance/' + balanceId).once('value').then((snapshot) =>{
        this.updateFields(snapshot.val());
      });
    }
  }

  updateFields(fields: any = null): any{
      this.amount = fields.amount;
      this.myDate = fields.date;
      this.selectCategory = fields.category;
      this.description = fields.description;
  }

  onChange(event){
    this.myDate = event;
  }

  save(){
    var data = {
      amount: this.amount,
      date: this.myDate,
      category: this.selectCategory.trim(),
      description: this.description
    }

    this.afDB.database.ref('expenses').push(data).then(
      (resolve)=>{
        let toast = this.toastCtrl.create({
          message: 'Expense added!',
          duration: 3000
        });
        toast.present();
        this.navCtrl.push(HomePage);
      },
      (err)=>{console.log(err.message)}
    );
  }

  saveBalance(){
    var data = {
      amount: this.amount,
      date: this.myDate,
      category: this.balanceCategory,
      description: this.description
    }

    this.afDB.database.ref('balance').push(data).then(
      (resolve)=>{
        let toast = this.toastCtrl.create({
          message: 'Balance added!',
          duration: 3000
        });
        toast.present();
        this.navCtrl.push(HomePage);
      },
      (err)=>{console.log(err.message)}
    );
  }


  update(){
    var expenseId = this.navParams.get('id');
    firebase.database().ref().child('/expenses/' + expenseId)
    .update({ amount: this.amount,
      date: this.myDate,
      category: this.selectCategory,
      description: this.description }).then(
        (resolve)=>{
          let toast = this.toastCtrl.create({
            message: 'Expense updated!',
            duration: 3000
          });
          toast.present();
          this.navCtrl.push(HomePage);
        },
        (err)=>{console.log(err.message)}
      );
  }

  deleteRecord(){
    this.showConfirm();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Delete this record?',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel'
        },
        {
          text: 'Agree',
          handler: () => {
            firebase.database().ref().child('/expenses/' + this.expense).remove();
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }
}
