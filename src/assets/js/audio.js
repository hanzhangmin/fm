// var audio = document.getElementsByTagName("audio");
// // 暂停函数
// function pauseAll() {
//     var self = this;
//     [].forEach.call(audio, function(i) {
//         // 将audios中其他的audio全部暂停
//         i !== self && i.pause();
//     })
// }
// // 给play事件绑定暂停函数
// [].forEach.call(audio, function(i) {
//     i.addEventListener("play", pauseAll.bind(i));
// })
export function getTime(time) {
    var b = time.split(".");
    var x = Math.floor(parseInt(b[0]) / 60); //获取分钟
    var y = parseInt(b[0]) % 60;
    return x + ":" + y
}