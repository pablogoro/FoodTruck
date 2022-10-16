function active(event) {
    // console.log(event.target)
    remove();
    event.target.classList.add("active");
    event.target.setAttribute('id', 'active');


}

function active2(event) {

    // console.log(event.target)

    event.target.classList.add("active2");
    event.target.setAttribute('id', 'active2');
    document.getElementById("active2").classList.remove("active2");
    document.getElementById("active2").removeAttribute("id");

    closeNav();

}

function remove() {

}


function responsiveNav() {


    document.getElementById("icon").classList.toggle("invisible");

}



function closeNav() {


    document.getElementById("icon").classList.add("invisible");

}