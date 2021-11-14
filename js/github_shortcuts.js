// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: th-large;
function getwsize() {
  var sizemap = {
  'z428x926':['170x170','364x170','364x382'],
'z414x896':['169x169','360x169','360x379'],
'z414x736':['159x159','348x157','348x357'],
'z390x844':['158x158','338x158','338x354'],
'z375x812':['155x155','329x155','329x345'],
'z375x667':['148x148','321x148','321x324'],
'z360x780':['155x155','329x155','329x345'],
'z320x568':['141x141','292x141','292x311'],
'z768x1024':['120x120','260x120','260x260','540x260'],
'z810x1080':['124x124','272x124','272x272','568x272'],
'z834x1112':['132x132','288x132','288x28','600x288'],
'z820x1180':['136x136','300x136','300x300','628x300'],
'z834x1194':['136x136','300x136','300x300','628x300'],
'z1024x1366':['160x160','356x160','356x356','748x356']
  }
  var widgetsize = config.widgetFamily ;
  if(widgetsize === 'small') {
    widgetsize = 0
  }
  if(widgetsize === 'medium') {
    widgetsize = 1
  }
  if(widgetsize === 'large') {
    widgetsize = 2
  }
  if(widgetsize === 'extraLarge') {
    widgetsize = 3
  }
  if(widgetsize === undefined) {
  return '0x0'
}
  var screensi = Device.screenSize()
  var scrsi_min = Math.min(screensi.width,screensi.height)
  var scrsi_max = Math.max(screensi.width,screensi.height)
  var scrstr = 'z' + scrsi_min + 'x' + scrsi_max
  return eval('sizemap.' + scrstr + '[widgetsize]')
}
function genid(mode) {
if(mode === "random"){
var genidchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var genid = "";
            for (var i = 0; i < 16; i++) {
                var genrandomNumber = Math.floor(Math.random() * genidchars.length);
                genid += genidchars.substring(genrandomNumber, genrandomNumber + 1);
            }
  return genid ;
}
          
 if(mode === "time"){
   var gtoday=new Date();
   var genid2 = (gtoday.getMonth()+1) + '_' + gtoday.getDate() + '_' + gtoday.getHours() + '_' + gtoday.getMinutes() + '_' + gtoday.getSeconds() + '-' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8));
   
   return genid2
 }
  
  if(mode === "number"){
   
   var genid3 = '' ;
for (var i = 0; i < 16; i++) {
  genid3 += '' + (0+Math.floor(Math.random() * 9))
}
   return genid3
 }
  
  if(mode === "uuid"){
var genidchars4 = "abcdef012345678";
    var geniduu = [8,4,4,4,12];
            var genid4 = "";
            var genid5 = "";
    for (var ia = 0; ia < geniduu.length; ia++) {
      var genid4 = "";
            for (var i = 0; i < geniduu[ia]; i++) {
                var genrandomNumber4 = Math.floor(Math.random() * genidchars4.length);
                genid4 += genidchars4.substring(genrandomNumber4, genrandomNumber4 + 1);
            }
genid5 += '-' + genid4 ;
    }
    return genid5.substring(1,genid5.length)
  }

}


var widget = new ListWidget()
if(config.widgetFamily === 'medium') {
  widget.backgroundColor = Color.dynamic(new Color('#ffffff', 100),new Color('#000000', 100))
//   widget.setPadding(0, 0, 0, 0)
  var erw = parseInt(String(getwsize()).split('x')[0])
  var erh = parseInt(String(getwsize()).split('x')[1])
if(Device.isPhone()) {
  erw -= 20;
  erh -= 20;
}
  var allcon = widget.addStack() ;
  allcon.layoutVertically()
  var titlesta = allcon.addStack() ;
  titlesta.addSpacer(3)
  titletext = titlesta.addText('Github')
  titletext.font = new Font('Noto Sans Tc', 20)
  titletext.url = 'https://github.com/'
  var allsta = allcon.addStack() ;
  allsta.size = new Size(erw, erw/3-10)
  allsta.layoutHorizontally()
  allsta.centerAlignContent()
  allsta.addSpacer(10)
var iconurl = ['https://erichsia7.github.io/widgets/image/addicon.png','https://erichsia7.github.io/widgets/image/gist.png','https://erichsia7.github.io/widgets/image/notification.png'] ;
var openurl = ['https://github.com/new','https://gist.github.com','https://github.com/notifications']
  for (var ia = 0; ia < 3; ia++) {
    var iconimg = await new Request(String(iconurl[ia])).loadImage() 
    var sta = allsta.addStack()
    sta.backgroundColor = Color.dynamic(new Color('#e3e3e3', 100),new Color('#1f1f1f', 100))
    sta.size = new Size(erw/3-10, erw/3-10)
    sta.cornerRadius = 10
//     sta.layoutVertically()
    sta.centerAlignContent()
    var icop = sta.addImage(iconimg)
    icop.imageSize = new Size(27,27)
    icop.cornerRadius = 7
    sta.addSpacer(3)
    
sta.url = String(openurl[ia]) ;
    if(ia<3){
    allsta.addSpacer(10)
  }
  }
}
else {
var netext = widget.addText('Can only use medium.') ;
  netext.centerAlignText()
  netext.textColor = new Color('#ff0000', 100)
}
Script.setWidget(widget)
Script.complete()
