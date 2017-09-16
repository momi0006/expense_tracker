import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBalancePage } from './edit-balance';

@NgModule({
  declarations: [
    EditBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(EditBalancePage),
  ],
})
export class EditBalancePageModule {}
