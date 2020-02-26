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
  
  openLogoutModal() {
    const userId = "user01";
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "logout",
      title: "Are you sure you want to logout?",
      description: "Logging out will result in you being unauthorized and unable to view contents of profile",
      actionButtonText: "Logout",
      userId: userId
    }
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  openDeleteProductModal(){
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component"; //id to use in global style.css
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "deleteProduct",
      title: "Are you sure you want to delete this product?",
      description: "If you continue, the product with ID " + productId + " will be deleted.",
      actionButtonText: "Delete",
      productId: productId
    }
    //opening modal component in the modal
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

}