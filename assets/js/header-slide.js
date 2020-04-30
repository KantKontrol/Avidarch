$(document).ready(() => {

    positionHeaders = (headers) => {
        let vh = $(window).innerHeight();

        let pos1 = Math.floor(vh * .10);
        let pos2 = Math.floor(vh * .18);
        let pos3 = Math.floor(vh * .15);
        
        headers.forEach(h => {
            switch($(h).attr("id")){
                case("homeHeader"):
                    $(h).css("top", pos3);
                    break;
                case("aboutHeader"):
                    $(h).css("top", pos2);
                    break;   
                case("projHeader"):
                    $(h).css("top", pos1); 
                    break;
                case("contHeader"):
                    $(h).css("top", pos1);
                    break;
                default:
                    console.log("Failed to position headers");
            }
        });
    }

    let options = {
        rootMargin: '0px',
        threshold: 0
    }

    const targets = $(".anim-header").toArray();

    positionHeaders(targets);

    const observer = new IntersectionObserver(function(entries, observer) {
        
        entries.forEach(e => {
            if(e.intersectionRatio > 0){
                e.target.style.animation = "headerAnimation 1s";
                //observer.unobserve(e.target);
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


