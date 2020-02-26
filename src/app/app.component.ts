import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public matDialog: MatDialog) { }

  title = 'angular-reusable-dialog';
  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component"; //id to use in global style.css
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    //opening modal component in the modal
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);

  }
}
