var title = document.querySelector('title');
function draggingOver(e){
  e.preventDefault();

}

function draggingDrop(e){
  e.preventDefault();
  title.style.top = event.pageY + 'px';
  title.style.left = event.pageX + 'px';

}


title.addEventListener('dragover', draggingOver, false)
title.addEventListener('dragdrop', draggingDrop, false)
