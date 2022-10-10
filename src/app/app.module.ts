import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
//import { AddNewAddressComponent } from './components/add-new-address/add-new-address.component';
//import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';
//import { AddNewItemEasyComponent } from './components/add-new-item-easy/add-new-item-easy.component';
//import { AddPosBillComponent } from './components/add-pos-bill/add-pos-bill.component';
//import { AttachmentUploaderComponent } from './components/attachment-uploader/attachment-uploader.component';
//import { FullTextComponent } from './components/full-text/full-text.component';
//import { HeaderComponent } from './components/header/header.component';
//import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
//import { ListCashCloseComponent } from './components/list-cash-close/list-cash-close.component';
//import { LoadingComponent } from './components/loading/loading.component';
//import { MakeOrderReturnComponent } from './components/make-order-return/make-order-return.component';
//import { MakePaymentComponent } from './components/make-payment/make-payment.component';
//import { MenuComponent } from './components/menu/menu.component';
//import { ModalComponent } from './components/modal/modal.component';
//import { PaginationComponent } from './components/pagination/pagination.component';
//import { PayOrderComponent } from './components/pay-order/pay-order.component';
//import { QrCodeScannerComponent } from './components/qr-code-scanner/qr-code-scanner.component';
//import { SaveBankMovementEmbededComponent } from './components/save-bank-movement-embeded/save-bank-movement-embeded.component';
//import { SaveCashCloseComponent } from './components/save-cash-close/save-cash-close.component';
//import { SaveFundComponent } from './components/save-fund/save-fund.component';
//import { SearchCategoryComponent } from './components/search-category/search-category.component';
//import { SearchItemsComponent } from './components/search-items/search-items.component';
//import { SelectDeliveryUserComponent } from './components/select-delivery-user/select-delivery-user.component';
//import { SelectItemOptionComponent } from './components/select-item-option/select-item-option.component';
//import { ToastErrorComponent } from './components/toast-error/toast-error.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		//AddNewAddressComponent,
		//AddNewClientComponent,
		//AddNewItemEasyComponent,
		//AddPosBillComponent,
		//AttachmentUploaderComponent,
		//FullTextComponent,
		//HeaderComponent,
		//ItemSelectorComponent,
		//ListCashCloseComponent,
		//LoadingComponent,
		//MakeOrderReturnComponent,
		//MakePaymentComponent,
		//MenuComponent,
		//ModalComponent,
		//PaginationComponent,
		//PayOrderComponent,
		//QrCodeScannerComponent,
		//SaveBankMovementEmbededComponent,
		//SaveCashCloseComponent,
		//SaveFundComponent,
		//SearchCategoryComponent,
		//SearchItemsComponent,
		//SelectDeliveryUserComponent,
		//SelectItemOptionComponent,
		//ToastErrorComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CommonModule,
		SharedModule.forRoot(),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
