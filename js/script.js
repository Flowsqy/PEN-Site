var bodyElement;

function init() {
    bodyElement = document.getElementsByTagName("body")[0];
    var imgs = document.getElementsByClassName("section-img");
    for (var index = 0; index < imgs.length; index++){
        img = imgs[index];
        img.addEventListener("click", clickImage);
    }
}
window.addEventListener("load", init);

function clickImage(){
    // Hide all content
    var childs = bodyElement.children;
    for(var index = 0; index < childs.length; index++){
        var child = childs[index];
        child.style.display = "none";
    }
    // Add the image
    var mainContainer = document.createElement("div");
    mainContainer.className = "fullsize-image-container";
    var imageContainer = document.createElement("div");
    imageContainer.className = "fullsize-image-container";
    var img = document.createElement("img");
    img.className = "fullsize-image";
    img.src = this.src;
    imageContainer.appendChild(img);
    mainContainer.appendChild(imageContainer)
    bodyElement.appendChild(mainContainer);
    // Add cross
    var crossContainer = document.createElement("div");
    crossContainer.className = "fullsize-cross-container";
    var crossItem = document.createElement("p");
    crossItem.className = "fullsize-cross-item";
    crossItem.innerText = "X";
    crossContainer.addEventListener("click", clickCross);
    crossContainer.appendChild(crossItem);
    bodyElement.appendChild(crossContainer);
}

function clickCross(){
    var childs = bodyElement.children;
    for(var index = 0; index < 3; index++){
        var child = childs[index];
        child.removeAttribute("style")
    }
    bodyElement.removeChild(childs[3]);
    bodyElement.removeChild(childs[3]);
}