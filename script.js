// 在 script.js 中
const bgm = document.getElementById('bgm');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false; // 标志位，记录播放状态

// 定义一个函数，用来尝试播放音乐
function attemptPlay() {
    if (isPlaying) return; // 如果已经在播放，则不做任何操作

    bgm.play().then(() => {
        isPlaying = true;
        musicBtn.textContent = '🔊'; // 可选：改变按钮样式，表示音乐已开启
        console.log('音乐开始播放');
        // 播放成功后，可以移除所有播放相关的事件监听，避免重复触发
        document.removeEventListener('click', attemptPlay);
        document.removeEventListener('touchstart', attemptPlay);
    }).catch(error => {
        // 如果播放失败（比如用户点击太快），不做处理，等待下一次用户手势
        console.log('播放失败，等待用户交互', error);
    });
}

// 将播放动作绑定到任何一次用户点击或触摸页面的行为上
document.addEventListener('click', attemptPlay);
document.addEventListener('touchstart', attemptPlay);
new Swiper('.swiper',{direction:'vertical'});const p=document.getElementById('particles');for(let i=0;i<80;i++){let d=document.createElement('div');d.className='dot';d.style.left=Math.random()*100+'vw';d.style.animationDelay=Math.random()*12+'s';p.appendChild(d)}const a=document.getElementById('bgm');const b=document.getElementById('musicBtn');b.onclick=()=>{if(a.paused){a.play();b.classList.add('rotate')}else{a.pause();b.classList.remove('rotate')}}
