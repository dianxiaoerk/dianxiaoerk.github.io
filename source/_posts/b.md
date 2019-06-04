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
            musicTimer = setInterval(updateTime, 200);
        }
    //4、获取音乐时长
     music.ondurationchange = function () {
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
         playTime = parseInt(music.currentTime);
          //如果当前时长小于等于总时长添加进去
         $('.startTime').text(count(playTime));
            musicProgress();
          //  showlyc(staTime);
     }
    }
    //7、设置音乐进度条
    function musicProgress(){ //----------------
        $('.music-control-playing').css('width',playTime / totalTime * 460)
        console.log(playTime / totalTime * 460)
    }
    //、播放音乐
    function player(){
        playMusic();
        $('.playWay').attr('class','playWay stop');
    }
    //、暂停音乐
    function stoped(){
         music.pause();
          clearInterval(musicTimer);
         $('.playWay').attr('class','playWay play')
    }
</script>

5555555555555555
