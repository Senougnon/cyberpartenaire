const _0x5ee939=_0x12a7;(function(_0x144437,_0x2cb4c4){const _0x1d1502=_0x12a7,_0x2bcb6c=_0x144437();while(!![]){try{const _0x2205ec=parseInt(_0x1d1502(0x118))/0x1*(-parseInt(_0x1d1502(0x147))/0x2)+parseInt(_0x1d1502(0xf3))/0x3*(-parseInt(_0x1d1502(0xf8))/0x4)+-parseInt(_0x1d1502(0x112))/0x5*(parseInt(_0x1d1502(0x10c))/0x6)+-parseInt(_0x1d1502(0x16d))/0x7*(-parseInt(_0x1d1502(0x13b))/0x8)+-parseInt(_0x1d1502(0x13d))/0x9*(-parseInt(_0x1d1502(0x18e))/0xa)+-parseInt(_0x1d1502(0x100))/0xb*(-parseInt(_0x1d1502(0xee))/0xc)+parseInt(_0x1d1502(0x18d))/0xd;if(_0x2205ec===_0x2cb4c4)break;else _0x2bcb6c['push'](_0x2bcb6c['shift']());}catch(_0x40fc81){_0x2bcb6c['push'](_0x2bcb6c['shift']());}}}(_0x740d,0xec93a));const firebaseConfig={'apiKey':_0x5ee939(0x193),'authDomain':'visionwifi2.firebaseapp.com','databaseURL':_0x5ee939(0x17d),'projectId':_0x5ee939(0x172),'storageBucket':_0x5ee939(0x169),'messagingSenderId':'15159477143','appId':_0x5ee939(0xf0),'measurementId':_0x5ee939(0x111)};firebase[_0x5ee939(0x13c)](firebaseConfig);const database=firebase['database'](),adminRef=database[_0x5ee939(0x156)](_0x5ee939(0x178)),loginForm=document[_0x5ee939(0x13e)](_0x5ee939(0x179)),signupForm=document[_0x5ee939(0x13e)](_0x5ee939(0xe8)),loginContainer=document[_0x5ee939(0x13e)](_0x5ee939(0x14b)),signupContainer=document['getElementById'](_0x5ee939(0x11b)),dashboardContainer=document[_0x5ee939(0x13e)]('dashboardContainer'),salesForm=document[_0x5ee939(0x13e)](_0x5ee939(0x114)),salesTable=document[_0x5ee939(0x13e)]('salesTable'),totalSalesElement=document['getElementById'](_0x5ee939(0x17b)),averageSalesElement=document[_0x5ee939(0x13e)]('averageSales'),userInfoElement=document[_0x5ee939(0x13e)](_0x5ee939(0x121)),toggleAnalysisButton=document[_0x5ee939(0x13e)]('toggleAnalysisButton'),toggleSalesButton=document[_0x5ee939(0x13e)](_0x5ee939(0x14d)),analysisSection=document[_0x5ee939(0x13e)](_0x5ee939(0x183)),salesDetailsSection=document['getElementById'](_0x5ee939(0x12b)),signupButton=document['getElementById'](_0x5ee939(0x14a)),loginFromSignup=document[_0x5ee939(0x13e)](_0x5ee939(0x128)),productSelect=document[_0x5ee939(0x13e)]('product'),stockTableGlobal=document['getElementById'](_0x5ee939(0x157));let salesChart,currentUser,salesData=[],stockData=[],ticketCategories={},salesDataListener;document['getElementById']('dateTime')[_0x5ee939(0x11c)]=new Date()[_0x5ee939(0x181)]()[_0x5ee939(0x12d)](0x0,0x10);function fetchTicketCategories(){const _0x4cd715=_0x5ee939;database[_0x4cd715(0x156)]('TicketsTotal')[_0x4cd715(0x173)](_0x4cd715(0x11c))['then'](_0x54a813=>{ticketCategories=_0x54a813['val']()||{},populateProductSelect();});}function populateProductSelect(){const _0x26618f=_0x5ee939;productSelect[_0x26618f(0x125)]=_0x26618f(0x103);for(const _0x46edea in ticketCategories){const _0x5dc2ad=ticketCategories[_0x46edea][_0x26618f(0x11f)][0x0],_0x3728ab=document[_0x26618f(0xf1)](_0x26618f(0x11d));_0x3728ab[_0x26618f(0x11c)]=_0x46edea,_0x3728ab[_0x26618f(0xe6)]=_0x46edea+'\x20('+_0x5dc2ad+_0x26618f(0x16a),productSelect['appendChild'](_0x3728ab);}}fetchTicketCategories(),loginForm['addEventListener'](_0x5ee939(0xf6),function(_0x11f792){const _0x54d388=_0x5ee939;_0x11f792[_0x54d388(0x180)]();const _0x43d789=document[_0x54d388(0x13e)]('username')[_0x54d388(0x11c)],_0x46dc6f=document['getElementById'](_0x54d388(0x189))[_0x54d388(0x11c)];database[_0x54d388(0x156)]('users/'+_0x43d789)[_0x54d388(0x173)](_0x54d388(0x11c))['then'](_0x49eb44=>{const _0x18d12b=_0x54d388;_0x49eb44[_0x18d12b(0x102)]()?_0x49eb44[_0x18d12b(0x18a)]()[_0x18d12b(0x189)]===_0x46dc6f?loginSuccess(_0x43d789):alert(_0x18d12b(0x16f)):alert(_0x18d12b(0x15f));});}),signupForm[_0x5ee939(0xf9)](_0x5ee939(0xf6),function(_0x40cff6){const _0x5cb5f1=_0x5ee939;_0x40cff6[_0x5cb5f1(0x180)]();const _0x41ba55=document[_0x5cb5f1(0x13e)](_0x5cb5f1(0x15d))[_0x5cb5f1(0x11c)],_0x18bdf0=document[_0x5cb5f1(0x13e)](_0x5cb5f1(0x165))[_0x5cb5f1(0x11c)];database[_0x5cb5f1(0x156)](_0x5cb5f1(0xfd)+_0x41ba55)[_0x5cb5f1(0x173)](_0x5cb5f1(0x11c))[_0x5cb5f1(0xff)](_0x1eb38e=>{const _0x3706df=_0x5cb5f1;_0x1eb38e[_0x3706df(0x102)]()?alert(_0x3706df(0x127)):database[_0x3706df(0x156)]('users/'+_0x41ba55)[_0x3706df(0x175)]({'password':_0x18bdf0})[_0x3706df(0xff)](()=>{const _0x5f0e82=_0x3706df;alert('Inscription\x20réussie\x20!\x20Connectez-vous.'),signupContainer['style'][_0x5f0e82(0x115)]=_0x5f0e82(0xfa),loginContainer['style'][_0x5f0e82(0x115)]=_0x5f0e82(0x171);})[_0x3706df(0x159)](_0x3fd358=>{const _0x2fb379=_0x3706df;console[_0x2fb379(0x106)](_0x2fb379(0x10d),_0x3fd358),alert(_0x2fb379(0x110));});});}),signupButton[_0x5ee939(0xf9)](_0x5ee939(0x134),function(){const _0x2106df=_0x5ee939;loginContainer['style'][_0x2106df(0x115)]=_0x2106df(0xfa),signupContainer['style'][_0x2106df(0x115)]=_0x2106df(0x171);}),loginFromSignup[_0x5ee939(0xf9)]('click',function(){const _0x1dfb71=_0x5ee939;signupContainer[_0x1dfb71(0x135)]['display']='none',loginContainer[_0x1dfb71(0x135)][_0x1dfb71(0x115)]=_0x1dfb71(0x171);});function loginSuccess(_0x3e0c8b){const _0x3663eb=_0x5ee939;currentUser=_0x3e0c8b,loginContainer[_0x3663eb(0x135)][_0x3663eb(0x115)]=_0x3663eb(0xfa),signupContainer[_0x3663eb(0x135)]['display']=_0x3663eb(0xfa),dashboardContainer['style']['display']='block',userInfoElement[_0x3663eb(0xe6)]=_0x3663eb(0x117)+_0x3e0c8b,checkSubscriptionStatus()[_0x3663eb(0xff)](_0x124f3e=>{_0x124f3e?(updateTable(),updateStockTables(),updateAnalysis(),listenForSalesDataChanges()):showSubscriptionRequiredModal();})[_0x3663eb(0x159)](_0x57d51e=>{const _0x3881a6=_0x3663eb;console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27abonnement\x20:',_0x57d51e),alert(_0x3881a6(0xeb));});}function _0x740d(){const _0x50826f=['confirmDelete','exists','<option\x20value=\x22\x22>Sélectionner\x20un\x20produit</option>','exportExcel','add','error','light-theme','insertRow','labels','change','Erreur\x20lors\x20de\x20la\x20suppression\x20de\x20l\x27entrée:','6GbnRuW','Error\x20creating\x20user:','tbody','span','Erreur\x20lors\x20de\x20la\x20création\x20du\x20compte','G-5P86RY1GFF','5431395PpwVLd','classList','salesForm','display','dateTime','Utilisateur:\x20','245359EqyCMZ','ventes_wifi_zone.xlsx','input','signupContainer','value','option','querySelector','prix','querySelectorAll','userInfo','cancelDelete','active','dataset','innerHTML','#searchInputs\x20input','Ce\x20nom\x20d\x27utilisateur\x20est\x20déjà\x20utilisé.','loginFromSignup','total','Ventes','salesDetailsSection','endAt','slice','filterSalesDates','rgb(0,\x20255,\x20255)','filterStockDates','APP','aria-label','subscriptionRequiredModal','click','style','values','getContext','key','sales','writeFile','384dItXGL','initializeApp','891468MJjFBL','getElementById','Moyenne\x20des\x20ventes\x20par\x20jour:\x20','th[data-sort]','toLocaleString','resolve','Total\x20des\x20ventes:\x20','td:first-child','prices','salesEndDate','8LskVkP','AverageSales','Masquer\x20l\x27analyse\x20des\x20ventes','signupButton','loginContainer','destroy','toggleSalesButton','appendChild','filter','href','setItem','sales/','month','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27abonnement\x20:','log','ref','stockTableGlobal','removeChild','catch','Activer\x20le\x20mode\x20clair','TotalSales','getTime','signupUsername','product','Utilisateur\x20introuvable','insertCell','reset','DOMContentLoaded','salesTable','keys','signupPassword','salesStartDate','setAttribute','stockStartDate','visionwifi2.firebasestorage.app','\x20FCFA)','theme-toggle','toUpperCase','119539EBVYew','orderByChild','Mot\x20de\x20passe\x20incorrect','week','block','visionwifi2','once','length','set','location','delete-icon','admin/subscription','loginForm','table_to_sheet','totalSales','stockEndDate','https://visionwifi2-default-rtdb.firebaseio.com','Détail\x20des\x20ventes','body','preventDefault','toISOString','flex','analysisSection','toFixed','sort','Analyse\x20des\x20ventes','onclick','status','password','val','search','update','9514206UzCeIQ','160hYTMZO','expired','className','Entrée\x20supprimée\x20avec\x20succès','confirm-dialog','AIzaSyDcDMhu-wqbDPJWxI220Wst9odKoOKEXJM','\x20FCFA','Masquer\x20le\x20détail\x20des\x20ventes','textContent','documentElement','signupForm','rgb(255,\x2099,\x20132)','true','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27abonnement.','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Êtes-vous\x20sûr\x20de\x20vouloir\x20supprimer\x20cette\x20entrée\x20?</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22confirmDelete\x22>Confirmer</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22cancelDelete\x22>Annuler</button>\x0a\x20\x20\x20\x20','darkTheme','516kbtuel','push','1:15159477143:web:5261664ebe30bfe006fad2','createElement','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20l\x27ajout\x20de\x20l\x27entrée.','301755wfBnlr','book_append_sheet','getItem','submit','forEach','56lbJXxM','addEventListener','none','equalTo','salesChart','users/','utils','then','334741sntLgB'];_0x740d=function(){return _0x50826f;};return _0x740d();}function listenForSalesDataChanges(){const _0x3ce357=_0x5ee939;salesDataListener=database[_0x3ce357(0x156)]('sales/'+currentUser)['on'](_0x3ce357(0x11c),_0x2cb818=>{const _0x2bfa65=_0x3ce357;salesData=[],_0x2cb818[_0x2bfa65(0xf7)](_0x197176=>{const _0x2e990d=_0x2bfa65,_0x343681=_0x197176[_0x2e990d(0x18a)]();_0x343681['key']=_0x197176[_0x2e990d(0x138)],_0x343681[_0x2e990d(0x129)]=(_0x343681['V']*_0x343681['PV'])[_0x2e990d(0x184)](0x2),salesData[_0x2e990d(0xef)](_0x343681);}),analysisSection[_0x2bfa65(0x135)]['display']==='block'&&updateAnalysis(salesData);});}document[_0x5ee939(0x13e)](_0x5ee939(0x15e))[_0x5ee939(0xf9)](_0x5ee939(0x10a),function(){const _0x4239c9=_0x5ee939,_0x391324=this[_0x4239c9(0x11c)];database[_0x4239c9(0x156)]('sales/'+currentUser)[_0x4239c9(0x16e)](_0x4239c9(0x15e))[_0x4239c9(0xfb)](_0x391324)['limitToLast'](0x1)[_0x4239c9(0x173)](_0x4239c9(0x11c))[_0x4239c9(0xff)](_0x29723a=>{const _0x59b473=_0x4239c9;if(_0x29723a[_0x59b473(0x102)]()){const _0xef062a=Object[_0x59b473(0x136)](_0x29723a[_0x59b473(0x18a)]())[0x0];document[_0x59b473(0x13e)]('SI')[_0x59b473(0x11c)]=_0xef062a['SF']||0x0;}else document['getElementById']('SI')[_0x59b473(0x11c)]=0x0;}),updatePV();}),document['getElementById']('V')[_0x5ee939(0xf9)](_0x5ee939(0x11a),updateSF),document['getElementById'](_0x5ee939(0x131))[_0x5ee939(0xf9)]('input',updateSF);function updateSF(){const _0x7cfe97=_0x5ee939,_0xc4335f=parseInt(document[_0x7cfe97(0x13e)]('SI')[_0x7cfe97(0x11c)])||0x0,_0x4548cf=parseInt(document[_0x7cfe97(0x13e)](_0x7cfe97(0x131))[_0x7cfe97(0x11c)])||0x0,_0x2f7305=parseInt(document['getElementById']('V')[_0x7cfe97(0x11c)])||0x0;document[_0x7cfe97(0x13e)]('SF')[_0x7cfe97(0x11c)]=_0xc4335f+_0x4548cf-_0x2f7305;}function updatePV(){const _0x2b1862=_0x5ee939,_0x233232=document[_0x2b1862(0x13e)](_0x2b1862(0x15e))[_0x2b1862(0x11c)],_0x225f95=ticketCategories[_0x233232]?.[_0x2b1862(0x11f)][0x0];document['getElementById']('PV')['value']=_0x225f95||0x0;}salesForm['addEventListener'](_0x5ee939(0xf6),function(_0x2f9cee){const _0xe38f86=_0x5ee939;_0x2f9cee[_0xe38f86(0x180)]();const _0x593ed1={'dateTime':document['getElementById']('dateTime')[_0xe38f86(0x11c)],'product':document['getElementById']('product')[_0xe38f86(0x11c)],'SI':parseInt(document[_0xe38f86(0x13e)]('SI')[_0xe38f86(0x11c)])||0x0,'APP':parseInt(document[_0xe38f86(0x13e)](_0xe38f86(0x131))[_0xe38f86(0x11c)])||0x0,'V':parseInt(document['getElementById']('V')[_0xe38f86(0x11c)])||0x0,'SF':parseInt(document[_0xe38f86(0x13e)]('SF')[_0xe38f86(0x11c)])||0x0,'PV':parseFloat(document['getElementById']('PV')[_0xe38f86(0x11c)])||0x0};database[_0xe38f86(0x156)](_0xe38f86(0x152)+currentUser)[_0xe38f86(0xef)](_0x593ed1)['then'](()=>{const _0x10e651=_0xe38f86;updateTable(),updateStockTables(),updateAnalysis(),salesForm[_0x10e651(0x161)](),document[_0x10e651(0x13e)](_0x10e651(0x116))[_0x10e651(0x11c)]=new Date()[_0x10e651(0x181)]()[_0x10e651(0x12d)](0x0,0x10);})['catch'](_0x371e1e=>{const _0x172fee=_0xe38f86;console['error']('Erreur\x20lors\x20de\x20l\x27ajout\x20de\x20l\x27entrée\x20:',_0x371e1e),alert(_0x172fee(0xf2));});});function updateTable(){const _0x2aece3=_0x5ee939,_0x385b21=salesTable[_0x2aece3(0x11e)](_0x2aece3(0x10e));_0x385b21['innerHTML']='',database[_0x2aece3(0x156)](_0x2aece3(0x152)+currentUser)[_0x2aece3(0x173)](_0x2aece3(0x11c))['then'](_0x495284=>{const _0x39d789=_0x2aece3;salesData=[],_0x495284[_0x39d789(0xf7)](_0x1963ae=>{const _0x24afa4=_0x39d789,_0x23e7d7=_0x1963ae[_0x24afa4(0x18a)]();_0x23e7d7['total']=(_0x23e7d7['V']*_0x23e7d7['PV'])[_0x24afa4(0x184)](0x2),salesData[_0x24afa4(0xef)](_0x23e7d7);}),renderTable(salesData),setupSearch(),setupSort(salesTable);});}function updateStockTables(){const _0x53d952=_0x5ee939,_0x3dd332=document[_0x53d952(0x13e)](_0x53d952(0x157));_0x3dd332[_0x53d952(0x11e)](_0x53d952(0x10e))[_0x53d952(0x125)]='',database['ref'](_0x53d952(0x152)+currentUser)[_0x53d952(0x173)](_0x53d952(0x11c))[_0x53d952(0xff)](_0x2b1820=>{const _0x554541=_0x53d952,_0x5e1b08={};_0x2b1820[_0x554541(0xf7)](_0x2babc9=>{const _0x5bb4d7=_0x554541,_0x53a35d=_0x2babc9[_0x5bb4d7(0x18a)]();(!_0x5e1b08[_0x53a35d['product']]||new Date(_0x53a35d[_0x5bb4d7(0x116)])>new Date(_0x5e1b08[_0x53a35d[_0x5bb4d7(0x15e)]][_0x5bb4d7(0x116)]))&&(_0x5e1b08[_0x53a35d['product']]=_0x53a35d);}),Object[_0x554541(0x136)](_0x5e1b08)[_0x554541(0xf7)](_0x5dc111=>{const _0x3812f8=_0x554541,_0x32f7c7=_0x3dd332['querySelector']('tbody')[_0x3812f8(0x108)]();_0x32f7c7['insertCell'](0x0)[_0x3812f8(0xe6)]=_0x5dc111[_0x3812f8(0x15e)],_0x32f7c7[_0x3812f8(0x160)](0x1)[_0x3812f8(0xe6)]=_0x5dc111['SF'],_0x32f7c7[_0x3812f8(0x160)](0x2)[_0x3812f8(0xe6)]=new Date(_0x5dc111['dateTime'])[_0x3812f8(0x141)]();}),setupSort(_0x3dd332);});}function exportToExcel(){const _0x557527=_0x5ee939,_0x29f6ca=XLSX[_0x557527(0xfe)]['book_new'](),_0x2ba146=XLSX['utils'][_0x557527(0x17a)](document[_0x557527(0x13e)]('salesTable'));XLSX[_0x557527(0xfe)][_0x557527(0xf4)](_0x29f6ca,_0x2ba146,_0x557527(0x12a)),XLSX[_0x557527(0x13a)](_0x29f6ca,_0x557527(0x119));}document['getElementById'](_0x5ee939(0x104))[_0x5ee939(0xf9)](_0x5ee939(0x134),exportToExcel);function deleteEntry(_0x123328){const _0x5af080=_0x5ee939;database[_0x5af080(0x156)]('sales/'+currentUser+'/'+_0x123328)[_0x5af080(0x173)](_0x5af080(0x11c))[_0x5af080(0xff)](_0xe3e92e=>{const _0x2a85a5=_0x5af080,_0x3e7c5c=_0xe3e92e[_0x2a85a5(0x18a)]();return database['ref'](_0x2a85a5(0x152)+currentUser+'/'+_0x123328)['remove']()[_0x2a85a5(0xff)](()=>{const _0x1772af=_0x2a85a5;return console[_0x1772af(0x155)](_0x1772af(0x191)),updateStockAfterDeletion(_0x3e7c5c);});})[_0x5af080(0xff)](()=>{return updateTable();})[_0x5af080(0xff)](()=>{updateStockTables(),updateAnalysis();})[_0x5af080(0x159)](_0x45d1d4=>{const _0x24193a=_0x5af080;console['error'](_0x24193a(0x10b),_0x45d1d4);});}function updateStockAfterDeletion(_0x36d249){const _0x303df7=_0x5ee939;return database['ref'](_0x303df7(0x152)+currentUser)[_0x303df7(0x16e)](_0x303df7(0x116))[_0x303df7(0x12c)](_0x36d249[_0x303df7(0x116)])['limitToLast'](0x2)['once'](_0x303df7(0x11c))['then'](_0x273978=>{const _0x21fe35=_0x303df7;let _0x552c02=[];_0x273978['forEach'](_0x3118d0=>{const _0x39dcfb=_0x12a7;_0x552c02[_0x39dcfb(0xef)]({'key':_0x3118d0[_0x39dcfb(0x138)],..._0x3118d0[_0x39dcfb(0x18a)]()});}),_0x552c02[_0x21fe35(0x185)]((_0x5dda6a,_0x5cefe4)=>new Date(_0x5cefe4[_0x21fe35(0x116)])-new Date(_0x5dda6a[_0x21fe35(0x116)]));if(_0x552c02['length']>0x1&&_0x552c02[0x0][_0x21fe35(0x138)]!==_0x36d249['key']){const _0x2aa56b=_0x552c02[0x1],_0x4838c2=_0x2aa56b['SF']+_0x36d249['V']-_0x36d249[_0x21fe35(0x131)];return database[_0x21fe35(0x156)]('sales/'+currentUser+'/'+_0x2aa56b['key'])[_0x21fe35(0x18c)]({'SF':_0x4838c2});}return Promise[_0x21fe35(0x142)]();});}function updateTable(){const _0x3aa4fe=_0x5ee939;return database[_0x3aa4fe(0x156)](_0x3aa4fe(0x152)+currentUser)[_0x3aa4fe(0x173)]('value')[_0x3aa4fe(0xff)](_0x35bbee=>{salesData=[],_0x35bbee['forEach'](_0x2736a9=>{const _0x5d261d=_0x12a7,_0x5e6d18=_0x2736a9[_0x5d261d(0x18a)]();_0x5e6d18[_0x5d261d(0x138)]=_0x2736a9[_0x5d261d(0x138)],_0x5e6d18[_0x5d261d(0x129)]=(_0x5e6d18['V']*_0x5e6d18['PV'])[_0x5d261d(0x184)](0x2),salesData['push'](_0x5e6d18);}),renderTable(salesData),setupSearch(),setupSort(salesTable);});}function renderTable(_0x370684){const _0x878a5=_0x5ee939,_0x138af6=salesTable[_0x878a5(0x11e)](_0x878a5(0x10e));_0x138af6['innerHTML']='',_0x370684[_0x878a5(0xf7)](_0x4dc665=>{const _0x30a9b2=_0x878a5,_0xe67556=_0x138af6['insertRow']();_0xe67556[_0x30a9b2(0x124)][_0x30a9b2(0x138)]=_0x4dc665[_0x30a9b2(0x138)],_0xe67556['insertCell'](0x0)['textContent']=new Date(_0x4dc665[_0x30a9b2(0x116)])[_0x30a9b2(0x141)](),_0xe67556[_0x30a9b2(0x160)](0x1)[_0x30a9b2(0xe6)]=_0x4dc665['product'],_0xe67556[_0x30a9b2(0x160)](0x2)['textContent']=_0x4dc665['SI'],_0xe67556[_0x30a9b2(0x160)](0x3)[_0x30a9b2(0xe6)]=_0x4dc665[_0x30a9b2(0x131)],_0xe67556[_0x30a9b2(0x160)](0x4)[_0x30a9b2(0xe6)]=_0x4dc665['V'],_0xe67556[_0x30a9b2(0x160)](0x5)[_0x30a9b2(0xe6)]=_0x4dc665['SF'],_0xe67556[_0x30a9b2(0x160)](0x6)[_0x30a9b2(0xe6)]=_0x4dc665['PV'],_0xe67556['insertCell'](0x7)[_0x30a9b2(0xe6)]=_0x4dc665[_0x30a9b2(0x129)];}),addDeleteIcons();}function addDeleteIcons(){const _0x4914ef=_0x5ee939,_0xa7f3e5=salesTable[_0x4914ef(0x120)]('tbody\x20tr');_0xa7f3e5[_0x4914ef(0xf7)](_0x14f65a=>{const _0x1570c4=_0x4914ef,_0x6c9807=document[_0x1570c4(0xf1)](_0x1570c4(0x10f));_0x6c9807['innerHTML']='✖',_0x6c9807[_0x1570c4(0x190)]=_0x1570c4(0x177),_0x6c9807['onclick']=_0x3e803c=>{const _0x147c05=_0x1570c4;_0x3e803c['stopPropagation'](),showConfirmDialog(_0x14f65a[_0x147c05(0x124)]['key']);},_0x14f65a['querySelector'](_0x1570c4(0x144))[_0x1570c4(0x14e)](_0x6c9807);});}function showConfirmDialog(_0x35e9cb){const _0x3f2877=_0x5ee939,_0x5d5c85=document[_0x3f2877(0xf1)]('div');_0x5d5c85[_0x3f2877(0x190)]=_0x3f2877(0x192),_0x5d5c85[_0x3f2877(0x125)]=_0x3f2877(0xec),document[_0x3f2877(0x17f)][_0x3f2877(0x14e)](_0x5d5c85),document['getElementById'](_0x3f2877(0x101))[_0x3f2877(0x187)]=()=>{const _0x430ea6=_0x3f2877;deleteEntry(_0x35e9cb),document[_0x430ea6(0x17f)][_0x430ea6(0x158)](_0x5d5c85);},document[_0x3f2877(0x13e)](_0x3f2877(0x122))[_0x3f2877(0x187)]=()=>{const _0x29b47e=_0x3f2877;document[_0x29b47e(0x17f)][_0x29b47e(0x158)](_0x5d5c85);};}function setupSearch(){const _0x226843=_0x5ee939,_0x294847=document[_0x226843(0x120)](_0x226843(0x126));_0x294847[_0x226843(0xf7)](_0x352100=>{const _0x41cf8e=_0x226843;_0x352100['addEventListener'](_0x41cf8e(0x11a),()=>{const _0xb2681b=_0x41cf8e,_0x43c46a=salesData[_0xb2681b(0x14f)](_0x270c33=>{const _0x43ea0e=_0xb2681b;return Object[_0x43ea0e(0x164)](_0x270c33)['every'](_0x5ded30=>{const _0x1b7dbf=_0x43ea0e,_0x33ec98=document[_0x1b7dbf(0x13e)](_0x1b7dbf(0x18b)+(_0x5ded30['charAt'](0x0)[_0x1b7dbf(0x16c)]()+_0x5ded30[_0x1b7dbf(0x12d)](0x1)))?.[_0x1b7dbf(0x11c)]['toLowerCase']()||'';return _0x270c33[_0x5ded30]['toString']()['toLowerCase']()['includes'](_0x33ec98);});});renderTable(_0x43c46a),updateAnalysis(_0x43c46a);});});}function setupSort(_0x594aea){const _0x1a0ea8=_0x5ee939,_0x339f0c=_0x594aea[_0x1a0ea8(0x120)](_0x1a0ea8(0x140));_0x339f0c[_0x1a0ea8(0xf7)](_0x167533=>{const _0x13d659=_0x1a0ea8;_0x167533[_0x13d659(0xf9)](_0x13d659(0x134),()=>{const _0x2f4dc5=_0x13d659,_0x5933b1=_0x167533[_0x2f4dc5(0x124)]['sort'],_0x1131a7=_0x594aea['id']==='salesTable'?salesData:stockData;_0x1131a7[_0x2f4dc5(0x185)]((_0x1ffcf9,_0x2d9f02)=>{if(_0x1ffcf9[_0x5933b1]<_0x2d9f02[_0x5933b1])return-0x1;if(_0x1ffcf9[_0x5933b1]>_0x2d9f02[_0x5933b1])return 0x1;return 0x0;}),_0x594aea['id']===_0x2f4dc5(0x163)?(renderTable(_0x1131a7),updateAnalysis(_0x1131a7)):renderStockTable(_0x1131a7,_0x594aea);});});}function renderStockTable(_0xd23ba2,_0x2b82f5){const _0x13a1c3=_0x5ee939,_0x3a14e8=_0x2b82f5['querySelector'](_0x13a1c3(0x10e));_0x3a14e8[_0x13a1c3(0x125)]='',_0xd23ba2[_0x13a1c3(0xf7)](_0x30a0b4=>{const _0x47a524=_0x13a1c3,_0x5ec7bb=_0x3a14e8['insertRow']();_0x5ec7bb[_0x47a524(0x160)](0x0)['textContent']=_0x30a0b4[_0x47a524(0x15e)],_0x5ec7bb[_0x47a524(0x160)](0x1)[_0x47a524(0xe6)]=_0x30a0b4['SF'],_0x5ec7bb[_0x47a524(0x160)](0x2)['textContent']=new Date(_0x30a0b4[_0x47a524(0x116)])[_0x47a524(0x141)]();});}function updateAnalysis(_0xded95e=salesData){const _0x22d77b=_0x5ee939;let _0x29e255=0x0,_0x5e5333=0x0;const _0x3abcc3={'labels':[],'sales':[],'prices':[]};_0xded95e[_0x22d77b(0xf7)](_0x8adb32=>{const _0x1c4e96=_0x22d77b;_0x29e255+=_0x8adb32['V']*_0x8adb32['PV'],_0x5e5333++,_0x3abcc3[_0x1c4e96(0x109)][_0x1c4e96(0xef)](new Date(_0x8adb32[_0x1c4e96(0x116)])[_0x1c4e96(0x141)]()),_0x3abcc3['sales']['push'](_0x8adb32['V']),_0x3abcc3[_0x1c4e96(0x145)][_0x1c4e96(0xef)](_0x8adb32['PV']);});const _0x2981a5=_0x29e255/_0x5e5333||0x0;totalSalesElement[_0x22d77b(0xe6)]='Total\x20des\x20ventes:\x20'+_0x29e255[_0x22d77b(0x184)](0x2)+_0x22d77b(0x194),averageSalesElement[_0x22d77b(0xe6)]='Moyenne\x20des\x20ventes\x20par\x20jour:\x20'+_0x2981a5[_0x22d77b(0x184)](0x2)+'\x20FCFA',updateChart(_0x3abcc3),updatePeriodAnalysis(_0xded95e);}function updateChart(_0x50fc15){const _0x337579=_0x5ee939,_0x20b9b4=document['getElementById'](_0x337579(0xfc))[_0x337579(0x137)]('2d');salesChart&&salesChart[_0x337579(0x14c)](),salesChart=new Chart(_0x20b9b4,{'type':'line','data':{'labels':_0x50fc15[_0x337579(0x109)],'datasets':[{'label':_0x337579(0x12a),'data':_0x50fc15[_0x337579(0x139)],'borderColor':_0x337579(0x12f),'tension':0.1},{'label':'Prix\x20de\x20vente','data':_0x50fc15[_0x337579(0x145)],'borderColor':_0x337579(0xe9),'tension':0.1}]},'options':{'responsive':!![],'scales':{'y':{'beginAtZero':!![],'grid':{'color':'rgba(255,\x20255,\x20255,\x200.1)'},'ticks':{'color':'rgb(0,\x20255,\x20255)'}},'x':{'grid':{'color':'rgba(255,\x20255,\x20255,\x200.1)'},'ticks':{'color':'rgb(0,\x20255,\x20255)'}}},'plugins':{'legend':{'labels':{'color':_0x337579(0x12f)}}}}});}function updatePeriodAnalysis(_0x22c308){const _0x1d3d60=_0x5ee939,_0x44b506=new Date(),_0x1f16f0=new Date(_0x44b506[_0x1d3d60(0x15c)]()-0x7*0x18*0x3c*0x3c*0x3e8),_0x52c681=new Date(_0x44b506['getTime']()-0x1e*0x18*0x3c*0x3c*0x3e8),_0x35922f=new Date(_0x44b506[_0x1d3d60(0x15c)]()-0x5a*0x18*0x3c*0x3c*0x3e8),_0x375278=_0x22c308[_0x1d3d60(0x14f)](_0x126dbd=>new Date(_0x126dbd[_0x1d3d60(0x116)])>=_0x1f16f0),_0x1bdcf9=_0x22c308[_0x1d3d60(0x14f)](_0x50d686=>new Date(_0x50d686[_0x1d3d60(0x116)])>=_0x52c681),_0x4cb6ea=_0x22c308['filter'](_0x247c92=>new Date(_0x247c92[_0x1d3d60(0x116)])>=_0x35922f);updatePeriodStats(_0x375278,_0x1d3d60(0x170)),updatePeriodStats(_0x1bdcf9,_0x1d3d60(0x153)),updatePeriodStats(_0x4cb6ea,'threeMonth');}function updatePeriodStats(_0x5baf02,_0x285c1e){const _0x1542ab=_0x5ee939,_0x3e0f55=_0x5baf02['reduce']((_0x4ec69e,_0x48586e)=>_0x4ec69e+_0x48586e['V']*_0x48586e['PV'],0x0),_0x579c11=_0x3e0f55/_0x5baf02[_0x1542ab(0x174)]||0x0;document[_0x1542ab(0x13e)](_0x285c1e+_0x1542ab(0x15b))['textContent']=_0x1542ab(0x143)+_0x3e0f55[_0x1542ab(0x184)](0x2)+_0x1542ab(0x194),document[_0x1542ab(0x13e)](_0x285c1e+_0x1542ab(0x148))['textContent']=_0x1542ab(0x13f)+_0x579c11[_0x1542ab(0x184)](0x2)+'\x20FCFA';}toggleAnalysisButton[_0x5ee939(0xf9)](_0x5ee939(0x134),function(){const _0x288abc=_0x5ee939;analysisSection['style'][_0x288abc(0x115)]===_0x288abc(0xfa)||analysisSection[_0x288abc(0x135)][_0x288abc(0x115)]===''?(analysisSection['style'][_0x288abc(0x115)]=_0x288abc(0x171),salesDetailsSection[_0x288abc(0x135)][_0x288abc(0x115)]='none',this[_0x288abc(0xe6)]=_0x288abc(0x149),toggleSalesButton[_0x288abc(0xe6)]=_0x288abc(0x17e),updateAnalysis(salesData)):(analysisSection[_0x288abc(0x135)][_0x288abc(0x115)]=_0x288abc(0xfa),this['textContent']=_0x288abc(0x186));}),toggleSalesButton[_0x5ee939(0xf9)](_0x5ee939(0x134),function(){const _0x2b1dd6=_0x5ee939;salesDetailsSection['style'][_0x2b1dd6(0x115)]===_0x2b1dd6(0xfa)||salesDetailsSection[_0x2b1dd6(0x135)][_0x2b1dd6(0x115)]===''?(salesDetailsSection['style'][_0x2b1dd6(0x115)]=_0x2b1dd6(0x171),analysisSection[_0x2b1dd6(0x135)][_0x2b1dd6(0x115)]=_0x2b1dd6(0xfa),this[_0x2b1dd6(0xe6)]=_0x2b1dd6(0xe5),toggleAnalysisButton['textContent']=_0x2b1dd6(0x186)):(salesDetailsSection[_0x2b1dd6(0x135)][_0x2b1dd6(0x115)]=_0x2b1dd6(0xfa),this[_0x2b1dd6(0xe6)]='Détail\x20des\x20ventes');});const themeToggle=document[_0x5ee939(0x13e)](_0x5ee939(0x16b)),root=document[_0x5ee939(0xe7)];let isDarkTheme=!![];function setTheme(_0x3f7520){const _0x21c5a3=_0x5ee939;_0x3f7520?(root[_0x21c5a3(0x113)]['remove'](_0x21c5a3(0x107)),themeToggle[_0x21c5a3(0xe6)]='🌙',themeToggle[_0x21c5a3(0x167)]('aria-label',_0x21c5a3(0x15a))):(root[_0x21c5a3(0x113)][_0x21c5a3(0x105)](_0x21c5a3(0x107)),themeToggle[_0x21c5a3(0xe6)]='☀️',themeToggle[_0x21c5a3(0x167)](_0x21c5a3(0x132),'Activer\x20le\x20mode\x20sombre')),isDarkTheme=_0x3f7520,localStorage[_0x21c5a3(0x151)](_0x21c5a3(0xed),_0x3f7520);}themeToggle[_0x5ee939(0xf9)](_0x5ee939(0x134),()=>{setTheme(!isDarkTheme);}),document[_0x5ee939(0xf9)](_0x5ee939(0x162),()=>{const _0x550614=_0x5ee939,_0xd3bb4f=localStorage['getItem'](_0x550614(0xed));_0xd3bb4f!==null?setTheme(_0xd3bb4f===_0x550614(0xea)):setTheme(![]);}),document[_0x5ee939(0x13e)](_0x5ee939(0x130))[_0x5ee939(0xf9)](_0x5ee939(0x134),function(){const _0x45671e=_0x5ee939,_0x42b2a9=new Date(document[_0x45671e(0x13e)](_0x45671e(0x168))[_0x45671e(0x11c)]),_0x31d378=new Date(document[_0x45671e(0x13e)](_0x45671e(0x17c))['value']);updateStockTables(_0x42b2a9,_0x31d378);}),document[_0x5ee939(0x13e)](_0x5ee939(0x12e))[_0x5ee939(0xf9)](_0x5ee939(0x134),function(){const _0x5e14cd=_0x5ee939,_0x53481f=new Date(document[_0x5e14cd(0x13e)](_0x5e14cd(0x166))['value']),_0x28d55a=new Date(document[_0x5e14cd(0x13e)](_0x5e14cd(0x146))[_0x5e14cd(0x11c)]),_0x33954d=salesData[_0x5e14cd(0x14f)](_0x2290ac=>{const _0xe21416=_0x5e14cd,_0x1ea31d=new Date(_0x2290ac[_0xe21416(0x116)]);return(!_0x53481f||_0x1ea31d>=_0x53481f)&&(!_0x28d55a||_0x1ea31d<=_0x28d55a);});renderTable(_0x33954d),updateAnalysis(_0x33954d);});function updateStockTables(_0x471c75,_0x592c6b){const _0x25ac6d=_0x5ee939,_0x5e04c8=document[_0x25ac6d(0x13e)]('stockTableGlobal');_0x5e04c8[_0x25ac6d(0x11e)](_0x25ac6d(0x10e))[_0x25ac6d(0x125)]='',database[_0x25ac6d(0x156)]('sales/'+currentUser)[_0x25ac6d(0x173)](_0x25ac6d(0x11c))['then'](_0x591203=>{const _0x51b289=_0x25ac6d,_0x378a95={};_0x591203[_0x51b289(0xf7)](_0x1ead4d=>{const _0x304290=_0x51b289,_0x588d21=_0x1ead4d[_0x304290(0x18a)](),_0x1e1a6d=new Date(_0x588d21['dateTime']);(!_0x471c75||_0x1e1a6d>=_0x471c75)&&(!_0x592c6b||_0x1e1a6d<=_0x592c6b)&&((!_0x378a95[_0x588d21['product']]||_0x1e1a6d>new Date(_0x378a95[_0x588d21[_0x304290(0x15e)]][_0x304290(0x116)]))&&(_0x378a95[_0x588d21[_0x304290(0x15e)]]=_0x588d21));}),Object[_0x51b289(0x136)](_0x378a95)[_0x51b289(0xf7)](_0x29e4cf=>{const _0x11611a=_0x51b289,_0xf5c3e8=_0x5e04c8[_0x11611a(0x11e)](_0x11611a(0x10e))['insertRow']();_0xf5c3e8[_0x11611a(0x160)](0x0)[_0x11611a(0xe6)]=_0x29e4cf[_0x11611a(0x15e)],_0xf5c3e8[_0x11611a(0x160)](0x1)['textContent']=_0x29e4cf['SF'],_0xf5c3e8['insertCell'](0x2)[_0x11611a(0xe6)]=new Date(_0x29e4cf[_0x11611a(0x116)])[_0x11611a(0x141)]();}),setupSort(_0x5e04c8);});}function showSubscriptionRequiredModal(){const _0x2a3abb=_0x5ee939;document[_0x2a3abb(0x13e)](_0x2a3abb(0x133))[_0x2a3abb(0x135)][_0x2a3abb(0x115)]=_0x2a3abb(0x182);}function _0x12a7(_0x2740fb,_0x56db05){const _0x740d15=_0x740d();return _0x12a7=function(_0x12a731,_0x54d11c){_0x12a731=_0x12a731-0xe5;let _0x3a760d=_0x740d15[_0x12a731];return _0x3a760d;},_0x12a7(_0x2740fb,_0x56db05);}function hideSubscriptionRequiredModal(){const _0x96632f=_0x5ee939;document[_0x96632f(0x13e)]('subscriptionRequiredModal')['style']['display']=_0x96632f(0xfa);}function redirectToSubscription(){const _0x41bc99=_0x5ee939;window[_0x41bc99(0x176)][_0x41bc99(0x150)]='index.html';}async function checkSubscriptionStatus(){const _0x863c83=_0x5ee939;try{const _0x2b1a64=await adminRef[_0x863c83(0x173)](_0x863c83(0x11c)),_0x1a6cc0=_0x2b1a64['val'](),_0x3ca9e7=new Date();if(_0x1a6cc0&&_0x1a6cc0[_0x863c83(0x188)]===_0x863c83(0x123)){const _0x48d8f5=new Date(_0x1a6cc0['endDate']);return _0x48d8f5>=_0x3ca9e7?!![]:(await adminRef['update']({'status':_0x863c83(0x18f)}),![]);}else return![];}catch(_0x26e7bf){console[_0x863c83(0x106)](_0x863c83(0x154),_0x26e7bf);throw _0x26e7bf;}}updateTable(),updateStockTables(),analysisSection[_0x5ee939(0x135)][_0x5ee939(0x115)]=_0x5ee939(0xfa),salesDetailsSection[_0x5ee939(0x135)][_0x5ee939(0x115)]=_0x5ee939(0xfa),updateTable(),updateStockTables(),updateAnalysis();const savedTheme=localStorage[_0x5ee939(0xf5)]('darkTheme');savedTheme!==null&&setTheme(savedTheme===_0x5ee939(0xea));