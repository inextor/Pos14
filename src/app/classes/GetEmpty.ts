import { ItemInfo, ItemOptionInfo } from "../models/models";
import { Category, Item, Item_Exception, Price, Stock_Record } from "../models/RestModels";

export class GetEmpty
{
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
			name:'',
			type:'PRODUCT',
			updated:new Date(),
			updated_by_user_id: null,
		}
    }

	static itemInfo():ItemInfo
	{
		let item:Item = {
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
}
