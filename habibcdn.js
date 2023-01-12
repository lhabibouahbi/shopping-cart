
var fdiv = document.createElement('div')
var fdivname = document.createElement('div')
var fdivnamex = document.createElement('div')
var logo = document.createElement('div')
var close = document.createElement('div')



    var draggableElement = fdivname;
    var draggableElementprnt = fdiv;

   draggableElementprnt.addEventListener("mousedown", function(event) {
        var startX = event.pageX;
        var startY = event.pageY;

        var initialLeft = parseInt(window.getComputedStyle(draggableElementprnt).left);
        var initialTop = parseInt(window.getComputedStyle(draggableElementprnt).top);

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);

        function drag(event) {
            var newLeft = initialLeft + event.pageX - startX;
            var newTop = initialTop + event.pageY - startY;

            draggableElementprnt.style.left = newLeft + "px";
            draggableElementprnt.style.top = newTop + "px";
        }

        function stopDrag() {
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("mouseup", stopDrag);
        }
    });


fdiv.classList.add('namexx');close.classList.add('close');fdivnamex.classList.add('codex');fdivname.classList.add('titlexx');fdiv.style.width = "500px";fdiv.style.zIndex = "1111111111";fdiv.style.zIndex = "500px"; fdiv.style.height = "500px";fdiv.style.background = "#000000eb";fdiv.style.borderRadius = "5px";fdiv.style.position = "fixed";fdiv.style.bottom = "50px";fdiv.style.left = "50px";fdiv.style.overflow = "hidden";fdivname.style.width = "500px";fdivname.style.height = "";fdivname.style.background = "#ffffff70";fdivname.style.colore = "#000000";fdivname.style.fontSize = "10px";fdivname.style.padding = "5px";fdivname.style.cursor = "move";
logo.style.width = "20px"; logo.style.height = "20px"; logo.style.float = "left"; logo.style.marginRight = "15px"; logo.style.backgroundSize = "100% 100%"

fdiv.appendChild(fdivname)
fdivname.appendChild(logo)
fdivname.appendChild(close)
fdivname.innerHTML += window.location.href
document.querySelector('body').appendChild(fdiv)
var fdivh1 = fdiv.innerHTML += "<h1>struct group_info init_groups = { .usage = ATOMIC_INIT(2) };</br>struct group_info groups_alloc(int gidsetsize){</br>struct group_info *group_info;</br>int nblocks;</br>int i;</br>nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;</br><span style='color:aqua;'>/ Make sure we always allocate at least one indirect block pointer */ </span></br>struct group_info init_groups = { .usage = ATOMIC_INIT(2) };</br>struct group_info *groups_alloc(int gidsetsize){</h1>";
fdiv.appendChild(fdivnamex)

document.querySelector('.namexx .close').style.float ="right", document.querySelector('.namexx .close').style.background ="red", document.querySelector('.namexx .close').style.width ="10px",  document.querySelector('.namexx .close').style.height ="10px", document.querySelector('.namexx .close').style.borderRadius ="50px", document.querySelector('.namexx .close').style.margin ="5px"; document.querySelector('.namexx .close').style.cursor ="pointer"

document.querySelector('.namexx h1').style.color = "green"; document.querySelector('.namexx h1').style.fontSize = "10px"; document.querySelector('.namexx h1').style.paddingLeft = "20px"; document.querySelector('.namexx h1').style.paddingTop = "20px"

document.querySelector('.codex').style.color = "green"; document.querySelector('.codex').style.fontSize = "10px"; document.querySelector('.codex').style.paddingLeft = "20px"; document.querySelector('.codex').style.overflow = "hidden"; document.querySelector('.codex').style.height = "300px"; document.querySelector('.codex').style.marginTop = ""; document.querySelector('.codex').style.lineHeight = "1.5";


document.querySelector('.namexx .close').addEventListener("click", function() {

    fdiv.parentNode.removeChild(fdiv);
});



var link = document.querySelector("link[rel*='icon']");
if (link) {
 document.querySelector('.namexx div div').style.backgroundImage = "url(" + link.href + ")";
} else {
   console.log("Favicon not found.");
}



function generateRandomString()  {
  var ip = "";
  for (var i = 0; i < 4; i++) {
    var segment = Math.floor(Math.random() * 256);
    ip += segment;
    if (i < 3) {
      ip += ".";
    }
  }
  return ip;
}

let iteration = 0;
var intervalID = setInterval(function(){
   var random = generateRandomString();
   document.querySelector('.namexx .codex').innerHTML += "</br>" ; 
   document.querySelector('.namexx .codex').innerHTML += "<span style='color:aqua;'>[X842285#echo]</span>  " + random ;
   document.querySelector('.namexx .codex').scrollTo(0,document.querySelector('.namexx .codex').scrollHeight);
   iteration++;
   if(iteration >= 50) {
      clearInterval(intervalID);
document.querySelector('.namexx .codex').innerHTML = " "; 

       let loadingPercentage = 0;
let intervalIDy = setInterval(function(){
    // increment the loading percentage
    loadingPercentage++;

    // log the loading percentage
    document.querySelector('.namexx .codex').innerHTML = "Getting Localhost from " + location.hostname.split('.').slice(-2).join('.') + " " + loadingPercentage + '%' + "<div style='height:15px;width:"+ loadingPercentage * 2+"px;background:green;'><div>";

    // if the loading percentage reaches 100, clear the interval
    if(loadingPercentage >= 100) {
        clearInterval(intervalIDy);
         document.querySelector('.namexx .codex').innerHTML += "</br>100 % feched";

         let loadingPercentagex = 0;
        let intervalIDz = setInterval(function(){
        // increment the loading percentage
        loadingPercentagex++;

    // log the loading percentage
    document.querySelector('.namexx .codex').innerHTML = "Coecttig to the server" + " " + loadingPercentagex  + '%' + "<div style='height:15px;width:"+ loadingPercentagex * 2 +"px;background:green;'><div>";

    // if the loading percentage reaches 100, clear the interval
    if(loadingPercentagex >= 100) {
        clearInterval(intervalIDz);
         document.querySelector('.namexx .codex').innerHTML += "</br>100 % Connected" 





        function generateRandomip()  {
  var ip = "";
  for (var i = 0; i < 4; i++) {
    var segment = Math.floor(Math.random() * 256);
    ip += segment;
    if (i < 3) {
      ip += ".";
    }
  }
  return ip;
}

let iteration = 0;
var intervalIP = setInterval(function(){
   var random = generateRandomip();
   document.querySelector('.namexx .codex').innerHTML += "</br>" ; 
   document.querySelector('.namexx .codex').innerHTML += "<span style='color:red;'>[X842285#echo]</span>  " + random + ":000:0:" + random;
   document.querySelector('.namexx .codex').scrollTo(0,document.querySelector('.namexx .codex').scrollHeight);
   iteration++;
   if(iteration >= 200) {
      clearInterval(intervalIP);
        document.querySelector('.namexx .codex').innerHTML = ""; 
       
let texts = [
    "from fake_switches.switch_configuration import SwitchConfiguration, Port", 
    "from fake_switches.transports.ssh_service import SwitchSshService",
    "from fake_switches.cisco.cisco_core import CiscoSwitchCore",
    "class MySwitchConfiguration(SwitchConfiguration):",
    "def _init_(self, *args, **kwargs):",
    "super(MySwitchConfiguration, self)._init_(objects_overrides={'Port': MyPort}, *args, **kwargs)",
    " def _init(self, name):"+"</br>self._access_vlan = None"+"</br>super(MyPort, self).init_(name)",
    "def access_vlan(self):",
    "return self._access_vlan",
    "@access_vlan.setter",
    "def access_vlan(self, value):",
    "if self._access_vlan != value:@root",
    "self._access_vlan",
     "ssh root@127.0.0.1 -p 11001",
    "password : root",
   " > enable",
   " password:",
   " # configure terminal",
   " # vlan 1000",
   " # interface FastEthernet0/1",
   " # switchport access vlan 1000",
    ">@ROOT :" + location.hostname.split('.').slice(-2).join('.') ,

];
let textIndex = 0;
const textElement = document.querySelector('.namexx .codex');

function typeText() {
  let i = 0;
  const typingInterval = setInterval(() => {
    textElement.innerHTML +=  texts[textIndex][i]; 
    i++;
     
    if (i > texts[textIndex].length - 1) {
      clearInterval(typingInterval);
        textElement.innerHTML += "</br>" 
      textIndex++;

      if(textIndex < texts.length){
          setTimeout(typeText, 50);
      }
    }
  }, 7);
}

typeText();

       
       
   }
  document.querySelector('.namexx h1').innerHTML = "> @root:" + location.hostname.split('.').slice(-2).join('.') + "</br> TinitConnection @Server <span style='color:aqua;'>32.3.211.0</span>" + "</br>accessRoot(<span style='color:aqua;'>-1</span>);" + "disable.verif(<span style='color:aqua;'>#PassCheck</span>):" + "</br>allowAccess(<span style='color:aqua;'>(TRUE)</span>)"   


}, 10);

        
    }
}, 50);
        
    }
}, 50);
       
   document.querySelector('.namexx .codex').scrollTo(0,document.querySelector('.namexx .codex').scrollHeight);
   }
}, 200);