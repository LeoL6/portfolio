function changeActiveElement(element) {
    var oldElement = document.getElementById("active");
    oldElement.setAttribute("id", "inactive");

    element.setAttribute("id", "active");
}