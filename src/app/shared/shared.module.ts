import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from '../services/rest.service';
import { BaseComponent } from '../pages/base/base.component';
import { ConfirmationService } from '../services/confirmation.service';
import { ShortcutsService } from '../services/shortcuts.service';

@NgModule({
	declarations: [BaseComponent],
	imports: [ CommonModule ],
	exports:[],
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
