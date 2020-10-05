let isActive = '';
const started = document.getElementById('started');
const pro = document.getElementById('pro');

if (!isActive) {
    started.classList.add('chooser-active');

}

const clickHandler = (val) => {
    

    isActive = val

    if (isActive === 'starter') {
        started.classList.add('chooser-active');
        pro.classList.remove('chooser-active');
        
    } else {
        pro.classList.add('chooser-active');
        started.classList.remove('chooser-active');
    }
}
