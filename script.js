function scrollToElement(elementSelector, instance){
    instance=0;
    //select all elements that match the selector
    const elements= document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({behavior: "smooth" });
    }
}

const link1=document.getElementById("link1");
const link2=document.getElementById("link2");
const link3=document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.Features');
});

link2.addEventListener('click', () => {
    scrollToElement('.pricing');
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});