/**
 * Created by firas on 20/12/16.
 */
// PLAYER VARIABLES

var mp3snd = "assets/dev/bgmusic.mp3";
var bkcolor = "000000";

if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
    document.write('<bgsound src="' + mp3snd + '" loop="1">');
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
    document.write('<object data="' + mp3snd + '" type="application/x-mplayer2" width="0" height="0">');
    document.write('<param name="filename" value="' + mp3snd + '">');
    document.write('<param name="autostart" value="1">');
    document.write('</object>');
}
else {
    document.write('<audio src="' + mp3snd + '" autoplay="autoplay">');
    document.write('<object data="' + mp3snd + '" type="application/x-mplayer2" width="0" height="0">');
    document.write('<param name="filename" value="' + mp3snd + '">');
    document.write('<param name="autostart" value="1">');
    document.write('<embed height="2" width="2" src="' + mp3snd + '" pluginspage="http://www.apple.com/quicktime/download/" type="video/quicktime" controller="false" controls="false" autoplay="true" autostart="true" loop="true" bgcolor="#' + bkcolor + '"><br>');
    document.write('</embed></object>');
    document.write('</audio>');
}
//-->

// MUSIC ON LOOP
$('audio').on('ended', function (e) {
    this.currentTime = 0;
    this.play();
});
