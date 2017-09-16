import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the EditBalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-edit-balance',
  templateUrl: 'edit-balance.html',
})
export class EditBalancePage {
  myDate: string;
  amount: string;
  description: string;
  category : string;
  balance: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,
    public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.category = "Income";
    this.myDate = new Date().toISOString();
    this.balance = this.navParams.get('balanceId');
    var balanceId = this.navParams.get('balanceId');
    firebase.database().ref('/balance/' + balanceId).once('value').then((snapshot) =>{
      this.updateFields(snapshot.val());
    });
  }

  updateFields(fields: any = null): any{
    this.amount = fields.amount;
    this.myDate = fields.date;
    this.category = fields.category;
    this.description = fields.description;
    console.log(this.category);
  }

  updateBalance(){
    var expenseId = this.navParams.get('id');
    firebase.database().ref().child('/balance/' + this.balance)
    .update({ amount: this.amount,
      date: this.myDate,
      category: this.category,
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
            firebase.database().ref().child('/balance/' + this.balance).remove();
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }

}
