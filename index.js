var iconShareBlock = document.querySelector('.icon-share'),
    iShare = document.querySelector('.i-share'),
    networks = document.querySelector('.network');

iconShareBlock.addEventListener('click',function() {
    if((networks.style.visibility ==='hidden') ||(networks.style.visibility==='')) {
        networks.style.visibility = 'visible';
        this.style.backgraound = 'var(--Desaturated-Dark-Blue)';
        iShare.style.fill = 'var(--Light-Grayish-Blue)';
        return;
    }
    networks.style.visibility = 'hidden';
    this.style.backgraound= '';
    iShare.style.fill='';
});