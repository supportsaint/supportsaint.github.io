/*! saintvoice.js v1.00.00 | (c) 2016 supportsaint.com */

'use strict';

/* 

static persitent global vars * global functions 
server side events functions
client dside events functions

*/

/*! jsTimezoneDetect - v1.0.5 - 2013-04-01 */
window.jstz=function(){var b=function(a){a=-a.getTimezoneOffset();return null!==a?a:0},c=function(){return b(new Date(2010,0,1,0,0,0,0))},f=function(){return b(new Date(2010,5,1,0,0,0,0))},e=function(){var a=c(),d=f(),b=c()-f();return new jstz.TimeZone(jstz.olson.timezones[0>b?a+",1":0<b?d+",1,s":a+",0"])};return{determine_timezone:function(){"undefined"!==typeof console&&console.log("jstz.determine_timezone() is deprecated and will be removed in an upcoming version. Please use jstz.determine() instead.");
return e()},determine:e,date_is_dst:function(a){var d=5<a.getMonth()?f():c(),a=b(a);return 0!==d-a}}}();jstz.TimeZone=function(b){var c=null,c=b;"undefined"!==typeof jstz.olson.ambiguity_list[c]&&function(){for(var b=jstz.olson.ambiguity_list[c],e=b.length,a=0,d=b[0];a<e;a+=1)if(d=b[a],jstz.date_is_dst(jstz.olson.dst_start_dates[d])){c=d;break}}();return{name:function(){return c}}};jstz.olson={};
jstz.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax",
"-240,0":"America/Santo_Domingo","-240,1,s":"America/Asuncion","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,1":"Europe/Moscow","180,0":"Asia/Baghdad",
"210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Yerevan","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide",
"600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"};
jstz.olson.dst_start_dates={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,
2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,
0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)};
jstz.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":"Asia/Gaza Asia/Beirut Europe/Minsk Europe/Helsinki Europe/Istanbul Asia/Damascus Asia/Jerusalem Africa/Cairo".split(" "),"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland",
"Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};
  
window.isbrowser = {Useragent: function() {return navigator.userAgent;},Any: function() {return (isbrowser.Useragent() );}}
window.isplatform = {
    Android: function() {return navigator.userAgent.match(/Android/i) ? 'Android' : false;},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i) ? 'BlackBerry' : false;},
    iPhone: function() {return navigator.userAgent.match(/iPhone/i) ? 'iPhone' : false;},
    iPad: function() {return navigator.userAgent.match(/iPad/i) ? 'iPad' : false;},
    iPod: function() {return navigator.userAgent.match(/iPod/i) ? 'iPod' : false;},
    IEMobile: function() {return navigator.userAgent.match(/IEMobile/i) ? 'IEMobile' : false;},
    OS: function() {return navigator.platform;},
    Any: function() {return (isplatform.Android() || isplatform.BlackBerry() || isplatform.iPhone() || isplatform.iPad() || isplatform.iPod() || isplatform.IEMobile() || isplatform.OS() );}};

window.contactstate = 0;
window.overlaystate = 0;
window.scrollstate = 0;
window.apptime = 0;

function newdate() {
  var today = new Date();
  var yr = today.getFullYear();
  var mi = today.getMinutes();
  var sum = '';
  mi = mi + "";
  yr = yr + "";
  mi = mi.split("").reverse().join(""); 
  yr = yr.split("").reverse().join("");
  yr = yr.substring(0,2);
  sum = yr+mi;
  if (sum.toString().length < 4) {sum = sum + '0'} 
  // console.log('date :' + yr + mi + '1');
  return sum;
}

//  _process('post', '_contact', data, 'https://script.google.com/macros/s/AKfycbwC52D4_hscAoarTk4bzZUW2q3EeGmShAhH13obqyUWH_ooUPU/exec');

function _process(ctype, cwho, cdata, url) {

  var data = '';
  var baseurl = window.location.protocol + "//" + (window.location.host + "/" + window.location.pathname).replace('//', '/') + '/';
  /* configured to allow for requests to different resources for load balance option * default * baseurl */
  console.log('using default baseurl :' + baseurl);
   
  switch (ctype) {

    case ('get'):
          getdata(baseurl + cpath, callrequest, 'url', cwho);
    break;
      
    case ('post'):
          switch (cwho) {
            
            case ('_invoice'):   /* contact us widget */
                  postform(url, callrequest, cdata, cwho);
            break;

          }
    break;
  }

  baseurl = null;
  callrequest(data);
  data = null;
}

function callrequest(data) {
   
  /* responce data || user messaged || error handling  */

  var datastr = data.split(':*:');

  if (datastr[0] !== '') {
  
  /*
  console.log('(status: post or get or error) -> ' + datastr[0]); // status: post or get or error
  console.log('(postfrom: who made request) -> ' + datastr[1]);   // postfrom: who made the post 
  console.log('this is the data in -->' + data);
  */

    switch (datastr[0]) {

      case ('get'):

           switch (true) {

            case (datastr[1] === '_kcode'):
                  /* now check for error bubbled, returned from process */
                  datastr[3] = trimquote(datastr[3]);
                  set_html_val('authenticity_token', datastr[3]);
                  console.log('update auth token: ' + datastr[3]);
 
            break;

            case ('error'):
                  console.log(datastr[1]);
                  console.log(datastr[2]);
                  console.log('unable to connect to supportsaint, please try later');
            break;
             
            }
            datastr = null;
      break;

      case ('post'):          
          /* post returned good (error not bubbled from post action) check postfrom */

           switch (true) {

            case (datastr[1] === '_invoice'):
                  /* now check for error bubbled, returned from process */

                  // console.log('datastr' + datastr);
                  // console.log('datastr[2]' + datastr[2]);
    
                  console.log('datastr[2][result] ' +  JSON.parse(datastr[2]).result );

                  // datastr[3] = trimquote(datastr[3]);

                  if ( JSON.parse(datastr[2]).result === 'success' ) {

                       statemsg('_invoice', 'correct');

                       console.log('contact us process completed * correct');
                  
                  } else {

                       statemsg('_invoice','error');

                       console.log('contact us process completed * error');
                  } 

            break;
              
            }
            datastr = null;
      break;
   }
  }
  datastr = null;
}

/* client side events * functions */


function saintpass() {
 if (visible_css_class('invoicemain')) {
     set_css_id('invoicepass', 'focus', 'focus')
 }
}


window.onload = function() {

/* onload */

  switch (true) {

      case ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 700 ):
            scrollTo(0, 200);
      break;
    
      case (document.documentElement.scrollTop > 740 || document.body.scrollTop > 740 ):
            /* console.log('white the header'); */
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'light');
            scrollstate = 2;
      break;
      
      case (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150):
            /* console.log('darken the header'); */
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'light');
            scrollstate = 1;
      break;

      case (document.documentElement.scrollTop < 150 || document.body.scrollTop < 150 ):
            /* console.log('lighten the header'); */
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'light');
            scrollstate = 0;
      break;

  }

  saintpass();

}



/*
ref : http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation

scrollTo:
e = element to scroll to or top position in pixels
d = time to scroll in ms

scrollToX:
e = scrollable element
a = initiall scrollable element position (from)
b = height to scroll to (to)
t = lerp from a to b (0 - 1)
v = speed. input 1 / time to scroll
s = repeat every 's' miliseconds
*/

function scrollTo(e,d){if(d>=0){var h=document.documentElement;if(h.scrollTop===0){var t=h.scrollTop;++h.scrollTop;h=t+1===h.scrollTop--?h:document.body}typeof e==="object"&&(e=e.offsetTop);scrollToX(h,h.scrollTop,e,0,1/d,20)}}function scrollToX(e,a,b,t,v,s){function F(){var k='';t<0||t>1||v<=0||(k=t-1,e.scrollTop=a-(a-b)*(k*k*k+1),t+=v*s,setTimeout(F,s))} F() }


document.onmouseover = function mouseover(event) {

 var elem = (event.target) ? event.target : event.srcElement;

 try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
 var tagid = elem.id;

 var tagclass = elem.className.split(" ")[0];

 switch(true) {

  case (tagid === 'hometoday'):
        elem.setAttribute('src', '/img/today-48-blank.png');
  break;

  case (tagid === 'homeservice'):
        elem.setAttribute('src', '/img/home-4-48-blank.png');
  break;

  case (tagid === 'timeservice'):
        elem.setAttribute('src', '/img/time-8-48-blank.png');
  break;

  case (tagid === 'approvalservice'):
        elem.setAttribute('src', '/img/approval-48-blank.png');
  break;

  case (tagid === 'glyn'):
        elem.setAttribute('src', '/assets/glynup.jpg');
  break;

  case (tagid === 'thesaint'):
        elem.setAttribute('src', '/assets/saint.jpg');
  break;

/*
  case (tagid === 'book'):
        console.log('book');
        clear_css_class('book', '.nxt-unfocus-app-process'); 
  break;
*/

  case (tagid === 'confirm'):
        clear_css_class('confirm', '.nxt-focus-app-process'); 
  break;

  case (tagid === 'visit'):
        clear_css_class('visit', '.nxt-focus-app-process'); 
  break;

  case (tagid === 'pay'):
        clear_css_class('pay', '.nxt-focus-app-process'); 
  break;

  case (tagid === 'satisfy'):
        clear_css_class('satisfy', '.nxt-focus-app-process'); 
  break;

  /* mobile browser * hover events */

  case (tagclass === "findoutmorebtn"):
  case (tagclass === "findoutmoremob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[0] === 0) { once[0] = once[0] + 1;
                   set_css_class('findoutmorebtn', 'display', 'none');
                   set_css_class('findoutmoremob', 'display', 'none');
                   set_css_class('findoutmorebtnhvr', 'display', 'block');
                   
                   setTimeout(function() {set_css_class('findoutmoremob', 'display', 'block');set_css_class('findoutmorebtnhvr', 'display', 'none');selectmenu('findoutmore');scrollTo(0, 700);}, 300);
                   once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }
  
  break;

  case (tagclass === "homefooterbtn"):
  case (tagclass === "homefootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[1] === 0) { once[1] = once[1] + 1;
                   set_css_class('homefooterbtn', 'display', 'none');
                   set_css_class('homefootermob', 'display', 'none');
                   set_css_class('homefooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('homefootermob', 'display', 'block');set_css_class('homefooterbtnhvr', 'display', 'none');selectmenu('home');scrollTo(0, 700);}, 300);
                   once[0] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "aboutfooterbtn"):
  case (tagclass === "aboutfootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[2] === 0) { once[2] = once[2] + 1;
                   set_css_class('aboutfooterbtn', 'display', 'none');
                   set_css_class('aboutfootermob', 'display', 'none');
                   set_css_class('aboutfooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('aboutfootermob', 'display', 'block');set_css_class('aboutfooterbtnhvr', 'display', 'none');selectmenu('about');scrollTo(0, 700);}, 300);
                   once[0] = 0;once[1] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "contactfooterbtn"):
  case (tagclass === "contactfootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[3] === 0) { once[3] = once[3] + 1;
                   set_css_class('contactfooterbtn', 'display', 'none');
                   set_css_class('contactfootermob', 'display', 'none');
                   set_css_class('contactfooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('contactfootermob', 'display', 'block');set_css_class('contactfooterbtnhvr', 'display', 'none');selectmenu('contact');scrollTo(0, 700);}, 500);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "faqsfooterbtn"):
  case (tagclass === "faqsfootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[4] === 0) { once[4] = once[4] + 1;
                   set_css_class('faqsfooterbtn', 'display', 'none');
                   set_css_class('faqsfootermob', 'display', 'none');
                   set_css_class('faqsfooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('faqsfootermob', 'display', 'block');set_css_class('faqsfooterbtnhvr', 'display', 'none');selectmenu('faqs');scrollTo(0, 700);}, 300);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "termsfooterbtn"):
  case (tagclass === "termsfootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[5] === 0) { once[5] = once[5] + 1;
                   set_css_class('termsfooterbtn', 'display', 'none');
                   set_css_class('termsfootermob', 'display', 'none');
                   set_css_class('termsfooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('termsfootermob', 'display', 'block');set_css_class('termsfooterbtnhvr', 'display', 'none');selectmenu('terms');scrollTo(0, 700);}, 300);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "privacyfooterbtn"):
  case (tagclass === "privacyfootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[6] === 0) { once[6] = once[6] + 1;
                   set_css_class('privacyfooterbtn', 'display', 'none');
                   set_css_class('privacyfootermob', 'display', 'none');
                   set_css_class('privacyfooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('privacyfootermob', 'display', 'block');set_css_class('privacyfooterbtnhvr', 'display', 'none');selectmenu('privacy');scrollTo(0, 700);}, 300);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[7] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "joinfooterbtn"):
  case (tagclass === "joinfootermob"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[7] === 0) { once[7] = once[7] + 1;
                   set_css_class('joinfooterbtn', 'display', 'none');
                   set_css_class('joinfootermob', 'display', 'none');
                   set_css_class('joinfooterbtnhvr', 'display', 'block');

                   setTimeout(function() {set_css_class('joinfootermob', 'display', 'block');set_css_class('joinfooterbtnhvr', 'display', 'none');selectmenu('findoutmore');scrollTo(0, 700);}, 300);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[8] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "footface"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[8] === 0) { once[8] = once[8] + 1;set_css_class('footface', 'display', 'none');set_css_class('footfacered', 'display', 'block');
                   // setTimeout(function() {set_css_class('footface', 'display', 'block');set_css_class('footfacehvr', 'display', 'none');}, 500);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[9] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "footinsta"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[9] === 0) { once[9] = once[9] + 1;set_css_class('footinsta', 'display', 'none');set_css_class('footinstared', 'display', 'block');
                   // setTimeout(function() {set_css_class('footinsta', 'display', 'block');set_css_class('footinstahvr', 'display', 'none');}, 500);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[10] = 0;
               }
          break;default:break;
        }

  break;

  case (tagclass === "foottwit"):

        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
               if (once[10] === 0) { once[10] = once[10] + 1;set_css_class('foottwit', 'display', 'none');set_css_class('foottwitred', 'display', 'block');
                   // setTimeout(function() {set_css_class('foottwit', 'display', 'block');set_css_class('foottwithvr', 'display', 'none');}, 500);
                   once[0] = 0;once[1] = 0;once[2] = 0;once[3] = 0;once[4] = 0;once[5] = 0;once[6] = 0;once[7] = 0;once[8] = 0;once[9] = 0;
               }
          break;default:break;
        }

  break;


 }

}

document.onmouseout = function mouseover(event) {

 var elem = (event.target) ? event.target : event.srcElement;

 try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
 var tagid = elem.id;

 var tagclass = elem.className.split(" ")[0];

 switch(true) {

  case (tagid === 'hometoday'):
        elem.setAttribute('src', '/img/today-48.png');
  break;

  case (tagid === 'homeservice'):
        elem.setAttribute('src', '/img/home-4-48.png');
  break;

  case (tagid === 'timeservice'):
        elem.setAttribute('src', '/img/time-8-48.png');
  break;

  case (tagid === 'approvalservice'):
        elem.setAttribute('src', '/img/approval-48.png');
  break;

  case (tagid === 'glyn'):
        elem.setAttribute('src', '/assets/glyn.jpg');
  break;

  case (tagid === 'thesaint'):
        elem.setAttribute('src', '/assets/saintout.jpg');
  break;

  case (tagclass === "footfacered"):
        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
                if (once[8] === 1) { set_css_class('footface', 'display', 'block');set_css_class('footfacered', 'display', 'none');}
          break;default:break;
        }
  break;
  case (tagclass === "footinstared"):
        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
                if (once[9] === 1) { set_css_class('footinsta', 'display', 'block');set_css_class('footinstared', 'display', 'none');}
          break;default:break;
        }
  break;
  case (tagclass === "foottwitred"):
        switch (isplatform.Any()) {case ('iPhone'):case ('iPod'):case ('Android'):case ('BlackBerry'):case ('IEMobile'):
                if (once[10] === 1) { set_css_class('foottwit', 'display', 'block');set_css_class('foottwitred', 'display', 'none');}
          break;default:break;
        }
  break;

 }
}

document.onkeyup = function keyPress(event) {

  // console.log('onkeyup contactstate : ' + contactstate);

  switch (true) {

    case ( !visible_css_class('invoicemain') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('invoice_name'):
        case ('invoice_email'):
        case ('invoice_phone'):
        case ('invoice_address'):
        case ('invoice_zip'):
        case ('invoice_message'):
        case ('invoice_one'):
        case ('invoice_two'):
        case ('invoice_three'):
        case ('invoice_four'):
        case ('invoice_five'):
        case ('invoice_notes'):
        case ('invoice_total'):
              validate('invoice');
        break;
      }
    }

    break;

  }
}

document.onchange = function onChange(event) {

  // console.log('onchange contactstate : ' + contactstate);

  switch (true) {


    case ( !visible_css_class('invoicemain') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('invoice_name'):
        case ('invoice_email'):
        case ('invoice_phone'):
        case ('invoice_address'):
        case ('invoice_zip'):
        case ('invoice_message'):
        case ('invoice_one'):
        case ('invoice_two'):
        case ('invoice_three'):
        case ('invoice_four'):
        case ('invoice_five'):
        case ('invoice_notes'):
        case ('invoice_total'):
              validate('invoice');
        break;
      }
    }

    break;

  }
}

document.onclick = function keyClick(event) {

  var elem = (event.target) ? event.target : event.srcElement;
 
  try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
  var tagid = elem.id;

  var tagclass = elem.className.split(" ")[0];
  var tagtype = elem.tagName.toLowerCase();

  // hover substitute or could disable hover using CSS

  console.log(tagid);
  console.log(tagclass);
  console.log(tagtype);

/* howmain * main menu */

  switch (true) {

   case (tagclass === 'booknav'):
   case (tagclass === 'bookfooter'):
   case (tagclass === 'book-now'):
   case (tagid === 'book-now'):

   case (tagclass === 'homenav'):
   case (tagclass === 'homefooter'):
   case (tagclass === 'homefooterbtn'):
   case (tagclass === 'homefooterbtnhvr'):
   case (tagid === 'home'):

   case (tagclass === 'aboutnav'):
   case (tagclass === 'aboutfooter'):
   case (tagclass === 'aboutfooterbtn'):
   case (tagclass === 'aboutfooterbtnhvr'):
   case (tagid === 'about'):

   case (tagclass === 'faqsnav'):
   case (tagclass === 'faqsfooter'):
   case (tagclass === 'faqsfooterbtn'):
   case (tagclass === 'faqsfooterbtnhvr'):
   case (tagid === 'faqs'):

   case (tagclass === 'joinnav'):
   case (tagclass === 'joinfooter'):
   case (tagclass === 'joinfooterbtn'):
   case (tagclass === 'joinfooterbtnhvr'):

   case (tagclass === 'findoutmore'):
   case (tagclass === 'findoutmorebtn'):
   case (tagclass === 'findoutmorebtnhvr'):

   case (tagclass === 'privacyfooter'):
   case (tagclass === 'privacyfooterbtn'):
   case (tagclass === 'privacyfooterbtnhvr'):

   case (tagclass === 'termsfooter'):
   case (tagclass === 'termsfooterbtn'):
   case (tagclass === 'termsfooterbtnhvr'):

   case (tagclass === 'termservice'):

   case (tagclass === 'contactnav'):
   case (tagclass === 'contactfooterbtn'):
   case (tagclass === 'contactfooterbtnhvr'):
   case (tagclass === 'getintouch'):
   case (tagclass === 'contactfooter'):     
   case (tagid === 'contactmsg'):

   case (tagid === 'nav-toggle'):

         if (overlaystate === 1) { navtoggle();}
         selectmenu('home');
         /*unscroll('stop');*/
         scrollTo(0, 700);
         /*unscroll('start');*/

   break;

   case (tagclass === 'invonav'):
         window.location.href = "/invoice/"; 
   break;

   case (tagid === 'invoiceok'):
         passcheck();
   break;

   case (tagid === 'invoiceback'):
   case (tagclass === 'close'):
         clearcontent();
         quitclose();
          // if ( !visible_css_class('summaryfinal') ) { quitalldiags(); set_css_id('beforeyouleaveemail', 'focus', 'focus'); } else { quitclose();};
   break;

   case (tagid === 'invoiceclose'):
   case (tagid === 'sendclose'):
          // clearcontent();
          modalclose();
   break

/* invoice, widget  */

   case (tagid === 'invoice_submit'):

          if ( validate('invoice')) {
          
            document.getElementById('invoice_timezone').value = istimezone();
            document.getElementById('invoice_platform').value = isplatform.Any();
            // document.getElementById('contact_browser').value = isbrowser.Any();

            document.getElementById('job-cost').value = 60; // default £60 per hour

            document.getElementById('job-summary').value = document.getElementById('invoice_total').value;
            document.getElementById("invoice_number").value = saintjobnumber(document.getElementById("invoice_name").value);
    
            var elements = document.getElementById("iform").elements; // all form elements
            var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
            var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
            
            console.log(data);

            _process('post', '_invoice', data,'https://script.google.com/macros/s/AKfycbz0Zo7U3kr6J3W2sSCq2vey7CvaFgvMzuSlqYAlKVPcxURKeB-R/exec');

            stateprocess('_invoice','set');
            console.log('send process completed!');
          
          } else {

               console.log('send process problem!');
          }

          elements = null, fields = null, data = null;

    break;

    case (tagclass === 'copyright'):
          window.open("http://www.unbios.com");
    break;

    case (tagid === '' && tagclass === ''):
    break;

  }

  elem = null;tagclass = null;tagid = null;tagclass = null;tagtype = null;

}

function passcheck() {

  console.log( 'pass : ' + newdate() );

  if(istimezone() === 'Europe/London') {
     
    switch (true) {
     case (document.getElementById('invoicepass').value === null):
     case (document.getElementById('invoicepass').value === false):
     case (document.getElementById('invoicepass').value === ""):
     case (document.getElementById('invoicepass').value === " "):
           window.location.href = "/"
     break;
     case (document.getElementById('invoicepass').value != newdate()):
           window.location.href = "/"; 
     break;
     case (document.getElementById('invoicepass').value == newdate()):
           console.log('yay we have access!');
           document.getElementById('invoicepass').value === "";
           set_css_class('invoicemain', 'display', 'none');
           clear_css_class('openModal', 'modalDialog');
           set_css_id('invoice_name', 'focus', 'focus')
     break;

    }
  } else {
           window.location.href = "/"
  } 
}


function unscroll(state) {

  switch (state) {
    case ('start'):
          clear_css_class('body','unscroll');
    break;
    case ('stop'):
          setTimeout( function() { clear_css_class('body',''); } , 500 );
    break;
  }
}


function clearwidget(widget) {

  switch (widget) {

    case ('invoice'):

          document.getElementById(widget + '_name').value = '';
          document.getElementById(widget + '_email').value = '';
          document.getElementById(widget + '_phone').value = '';
          document.getElementById(widget + '_address').value = '';
          document.getElementById(widget + '_zip').value = '';
          document.getElementById(widget + '_message').value = '';
          document.getElementById(widget + '_one').value = '';
          document.getElementById(widget + '_two').value = '';
          document.getElementById(widget + '_three').value = '';
          document.getElementById(widget + '_four').value = '';
          document.getElementById(widget + '_five').value = '';
          document.getElementById(widget + '_notes').value = '';
          document.getElementById(widget + '_total').value = '';
          document.getElementById(widget + '_timezone').value = '';
          document.getElementById(widget + '_platform').value = '';
          document.getElementById(widget + '_number').value = '';
          
          document.getElementById('job-cost').value = '';
          document.getElementById('job-summary').value = '';
    
    break;

  }
}

function selectmenu(menu) {

  clear_css_class('home','menu'); 
  clear_css_class('faqs','menu'); 
  clear_css_class('about','menu');
  clear_css_class(menu,'menu-select');

  clearcontent();

  window.location.href = "/";

  switch (menu) {

    case ('home'):
    case ('about'):
    case ('faqs'):
    case ('contact'):
    case ('findoutmore'):
    case ('privacy'):
    case ('terms'):
          set_css_class('homepage', 'display', 'block');
          set_css_class('howitworks', 'display', 'block');
          set_css_class('services', 'display', 'block');
          set_css_class('saint', 'display', 'block');
          set_css_class('regions', 'display', 'block');
          set_css_class('next', 'display', 'block');

          clear_css_class('main-nav', 'home');
     
          set_css_class('about','display','none');
          set_css_class('faqs','display','none');
          set_css_class('contact','display','none');
          set_css_id('findmore','display','none');
          set_css_class('howsaintworks','display','none');
          set_css_class('privacy','display','none');
          set_css_class('terms','display','none');
    break;

  }

}

function validate(widget) {

  /* basic : name, postcode, email, select, message validate  */

  var valchk = 0;

  switch (widget) {

    case ('invoice'):

          document.getElementById(widget + '_zip').value = (document.getElementById(widget + '_zip').value).toUpperCase(); /* transform postcode zip to uppercase */

          if ( isvalid( document.getElementById(widget + '_name').value ) === false ) { clear_css_class(widget + '_name', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_name', 'mail');valchk = valchk + 1;}
          if ( isemail( document.getElementById(widget + '_email').value ) === false ) { clear_css_class(widget + '_email', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_email', 'mail');valchk = valchk + 1;}
          if ( isnumber( document.getElementById(widget + '_phone').value ) === false ) { clear_css_class(widget + '_phone', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_phone', 'mail');valchk = valchk + 1;}
          if ( isvalidaddress( document.getElementById(widget + '_address').value ) === false ) { clear_css_class(widget + '_address', 'shedule_address_un');valchk = valchk - 1;} else { clear_css_class(widget + '_address', 'shedule_address');valchk = valchk + 1;}
          if ( iszip( document.getElementById(widget + '_zip').value ) === false )  { clear_css_class(widget + '_zip', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_zip', 'mail');valchk = valchk + 1;}
          if ( isvalid( document.getElementById(widget + '_one').value) === false ) { clear_css_class(widget + '_one', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_one', 'mail');valchk = valchk + 1;}
          if ( document.getElementById(widget + '_total').value === '') { clear_css_class(widget + '_total', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_total', 'mail');valchk = valchk + 1;}

          if (document.getElementById('invoice_message').value === '') {document.getElementById('invoice_message').value = 'none'};
          if (document.getElementById('invoice_two').value === '') {document.getElementById('invoice_two').value = 'nojob'};
          if (document.getElementById('invoice_three').value === '') {document.getElementById('invoice_three').value = 'nojob'};
          if (document.getElementById('invoice_four').value === '') {document.getElementById('invoice_four').value = 'nojob'};
          if (document.getElementById('invoice_five').value === '') {document.getElementById('invoice_five').value = 'nojob'};
          if (document.getElementById('invoice_notes').value === '') {document.getElementById('invoice_notes').value = 'nonotes'};

          console.log('valchk : ' + valchk);

          if (valchk === 7) {clear_css_class('invoice_submit','buttonfill'); return true;} else {clear_css_class('invoice_submit','buttonunable'); return false;}
              
          valchk = null;
     
    break;

    case ('zipcheck'):

          document.getElementById(widget + '_zip').value = (document.getElementById(widget + '_zip').value).toUpperCase(); /* transform postcode zip to uppercase */

          if ( iszip( document.getElementById(widget + '_zip').value ) === false )  { clear_css_class(widget + '_zip', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_zip', 'shedule');valchk = valchk + 1;}
          
          console.log('valchk : ' + valchk);

          if (valchk === 1) {clear_css_class('summarycheck_submit','buttonfillmenu'); return true;} else {clear_css_class('summarycheck_submit','buttonunable'); return false;}
              
          valchk = null;
     
    break;

    case ('emailcheck'):

          if ( isemail( document.getElementById(widget + '_email').value ) === false ) { clear_css_class(widget + '_email', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_email', 'shedule');valchk = valchk + 1;} 
         
          console.log('valchk : ' + valchk);

          if (valchk === 1) {clear_css_class('emailcheck_submit','buttonfillmenu'); return true;} else {clear_css_class('emailcheck_submit','buttonunable'); return false;}
              
          valchk = null;
     
    break;

    case ('reset'):

          valchk = 0;
          document.getElementById('invoice_name').value  = '';
          document.getElementById('invoice_email').value  = '';
          document.getElementById('invoice_phone').value  = '';
          document.getElementById('invoice_address').value  = '';
          document.getElementById('invoice_zip').value  = '';
          clear_css_class('invoice_name', 'mail');
          clear_css_class('invoice_zip', 'mail');
          clear_css_class('invoice_email', 'mail');
          clear_css_class('invoice_subject','mail');
          clear_css_class('invoice_message','mail_message');
          clear_css_class('invoice_submit','buttonfillmenu');
    
          valchk = null;

    break;
  }  
}


function isvalid(html) {

  /* html === document.getElementById('comments').value */

  if (html === null || html === "") { return false; }

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }
}

function isvalidaddress(html) {

  /* html === document.getElementById('comments').value */

  if (html === null || html === "") { return false; }

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }

  if ( html.length < 15 ) { return false; }

}

function isvalidzero(html) {

  /* html === document.getElementById('comments').value */

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }
}

function isvalidpromo(html) {

  /* html === document.getElementById('comments').value */

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }

  switch (true) {

    case (html.length === 0):
    case (html.length < 5 ):
          return true;
    break;
    case (html.length > 5 ):
          return false;
    break;
  }
}


function isnumber(number) {

  if (number === null || number === "" ) { return false; }

   var regex=/^[0-9]+$/;
    if (number.match(regex) || ( number.replace(/\s/g,'').length > 8 )) {
        return true;
    } else {
        return false;
    }
}


function iszip(postcode) {

  if (postcode === null || postcode === "") { return false; }
  postcode = postcode.replace(/\s/g, "");
  var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  return regex.test(postcode);

}


function isemail(email) {

  var hasError = false;
  var emReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  switch (true) {
    case (!email):
          console.log('we are here ... !em');
          hasError = true;
    break;
    case (!emReg.test(email)):
          hasError = true;
    break;
  }
  if (!hasError) {
      emReg, hasError = null;   
      console.log('we are here ... !hasError true');
      return true;
  } else {
      console.log('we are here ... !hasError false');
      return false;
  }
}


function isselect(selector) {

  var selectedvalue = selector.options[selector.selectedIndex].value;
  if (selectedvalue === "selectsubject") {
      selectedvalue = null;
      return false;
  }
}

function istimezone() {
  var tz = jstz.determine(); var response_text = '';
  if (typeof (tz) === 'undefined') {
      response_text = 'No timezone found';
  } else {
      response_text = tz.name(); 
  }
  return response_text;
  tz = null; response_text = null;
}

function checkzip() {
 
  var el = document.getElementById('zipcheck_zip');

  switch (true) {

    case (el.value.toUpperCase().indexOf('SW18') !== -1):
          console.log('return 2');
          return 2;
    break

    default:
          console.log('return 1');
          return 1;
  }

  el = null;

}


function clearcontent() {
  
  document.getElementById("invoice_name").value = '';
  document.getElementById("invoice_email").value = '';
  document.getElementById("invoice_phone").value = '';
  document.getElementById("invoice_address").value = '';
  document.getElementById("invoice_zip").value = '';
  document.getElementById("invoice_message").value = '';

  document.getElementById("invoice_one").value = 'nojob';
  document.getElementById("invoice_two").value = 'nojob';
  document.getElementById("invoice_three").value = 'nojob';
  document.getElementById("invoice_four").value = 'nojob';
  document.getElementById("invoice_five").value = 'nojob';
  document.getElementById("invoice_notes").value = 'nonotes';
  document.getElementById('invoice_total').value = 'nocost';

}

function delcontent(id,arr) {

  var el = document.getElementById(id);
  el.outerHTML = "";

  var index = apptotal.indexOf(arr);

  delete appcontent[arr];
  delete appremovecontent[arr];

  document.getElementById("anythingmsg").innerHTML = document.getElementById("anythingmsg").innerHTML.replace(appnotes[arr],'').replace('<br><br>','<br>');

  delete appnotes[arr];

  if (index > -1) { apptotal.splice(index, 1) }
 
  el = null; index = null;

}

function saintjobcost() {

  /* current starter total rate for smart home support is £60.00 per hour */
  /* the apptime divided by 60 mins multiplied by the rate of £60.00 */
  /* this represents the total cost in pounds sterling */

  document.getElementById('jobapp_hour_cost').value = 60;   /* £60.00 per hour */

  return ((apptime / 60) * 60);

}


function addcontent() {

  var appbuild = ''; var appremove = '';
  var anythingmsg = '';
  var arraylength = appcontent.length;


  for (var i = 0; i < arraylength; i++) {

       if ( appcontent[i] !== undefined ) {

       console.log( appcontent[i] );

       appbuild = appbuild + appcontent[i];
       appremove = appremove + appremovecontent[i];
       anythingmsg = anythingmsg + '<br>' + appnotes[i];
       
       }

  }

  set_html_id('appsum', 'TOTAL: £' +saintjobcost()+ ' ( Approx. '+apptime+' min)');

  document.getElementById('jobapp_total_time').value = saintjobcost(); /* in pounds sterling */
  document.getElementById('jobapp_total_cost').value = apptime;        /* in minutes */
  
  set_html_id('appcontent', appbuild );
  set_html_id('removeappcontent', appremove );

  if ( ((document.getElementById("anything-message").value).length) > 0 ) {
              
          set_html_id('anythingmsg','Notes : '+ anythingmsg + '<p>'); document.getElementById('jobapp_notes').value = stripnotes(anythingmsg);
          document.getElementById("anything-message").value = '';

  } else {

    
  }

  i = null; appbuild = null; appremove = null; anythingmsg = null;
}

function stripnotes(msg) {
  
  msg = msg.replace(/<br>/gi, "\n");
  msg = msg.replace(/\s+$/, '');
  return msg;

}

function finalcontent() {

  var appbuild = ''; var appremove = '';
  var anythingmsg = '';
  var arraylength = appcontent.length;

  for (var i = 0; i < arraylength; i++) {

       if ( appcontent[i] !== undefined ) {

       console.log( appcontent[i] );

       appbuild = appbuild + appcontent[i];
       appremove = appremove + appremovecontent[i];
       anythingmsg = anythingmsg + '<br>' + appnotes[i];
       
       }

  }

  set_html_id('appnotefinal', 'Notes: '+anythingmsg+'');
  set_html_id('appsumfinal', 'TOTAL: Approx.'+apptime+' min');
  set_html_id('appsumfinalcost', 'TOTAL: £'+ ((apptime / 60) * 60) +'');
  set_html_id('appcontentfinal', appbuild);

  i = null; appbuild = null; appremove = null; anythingmsg = null;

}

function arraytotal(saintfix) {

  var totalamount = 0;

  for (var x = 0; x < saintfix.length; x++) {

       totalamount += saintfix[x];
  }

  console.log(totalamount); //10 (1+2+3+4)
  x = null;
  return totalamount;
}


function saintpoint(a,b,c,d,e,f) {

  /* for (var i = 0; i < saintfix.length; ++i) {saintfix[i] = 0;}i = null; */
  saintfix[0] = a;saintfix[1] = b;saintfix[2] = c;saintfix[3] = d;saintfix[4] = e;saintfix[5] = f;

}


function saintlog () {
 
  console.log(saintfix[0] +','+ saintfix[1] +','+ saintfix[2] +','+ saintfix[3] +','+ saintfix[4] +','+ saintfix[5]);

}


function stateprocess(who,action) {

 /* feedback to inform that the action is being processed */

  switch (who) {

    case ('_invoice'):

      if (action === 'set') {

          //clear_css_class('summaryback', 'buttongrey');
          clear_css_class('invoice_name', 'mail_grey');
          clear_css_class('invoice_email', 'mail_grey');
          clear_css_class('invoice_phone', 'mail_grey');
          clear_css_class('invoice_address', 'mail_grey');
          clear_css_class('invoice_zip', 'mail_grey');
          clear_css_class('invoice_message', 'mail_grey');
          clear_css_class('invoice_one', 'mail_grey');
          clear_css_class('invoice_two', 'mail_grey');
          clear_css_class('invoice_three', 'mail_grey');
          clear_css_class('invoice_four', 'mail_grey');
          clear_css_class('invoice_five', 'mail_grey');
          clear_css_class('invoice_notes', 'mail_grey');
          clear_css_class('invoice_total', 'mail_grey');

          set_css_id('invoice_submit', 'display', 'none');
          set_css_id('invoice_process', 'display', 'block');

      } else {

          //clear_css_class('summaryback', 'buttonfillmenu');
          clear_css_class('invoice_name', 'mail');
          clear_css_class('invoice_email', 'mail');
          clear_css_class('invoice_phone', 'mail');
          clear_css_class('invoice_address', 'mail');
          clear_css_class('invoice_zip', 'mail');
          clear_css_class('invoice_message', 'mail');
          clear_css_class('invoice_one', 'mail');
          clear_css_class('invoice_two', 'mail');
          clear_css_class('invoice_three', 'mail');
          clear_css_class('invoice_four', 'mail');
          clear_css_class('invoice_five', 'mail');
          clear_css_class('invoice_notes', 'mail');
          clear_css_class('invoice_total', 'mail_grey');

          set_css_id('invoice_process', 'display', 'none');
          set_css_id('invoice_submit', 'display', 'block');

      }

    break;

  }
}


function statemsg(who,state) {

  switch (who) {

    case ('_invoice'):

      if (state === 'error') {
          add_css_class('openModal', 'darkmodal');
          set_css_class('summaryfail', 'display', 'block');
      } else {
          add_css_class('openModal', 'darkmodal');
          set_html_id('sendmail', '' + (document.getElementById("invoice_email").value) + '' );
          set_css_class('invoicesendmsg', 'display', 'block');
      }

      stateprocess('_invoice','unset');
      clearwidget('invoice');

      console.log('we are in statemsg, close this dialog ... then display either success dialog or fail dialog!');

    break;

  }
}

function contactclose() {

  /* maybe settimeout * input data * process message * close dialog * <- no delay between -> * display message */
  add_css_class('mail-widget', 'closed');add_css_class('widget-state', 'closed');clear_css_class('online-dot', 'online-dot'); add_css_class('online-dot', 'animateflicker');contactstate = 0;

}

function randomnumber(min, max) {

  /* ref: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range */
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function saintjobnumber(name) {

  /* get first three characters of the clients name * add a random number * create saint job number */
  name = name.replace(/\s/g, ''); 
  name = name.substring(0,3);
  name = name.toUpperCase();
  name = name + randomnumber('1','1000');
  return name;
}


function quitalldiags() {

  set_css_class('howmain', 'display', 'none');
  set_css_class('setupmain', 'display', 'none');
  set_css_class('brokenmain', 'display', 'none');
  set_css_class('typecomputer', 'display', 'none');
  set_css_class('typenetwork', 'display', 'none');
  set_css_class('oldmodem', 'display', 'none');
  set_css_class('typenetconnect', 'display', 'none');
  set_css_class('typenetproblem', 'display', 'none');
  set_css_class('typemobile', 'display', 'none'); 
  set_css_class('accessemail', 'display', 'none');
  set_css_class('accessemailprovider', 'display', 'none');
  set_css_class('typemail', 'display', 'none');
  set_css_class('avid', 'display', 'none');
  set_css_class('smart', 'display', 'none');
  set_css_class('makeandmodel', 'display', 'none');

  set_css_class('move', 'display', 'none');
  set_css_class('pcproblem', 'display', 'none');
  set_css_class('anythingelse', 'display', 'none');
  set_css_class('appointment', 'display', 'none');
  set_css_class('summary', 'display', 'none');
  set_css_class('summaryservice', 'display', 'none');
  set_css_class('summaryfinal', 'display', 'none');
  set_css_class('summaryfail', 'display', 'none');

  set_css_class('email', 'display', 'none');

  /* set_css_class('beforeyouleave', 'display', 'block'); */
  /* beforeyouleavestate = 1; */

  set_css_class('telluswhy', 'display', 'block');

  set_css_class('summaryapplynow', 'display', 'none');
  set_css_class('contactsendmsg', 'display', 'none');
}


function modalclose() {
  
  set_css_class('invoicesendmsg', 'display', 'none');
  clear_css_class('openModal', 'modalDialog');

}

function quitclose() {

  document.getElementById("invoicepass").value = '';
  window.location.href = "/"; 

}

function navtoggle() {

// console.log('overlay state : ' + overlaystate);

  if (overlaystate === 0) {

      clear_css_class('main-nav', 'home'); 
      add_css_class('overlay', 'visible');
      add_css_class('main-nav', 'overlay-visible');

      add_css_class('title-bar', 'dark');
      add_css_class('ctitle-bar', 'dark');
      
      add_css_class('book-now', 'dark');
      clear_css_class('nav-toggle','menu-btn-open');

      clear_css_class('callme-widget', 'callme-widget');
      setTimeout( function() { add_css_class('callme-widget', 'closed'); } , 800 );
      
      overlaystate = 1;

  } else {

      clear_css_class('overlay', 'overlay');
      clear_css_class('main-nav', 'home');

      clear_css_class('title-bar', 'title-bar');
      clear_css_class('ctitle-bar', 'ctitle-bar');

      clear_css_class('book-now', 'buttonfill');
      clear_css_class('nav-toggle','menu-btn-light-close');
      overlaystate = 0;

    switch (true) {

      case (scrollstate === 0):
            clear_css_class('main-nav', 'home');
      break;
      case (scrollstate === 1):
            add_css_class('main-nav', 'light');
            // clear_css_class('nav-toggle','menu-btn-light-close');
      break;
      case (scrollstate === 2):
            add_css_class('main-nav', 'dark');
            // clear_css_class('nav-toggle','menu-btn-dark-close');
      break;
    }
  }
}

function imgcntrl(state) {

  if (visible_css_id('findmore')) {

    switch (state) {

      case ('uncolor'):
           clear_css_class('imgmore', 'greyscale');     
      break;

      case ('color'):
           clear_css_class('imgmore', 'imgscale');    
      break;

    }
  }
  if (visible_css_id('homestead')) {

    switch (state) {

      case ('color'):
           clear_css_class('imghome', 'greyscale');     
      break;

      case ('uncolor'):
           clear_css_class('imghome', 'imgscale');    
      break;

    }
  }
}

function cclock(){
 
  var d=new Date();
  var nhour=d.getHours()
  /* var nhour=d.getHours(),nmin=d.getminutes(); */
  /* if(nmin<=9) { nmin="0"+nmin } */
  /* document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+""; */
  return nhour;

}

function calltoggle(close) {
 
  if ( contactstate === 0 && close === 0) { 
      clear_css_class('callme-widget', 'callme-widget');
      clear_css_class('conline-dot', 'conline-dot');
      contactstate = 1;

  } else {
      
      clear_css_class('callme-widget', 'callme-widget');
      add_css_class('callme-widget', 'closed');
      clear_css_class('conline-dot', 'conline-dot');
      add_css_class('conline-dot', 'animateflicker');
      contactstate = 0;
  }
}

function callmobile(ring) {
 
  if (ring === 'yes') {

      set_html_id('contactmsg', '077 4570 4570');
      if (isplatform.Android() || isplatform.BlackBerry() || isplatform.iPhone()) {set_html_id('contactnav', '<a href="tel:07745704570">077 4570 4570</a>');} else {set_html_id('contactnav', '077 4570 4570');}

  } else {
     
      set_html_id('contactmsg', 'Contact Us');
      set_html_id('contactnav', 'Contact Us');
      clear_css_class('contactnav', 'contactnav');
  }
}
