
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", e => {
    e.preventDefault();
    const overlay = document.createElement("div");
    document.body.classList.add("stop-scrolling");
    overlay.classList.add("overlay");
    overlay.innerHTML = document.querySelector("#overlay").innerHTML;
    document.body.append(overlay);

    const close = document.querySelector(".close__overlay");
    close.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.remove("stop-scrolling");
      
    });

    overlay.addEventListener("click", e => {
        e.target == overlay
        document.body.classList.remove("stop-scrolling");
        document.querySelectorAll('.overlay').forEach(e => e.remove());
    })
});


