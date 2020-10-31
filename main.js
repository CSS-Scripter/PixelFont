function scrollToElement(id) {
    console.log(id);
    var element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({behavior: "smooth", alignToTop: true, inline: "nearest"})
}