function animate(x) {
    if (!checkCollisions()) {
        player.position.x += x;
    }
}

function onKeyboardPressed(key) {
    if (key === "right") {
        animate(1);
    }
}