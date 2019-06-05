---
title: b
copyright: true
date: 2019-06-02 14:59:51
tags:
---

ssssss
sssssssssssssssssssssssssssssss

<audio src="https://music.163.com/song/media/outer/url?id=2918954.mp3" id="audio"></audio>

<main id='music'>
    <!-- 开始/暂停按钮 -->
    <div class='playWay play'>
    </div>
    <!-- 播放控制台 -->
    <div class='playControl'>
        <!-- 开始时间 -->
        <span class='startTime'>00:00</span>
        <!-- 播放进度 -->
        <div class='music-control'>
                <!-- 控制条背景 -->
            <div class='music-control-background'></div>
                <!-- 进行中的控制条 -->
            <div class='music-control-playing'>
                    <!-- 圆点 -->
                 <div class='control-rediu'></div>
            </div>
        </div>
        <!-- 结束时间 -->
        <span class='endTime'>00:00</span>
    </div>
</main>
<script src="https://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js"></script>
<script>
    //1、声明需要的变量
  var music = document.getElementById('audio'),//获取audio音频标签
    controlTime = 0,//记录鼠标抬起时候应该播放的时长
    playTime = 0,//用来记录当前播放的时长
    musicTimer,//声明计时器用来记录正在播放的时间
    totalTime;//用来记录总时长
    //2、添加点击事件 进行播放或暂停音乐
    $('.playWay').click(function(){
        if( $(this).hasClass('play')){
            player()
        }else{
            stoped() 
        }
    })
    //3、播放的时候首先判断音乐资源是否加载完成
    function playMusic(){
        var playPromise = music.play();
         //判断资源加载完了播放防止连接报错
         if (playPromise) {
             playPromise.then(function(){
             // 音频加载成功
             // 音频的播放需要耗时
                setTimeout(function(){
                 // 后续操作
                    console.log("done.");
                 }, audio.duration * 1000); // audio.duration 为音频的时长单位为秒
            }).catch(function(e){
             // 音频加载失败
            });
            }
            musicTimer = setInterval(updateTime, 1000);
        }
    //4、获取音乐时长
     music.ondurationchange = function(){
        //把获取的的音乐的总时间添加到结束时间中去
        totalTime = parseInt(this.duration);
         // 添加初始时间
        $('.startTime').text(count(playTime));
         //添加结束时间
        $('.endTime').text(count(totalTime));
    }
    //5、时间转换格式
        function count(time) {
             //分钟
             min = parseInt(time / 60) < 10 ? '0' + parseInt(time / 60) : parseInt(time / 60);
            //秒
            sec = parseInt(time % 60) < 10 ? '0' + parseInt(time % 60) : parseInt(time % 60);
             //把转换的时间return出去
             return min + ':' + sec
        }
    //6、实时更新当前播放时间
    function updateTime(){
          // 判断当前播放时长是否等于总时长
          //如果当前时长等于总时长 清空计时器
     if (playTime == totalTime) {
         clearInterval(musicTimer);
         return;
     } else {
          //获取歌曲正在播放的时间
         playTime = Math.floor(music.currentTime * 100) / 100;
          //如果当前时长小于等于总时长添加进去
         $('.startTime').text(count(playTime));
            musicProgress();
          //  showlyc(staTime);
     }
    }
    //7、设置音乐进度条
    function musicProgress(){
        $('.music-control-playing').css('width', playTime / totalTime * 480)
    }
    //8、播放音乐
    function player(){
        playMusic();
        $('.playWay').attr('class','playWay stop');
    }
    //9、暂停音乐
    function stoped(){
         music.pause();
          clearInterval(musicTimer);
         $('.playWay').attr('class','playWay play')
    }
    //10、可拖动进度条
        //10.1鼠标按下
    $('.control-rediu').on('mousedown',function(){
         //鼠标按下的时候声明一个变量获取进度条距离进度条容器之间的距离
         var playCount = $('.music-control-background').offset().left+10;
         ('playControl')[0];
         //鼠标按下的时候清空计时器 让音乐播放时间和进度条不再增加
        stoped()
         //鼠标按下的时候声明一个变量记录当前的播放时间
        var downPlayTime = music.currentTime;
        //10.2鼠标移动
        $(document).on('mousemove',function(e){
         //鼠标移动 进度条跟着移动
         //e.clientX代表鼠标距离左边窗口的距离
         //(Box.getBoundingClientRect().left + 80 + 10)    代表进度条容器距左边窗口的距离
         var x = e.clientX -playCount;
         x = (x < 0) ? 0 : (x > 480) ? 480 : x;
         $('.music-control-playing').css('width',x);
         //获取鼠标抬起时应该播放的当前时长
         controlTime = parseInt(x / 480 * totalTime)
        })
        //10.3鼠标抬起
        $(document).on('mouseup',function(){
            //鼠标抬起清空鼠标移动和抬起事件
           /*
           如果不清空抬起事件鼠标就一直处于抬起状态 暂停的话你会发现时间会一直处于你抬起的那个时间点
           如果不清空鼠标就一直处于移动状态
           */
            $(document).off('mousemove')
            $(document).off('mouseup')
            //更新当前播放时间
             music.currentTime = controlTime;
            //更新当前显示时间
            $('.startTime').text(count(controlTime));
             player()
        })
    })
    //11、点击进度条
    $('.music-control-background').on('click',function(e){
        //11.1清空计时器
        clearInterval(musicTimer);
        //11.2声明一个变量记录当前点击的位置
        var rate = e.clientX - ($('.music-control-background').offset().left+10)
        rate = rate > 480 ? 480 : rate;
        //11.3设置当前播放进度到点击的地方
        $('.music-control-playing').css('width',rate);
        //11.4获取点击进度条后应该播放的进度
         controlTime = parseInt(rate / 480 * totalTime)
        //11.5同步当前播放时间进度
          music.currentTime = controlTime;
        //11.6同步当前播放时间显示
        $('.startTime').text(count(controlTime));
        //11.7进行播放
        player()
    })
    //12、音乐播放完毕进行初始化
    music.onended = function(){
        //12.1暂停音乐
        stoped();
        //12.2当前播放时间清零
        playTime = 0;
        $('.startTime').text(count(playTime));
        //12.3进度条清零
        $('.music-control-playing').css('width',0)
    }
</script>
