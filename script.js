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
