$(document).ready(() => {

    const navBar = document.querySelector("nav");
    const sectionOne = $("#about")[0];



    const navObserver = new IntersectionObserver((entries) => {
      //  console.log(entries);
        entries.forEach(e => {
            if(e.isIntersecting){
                console.log("nav in about");
            }
        });
    }, {
        root: document.querySelector("body"),
        rootMargin: "0px",
        threshold: 0
    });

  //  navObserver.observe(navBar);


});