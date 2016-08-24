/*! saint.js v1.00.00 | (c) 2016 supportsaint.com */

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

window.saintfix = []; /* setup array 1 - 5 and broken choice array 6 - ? */
saintfix[0] = 0; /* setup new device == 1 || device not working == 4 || choose device == 6 || show how to use device == 8 */
saintfix[1] = 0; /* choice ( 1 - 8 ) */
saintfix[2] = 0; /* choice ( 1 - 3 ) */
saintfix[3] = 0; /* choice ( 1 - 3 ) */
saintfix[4] = 0; /* choice ( 1 - 3 ) */
saintfix[5] = 0; /* choice ( 1 - 3 ) */

window.process = [];

window.contactstate = 0;
window.overlaystate = 0;
window.scrollstate = 0;

window.apptotal = [];
window.appsum = [];
window.apptime = 0;

window.once = [];
once[0] = 0;
once[1] = 0;
once[2] = 0;
once[3] = 0;
once[4] = 0;
once[5] = 0;
once[6] = 0;
once[7] = 0;
once[8] = 0;
once[9] = 0;
once[10] = 0;

window.appcontent = [];
window.appremovecontent = [];
window.appnotes = [];


/* appcontent[] => id's  *  appremovecontent[] => id's  5 7 9 11 12 14 16 18 20 22 25 28 50 52 55 57 64 67 72 78 85 86 90 93 95 97 101 104 111 114 121 124 131 147 149 157 159 191 193 203 */

/* server side events * functions */

/* process functions

 * _process(ctype, cwho, cdata, cpath) 
 * callrequest(data)

*/

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
            
            /*
            case ('_contact'):   // contact us widget
                  postdata(baseurl + cpath, callrequest , 'url',  cdata , cwho);
            break;
            */

            case ('_contact'):   /* contact us widget */
                  postform(url, callrequest, cdata, cwho);
            break;

            case ('_shedule'):   /* contact us widget */
                  postform(url, callrequest, cdata, cwho);
            break;

            case ('_outsider'):  // emailcheck widget
                  postform(url, callrequest, cdata, cwho);
            break;

            case ('_apply'):     /* apply widget */
                  postform(url, callrequest, cdata, cwho);
            break;

            case ('_browsing'):  // your leaving widget
                  postform(url, callrequest , cdata , cwho);
            break;

            case ('_notready'):  // your leaving widget
                   postform(url, callrequest , cdata , cwho);
            break;

            case ('_noservice'):  // your leaving widget
                   postform(url, callrequest , cdata , cwho);
            break;

            case ('_rathercall'):  // your leaving widget
                  postform(url, callrequest , cdata , cwho);
            break;

            case ('_foundbetterprice'): // your leaving widget
                  postform(url, callrequest , cdata , cwho);
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

            case (datastr[1] === '_contact'):
                  /* now check for error bubbled, returned from process */

                  // console.log('datastr' + datastr);
                  // console.log('datastr[2]' + datastr[2]);
    
                  console.log('datastr[2][result] ' +  JSON.parse(datastr[2]).result );

                  // datastr[3] = trimquote(datastr[3]);

                  if ( JSON.parse(datastr[2]).result === 'success' ) {

                       statemsg('_contact', 'correct');

                       console.log('contact us process completed * correct');
                  
                  } else {

                       statemsg('_contact','error');

                       console.log('contact us process completed * error');
                  } 

            break;

            case (datastr[1] === '_shedule'):
                  /* now check for error bubbled, returned from process */

                  console.log('datastr[2][result] ' +  JSON.parse(datastr[2]).result );

                  // datastr[3] = trimquote(datastr[3]);

                  if ( JSON.parse(datastr[2]).result === 'success' ) {

                       statemsg('_shedule', 'correct');

                       console.log('shedule process completed * correct');
                  
                  } else {

                       statemsg('_shedule','error');

                       console.log('shedule process completed * error');
                  }            
            break;

            case (datastr[1] === '_outsider'):
                  /* now check for error bubbled, returned from process */

                  console.log('datastr[2][result] ' +  JSON.parse(datastr[2]).result );

                  // datastr[3] = trimquote(datastr[3]);

                  if ( JSON.parse(datastr[2]).result === 'success' ) {

                       statemsg('_outsider', 'correct');

                       console.log('outsider process completed * correct');
                  
                  } else {

                       statemsg('_outsider','error');

                       console.log('outsider process completed * error');
                  }            
            break;

            case (datastr[1] === '_apply'):
                  /* now check for error bubbled, returned from process */

                  // datastr[3] = trimquote(datastr[3]);
             
                  if ( JSON.parse(datastr[2]).result === 'success' ) {

                       statemsg('_apply', 'correct');

                       console.log('apply process completed * correct');
                  
                  } else {

                       statemsg('_apply','error');

                       console.log('apply process completed * error');
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

/* start * howitworks * ourservices * joinus * contact us * not included in main page saint.js build */

function howitworks() {
  if (overlaystate === 1) { navtoggle();}
  document.getElementById("howitworks").scrollIntoView();
  var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  var scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (scrollWidth > 360) { scrollTo((scrollTop - 50), 500); } else { scrollTo((scrollTop - 50), 50);}
  scrollTop = null; scrollWidth = null;
}

function ourservices() {
  if (overlaystate === 1) { navtoggle();}
  document.getElementById("ourservices").scrollIntoView();
  var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  var scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (scrollWidth > 360) { scrollTo((scrollTop - 120), 500); } else { scrollTo((scrollTop - 105), 50);}
  scrollTop = null; scrollWidth = null;
}

function joinus() {
  if (overlaystate === 1) { navtoggle();}
  selectmenu('findoutmore');
}

function contactus() {
  if (overlaystate === 1) { navtoggle();}
  selectmenu('contact');
}

/* end * howitworks * ourservices * joinus * contact us * not included in main page saint.js build */


window.onload = function() {

/* onload */

  // var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  switch (true) {

      case ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 700 ):
            scrollTo(0, 200);
      break;
    
      case (document.documentElement.scrollTop > 740 || document.body.scrollTop > 740 ):
            /* console.log('white the header'); */
            clear_css_class('main-nav', 'home');
            // add_css_class('main-nav', 'dark');
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
            scrollstate = 0;
      break;

  }

/* start * howitworks * ourservices * joinus * contact us * not included in main page saint.js build */

  switch ((window.location.pathname).replace('/', '').replace('.html','')) {

      case ('howitworks'):
             howitworks();
      break;

      case ('ourservices'):
             ourservices();
      break;

      case ('joinus'):
             joinus();
      break;

      case ('contactus'):
             contactus();
      break;
    
  }

/* end * howitworks * ourservices * joinus * contact us * not included in main page saint.js build */

  switch (cclock()) {

      case (21):
      case (22):
      case (23):
      case (0):
      case (1):
      case (2):
      case (3):
      case (4):
      case (5):
      case (6):
      case (7):
      case (8):
           callmobile('no');
           // console.log('the hour is : ' + cclock());
      break;

      default:
           callmobile('yes');
           // console.log('the hour is : ' + cclock());
      break;

  }
}


window.onscroll = function() { navmaincolor() };

function navmaincolor() {

  if (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0 ) { 

      switch (true) {
        case (visible_css_class('homepage')):
        case (visible_css_id('findmore')): 
              imgcntrl('color'); 
        break;
      }
  
  } else { 

     switch (true) {
        case (visible_css_class('homepage')):
        case (visible_css_id('findmore')):
              imgcntrl('uncolor'); 
        break;
     }
  }
  
  
  if ( !( visible_css_class('visible') || visible_css_class('about') || visible_css_class('faqs') || visible_css_class('contact') || visible_css_class('privacy') || visible_css_class('terms')  ) ) { 

    var cwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    var sevenforty = 0;
    var onefifty = 0;

    switch (true) {

      case (cwidth <= 355):    /* 320x480 */
            onefifty = 30;    /* 150 - 99px approx */
            sevenforty = 580; /* 740 adjusted for small screen */
      break; 

      case (cwidth > 320):    /* 320x480 */
            onefifty = 80;    /* 150 - 99px approx */
            sevenforty = 673; /* 740 adjusted for small screen */
      break; 

      case (cwidth === 360):   /* 360x640 */
            onefifty = 80;    /* 150 - 99px approx */
            sevenforty = 666; /* 740 adjusted for small screen */
      break;

      default:
            onefifty = 150;   /* 150 default */
            sevenforty = 740; /* 740 default */
    }

    // console.log(document.body.scrollTop);
    // console.log('scrolltop : ' + document.documentElement.scrollTop);
    // console.log('cwidth : ' + cwidth + ' onefifty : ' + onefifty);

    switch (true) {

      case (document.documentElement.scrollTop > 1000 || document.body.scrollTop > 1000):
            document.getElementById('computerservice').setAttribute('src', '/img/computer-48.png');
            document.getElementById('virusservice').setAttribute('src', '/img/shield-48.png');
            document.getElementById('backupservice').setAttribute('src', '/img/briefcase-48.png');
            document.getElementById('wirelessservice').setAttribute('src', '/img/wireless-48.png');
            document.getElementById('macservice').setAttribute('src', '/img/mac-os-48.png');
            document.getElementById('workservice').setAttribute('src', '/img/factory-48.png');
            document.getElementById('smartservice').setAttribute('src', '/img/smarthome-4-48.png');
            document.getElementById('consultservice').setAttribute('src', '/img/decision-48.png');
      break;

      /*
      case (document.documentElement.scrollTop > sevenforty || document.body.scrollTop > sevenforty ):
            // console.log('white the header');
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'dark');
            clear_css_class('nav-toggle', 'menu-btn-dark-close');
            scrollstate = 2;
      break;
      */

      case (document.documentElement.scrollTop > onefifty || document.body.scrollTop > onefifty):
            // console.log('darken the header');
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'light');
            clear_css_class('nav-toggle', 'menu-btn-light-close');
            scrollstate = 1;
      break;

      case (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10):
            calltoggle(1);
      

      case (document.documentElement.scrollTop < onefifty || document.body.scrollTop < onefifty ):
            /*console.log('lighten the header');*/
            clear_css_class('main-nav', 'home');
            document.getElementById('computerservice').setAttribute('src', '/img/computer-48-blank.png');
            document.getElementById('virusservice').setAttribute('src', '/img/shield-48-bug.png');
            document.getElementById('backupservice').setAttribute('src', '/img/briefcase-48-blank.png');
            document.getElementById('wirelessservice').setAttribute('src', '/img/wireless-48-blank.png');
            document.getElementById('macservice').setAttribute('src', '/img/mac-os-48-blank.png');
            document.getElementById('workservice').setAttribute('src', '/img/factory-48-blank.png');
            document.getElementById('smartservice').setAttribute('src', '/img/smarthome-4-48-blank.png');
            document.getElementById('consultservice').setAttribute('src', '/img/decision-48-blank.png');
            scrollstate = 0;
      break;

    } 
    sevenforty = null; onefifty = null; cwidth = null;  
  }
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

    case ( contactstate === 1 ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('contact_name'):
        case ('contact_zip'):
        case ('contact_email'):
        case ('contact_subject'):
        case ('contact_message'):
              validate('contact');
        break;
      }
    }

    break;

    case ( visible_css_class('summaryservice') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('shedule_name'):
        case ('shedule_email'):
        case ('shedule_phone'):
        case ('shedule_address'):
        case ('shedule_zip'):
        case ('shedule_message'):
        case ('shedule_promocode'):
              validate('shedule');
        break;
      }
    }

    break;

    case ( visible_css_class('summary') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('zipcheck_zip'):
              validate('zipcheck');
        break;
      }
    }

    break;

    case ( visible_css_class('email') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('emailcheck_email'):
              validate('emailcheck');
        break;
      }
    }

    break;

    case ( visible_css_class('summaryapplynow') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('apply_name'):
        case ('apply_email'):
        case ('apply_phone'):
        case ('apply_address'):
        case ('apply_zip'):
              validate('apply');
        break;
      }
    }

    break;

  }
}

document.onchange = function onChange(event) {

  // console.log('onchange contactstate : ' + contactstate);

  switch (true) {

    case ( contactstate === 1 ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('contact_name'):
        case ('contact_zip'):
        case ('contact_email'):
        case ('contact_subject'):
        case ('contact_message'):
              validate('contact');
        break;
      }
    }
    break;

    case ( visible_css_class('summaryservice') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('shedule_name'):
        case ('shedule_email'):
        case ('shedule_phone'):
        case ('shedule_address'):
        case ('shedule_zip'):
        case ('shedule_message'):
        case ('shedule_promocode'):
              validate('shedule');
        break;
      }
    }

    break;

    case ( visible_css_class('summary') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('zipcheck_zip'):
              validate('zipcheck');
        break;
      }
    }

    break;

    case ( visible_css_class('email') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('emailcheck_email'):
              validate('emailcheck');
        break;
      }
    }

    break;

    case ( visible_css_class('summaryapplynow') ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('apply_name'):
        case ('apply_email'):
        case ('apply_phone'):
        case ('apply_address'):
        case ('apply_zip'):
              validate('apply');
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

  once[0] = 0; once[1] = 0; once[2] = 0; once[3] = 0; once[4] = 0; once[5] = 0;
  once[6] = 0; once[7] = 0; once[8] = 0; once[9] = 0; once[10] = 0;

  // hover substitute or could disable hover using CSS

  // console.log(tagid);
  // console.log(tagclass);
  // console.log(tagtype);

/* howmain * main menu */

  switch (true) {

    case (tagclass === 'booknav'):
          navtoggle();
    case (tagclass === 'bookfooter'):
    case (tagclass === 'book-now'):
    case (tagid === 'book-now'):
          if (contactstate === 0 ){
          clearcontent();
          add_css_class('openModal', 'darkmodal');
          add_css_class('book-now','dark');
          set_css_class('howmain', 'display', 'block');
          saintpoint(0,0,0,0,0,0);
          /*saintlog();*/
          }
    break

/* menu items */

   case (tagclass === 'homenav'):
   case (tagclass === 'homefooter'):
   case (tagclass === 'homefooterbtn'):
   case (tagclass === 'homefooterbtnhvr'):
   case (tagid === 'home'):
         if (overlaystate === 1) { navtoggle();}
         selectmenu('home');
         /*unscroll('stop');*/
         scrollTo(0, 700);
         /*unscroll('start');*/
   break;

   case (tagclass === 'aboutnav'):
   case (tagclass === 'aboutfooter'):
   case (tagclass === 'aboutfooterbtn'):
   case (tagclass === 'aboutfooterbtnhvr'):
   case (tagid === 'about'):
         if (overlaystate === 1) { navtoggle();}
         selectmenu('about');
         scrollTo(0, 700);
   break;

   case (tagclass === 'faqsnav'):
   case (tagclass === 'faqsfooter'):
   case (tagclass === 'faqsfooterbtn'):
   case (tagclass === 'faqsfooterbtnhvr'):
   case (tagid === 'faqs'):
         if (overlaystate === 1) { navtoggle();}
         selectmenu('faqs');
         scrollTo(0, 700);
   break;

   case (tagclass === 'joinnav'):
         navtoggle();
   case (tagclass === 'joinfooter'):
   case (tagclass === 'joinfooterbtn'):
   case (tagclass === 'joinfooterbtnhvr'):

   case (tagclass === 'findoutmore'):
   case (tagclass === 'findoutmorebtn'):
   case (tagclass === 'findoutmorebtnhvr'):
         selectmenu('findoutmore');
         scrollTo(0, 700);
   break;

   case (tagclass === 'privacyfooter'):
   case (tagclass === 'privacyfooterbtn'):
   case (tagclass === 'privacyfooterbtnhvr'):
         selectmenu('privacy');
         scrollTo(0, 700);
   break;

   case (tagclass === 'termsfooter'):
   case (tagclass === 'termsfooterbtn'):
   case (tagclass === 'termsfooterbtnhvr'):
         /* navigate to the top of terms service & use */
         selectmenu('terms');
         scrollTo(0, 700);
   break;

   case (tagclass === 'termservice'):
         /* navigate to the terms of service & use page, terms of service ( consumers ) */
          selectmenu('terms');
         document.getElementById("termservice").scrollIntoView();
         var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
         var scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         if (scrollWidth > 360) { scrollTo((scrollTop - 100), 500); } else { scrollTo((scrollTop - 80), 50);}
         scrollTop = null; scrollWidth = null;
   break;
  
   case (tagclass === 'contactnav'):
   case (tagclass === 'contactfooterbtn'):
   case (tagclass === 'contactfooterbtnhvr'):
   case (tagclass === 'getintouch'):
   case (tagclass === 'contactfooter'):     
   case (tagid === 'contactmsg'):
         if (overlaystate === 1) { navtoggle();}
         scrollTo(0, 700);  
         selectmenu('contact');
   break;

/* how can we help buttons * main menu */

    case (tagid === 'howmainsetup'):set_css_class('howmain', 'display', 'none');set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);/*saintlog();*/break
    case (tagid === 'howmainbroken'):set_css_class('howmain', 'display', 'none');set_css_class('brokenmain', 'display', 'block');saintfix[1] = 1;/*saintlog();*/break
    case (tagid === 'howmainback'):quitalldiags();break;

    case (tagid === 'howpcnew'):set_css_class('howpc', 'display', 'none');set_css_class('typecomputer', 'display', 'block');saintfix[2] = 1;/*saintlog();*/break
    case (tagid === 'howpcupgrade'):set_css_class('howpc', 'display', 'none');set_css_class('typecomputer', 'display', 'block');saintfix[2] = 5;/*saintlog();*/break

    case (tagid === 'howpcback'):set_css_class('howpc', 'display', 'none');set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);/*saintlog();*/break

/* what's not working buttons */

    case (tagid === 'brokencomputer'):set_css_class('brokenmain', 'display', 'none');set_css_class('typecomputer', 'display', 'block');saintfix[2] = 72;/*saintlog();*/break

    case (tagid === 'problemslow'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 2;/*saintlog();*/break
    case (tagid === 'problemvirus'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 10;/*saintlog();*/break
    case (tagid === 'problemturnon'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 14;/*saintlog();*/break

    case (tagid === 'problemdiskspace'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 19;/*saintlog();*/break
    case (tagid === 'problemonline'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 28;/*saintlog();*/break

    case (tagid === 'problemissue'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 38;/*saintlog();*/break

    case (tagid === 'problemelse'):set_css_class('pcproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 48;/*saintlog();*/break

    case (tagid === 'brokennetwork'):set_css_class('brokenmain', 'display', 'none');set_css_class('typenetwork', 'display', 'block');saintfix[2] = 134;/*saintlog();*/break
    case (tagid === 'brokenback'):set_css_class('brokenmain', 'display', 'none');set_css_class('howmain', 'display', 'block');saintpoint(0,1,0,0,0,0);/*saintlog();*/break

/* you need to setup buttons */

    case (tagid === 'setupcomputer'):set_css_class('setupmain', 'display', 'none');set_css_class('howpc', 'display', 'block');saintpoint(1,1,0,0,0,0);/*saintlog();*/break
    case (tagid === 'setupnetwork'):set_css_class('setupmain', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[1] = 3;/*saintlog();*/break
    case (tagid === 'setupmobile'):set_css_class('setupmain', 'display', 'none');set_css_class('typemobile', 'display', 'block');saintfix[1] = 8;/*saintlog();*/break

    case (tagid === 'setupemail'):set_css_class('setupmain', 'display', 'none');set_css_class('accessemail', 'display', 'block');saintfix[1] = 16;/*saintlog();*/break
    case (tagid === 'setupvideo'):set_css_class('setupmain', 'display', 'none');set_css_class('avid', 'display', 'block');saintfix[1] = 5;/*saintlog();*/break
    
    case (tagid === 'setupback'):set_css_class('setupmain', 'display', 'none');set_css_class('howmain', 'display', 'block');saintpoint(0,0,0,0,0,0);/*saintlog();*/break

    case (tagid === 'setupsmart'):set_css_class('setupmain', 'display', 'none');set_css_class('smart', 'display', 'block');saintfix[1] = 6;/*saintlog();*/break
   
    case (tagid === 'smartwemo'):set_css_class('smart', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 47;/*saintlog();*/break
    case (tagid === 'smartsecurity'):set_css_class('smart', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 49;/*saintlog();*/break

    case (tagid === 'smartother'):set_css_class('smart', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[2] = 55;/*saintlog();*/break

    case (tagid === 'makenext'):
          set_css_class('makeandmodel', 'display', 'none');
          switch (true) {
            case (saintfix[2] === 180): 
            case (saintfix[2] === 136):
            case (saintfix[2] === 138):
            case (saintfix[2] === 146): 
                  set_css_class('oldmodem', 'display', 'block');
                  saintfix[3] = 4;
            break
            case (saintfix[2] === 180):
            case (saintfix[2] !== 136):
            case (saintfix[2] !== 138): 
            case (saintfix[2] !== 146):
                  set_css_class('anythingelse', 'display', 'block');
                  set_css_class('anything-message', 'focus', 'focus');
                  saintfix[3] = 4;
          }
          /*saintlog();*/
    break

    case (tagid === 'makeback'):
          set_css_class('makeandmodel', 'display', 'none');
           switch (true) {
            case (saintfix[2] === 180):
            case (saintfix[2] === 136):
            case (saintfix[2] === 138): 
            case (saintfix[2] === 146): 
                  set_css_class('typenetwork', 'display', 'block');
            break
            case (saintfix[2] === 180): 
            case (saintfix[2] !== 136):
            case (saintfix[2] !== 138):
            case (saintfix[2] !== 146): 
                  set_css_class('howmain', 'display', 'block');
          }
          saintpoint(0,1,0,0,0,0);
          /*saintlog();*/
    break

    case (tagid === 'smartback'):set_css_class('smart', 'display', 'none');set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);/*saintlog();*/break

    case (tagid === 'setuprinter'):set_css_class('setupmain', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[1] = 66;/*saintlog();*/break
    case (tagid === 'setupother'):set_css_class('setupmain', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[1] = 61;/* saintfix[1] = 8; saintlog();*/break

/* help with device */

    case (tagid === 'avidsonos'):set_css_class('avid', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 43;/*saintlog();*/break
    case (tagid === 'avidharmonyremote'):set_css_class('avid', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 45;/*saintlog();*/break
    
    /* add later based on potential user demand!
    case (tagid === 'avidroku'):set_css_class('avid', 'display', 'none');set_css_class('anythingelse', 'display', 'block');saintfix[2] = 46;saintlog();break
    case (tagid === 'avidappletv'):set_css_class('avid', 'display', 'none');set_css_class('anythingelse', 'display', 'block');saintfix[2] = 48;saintlog();break
    case (tagid === 'avidchomecast'):set_css_class('avid', 'display', 'none');set_css_class('anythingelse', 'display', 'block');saintfix[2] = 50;saintlog();break
    */

    case (tagid === 'avidother'):set_css_class('avid', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[2] = 52;/*saintlog();*/break
    
    case (tagid === 'avidback'):set_css_class('avid', 'display', 'none');set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);/*saintlog();*/break

/* access your email */

    case (tagid === 'accessemails'):set_css_class('accessemail', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 10;/*saintlog();*/break
    case (tagid === 'accessemailback'):set_css_class('accessemail', 'display', 'none');set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);/*saintlog();*/break

    case (tagid === 'typemac'):set_css_class('typecomputer', 'display', 'none');
 
          if (saintfix[0] === 1) { set_css_class('move', 'display', 'block');} else {set_css_class('pcproblem', 'display', 'block');}saintfix[3] = 2;/*saintlog();*/
    break

    case (tagid === 'typepc'):set_css_class('typecomputer', 'display', 'none');

          if (saintfix[0] === 1) { set_css_class('move', 'display', 'block');} else {set_css_class('pcproblem', 'display', 'block');}saintfix[3] = 9;/*saintlog();*/
    break
    
    case (tagid === 'typecomputerback'):
          set_css_class('typecomputer', 'display', 'none');
          
         if ( saintfix[0] === 1) { set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);} else {set_css_class('brokenmain', 'display', 'block');saintpoint(0,1,0,0,0,0);}
      
          /* 1,0,0,0,0,0 - you need to setup   */
          /* 0,1,0,0,0,0 - what's not working  */

          /*saintlog();*/
    break


/* what type of mobile buttons */

    case (tagid === 'typemobileios'):set_css_class('typemobile', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 12;/*saintlog();*/break
    case (tagid === 'typemobileandroid'):set_css_class('typemobile', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 15;/*saintlog();*/break
    
    case (tagid === 'typemobileback'):set_css_class('typemobile', 'display', 'none');set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);/*saintlog();*/break

/* what type network buttons */

    case (tagid === 'typedsl'):set_css_class('typenetwork', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[2] = saintfix[2] + 2;/*saintlog();*/break
    case (tagid === 'typecable'):set_css_class('typenetwork', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[2] = saintfix[2] + 12;/*saintlog();*/break

    case (tagid === 'typenetworkback'):set_css_class('typenetwork', 'display', 'none');set_css_class('howmain', 'display', 'block');saintpoint(0,1,0,0,0,0);/*saintlog();*/break

/* is modem old buttons */
    
    case (tagid === 'oldmodemyes'):set_css_class('oldmodem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 6;/*saintlog();*/break

    case (tagid === 'oldmodemno'):set_css_class('oldmodem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 4;/*saintlog();*/break

    case (tagid === 'oldmodemback'):set_css_class('oldmodem', 'display', 'none');set_css_class('howmain', 'display', 'block');/*saintlog();*/break

/* why type of network wifi or wired buttons */

    case (tagid === 'typeother'):set_css_class('typenetwork', 'display', 'none');set_css_class('makeandmodel', 'display', 'block');set_css_class('inputfield', 'focus', 'focus');saintfix[2] = 180;/*saintlog();*/break

    case (tagid === 'typewired'):set_css_class('typenetconnect', 'display', 'none');set_css_class('typenetproblem', 'display', 'block');/*saintlog();*/break
    case (tagid === 'typewirless'):set_css_class('typenetconnect', 'display', 'none');set_css_class('typenetproblem', 'display', 'block');/*saintlog();*/break

    case (tagid === 'typenetconnectback'):set_css_class('typenetconnect', 'display', 'none');set_css_class('howmain', 'display', 'block');/*saintlog();*/break

/* network problem */

    case (tagid === 'typenetbadconnect'):set_css_class('typenetproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');/*saintlog();*/break
    case (tagid === 'typenetnootherdevice'):set_css_class('typenetproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');/*saintlog();*/break
    case (tagid === 'typenetunreliable'):set_css_class('typenetproblem', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');/*saintlog();*/break
    case (tagid === 'typenetproblemback'):set_css_class('typenetproblem', 'display', 'none');set_css_class('howmain', 'display', 'block');/*saintlog();*/break;

/* what is the problem */

    case (tagid === 'pcproblemback'):
          set_css_class('pcproblem', 'display', 'none');
        
          if ( saintfix[0] === 1) { set_css_class('setupmain', 'display', 'block');saintpoint(1,0,0,0,0,0);} else {set_css_class('brokenmain', 'display', 'block');saintpoint(0,1,0,0,0,0);}
    
          /*saintlog();*/
    break

/* move files buttons */

    case (tagid === 'moveyes'):set_css_class('move', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 1;/*saintlog();*/break
    case (tagid === 'moveno'):set_css_class('move', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[4] = 3;/*saintlog();*/break
    case (tagid === 'moveback'):set_css_class('move', 'display', 'none');set_css_class('typecomputer', 'display', 'block');saintpoint(1,1,1,0,0,0);/*saintlog();*/break


/* whats not working other */

    case (tagid === 'brokenother'):set_css_class('brokenmain', 'display', 'none');set_css_class('anythingelse', 'display', 'block');set_css_class('anything-message', 'focus', 'focus');saintfix[2] = 200;/*saintlog();*/break

/* remove app item */


    case (tagclass === 'network'):

          console.log('network delete!');
          delcontent('netdel',4); delcontent('netadd',4);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macdata'):

          console.log('macdata delete!');
          delcontent('macdatadel',6); delcontent('macdataadd',6);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macnodata'):

          console.log('macnodata delete!');
          delcontent('macnodatadel',8); delcontent('macnodataadd',8);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'upmac'):

          console.log('upmac delete!');
          delcontent('upmacdel',10); delcontent('upmacadd',10);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'upmacnodata'):

          console.log('upmacnodata delete!');
          delcontent('upmacnodatadel',12); delcontent('upmacdatanoadd',12);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'windata'):

          console.log('windata delete!');
          delcontent('windatadel',13); delcontent('windataadd',13);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winnodata'):

          console.log('winnodata delete!');
          delcontent('winnodatadel',15); delcontent('winnodataadd',15);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winupdata'):

          console.log('winupdata delete!');
          delcontent('winupdatadel',17); delcontent('winupdataadd',17);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winupnodata'):

          console.log('winupnodata delete!');
          delcontent('winnupnodatadel',19); delcontent('winupnodataadd',19);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'iosmobile'):

          console.log('iosmobile delete!');
          delcontent('iosmobiledel',21); delcontent('iosmobileadd',21);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'andmobile'):

          console.log('andmobile delete!');
          delcontent('andmobiledel',24); delcontent('andmobileadd',24);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'upemail'):

          console.log('upemail delete!');
          delcontent('upemaildel',27); delcontent('upemailadd',27);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'sonos'):

          console.log('sonos delete!');
          delcontent('sonosdel',49); delcontent('sonosadd',49);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'harmony'):

          console.log('harmony delete!');
          delcontent('harmonydel',51); delcontent('harmonyadd',51);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'wemo'):

          console.log('wemo delete!');
          delcontent('wemodel',54); delcontent('wemoadd',54);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'arlo'):

          console.log('arlo delete!');
          delcontent('arlodel',56); delcontent('arloadd',56);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'smartother'):

          console.log('smartother delete!');
          delcontent('smartotherdel',66); delcontent('smartotheradd',66);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'printer'):

          console.log('printer delete!');
          delcontent('printerdel',71); delcontent('printeradd',71);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macslow'):

          console.log('macslow delete!');
          delcontent('macslowdel',77); delcontent('macslowadd',77);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winslow'):

          console.log('winslow delete!');
          delcontent('winslowdel',84); delcontent('winslowadd',84);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macvirus'):

          console.log('macvirus delete!');
          delcontent('macvirusdel',85); delcontent('macvirusadd',85);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macdead'):

          console.log('macdead delete!');
          delcontent('macdeaddel',89); delcontent('macdeadadd',89);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winvirus'):

          console.log('winvirus delete!');
          delcontent('winvirusdel',92); delcontent('winvirusadd',92);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macnospace'):

          console.log('macnospace delete!');
          delcontent('macnospacedel',94); delcontent('macnospaceadd',94);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'windead'):

          console.log('windead delete!');
          delcontent('windeaddel',96); delcontent('windeadadd',96);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winnospace'):

          console.log('winnospace delete!');
          delcontent('winnospacedel',101); delcontent('winnospaceadd',101);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macoffline'):

          console.log('macoffline delete!');
          delcontent('macofflinedel',103); delcontent('macofflineadd',103);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winoffline'):

          console.log('winoffline delete!');
          delcontent('winofflinedel',110); delcontent('winofflineadd',110);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macsoftissue'):

          console.log('macsoftissue delete!');
          delcontent('macsoftissuedel',113); delcontent('macsoftissueadd',113);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winsoftissue'):

          console.log('winsoftissue delete!');
          delcontent('winsoftissuedel',120); delcontent('winsoftissueadd',120);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'macelse'):

          console.log('macelse delete!');
          delcontent('macelsedel',123); delcontent('macelseadd',123);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'winelse'):

          console.log('winelse delete!');
          delcontent('winelsedel',130); delcontent('winelseadd',130);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'upmoddsl'):

          console.log('upmoddsl delete!');
          delcontent('upmoddsldel',145); delcontent('upmoddsladd',145);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'recmoddsl'):

          console.log('recmoddsl delete!');
          delcontent('recmoddsldel',147); delcontent('recmoddsladd',147);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'upcable'):

          console.log('upcable delete!');
          delcontent('upcabledel',155); delcontent('upcableadd',155);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'reccable'):

          console.log('reccable delete!');
          delcontent('reccabledel',157); delcontent('reccableadd',157);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'upmod'):

          console.log('upmod delete!');
          delcontent('upmoddel',189); delcontent('upmodadd',189);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'recmod'):

          console.log('recmod delete!');
          delcontent('recmoddel',191); delcontent('recmodadd',191);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break

    case (tagclass === 'recother'):

          console.log('recother delete!');
          delcontent('recotherdel',203); delcontent('recotheradd',203);
          apptime = apptime - 120;
          clear_css_class('appadd','buttonplus');
          if (apptime === 0) { set_css_class('appointment', 'display', 'none'); set_css_class('howmain', 'display', 'block'); saintpoint(0,0,0,0,0,0); /*saintlog();*/ } else { set_html_id('appsum', 'TOTAL: Approx.'+apptime+' min' );}
    break


/* anything else buttons */

    case (tagid === 'anythingnext'):
          set_css_class('anythingelse', 'display', 'none');
          set_css_class('appointment', 'display', 'block');

          /* calculate choices */
   
          switch ( arraytotal(saintfix) ) {

                case (4): /* setup new network */
    
                      if ( apptotal.indexOf(4) === -1 ) {

                      apptime = apptime + 120;
                      
                      appcontent[4] = '<div id="netadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/wireless-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Network Approx. 120 min </span></div><p class="modhowtxt"> Setup Network <br></p></div></div>';
                      appremovecontent[4] = '<div id="netdel" class="network appitem"><div class="network appcontent"><div class="network icon"><img class="network" src="/img/delete-48.png"></div><div class="network h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="network modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[4] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(4);

                      }   

                break;

                case (6): /* setup new mac * data migration */
           
                      if ( apptotal.indexOf(6) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[6] = '<div id="macdataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Apple Mac Data Migration Approx. 120 min </span></div><p class="modhowtxt"> Data Migration </p></div></div>';
                      appremovecontent[6] = '<div id="macdatadel" class="macdata appitem"><div class="macdata appcontent"><div class="macdata icon"><img class="macdata" src="/img/delete-48.png"></div><div class="macdata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="macdata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[6] = document.getElementById("anything-message").value; 

                      addcontent();
                      apptotal.push(6);

                      }

                break;

                case (8): /* setup new mac * no data migration */
        
                      if ( apptotal.indexOf(8) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[8] = '<div id="macnodataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Setup Mac <br></p></div></div>';
                      appremovecontent[8] = '<div id="macnodatadel" class="macnodata appitem"><div class="macnodata appcontent"><div class="macnodata icon"><img class="macnodata" src="/img/delete-48.png"></div><div class="macnodata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="macnodata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[8] = document.getElementById("anything-message").value; 

                      addcontent();
                      apptotal.push(8);

                      }

                break;

                case (10): /* upgrade new mac * data migration  */
   
                      if ( apptotal.indexOf(10) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[10] = '<div id="upmacadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Upgrade <span style="display:none;"> Apple Mac Data Migration Approx. 120 min </span></div><p class="modhowtxt"> Data Migration </p></div></div>';
                      appremovecontent[10] = '<div id="upmacdel" class="upmac appitem"><div class="upmac appcontent"><div class="upmac icon"><img class="upmac" src="/img/delete-48.png"></div><div class="upmac h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="upmac modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[10] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(10);

                      }

                break;

                case (12): /* upgrade new mac * no data migration  */

                      if ( apptotal.indexOf(12) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[12] = '<div id="upmacnodataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Upgrade <span style="display:none;"> Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Upgrade Mac <br></p></div></div>';
                      appremovecontent[12] = '<div id="upmacnodatadel" class="upmacnodata appitem"><div class="upmacnodata appcontent"><div class="upmacnodata icon"><img class="upmacnodata" src="/img/delete-48.png"></div><div class="upmacnodata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="upmacnodata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[12] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(12);

                      }

                break;

                case (13): /* setup new windows pc * data migration */
        
                      if ( apptotal.indexOf(13) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[13] = '<div id="windataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Windows PC Data Migration Approx. 120 min </span></div><p class="modhowtxt"> Data Migration </p></div></div>';
                      appremovecontent[13] = '<div id="windatadel" class="windata appitem"><div class="windata appcontent"><div class="windata icon"><img class="windata" src="/img/delete-48.png"></div><div class="windata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="windata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[13] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(13);

                      }

                break;

                case (15): /* setup new windows pc * no data migration */
          
                      if ( apptotal.indexOf(15) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[15] = '<div id="winnodataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Setup Windows <br></p></div></div>';
                      appremovecontent[15] = '<div id="winnodatadel" class="winnodata appitem"><div class="winnodata appcontent"><div class="winnodata icon"><img class="winnodata" src="/img/delete-48.png"></div><div class="winnodata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="winnodata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[15] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(15);

                      }

                break;

                case (17): /* upgrade windows pc * data migration */
        
                      if ( apptotal.indexOf(17) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[17] = '<div id="winupdataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Upgrade <span style="display:none;"> Windows PC Data Migration Approx. 120 min </span></div><p class="modhowtxt"> Data Migration </p></div></div>';
                      appremovecontent[17] = '<div id="winupdatadel" class="winupdata appitem"><div class="winupdata appcontent"><div class="winupdata icon"><img class="winupdata" src="/img/delete-48.png"></div><div class="winupdata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="winupdata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[17] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(17);

                      }

                break;

                case (19): /* upgrade windows pc * no data migration * no notes */
          
                      if ( apptotal.indexOf(19) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[19] = '<div id="winupnodataadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Upgrade <span style="display:none;"> Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Upgrade Windows <br></p></div></div>';
                      appremovecontent[19] = '<div id="winupnodatadel" class="winupnodata appitem"><div class="winupnodata appcontent"><div class="winupnodata icon"><img class="winupnodata" src="/img/delete-48.png"></div><div class="winupnodata h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="winupnodata modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[19] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(19);

                      }

                break;

                case (21): /* setup ios apple new mobile */
            
                      if ( apptotal.indexOf(21) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[21] = '<div id="iosmobileadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/iphone-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Apple IOS Mobile Approx. 120 min </span></div><p class="modhowtxt"> Setup Mobile <br></p></div></div>';
                      appremovecontent[21] = '<div id="iosmobiledel" class="iosmobile appitem"><div class="iosmobile appcontent"><div class="iosmobile icon"><img class="iosmobile" src="/img/delete-48.png"></div><div class="iosmobile h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="iosmobile modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[21] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(21);

                      }

                break;

                case (24): /* setup android new mobile */
            
                      if ( apptotal.indexOf(24) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[24] = '<div id="andmobileadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/android-os-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Android Mobile Approx. 120 min </span></div><p class="modhowtxt"> Setup Mobile <br></p></div></div>';
                      appremovecontent[24] = '<div id="andmobiledel" class="andmobile appitem"><div class="andmobile appcontent"><div class="andmobile icon"><img class="andmobile" src="/img/delete-48.png"></div><div class="andmobile h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="andmobile modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[24] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(24);

                      }

                break;

                case (27): /* setup email email on all devices */
       
                      if ( apptotal.indexOf(27) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[27] = '<div id="upemailadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/email-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Email On All Devices Approx. 120 min </span></div><p class="modhowtxt"> Setup Email <br></p></div></div>';
                      appremovecontent[27] = '<div id="upemaildel" class="upemail appitem"><div class="upemail appcontent"><div class="upemail icon"><img class="upemail" src="/img/delete-48.png"></div><div class="upemail h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="upemail modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[27] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(27);

                      }

                break;

                case (49): /* setup sonos music device */
        
                      if ( apptotal.indexOf(49) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[49] = '<div id="sonosadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/sonos-record-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Sonos Approx. 120 min </span></div><p class="modhowtxt"> Setup Sonos <br></p></div></div>';
                      appremovecontent[49] = '<div id="sonosdel" class="sonos appitem"><div class="sonos appcontent"><div class="sonos icon"><img class="sonos" src="/img/delete-48.png"></div><div class="sonos h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="sonos modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[49] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(49);

                      }

                break;

                case (51): /* setup harmony remote music device */
   
                      if ( apptotal.indexOf(51) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[51] = '<div id="harmonyadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/sonos-record-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Harmony Remote Approx. 120 min </span></div><p class="modhowtxt"> Setup Harmony Remote <br></p></div></div>';
                      appremovecontent[51] = '<div id="harmonydel" class="harmony appitem"><div class="harmony appcontent"><div class="harmony icon"><img class="harmony" src="/img/delete-48.png"></div><div class="harmony h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="harmony modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[51] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(51);

                      }

                break;

                case (54): /* setup wemo smart home device */
               
                      if ( apptotal.indexOf(54) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[54] = '<div id="wemoadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/plugin-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Wemo Approx. 120 min </span></div><p class="modhowtxt"> Setup Wemo <br></p></div></div>';
                      appremovecontent[54] = '<div id="wemodel" class="wemo appitem"><div class="wemo appcontent"><div class="wemo icon"><img class="wemo" src="/img/delete-48.png"></div><div class="wemo h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="wemo modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[54] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(54);

                      }

                break;

                case (56): /* setup arlo smart home device */
           
                      if ( apptotal.indexOf(56) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[56] = '<div id="arloadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/webcam-4-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Arlo Approx. 120 min </span></div><p class="modhowtxt"> Setup Arlo <br></p></div></div>';
                      appremovecontent[56] = '<div id="arlodel" class="arlo appitem"><div class="arlo appcontent"><div class="arlo icon"><img class="arlo" src="/img/delete-48.png"></div><div class="arlo h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="arlo modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[56] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(56);

                      }

                break;

                case (66): /* setup other smart home device */
               
                      if ( apptotal.indexOf(66) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[66] = '<div id="smartotheradd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/webcam-4-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Other Smart Device Approx. 120 min </span></div><p class="modhowtxt"> Setup Other <br></p></div></div>';
                      appremovecontent[66] = '<div id="smartotherdel" class="smartother appitem"><div class="smartother appcontent"><div class="smartother icon"><img class="smartother" src="/img/delete-48.png"></div><div class="smartother h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[66] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(66);

                      }

                break;

                case (71): /* setup printer */
            
                      if ( apptotal.indexOf(71) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[71] = '<div id="printeradd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/printer-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Printer Approx. 120 min </span></div><p class="modhowtxt"> Setup Printer <br></p></div></div>';
                      appremovecontent[71] = '<div id="printerdel" class="printer appitem"><div class="printer appcontent"><div class="printer icon"><img class="printer" src="/img/delete-48.png"></div><div class="printer h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[71] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(71);

                      }

                break;

                case (77): /* reconfigure new mac * running slow */
           
                      if ( apptotal.indexOf(77) === -1 ) {

                      apptime = apptime + 120;
                  
                      appcontent[77] = '<div id="macslowadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Slow Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Slow Mac <br></p></div></div>';
                      appremovecontent[77] = '<div id="macslowdel" class="macslow appitem"><div class="macslow appcontent"><div class="macslow icon"><img class="macslow" src="/img/delete-48.png"></div><div class="macslow h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[77] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(77);

                      }

                break;

                case (84): /* reconfigure windows * running slow */
              
                      if ( apptotal.indexOf(84) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[84] = '<div id="winslowadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Slow Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Slow PC <br></p></div></div>';
                      appremovecontent[84] = '<div id="winslowdel" class="winslow appitem"><div class="winslow appcontent"><div class="winslow icon"><img class="winslow" src="/img/delete-48.png"></div><div class="winslow h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[84] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(84);

                      }

                break;

                case (85): /* reconfigure mac * virus */
              
                      if ( apptotal.indexOf(85) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[85] = '<div id="macvirusadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Remove Mac Virus Approx. 120 min </span></div><p class="modhowtxt"> Remove virus Mac <br></p></div></div>';
                      appremovecontent[85] = '<div id="macvirusdel" class="macvirus appitem"><div class="macvirus appcontent"><div class="macvirus icon"><img class="macvirus" src="/img/delete-48.png"></div><div class="macvirus h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[85] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(85);

                      }

                break;

                case (89): /* reconfigure mac * will not turn on */
           

                      if ( apptotal.indexOf(89) === -1 ) {

                      apptime = apptime + 120;
                   
                      appcontent[89] = '<div id="macdeadadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Dead Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Dead Mac <br></p></div></div>';
                      appremovecontent[89] = '<div id="macdeaddel" class="macdead appitem"><div class="macdead appcontent"><div class="macdead icon"><img class="macdead" src="/img/delete-48.png"></div><div class="macdead h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[89] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(89);

                      }

                break;

                case (92): /* reconfigure windows * virus */
               
                      if ( apptotal.indexOf(92) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[92] = '<div id="winvirusadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Remove PC Windows Virus Approx. 120 min </span></div><p class="modhowtxt"> Remove virus PC <br></p></div></div>';
                      appremovecontent[92] = '<div id="winvirusdel" class="winvirus appitem"><div class="winvirus appcontent"><div class="winvirus icon"><img class="winvirus" src="/img/delete-48.png"></div><div class="winvirus h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[92] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(92);

                      }

                break;

                case (94): /* reconfigure mac * no disk space */
              
                      if ( apptotal.indexOf(94) === -1 ) {

                      apptime = apptime + 120;

                      appcontent[94] = '<div id="macnospaceadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> No Disk Space Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> No disk space Mac <br></p></div></div>';
                      appremovecontent[94] = '<div id="macnospacedel" class="macnospace appitem"><div class="macnospace appcontent"><div class="macnospace icon"><img class="macnospace" src="/img/delete-48.png"></div><div class="macnospace h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[94] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(94);

                      }

                break;

                case (96): /* reconfigure windows * will not turn on */
              
                      if ( apptotal.indexOf(96) === -1 ) {

                      apptime = apptime + 120;
                 
                      appcontent[96] = '<div id="windeadadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Dead Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Dead PC <br></p></div></div>';
                      appremovecontent[96] = '<div id="windeaddel" class="windead appitem"><div class="windead appcontent"><div class="windead icon"><img class="windead" src="/img/delete-48.png"></div><div class="windead h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[96] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(96);

                      }

                break;

                case (101): /* reconfigure windows * no disk space */

                      if ( apptotal.indexOf(101) === -1 ) {

                      apptime = apptime + 120;
                
                      appcontent[101] = '<div id="winnospaceadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> No Disk Space Windows PC Approx. 120 min </span></div><p class="modhowtxt"> No disk space PC <br></p></div></div>';
                      appremovecontent[101] = '<div id="winnospacedel" class="winnospace appitem"><div class="winnospace appcontent"><div class="winnospace icon"><img class="winnospace" src="/img/delete-48.png"></div><div class="winnospace h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[101] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(101);

                      }

                break;

                case (103): /* reconfigure mac * cannot get online */
           
                      if ( apptotal.indexOf(103) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[103] = '<div id="macofflineadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Offline Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Offline Mac <br></p></div></div>';
                      appremovecontent[103] = '<div id="macofflinedel" class="macoffline appitem"><div class="macoffline appcontent"><div class="macoffline icon"><img class="macoffline" src="/img/delete-48.png"></div><div class="macoffline h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[103] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(103);

                      }

                break;

                case (110): /* reconfigure windows * cannot get online */
         
                      if ( apptotal.indexOf(110) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[110] = '<div id="winofflineadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Offline Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Offline PC <br></p></div></div>';
                      appremovecontent[110] = '<div id="winofflinedel" class="winoffline appitem"><div class="winoffline appcontent"><div class="winoffline icon"><img class="winoffline" src="/img/delete-48.png"></div><div class="winoffline h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[110] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(110);

                      }

                break;

                case (113): /* reconfigure mac * software issues */
             
                      if ( apptotal.indexOf(113) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[113] = '<div id="macsoftissueadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Software Problem Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Software problem Mac <br></p></div></div>';
                      appremovecontent[113] = '<div id="macsoftissuedel" class="macsoftissue appitem"><div class="macsoftissue appcontent"><div class="macsoftissue icon"><img class="macsoftissue" src="/img/delete-48.png"></div><div class="macsoftissue h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[113] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(113);

                      }

                break;

                case (120): /* reconfigure windows * software issues */
             
                      if ( apptotal.indexOf(120) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[120] = '<div id="winsoftissueadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Software Problem Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Software problem PC <br></p></div></div>';
                      appremovecontent[120] = '<div id="winsoftissuedel" class="winsoftissue appitem"><div class="winsoftissue appcontent"><div class="winsoftissue icon"><img class="winsoftissue" src="/img/delete-48.png"></div><div class="winsoftissue h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[120] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(120);

                      }

                break;

                case (123): /* reconfigure mac * something else */
              
                      if ( apptotal.indexOf(123) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[123] = '<div id="macelseadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/mac-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Other Issue Apple Mac Approx. 120 min </span></div><p class="modhowtxt"> Other issue Mac <br></p></div></div>';
                      appremovecontent[123] = '<div id="macelsedel" class="macelse appitem"><div class="macelse appcontent"><div class="macelse icon"><img class="macelse" src="/img/delete-48.png"></div><div class="macelse h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[123] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(123);

                      }

                break;

                case (130): /* reconfigure windows * something else */
             
                      if ( apptotal.indexOf(130) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[130] = '<div id="winelseadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/windows-os-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Other Issue Windows PC Approx. 120 min </span></div><p class="modhowtxt"> Other issue PC <br></p></div></div>';
                      appremovecontent[130] = '<div id="winelsedel" class="winelse appitem"><div class="winelse appcontent"><div class="winelse icon"><img class="winelse" src="/img/delete-48.png"></div><div class="winelse h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[130] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(130);

                      }

                break;

                case (145): /* reconfigure network * modem type * DSL * make and model * 2 yrs old * no */

                      if ( apptotal.indexOf(145) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[145] = '<div id="upmoddsladd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> DSL Modem Issue Under 2 Years Old Approx. 120 min </span></div><p class="modhowtxt"> DSL modem issue <br></p></div></div>';
                      appremovecontent[145] = '<div id="upmoddsldel" class="recmoddsl appitem"><div class="recmoddsl appcontent"><div class="recmoddsl icon"><img class="recmoddsl" src="/img/delete-48.png"></div><div class="recmoddsl h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[145] = 'make and model (under 2 years old) : ' + document.getElementById("makeandmodel-message").value + '<br>';
                      appnotes[145] = appnotes[145] + ' added notes : ' + document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(145);

                      }

                break;

                case (147): /* reconfigure network * modem type * DSL * make and model * 2 yrs old * yes */

                      if ( apptotal.indexOf(147) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[147] = '<div id="recmoddsladd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> DSL Modem Issue Over 2 Years Old Approx. 120 min </span></div><p class="modhowtxt"> DSL modem issue <br></p></div></div>';
                      appremovecontent[147] = '<div id="recmoddsldel" class="recmoddsl appitem"><div class="recmoddsl appcontent"><div class="recmoddsl icon"><img class="recmoddsl" src="/img/delete-48.png"></div><div class="recmoddsl h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[147] = 'make and model (over 2 years old) : ' + document.getElementById("makeandmodel-message").value + '<br>';
                      appnotes[147] = appnotes[147] + ' added notes : ' + document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(147);

                      }

                break;

                case (155): /* reconfigure network * modem type * Cable * make and model * 2 yrs old * no */

                      if ( apptotal.indexOf(155) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[155] = '<div id="upcableadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Cable Modem Issue Under 2 Years Old Approx. 120 min </span></div><p class="modhowtxt"> Cable modem <br></p></div></div>';
                      appremovecontent[155] = '<div id="upcabledel" class="reccable appitem"><div class="reccable appcontent"><div class="reccable icon"><img class="reccable" src="/img/delete-48.png"></div><div class="reccable h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[155] = 'make and model (under 2 years old) : ' + document.getElementById("makeandmodel-message").value + '<br>';
                      appnotes[155] = appnotes[155] + ' added notes : ' + document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(155);

                      }

                break;
        
                case (157): /* reconfigure network * modem type * Cable * make and model * 2 yrs old * yes */

                      if ( apptotal.indexOf(157) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[157] = '<div id="reccableadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Cable Modem Issue Over 2 Years Old Approx. 120 min </span></div><p class="modhowtxt"> Cable modem <br></p></div></div>';
                      appremovecontent[157] = '<div id="reccabledel" class="reccable appitem"><div class="reccable appcontent"><div class="reccable icon"><img class="reccable" src="/img/delete-48.png"></div><div class="reccable h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[157] = 'make and model (over 2 years old) : ' + document.getElementById("makeandmodel-message").value + '<br>';
                      appnotes[157] = appnotes[157] + ' added notes : ' + document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(157);

                      }

                break;

                case (189): /* reconfigure network * modem type * other * make and model * 2 yrs old * no */

                      if ( apptotal.indexOf(189) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[189] = '<div id="upmodadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Other Modem Under 2 Years Old Approx. 120 min </span></div><p class="modhowtxt"> Reconfigure Other modem <br></p></div></div>';
                      appremovecontent[189] = '<div id="upmoddel" class="upmod appitem"><div class="upmod appcontent"><div class="upmod icon"><img class="upmod" src="/img/delete-48.png"></div><div class="upmod h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[189] = 'make and model (under 2 years old) : ' + document.getElementById("makeandmodel-message").value + '<br>';
                      appnotes[189] = appnotes[189] + ' added notes : ' + document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(189);

                      }

                break;

                case (191): /* reconfigure network * modem type * other * make and model * 2 yrs old * yes */

                      if ( apptotal.indexOf(191) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[191] = '<div id="recmodadd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Setup <span style="display:none;"> Other Modem Over 2 Years Old Approx. 120 min </span></div><p class="modhowtxt"> Reconfigure Other modem <br></p></div></div>';
                      appremovecontent[191] = '<div id="recmoddel" class="upmod appitem"><div class="upmod appcontent"><div class="upmod icon"><img class="upmod" src="/img/delete-48.png"></div><div class="upmod h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[191] = 'make and model (over 2 years old) : ' + document.getElementById("makeandmodel-message").value + '<br>';
                      appnotes[191] = appnotes[191] + ' added notes : ' + document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(191);

                      }

                break;

                case (201): /* reconfigure other */

                      if ( apptotal.indexOf(201) === -1 ) {

                      apptime = apptime + 120;
               
                      appcontent[201] = '<div id="recotheradd" class="appitem"><div class="appcontent"><div class="icon"><img src="/img/router-48.png"></div><div class="apptitle"> Reconfigure <span style="display:none;"> Other Device Issue Approx. 120 min </span></div><p class="modhowtxt"> Reconfigure other <br></p></div></div>';
                      appremovecontent[201] = '<div id="recotherdel" class="recother appitem"><div class="recother appcontent"><div class="recother icon"><img class="recother" src="/img/delete-48.png"></div><div class="recother h4 how-home s2-v-padding-sm s2-grey apptitle">Remove</div><p class="modhowtxt">Approx.120 min</p></div></div>';
                      appnotes[201] = document.getElementById("anything-message").value;

                      addcontent();
                      apptotal.push(201);

                      }

                break;
              
          }

          console.log('check sum : ' + apptime );

          if ( apptime === 360 ) { clear_css_class('appadd','buttonplusunable'); }

          /*saintlog();*/        
    break
    
    case (tagid === 'anythingback'):
          set_css_class('anythingelse', 'display', 'none');
          if ( saintfix[1] = 1) {
               set_css_class('brokenmain', 'display', 'block');
               saintpoint(0,1,0,0,0,0);

          } else {
               set_css_class('setupmain', 'display', 'block');
               saintpoint(1,0,0,0,0,0);
          }
          /*saintlog();*/
    break

/* appointment buttons */

    case (tagid === 'appnext'):set_css_class('appointment', 'display', 'none');set_css_class('summary', 'display', 'block');set_css_id('zipcheck_zip', 'focus', 'focus');/*saintlog();*/break
    
    case (tagid === 'appadd'):
          console.log('check sum : ' + apptime );
          if ( has_css_class('appadd', 'buttonplus') ) {
            set_css_class('appointment', 'display', 'none');
            set_css_class('howmain', 'display', 'block');
            saintpoint(0,0,0,0,0,0);
            /*saintlog();*/
          }
    break

    case (tagid === 'appback'):
          set_css_class('appointment', 'display', 'none');
          set_css_class('howmain', 'display', 'block');
          clearcontent();
          saintpoint(0,0,0,0,0,0);
          /*saintlog();*/
    break

/* summary buttons */

    case (tagid === 'summarycheck_submit'):

          if ( validate('zipcheck')) {
               set_css_class('summary', 'display', 'none');

            if (checkzip() === 2 ) {

                set_css_class('summaryservice', 'display', 'block');
                set_css_id('shedule_name', 'focus', 'focus');

            } else {

                set_css_class('email', 'display', 'block');
                set_css_id('emailcheck_email', 'focus', 'focus');

            }
          }
          
          /*saintlog();*/
    break

/* summary service buttons * unable * pre-post */

    case (tagid === 'shedule_name'):
    case (tagid === 'shedule_email'):
    case (tagid === 'shedule_phone'):
    case (tagid === 'shedule_address'):
    case (tagid === 'shedule_zip'):
    case (tagid === 'shedule_message'):
          if ( visible_css_class('buttongrey') ) {
             document.getElementById("shedule_name").blur();
             document.getElementById("shedule_email").blur();
             document.getElementById("shedule_phone").blur();
             document.getElementById("shedule_address").blur();
             document.getElementById("shedule_zip").blur();
             document.getElementById("shedule_message").blur();
          }
    break;
    
/* summary service buttons (post appointment) */

    case (tagid === 'postjob_submit'):

          if ( validate('shedule')) {

          var jobapp = document.getElementsByClassName("apptitle");
          for (var i = 0; i < jobapp.length; i++) {
               if (jobapp[i].innerHTML === 'Remove') { break; }
               document.getElementById('jobapp_' + i).value = (jobapp[i].innerHTML).replace('<span style="display:none;">','').replace('</span>','');
               /* console.log( (jobapp[i].innerHTML).replace('<span style="display:none;">','').replace('</span>','') ); */
          }

          var elem = document.getElementById('unsform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('unsform').id = 'sform'; document.sform.action = 'https://script.google.com/macros/s/AKfycbwC52D4_hscAoarTk4bzZUW2q3EeGmShAhH13obqyUWH_ooUPU/exec' };

          document.getElementById("booking_number").value = saintjobnumber(document.getElementById("shedule_name").value);
          document.getElementById("booking_name").value = document.getElementById("shedule_name").value;
          document.getElementById("booking_email").value = document.getElementById("shedule_email").value;
          document.getElementById("booking_phone").value = document.getElementById("shedule_phone").value;
          document.getElementById("booking_address").value = document.getElementById("shedule_address").value;
          document.getElementById("booking_zip").value = document.getElementById("shedule_zip").value;
          document.getElementById("booking_msg").value = document.getElementById("shedule_message").value;
          document.getElementById("job-one").value = document.getElementById("jobapp_0").value;
          document.getElementById("job-two").value = document.getElementById("jobapp_1").value;
          document.getElementById("job-three").value = document.getElementById("jobapp_2").value;
          document.getElementById("job-four").value = document.getElementById("jobapp_3").value;
          document.getElementById("job-five").value = document.getElementById("jobapp_4").value;

          document.getElementById("job-notes").value = (document.getElementById("jobapp_notes").value).replace(/\n/g, " ");
          
          document.getElementById("job-cost").value = document.getElementById("jobapp_hour_cost").value;
          document.getElementById("job-summary").value = document.getElementById("jobapp_total_time").value;
          document.getElementById("job-total").value = document.getElementById("jobapp_total_cost").value;


          /*
          console.log( document.getElementById("shedule_name").value );
          console.log( document.getElementById("shedule_email").value );
          console.log( document.getElementById("shedule_phone").value );
          console.log( document.getElementById("shedule_address").value );
          console.log( document.getElementById("shedule_zip").value );
          console.log( document.getElementById("shedule_message").value );
          console.log( isplatform.Any() );
          console.log( isbrowser.Any() );
          console.log( istimezone() );
          console.log( saintjobnumber(document.getElementById("shedule_name").value) );
          console.log( document.getElementById("jobapp_0").value );
          console.log( document.getElementById("jobapp_1").value );
          console.log( document.getElementById("jobapp_2").value );
          console.log( document.getElementById("jobapp_3").value );
          console.log( document.getElementById("jobapp_4").value );
          console.log( document.getElementById("jobapp_notes").value );
          console.log( document.getElementById('jobapp_hour_cost').value );
          console.log( document.getElementById("jobapp_total_time").value );
          console.log( document.getElementById("jobapp_total_cost").value );
          console.log( document.getElementById("authenticity_token").value );
          */

          jobapp = null;

          var elements = document.getElementById("sform").elements; // all form elements
          var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
          var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
            
          console.log(data);

          _process('post', '_shedule', data,'https://script.google.com/macros/s/AKfycbxBNtDFeJFKCROHx9DJo5uhQp1sGaGDXdCsox8cok3k0ssdLccA/exec');

          stateprocess('_shedule','set');
          console.log('send process completed!');

/*

          process['_shedule'] = '_shedule' + '=' + base64_encode( 'shedule' ) + ':'
                 + encrypt( document.getElementById("shedule_name").value ) + ':'
                 + encrypt( document.getElementById("shedule_email").value ) + ':'
                 + encrypt( document.getElementById("shedule_phone").value ) + ':'
                 + encrypt( document.getElementById("shedule_address").value ) + ':'
                 + encrypt( document.getElementById("shedule_zip").value ) + ':'
                 + base64_encode( document.getElementById("shedule_message").value ) + ':'
                 + base64_encode(isplatform.Any()) + ':' 
                 + base64_encode(isbrowser.Any()) + ':' 
                 + base64_encode(istimezone()) + ':'
                 + base64_encode( saintjobnumber(document.getElementById("shedule_name").value) ) + ':'
                 + base64_encode( document.getElementById("jobapp_0").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_1").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_2").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_3").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_4").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_notes").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_hour_cost").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_total_time").value ) + ':'
                 + base64_encode( document.getElementById("jobapp_total_cost").value ) + ':'
                 + base64_encode( document.getElementById("authenticity_token").value );

          _process('post', '_shedule', process['_shedule'] ,'callin');

          stateprocess('_shedule','set');

          console.log('send process completed!');

*/
          
          } else {
          
          console.log('not validate!'); 
          
          }

          elem = null; elements = null, fields = null, data = null;

    break;

/* summary service buttons * unable * pre-post */

    case (tagid === 'apply_name'):
    case (tagid === 'apply_email'):
    case (tagid === 'apply_phone'):
    case (tagid === 'apply_address'):
    case (tagid === 'apply_zip'):
          if ( visible_css_class('buttongrey') ) {
             document.getElementById("apply_name").blur();
             document.getElementById("apply_email").blur();
             document.getElementById("apply_phone").blur();
             document.getElementById("apply_address").blur();
             document.getElementById("apply_zip").blur();
          }
    break;

/* summary apply buttons (post apply to supportsaint) */

    case (tagid === 'postjob_apply'):

          var elem = document.getElementById('bform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('bform').id = 'pform'; document.bform.action = 'https://script.google.com/macros/s/AKfycby4zGhjQwh5zHgcWbV66JidTwWSsMO_kZQvYCjgRfurYSgrhnI/exec' };

          if ( validate('apply')) {

              document.getElementById("app_name").value = document.getElementById("apply_name").value; 
              document.getElementById("app_email").value = document.getElementById("apply_email").value; 
              document.getElementById("app_phone").value = document.getElementById("apply_phone").value; 
              document.getElementById("app_address").value = document.getElementById("apply_address").value;
              document.getElementById("app_zip").value = document.getElementById("apply_zip").value;

              var elements = document.getElementById("pform").elements; // all form elements
              var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
              var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
            
              console.log(data);

              _process('post', '_apply', data,'https://script.google.com/macros/s/AKfycby4zGhjQwh5zHgcWbV66JidTwWSsMO_kZQvYCjgRfurYSgrhnI/exec');


/*
              process['_apply'] = '_apply' + '=' + base64_encode( 'apply' ) + ':'
              + encrypt( document.getElementById("apply_name").value ) + ':'
              + encrypt( document.getElementById("apply_email").value ) + ':'
              + encrypt( document.getElementById("apply_phone").value ) + ':'
              + encrypt( document.getElementById("apply_address").value ) + ':'
              + encrypt( document.getElementById("apply_zip").value ) + ':'
              + base64_encode(isplatform.Any()) + ':' 
              + base64_encode(isbrowser.Any()) + ':' 
              + base64_encode(istimezone()) + ':'
              + base64_encode( document.getElementById("authenticity_token").value );
              _process('post', '_apply', process['_apply'] ,'callin');
*/


              stateprocess('_apply','set');

              console.log('send process completed!');
          
          } else {
          
              console.log('not validate!'); 
          
          }

          elem = null, elements = null, fields = null, data = null;

    break;

/* summary service buttons (shedule appointment) */

    case (tagid === 'signupmenubutton'):
          
          if (visible_css_id('signinmenu') ) {

              toggle_css('signupmenu', 'display');
              toggle_css('signinmenu', 'display');
              
              clear_css_class('signinmenubutton','buttonunable');
              clear_css_class('signupmenubutton','buttonfillmenu');

              set_html_id('signupmenubutton', 'Create Account');            
              set_css_id('shedule_name', 'focus', 'focus');

          } else {

              /* finalcontent(); */
              /* set_css_class('summaryfinal', 'display', 'block'); */

              console.log('going to server to signin and check details!');
          
          }
    break;

    case (tagid === 'signinmenubutton'):
          
          if ( visible_css_id('signupmenu') ) {

              toggle_css('signupmenu', 'display');
              toggle_css('signinmenu', 'display');

              clear_css_class('signupmenubutton','buttonunable');
              clear_css_class('signinmenubutton','buttonfillmenu');

              set_html_id('signupmenubutton', 'I am a new customer');
              set_css_id('shedule_email', 'focus', 'focus');
          
          } else {

              /* finalcontent(); */
              /* set_css_class('summaryfinal', 'display', 'block'); */

              console.log('going to server to signin and check details!');

          }
    break;

    case (tagid === 'signin'):
          add_css_class('openModal', 'darkmodal');
          set_css_class('howmain','display','none');
          set_css_class('signin', 'display', 'block');
          clear_css_class('signin','menu-select');
          set_css_id('shedule_email', 'focus', 'focus');
    break;

    case (tagclass === 'signinclose'):
          clear_css_class('openModal', 'modalDialog');
          set_css_class('signin', 'display', 'none');
          clear_css_class('signin','menu');
    break;

    case (tagid === 'summaryreturn'):
          set_css_class('summary', 'display', 'none');
          set_css_class('appointment', 'display', 'block');
    break;

    case (tagid === 'summaryback'):
          if ( !(visible_css_class('buttongrey')) ) {
            set_css_class('summary', 'display', 'none');
            set_css_class('summaryservice', 'display', 'none');
            set_css_class('appointment', 'display', 'block');
            set_css_class('email-control', 'focus', 'focus');
            /*saintlog();*/
          }
    break

    case (tagid === 'summaryfinal'):
          set_css_class('summaryservice', 'display', 'none');
          finalcontent();
          set_css_class('summaryfinal', 'display', 'block');
          /*saintlog();*/
    break

    case (tagid === 'summarythanks'):
          quitclose();
          /*saintlog();*/
    break


/*  not in your area * outsider unable * pre-post */

    case (tagid === 'emailcheck_email'):
          if ( visible_css_class('buttongrey') ) {
             document.getElementById("emailcheck_email").blur();
          }
    break;
    
/* not in your area * outsider buttons (pre-post) */

    case (tagid === 'emailcheck_submit'):

       if ( validate('emailcheck')) {

           var jobapp = document.getElementsByClassName("apptitle");
           for (var i = 0; i < jobapp.length; i++) {
                if (jobapp[i].innerHTML === 'Remove') { break; }
                document.getElementById('jobapp_' + i).value = (jobapp[i].innerHTML).replace('<span style="display:none;">','').replace('</span>','');
                console.log( (jobapp[i].innerHTML).replace('<span style="display:none;">','').replace('</span>','') );
            }

            var elem = document.getElementById('sform');
            if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('sform').id = 'unsform'; document.sform.action = 'https://script.google.com/macros/s/AKfycbz8a4eYlkAyJ3-se-PeeIA9D2ouhv9gBO4p1TdAoDfhdme0jlbe/exec' };

            // document.getElementById('booking_timezone').value = istimezone();

            document.getElementById("booking_number").value = 'UNBOOKED';
            document.getElementById("booking_name").value = 'unknown';
            document.getElementById("booking_email").value = document.getElementById("emailcheck_email").value;
            document.getElementById("booking_phone").value = 'unknown';
            document.getElementById("booking_address").value = 'unknown';
            document.getElementById("booking_zip").value = document.getElementById("zipcheck_zip").value;
            document.getElementById("booking_msg").value = 'none';
            document.getElementById("job-one").value = document.getElementById("jobapp_0").value;
            document.getElementById("job-two").value = document.getElementById("jobapp_1").value;
            document.getElementById("job-three").value = document.getElementById("jobapp_2").value;
            document.getElementById("job-four").value = document.getElementById("jobapp_3").value;
            document.getElementById("job-five").value = document.getElementById("jobapp_4").value;

            document.getElementById("job-notes").value = (document.getElementById("jobapp_notes").value).replace(/\n/g, " ");

            document.getElementById("job-cost").value = document.getElementById("jobapp_hour_cost").value;
            document.getElementById("job-summary").value = document.getElementById("jobapp_total_time").value;
            document.getElementById("job-total").value = document.getElementById("jobapp_total_cost").value;

            jobapp = null;

            var elements = document.getElementById("unsform").elements; // all form elements
            var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
            var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
            
            console.log(data);

            _process('post', '_outsider', data,'https://script.google.com/macros/s/AKfycbz8a4eYlkAyJ3-se-PeeIA9D2ouhv9gBO4p1TdAoDfhdme0jlbe/exec');

            stateprocess('_outsider','set');
            console.log('send process completed!');

/*            

            process['_outsider'] = '_outsider' + '=' + base64_encode( 'outsider' ) + ':'
            + encrypt( document.getElementById("zipcheck_zip").value ) + ':'
            + encrypt( document.getElementById("emailcheck_email").value ) + ':'
            + base64_encode(isplatform.Any()) + ':' 
            + base64_encode(isbrowser.Any()) + ':' 
            + base64_encode(istimezone()) + ':'
            + base64_encode( document.getElementById("jobapp_0").value ) + ':'
            + base64_encode( document.getElementById("jobapp_1").value ) + ':'
            + base64_encode( document.getElementById("jobapp_2").value ) + ':'
            + base64_encode( document.getElementById("jobapp_3").value ) + ':'
            + base64_encode( document.getElementById("jobapp_4").value ) + ':'
            + base64_encode( document.getElementById("jobapp_notes").value ) + ':'
            + base64_encode( document.getElementById("jobapp_hour_cost").value ) + ':'
            + base64_encode( document.getElementById("jobapp_total_time").value ) + ':'
            + base64_encode( document.getElementById("jobapp_total_cost").value ) + ':'
            + base64_encode( document.getElementById("authenticity_token").value );

            _process('post', '_outsider', process['_outsider'] ,'callin');

            stateprocess('_outsider','set');
             
            console.log('send process completed!');

 */           
 
       } else {
            
            console.log('send process problem!'); 
       }

       elem = null, elements = null, fields = null, data = null;

    break

    case (tagid === 'emailback'):
          if ( !(visible_css_class('buttongrey')) ) {
          set_css_class('email', 'display', 'none');
          set_css_class('summary', 'display', 'block');
          /*saintlog();*/
          }
    break

/* before you leave */

    case (tagid === 'beforeyouleavecheck'):alert('going to check email!');/*saintlog();*/break
    case (tagid === 'beforeyouleavenothanks'):set_css_class('beforeyouleave', 'display', 'none');set_css_class('telluswhy', 'display', 'block');/*saintlog();*/break

/* tell us why ? */

    case (tagid === 'telluswhybrowsing'):

/*
          process['_browsing'] = '_browsing' + '=' + base64_encode( 'browsing' ) + ':'
          + base64_encode(isplatform.Any()) + ':' 
          + base64_encode(isbrowser.Any()) + ':' 
          + base64_encode(istimezone()) + ':'
          + base64_encode( document.getElementById("authenticity_token").value );
          _process('post', '_browsing', process['_browsing'] ,'callin');
*/

          var elem = document.getElementById('pform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('pform').id = 'bform'; document.bform.action = 'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec' };

          document.getElementById("abort_timezone").value = istimezone();
          document.getElementById("abort_platform").value = isplatform.Any();
          document.getElementById("abort_browser").value = isbrowser.Any();
          document.getElementById("abort_browsing").value = 'just browsing';

          var elements = document.getElementById("bform").elements; // all form elements
          var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
          var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
      
          console.log(data);

          _process('post', '_browsing', data,'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec');

          quitclose();
          elem = null, elements = null, fields = null, data = null;
          /*saintlog();*/
    break
    case (tagid === 'telluswhynotready'):

/*
          process['_notready'] = '_notready' + '=' + base64_encode( 'notready' ) + ':'
          + base64_encode(isplatform.Any()) + ':' 
          + base64_encode(isbrowser.Any()) + ':' 
          + base64_encode(istimezone()) + ':'
          + base64_encode( document.getElementById("authenticity_token").value );
          _process('post', '_notready', process['_notready'] ,'callin');
*/

          var elem = document.getElementById('pform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('pform').id = 'bform'; document.bform.action = 'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec' };

          document.getElementById("abort_timezone").value = istimezone();
          document.getElementById("abort_platform").value = isplatform.Any();
          document.getElementById("abort_browser").value = isbrowser.Any();
          document.getElementById("abort_notready").value = 'not ready';

          var elements = document.getElementById("bform").elements; // all form elements
          var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
          var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
      
          console.log(data);

          _process('post', '_notready', data,'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec');

          quitclose();
          elem = null, elements = null, fields = null, data = null;
          /*saintlog();*/
    break
    
    case (tagid === 'telluswhynoservice'):


/*
            process['_noservice'] = '_noservice' + '=' + base64_encode( 'noservice' ) + ':'
          + base64_encode(isplatform.Any()) + ':' 
          + base64_encode(isbrowser.Any()) + ':' 
          + base64_encode(istimezone()) + ':'
          + base64_encode( document.getElementById("authenticity_token").value );
          _process('post', '_noservice', process['_noservice'] ,'callin');
*/

          var elem = document.getElementById('pform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('pform').id = 'bform'; document.bform.action = 'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec' };

          document.getElementById("abort_timezone").value = istimezone();
          document.getElementById("abort_platform").value = isplatform.Any();
          document.getElementById("abort_browser").value = isbrowser.Any();
          document.getElementById("abort_notwant").value = 'not wanted';

          var elements = document.getElementById("bform").elements; // all form elements
          var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
          var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
      
          console.log(data);

          _process('post', '_noservice', data,'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec');

          quitclose();
          elem = null, elements = null, fields = null, data = null;
          /*saintlog();*/
    break
    
    case (tagid === 'telluswhycall'):

/*
          process['_rathercall'] = '_rathercall' + '=' + base64_encode( 'rathercall' ) + ':'
          + base64_encode(isplatform.Any()) + ':' 
          + base64_encode(isbrowser.Any()) + ':' 
          + base64_encode(istimezone()) + ':'
          + base64_encode( document.getElementById("authenticity_token").value );
          _process('post', '_rathercall', process['_rathercall'] ,'callin');
*/

          var elem = document.getElementById('pform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('pform').id = 'bform'; document.bform.action = 'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec' };

          document.getElementById("abort_timezone").value = istimezone();
          document.getElementById("abort_platform").value = isplatform.Any();
          document.getElementById("abort_browser").value = isbrowser.Any();
          document.getElementById("abort_rathercall").value = 'rather call';

          var elements = document.getElementById("bform").elements; // all form elements
          var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
          var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
      
          console.log(data);

          _process('post', '_rathercall', data,'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec');

          quitclose();
          elem = null, elements = null, fields = null, data = null;
          /*saintlog();*/
    break
    
    case (tagid === 'telluswhyprice'):

/*
          process['_foundbetterprice'] = '_foundbetterprice' + '=' + base64_encode( 'foundbetterprice' ) + ':'
          + base64_encode(isplatform.Any()) + ':' 
          + base64_encode(isbrowser.Any()) + ':' 
          + base64_encode(istimezone()) + ':'
          + base64_encode( document.getElementById("authenticity_token").value );
          _process('post', '_foundbetterprice', process['_foundbetterprice'] ,'callin');
*/

          var elem = document.getElementById('pform');
          if (typeof elem !== 'undefined' && elem !== null) { document.getElementById('pform').id = 'bform'; document.bform.action = 'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec' };

          document.getElementById("abort_timezone").value = istimezone();
          document.getElementById("abort_platform").value = isplatform.Any();
          document.getElementById("abort_browser").value = isbrowser.Any();
          document.getElementById("abort_foundbetter").value = 'found better price';

          var elements = document.getElementById("bform").elements; // all form elements
          var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
          var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
      
          console.log(data);

          _process('post', '_foundbetterprice', data,'https://script.google.com/macros/s/AKfycby_Wq_xgVK83RsZqxjLlCTeAv6PsgDrOjdyJ-0b5jeseT9f2gI/exec');

          quitclose();
          elem = null, elements = null, fields = null, data = null;
          /*saintlog();*/
    break;

    case (tagclass === 'close'):
          clearcontent();
          switch (true) {
            case (visible_css_class('contactsendmsg')):
            case (visible_css_class('summaryfinal')):
            case (visible_css_class('summaryfail')):
            case (visible_css_class('email')):
                  quitclose();  
            break;
            default:
                  quitalldiags(); set_css_id('beforeyouleaveemail', 'focus', 'focus');
            break;
          }
          // if ( !visible_css_class('summaryfinal') ) { quitalldiags(); set_css_id('beforeyouleaveemail', 'focus', 'focus'); } else { quitclose();}; /*saintlog();*/
    break;

/* hamburger */

   case (tagid === 'nav-toggle'):

         navtoggle();

   break;


/* contact us we can help */
   
    case (tagclass === 'contactus'):
          navtoggle();

    case (tagid === 'mail-widget'):
    case (tagclass === 'title-bar'):
    case (tagclass === 'title-text'):
    case (tagclass === 'online-dot'):
    case (tagclass === 'title-click'):
    case (tagclass === 'controls'):

    // console.log('contactstate : ' + contactstate);

          var cwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          if ( contactstate === 0) { 
               clear_css_class('mail-widget', 'chatlio-widget');
               clear_css_class('widget-state', 'controls');         
               clear_css_class('online-dot', 'online-dot');
               contactstate = 1;

          } else {
               add_css_class('mail-widget', 'closed'); 
               add_css_class('widget-state', 'closed');
               clear_css_class('online-dot', 'online-dot');
               add_css_class('online-dot', 'animateflicker');
               contactstate = 0;
               validate('reset');
          }
          
          // console.log('clientwidth : ' + cwidth);
          if (cwidth > 700) { set_css_id('contact_name', 'focus', 'focus');}

          cwidth = null;

    break;

    case (tagid === 'callme-widget'):
    case (tagid === 'ctitle-bar'):
    case (tagid === 'conline-dot'):
    case (tagid === 'ctitle-click'):
    case (tagclass === 'ctitle-click'):
    case (tagclass === 'ctitle-text'):
    case (tagclass === 'conline-dot'):

          calltoggle(0);

    break;

/* faq's */

    case (tagclass === 'faq1'):
          toggle_css('faq1', 'display');
    break;
    
    case (tagclass === 'faq2'):
          toggle_css('faq2', 'display');
    break;

    case (tagclass === 'faq3'):
          toggle_css('faq3', 'display');
    break;

    case (tagclass === 'faq4'):
          toggle_css('faq4', 'display');
    break;
    
    case (tagclass === 'faq5'):
          toggle_css('faq5', 'display');
    break;

    case (tagclass === 'faq6'):
          toggle_css('faq6', 'display');
    break;

    case (tagclass === 'faq7open'):
          selectmenu('faqs');
          scrollTo(460, 700);
          set_css_id('faq7', 'display', 'block');
    break;
 
    case (tagclass === 'faq7'):
          toggle_css('faq7', 'display');
    break;
  
    case (tagclass === 'faq8'):
          toggle_css('faq8', 'display');
    break;

    case (tagclass === 'faq9open'):
          selectmenu('faqs');
          scrollTo(560, 700);
          set_css_id('faq9', 'display', 'block');
    break;

    case (tagclass === 'faq9'):
          toggle_css('faq9', 'display');
    break;

    case (tagclass === 'faq10'):
          toggle_css('faq10', 'display');
    break;
    
    case (tagclass === 'faq11'):
          toggle_css('faq11', 'display');
    break;

    case (tagclass === 'faq12'):
          toggle_css('faq12', 'display');
    break;

    case (tagclass === 'faq13'):
          toggle_css('faq13', 'display');
    break;

    case (tagclass === 'faq14'):
          toggle_css('faq14', 'display');
    break;
    
    case (tagclass === 'faq15'):
          toggle_css('faq15', 'display');
    break;

    case (tagclass === 'faq16'):
          toggle_css('faq16', 'display');
    break;

    case (tagclass === 'faq17'):
          toggle_css('faq17', 'display');
    break;

    case (tagclass === 'faq18'):
          toggle_css('faq18', 'display');
    break;

    case (tagclass === 'faq19open'):
          selectmenu('faqs');
          scrollTo(1080, 700);
          set_css_id('faq19', 'display', 'block');
    break;
    
    case (tagclass === 'faq19'):
          toggle_css('faq19', 'display');
    break;

    case (tagclass === 'faq20'):
          toggle_css('faq20', 'display');
    break;

/* apply now menu */

    case (tagclass === 'apply-now'):
    case (tagid === 'apply-now'):
          add_css_class('openModal', 'darkmodal');
          add_css_class('apply-now','dark');
          set_css_class('summaryapplynow', 'display', 'block');
          /* clear_css_class('mail-widget', 'chatlio-widget');add_css_class('mail-widget', 'closed');clear_css_class('widget-state', 'controls'); add_css_class('widget-state', 'closed');contactstate = 0; */
    break;

    case (tagclass === 'applyclose'):
    case (tagid === 'applyclose'):
    case (tagid === 'sendclose'):
    case (tagid === 'sheduledataclose'):
          clearcontent();
          quitclose();
          validate('resetapply');
          /*saintlog();*/
    break


/* summary service buttons * unable * pre-post */

    case (tagid === 'contact_name'):
    case (tagid === 'contact_zip'):
    case (tagid === 'contact_email'):
    case (tagid === 'contact_subject'):
          if ( visible_css_class('buttonprocess') ) {
             document.getElementById("contact_name").blur();
             document.getElementById("contact_zip").blur();
             document.getElementById("contact_email").blur();
             document.getElementById("contact_subject").blur();
          }
    break;

/* contact us, we can help message widget  */

    case (tagid === 'contact_message'):
          if ( visible_css_class('buttonprocess') ) {
              document.getElementById("contact_message").blur();
          } else {
              validate('contact');
          }
    break;

    case (tagid === 'contact_submit'):

          if ( validate('contact')) {
          
            document.getElementById('contact_timezone').value = istimezone();
            document.getElementById('contact_platform').value = isplatform.Any();
            // document.getElementById('contact_browser').value = isbrowser.Any();
    
            var elements = document.getElementById("cform").elements; // all form elements
            var fields = Object.keys(elements).map(function(k) { if(elements[k].name !== undefined) {return elements[k].name;}}).filter(function(item, pos, self) {return self.indexOf(item) == pos && item;});
            var data = {};fields.forEach(function(k){data[k] = elements[k].value;});  // creates json post object!
            
            console.log(data);

            _process('post', '_contact', data,'https://script.google.com/macros/s/AKfycbwC52D4_hscAoarTk4bzZUW2q3EeGmShAhH13obqyUWH_ooUPU/exec');

            stateprocess('_contact','set');
            console.log('send process completed!');

/*
          if ( validate('contact')) {
               process['_contact'] = '_contact' + '=' + base64_encode( 'contact' ) + ':'
               + encrypt( document.getElementById("contact_name").value ) + ':'
               + encrypt( document.getElementById("contact_zip").value ) + ':'
               + encrypt((document.getElementById("contact_email").value).toLowerCase()) + ':'
               + base64_encode( document.getElementById("contact_subject").value ) + ':'
               + encrypt( document.getElementById("contact_message").value ) + ':'
               + base64_encode(isplatform.Any()) + ':' 
               + base64_encode(isbrowser.Any()) + ':' 
               + base64_encode(istimezone()) + ':'
               + base64_encode( document.getElementById("authenticity_token").value );

               _process('post', '_contact', process['_contact'] ,'callin');

               stateprocess('_contact','set');

               console.log('send process completed!');
*/
          
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

    case ('contact'):

          document.getElementById(widget + '_name').value = '';
          document.getElementById(widget + '_zip').value = '';
          document.getElementById(widget + '_email').value = '';
          document.getElementById(widget + '_subject').selectedIndex = 'selectsubject';
          document.getElementById(widget + '_message').value = '';
    break;
    case ('shedule'):

          document.getElementById(widget + '_name').value = '';
          document.getElementById(widget + '_email').value = '';
          document.getElementById(widget + '_phone').value = '';
          document.getElementById(widget + '_address').value = '';
          document.getElementById(widget + '_zip').value = '';
          document.getElementById(widget + '_message').value = '';
          /* document.getElementById(widget + '_promocode').value = ''; */

          document.getElementById("jobapp_0").value = '';
          document.getElementById("jobapp_1").value = '';
          document.getElementById("jobapp_2").value = '';
          document.getElementById("jobapp_3").value = '';
          document.getElementById("jobapp_4").value = '';
          document.getElementById("jobapp_notes").value = '';
          document.getElementById('jobapp_hour_cost').value = '';
          document.getElementById("jobapp_total_time").value = '';
          document.getElementById("jobapp_total_cost").value = '';
          document.getElementById("authenticity_token").value = '';
    break;

    case ('outsider'):

          document.getElementById('zipcheck_zip').value = '';
          document.getElementById('emailcheck_email').value = '';
    break;

    case ('apply'):

          document.getElementById(widget + '_name').value = '';
          document.getElementById(widget + '_email').value = '';
          document.getElementById(widget + '_phone').value = '';
          document.getElementById(widget + '_address').value = '';
          document.getElementById(widget + '_zip').value = '';
          /* document.getElementById(widget + '_message').value = ''; */
    break;


  }
}

function selectmenu(menu) {

  clear_css_class('home','menu'); 
  clear_css_class('faqs','menu'); 
  clear_css_class('about','menu');
  clear_css_class(menu,'menu-select');

  switch (menu) {

    case ('home'):
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

    case ('about'):
          set_css_class('homepage', 'display', 'none');
          set_css_class('howitworks', 'display', 'none');
          set_css_class('services', 'display', 'none');
          set_css_class('saint', 'display', 'none');
          set_css_class('regions', 'display', 'none');
          set_css_class('next', 'display', 'none');

          clear_css_class('main-nav', 'home');
          add_css_class('main-nav', 'light');

          set_css_class('about','display','block');
          set_css_class('faqs','display','none');
          set_css_class('contact','display','none');
          set_css_id('findmore','display','none');
          set_css_class('howsaintworks','display','none');
          set_css_class('privacy','display','none');
          set_css_class('terms','display','none');
          scrollstate = 1;
    break;

    case ('faqs'):
          set_css_class('homepage', 'display', 'none');
          set_css_class('howitworks', 'display', 'none');
          set_css_class('services', 'display', 'none');
          set_css_class('saint', 'display', 'none');
          set_css_class('regions', 'display', 'none');
          set_css_class('next', 'display', 'none');

          clear_css_class('main-nav', 'home');
          add_css_class('main-nav', 'light');

          set_css_class('about', 'display', 'none');
          set_css_class('faqs','display','block');
          set_css_class('contact','display','none');
          set_css_id('findmore','display','none');
          set_css_class('howsaintworks','display','none');
          set_css_class('privacy','display','none');
          set_css_class('terms','display','none');
          faqclose();
          scrollstate = 1;
    break;

    case ('contact'):
          set_css_class('homepage', 'display', 'none');
          set_css_class('howitworks', 'display', 'none');
          set_css_class('services', 'display', 'none');
          set_css_class('saint', 'display', 'none');
          set_css_class('regions', 'display', 'none');
          set_css_class('next', 'display', 'none');

          clear_css_class('main-nav', 'home');
          add_css_class('main-nav', 'light');

          set_css_class('about', 'display', 'none');
          set_css_class('faqs','display','none');
          set_css_class('contact','display','block');
          set_css_id('findmore','display','none');
          set_css_class('howsaintworks','display','none');
          set_css_class('privacy','display','none');
          set_css_class('terms','display','none');
          scrollstate = 1;
    break;

    case ('findoutmore'):
          set_css_class('homepage', 'display', 'none');
          set_css_class('howitworks', 'display', 'none');
          set_css_class('services', 'display', 'none');
          set_css_class('saint', 'display', 'none');
          set_css_class('regions', 'display', 'none');
          set_css_class('next', 'display', 'none');

          clear_css_class('main-nav', 'home');
          add_css_class('main-nav', 'light');

          set_css_class('about', 'display', 'none');
          set_css_class('faqs','display','none');
          set_css_class('contact','display','none');
          set_css_id('findmore','display','block');
          set_css_class('howsaintworks','display','block');
          set_css_class('privacy','display','none');
          set_css_class('terms','display','none');
          scrollstate = 1;
    break;

    case ('privacy'):
          set_css_class('homepage', 'display', 'none');
          set_css_class('howitworks', 'display', 'none');
          set_css_class('services', 'display', 'none');
          set_css_class('saint', 'display', 'none');
          set_css_class('regions', 'display', 'none');
          set_css_class('next', 'display', 'none');

          clear_css_class('main-nav', 'home');
          add_css_class('main-nav', 'light');

          set_css_class('about', 'display', 'none');
          set_css_class('faqs','display','none');
          set_css_class('contact','display','none');
          set_css_id('findmore','display','none');
          set_css_class('howsaintworks','display','none');
          set_css_class('privacy','display','block');
          set_css_class('terms','display','none');
          scrollstate = 1;
    break;

    case ('terms'):
          set_css_class('homepage', 'display', 'none');
          set_css_class('howitworks', 'display', 'none');
          set_css_class('services', 'display', 'none');
          set_css_class('saint', 'display', 'none');
          set_css_class('regions', 'display', 'none');
          set_css_class('next', 'display', 'none');

          clear_css_class('main-nav', 'home');
          add_css_class('main-nav', 'light');

          set_css_class('about', 'display', 'none');
          set_css_class('faqs','display','none');
          set_css_class('contact','display','none');
          set_css_id('findmore','display','none');
          set_css_class('howsaintworks','display','none');
          set_css_class('privacy','display','none');
          set_css_class('terms','display','block');
          scrollstate = 1;
    break;

  }

}

function faqclose() {

    set_css_id('faq1', 'display', 'none');
    set_css_id('faq2', 'display', 'none');
    set_css_id('faq3', 'display', 'none');
    set_css_id('faq4', 'display', 'none');
    set_css_id('faq5', 'display', 'none');
    set_css_id('faq6', 'display', 'none');
    set_css_id('faq7', 'display', 'none');
    set_css_id('faq8', 'display', 'none');
    set_css_id('faq9', 'display', 'none');
    set_css_id('faq10', 'display', 'none');
    set_css_id('faq11', 'display', 'none');
    set_css_id('faq12', 'display', 'none');
    set_css_id('faq13', 'display', 'none');
    set_css_id('faq14', 'display', 'none');
    set_css_id('faq15', 'display', 'none');
    set_css_id('faq16', 'display', 'none');
    set_css_id('faq17', 'display', 'none');
    set_css_id('faq18', 'display', 'none');
    set_css_id('faq19', 'display', 'none');
    set_css_id('faq20', 'display', 'none');
}


function validate(widget) {

  /* basic : name, postcode, email, select, message validate  */

  var valchk = 0;

  switch (widget) {

    case ('contact'):

          document.getElementById(widget + '_zip').value = (document.getElementById(widget + '_zip').value).toUpperCase(); /* transform postcode zip to uppercase */

          if ( isvalid( document.getElementById(widget + '_name').value ) === false ) { clear_css_class(widget + '_name', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_name', 'mail');valchk = valchk + 1;}
          if ( iszip( document.getElementById(widget + '_zip').value ) === false )  { clear_css_class(widget + '_zip', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_zip', 'mail');valchk = valchk + 1;}
          if ( isemail( document.getElementById(widget + '_email').value ) === false ) { clear_css_class(widget + '_email', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_email', 'mail');valchk = valchk + 1;}
          if ( isselect( document.getElementById(widget + '_subject')) === false )  { clear_css_class(widget + '_subject', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_subject', 'mail');valchk = valchk + 1;} 
          if ( isvalid( document.getElementById(widget + '_message').value) === false ) { clear_css_class(widget + '_message', 'mail_message_un');valchk = valchk - 1;} else { clear_css_class(widget + '_message', 'mail_message');valchk = valchk + 1;} 
              
          console.log('valchk : ' + valchk);

          if (valchk === 5) {clear_css_class('contact_submit','buttonfill'); return true;} else {clear_css_class('contact_submit','buttonunable'); return false;}
              
          valchk = null;
     
    break;

    case ('shedule'):

          document.getElementById(widget + '_zip').value = (document.getElementById(widget + '_zip').value).toUpperCase(); /* transform postcode zip to uppercase */

          if ( isvalid( document.getElementById(widget + '_name').value ) === false ) { clear_css_class(widget + '_name', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_name', 'shedule');valchk = valchk + 1;}
          if ( isemail( document.getElementById(widget + '_email').value ) === false ) { clear_css_class(widget + '_email', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_email', 'shedule');valchk = valchk + 1;} 
          if ( isnumber( document.getElementById(widget + '_phone').value ) === false ) { clear_css_class(widget + '_phone', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_phone', 'shedule');valchk = valchk + 1;}
          if ( isvalidaddress( document.getElementById(widget + '_address').value ) === false ) { clear_css_class(widget + '_address', 'shedule_address_un');valchk = valchk - 1;} else { clear_css_class(widget + '_address', 'shedule_address');valchk = valchk + 1;}
          if ( iszip( document.getElementById(widget + '_zip').value ) === false )  { clear_css_class(widget + '_zip', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_zip', 'shedule');valchk = valchk + 1;}
          if ( isvalidzero( document.getElementById(widget + '_message').value) === false ) { clear_css_class(widget + '_message', 'shedule_address_un');valchk = valchk - 1;} else { clear_css_class(widget + '_message', 'shedule_address');valchk = valchk + 1;} 
       /* if ( isvalidpromo( document.getElementById(widget + '_promocode').value) === false ) { clear_css_class(widget + '_promocode', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_promocode', 'shedule');valchk = valchk + 1;} */
          
          console.log('valchk : ' + valchk);

          if (valchk === 6) {clear_css_class('postjob_submit','buttonfillmenu'); return true;} else {clear_css_class('postjob_submit','buttonunable'); return false;}
              
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

    case ('apply'):

          document.getElementById(widget + '_zip').value = (document.getElementById(widget + '_zip').value).toUpperCase(); /* transform postcode zip to uppercase */

          if ( isvalid( document.getElementById(widget + '_name').value ) === false ) { clear_css_class(widget + '_name', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_name', 'shedule');valchk = valchk + 1;}
          if ( isemail( document.getElementById(widget + '_email').value ) === false ) { clear_css_class(widget + '_email', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_email', 'shedule');valchk = valchk + 1;} 
          if ( isnumber( document.getElementById(widget + '_phone').value ) === false ) { clear_css_class(widget + '_phone', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_phone', 'shedule');valchk = valchk + 1;}
          if ( isvalidaddress( document.getElementById(widget + '_address').value ) === false ) { clear_css_class(widget + '_address', 'shedule_address_un');valchk = valchk - 1;} else { clear_css_class(widget + '_address', 'shedule_address');valchk = valchk + 1;}
          if ( iszip( document.getElementById(widget + '_zip').value ) === false )  { clear_css_class(widget + '_zip', 'shedule_un');valchk = valchk - 1;} else { clear_css_class(widget + '_zip', 'shedule');valchk = valchk + 1;}
          
          console.log('valchk : ' + valchk);

          if (valchk === 5) {clear_css_class('postjob_apply','buttonfillmenu'); return true;} else {clear_css_class('postjob_apply','buttonunable'); return false;}
              
          valchk = null;
     
    break;

    case ('resetapply'):

          document.getElementById('apply_name').value  = '';
          document.getElementById('apply_email').value  = '';
          document.getElementById('apply_phone').value  = '';
          document.getElementById('apply_address').value  = '';
          document.getElementById('apply_zip').value  = '';
          clear_css_class('apply_name', 'shedule');
          clear_css_class('apply_email', 'shedule');
          clear_css_class('apply_phone', 'shedule');
          clear_css_class('apply_address', 'shedule');
          clear_css_class('apply_zip', 'shedule');

    break;

    case ('reset'):

          valchk = 0;

          clear_css_class('contact_name', 'mail');
          clear_css_class('contact_zip', 'mail');
          clear_css_class('contact_email', 'mail');
          clear_css_class('contact_subject','mail');
          document.getElementById("contact_subject").value = 'selectsubject';
          clear_css_class('contact_message','mail_message');
          clear_css_class('contact_submit','buttonfillmenu');
    
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

  var el = document.getElementById('appcontent');
  while ( el.firstChild ) el.removeChild( el.firstChild );

  var el = document.getElementById('removeappcontent');
  while ( el.firstChild ) el.removeChild( el.firstChild );

  document.getElementById("jobapp_0").value = 'nojob';
  document.getElementById("jobapp_1").value = 'nojob';
  document.getElementById("jobapp_2").value = 'nojob';
  document.getElementById("jobapp_3").value = 'nojob';
  document.getElementById("jobapp_4").value = 'nojob';
  document.getElementById("jobapp_notes").value = 'nonotes';
  document.getElementById('jobapp_hour_cost').value = 'nocost';
  document.getElementById("jobapp_total_time").value = 'notime';
  document.getElementById("jobapp_total_cost").value = 'nototal';

  document.getElementById("makeandmodel-message").value = '';

  document.getElementById("anythingmsg").innerHTML = '';

  set_html_id('sendmsgend', 'If you are currently out of our service area, we’ll let you know as soon as we are in your postal code, by contacting you on this email address.');

  appcontent = [];
  appremovecontent = [];
  appnotes = [];
  apptotal = [];
  apptime = 0;

  el = null;

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

    case ('_shedule'):

      if (action === 'set') {

          clear_css_class('summaryback', 'buttongrey');
          clear_css_class('shedule_name', 'shedule_grey');
          clear_css_class('shedule_email', 'shedule_grey');
          clear_css_class('shedule_phone', 'shedule_grey');
          clear_css_class('shedule_address', 'shedule_address_grey');
          clear_css_class('shedule_zip', 'shedule_grey');
          clear_css_class('shedule_message', 'shedule_address_grey');

          set_css_id('postjob_submit', 'display', 'none');
          set_css_id('postjob_process', 'display', 'block');

      } else {

          clear_css_class('summaryback', 'buttonfillmenu');
          clear_css_class('shedule_name', 'shedule');
          clear_css_class('shedule_email', 'shedule');
          clear_css_class('shedule_phone', 'shedule');
          clear_css_class('shedule_address', 'shedule_address');
          clear_css_class('shedule_zip', 'shedule');
          clear_css_class('shedule_message', 'shedule_address');

          set_css_id('postjob_process', 'display', 'none');
          set_css_id('postjob_submit', 'display', 'block');

      }

    break;

    case ('_contact'):

      if (action === 'set') {

          clear_css_class('contact_name', 'mail_grey');
          clear_css_class('contact_zip', 'mail_grey');
          clear_css_class('contact_email', 'mail_grey');
          clear_css_class('contact_subject', 'mail_grey');
          clear_css_class('contact_message', 'mail_message_grey');
     
          set_css_id('contact_submit', 'display', 'none');
          set_css_id('contact_process', 'display', 'block');

      } else {

          clear_css_class('contact_name', 'mail');
          clear_css_class('contact_zip', 'mail');
          clear_css_class('contact_email', 'mail');
          clear_css_class('contact_subject', 'mail');
          clear_css_class('contact_message', 'mail_message');

          set_css_id('contact_process', 'display', 'none');
          set_css_id('contact_submit', 'display', 'block');

      }

    break;

    case ('_outsider'):

      if (action === 'set') {
          clear_css_class('emailback', 'buttongrey');
          clear_css_class('emailcheck_email', 'shedule_grey');

          set_css_id('emailcheck_submit', 'display', 'none');
          set_css_id('emailcheck_process', 'display', 'block');

      } else {

          clear_css_class('emailback', 'buttonfillmenu');
          clear_css_class('emailcheck_email', 'shedule');

          set_css_id('emailcheck_process', 'display', 'none');
          set_css_id('emailcheck_submit', 'display', 'block');

      }

    break;

    case ('_apply'):

      if (action === 'set') {

          clear_css_class('applyclose', 'buttongrey');
          clear_css_class('apply_name', 'shedule_grey');
          clear_css_class('apply_email', 'shedule_grey');
          clear_css_class('apply_phone', 'shedule_grey');
          clear_css_class('apply_address', 'shedule_address_grey');
          clear_css_class('apply_zip', 'shedule_grey');
   
          set_css_id('postjob_apply', 'display', 'none');
          set_css_id('postjob_apply_process', 'display', 'block');

      } else {

          clear_css_class('applyclose', 'buttonfillmenu');
          clear_css_class('apply_name', 'shedule');
          clear_css_class('apply_email', 'shedule');
          clear_css_class('apply_phone', 'shedule');
          clear_css_class('apply_address', 'shedule_address');
          clear_css_class('apply_zip', 'shedule');
      
          set_css_id('postjob_apply', 'display', 'block');
          set_css_id('postjob_apply_process', 'display', 'none');
    
      }

    break;

  }
}


function statemsg(who,state) {

  switch (who) {

    case ('_contact'):

      if (state === 'error') {
          add_css_class('openModal', 'darkmodal');
          set_css_class('summaryfail', 'display', 'block');
      } else {
          add_css_class('openModal', 'darkmodal');
          set_html_id('sendmail', '' + (document.getElementById("contact_email").value) + '' );
          set_css_class('contactsendmsg', 'display', 'block');
      }

      contactclose();
      stateprocess('_contact','unset');
      clearwidget('contact');

      console.log('we are in statemsg, close this dialog ... then display either success dialog or fail dialog!');

    break;

    case ('_shedule'):

      if (state === 'error') {
          set_css_class('summaryservice', 'display', 'none');
          set_css_class('summaryfail', 'display', 'block');
      } else {
          set_css_class('summaryservice', 'display', 'none');
          set_css_class('summaryfinal', 'display', 'block');
      }

      stateprocess('_shedule','unset');
      clearwidget('shedule');

      console.log('we are in statemsg, close this dialog ... then display either success dialog or fail dialog!');

    break;

    case ('_outsider'):

      if (state === 'error') {
          set_css_class('email', 'display', 'none');
          set_css_class('summaryfail', 'display', 'block');
      } else {
          set_css_class('email', 'display', 'none');
          set_html_id('sendmail', '' + (document.getElementById("emailcheck_email").value) + '' );
          set_css_class('contactsendmsg', 'display', 'block');
      }

      stateprocess('_outsider','unset');
      clearwidget('outsider');

      console.log('we are in statemsg, close this dialog ... then display either success dialog or fail dialog!');

    break;

    case ('_apply'):

      if (state === 'error') {
          set_css_class('summaryapplynow', 'display', 'none');
          set_css_class('summaryfail', 'display', 'block');
      } else {
          set_css_class('summaryapplynow', 'display', 'none');
          set_html_id('sendmail', '' + (document.getElementById("apply_email").value) + '' );
          set_html_id('sendmsgend', 'We plan to recruit SupportSaint techs soon, and will contact you on this email address when positions become available.');
          set_css_class('contactsendmsg', 'display', 'block');
      }

      stateprocess('_apply','unset');
      clearwidget('apply');

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

function quitclose() {

  clear_css_class('openModal', 'modalDialog');
  clear_css_class('book-now', 'buttonfill');
  clear_css_class('apply-now', 'buttonfill');

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

  set_css_class('beforeyouleave', 'display', 'none');
  set_css_class('telluswhy', 'display', 'none');

  set_css_class('summaryapplynow', 'display', 'none');
  set_css_class('contactsendmsg', 'display', 'none');
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
