const _0x46d566=_0x2787;(function(_0x47055b,_0x499845){const _0x33b95c=_0x2787,_0xfd32c2=_0x47055b();while(!![]){try{const _0x2600d4=-parseInt(_0x33b95c(0x160))/0x1*(parseInt(_0x33b95c(0x176))/0x2)+parseInt(_0x33b95c(0x16c))/0x3*(parseInt(_0x33b95c(0x15c))/0x4)+parseInt(_0x33b95c(0x155))/0x5+parseInt(_0x33b95c(0x150))/0x6+-parseInt(_0x33b95c(0x174))/0x7+parseInt(_0x33b95c(0x15a))/0x8*(-parseInt(_0x33b95c(0x172))/0x9)+parseInt(_0x33b95c(0x16b))/0xa*(-parseInt(_0x33b95c(0x168))/0xb);if(_0x2600d4===_0x499845)break;else _0xfd32c2['push'](_0xfd32c2['shift']());}catch(_0x2d4a05){_0xfd32c2['push'](_0xfd32c2['shift']());}}}(_0x4095,0x88ba8));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';function _0x4095(){const _0x2cb7d5=['https://paj-market-edd38-default-rtdb.firebaseio.com','https://mon-tuteur-42271-default-rtdb.firebaseio.com','30KzOVkK','3MIDtlU','users-data','https://eduque-moi-bada8-default-rtdb.firebaseio.com','error','connectionCounter','https://save-2-95c36-default-rtdb.firebaseio.com','9EQmkKV','Starting\x20database\x20synchronization...','5673206TcNmeQ','https://svterminal-4de34-default-rtdb.firebaseio.com','701474vYvezZ','warn','Error\x20synchronizing\x20path\x20','message','exists','Error\x20during\x20synchronization:\x20','5720778YJHSUH','Switching\x20to\x20database\x20index:\x20','length','app','Error\x20incrementing\x20connection\x20counter:','5372010dRaLwE','https://pajmarket-default-rtdb.firebaseio.com','activeDatabaseIndex','https://test-2f1c1-default-rtdb.firebaseio.com','https://mon-logement-d930b-default-rtdb.firebaseio.com','1140312wqcbFm','https://espoirplus-d68c2-default-rtdb.firebaseio.com','2738568fnaRGU','https://le-locataire-default-rtdb.firebaseio.com','https://eduque-moi-lite-default-rtdb.firebaseio.com','val','1BEjfJZ','users','log','https://cyber1-9c84f-default-rtdb.firebaseio.com','Database\x20synchronization\x20complete.','Could\x20not\x20retrieve\x20active\x20index\x20from\x20database,\x20initializing\x20to\x200:','https://idealer-6a95b-default-rtdb.firebaseio.com','https://evisions-9196f-default-rtdb.firebaseio.com','3112021hwhDKx'];_0x4095=function(){return _0x2cb7d5;};return _0x4095();}import{getDatabase,ref,get,set,runTransaction}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';const firebaseConfigs=[{'databaseURL':_0x46d566(0x163)},{'databaseURL':_0x46d566(0x15d)},{'databaseURL':_0x46d566(0x15b)},{'databaseURL':'https://wifi-zone-tanto-default-rtdb.firebaseio.com'},{'databaseURL':'https://cine-evisions-default-rtdb.firebaseio.com'},{'databaseURL':'https://campus-b1d76-default-rtdb.firebaseio.com'},{'databaseURL':'https://eduque-moi-374cb-default-rtdb.firebaseio.com'},{'databaseURL':_0x46d566(0x16e)},{'databaseURL':_0x46d566(0x15e)},{'databaseURL':_0x46d566(0x167)},{'databaseURL':_0x46d566(0x159)},{'databaseURL':_0x46d566(0x16a)},{'databaseURL':'https://my-save-fa5fa-default-rtdb.firebaseio.com'},{'databaseURL':_0x46d566(0x169)},{'databaseURL':_0x46d566(0x156)},{'databaseURL':_0x46d566(0x171)},{'databaseURL':_0x46d566(0x175)},{'databaseURL':_0x46d566(0x158)},{'databaseURL':'https://tontine-4a303-default-rtdb.firebaseio.com'},{'databaseURL':_0x46d566(0x166)}],MAX_CONNECTIONS=0x7d0;let app,db,currentDatabaseIndex=-0x1,initializationPromise;function initializeAppWithIndex(_0x2696a4){const _0x59ae13=_0x46d566;return app=initializeApp(firebaseConfigs[_0x2696a4],_0x59ae13(0x153)+_0x2696a4),db=getDatabase(app),console[_0x59ae13(0x162)]('Firebase\x20initialized\x20with\x20database\x20'+(_0x2696a4+0x1)),db;}async function getOrCreateConnectionCounter(_0x247947,_0x3e64e1){const _0x4b9798=_0x46d566,_0x1bfa6f=ref(_0x247947,_0x4b9798(0x170)),_0x1e9dd1=await get(_0x1bfa6f);if(!_0x1e9dd1[_0x4b9798(0x14e)]())return await set(_0x1bfa6f,0x0),console['log']('Connection\x20counter\x20initialized\x20for\x20database\x20'+(_0x3e64e1+0x1)),0x0;return _0x1e9dd1[_0x4b9798(0x15f)]();}async function synchronizeData(_0x564bd7,_0x51e9d2){const _0x24e407=_0x46d566;if(_0x564bd7===-0x1)return;console[_0x24e407(0x162)](_0x24e407(0x173));const _0x29e88b=initializeAppWithIndex(_0x564bd7),_0x596836=initializeAppWithIndex(_0x51e9d2),_0x44dd83=[_0x24e407(0x161),_0x24e407(0x16d)];for(const _0x2d82e9 of _0x44dd83){try{const _0x4233de=ref(_0x29e88b,_0x2d82e9),_0x497641=ref(_0x596836,_0x2d82e9),_0x4c658b=await get(_0x4233de),_0x1df46f=_0x4c658b[_0x24e407(0x15f)]();_0x1df46f&&(await set(_0x497641,_0x1df46f),console['log']('Data\x20synchronized\x20for\x20path:\x20'+_0x2d82e9));}catch(_0x4c675d){console[_0x24e407(0x16f)](_0x24e407(0x178)+_0x2d82e9+':',_0x4c675d);throw new Error(_0x24e407(0x14f)+_0x4c675d[_0x24e407(0x179)]);}}console[_0x24e407(0x162)](_0x24e407(0x164)),await set(ref(_0x29e88b,_0x24e407(0x170)),0x0);}async function getActiveDatabaseIndex(_0x37217a){const _0x2f5aeb=_0x46d566,_0x527817=ref(_0x37217a,_0x2f5aeb(0x157)),_0x3fd23e=await get(_0x527817);return _0x3fd23e[_0x2f5aeb(0x14e)]()?_0x3fd23e[_0x2f5aeb(0x15f)]():(await set(_0x527817,0x0),0x0);}async function setActiveDatabaseIndex(_0x3e3beb,_0x1828d5){const _0x27bd5a=_0x46d566,_0x3ebaee=ref(_0x3e3beb,_0x27bd5a(0x157));await set(_0x3ebaee,_0x1828d5);}async function selectDatabase(){const _0x32c3a9=_0x46d566;let _0x5d0b3b,_0x9d82bf;if(currentDatabaseIndex===-0x1)try{const _0xa830ca=initializeAppWithIndex(0x0);currentDatabaseIndex=await getActiveDatabaseIndex(_0xa830ca);}catch(_0x3e0dd9){console[_0x32c3a9(0x177)](_0x32c3a9(0x165),_0x3e0dd9),currentDatabaseIndex=0x0;}_0x5d0b3b=currentDatabaseIndex,_0x9d82bf=initializeAppWithIndex(_0x5d0b3b);let _0x4e02a0=await getOrCreateConnectionCounter(_0x9d82bf,_0x5d0b3b);if(_0x4e02a0>=MAX_CONNECTIONS){const _0x3de826=_0x5d0b3b;_0x5d0b3b=(_0x5d0b3b+0x1)%firebaseConfigs[_0x32c3a9(0x152)],console[_0x32c3a9(0x162)](_0x32c3a9(0x151)+_0x5d0b3b),await synchronizeData(_0x3de826,_0x5d0b3b),_0x9d82bf=initializeAppWithIndex(_0x5d0b3b),_0x4e02a0=await getOrCreateConnectionCounter(_0x9d82bf,_0x5d0b3b);}return currentDatabaseIndex=_0x5d0b3b,await setActiveDatabaseIndex(_0x9d82bf,currentDatabaseIndex),_0x9d82bf;}async function incrementConnectionCounter(_0x557a27){const _0xe582df=_0x46d566,_0x39da54=ref(_0x557a27,_0xe582df(0x170));try{await runTransaction(_0x39da54,_0x665366=>{return(_0x665366||0x0)+0x1;});}catch(_0x170049){console[_0xe582df(0x16f)](_0xe582df(0x154),_0x170049);throw _0x170049;}}function _0x2787(_0x2e2d7b,_0x5daf80){const _0x40955a=_0x4095();return _0x2787=function(_0x278703,_0x1acbba){_0x278703=_0x278703-0x14e;let _0x4f0f15=_0x40955a[_0x278703];return _0x4f0f15;},_0x2787(_0x2e2d7b,_0x5daf80);}export async function getActiveDatabase(){return!initializationPromise&&(initializationPromise=selectDatabase()['then'](async _0x417475=>{return await incrementConnectionCounter(_0x417475),_0x417475;})),initializationPromise;}