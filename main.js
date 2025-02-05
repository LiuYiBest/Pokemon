const string = `
/* 让我们动手来画一只皮卡丘吧！
接下来我要展示神奇的技巧！*/

*{box-sizing: border-box;margin: 0;padding: 0}
/*样式初始化*/
.main {
    background: #ffdc2e;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute
}
.pik {
    width: 620px;
    height: 680px;
    position: relative;
}
/*开始画长长的耳朵*/
.ear {
    border-radius: 100%;
    background: #ffdc2e;
    border: 4px solid #000;
    margin-left: -42px;
    position: relative;
    overflow: hidden;
    position: absolute;
}
/*这是左边的长耳朵*/
.ear-left {
    width: 326px;
    height: 68px;
    margin-top: 116px;
    transform: rotate(43deg);
}
.ear-left::before {
    content: '';
    width: 123px;
    height: 48px;
    position: absolute;
    top: 30px;
    left: -10px;
    background: #000;
    transform: rotate(39deg);
}
/*这是右边的长耳朵*/
.ear-right {
    width: 298px;
    height: 70px;
    margin-top: 116px;
    right: -22px;
    transform: rotate(-36deg);
}
.ear-right::before {
    content: '';
    width: 125px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: -11px;
    background: #000;
    transform: rotate(-43deg);
}
/*画皮卡丘的圆脸*/
.head {
    background: #ffdc2e;
    border-radius: 50% 50% 50% 50% / 36% 36% 54% 54%;
    border: 5px solid #000;
    border-bottom-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 48%;
    position: relative;
    margin: 170px auto 0;
    z-index: 4;
}
.head::after {
    border: 0px solid #ffdc2e;
    background: #e5961d;
    border-radius: 50% 50% 50% 50% / 100% 100% 0 0%;
    border-width: 5px;
    content: '';
    display: block;
    width: 27%;
    height: 20px;
    position: absolute;
    bottom: -1px;
    transform: scale(1, -1);
    border-left-width: 50px;
    border-right-width: 50px;
    border-top-width: 0px;
    border-bottom-width: 20px;
}
/*红色的脸颊*/
.cheek {
    border-radius: 0 60%;
    border: 5px solid #000;
    background: #ffdc2e;
    width: 120px;
    height: 135px;
    position: absolute;
    transform: rotate(31deg);
    left: -22px;
    bottom: 54px;
    border-right-color: transparent;
    border-top-color: transparent;
    overflow: hidden;
}
.cheek:nth-child(2) {
    left: initial;
    right: -15px;
    bottom: 38px;
    transform: scale(1, -1);
    transform: rotate(-122deg);
}
.cheek::before {
    content: '';
    display: block;
    width: 75px;
    height: 70px;
    background: #fe3310;
    border-radius: 45% 55% 50% 50% / 50% 50% 50% 50% ;
    border: 3px solid  #000;
    position: absolute;
    left: 0;
    top: 50%;
}
.cheek.offset::before {
    left: -12px;
    top: 42%;
}
.face{
    width: 100%; 
    z-index: 1;
    text-align: center;
}
/*会动的大眼睛*/
.eyes{
    display: flex; 
    width: 100%; 
    justify-content: space-around; 
    align-self: center; 
    z-index: 1;
    background: #ffdb2a;
    padding-top: 5px;
}
.eye {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;

}
.eye::before{
    content: '';
    display: block;
    background: #fff;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;
    top: 4px;
    left: 8px;
    animation:eyeMove 3s infinite;
}
@keyframes eyeMove{
    0%,100%{
      top:4px;
      left:8px;
    }
    30%,60%,70%{
      top: 4px;
      left: 14px;
    }
    40%{
      top: 4px;
      left: 8px;
    }
    50%{
      top: 6px;
      left: 18px;
    } 
     80%,90%{
      top: 6px;
      left: 12px;
    }
  }
  /*摇摆的小鼻子*/
.nose {
    width: 15px;
    height: 7px;
    border-radius: 51% 49% 49% 51% / 34% 34% 66% 66% ;
    border-color: #000;
    background: #000;
    align-self: flex-end;
    animation: wave 200ms infinite linear;
    cursor: pointer;
    transform-origin: 50% 100%;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(6deg);
    }
    66%{
        transform: rotate(-6deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.reversed{
    transform: scale(-1, 1);
}
/*小嘴巴*/
.mouth {
    width: 53px;
    height: 35px;
    display: inline-block;
    margin: 7px 0 0;
}

#mouth1{
    transform: rotate(-25deg);
    border-bottom: 5px solid #000; 
    border-bottom-left-radius: 40px 27px;
}
#mouth2{
  transform: rotate(25deg); 
  border-bottom: 5px solid #000;
     border-bottom-right-radius: 40px 27px;
}

/*可爱的皮卡丘完成啦~*/
`


const player = {
    id: undefined,
    n: 1,
    time: 0,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
        '#btnSlow': 'slow',
        '#bunNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }

        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return;
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 20
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 10
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}
// player.init()















