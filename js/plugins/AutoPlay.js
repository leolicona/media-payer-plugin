function AutoPlay() {}
console.log('On Atuplay.prototype.run()', AutoPlay());
AutoPlay.prototype.run = function (player) {
    if(!player.muted) {
        player.muted = true;
    }
    player.play();   
}

export {AutoPlay};