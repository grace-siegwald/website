function poppinator(element) {
    if (element.classList.contains("popped")){
        element.classList.remove("popped")
        element.classList.add("unpopped")
    }
    else {
        element.classList.remove("unpopped")
        element.classList.add("popped")
    }
}