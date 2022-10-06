// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase:
	{
		apiKey: 'AIzaSyA0hDiGA_QO-THBt--Mof6iaqwErjV1Yno',
		authDomain: 'notifications-c7243.firebaseapp.com',
		projectId: 'notifications-c7243',
		storageBucket: 'notifications-c7243.appspot.com',
		messagingSenderId: '397579425541',
		appId: '1:397579425541:web:335ff85dd2a60e241f896c',
		measurementId: 'G-SWFWYGKN4M',
	},
	app_settings:{
		geolocation_key: "AIzaSyC2RzI_wHQBIysXsI-g_Miwg2J1-o14cn8",
		load_google_maps: false,
		hashids_salt: 'mCP7VhvOT3B',
		hashids_alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
		hashids_length: 5,
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
