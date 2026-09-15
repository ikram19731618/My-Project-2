
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.onclick=()=>{links.classList.toggle('open'); links.style.display=links.classList.contains('open')?'flex':'none';links.style.flexDirection='column';links.style.position='absolute';links.style.top='70px';links.style.left='16px';links.style.right='16px';links.style.padding='20px';links.style.background='#0b1a2b';links.style.border='1px solid rgba(255,255,255,.12)'};
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(links)links.style.display=''}));
