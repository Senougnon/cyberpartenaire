const _0x2516ea=_0x18fe;(function(_0x1792ec,_0x546a12){const _0x2fbd92=_0x18fe,_0x28dd2a=_0x1792ec();while(!![]){try{const _0x2d27d6=-parseInt(_0x2fbd92(0xf6))/0x1+-parseInt(_0x2fbd92(0x100))/0x2*(parseInt(_0x2fbd92(0xf2))/0x3)+-parseInt(_0x2fbd92(0xfd))/0x4*(parseInt(_0x2fbd92(0xf5))/0x5)+-parseInt(_0x2fbd92(0xf1))/0x6+-parseInt(_0x2fbd92(0x101))/0x7*(parseInt(_0x2fbd92(0xfb))/0x8)+parseInt(_0x2fbd92(0xee))/0x9+parseInt(_0x2fbd92(0xfa))/0xa;if(_0x2d27d6===_0x546a12)break;else _0x28dd2a['push'](_0x28dd2a['shift']());}catch(_0x5a0be6){_0x28dd2a['push'](_0x28dd2a['shift']());}}}(_0x5ab4,0xe6513));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';function _0x18fe(_0x1f6f95,_0x3bace6){const _0x5ab478=_0x5ab4();return _0x18fe=function(_0x18fe75,_0x5286ba){_0x18fe75=_0x18fe75-0xec;let _0x580f05=_0x5ab478[_0x18fe75];return _0x580f05;},_0x18fe(_0x1f6f95,_0x3bace6);}function _0x5ab4(){const _0x459a1f=['1620046kIDwZb','https://cyber1-9c84f-default-rtdb.firebaseio.com','message','Error\x20synchronizing\x20path\x20','41131620wzhZQo','2162216bXxNOp','catch','2310968mIrMRW','users-data','Starting\x20database\x20synchronization...','62754nYHaKh','7kOWEXY','error','floor','getFullYear','setItem','getMonth','Switching\x20to\x20database\x20index:\x20','Database\x20synchronization\x20complete.','val','9006660GIYYsx','users','currentDatabaseIndex','7390818rhLkmt','45ZLjaZU','log','toString','5oZeeGT'];_0x5ab4=function(){return _0x459a1f;};return _0x5ab4();}import{getDatabase,ref,get,set}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';const firebaseConfigs=[{'databaseURL':'https://cyber1-9c84f-default-rtdb.firebaseio.com'},{'databaseURL':'https://cyber1-9c84f-default-rtdb.firebaseio.com'},{'databaseURL':_0x2516ea(0xf7)},{'databaseURL':'https://cyber1-9c84f-default-rtdb.firebaseio.com'},{'databaseURL':_0x2516ea(0xf7)}];let app,db,currentDatabaseIndex=-0x1,initializationPromise;function initializeAppWithIndex(_0x2effaa){const _0x58a3ed=_0x2516ea;app=initializeApp(firebaseConfigs[_0x2effaa]),db=getDatabase(app),console[_0x58a3ed(0xf3)]('Firebase\x20initialized\x20with\x20database\x20'+(_0x2effaa+0x1));}async function synchronizeDataIfNeeded(_0x5af80f,_0x379a88){const _0x201f3c=_0x2516ea;if(_0x5af80f===-0x1)return;console[_0x201f3c(0xf3)](_0x201f3c(0xff));const _0x51e78d=getDatabase(initializeApp(firebaseConfigs[_0x5af80f])),_0x135c26=getDatabase(initializeApp(firebaseConfigs[_0x379a88])),_0x5e56e4=[_0x201f3c(0xef),_0x201f3c(0xfe)];for(const _0x85ad88 of _0x5e56e4){try{const _0x24dd32=ref(_0x51e78d,_0x85ad88),_0x52e4b6=ref(_0x135c26,_0x85ad88),_0x211503=await get(_0x24dd32),_0x563ff3=_0x211503[_0x201f3c(0xed)]();_0x563ff3&&(await set(_0x52e4b6,_0x563ff3),console[_0x201f3c(0xf3)]('Data\x20synchronized\x20for\x20path:\x20'+_0x85ad88));}catch(_0x2a2627){console[_0x201f3c(0x102)](_0x201f3c(0xf9)+_0x85ad88+':',_0x2a2627);throw new Error('Error\x20during\x20synchronization:\x20'+_0x2a2627[_0x201f3c(0xf8)]);}}console['log'](_0x201f3c(0xec));}async function selectDatabase(){const _0x410148=_0x2516ea,_0xcf69d=new Date()['getDate'](),_0x8e0cc5=firebaseConfigs['length'],_0x3e6093=new Date(new Date()[_0x410148(0x104)](),new Date()[_0x410148(0x106)]()+0x1,0x0)['getDate'](),_0x40ae66=Math[_0x410148(0x103)](_0x3e6093/_0x8e0cc5);let _0x306e24=_0x3e6093%_0x8e0cc5,_0x4b195f,_0x352fcf=0x0;for(let _0x53950a=0x0;_0x53950a<_0x8e0cc5;_0x53950a++){_0x352fcf+=_0x40ae66;_0x306e24>0x0&&(_0x352fcf++,_0x306e24--);if(_0xcf69d<=_0x352fcf){_0x4b195f=_0x53950a;break;}}if(_0x4b195f!==currentDatabaseIndex)console['log'](_0x410148(0x107)+_0x4b195f),await synchronizeDataIfNeeded(currentDatabaseIndex,_0x4b195f)[_0x410148(0xfc)](_0x5ce669=>{const _0x205c97=_0x410148;console[_0x205c97(0x102)]('Synchronization\x20failed:',_0x5ce669);throw _0x5ce669;}),initializeAppWithIndex(_0x4b195f),currentDatabaseIndex=_0x4b195f,localStorage[_0x410148(0x105)](_0x410148(0xf0),_0x4b195f[_0x410148(0xf4)]());else!db&&initializeAppWithIndex(_0x4b195f);}export async function getActiveDatabase(){return!initializationPromise&&(initializationPromise=selectDatabase()),await initializationPromise,db;}