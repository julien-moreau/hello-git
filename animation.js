function ease(x) {

}

function animate(x) {
    if (!checkCollisions()) {
        const a = ease(x);
        player.position.x += a;
    }
}

function onKeyboardPressed(key) {
    if (key === "right") {
        animate(1);
    }
}