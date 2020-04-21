$(document).ready(() => {

    setupSlideUp();
    setupSlideDown();


    function setupSlideUp(){

        const targets = $(".anim-box-up").toArray();

        const observer = new IntersectionObserver((entries) => {
        
            entries.forEach(e => {
                

                if(e.intersectionRatio > 0){
                    e.target.style.animation = `boxAnimTop ${$(e.target).data("delay")}`;
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

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(e => {

                if(e.intersectionRatio > 0){
                    e.target.style.animation = `boxAnimBottom ${$(e.target).data("delay")}`;
                }
                else {
                    e.target.style.animation = "none";
                }

            });

        }, {
            threshold: 0
        });

        targets.forEach(target => {
            observer.observe(target);
        });
    }
});