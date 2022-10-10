import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from '../services/rest.service';
import { BaseComponent } from '../pages/base/base.component';
import { ConfirmationService } from '../services/confirmation.service';
import { ShortcutsService } from '../services/shortcuts.service';
import { FormsModule } from '@angular/forms';
import { ImageUploaderComponent } from '../components/image-uploader/image-uploader.component';
import { AddNewAddressComponent } from '../components/add-new-address/add-new-address.component';
import { AddNewClientComponent } from '../components/add-new-client/add-new-client.component';
import { AddNewItemEasyComponent } from '../components/add-new-item-easy/add-new-item-easy.component';
import { AddPosBillComponent } from '../components/add-pos-bill/add-pos-bill.component';
import { AttachmentUploaderComponent } from '../components/attachment-uploader/attachment-uploader.component';
import { FullTextComponent } from '../components/full-text/full-text.component';
import { HeaderComponent } from '../components/header/header.component';
import { ItemSelectorComponent } from '../components/item-selector/item-selector.component';
import { ListCashCloseComponent } from '../components/list-cash-close/list-cash-close.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { MakeOrderReturnComponent } from '../components/make-order-return/make-order-return.component';
import { MakePaymentComponent } from '../components/make-payment/make-payment.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ModalComponent } from '../components/modal/modal.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { PayOrderComponent } from '../components/pay-order/pay-order.component';
import { SaveBankMovementEmbededComponent } from '../components/save-bank-movement-embeded/save-bank-movement-embeded.component';
import { SaveCashCloseComponent } from '../components/save-cash-close/save-cash-close.component';
import { SaveFundComponent } from '../components/save-fund/save-fund.component';
import { SearchCategoryComponent } from '../components/search-category/search-category.component';
import { SearchItemsComponent } from '../components/search-items/search-items.component';
import { SelectDeliveryUserComponent } from '../components/select-delivery-user/select-delivery-user.component';
import { SelectItemOptionComponent } from '../components/select-item-option/select-item-option.component';
import { ToastErrorComponent } from '../components/toast-error/toast-error.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from '../app-routing.module';
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


@NgModule({
	declarations: [
		BaseComponent,
		ImageUploaderComponent,
		AddNewAddressComponent,
		AddNewClientComponent,
		AddNewItemEasyComponent,
		AddPosBillComponent,
		AttachmentUploaderComponent,
		FullTextComponent,
		HeaderComponent,
		ItemSelectorComponent,
		ListCashCloseComponent,
		LoadingComponent,
		MakeOrderReturnComponent,
		MakePaymentComponent,
		MenuComponent,
		ModalComponent,
		PaginationComponent,
		PayOrderComponent,
		//QrCodeScannerComponent,
		SaveBankMovementEmbededComponent,
		SaveCashCloseComponent,
		SaveFundComponent,
		SearchCategoryComponent,
		SearchItemsComponent,
		SelectDeliveryUserComponent,
		SelectItemOptionComponent,
		ToastErrorComponent,
		ImageUploaderComponent,
	]


	,
	imports: [ 
		FormsModule, 
		CommonModule, 
		ScrollingModule,
		AppRoutingModule,
	],
	exports:[ 
		FormsModule, 
		AddNewAddressComponent,
		AddNewClientComponent,
		AddNewItemEasyComponent,
		AddPosBillComponent,
		AttachmentUploaderComponent,
		FullTextComponent,
		HeaderComponent,
		ItemSelectorComponent,
		ListCashCloseComponent,
		LoadingComponent,
		MakeOrderReturnComponent,
		MakePaymentComponent,
		MenuComponent,
		ModalComponent,
		PaginationComponent,
		PayOrderComponent,
		//QrCodeScannerComponent,
		SaveBankMovementEmbededComponent,
		SaveCashCloseComponent,
		SaveFundComponent,
		SearchCategoryComponent,
		SearchItemsComponent,
		SelectDeliveryUserComponent,
		SelectItemOptionComponent,
		ToastErrorComponent,
		AppRoutingModule,
	],
})
export class SharedModule {

	static forRoot():ModuleWithProviders<SharedModule>
	{
		return {
			ngModule: SharedModule,
			providers: [RestService, ShortcutsService, ConfirmationService ]
		}
	}
}
