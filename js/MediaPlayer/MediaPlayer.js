function MediaPlayer(media) {
    this.media = media.el;
    this.plugins = media.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
            },

        }
    
    this.plugins.forEach(plugin => {
        plugin.run(player)
        console.log('On _initPlugin', this._initPlugins )
    });
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
    
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    
    this.media.muted = false;
    console.log(this.media, typeof(this.media));
}

MediaPlayer.prototype.toggleMute = function() {
   /*  if (this.media.muted) {
        this.unmute()
    } else {
        this.mute()
    } */
    console.log('On Mediaplyer.prototype.toggleMute()');
    this.media.muted = !this.media.muted
    
}
console.log(MediaPlayer);

export {MediaPlayer};