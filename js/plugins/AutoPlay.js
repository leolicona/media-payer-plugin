function AutoPlay() {}
console.log('On Atuplay.prototype.run()');
AutoPlay.prototype.run = function (player) {
player.mute();
player.play();


    
}

export {AutoPlay};