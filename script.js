let tl_show = true;
tl = document.getElementsByClassName('three-legged')
fl = document.getElementsByClassName('four-legged')

setInterval(function() {
    if(tl_show){
        tl[0].style.display = 'none';
        fl[0].style.display = 'flex';
    }else{
        tl[0].style.display = 'flex';
        fl[0].style.display = 'none';
    }
    tl_show = !tl_show;
}, 500)