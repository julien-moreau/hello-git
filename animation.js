function animate(x) {
    player.position.x += x;
}

function onKeyboardPressed(key) {
    if (key === "right") {
        animate(1)
    }
}