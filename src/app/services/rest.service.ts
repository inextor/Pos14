import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of, Subject, forkJoin, from, firstValueFrom, } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
//import * as XLSX from 'xlsx';
import { map } from 'rxjs/operators';
import { Rest, RestResponse, SearchObject } from './Rest';

import {Utils, ErrorMessage } from '../classes/Utils';
import {DatabaseStore} from '../classes/Finger/DatabaseStore';
//import {Options} from '../classes/Finger/OptionsUtils';
import {Platform_Address, Platform_Client, Platform_Store} from '../models/PlatformModels';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import {
	ShippingInfo, AttachmentInfo, LoginResponse,
	BillInfo, PurchaseInfo, MermaInfo, OrderItemInfo,
	Order_Report, PlatformStoreInfo, FacturacionRequest, CategoryInfo,
	UserBalance, ReturnsInfo, StocktakeInfo,
	CashCloseInfo, PaymentInfo, OrderInfo, ItemStockInfo,
	ItemInfo, BankMovementInfo, SocketMessage, RequisitionInfo,
	OFFLINE_DB_SCHEMA,
	ProductoOServicio,
	QuoteInfo,
	StockRecordInfo,
	OrderItemStructureInfo,
	PriceLogInfo,
    GeocodingResponse,
    SplitOrderRequest,
    StoreStock,
    TotalSalesByStore,
    TagStock,
    CategoryStock,
    TableInfo,
    ReenviarFacturaRequest
} from '../models/models';

import {
	Address, Bank_Account, Bank_Movement, Bill, Billing_Data, Cash_Close,
	Category, Commanda, Commanda_Type, Fund, Item,Image, Merma,
	Notification_Token, Order, Order_Item, Payment, Preferences,
	Price, Price_List, Price_Type, Purchase, Push_Notification, Returns,
	Shipping, Stocktake, Stocktake_Scan, Stock_Record, Storage_Item, Storage,
	Store, Unidad_Medida_Sat, User,User_Permission, Requisition, Quote, Quote_Item, Currency, Currency_Rate, Price_Log, Table, Category_Tree, Category_Store
} from '../models/RestModels';
import { StoreDictionary } from '../classes/Finger/SchemeBuilder';
import { Options } from '../classes/Finger/OptionsUtils';
import { ItemCategorySearch, OfflineUtils } from '../classes/OfflineUtils';
import { BuildInfo } from '../models/BuildInfo';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
//import {OfflineUtils} from '../classes/OfflineUtils';
//import {environment} from 'src/environments/environment';

//import Dexie from '@dpogue/dexie';

type SuperEmpty<Type> = Type | null | undefined;

export const USER_PERMISSION_KEY = 'user_permission';
const USER_KEY = 'user';

export interface SearchResume
{
	total?:number;
	sum?:number;
	min?:number;
	max?:number;
	remaining?:number;
}


@Injectable({
	providedIn: 'root'
})
export class RestService
{
	readonly VAPID_PUBLIC_KEY	= 'BAVJCG5J3uwF4RVpuz8n10dQVSx-60XTF98Y5xERhGV3xzYb6pdVuQjKrGsqLm7G_eYCP5K56gpSx6ZOK8760SA';
	//readonly GEOLOCATION_KEY= 'AIzaSyC2RzI_wHQBIysXsI-g_Miwg2J1-o14cn8';

	socketio_enabled:boolean = true;
	socket_is_connected:boolean = false;
	public domain_configuration = {
		domain: window.location.protocol+'//'+window.location.hostname
	};

	private platform_domain_configuration = {
		domain: this.getPlatformDomain()
	};

	public _is_offline:boolean = false;
	public _offline_search_enabled = false;

	public local_db:any;

	public path:string = 'PointOfSale';
	public errorBehaviorSubject: BehaviorSubject<ErrorMessage>;
	public errorObservable: Observable<ErrorMessage>;
	public urlBase: string = this.getUrlBase();
	public url_platform:string = this.getUrlPlatform();
	public printer_ticket_config:string = '';

	private updatesSubject = new Subject<SocketMessage>();
	public updates:Observable<SocketMessage>;

	private client_selected_store_id:number | null = null;
	public current_user:User | null = null;
	public current_platform_client:Platform_Client | null = null;

	public current_platform_domain:string | null = null;
	public can_change_domain:boolean = true;

	public session_start?:Date | null;
	public current_permission:Partial<User_Permission> = {};
	public local_preferences:Preferences = this.getPreferencesFromSession();

	private finger_db: DatabaseStore	= DatabaseStore.builder('cart',1,{order_item_info:"created"});
	private offline_db: DatabaseStore	= DatabaseStore.builder
	(
		OFFLINE_DB_SCHEMA.name,
		OFFLINE_DB_SCHEMA.version,
		OFFLINE_DB_SCHEMA.schema
	);

	public notification = new BehaviorSubject({});
	public is_maps_loaded:boolean = false;
	public show_menu:boolean = false;
	/* Rest variable declarations */
	public item_stock:Rest<Item, ItemStockInfo> = this.initRest('stock_by_item');
	public category_info:Rest<Category,CategoryInfo> = this.initRest('category_info');
	public facturacion_request:Rest<FacturacionRequest,any> = this.initRest('facturacion_request');
	public address:Rest<Address,Address> = this.initRest('address');
	public bank_account:Rest<Bank_Account, Bank_Account> = this.initRest('bank_account');
	public bank_movement_info:Rest<Bank_Movement, BankMovementInfo> = this.initRest('bank_movement_info');
	public bill_info:Rest<Bill, BillInfo> = this.initRest('bill_info');
	public bill:Rest<Bill, Bill> = this.initRest('bill');
	public notification_token:Rest<Notification_Token,Notification_Token> = this.initRest('notification_token');
	public category:Rest<Category,Category> = this.initRest('category');
	public item:Rest<Item,Item> = this.initRest('item');
	public item_info:Rest<Item,ItemInfo>	= this.initRest('item_info');
	public item_stock_info:Rest<Item,ItemStockInfo> = this.initRest('stock_by_item');
	//\
	public push_notification:Rest<Push_Notification,Push_Notification> = this.initRest('push_notification');
//	public order:Rest<Order,Order> = this.initRest('order');
	public order_info:Rest<Order,OrderInfo> = this.initRest('order_info');
	public order_total:Rest<Order,Order> = this.initRest('reportes');
//	public order_item:Rest<Order_Item,Order_Item> = this.initRest('order_item');
	public preferences:Rest<Preferences,Preferences> = this.initRest('preferences');
//	public production_info:Rest<Production,ProductionInfo> = this.initRest('production_info');
//	public production:Rest<Production,Production> = this.initRest('production');
	//public box_info:Rest<Box, BoxInfo> =this.initRest('box_info');
	//public requisition:Rest<Requisition,Requisition> = this.initRest('requisition');
	public shipping:Rest<Shipping,Shipping> = this.initRest('shipping');
	public shipping_info:Rest<Shipping,ShippingInfo> = this.initRest('shipping_info');
//	public pallet_info:Rest<Pallet,PalletInfo> = this.initRest('pallet_info');
	public price:Rest<Price,Price> = this.initRest('price');
	public price_list:Rest<Price_List,Price_List> = this.initRest('price_list');
	public price_type:Rest<Price_Type,Price_Type> = this.initRest('price_type');
	public quote_info:Rest<Quote,QuoteInfo> = this.initRest('quote_info');
	public store:Rest<Store,Store> = this.initRest('store');
	public user_permission:Rest<User_Permission,User_Permission> = this.initRest('user_permission');
	public user:Rest<UserBalance,UserBalance> = this.initRest('user');
	public stocktake:Rest<Stocktake, Stocktake> = this.initRest('stocktake');
	public stocktake_scan:Rest<Stocktake_Scan, Stocktake_Scan> = this.initRest('stocktake_scan');
	public price_log:Rest<Price_Log,PriceLogInfo> = this.initRest('price_log_info');
	//public order_item_fullfillment:Rest<Order_Item_Fullfillment,Order_Item_Fullfillment> = this.initRest('order_item_fullfillment');

	public expense_report:Rest<Bank_Movement, SearchResume> = this.initRest('expense_report');
	public bill_due_amounts:Rest<Bill, Record<string,number>> = this.initRest('billDueDatesAmountsReport');
	public stocktake_info:Rest<Stocktake, StocktakeInfo> = this.initRest('stocktake_info');
	public payment_info:Rest<Payment,PaymentInfo> = this.initRest('payment_info'); //A chingar a su madre
	public order:Rest<Order,Order> = this.initRest('order');
	public cash_close:Rest<Cash_Close,Cash_Close> = this.initRest('cash_close');
	public cash_close_info:Rest<Cash_Close,CashCloseInfo> = this.initRest('cash_close_info');
	public fund:Rest<Fund,Fund> = this.initRest('fund');
	public commanda:Rest<Commanda,Commanda> = this.initRest('commanda');
	public commanda_type:Rest<Commanda_Type,Commanda_Type> = this.initRest('commanda_type');
	public unidad_medida_sat:Rest<Unidad_Medida_Sat,Unidad_Medida_Sat> = this.initRest('unidad_medida_sat');
	public billing_data:Rest<Billing_Data,Billing_Data> = this.initRest('billing_data');
	public purchase_info:Rest<Purchase,PurchaseInfo> = this.initRest('purchase_info');
	public storage:Rest<Storage,Storage> = this.initRest('storage');
	public storage_item:Rest<Storage_Item,Storage_Item> = this.initRest('storage_item');
	public merma_info:Rest<Merma,MermaInfo> = this.initRest('merma_info');
	public order_report:Rest<Order_Report,Order_Report> = this.initRest('order_report');
	public platform_address:Rest<Platform_Address,Platform_Address> = this.initRestPlatform('address');
	public platform_client:Rest<Platform_Client,Platform_Client> = this.initRestPlatform('platform_client');
	public platform_store_info:Rest<Platform_Store,PlatformStoreInfo> = this.initRestPlatform('store_info');
	public returns_info:Rest<Returns,ReturnsInfo> = this.initRest('returns_info');
	public requisition_info:Rest<Requisition,RequisitionInfo> = this.initRest('requisition_info');
	public producto_servicio_sat:Rest<ProductoOServicio,ProductoOServicio> = this.initRest('producto_servicio_sat');
	public currency:Rest<Currency,Currency> = this.initRest('currency');
	public currency_rate:Rest<Currency_Rate,Currency_Rate> = this.initRest('currency_rate');
	public stock_record_info:Rest<Stock_Record,StockRecordInfo> = this.initRest('stock_record_info');
	public reenvia_factura:Rest<ReenviarFacturaRequest,ReenviarFacturaRequest> = this.initRest('reenviar_factura');
	public table:Rest<Table,Table> = this.initRest('table');
	public table_info:Rest<Table,TableInfo> = this.initRest('table_info');
	public category_store:Rest<Category_Store,Category_Store> = this.initRest('category_store');
	public category_tree:Rest<Category_Tree,Category_Tree> = this.initRest('category_tree');

	//public platform_client_stores:Rest<Platform_Client_Store,Platform_Client_Store> = this.initRestPlatform('platform_client_stores');

	constructor(private http: HttpClient,/*private angularFireMessaging:AngularFireMessaging,*/private dom_sanitizer:DomSanitizer)
	{
		this.errorBehaviorSubject = new BehaviorSubject<ErrorMessage>(new ErrorMessage('',''));
		this.errorObservable = this.errorBehaviorSubject.asObservable();
		this.updates	= this.updatesSubject.asObservable();

		this.session_start = this.getSessionStart();

		let platform_store_info = localStorage.getItem('platform_store_info');
		this._is_offline = localStorage.getItem('is_offline') == 'true';
		this._offline_search_enabled = localStorage.getItem('offline_search_enabled') == 'true';

		if( platform_store_info )
		{
			let st:PlatformStoreInfo = JSON.parse(platform_store_info) as PlatformStoreInfo;
			let protocol = window.location.protocol;

			this.domain_configuration.domain = protocol + '//' + st.domains[0].domain;
			setTimeout(()=>{
				this.sendNotification('domain', st.domains[0].domain );
			},1000)

			setTimeout(()=>{
				this.sendNotification('domain', st.domains[0].domain );
			},5000)
		}

		this.current_user = this.getUserFromSession();

		window.addEventListener('error', function(error){
			console.error('Error',error);
		});

		//this.angularFireMessaging.messages.subscribe((message)=>
		//{
		//	if( this.current_user )
		//	{
		//		this.user_permission.get( this.current_user.id )
		//		.subscribe((response)=>
		//		{
		//			console.log('Updating permissions');
		//			if( response !== null )
		//			{
		//				this.current_permission = response;
		//			}
		//			else
		//			{
		//				this.current_permission = response;
		//			}

		//		});
		//	}

		//	this.notification.next(message);
		//})


		this.finger_db.init().then(()=>{console.log('finger db intilized')});
		this.offline_db.init().then(()=>{console.log('offline intilized')});
	}
	async syncOffLineItems()
	{
		console.log('Sync Offline Items');
		if (typeof Worker !== 'undefined')
		{
			const worker = new Worker('../offline-sync.worker', {type:'module'});
			worker.addEventListener('message', ()=>{
				console.log('Worker envio un mensaje');
			});
			worker.onmessage = ({ data }) =>
			{
				console.log(`page got message: ${data}`);
			};

			let url_base = `${this.domain_configuration.domain}/${this.urlBase}`;

			worker.postMessage
			({
				type: 'sync-items',
				base_url: url_base,
				credentials:localStorage.getItem('session_token'),
			});
		}
	}

	forceSyncOfflineItems():Promise<any>
	{
		let url_base = `${this.domain_configuration.domain}/${this.urlBase}`;

		let data:Record<string,string> = {
			'type': 'sync-items',
			'base_url': url_base,
			'credentials':localStorage.getItem('session_token') || '',
		};
		return OfflineUtils.updateDb(data);
	}

	addOrderItemsToCart(items:OrderItemInfo[]):Promise<OrderItemInfo[]>
	{
		return this.finger_db.addAll('order_item_info',items,false);
	}
	updateCart(items:OrderItemInfo[]):Promise<OrderItemInfo[]>
	{
		return this.finger_db.updateAll('order_item_info',items);
	}

	updateOfflineItems(items:OrderItemInfo[]):Promise<OrderItemInfo[]>
	{
		return this.offline_db.updateAll('item_info', items);
	}

	updateOfflineOrderInfo(order_info:OrderInfo):Promise<OrderInfo>
	{
		return OfflineUtils.updateOrderInfo(this.offline_db, order_info);
	}

	getSyncId():string
	{
		if( this.current_user == null )
			return 'FOO-'+Date.now();

		return this.current_user.id + '-' + Date.now();
	}

	getOfflineOrder(sync_id:string):Promise<OrderInfo|null>
	{
		return this.offline_db.get('order_info',sync_id)
	}

	getOfflineOrders():Promise<OrderInfo[]>
	{
		let options = Options.build({direction:'prev'});
		return this.offline_db.getAll('order_info',options);
	}

	removeOfflineOrder(order_info:OrderInfo):Promise<OrderInfo>
	{
		return this.offline_db.remove('order_info',order_info.order.sync_id );
	}

	cleanCart():Promise<void>
	{
		return this.finger_db.clear('order_item_info');
		//return this.getCartItems().then((order_item_info_list)=>{
		//	let list:Promise<OrderItemInfo[]>[] = [];
		//	order_item_info_list.forEach(oif=>list.push( this.removeCartItem( oif ) ));
		//	return Promise.all( list );
		//}).then(()=>
		//{
		//	return Promise.resolve();
		//})
		/*I
		return this.finger_db.transaction(['order_item_info'], 'readwrite', (stores)=>
		{
			return stores.order_item_info.getAll().then((order_item_info_list)=>
			{
				let keys = order_item_info_list.map(i=>i.created);
				keys.sort();
				if( keys.length == 0 )
					return Promise.resolve(true);

				return stores.order_item_info.removeByKeyList(keys);
			})
		}).then((response)=>
		{
			return Promise.resolve();
		});
		*/
	}

	getCartItems():Promise<OrderItemInfo[]>
	{
		return this.finger_db.getAll('order_item_info',new Options()) as Promise<OrderItemInfo[]>;
		//return this.local_db.orders.toArray() as Promise<OrderInfo[]>;
	}

	removeCartItem(order_item_info:OrderItemInfo):Promise<OrderItemInfo[]>
	{
		return this.finger_db.transaction(['order_item_info'], 'readwrite', (store_list)=>
		{
			return store_list['order_item_info'].getAll().then((order_item_info_list)=>
			{
				let to_remove = order_item_info_list.filter((oi:OrderItemInfo)=>oi.order_item.item_group == order_item_info.order_item.item_group);
				for(let x of to_remove)
				{
					store_list['order_item_info'].remove(x.created);
				}
				return to_remove;
			})
		});
	}

	sendNotification(type:string, id:string|number)
	{
		//if( this.socket )
		//	this.socket.emit('update',{type,id});
		////this.update('update', {type,id});
	}

	makePayment(payment_info:Partial<PaymentInfo>,order_info:OrderInfo):Observable<PaymentInfo>
	{
		console.log('Is Offline', this.is_offline);

		if( this.is_offline )
		{
			if( order_info == null )
			{
				throw new Error('La orden es nula, intente mas tarde');
			}

			order_info.order.paid_status = 'PAID';
			order_info.order.status = 'CLOSED';
			order_info.order.amount_paid = order_info.order.total;

			if( payment_info.payment?.id )
				throw new Error('No se puede hacer un pago con un id ya asignado');

			payment_info.order_sync_id = order_info.order.sync_id;
			payment_info.offline_order_id = order_info.order.id ? order_info.order.id : null;

			let promise = OfflineUtils.updateOrderInfo(this.offline_db, order_info ).then((_response)=>
			{
				return this.offline_db.put('payment_info', payment_info, undefined) as Promise<PaymentInfo>;
			})
			.then
			(
				(response:PaymentInfo)=>
				{
					return Promise.resolve(response);
				},
				(error)=>
				{
					console.log('It fails', error, payment_info );
					return Promise.reject('Ocurrio un error, posiblemente el pago fue agregado anteriormente '+error );
				}
			);

			return from(promise) as Observable<PaymentInfo>;
		}

		return this.payment_info.create(payment_info);
	}

	updateOrder(order_id:number)
	{
		//console.log('Emitiendo update');
		//if( this.socket )
		//	this.socket.emit('update',{type:'order',order_id});
	}

	updateCommandas(store_id:number)
	{
		//if( this.socket )
		//	this.socket.emit('update',{type:'commanda',store_id});
	}

	getSessionStart():Date
	{
		let session = localStorage.getItem('session');

		if( session )
		{
			let obj = JSON.parse(session);
			let date = Date.parse(obj.created);
			let d = new Date();
			d.setTime(date);
			return d;
		}

		return new Date();
	}

	setDomainChangeSettings()
	{
		let root_domains:string[] = ['127.0.0.1','clientes.integranet.xyz','pos.integranet.xyz'];
		this.can_change_domain = root_domains.includes(window.location.hostname);
	}

	getPlatformDomain():string
	{
		if (window.location.hostname.indexOf('127.0.') == 0 || window.location.hostname.indexOf('192.168') == 0 )
			return 'http://127.0.0.1';

		if (window.location.hostname.indexOf('localhost') == 0)
			return 'http://127.0.0.1';

		return 'https://clientes.integranet.xyz';
	}

	getUrlPlatform():string
	{
		this.setDomainChangeSettings();

		if ( window.location.hostname.indexOf('integranet.xyz') !== -1)
			return 'api';

		if (window.location.hostname.indexOf('127.0.') == 0 || window.location.hostname.indexOf('192.168') == 0 )
			return 'POSSignUP';

		if (window.location.hostname.indexOf('localhost') == 0)
			return 'POSSignUP';


		return 'api';
	}

	getUrlBase():string
	{
		this.setDomainChangeSettings();

		if ( window.location.hostname.indexOf('integranet.xyz') !== -1)
			return 'api';

		if (window.location.hostname.indexOf('127.0.') == 0 || window.location.hostname.indexOf('192.168') == 0 )
			return ''+this.path;

		if (window.location.hostname.indexOf('localhost') == 0)
			return ''+this.path;

		return 'api';
	}

	public initRestPlatform<T,U>(path:string)
	{
		return new Rest<T,U>(this.platform_domain_configuration,`${this.url_platform}/${path}.php`, this.http);
	}

	public initRest<T, U>(path: string)
	{
		return new Rest<T, U>(this.domain_configuration,`${this.urlBase}/${path}.php`, this.http);
	}

	getSessionHeaders()
	{
		if( localStorage.getItem('session_token') == null )
		{
			return new HttpHeaders();
		}

		let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('session_token'));
		return headers;
	}

	getClientPlatformFromSession():Platform_Client | null
	{
		let usr:string|null = localStorage.getItem('platform_client');

		if( usr )
			return Utils.transformJson( usr );

		return null;
	}

	getUserFromSession():User | null
	{
		let usr:string|null = localStorage.getItem( USER_KEY );
		let permissions:string | null = localStorage.getItem( USER_PERMISSION_KEY );

		if( permissions )
		{
			this.current_permission= JSON.parse( permissions );
		}

		if( usr )
			return Utils.transformJson( usr );

		return null;
	}
	doLoginPlatform(email:string,password:string):Observable<LoginResponse>
	{
		let result = this.http.post<any>(`${this.getPlatformDomain()}/${this.getUrlPlatform()}/login.php`, { email, password}, { withCredentials: true })
			.pipe(map(response =>
			{
				if (response && response.session.id)
				{
					this.current_platform_client = response.platform_client;
					this.current_permission = {};

					localStorage.setItem('platform_client', JSON.stringify(response));
					localStorage.setItem('session_token', response.session.id);
					localStorage.removeItem(USER_PERMISSION_KEY);
					localStorage.removeItem('session');
				}
				return response;
			}));
		return result;

	}

	doLogin(username: string, password: string): Observable<LoginResponse> {
		let result = this.http.post<any>(`${this.domain_configuration.domain}/${this.urlBase}/login.php`, { username, password}, { withCredentials: true })
			.pipe(map(response => {
				if (response && response.session.id) {
					this.current_user = response.user;
					this.current_permission = response.user_permission;

					localStorage.setItem('user', JSON.stringify(response));
					localStorage.setItem('session_token', response.session.id);
					localStorage.setItem(USER_PERMISSION_KEY, JSON.stringify(response.user_permission));
					localStorage.setItem('session', JSON.stringify(response.session));
					this.session_start = this.getSessionStart();
				}
				return response;
			}));
		return result;
	}


	logout()
	{
		let obj = {
			method: 'logout',
		};

		let path = '/';
		if( this.current_user )
			path = this.current_user.type == 'USER' ? '/#/admin' : '/';

		this.http.post<any>
		(
			`${this.domain_configuration.domain}/${this.urlBase}/updates.php`,
			obj,
			{ withCredentials: true, headers: this.getSessionHeaders() }
		)
		.subscribe(()=>
		{
			this.current_user = null;
			localStorage.clear();
			window.location.href=path;

		},(error:any)=>{
			console.log('ocurrio un error al finalizar la sesion',error);
			this.current_user = null;
			localStorage.clear();
			window.location.href = path
		});
	}

	getFilePath(file_id: number,download=false): string
	{
		let d_string = download ?'&download=1':'';

		return this.domain_configuration.domain+'/'+this.urlBase + '/attachment.php?id=' + file_id+d_string;
	}

	getPlatformImagePath(image1_id:SuperEmpty<number>): string
	{
		if( image1_id )
			return this.platform_domain_configuration.domain+'/'+this.getUrlPlatform()+ '/image.php?id=' + image1_id;

		return '/assets/2px_transparent.png';
	}

	//getUrlSafe(url:string):SafeUrl
	getUrlSafe(url:string):string
	{
		return url;
		//return this.dom_sanitizer.bypassSecurityTrustUrl(url);
	}

	//getImagePath(image1_id:SuperEmpty<number>,image2_id:SuperEmpty<number> = null,image3_id:SuperEmpty<number> = null,image4_id:SuperEmpty<number> = null ,image5_id:SuperEmpty<number> = null):SafeUrl
	getImagePath(image1_id:SuperEmpty<number>,image2_id:SuperEmpty<number> = null,image3_id:SuperEmpty<number> = null,image4_id:SuperEmpty<number> = null ,image5_id:SuperEmpty<number> = null):string
	{
		if (image1_id)
			return this.getUrlSafe(this.domain_configuration.domain+'/'+this.urlBase + '/image.php?id=' + image1_id);
		//console.log('dos');
		if (image2_id)
			return this.getUrlSafe(this.domain_configuration.domain+'/'+this.urlBase + '/image.php?id=' + image2_id);
		//console.log('tres');
		if (image3_id)
			return this.getUrlSafe(this.domain_configuration.domain+'/'+this.urlBase + '/image.php?id=' + image3_id);
		//console.log('cuatro');
		if (image4_id)
			return this.getUrlSafe(this.domain_configuration.domain+'/'+this.urlBase + '/image.php?id=' + image4_id);
		//console.log('cinco');
		if( image5_id )
			return this.getUrlSafe(this.domain_configuration.domain+'/'+this.urlBase + '/image.php?id=' + image5_id);
		return this.getUrlSafe('/assets/2px_transparent.png');
	}


	getStockReport(store_id:number,page:number,limit:number,name:string, type:string):Observable<any>
	{
		let query:any ={ store_id, page, limit, name, type };

		let params = new HttpParams();
		for(let i in query)
		{
			if( query[i] )
				params = params.set( i, ''+query[ i ] );
		}

		return this.http.get<any>(`${this.domain_configuration.domain}/${this.urlBase}/stock_info.php`, { params, headers: this.getSessionHeaders(), withCredentials: true });
	}

	getPreferencesFromSession():Preferences
	{
		let preferences:string|null = localStorage.getItem('preferences');
		let user:string | null = localStorage.getItem('user');
		let permissions = localStorage.getItem(USER_PERMISSION_KEY);

		if( permissions )
		{
			this.current_permission = JSON.parse(permissions);
		}

		if( user )
		{
			this.current_user = JSON.parse( user ) as User;
		}

		if( preferences )
		{
			this.local_preferences = JSON.parse( preferences );
			this.applyTheme();
			return this.local_preferences;
		}

		return {
				background_image_id: null,
				background_image_size: 'cover',
				btn_primary_bg_color: '#000000',
				btn_primary_bg_color_hover:null,
				btn_primary_border_color:null,
				btn_primary_border_color_hover:'#000000',
				btn_primary_border_width:1,
				btn_primary_text_color:null,
				btn_primary_text_color_hover:null,
				btn_secondary_bg_color:null,
				btn_secondary_bg_color_hover:null,
				btn_secondary_border_color:null,
				btn_secondary_border_color_hover:null,
				btn_secondary_border_width:1,
				btn_secondary_text_color:null,
				btn_secondary_text_color_hover:null,
				button_border_radius:'0.5em',
				button_style:null,
				card_background_color:null,
				card_background_image_id:null,
				card_background_opacity:60,
				card_border_color: 'transparent',
				card_border_radius:'0.5em',
				chat_upload_attachment_image_id:null,
				chat_upload_image_id:null,
				created:new Date(),
				currency_price_preference:'ONLY_DEFAULT_CURRENCY',
				default_cash_close_receipt: 1,
				default_ticket_format: 1,
				default_file_logo_image_id:null,
				default_input_type:'TACTILE',
				default_price_type_id:null,
				default_product_image_id:null,
				default_ticket_image_id:null,
				default_user_logo_image_id:null,
				display_categories_on_items:'YES',
				header_background_color:null,
				header_text_color:null,
				id:1,
				item_selected_background_color:'#000000',
				item_selected_text_color:'#FFFFFF',
				link_color:'#000000',
				link_hover:'#0000FF',
				login_background_image_id:null,
				login_background_image_size:'cover',
				login_image_id:null,
				logo_image_id:null,
				menu_background_color:'#FFFFFF',
				menu_background_image_id:null,
				menu_background_image_size:'cover',
				menu_background_type:'IMAGE',
				menu_color_opacity:60,
				menu_icon_color:'#000000',
				menu_text_color:'#000000',
				menu_title_color:'#000000',
				name:'',
				pv_bar_background_color:'#000000',
				pv_bar_text_color:'#FFFFFF',
				pv_bar_total_color:'#FFFFFF',
				radius_style:null,
				submenu_background_color:'#FFFFFF',
				submenu_color_opacity:80,
				submenu_icon_color:'#000000',
				submenu_text_color:'#000000',
				text_color: '#000000',
				titles_color:null,
				updated:new Date()
		};
	}

	getPreferencesInfo():Promise<Preferences>
	{
		console.log('Init preferences');

		let furl = `${this.domain_configuration.domain}/${this.urlBase}/preferences.php?domain=${window.location.hostname}`;
		return firstValueFrom
		(
			this.http.get<RestResponse<Preferences>>(furl)
			.pipe
			(
				mergeMap(response=>
				{
					if( response.data.length )
					{
						this.local_preferences = response.data[0];
						this.applyTheme();
						//console.log('Preferencias en getPreferencesInfo');

						localStorage.setItem('preferences', JSON.stringify( this.local_preferences ) );
					}
					else
					{
						this.local_preferences = this.getPreferencesFromSession();
						this.local_preferences.name = '';
						this.local_preferences.menu_background_color = '#FFFFFF';
					}
					return of(this.local_preferences);
				})
			)
		);
	}

	showSuccess(msg:string):void
	{
		this.showErrorMessage(new ErrorMessage(msg, 'alert-success'));
	}

	showError(error: any)
	{
		console.log('Error to display is', error);
		if( error instanceof ErrorMessage )
		{
			this.showErrorMessage(error);
			return;
		}

		let str_error = Utils.getErrorString(error);
		this.showErrorMessage(new ErrorMessage(str_error, 'alert-danger'));
	}

	showErrorMessage(error: ErrorMessage)
	{
		this.errorBehaviorSubject.next(error);
	}

	uploadImage(file:File,is_private:boolean=false, max_width:number = 0, max_height:number = 0):Observable<Image>
	{
		let fd = new FormData();
		fd.append('is_private', is_private ? '1' : '0');
		fd.append('max_height', ''+max_height);
		fd.append('max_width', ''+max_width);
		fd.append('image', file, file.name);

		let headers = new HttpHeaders();
		headers.append('Content-Type', 'multipart/form-data');

		return this.http.post<Image>(`${this.domain_configuration.domain}/${this.urlBase}/image.php`, fd, { headers: this.getSessionHeaders(), withCredentials: true });
	}

	uploadAttachment(file:File,is_private:boolean=false):Observable<AttachmentInfo>
	{
		let fd = new FormData();
		fd.append('file', file, file.name);
		fd.append('is_private', (is_private ? '1' : '0'));
		return this.http.post<AttachmentInfo>(`${this.domain_configuration.domain}/${this.urlBase}/attachment.php`,fd,{headers:this.getSessionHeaders(),withCredentials:true});
	}

	public hideMenu():void
	{
		this.show_menu = false;
	}

	toggleMenu():void
	{
		this.show_menu = !this.show_menu;
	}

	scrollTop()
	{
		let x = document.querySelector('.page_content>.custom_scrollbar');
		if (x)
			x.scrollTo(0, 0);
	}

	facturar(order_id:number):Observable<string>
	{
		return this.http.get<any>(`${this.domain_configuration.domain}/${this.urlBase}/facturar.php?id=${order_id}`, { headers: this.getSessionHeaders(), withCredentials: true });
	}


	update<T>(method:string,data:any):Observable<T>
	{
		let obj:Record<string,string> = { };

		for(let i in data)
		{
			if( data[i] === null )
				continue;

			obj[i] = data[i];
		}
		obj['method'] = method;

		return this.http.post<T>(`${this.domain_configuration.domain}/${this.urlBase}/updates.php`,obj , { withCredentials: true, headers: this.getSessionHeaders() });
	}

	post(url:string,payload:Object):Observable<Object>
	{
		let postUrl:string= this.domain_configuration.domain+'/'+this.urlBase+'/'+url;
		//console.log('Url to post',postUrl);
		return this.http.post(postUrl,JSON.stringify( payload ),{headers:this.getSessionHeaders(),withCredentials:true});
	}


	getCategoryStock(store_id:number | null = null,type:string = '' ):Observable<CategoryStock[]>
	{
		let params = new HttpParams();
		if( store_id )
			params = params.set('store_id',''+store_id);

		if( type )
			params = params.set('type',type );

		params = params.set('report_name','getCategoryStock');

		return this.http.get<CategoryStock[]>(
			`${this.domain_configuration.domain}/${this.urlBase}/reportes.php`,
			{
				params,
				headers: this.getSessionHeaders(),
				withCredentials: true
			}
		);
	}

	getStoreStock(type:string = ''):Observable<StoreStock[]>
	{
		let params = new HttpParams();

		if( type )
			params = params.set('type',type );

		params = params.set('report_name','getStoreStock');

		return this.http.get<StoreStock[]>(
			`${this.domain_configuration.domain}/${this.urlBase}/reportes.php`,
			{
				params,
				headers: this.getSessionHeaders(),
				withCredentials: true
			}
		);
	}

	updateOrderDeliveryStatus(order_id:number, delivery_status: 'PENDING'|'SENT'|'DELIVERED'|'READY_TO_PICKUP', commanda_type_id:number | null = null)
	{
		return this.update('updateOrderDeliveryStatus', {order_id, delivery_status, commanda_type_id }) as Observable<Order>;
	}

	updateOrderPreparationStatus(order_id:number, preparation_status: 'PENDING'|'READY',commanda_type_id:number | null = null):Observable<Order>
	{
		return this.update('updateOrderPreparationStatus', {order_id, preparation_status, commanda_type_id }) as Observable<Order>;
	}
	getReporte(report_name:string, query:Record<string,any>):Observable<any>
	{
		let params = new HttpParams();
		for(let i in query)
		{
			if( query[i] )
				params = params.set( i, ''+query[ i ] );
		}
		params = params.set('report_name',report_name);
		return this.http.get<any>(`${this.domain_configuration.domain}/${this.urlBase}/reportes.php`, { params, headers: this.getSessionHeaders(), withCredentials: true });
	}

	getOrdersReportByTag(store_id:number, date1:string | null = null, date2:string | null=null ):Observable<TagStock[]>
	{
		return this.getReporte('getOrdersReportByTag', {store_id, date1, date2});
	}

	getTotalSalesByStore(store_id:number, date1:string|null=null, date2:string|null = null ):Observable<TotalSalesByStore[]>
	{
		return this.getReporte('getTotalSalesByStore', {store_id, date1, date2});
	}

	getAllTagsByStore(store_id?:number):Observable<string[]>
	{
		return this.getReporte('getAllTagsByStore', {store_id});
	}

	markPushNotificationsAsRead():Observable<any>
	{
		return this.update('markPushNotificationsAsRead', {});
	}

	removeBoxFromPallet(box_id:number):Observable<any>
	{
		return this.update('removeBoxFromPallet', {box_id});
	}
	//subscribe(sub:Subscription)
	getFileContentAsString(id: number):Observable<string>
	{
		return this.http.get(this.getFilePath(id), {headers: this.getSessionHeaders(), withCredentials: true , responseType: 'text'});
	}
	approveBill(bill: Bill):Observable<Bill>
	{
		return this.update<Bill>('approveBill', bill);
	}
	rejectBill(bill: Bill):Observable<Bill>
	{
		return this.update('rejectBill', bill);
	}
	//{
	getProvidersBalance(user_ids: number[]):Observable<Record<string,any>[]>
	{
		return this.getReporte('getProvidersBalance', { user_id: user_ids.join(',') });
	}
	//	return this.http.post<any>(this.notificationUrl,sub);
	//removeProductionItem(pi: Production_Item):Observable<any>
	//{
	//	return this.update('removeProductionItem',{ production_item_id: pi.id });
	//}
	//	//this.swPush.requestSubscription({
	//fullfillOrder(order_id: number, order_item_fullfillment_list:Order_Item_Fullfillment[]):Observable<any>
	//{
	//	return this.update('fullfillOrder', {
	//		order_id: order_id,
	//		items: order_item_fullfillment_list
	//	});
	//}
	//	//	serverPublicKey: this.VAPID_PUBLIC_KEY
	removeBox(box_id: number, note: string):Observable<any> {
		return this.update('removeBox', { box_id, note });
	}

	adjustStock(stock_records:Stock_Record[])
	{
		return this.update('adjustStock',{stock_records});
	}

	getUrlAsString(url:string):Observable<string>
	{
		return this.http.get(url, {headers: this.getSessionHeaders(), withCredentials: true , responseType: 'text'});
	}

	applyTheme()
	{

		if( this.local_preferences == null )
			return;

		let properties:Record<string,string> = {
			'--menu-icon-color':this.local_preferences.menu_icon_color || '#F66151',
			'--menu-text-color':this.local_preferences.menu_text_color || '#F66151',
			'--menu-title-color':this.local_preferences.menu_title_color || '#F66151',
			'--submenu-icon-color':this.local_preferences.submenu_icon_color || '#FFFFFF',
			'--submenu-text-color':this.local_preferences.submenu_text_color || '#FFFFFF',
			'--button-border-radius': this.local_preferences.button_border_radius || '.25em',

			'--btn-primary-bg-color': this.local_preferences.btn_primary_bg_color || '#F66151',
			'--btn-primary-bg-color-hover': this.local_preferences.btn_primary_bg_color_hover || '#F66151',
			'--btn-primary-text-color': this.local_preferences.btn_primary_text_color || '#FFFFFF',
			'--btn-primary-text-color-hover': this.local_preferences.btn_primary_text_color_hover || '#FFFFFF',
			'--btn-primary-border-color': this.local_preferences.btn_primary_border_color || '#F66151',
			'--btn-primary-border-color-hover': this.local_preferences.btn_primary_border_color_hover || '#F66151',

			'--btn-secondary-bg-color': this.local_preferences.btn_secondary_bg_color || '#6c757d',
			'--btn-secondary-bg-color-hover': this.local_preferences.btn_secondary_bg_color_hover || '#6c757d',
			'--btn-secondary-text-color': this.local_preferences.btn_secondary_text_color || '#000000',
			'--btn-secondary-text-color-hover': this.local_preferences.btn_secondary_text_color_hover || '#000000',
			'--btn-secondary-border-color': this.local_preferences.btn_secondary_border_color || '##6c757d',
			'--btn-secondary-border-color-hover': this.local_preferences.btn_secondary_border_color_hover || '#6c757d',



			'--header-background-color': this.local_preferences.header_background_color || '#F66151',
			'--header-text-color': this.local_preferences.header_text_color || '#000000',
			'--link-color': this.local_preferences.link_color || '#F66151',
			'--link-color-hover': this.local_preferences.link_hover || '#F66151',
			'--button-style': this.local_preferences.button_style || 'transparent',
			'--titles-color': this.local_preferences.titles_color || '#000000',
			'--card-border-radius': this.local_preferences.card_border_radius || '.25em',
			'--button_border_radius': this.local_preferences.button_border_radius || '.25em',
			'--text-color': this.local_preferences.text_color || '#000000',
			'--icon-menu-color':this.local_preferences.pv_bar_background_color || 'white',
			'--pv-bar-text-color': this.local_preferences.pv_bar_text_color || '#FFFFFF',
			'--pv-bar-background-color': this.local_preferences.pv_bar_background_color || '#000000',
			'--pv-bar-total-color': this.local_preferences.pv_bar_total_color || '#FFFFFF',
			'--item-selected-background-color': this.local_preferences.item_selected_background_color || '#F66151',
			'--item-selected-text-color': this.local_preferences.item_selected_text_color || '#FFFFFF',
		};

		let body = window.document.body;

		for(let i in properties )
		{
			if( properties[ i ] )
			{
				body.style.setProperty( i, properties[i] );
			}
		}

		if( this.local_preferences.display_categories_on_items == 'YES' )
		{
			body.style.setProperty('--pos_item_height', '56px')
		}
		else
		{
			body.style.setProperty('--pos_item_height', '44px')
		}


		if( this.local_preferences?.login_background_image_id )
		{
			let path = this.getImagePath(this.local_preferences.login_background_image_id);
			//let sanited_path = this.dom_sanitizer.bypassSecurityTrustResourceUrl(path);

			//console.log('sanited_path',	sanited_path);
			//console.log('setting background image',this.getImagePath(this.local_preferences.background_image_id));
			if( this.local_preferences.login_background_image_size == 'cover')
				body.style.setProperty('--login-background-image','url('+path+') no-repeat fixed center/cover transparent');
			else
				body.style.setProperty('--login-background-image','url('+path+') repeat fixed');
		}

		if( this.local_preferences.background_image_id )
		{
			let path = this.getImagePath(this.local_preferences.background_image_id);

			//if( this.local_preferences.background_image_size == 'cover' )
			//{
			//	body.style.setProperty('--background-image', 'url('+path+') no-repeat fixed center/cover transparent');
			//}
			//else
			//{
			//	body.style.setProperty('--background-image','url('+path+') repeat fixed');
			//}

			if( this.local_preferences.background_image_id )
			{
				if( this.local_preferences.background_image_size == 'cover' )
				{
					body.style.setProperty('--background-image', 'url('+path+') no-repeat fixed center/cover transparent');
				}
				else
				{
					body.style.setProperty('--background-image','url('+path+') repeat fixed');
				}
			}
			else if( this.local_preferences.background_image_size == 'cover' )
			{
				body.style.setProperty('--menu-background-image','url(/assets/default_background.webp) no-repeat fixed center/cover transparent');
			}
			else
			{
				body.style.setProperty('--menu-background-image','url(/assets/default_background.webp) repeat fixed');
			}
		}
		else
		{
			body.style.setProperty('--menu-background-image','url(/assets/default_background.webp) repeat fixed');
		}

		if( this.local_preferences.menu_background_type == 'COLOR' && this.local_preferences.menu_background_color)
		{
			let hex = this.local_preferences.menu_background_color.substring(1,8);
			var bigint = parseInt(hex, 16);
			var r = (bigint >> 16) & 255;
			var g = (bigint >> 8) & 255;
			var b = bigint & 255;

			let percent = this.local_preferences.menu_color_opacity/100;

			body.style.setProperty('--menu-background-image','none');
			body.style.setProperty('--menu-background-color','rgba('+r+','+g+','+b+','+percent+')')
		}
		else
		{
			body.style.setProperty('--menu-background-color','transparent');

			if( this.local_preferences.menu_background_image_id )
			{
				if( this.local_preferences.menu_background_image_size == 'cover' )
				{
					body.style.setProperty('--menu-background-image', 'url('+this.getImagePath( this.local_preferences.menu_background_image_id )+') no-repeat fixed center/cover transparent');
				}
				else
				{
					body.style.setProperty('--menu-background-image','url('+this.getImagePath( this.local_preferences.menu_background_image_id )+') repeat fixed');
				}
			}
			else if( this.local_preferences.menu_background_image_size == 'cover' )
			{
				body.style.setProperty('--menu-background-image','url(/assets/default_menu_background.jpg) no-repeat fixed center/cover transparent');
			}
			else
			{
				body.style.setProperty('--menu-background-image','url(/assets/default_menu_background.jpg) repeat fixed');
			}
		}

		if( this.local_preferences.submenu_background_color )
		{
			let hex = this.local_preferences.submenu_background_color.substring(1,8);
			var bigint = parseInt(hex, 16);
			var r = (bigint >> 16) & 255;
			var g = (bigint >> 8) & 255;
			var b = bigint & 255;

			let percent = this.local_preferences.submenu_color_opacity/100;

			body.style.setProperty('--submenu-background-color','rgba('+r+','+g+','+b+','+percent+')')
		}
		else
		{

			body.style.setProperty('--submenu-background-color','#eb5a4e');
		}

		if( this.local_preferences.card_background_image_id )
		{
			body.style.setProperty('--card-background-color','transparent');
		}
		else if( this.local_preferences.card_background_color )
		{
			let hex = this.local_preferences.card_background_color.substring(1,8);
			//console.log('hex is',hex);
			var bigint = parseInt(hex, 16);
			var r = (bigint >> 16) & 255;
			var g = (bigint >> 8) & 255;
			var b = bigint & 255;

			//console.log('rgb is',r,g,b);
			let percent = this.local_preferences.card_background_opacity/100;
			body.style.setProperty('--card-background-color','rgba('+r+','+g+','+b+','+percent+')');
			body.style.setProperty('--card-background-color-plain',this.local_preferences.card_background_color);
			body.style.setProperty('--card-background-image', 'none');
		}
		else
		{
			body.style.setProperty('--card-background-color','#FFFFFF');
			body.style.setProperty('--card-background-color-plain','#FFFFFF');
			body.style.setProperty('--card-background-image', 'none');
		}

		if( this.local_preferences.card_border_color == 'transparent' )
		{
			body.style.setProperty('--card-border-style', 'none');
			body.style.setProperty('--card-border-width', '0');
		}
		else
		{
			body.style.setProperty('--card-border-style', 'solid');
			body.style.setProperty('--card-border-width', '1px');
			body.style.setProperty('--card-border-color', this.local_preferences.card_border_color);
		}



	}

	markOrderItemsAsPending(order_id:number):Observable<unknown>
	{
		return this.update('markOrderDeliveryStatusAsPending',{order_id});
	}

	roundTo4(number:number)
	{
		return Math.floor(number*1000)/1000;
	}

	updateOrderItemPrice(order_item:Order_Item | Quote_Item, tax_percent:number,extra_charge_percent:number)
	{
		if( order_item.tax_included == 'NO' )
		{
			order_item.unitary_price = order_item.original_unitary_price*(1+(extra_charge_percent*extra_charge_percent));
			order_item.subtotal	= this.roundTo4(order_item.unitary_price*order_item.qty);
			///order_item.tax		= (order_item.subtotal-order_item.discount)*(tax_percent/100);
			//order_item.total	= (order_item.subtotal-order_item.discount)+order_item.tax;
			order_item.tax		= order_item.subtotal*(tax_percent/100);
			order_item.total	= order_item.subtotal+order_item.tax;
		}
		else
		{
			//No es tan sencillo como parece
			//no es lo mismo
			//100/3 --->este valor la compu no lo entiende y la facturacion vale ferga
			//que 33.3333

			//primero hay que multiplar todo nos va a dar el valor mas grande
			//Luego sacamos los precios individuales y lo truncamos a 4
			//volvemos a multiplicar con los valores truncados y ese va a ser el total

			let up:number = (order_item.original_unitary_price * order_item.qty) * (1+(extra_charge_percent/100));
			order_item.unitary_price = this.roundTo4( up /(1+(tax_percent/100)))/order_item.qty;
			order_item.subtotal = order_item.unitary_price*order_item.qty;
			//order_item.tax	= (order_item.subtotal-order_item.discount)*(tax_percent/100);
			//order_item.total	= order_item.tax+(order_item.subtotal-order_item.discount);
			order_item.tax		= order_item.subtotal*(tax_percent/100);
			order_item.total	= order_item.tax+order_item.subtotal;
		}
	}

	getOrderTotal(search:SearchObject<Order>):Observable<RestResponse<any>>
	{


		let new_search = {...search }
		new_search.search_extra = {...search.search_extra};

		//TODO clonar o hacer algo
		new_search.search_extra['report_name'] = 'getTotalOrders';

		return this.order_total.search(new_search);
	}

	splitOrder(sor:SplitOrderRequest):Observable<number>
	{
		return this.update('splitOrder', sor);
	}

	updateCommandaSetOrderItemsAsPending(order_item_ids:number[]):Observable<RestResponse<any>>
	{
		return this.update('commandaSetOrderItemAsPending',{order_item_ids});
	}
	updateCommandaSetOrderItemsAsDismissed(order_item_ids:number[]):Observable<RestResponse<any>>
	{
		return this.update('commandaSetOrderItemAsDismissed',{order_item_ids});
	}

	//getLocationFromAddress(address:string):Observable<GeocodingResponse>
	//{
	//	return this.http.get<GeocodingResponse>('https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address)+'&key='+environment.app_settings.geolocation_key);
	//}

	//getAddressFromLatLng(latLngLit:google.maps.LatLngLiteral):Observable<GeocodingResponse>
	//{
	//	let latlng:string = latLngLit.lat+','+latLngLit.lng;
	//	return this.http.get<GeocodingResponse>('https://maps.googleapis.com/maps/api/geocode/json?latlng='+latlng+'&location_type=ROOFTOP&key='+environment.app_settings.geolocation_key);
	//}

	//getAddressFromGeolocationPosition(geolocation_position:GeolocationPosition):Observable<GeocodingResponse>
	//{
	//	return this.getAddressFromLatLng
	//	({
	//		lat:geolocation_position.coords.latitude,
	//		lng:geolocation_position.coords.longitude
	//	});
	//}

	loadGoogleMapsApi():Observable<any>
	{
		if( this.is_maps_loaded )
			return of(true);

		if( !environment.app_settings.load_google_maps )
			return of(false);

		return this.http.jsonp('https://maps.googleapis.com/maps/api/js?key='+environment.app_settings.geolocation_key, 'callback').pipe
		(
			mergeMap(()=>{
				this.is_maps_loaded = true;
				return of( true );
			})
		);
	}

	setClientStoreId(store_id:number):void
	{
		this.client_selected_store_id = store_id;
		localStorage.setItem('client_selected_store_id', ''+store_id);

	}
	getClientStoreId():number | null
	{
		if( this.client_selected_store_id )
			return this.client_selected_store_id;

		let str = localStorage.getItem('client_selected_store_id');
		if( str )
		{
			this.client_selected_store_id = parseInt( str ) as number;
			return this.client_selected_store_id;
		}

		return null;
	}

	assignDeliveryUserToOrder(user_id:number, order_id:number):Observable<any>
	{
		return this.update('assignDeliveryUserToOrder', {user_id,order_id});
	}

	normalizarOrderItems(order_item_info_list:OrderItemInfo[])
	{
		let temp_list = order_item_info_list.map(i=>i);
		let final_list:OrderItemInfo[] = [];

		temp_list.sort((a,b)=>
		{
			let aa= !!a.order_item.item_option_id;
			let bb= !!b.order_item.item_option_id;

			if( aa == bb )
				return 0;

			return aa ? -1 : 1;
		});

		while( temp_list.length )
		{
			let item_info = temp_list.pop() as OrderItemInfo;
			let subitems = temp_list.filter((i)=>i.order_item.item_group == item_info.order_item.item_group);
			final_list.push( item_info );

			subitems.forEach((a)=>
			{
				let index = temp_list.indexOf(a);
				temp_list.splice(index,1);
				a.order_item.qty = a.order_item.item_option_qty*item_info.order_item.qty;
				final_list.push( a );
			});
		}
		return final_list;
	}

	setStore(psi:PlatformStoreInfo):Promise<any>
	{
		localStorage.setItem('platform_store_info', JSON.stringify(psi));
		let protocol:string = window.location.protocol;

		let new_domain = protocol+'//'+psi.domains[0].domain;

		if( new_domain == this.domain_configuration.domain )
		{

			return Promise.resolve();
		}

		this.domain_configuration.domain = protocol+'//'+psi.domains[0].domain;

		this.sendNotification('domain', psi.domains[0].domain );

		return forkJoin
		({
			user: this.user.get('me'),
			preferences: this.preferences.get(1),
			clean_cart: this.cleanCart()
		})
		.toPromise()
		.then((response)=>
		{
			console.log('Preferencias en set store');
			this.local_preferences = response?.preferences as Preferences;
			this.current_user = response?.user || null;
			localStorage.setItem('user', JSON.stringify(response?.user as User));
			localStorage.removeItem('client_selected_store_id');
			localStorage.setItem('preferences', JSON.stringify(this.local_preferences));
			this.client_selected_store_id = null;

			this.applyTheme();
		})
		.catch(()=>
		{
			this.showError('Ocurrio un error por favor intente de nuevo');
		});
	}

	getLoginLogo():string
	{
		if( window.location.hostname.indexOf('pos.integranet.xyz') !== -1)
			return this.getUrlSafe('/assets/integranet_logo.jpg');

		return this.getImagePath(this.local_preferences.login_image_id, this.local_preferences.logo_image_id );
	}

	updateCategoryPrices(category_id:number,price_list_id:number, price_type_id:number, price:number,tax_included:'YES' | 'NO', currency_id:string ):Observable<string>
	{
		return this.update('updateCategoryPrices', { category_id,price_list_id, price_type_id, price, currency_id, tax_included });
	}
	cancelOrder(order_id:number):Observable<any>
	{
		return this.update('cancelOrder',{order_id});
	}
	setOrderActive(order_id:number):Observable<any>
	{
		return this.update('setOrderActive',{order_id});
	}

	updateDatosFacturacion(order:Order):Observable<any>
	{
		return this.update('updateDatosFacturacion',order);
	}

	updateUserPosition(coords:any):Observable<any>
	{
		return this.update('updateUserPosition',coords);
	}

	searchOfflineItemInfo( name:string ):Observable<RestResponse<ItemInfo>>
	{
		//return from( OfflineUtils.search(this.offline_db, name).then((items)=>{
		//	return Promise.resolve({
		//		total: items.length,
		//		data: items
		//	});
		//}));


		return from( OfflineUtils.dumbSearch2(this.offline_db, name).then((items)=>{
			return Promise.resolve({
				total: items.length,
				data: items
			});
		}));
	}

	getOfflineOrderInfoById(id:number):Promise<OrderInfo>
	{
		return this.offline_db.getByKey('order_info', 'order.id', id);
	}

	getOfflineOrderInfoBySyncId(sync_id:string):Promise<OrderInfo>
	{
		return this.offline_db.getByKey('order_info', 'order.sync_id', sync_id);
	}

	getOfflinePaymentByOderSyncId(order_sync_id:any):Promise<PaymentInfo | null>
	{
		return this.offline_db.getByKey('payment_info', 'order_sync_id',order_sync_id);
	}
	getOfflinePayment(sync_id:string)
	{
		return this.offline_db.get('payment_info', sync_id);
	}

	getOfflineCategories()
	{
		return from( OfflineUtils.getCategories(this.offline_db) );
	}

	getOfflineItemsByCategory(category_id:number)
	{
		console.log('SI funca o no funca');
		return from( OfflineUtils.getItemInfoByCategory(this.offline_db, category_id) );
	}

	getOfflineCategoriesAndItems(category_id:number):Promise<ItemCategorySearch>
	{
		return OfflineUtils.getCategoriesAndItems(this.offline_db, category_id );
	}

	getCurrencyRates():Observable<RestResponse<Currency_Rate>>
	{
		if( this.is_offline || this.offline_search_enabled )
		{
			let p = this.offline_db.getAll('currency_rate').then((p)=>{
				return {
					total: p.length,
					data: p
				};
			})
			return from( p ) as Observable<RestResponse<Currency_Rate>>;
		}

		return this.currency_rate.search({limit:999999}).pipe
		(
			catchError(()=>
			{
				let p = this.offline_db.getAll('currency_rate').then((p)=>{
					return {
						total: p.length,
						data: p
					};
				})
				return from( p ) as Observable<RestResponse<Currency_Rate>>;
			})
		);
	}

	getPriceTypes():Observable<RestResponse<Price_Type>>
	{
		let options = new Options();
		options.index = 'name';

		if( this.is_offline || this.offline_search_enabled )
		{
			let p = this.offline_db.getAll('price_type',options).then((response)=>{
				return {
					total: response.length,
					data: response
				} as RestResponse<Price_Type>
			})
			return from( p );
		}

		return this.price_type.search({limit:99999,sort_order:['name_ASC']}).pipe
		(
			catchError(()=>
			{
				let p = this.offline_db.getAll('price_type',options).then((response)=>{
					return {
						total: response.length,
						data: response
					} as RestResponse<Price_Type>
				})

				return from( p ) as Observable<RestResponse<Price_Type>> //getAll('price_type')
			})
		);
	}

	getStores():Observable<RestResponse<Store>>
	{
		if( this.is_offline || this.offline_search_enabled )
		{
			let options = new Options();
			options.index = 'name';

			let p = this.offline_db.getAll('store',options).then((response)=>{
				return {
					total: response.length,
					data: response
				} as RestResponse<Store>;
			});

			return from( p ) as Observable<RestResponse<Store>>
		}

		return this.store.search({limit:9999,sort_order:['name_ASC']}).pipe
		(
			catchError((_error)=>
			{
				let options = new Options();
				options.index = 'name';

				let p = this.offline_db.getAll('store',options).then((response)=>{
					return {
						total: response.length,
						data: response
					} as RestResponse<Store>;
				});

				return from( p ) as Observable<RestResponse<Store>>
			})
		);
	}

	addPurchaseToStock(purchase_id: number):Observable<any>
	{
		return this.update('addPurchaseItemsToStock', {purchase_id})
	}

	proccessOfflineOrder(order_info:OrderInfo):Promise<any>
	{
		return this.order_info.search({eq:{sync_id:order_info.order.sync_id},limit:1}).toPromise()
		.then((response:any)=>
		{
			if( response.total== 0 )
			{
				return this.order_info.create(order_info).toPromise();
			}
			return of( response.data[0] ).toPromise();
		})
		.then((oi)=>
		{
			this.showSuccess('Orden Actualizada Correctamente');
			console.log('Llega aqui quien sabe');
			let options = new Options();
			options.index = 'order_sync_id';
			options.comparations.set('=', order_info.order.sync_id );
			return Promise.all
			([
				Promise.resolve(oi),
				this.offline_db.getAll<PaymentInfo>('payment_info',options)
			]);
		})
		.then((response)=>
		{
			let oi:OrderInfo = response[0] as OrderInfo; //Es el que viene de la red y tiene orden.id
			let payment_info_list:PaymentInfo[] = response[1];

			for(let p of payment_info_list)
			{
				for(let movement of p.movements)
				{
					if( !movement?.bank_movement_orders )
						continue;

					for(let bmo of movement.bank_movement_orders)
					{
						bmo.order_id = oi.order.id;
					}
				}
			}

			if( payment_info_list.length > 0 )
				return this.payment_info.batchCreate(payment_info_list).toPromise();

			return Promise.resolve([]);
		})
		.then((response)=>
		{
			return OfflineUtils.removeOrderInfo( this.offline_db, order_info );
		})
	}

	createStructuredItems(order_info:OrderInfo)
	{
		let ois:OrderItemStructureInfo[] = [];

		order_info.items.forEach((oii:OrderItemInfo,index:number)=>
		{
			if( ois.length == 0 || order_info.items[index-1].order_item.item_group != oii.order_item.item_group )
			{
				ois.push({...oii,childs:[]})
			}
			else
			{
				ois[ois.length-1].childs.push(oii);
			}
		});

		order_info.structured_items = ois;
	}
	setQuoteItemPrice(ii:Order_Item | Quote_Item, price: Price, store:Store, rates:Currency_Rate[]):boolean
	{
		return this.setOrderItemPrice(ii, price, store, rates);
	}

	setOrderItemPrice(ii:Order_Item | Quote_Item, price: Price, store:Store, rates:Currency_Rate[]):boolean
	{
		if( price.currency_id == store.default_currency_id )
		{
			ii.original_unitary_price = price.price;
			return true;
		}

		let cr:Currency_Rate | undefined = rates.find( (r)=> r.currency_id == price.currency_id );

		if(!cr )
		{
			this.showError('No se encontro el tipo de cambio para la moneda ' + price.currency_id);
			return false;
		}

		ii.original_unitary_price = price.price * cr.rate;
		return true;
	}

	facturarPeriodo(ids:string,billing_data_id:number, store_id:number, tax_percent:number,currency_id:string,sat_serie:string):Observable<any>
	{
		let url = `${this.domain_configuration.domain}/${this.urlBase}/facturar_periodo.php`;

		let payload:Record<string,any> = {
			ids,
			store_id,
			billing_data_id,
			tax_percent,
			currency_id,
			sat_serie
		};
		return this.http.post<any>( url, payload , { withCredentials: true, headers: this.getSessionHeaders() });
	}

	createPaypalOrder(order_id:number | null):Promise<any>
	{
		let url = `${this.domain_configuration.domain}/${this.urlBase}/paypal_order.php?order_id=${order_id}`;
		let bearer = localStorage.getItem('session_token');
		//return fetch(url,
		//{
		//	method: 'POST',
		//	headers: { 'content-type' : 'application/json', 'Authorization': 'Bearer '+bearer },
		//	credentials: 'include',
		//	body : JSON.stringify({order_id})
		//})
		//.then(function(res)
		//{
		//	return res.json();
		//}).then(function(data) {
		//	return data.id;
		//});

		return this.http.post<any>( url, {order_id}, { withCredentials: true, headers: this.getSessionHeaders() })
		.toPromise()
		.then((data)=>
		{
			return Promise.resolve( data.id );
		});
	}

	captureOrder(paypal_order_id:number | string):Promise<any>
	{
		let url = `${this.domain_configuration.domain}/${this.urlBase}/paypal_order.php?paypal_order_id=${paypal_order_id}&action=capture`;
		//return fetch( url,
		//{
		//	method: 'POST',
		//	credentials: 'include',
		//	headers: { 'content-type' : 'application/json', 'Authorization': 'Bearer '+bearer },
		//	body : ''
		//})
		//.then(function(res)
		//{
		//	return res.json();
		//})
		//.then(()=>
		//{
		//	return Promise.resolve();
		//});
		return this.http.post<any>( url, '', { withCredentials: true, headers: this.getSessionHeaders() }).toPromise();
	}

	removeOrderItem(order_item_id:number):Observable<any>
	{
		return this.update('cancelOrderItem', {order_item_id});
	}

	getVersion():string
	{
		let buildTime = new Date();
		buildTime.setTime(BuildInfo.timestamp);
		let date_pipe = new DatePipe('en-us');
		let version_created = date_pipe.transform( buildTime, 'yyMMdd:HHmm','UTC')+'-'+date_pipe.transform(buildTime,'hhmm');
		return version_created;
	}

	setClientStore(client_user_id:number, store_id:number):Observable<any>
	{
		return this.update('setClientStore', {client_user_id, store_id});
	}

	updateOrderItemsPreparationStatus(order_item_ids:number[], preparation_status:'PENDING'|'DELIVERED'|'IN_PREPARATION'|'READY'):Observable<any>
	{
		return this.update('updateOrderItemsPreparationStatus', {order_item_ids,preparation_status});
	}

	isOrderPrinted(id:string):Promise<boolean>
	{
		return this.offline_db.transaction(['printed_orders'],'readwrite',(stores:StoreDictionary,_txt:IDBTransaction)=>
		{
			stores['printed_orders'].debug = false;
			console.log('Check if is printed 1',id);
			return stores['printed_orders'].get(id).then((result:any)=>
			{
				if( result == undefined )
				{
					return stores['printed_orders']
						.add({id:id},null)
						.then(()=>Promise.resolve(false));
				}
				console.log('Check yes it was found');
				return Promise.resolve(true);
			})
			.catch(()=>
			{
				console.log('Check No it not was found');
				return stores['printed_orders']
						.add({id:id},null)
						.then(()=>Promise.resolve(false));
			})
		});
	}

	getPrintedItems(ids:string[]):Promise<any>
	{
		return this.offline_db.transaction(['printed_items'],'readwrite',(stores:StoreDictionary,_txt:IDBTransaction)=>
		{
			stores['printed_items'].debug = true;

			let filter = (r:Record<string,string>)=>{
				return ids.includes(r['id']);
			};

			return stores['printed_items']
				.getAll(new Options(),filter)
				.then((printed)=>
				{
					//Not printed only contains the ids
					let not_printed = ids.filter((id)=>
					{
						return printed.find((obj:any)=>obj.id == id) == undefined;
					}).map((id)=>{return {id:id}});

					return stores['printed_items'].addAll(not_printed,true)
					.then(()=>
					{
						return printed;
					});
				});
		});
	}
	getTable(table_id:string | number ):Observable<Table|null>
	{
		if( table_id === null )
			return of( null );

		let id:number = 0;

		if( typeof table_id === "number" )
		{
			id = table_id;
		}
		else
		{
			id = parseInt(table_id,10) as number;
		}

		return from( this.offline_db.get('table', id)) as Observable<Table>;
	}

	public get is_offline()
	{
		return this._is_offline;
	}

	public set is_offline(b:boolean)
	{
		this._is_offline = b;

		if( b )
		{
			localStorage.setItem('is_offline','true');
			//this.initSocketIo();
		}
		else
		{
			localStorage.removeItem('is_offline');
			//if( this.socket && 'disconnect' in this.socket )
			//{
			//	console.log('Disconnecting');
			//	this.socket.disconnect();
			//	this.socket = null;
			//}
		}
	}

	public get offline_search_enabled():boolean
	{
		return this._offline_search_enabled;
	}

	public set offline_search_enabled(b:boolean)
	{
		this._offline_search_enabled = b;
		if( b )
		{
			localStorage.setItem('offline_search_enabled','true');
		}
		else
		{
			localStorage.removeItem('offline_search_enabled');
		}
	}
}
