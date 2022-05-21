document.addEventListener('click', e => {
    let anchor;
    if(e.target.matches('a')){
        anchor = e.target;
    }else{
        //if somehow clicked inside on elment of a i.e. div class='icon'
        anchor = e.target.closest('a')
    }

    if(anchor != null){

        /*Get all anchors*/
        const allAnchors = [ ...document.querySelectorAll('a')]
        const index = allAnchors.indexOf(anchor); //find the index of selected anchor
        document.querySelectorAll('li').forEach(elem => {
            elem.classList.remove('active')
        })
        /*Set root Element style variable*/
        document.documentElement.style.setProperty('--indicator-position', index);
        anchor.closest('li').classList.add('active'); //set the closest li to be active
    }
})