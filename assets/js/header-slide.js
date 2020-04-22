$(document).ready(() => {

    let options = {
        rootMargin: '0px',
        threshold: 0
    }

    const targets = $(".anim-header").toArray();

    const observer = new IntersectionObserver(function(entries, observer) {
        
        entries.forEach(e => {
            if(e.intersectionRatio > 0){
                e.target.style.animation = "headerAnimation 1s";
            }
            else {
                e.target.style.animation = "none";
            }
        });
       

    }, options);


    targets.forEach(target => {
        observer.observe(target);
    });
});