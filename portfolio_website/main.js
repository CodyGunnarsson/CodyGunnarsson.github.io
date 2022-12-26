const body = document.querySelector("body");


function star() {
    let meteorNumber = 10;
        for (let i = 1; i <= meteorNumber; i++) {
        body.innerHTML += `<div class="meteor-${i}"></div>`;
    }
}

setTimeout(() => {star()}, 500);
