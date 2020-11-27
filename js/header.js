function setMenuEventListener() {
    let elements = document.getElementsByClassName("nav-item");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', changeActiveMenu, true);
    }
}

function changeActiveMenu(){
    // dropdown menu가 있는 item 선택 시 skip
    if(hasClass(event.target.parentNode, "nav-item") &&
        hasChildWithClass(event.target.parentNode, "dropdown-menu")){
        return;
    }

    let elements = Array.from(document.getElementsByClassName("active"));
    for (let element of elements) {
        removeClassActive(element);
    }
    addClassActive(event.target.parentNode);
    // dropdown item을 선택한 경우, 해당 navigation item도 선택 상태로 변경
    if( event.target.classList.contains("dropdown-item") ) {
        addClassActive(event.target.parentNode.parentNode.parentNode);
    }
}

function addClassActive(element){
    element.classList.add("active");
}

function removeClassActive(element){
    element.classList.remove("active");
}

function setMenuVisibility(isVisible){
    let element = document.getElementById("navbar-menu");
    if(isVisible){
        element.classList.remove("hidden");
    }
    else{
        element.classList.add("hidden");
    }
}

function openDropdownMenu(element){
    let childElement = getChild(element, "dropdown-menu");
    if(childElement && !childElement.classList.contains("show"))
        childElement.classList.add("show");
}

function closeDropdownMenu(element){
    let childElement = getChild(element, "dropdown-menu");
    if(childElement && childElement.classList.contains("show"))
        childElement.classList.remove("show");
}

function toggleDropdownMenu(){
    let elements = document.getElementsByClassName("dropdown-toggle");
    for (let element of elements) {
        let siblingElement = getSibling(element, "dropdown-menu");
        if(siblingElement && !siblingElement.classList.contains("show"))
            siblingElement.classList.add("show");
        else
            siblingElement.classList.remove("show");
    }
}