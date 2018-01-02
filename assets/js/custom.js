function openNav() {
    var x = document.getElementById('main-nav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

function menuScroll(e) {
    var scrollToo = e.target.dataset.position;
    switch (scrollToo) {
        case 'footer':
            var element = document.getElementById('footer');
                 element.scrollIntoView({
                     behavior: 'smooth',
                     block: 'end'
                 });
            break;
        case 'jobs':
            var element = document.getElementById('jobs');
                 element.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                 });
            break;
        case 'about':
            var element = document.getElementById('about');
                 element.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                 });
            break;
        default :
            var element = document.querySelector('body');
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    }
}


