// (function(){
//     var a = document.querySelector('#zagolovok'), b = null, P = 0;
//     window.addEventListener('scroll', Ascroll, false);
//     document.body.addEventListener('scroll', Ascroll, false);
//     function Ascroll() {
//       if (b == null) {
//         var Sa = getComputedStyle(a, ''), s = '';
//         for (var i = 0; i < Sa.length; i++) {
//           if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//             s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//           }
//         }
//         b = document.createElement('div');
//         b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//         a.insertBefore(b, a.firstChild);
//         var l = a.childNodes.length;
//         for (var i = 1; i < l; i++) {
//           b.appendChild(a.childNodes[1]);
//         }
//         a.style.height = b.getBoundingClientRect().height + 'px';
//         a.style.padding = '0';
//         a.style.border = '0';
//       }
//       var Ra = a.getBoundingClientRect(),
//           R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#blockbutton').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
//       if ((Ra.top - P) <= 0) {
//         if ((Ra.top - P) <= R) {
//           b.className = 'stop';
//           b.style.top = - R +'px';
//         } else {
//           b.className = 'sticky';
//           b.style.top = P + 'px';
//         }
//       } else {
//         b.className = '';
//         b.style.top = '';
//       }
//       window.addEventListener('resize', function() {
//         a.children[0].style.width = getComputedStyle(a, '').width
//       }, false);    
//     }
//     })()

// КНОПКА
var bb= document.querySelector('#blockbutton')

bb.onmouseover=function(e)
{
    document.getElementById('buttonzaya').style.backgroundColor='blue'
    document.getElementById('buttonzaya').style.color='white'
    document.getElementById('buttonzaya').style.transition=".5s"
}

bb.onmouseout=function(e)
{
    document.getElementById('buttonzaya').style.backgroundColor='white'
    document.getElementById('buttonzaya').style.color='black'
    document.getElementById('buttonzaya').style.transition=".5s"
}

//Форма
var bz=document.querySelector('#buttonzaya')

bz.onclick=function()
{
    document.getElementById('forma').style.display="block"
    document.getElementById('forma').style.animation= "move-left 1.5s ease-out 0s"
    document.getElementById('forma').style.zIndex="100"
}

var c=document.querySelector('#closeBtn')
c.onclick=function()
{
    document.getElementById('forma').style.animation= "move-right 1.5s ease-out 0s"
    document.getElementById('forma').style.animationFillMode="forwards"
}

///При наводе на ссылку

var sa=document.querySelector("#ssilkaAttach")

sa.onmouseover= function()
{
    document.getElementById('paperclip').style.color="pink"
    document.getElementById('paperclip').style.transition="1s"
}

sa.onmouseout= function()
{
    document.getElementById('paperclip').style.color="gray"
    document.getElementById('paperclip').style.transition="1s"
}

//При нажатии на почту

var mg = document.querySelector("#mailGroup")
var myAudio1 = document.getElementById("myAudio1");
var isPlaying1 = false;
myAudio1.volume = 0.25;
mg.onclick = function togglePlay1() 
{
  isPlaying1 ? myAudio1.pause() : myAudio1.play();
};

myAudio1.onplaying = function() 
{
  isPlaying1 = true;
};

myAudio1.onpause = function() 
{
  isPlaying1 = false;
};

//При нажатии на телефон
var tg = document.querySelector("#telGroup")
var myAudio2 = document.getElementById("myAudio2");
var isPlaying2 = false;
myAudio2.volume = 0.25;
tg.onclick = function togglePlay2()
{
    isPlaying2 ? myAudio2.pause() : myAudio2.play();
}
 
myAudio2.onplaying = function() 
{
  isPlaying2 = true;
};

myAudio2.onpause = function() 
{
  isPlaying2 = false;
};

//Кнопка меню

let menuBtn=document.querySelector('.menu-list')
let navList=document.querySelector('.nav-list')

var isClose=true;

menuBtn.onclick = function(){

  if(isClose == true)
  {
    openMenu();
  }
  else
  {
    closeMenu();
  }
}

function openMenu()
{
  navList.style.animation= "openMenuList 2s ease-out 0s"
  navList.style.flexDirection= "column";
  menuBtn.style.animation= "rotation 1s ease-out 0s"
  isClose = false;
}

function closeMenu()
{
  navList.style.animation= "closeMenuList 1.5s ease-out 0s"
  navList.style.flexDirection= "row";
  menuBtn.style.animation= "rotationBack 1s ease-out 0s"
  isClose = true;
}


let naf = document.querySelector('.name-and-family')

naf.onclick = function zapolnenie1()
{
  naf.style.color = "white"
}

let nc = document.querySelector('.name-company')

nc.onclick = function zapolnenie2()
{
  nc.style.color = "white"
}

let tc = document.querySelector('.tel-company')

tc.onclick = function zapolnenie3()
{
  tc.style.color = "white"
}

let ec = document.querySelector('.email-company')

ec.onclick = function zapolnenie4()
{
  ec.style.color = "white"
}

let pd = document.querySelector('.project-descriptions')

pd.onclick = function zapolnenie5()
{
  pd.style.color = "white"
}

var sad=document.querySelector("#ssilkaAttachDown")

sad.onmouseover= function()
{
    document.getElementById('paperclipDown').style.color="pink"
    document.getElementById('paperclipDown').style.transition="1s"
}

sad.onmouseout= function()
{
    document.getElementById('paperclipDown').style.color="gray"
    document.getElementById('paperclipDown').style.transition="1s"
}

// if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
//   var dpt = window.devicePixelRatio;
//   var widthM = window.screen.width * dpt;
//   var widthH = window.screen.height * dpt;
//   document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
// }