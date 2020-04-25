$(document).ready(() => {

    setupSlideUp();
    setupSlideDown();


    function setupSlideUp(){

        const targets = $(".anim-box-up").toArray();
        

        const observer = new IntersectionObserver((entries, observer) => {
        
            entries.forEach(e => {
                

                if(e.intersectionRatio > 0){
                    
                    e.target.style.animation = `boxAnimTop ${$(e.target).data("delay")}`;
                    observer.unobserve(e.target);
                }
                else {
                    e.target.style.animation = "none";
                }

            });

        }, {
            rootMargin: '50px',
            threshold: 0
        });

        targets.forEach(target => {
            observer.observe(target);
        });
    }


    function setupSlideDown(){

        const targets = $(".anim-box-down").toArray();

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(e => {

                if(e.isIntersecting){
                    e.target.style.animation = `boxAnimBottom ${$(e.target).data("delay")}`;
                    observer.unobserve(e.target);
                }
                else {
                    e.target.style.animation = "none";
                }

            });

        }, {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0
        });

        targets.forEach(target => {
            observer.observe(target);
        });
    }
});