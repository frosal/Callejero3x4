// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{ //autenticación firebase
    apiKey: "AIzaSyCc9fYHcQjM_cmtwQRJROC6oMEV7rtF8vA",
    authDomain: "callejero-9db30.firebaseapp.com",
    databaseURL: "https://callejero-9db30.firebaseio.com",
    projectId: "callejero-9db30",
    storageBucket: "callejero-9db30.appspot.com",
    messagingSenderId: "768784275736",
    AgrupCollection:"Agrupaciones",
    
  },


defaultAgrup: "Empty data base.",
  currentLanguages:['es','en'],
  defaultLanguage:"es",
  timemaxloading:10000, //Tiempo máximo que puede estar cargando la aplicación, supera deja de cargar y muestra error en carga
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
