const _0x2433f7=_0xb230;(function(_0xe8f42c,_0x57df3e){const _0x1d8fa5=_0xb230,_0x4abe31=_0xe8f42c();while(!![]){try{const _0x1d7e43=-parseInt(_0x1d8fa5(0x19f))/0x1*(parseInt(_0x1d8fa5(0x1bd))/0x2)+parseInt(_0x1d8fa5(0x13a))/0x3+-parseInt(_0x1d8fa5(0x18b))/0x4*(parseInt(_0x1d8fa5(0x16e))/0x5)+parseInt(_0x1d8fa5(0x126))/0x6+-parseInt(_0x1d8fa5(0x12f))/0x7+parseInt(_0x1d8fa5(0x1b8))/0x8+parseInt(_0x1d8fa5(0x11e))/0x9;if(_0x1d7e43===_0x57df3e)break;else _0x4abe31['push'](_0x4abe31['shift']());}catch(_0xabc12){_0x4abe31['push'](_0x4abe31['shift']());}}}(_0x2d19,0x7b12e));const firebaseConfig={'apiKey':_0x2433f7(0x196),'authDomain':_0x2433f7(0x135),'databaseURL':_0x2433f7(0x147),'projectId':_0x2433f7(0x1b1),'storageBucket':_0x2433f7(0x122),'messagingSenderId':_0x2433f7(0x163),'appId':_0x2433f7(0x128),'measurementId':_0x2433f7(0x15c)};firebase[_0x2433f7(0x172)](firebaseConfig);const database=firebase[_0x2433f7(0x1ba)](),adminRef=database['ref']('admin/subscription'),loginForm=document['getElementById']('loginForm'),signupForm=document[_0x2433f7(0x181)](_0x2433f7(0x137)),loginContainer=document[_0x2433f7(0x181)]('loginContainer'),signupContainer=document[_0x2433f7(0x181)](_0x2433f7(0x121)),dashboardContainer=document[_0x2433f7(0x181)](_0x2433f7(0x129)),salesForm=document['getElementById'](_0x2433f7(0x1bf)),salesTable=document[_0x2433f7(0x181)](_0x2433f7(0x136)),totalSalesElement=document[_0x2433f7(0x181)](_0x2433f7(0x123)),averageSalesElement=document[_0x2433f7(0x181)]('averageSales'),userInfoElement=document['getElementById']('userInfo'),toggleAnalysisButton=document[_0x2433f7(0x181)](_0x2433f7(0x143)),toggleSalesButton=document['getElementById']('toggleSalesButton'),analysisSection=document[_0x2433f7(0x181)](_0x2433f7(0x17a)),salesDetailsSection=document[_0x2433f7(0x181)](_0x2433f7(0x138)),signupButton=document[_0x2433f7(0x181)](_0x2433f7(0x14b)),loginFromSignup=document['getElementById']('loginFromSignup'),productSelect=document['getElementById'](_0x2433f7(0x1a1)),stockTableGlobal=document['getElementById']('stockTableGlobal');let salesChart,currentUser,salesData=[],stockData=[],ticketCategories={},salesDataListener;document[_0x2433f7(0x181)](_0x2433f7(0x140))['value']=new Date()[_0x2433f7(0x19c)]()[_0x2433f7(0x1b7)](0x0,0x10);function _0xb230(_0x2c7168,_0x4e6f0f){const _0x2d199b=_0x2d19();return _0xb230=function(_0xb230f3,_0x120dcc){_0xb230f3=_0xb230f3-0x114;let _0x506265=_0x2d199b[_0xb230f3];return _0x506265;},_0xb230(_0x2c7168,_0x4e6f0f);}function fetchTicketCategories(){const _0x5afdcd=_0x2433f7;database[_0x5afdcd(0x139)]('TicketsTotal')[_0x5afdcd(0x148)](_0x5afdcd(0x16a))[_0x5afdcd(0x15d)](_0x4de3a0=>{ticketCategories=_0x4de3a0['val']()||{},populateProductSelect();});}function populateProductSelect(){const _0x5d413d=_0x2433f7;productSelect[_0x5d413d(0x19d)]=_0x5d413d(0x119);for(const _0x38fb88 in ticketCategories){const _0x5144fd=ticketCategories[_0x38fb88][_0x5d413d(0x1b2)][0x0],_0x2b8ef9=document['createElement'](_0x5d413d(0x150));_0x2b8ef9['value']=_0x38fb88,_0x2b8ef9[_0x5d413d(0x168)]=_0x38fb88+'\x20('+_0x5144fd+_0x5d413d(0x198),productSelect[_0x5d413d(0x1aa)](_0x2b8ef9);}}fetchTicketCategories(),loginForm[_0x2433f7(0x188)](_0x2433f7(0x14a),function(_0x3cacf8){const _0x4e1c87=_0x2433f7;_0x3cacf8[_0x4e1c87(0x1a7)]();const _0x39809b=document[_0x4e1c87(0x181)](_0x4e1c87(0x15f))[_0x4e1c87(0x16a)],_0x58382d=document[_0x4e1c87(0x181)](_0x4e1c87(0x16c))[_0x4e1c87(0x16a)];database[_0x4e1c87(0x139)](_0x4e1c87(0x13f)+_0x39809b)[_0x4e1c87(0x148)](_0x4e1c87(0x16a))[_0x4e1c87(0x15d)](_0x3f5c8c=>{const _0x543687=_0x4e1c87;_0x3f5c8c[_0x543687(0x18e)]()?_0x3f5c8c[_0x543687(0x18d)]()['password']===_0x58382d?loginSuccess(_0x39809b):alert(_0x543687(0x151)):alert(_0x543687(0x183));});}),signupForm['addEventListener']('submit',function(_0xab772d){const _0x1319ed=_0x2433f7;_0xab772d[_0x1319ed(0x1a7)]();const _0x33f95d=document['getElementById'](_0x1319ed(0x115))[_0x1319ed(0x16a)],_0x435a8e=document[_0x1319ed(0x181)](_0x1319ed(0x116))[_0x1319ed(0x16a)];database[_0x1319ed(0x139)]('users/'+_0x33f95d)[_0x1319ed(0x148)](_0x1319ed(0x16a))[_0x1319ed(0x15d)](_0x251bef=>{const _0x484e6c=_0x1319ed;_0x251bef[_0x484e6c(0x18e)]()?alert(_0x484e6c(0x1a3)):database['ref'](_0x484e6c(0x13f)+_0x33f95d)[_0x484e6c(0x173)]({'password':_0x435a8e})[_0x484e6c(0x15d)](()=>{const _0x4620d1=_0x484e6c;alert(_0x4620d1(0x19e)),signupContainer['style'][_0x4620d1(0x161)]=_0x4620d1(0x11d),loginContainer['style']['display']=_0x4620d1(0x16f);})['catch'](_0x38e41d=>{const _0x4976c5=_0x484e6c;console[_0x4976c5(0x167)](_0x4976c5(0x16b),_0x38e41d),alert(_0x4976c5(0x186));});});}),signupButton[_0x2433f7(0x188)](_0x2433f7(0x1ae),function(){const _0x481621=_0x2433f7;loginContainer['style'][_0x481621(0x161)]=_0x481621(0x11d),signupContainer['style'][_0x481621(0x161)]=_0x481621(0x16f);}),loginFromSignup[_0x2433f7(0x188)](_0x2433f7(0x1ae),function(){const _0x5c7650=_0x2433f7;signupContainer[_0x5c7650(0x1bc)][_0x5c7650(0x161)]=_0x5c7650(0x11d),loginContainer['style'][_0x5c7650(0x161)]='block';});function loginSuccess(_0x33acf3){const _0x208fed=_0x2433f7;currentUser=_0x33acf3,loginContainer[_0x208fed(0x1bc)][_0x208fed(0x161)]=_0x208fed(0x11d),signupContainer[_0x208fed(0x1bc)]['display']=_0x208fed(0x11d),dashboardContainer['style'][_0x208fed(0x161)]=_0x208fed(0x16f),userInfoElement['textContent']='Utilisateur:\x20'+_0x33acf3,checkSubscriptionStatus()['then'](_0x37b6cc=>{_0x37b6cc?(updateTable(),updateStockTables(),updateAnalysis(),listenForSalesDataChanges()):showSubscriptionRequiredModal();})['catch'](_0x309fa9=>{const _0x39ee8b=_0x208fed;console[_0x39ee8b(0x167)](_0x39ee8b(0x1ab),_0x309fa9),alert(_0x39ee8b(0x1a4));});}function listenForSalesDataChanges(){const _0x4004cd=_0x2433f7;salesDataListener=database[_0x4004cd(0x139)]('sales/'+currentUser)['on'](_0x4004cd(0x16a),_0x186710=>{const _0x5310f1=_0x4004cd;salesData=[],_0x186710[_0x5310f1(0x18c)](_0x49cf7b=>{const _0x17fafd=_0x5310f1,_0x554421=_0x49cf7b['val']();_0x554421[_0x17fafd(0x131)]=_0x49cf7b['key'],_0x554421[_0x17fafd(0x185)]=(_0x554421['V']*_0x554421['PV'])[_0x17fafd(0x175)](0x2),salesData[_0x17fafd(0x165)](_0x554421);}),analysisSection[_0x5310f1(0x1bc)][_0x5310f1(0x161)]===_0x5310f1(0x16f)&&updateAnalysis(salesData);});}document[_0x2433f7(0x181)](_0x2433f7(0x1a1))[_0x2433f7(0x188)]('change',function(){const _0x212eb7=_0x2433f7,_0x129626=this['value'];database[_0x212eb7(0x139)](_0x212eb7(0x1bb)+currentUser)[_0x212eb7(0x120)](_0x212eb7(0x1a1))[_0x212eb7(0x14c)](_0x129626)[_0x212eb7(0x189)](0x1)['once']('value')['then'](_0x4003ad=>{const _0x299fff=_0x212eb7;if(_0x4003ad[_0x299fff(0x18e)]()){const _0x17a5c2=Object['values'](_0x4003ad[_0x299fff(0x18d)]())[0x0];document[_0x299fff(0x181)]('SI')[_0x299fff(0x16a)]=_0x17a5c2['SF']||0x0;}else document[_0x299fff(0x181)]('SI')[_0x299fff(0x16a)]=0x0;}),updatePV();}),document['getElementById']('V')[_0x2433f7(0x188)]('input',updateSF),document[_0x2433f7(0x181)](_0x2433f7(0x18f))[_0x2433f7(0x188)]('input',updateSF);function updateSF(){const _0x282011=_0x2433f7,_0x4d9737=parseInt(document[_0x282011(0x181)]('SI')['value'])||0x0,_0x31cc30=parseInt(document['getElementById']('APP')[_0x282011(0x16a)])||0x0,_0xa750c2=parseInt(document[_0x282011(0x181)]('V')[_0x282011(0x16a)])||0x0;document[_0x282011(0x181)]('SF')[_0x282011(0x16a)]=_0x4d9737+_0x31cc30-_0xa750c2;}function updatePV(){const _0x2b0b1b=_0x2433f7,_0x2d88ab=document[_0x2b0b1b(0x181)](_0x2b0b1b(0x1a1))[_0x2b0b1b(0x16a)],_0x9c0e9a=ticketCategories[_0x2d88ab]?.[_0x2b0b1b(0x1b2)][0x0];document['getElementById']('PV')[_0x2b0b1b(0x16a)]=_0x9c0e9a||0x0;}salesForm[_0x2433f7(0x188)](_0x2433f7(0x14a),function(_0x5c2a76){const _0x7ea526=_0x2433f7;_0x5c2a76[_0x7ea526(0x1a7)]();const _0x3fca31={'dateTime':document['getElementById'](_0x7ea526(0x140))[_0x7ea526(0x16a)],'product':document[_0x7ea526(0x181)](_0x7ea526(0x1a1))['value'],'SI':parseInt(document['getElementById']('SI')[_0x7ea526(0x16a)])||0x0,'APP':parseInt(document[_0x7ea526(0x181)]('APP')[_0x7ea526(0x16a)])||0x0,'V':parseInt(document[_0x7ea526(0x181)]('V')[_0x7ea526(0x16a)])||0x0,'SF':parseInt(document[_0x7ea526(0x181)]('SF')[_0x7ea526(0x16a)])||0x0,'PV':parseFloat(document[_0x7ea526(0x181)]('PV')[_0x7ea526(0x16a)])||0x0};database[_0x7ea526(0x139)](_0x7ea526(0x1bb)+currentUser)[_0x7ea526(0x165)](_0x3fca31)[_0x7ea526(0x15d)](()=>{const _0x235dac=_0x7ea526;updateTable(),updateStockTables(),updateAnalysis(),salesForm['reset'](),document[_0x235dac(0x181)](_0x235dac(0x140))[_0x235dac(0x16a)]=new Date()[_0x235dac(0x19c)]()[_0x235dac(0x1b7)](0x0,0x10);})[_0x7ea526(0x14e)](_0x166562=>{const _0x401563=_0x7ea526;console['error'](_0x401563(0x127),_0x166562),alert(_0x401563(0x180));});});function updateTable(){const _0x2b72ec=_0x2433f7,_0x306399=salesTable[_0x2b72ec(0x133)]('tbody');_0x306399[_0x2b72ec(0x19d)]='',database[_0x2b72ec(0x139)]('sales/'+currentUser)[_0x2b72ec(0x148)](_0x2b72ec(0x16a))[_0x2b72ec(0x15d)](_0x432097=>{salesData=[],_0x432097['forEach'](_0x55cf65=>{const _0x5bd03c=_0xb230,_0x5a883d=_0x55cf65[_0x5bd03c(0x18d)]();_0x5a883d[_0x5bd03c(0x185)]=(_0x5a883d['V']*_0x5a883d['PV'])['toFixed'](0x2),salesData['push'](_0x5a883d);}),renderTable(salesData),setupSearch(),setupSort(salesTable);});}function updateStockTables(){const _0x31e689=_0x2433f7,_0x271b85=document['getElementById']('stockTableGlobal');_0x271b85[_0x31e689(0x133)]('tbody')[_0x31e689(0x19d)]='',database[_0x31e689(0x139)](_0x31e689(0x1bb)+currentUser)[_0x31e689(0x148)](_0x31e689(0x16a))[_0x31e689(0x15d)](_0x41885b=>{const _0x4474b9=_0x31e689,_0x12551d={};_0x41885b['forEach'](_0x2c6f35=>{const _0x57272c=_0xb230,_0x577c29=_0x2c6f35[_0x57272c(0x18d)]();(!_0x12551d[_0x577c29[_0x57272c(0x1a1)]]||new Date(_0x577c29[_0x57272c(0x140)])>new Date(_0x12551d[_0x577c29[_0x57272c(0x1a1)]][_0x57272c(0x140)]))&&(_0x12551d[_0x577c29['product']]=_0x577c29);}),Object['values'](_0x12551d)[_0x4474b9(0x18c)](_0x164d18=>{const _0x4db66d=_0x4474b9,_0x276ec9=_0x271b85[_0x4db66d(0x133)](_0x4db66d(0x152))['insertRow']();_0x276ec9['insertCell'](0x0)[_0x4db66d(0x168)]=_0x164d18[_0x4db66d(0x1a1)],_0x276ec9['insertCell'](0x1)[_0x4db66d(0x168)]=_0x164d18['SF'],_0x276ec9[_0x4db66d(0x194)](0x2)[_0x4db66d(0x168)]=new Date(_0x164d18[_0x4db66d(0x140)])['toLocaleString']();}),setupSort(_0x271b85);});}function exportToExcel(){const _0x219838=_0x2433f7,_0x5c47c4=XLSX['utils'][_0x219838(0x157)](),_0x53b560=XLSX[_0x219838(0x174)]['table_to_sheet'](document['getElementById'](_0x219838(0x136)));XLSX[_0x219838(0x174)]['book_append_sheet'](_0x5c47c4,_0x53b560,'Ventes'),XLSX[_0x219838(0x14d)](_0x5c47c4,_0x219838(0x12d));}document['getElementById'](_0x2433f7(0x17e))['addEventListener']('click',exportToExcel);function deleteEntry(_0xde817a){const _0x43c3da=_0x2433f7;database[_0x43c3da(0x139)]('sales/'+currentUser+'/'+_0xde817a)[_0x43c3da(0x148)](_0x43c3da(0x16a))['then'](_0x16d645=>{const _0xf5549d=_0x43c3da,_0x4b7032=_0x16d645[_0xf5549d(0x18d)]();return database[_0xf5549d(0x139)](_0xf5549d(0x1bb)+currentUser+'/'+_0xde817a)[_0xf5549d(0x190)]()['then'](()=>{const _0x2874a0=_0xf5549d;return console[_0x2874a0(0x199)](_0x2874a0(0x1b5)),updateStockAfterDeletion(_0x4b7032);});})[_0x43c3da(0x15d)](()=>{return updateTable();})[_0x43c3da(0x15d)](()=>{updateStockTables(),updateAnalysis();})[_0x43c3da(0x14e)](_0x3dc278=>{const _0xdb6cae=_0x43c3da;console[_0xdb6cae(0x167)](_0xdb6cae(0x1b3),_0x3dc278);});}function updateStockAfterDeletion(_0x164b91){const _0x4153ac=_0x2433f7;return database[_0x4153ac(0x139)](_0x4153ac(0x1bb)+currentUser)[_0x4153ac(0x120)](_0x4153ac(0x140))[_0x4153ac(0x1be)](_0x164b91[_0x4153ac(0x140)])[_0x4153ac(0x189)](0x2)[_0x4153ac(0x148)]('value')[_0x4153ac(0x15d)](_0x5f3ccc=>{const _0x95ee71=_0x4153ac;let _0x1afb5c=[];_0x5f3ccc[_0x95ee71(0x18c)](_0x4ca55e=>{const _0x32e99a=_0x95ee71;_0x1afb5c[_0x32e99a(0x165)]({'key':_0x4ca55e['key'],..._0x4ca55e[_0x32e99a(0x18d)]()});}),_0x1afb5c[_0x95ee71(0x132)]((_0x342a65,_0x408fcc)=>new Date(_0x408fcc['dateTime'])-new Date(_0x342a65['dateTime']));if(_0x1afb5c[_0x95ee71(0x124)]>0x1&&_0x1afb5c[0x0][_0x95ee71(0x131)]!==_0x164b91[_0x95ee71(0x131)]){const _0x11fdbb=_0x1afb5c[0x1],_0x1a9446=_0x11fdbb['SF']+_0x164b91['V']-_0x164b91[_0x95ee71(0x18f)];return database[_0x95ee71(0x139)](_0x95ee71(0x1bb)+currentUser+'/'+_0x11fdbb[_0x95ee71(0x131)])[_0x95ee71(0x18a)]({'SF':_0x1a9446});}return Promise[_0x95ee71(0x13d)]();});}function updateTable(){const _0x5a14b0=_0x2433f7;return database[_0x5a14b0(0x139)](_0x5a14b0(0x1bb)+currentUser)[_0x5a14b0(0x148)](_0x5a14b0(0x16a))['then'](_0x2aea33=>{const _0x45d866=_0x5a14b0;salesData=[],_0x2aea33[_0x45d866(0x18c)](_0x4fb507=>{const _0x378fa5=_0x45d866,_0x11aa4f=_0x4fb507[_0x378fa5(0x18d)]();_0x11aa4f[_0x378fa5(0x131)]=_0x4fb507[_0x378fa5(0x131)],_0x11aa4f['total']=(_0x11aa4f['V']*_0x11aa4f['PV'])[_0x378fa5(0x175)](0x2),salesData['push'](_0x11aa4f);}),renderTable(salesData),setupSearch(),setupSort(salesTable);});}function renderTable(_0x19cf45){const _0x5ee959=_0x2433f7,_0xe5de87=salesTable['querySelector'](_0x5ee959(0x152));_0xe5de87[_0x5ee959(0x19d)]='',_0x19cf45['forEach'](_0xe3eb9c=>{const _0x3a4cca=_0x5ee959,_0x4d73bf=_0xe5de87['insertRow']();_0x4d73bf[_0x3a4cca(0x192)][_0x3a4cca(0x131)]=_0xe3eb9c[_0x3a4cca(0x131)],_0x4d73bf[_0x3a4cca(0x194)](0x0)[_0x3a4cca(0x168)]=new Date(_0xe3eb9c[_0x3a4cca(0x140)])['toLocaleString'](),_0x4d73bf[_0x3a4cca(0x194)](0x1)[_0x3a4cca(0x168)]=_0xe3eb9c['product'],_0x4d73bf[_0x3a4cca(0x194)](0x2)['textContent']=_0xe3eb9c['SI'],_0x4d73bf[_0x3a4cca(0x194)](0x3)['textContent']=_0xe3eb9c['APP'],_0x4d73bf[_0x3a4cca(0x194)](0x4)[_0x3a4cca(0x168)]=_0xe3eb9c['V'],_0x4d73bf[_0x3a4cca(0x194)](0x5)[_0x3a4cca(0x168)]=_0xe3eb9c['SF'],_0x4d73bf['insertCell'](0x6)[_0x3a4cca(0x168)]=_0xe3eb9c['PV'],_0x4d73bf[_0x3a4cca(0x194)](0x7)[_0x3a4cca(0x168)]=_0xe3eb9c['total'];}),addDeleteIcons();}function addDeleteIcons(){const _0x5ba077=_0x2433f7,_0x3117a1=salesTable[_0x5ba077(0x1b4)](_0x5ba077(0x130));_0x3117a1[_0x5ba077(0x18c)](_0x149800=>{const _0x274dbe=_0x5ba077,_0x52bba8=document[_0x274dbe(0x1a2)](_0x274dbe(0x1ad));_0x52bba8['innerHTML']='✖',_0x52bba8[_0x274dbe(0x12b)]=_0x274dbe(0x154),_0x52bba8[_0x274dbe(0x1b6)]=_0x209582=>{const _0x13369f=_0x274dbe;_0x209582[_0x13369f(0x17f)](),showConfirmDialog(_0x149800['dataset']['key']);},_0x149800[_0x274dbe(0x133)]('td:first-child')[_0x274dbe(0x1aa)](_0x52bba8);});}function _0x2d19(){const _0x251f9f=['ciamwifi.firebaseapp.com','salesTable','signupForm','salesDetailsSection','ref','2756187JjOyJb','div','getTime','resolve','month','users/','dateTime','expired','darkTheme','toggleAnalysisButton','location','sales','toUpperCase','https://ciamwifi-default-rtdb.firebaseio.com','once','keys','submit','signupButton','equalTo','writeFile','catch','confirmDelete','option','Mot\x20de\x20passe\x20incorrect','tbody','classList','delete-icon','documentElement','Prix\x20de\x20vente','book_new','endDate','AverageSales','search','true','G-50HPXBBBB8','then','salesEndDate','username','threeMonth','display','getContext','796986987288','stockTableGlobal','push','light-theme','error','textContent','Total\x20des\x20ventes:\x20','value','Error\x20creating\x20user:','password','DOMContentLoaded','5OgSUty','block','status','input','initializeApp','set','utils','toFixed','body','removeChild','salesChart','stockStartDate','analysisSection','rgba(255,\x20255,\x20255,\x200.1)','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Êtes-vous\x20sûr\x20de\x20vouloir\x20supprimer\x20cette\x20entrée\x20?</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22confirmDelete\x22>Confirmer</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22cancelDelete\x22>Annuler</button>\x0a\x20\x20\x20\x20','charAt','exportExcel','stopPropagation','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20l\x27ajout\x20de\x20l\x27entrée.','getElementById','rgb(0,\x20255,\x20255)','Utilisateur\x20introuvable','toLocaleString','total','Erreur\x20lors\x20de\x20la\x20création\x20du\x20compte','Analyse\x20des\x20ventes','addEventListener','limitToLast','update','326248BhYKZT','forEach','val','exists','APP','remove','active','dataset','line','insertCell','toString','AIzaSyCgeFWhfZZee9KTWJW2Hx_w_94Me1FB_tU','prices','\x20FCFA)','log','rgb(255,\x2099,\x20132)','week','toISOString','innerHTML','Inscription\x20réussie\x20!\x20Connectez-vous.','2ipJMBz','Ventes','product','createElement','Ce\x20nom\x20d\x27utilisateur\x20est\x20déjà\x20utilisé.','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27abonnement.','Moyenne\x20des\x20ventes\x20par\x20jour:\x20','Activer\x20le\x20mode\x20sombre','preventDefault','includes','Masquer\x20le\x20détail\x20des\x20ventes','appendChild','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27abonnement\x20:','th[data-sort]','span','click','insertRow','getItem','ciamwifi','prix','Erreur\x20lors\x20de\x20la\x20suppression\x20de\x20l\x27entrée:','querySelectorAll','Entrée\x20supprimée\x20avec\x20succès','onclick','slice','782368rERXtt','Activer\x20le\x20mode\x20clair','database','sales/','style','969358LEChoh','endAt','salesForm','setItem','TotalSales','toLowerCase','aria-label','signupUsername','signupPassword','labels','href','<option\x20value=\x22\x22>Sélectionner\x20un\x20produit</option>','add','Détail\x20des\x20ventes','filter','none','3658563fQERjP','destroy','orderByChild','signupContainer','ciamwifi.firebasestorage.app','totalSales','length','\x20FCFA','2549316AYbnMy','Erreur\x20lors\x20de\x20l\x27ajout\x20de\x20l\x27entrée\x20:','1:796986987288:web:58d59305a053487de0c46d','dashboardContainer','confirm-dialog','className','setAttribute','ventes_wifi_zone.xlsx','theme-toggle','2050216VGvcbz','tbody\x20tr','key','sort','querySelector','subscriptionRequiredModal'];_0x2d19=function(){return _0x251f9f;};return _0x2d19();}function showConfirmDialog(_0x5e5b4f){const _0x4d9778=_0x2433f7,_0x4c581f=document[_0x4d9778(0x1a2)](_0x4d9778(0x13b));_0x4c581f[_0x4d9778(0x12b)]=_0x4d9778(0x12a),_0x4c581f[_0x4d9778(0x19d)]=_0x4d9778(0x17c),document['body']['appendChild'](_0x4c581f),document[_0x4d9778(0x181)](_0x4d9778(0x14f))['onclick']=()=>{const _0x5b6385=_0x4d9778;deleteEntry(_0x5e5b4f),document[_0x5b6385(0x176)][_0x5b6385(0x177)](_0x4c581f);},document[_0x4d9778(0x181)]('cancelDelete')[_0x4d9778(0x1b6)]=()=>{const _0x5ba122=_0x4d9778;document[_0x5ba122(0x176)][_0x5ba122(0x177)](_0x4c581f);};}function setupSearch(){const _0x2a6084=document['querySelectorAll']('#searchInputs\x20input');_0x2a6084['forEach'](_0x2d5f42=>{const _0xce518f=_0xb230;_0x2d5f42[_0xce518f(0x188)](_0xce518f(0x171),()=>{const _0x5447b8=salesData['filter'](_0x350dde=>{const _0xc91243=_0xb230;return Object[_0xc91243(0x149)](_0x350dde)['every'](_0x5a85d4=>{const _0x595241=_0xc91243,_0x717d22=document[_0x595241(0x181)](_0x595241(0x15a)+(_0x5a85d4[_0x595241(0x17d)](0x0)[_0x595241(0x146)]()+_0x5a85d4[_0x595241(0x1b7)](0x1)))?.[_0x595241(0x16a)][_0x595241(0x1c2)]()||'';return _0x350dde[_0x5a85d4][_0x595241(0x195)]()[_0x595241(0x1c2)]()[_0x595241(0x1a8)](_0x717d22);});});renderTable(_0x5447b8),updateAnalysis(_0x5447b8);});});}function setupSort(_0x3bb94d){const _0x293be5=_0x2433f7,_0x3b4b88=_0x3bb94d['querySelectorAll'](_0x293be5(0x1ac));_0x3b4b88[_0x293be5(0x18c)](_0x54df74=>{const _0x5bc922=_0x293be5;_0x54df74[_0x5bc922(0x188)](_0x5bc922(0x1ae),()=>{const _0x1c108a=_0x5bc922,_0x5e75e8=_0x54df74['dataset'][_0x1c108a(0x132)],_0xca2700=_0x3bb94d['id']===_0x1c108a(0x136)?salesData:stockData;_0xca2700[_0x1c108a(0x132)]((_0x5db3cc,_0x10c497)=>{if(_0x5db3cc[_0x5e75e8]<_0x10c497[_0x5e75e8])return-0x1;if(_0x5db3cc[_0x5e75e8]>_0x10c497[_0x5e75e8])return 0x1;return 0x0;}),_0x3bb94d['id']===_0x1c108a(0x136)?(renderTable(_0xca2700),updateAnalysis(_0xca2700)):renderStockTable(_0xca2700,_0x3bb94d);});});}function renderStockTable(_0x117656,_0x669cde){const _0x10287f=_0x2433f7,_0x6c796d=_0x669cde[_0x10287f(0x133)](_0x10287f(0x152));_0x6c796d[_0x10287f(0x19d)]='',_0x117656[_0x10287f(0x18c)](_0x5a0ec2=>{const _0xdfd587=_0x10287f,_0x42e32b=_0x6c796d['insertRow']();_0x42e32b[_0xdfd587(0x194)](0x0)[_0xdfd587(0x168)]=_0x5a0ec2['product'],_0x42e32b['insertCell'](0x1)['textContent']=_0x5a0ec2['SF'],_0x42e32b['insertCell'](0x2)['textContent']=new Date(_0x5a0ec2['dateTime'])['toLocaleString']();});}function updateAnalysis(_0x287f88=salesData){const _0x39b1a5=_0x2433f7;let _0x5c38b5=0x0,_0x48850a=0x0;const _0xd1dedb={'labels':[],'sales':[],'prices':[]};_0x287f88['forEach'](_0x230d37=>{const _0x134508=_0xb230;_0x5c38b5+=_0x230d37['V']*_0x230d37['PV'],_0x48850a++,_0xd1dedb[_0x134508(0x117)][_0x134508(0x165)](new Date(_0x230d37['dateTime'])[_0x134508(0x184)]()),_0xd1dedb[_0x134508(0x145)][_0x134508(0x165)](_0x230d37['V']),_0xd1dedb[_0x134508(0x197)]['push'](_0x230d37['PV']);});const _0x10f8ef=_0x5c38b5/_0x48850a||0x0;totalSalesElement['textContent']=_0x39b1a5(0x169)+_0x5c38b5[_0x39b1a5(0x175)](0x2)+_0x39b1a5(0x125),averageSalesElement['textContent']=_0x39b1a5(0x1a5)+_0x10f8ef[_0x39b1a5(0x175)](0x2)+_0x39b1a5(0x125),updateChart(_0xd1dedb),updatePeriodAnalysis(_0x287f88);}function updateChart(_0x1bc12a){const _0x4e52ea=_0x2433f7,_0x59db43=document[_0x4e52ea(0x181)](_0x4e52ea(0x178))[_0x4e52ea(0x162)]('2d');salesChart&&salesChart[_0x4e52ea(0x11f)](),salesChart=new Chart(_0x59db43,{'type':_0x4e52ea(0x193),'data':{'labels':_0x1bc12a[_0x4e52ea(0x117)],'datasets':[{'label':_0x4e52ea(0x1a0),'data':_0x1bc12a[_0x4e52ea(0x145)],'borderColor':_0x4e52ea(0x182),'tension':0.1},{'label':_0x4e52ea(0x156),'data':_0x1bc12a['prices'],'borderColor':_0x4e52ea(0x19a),'tension':0.1}]},'options':{'responsive':!![],'scales':{'y':{'beginAtZero':!![],'grid':{'color':_0x4e52ea(0x17b)},'ticks':{'color':_0x4e52ea(0x182)}},'x':{'grid':{'color':'rgba(255,\x20255,\x20255,\x200.1)'},'ticks':{'color':'rgb(0,\x20255,\x20255)'}}},'plugins':{'legend':{'labels':{'color':'rgb(0,\x20255,\x20255)'}}}}});}function updatePeriodAnalysis(_0x2f8e02){const _0x1bade1=_0x2433f7,_0x16302a=new Date(),_0x18566e=new Date(_0x16302a[_0x1bade1(0x13c)]()-0x7*0x18*0x3c*0x3c*0x3e8),_0x376cae=new Date(_0x16302a[_0x1bade1(0x13c)]()-0x1e*0x18*0x3c*0x3c*0x3e8),_0x33489f=new Date(_0x16302a[_0x1bade1(0x13c)]()-0x5a*0x18*0x3c*0x3c*0x3e8),_0x36c728=_0x2f8e02[_0x1bade1(0x11c)](_0x2f5725=>new Date(_0x2f5725[_0x1bade1(0x140)])>=_0x18566e),_0x40744c=_0x2f8e02['filter'](_0x5512bd=>new Date(_0x5512bd['dateTime'])>=_0x376cae),_0x580bbc=_0x2f8e02[_0x1bade1(0x11c)](_0x36d213=>new Date(_0x36d213[_0x1bade1(0x140)])>=_0x33489f);updatePeriodStats(_0x36c728,_0x1bade1(0x19b)),updatePeriodStats(_0x40744c,_0x1bade1(0x13e)),updatePeriodStats(_0x580bbc,_0x1bade1(0x160));}function updatePeriodStats(_0x13b1bb,_0x33c8ec){const _0x2f4f56=_0x2433f7,_0x4f9a32=_0x13b1bb['reduce']((_0x1eb479,_0x4118da)=>_0x1eb479+_0x4118da['V']*_0x4118da['PV'],0x0),_0x1f8ec0=_0x4f9a32/_0x13b1bb[_0x2f4f56(0x124)]||0x0;document[_0x2f4f56(0x181)](_0x33c8ec+_0x2f4f56(0x1c1))[_0x2f4f56(0x168)]=_0x2f4f56(0x169)+_0x4f9a32[_0x2f4f56(0x175)](0x2)+_0x2f4f56(0x125),document[_0x2f4f56(0x181)](_0x33c8ec+_0x2f4f56(0x159))['textContent']=_0x2f4f56(0x1a5)+_0x1f8ec0['toFixed'](0x2)+_0x2f4f56(0x125);}toggleAnalysisButton[_0x2433f7(0x188)](_0x2433f7(0x1ae),function(){const _0x5596bd=_0x2433f7;analysisSection[_0x5596bd(0x1bc)][_0x5596bd(0x161)]==='none'||analysisSection['style'][_0x5596bd(0x161)]===''?(analysisSection['style']['display']=_0x5596bd(0x16f),salesDetailsSection[_0x5596bd(0x1bc)][_0x5596bd(0x161)]=_0x5596bd(0x11d),this[_0x5596bd(0x168)]='Masquer\x20l\x27analyse\x20des\x20ventes',toggleSalesButton['textContent']=_0x5596bd(0x11b),updateAnalysis(salesData)):(analysisSection['style']['display']=_0x5596bd(0x11d),this['textContent']=_0x5596bd(0x187));}),toggleSalesButton['addEventListener'](_0x2433f7(0x1ae),function(){const _0x3a8b9d=_0x2433f7;salesDetailsSection[_0x3a8b9d(0x1bc)][_0x3a8b9d(0x161)]===_0x3a8b9d(0x11d)||salesDetailsSection[_0x3a8b9d(0x1bc)]['display']===''?(salesDetailsSection['style']['display']=_0x3a8b9d(0x16f),analysisSection[_0x3a8b9d(0x1bc)][_0x3a8b9d(0x161)]=_0x3a8b9d(0x11d),this[_0x3a8b9d(0x168)]=_0x3a8b9d(0x1a9),toggleAnalysisButton[_0x3a8b9d(0x168)]='Analyse\x20des\x20ventes'):(salesDetailsSection[_0x3a8b9d(0x1bc)][_0x3a8b9d(0x161)]=_0x3a8b9d(0x11d),this[_0x3a8b9d(0x168)]=_0x3a8b9d(0x11b));});const themeToggle=document[_0x2433f7(0x181)](_0x2433f7(0x12e)),root=document[_0x2433f7(0x155)];let isDarkTheme=!![];function setTheme(_0x2b2f36){const _0x1d54a0=_0x2433f7;_0x2b2f36?(root[_0x1d54a0(0x153)][_0x1d54a0(0x190)]('light-theme'),themeToggle[_0x1d54a0(0x168)]='🌙',themeToggle[_0x1d54a0(0x12c)](_0x1d54a0(0x114),_0x1d54a0(0x1b9))):(root[_0x1d54a0(0x153)][_0x1d54a0(0x11a)](_0x1d54a0(0x166)),themeToggle[_0x1d54a0(0x168)]='☀️',themeToggle[_0x1d54a0(0x12c)]('aria-label',_0x1d54a0(0x1a6))),isDarkTheme=_0x2b2f36,localStorage[_0x1d54a0(0x1c0)]('darkTheme',_0x2b2f36);}themeToggle['addEventListener']('click',()=>{setTheme(!isDarkTheme);}),document[_0x2433f7(0x188)](_0x2433f7(0x16d),()=>{const _0x5c292c=_0x2433f7,_0x310721=localStorage[_0x5c292c(0x1b0)](_0x5c292c(0x142));_0x310721!==null?setTheme(_0x310721===_0x5c292c(0x15b)):setTheme(![]);}),document[_0x2433f7(0x181)]('filterStockDates')[_0x2433f7(0x188)](_0x2433f7(0x1ae),function(){const _0x1efbfa=_0x2433f7,_0x236232=new Date(document[_0x1efbfa(0x181)](_0x1efbfa(0x179))[_0x1efbfa(0x16a)]),_0x2a2841=new Date(document[_0x1efbfa(0x181)]('stockEndDate')['value']);updateStockTables(_0x236232,_0x2a2841);}),document[_0x2433f7(0x181)]('filterSalesDates')[_0x2433f7(0x188)](_0x2433f7(0x1ae),function(){const _0x30969a=_0x2433f7,_0x35c0f5=new Date(document[_0x30969a(0x181)]('salesStartDate')[_0x30969a(0x16a)]),_0x4aa839=new Date(document[_0x30969a(0x181)](_0x30969a(0x15e))['value']),_0x315fbc=salesData[_0x30969a(0x11c)](_0x24f161=>{const _0x5e39d5=_0x30969a,_0x5bb672=new Date(_0x24f161[_0x5e39d5(0x140)]);return(!_0x35c0f5||_0x5bb672>=_0x35c0f5)&&(!_0x4aa839||_0x5bb672<=_0x4aa839);});renderTable(_0x315fbc),updateAnalysis(_0x315fbc);});function updateStockTables(_0x143cf0,_0x590988){const _0x2ea186=_0x2433f7,_0x298f81=document[_0x2ea186(0x181)](_0x2ea186(0x164));_0x298f81[_0x2ea186(0x133)]('tbody')[_0x2ea186(0x19d)]='',database['ref'](_0x2ea186(0x1bb)+currentUser)['once']('value')['then'](_0x581c0d=>{const _0x7258bc=_0x2ea186,_0x1890e5={};_0x581c0d['forEach'](_0x5f298e=>{const _0x1f11af=_0xb230,_0xfc86b9=_0x5f298e['val'](),_0x49fc93=new Date(_0xfc86b9[_0x1f11af(0x140)]);(!_0x143cf0||_0x49fc93>=_0x143cf0)&&(!_0x590988||_0x49fc93<=_0x590988)&&((!_0x1890e5[_0xfc86b9[_0x1f11af(0x1a1)]]||_0x49fc93>new Date(_0x1890e5[_0xfc86b9[_0x1f11af(0x1a1)]][_0x1f11af(0x140)]))&&(_0x1890e5[_0xfc86b9['product']]=_0xfc86b9));}),Object['values'](_0x1890e5)[_0x7258bc(0x18c)](_0x5f5742=>{const _0x4afc51=_0x7258bc,_0x24a62e=_0x298f81[_0x4afc51(0x133)](_0x4afc51(0x152))[_0x4afc51(0x1af)]();_0x24a62e[_0x4afc51(0x194)](0x0)[_0x4afc51(0x168)]=_0x5f5742[_0x4afc51(0x1a1)],_0x24a62e[_0x4afc51(0x194)](0x1)['textContent']=_0x5f5742['SF'],_0x24a62e[_0x4afc51(0x194)](0x2)[_0x4afc51(0x168)]=new Date(_0x5f5742['dateTime'])[_0x4afc51(0x184)]();}),setupSort(_0x298f81);});}function showSubscriptionRequiredModal(){const _0x264972=_0x2433f7;document[_0x264972(0x181)](_0x264972(0x134))[_0x264972(0x1bc)][_0x264972(0x161)]='flex';}function hideSubscriptionRequiredModal(){const _0xf203b3=_0x2433f7;document[_0xf203b3(0x181)](_0xf203b3(0x134))[_0xf203b3(0x1bc)]['display']='none';}function redirectToSubscription(){const _0x4c0605=_0x2433f7;window[_0x4c0605(0x144)][_0x4c0605(0x118)]='index.html';}async function checkSubscriptionStatus(){const _0x1daaf5=_0x2433f7;try{const _0xa4e349=await adminRef[_0x1daaf5(0x148)](_0x1daaf5(0x16a)),_0x1034f0=_0xa4e349[_0x1daaf5(0x18d)](),_0x1eb62e=new Date();if(_0x1034f0&&_0x1034f0[_0x1daaf5(0x170)]===_0x1daaf5(0x191)){const _0x1910e6=new Date(_0x1034f0[_0x1daaf5(0x158)]);return _0x1910e6>=_0x1eb62e?!![]:(await adminRef[_0x1daaf5(0x18a)]({'status':_0x1daaf5(0x141)}),![]);}else return![];}catch(_0x281a64){console[_0x1daaf5(0x167)](_0x1daaf5(0x1ab),_0x281a64);throw _0x281a64;}}updateTable(),updateStockTables(),analysisSection[_0x2433f7(0x1bc)]['display']=_0x2433f7(0x11d),salesDetailsSection[_0x2433f7(0x1bc)]['display']=_0x2433f7(0x11d),updateTable(),updateStockTables(),updateAnalysis();const savedTheme=localStorage[_0x2433f7(0x1b0)](_0x2433f7(0x142));savedTheme!==null&&setTheme(savedTheme===_0x2433f7(0x15b));