window.addEventListener('DOMContentLoaded', ()=>{
    const transitionEl = document.querySelector('.transition');
    const links = document.querySelectorAll('.transition__href');

    setTimeout(()=>{
        transitionEl.classList.remove('transition--active');
    },500);

    for (let i=0; i<links.length; i++){
        const anchor = links[i];
        anchor.addEventListener('click', e=>{
            e.preventDefault();
            let target = e.target;
            console.log(target);

            transitionEl.classList.add('transition--active');

            setTimeout(()=>{
                window.location.href = target;
            },500);
        });
    }
});