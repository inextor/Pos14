import { ItemInfo, ItemOptionInfo, OrderInfo, OrderItemInfo, QuoteInfo } from "../models/models";
import { Category, Item, Item_Exception, Order, Order_Item, Price, Price_Type, Quote, Stock_Record, Store, User } from "../models/RestModels";
import { RestService } from "../services/rest.service";

export class GetEmpty
{
    static user(): User {
		let d = new Date();
		return {
			created: d,
			created_by_user_id: null,
			credit_days: 0,
			credit_limit: 0,
			default_billing_address_id: null,
			default_shipping_address_id: null,
			email:'',
			id:0,
			image_id: null,
			lat:0.0,
			lng:0.0,
			name:'',
			password:'',
			phone:'',
			platform_client_id:0,
			price_type_id:1,
			store_id:null,
			type:'USER',
			updated:d,
			updated_by_user_id: null,
			username:''
		}
    }
    static order_item():Order_Item 
	{
		let d = new Date();

		let order_item:Order_Item = {
			item_id: 0,
			qty: 1,
			item_group: d.getTime(),
			tax_included: 'YES',
			commanda_id: null,
			created: d,
			updated: d,
			commanda_status: 'PENDING',
			original_unitary_price: 0,
			created_by_user_id: 0,
			stock_status: 'IN_STOCK',
			unitary_price: 0,
			delivered_qty: 0,
			discount: 0,
			exceptions: '',
			id: 0,
			delivery_status: 'PENDING',
			id_payment: null,
			is_item_extra: 'NO',//NO ESTOY SEGURO
			item_extra_id: null,
			item_option_id: null,
			return_required: 'NO',
			status:'ACTIVE',
			subtotal: 0,
			total: 0,
			tax: 0,
			system_preparation_started: null,
			updated_by_user_id: null,
			price_id: null,
			system_preparation_ended: null,
			paid_qty: 0,
			preparation_status: 'PENDING',
			item_option_qty: 0,
			order_id: 0,
			is_free_of_charge: 'NO',
			note: ''
		};
		return order_item;
    }
	static category(): Category
	{
		return {
			code: '',
			created: new Date(),
			created_by_user_id: 0,
			default_clave_prod_serv: '',
			display_status:'NORMAL',
			id:0,
			image_id:null,
			on_sale: 'YES',
			name:'',
			type:'PRODUCT',
			updated:new Date(),
			updated_by_user_id: null,
		}
	}

	static item():Item
	{
		return {
			id: 0,
			category_id: null,
			code: '',
			created_by_user_id: 0,
			description: '',
			extra_name: '',
			brand_id: null,
			created: new Date(),
			updated: new Date(),
			commanda_type_id: null,
			image_id: null,
			name: '',
			product_id: null,
			provider_user_id: null,
			reference_price: 0.01,
			updated_by_user_id: null,
			note_required: 'NO',
			measurement_unit: null,
			unidad_medida_sat_id: null,
			clave_sat: null,
			availability_type: 'ON_STOCK',
			on_sale:'YES',
			status:'ACTIVE'
		};

	}

	static itemInfo():ItemInfo
	{
		let item:Item = GetEmpty.item();

		let empty:ItemInfo = {
			item,
			records:[] as Stock_Record[],
			prices:[] as Price[],
			category: null,
			options: [] as ItemOptionInfo[],
			exceptions: [] as Item_Exception[]
		};

		return empty;
	}

	static orderInfo(rest:RestService, price_type_list:Price_Type[] = [], store_list:Store[] = []):OrderInfo
	{
		let price_type_id:number = (price_type_list?.length ) ? price_type_list[0].id : 1; //Posible error
		let tax_percent = 0;

		let store:Store | undefined = store_list.find(store=>store.id == rest?.current_user?.store_id )

		if( !store )
			store = GetEmpty.store();

		let version_created = rest.getVersion();

		let items:OrderItemInfo[] = [];
		let order:Order = {
			amount_paid: 0,
			ares: 0,
			address: '',
			city:'',
			client_name:'',
 			client_user_id: null,
			delivery_user_id:null, 
			discount_calculated: 0,
			paid_timetamp: null,
			sat_codigo_postal: '',
			sat_forma_pago: '',
			sat_pdf_attachment_id: null,
			sat_razon_social: '',
			note: '',
			quote_id: null,
			sat_receptor_email: '',
			sat_uso_cfdi: '',
			sat_xml_attachment_id: null,
			shipping_address_id: null,
			shipping_cost: 0.0,
			sat_receptor_rfc: '',
			suburb: '',
			store_consecutive: 0,
			state: '',
			system_activated: null,
			version_updated: version_created,
			version_created: version_created,
			id: 0,
			facturacion_code: '',
			billing_address_id: null,
			billing_data_id: store.default_billing_data_id,
			cashier_user_id: rest?.current_user?.id || null,
			created: new Date(),
			currency_id: 'MXN',
			discount: 0,
			price_type_id: price_type_id,
			authorized_by: null,
			sat_serie: store.default_sat_serie,
			service_type: 'QUICK_SALE',
			status: 'PENDING',
			paid_status:'PENDING',
			facturado:'NO',
			guests: 1,
			lat:null,
			lng:null,
			marked_for_billing:'NO',
			delivery_status: 'PENDING',
			store_id: rest?.current_user?.store_id || store.id,
			subtotal: 0,
			sync_id: rest.getSyncId(),
			table_id: null,
			tag:'',
			tax: 0,
			tax_percent:tax_percent,
			total: 0,
			updated: new Date()
		};
		let empty:OrderInfo = {
				items,
				order,
				structured_items:[],
				cashier: rest.current_user,
				delivery_user: null,
				client: null,
				store: store,
				purchase: null
		};
		return empty;
	}

	static store():Store
	{
		return {
			address:'',
			business_name:'',
			city:'',
			client_user_id:null,
			created: new Date(),
			created_by_user_id: null,
			default_billing_data_id: null,
			default_currency_id:'MXN',
			default_sat_serie: 'A',
			electronic_transfer_percent_fee: 0,
			exchange_rate:20,
			id: 0,
			image_id: null,
			name:'',
			paypal_email: '',
			phone:'',
			pos_category_preferences:'DEFAULT_BY_PRODUCT',
			price_list_id: 0,
			printer_ticket_config:'',
			rfc:'',
			state:'',
			status:'DISABLED',
			tax_percent: 16,
			ticket_footer_text:'',
			ticket_image_id:null,
			updated: new Date(),
			updated_by_user_id : null,
			zipcode: ''
		}
	}

	static quote(rest:RestService):Quote
	{
		return {
			approved_status:'PENDING',
			approved_time: null,
			attachment_id: null,
			client_user_id: null,
			created: new Date(),
			created_by_user_id: rest.current_user?.id || 0,
			email:'',
			id: 0,
			name: '',
			phone:'',
			store_id: 0,
			sync_id: rest.getSyncId(),
			tax_percent: 16,
			updated:new Date(),
			valid_until: '',
		}
	}

	static quoteInfo(rest:RestService):QuoteInfo
	{
		return {
			quote: GetEmpty.quote(rest),
			client_user:null,
			store: GetEmpty.store(),
			items: [],
			order: null,
		}
	}

}
