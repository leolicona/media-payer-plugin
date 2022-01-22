
import { AutoPlay } from "./plugins/AutoPlay.js";
import { MediaPlayer } from "./MediaPlayer/MediaPlayer.js";

/** @const {objet} video - contiene la etiqueta video HTML */
const video = document.querySelector('video');

/** @const {objet} button - contiene la etiqueta button HTML */
const button = document.querySelector('button');

/** @const {objet} btnMute - contiene la etiqueta button HTML */
const btnMute = document.querySelector('#btn-mute');

const player = new MediaPlayer({el: video, plugins: [new AutoPlay(true)]})
console.log('On index', player);

// Creamos una arrow funtion 
button.onclick = () => { 
    player.togglePlay(); 
    console.log('Onclick togglePlay()');
};


btnMute.onclick = () => {
    player.toggleMute();
    console.log('Onclick toggleMute()');
}
