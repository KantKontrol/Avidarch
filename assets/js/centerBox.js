$(document).ready( () => {


    let boxesBottom = $(".pushDivBottom").toArray();

    boxesBottom.forEach(e => {

        let halfWidth = ($(e).width() / 2) * -1;


        $(e).css("margin-left",  halfWidth);
    });
});