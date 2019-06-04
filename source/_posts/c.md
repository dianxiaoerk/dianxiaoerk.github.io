---
title: c
copyright: true
date: 2019-06-03 21:58:26
tags:
---

hahahaha
<audio src="https://music.163.com/song/media/outer/url? id=2918954.mp3" id="audio0"></audio>
<input type="button" onclick="paly_audio0();" value="使用JS播放" />

<script>
    function paly_audio0() {
        //找到音频
        var audio0 = document.getElementById("audio0");
        if (audio0 != null) {
            audio0.play();
        }
    }
</script>
