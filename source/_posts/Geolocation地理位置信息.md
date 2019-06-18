---
title: Geolocation地理位置信息
copyright: true
tags:
  - - html
  - - html5
categories:
  - - html
    - html5
date: 2019-06-18 14:02:41
---

# 简介

{% blockquote %}
用于浏览器上获取当前用户的地理位置。
{% endblockquote %}

## 一、Geolocation API

{% blockquote %}
window.navigator.geolocation
{% endblockquote %}

{% codeblock  %}

<!-- 返回一个geolocation对象 -->

    console.log(window.navigator.geolocation);<!-- Geolocation -->

{% endcodeblock %}
{% asset_img 1.png %}

{% blockquote %}
使用 Geolocation 里面的 getCurrentPositon 可以获取地理位置信息,但是需要至少传入两个参数,一个成功的,一个失败的。
{% endblockquote %}

## 二、获取当前地理位置

{% blockquote %}
navigator.geolocation.getCurrentPosition(sur,err,obj);
{% endblockquote %}

<center><font color='#3333' size='3'>成功的回调</font></center>
{% codeblock sur回调的参数option %}
accuray:经纬度的经度
altitude：null 海拔
altitudeAccuracy:null 海拔的经度
heading:null 设备前进的方向
latitude:34.0653347 纬度
longitude:-118.2438909999999 经度
speed:null 设备前进速度
timestamp:获取地理位置信息的时间
{% endcodeblock %}

<center><font color='#3333' size='3'>Demo</font></center>
{% codeblock  %}
window.navigator.geolocation.getCurrentPosition(sur, err);
    function sur() {
        console.log('获取位置成功');
    }
    function err() {
        console.log('获取位置失败');
    }
{% endcodeblock %} 
{% asset_img 2.png %}

{% blockquote %}
由于谷歌内核的限制我们只有翻墙才能获取地理位置信息 这里我们在 iE 浏览器中测试.
{% endblockquote %}

{% asset_img 3.png %}

{% blockquote %}
这里可以看到,打印的是获取位置成功,但是我们怎么获取到位置信息呢.
{% endblockquote %}

{% codeblock  %}

<!-- 成功的回调函数中接收一个position对象  里面包含我们需要获取的信息 -->

window.navigator.geolocation.getCurrentPosition(sur, err);
function sur(position) {
console.log(position);<!-- [object Position]: {coords: Object, timestamp: 1546942019507} -->
}
{% endcodeblock %}
{% asset_img 4.png %}

{% blockquote %}
纬度和经度
{% endblockquote %}

{% codeblock  %}
window.navigator.geolocation.getCurrentPosition(sur, err);
function sur(position) {

console.log(position.coords.latitude);<!-- 纬度 -->

console.log(position.coords.longitude);<!-- 经度 -->
}
{% endcodeblock %}
{% asset_img 5.png %}

<center><font color='#3333' size='3'>失败的回调</font></center>
{% codeblock  err回调的参数error %}
code属性：
  1、用户拒绝了位置服务。
  2、获取不到位置信息。
  3、获取信息超时。
message属性：错误信息字符串。
{% endcodeblock %}

<left><font color='#3333' size='3'>它有一个 positionError 对象</font></left>
{% codeblock %}
window.navigator.geolocation.getCurrentPosition(sur, err);

    function err(positionError) {
        console.log(positionError);
    }

{% endcodeblock %}

{% blockquote %}
因为我点击禁止了 所以它返回了 1
{% endblockquote %}

{% asset_img 6.png %}

<center><font color='#3333' size='3'>可选参数</font></center>
{% codeblock  err回调的参数error %}
enableHighAccuracy:是否要求高精度的地理位置信息。
timeout:超时限制。
maximumAge:缓存有效时间，若为0则无条件重新获取新地理信息。
{% endcodeblock %}
<left><font color='#3333' size='3'>设置时间请求</font></left>
{% codeblock  err回调的参数error %}
 var obj = {
        timeout: 2000， <!-- 获取地理位置响应时间   两秒 -->
         maximumAge:100000 <!-- 缓存有效时间为10秒  十秒内重复获取 依旧是第一次获取的信息 -->
    }
    window.navigator.geolocation.getCurrentPosition(sur, err, obj);
    function sur(position) {
        console.log(position);
    }
    function err(positionError) {
        console.log(positionError);
    }

{% endcodeblock %}

{% asset_img 7.png %}
{% blockquote %}
获取信息超时
{% endblockquote %}

## 三、监听位置信息

{% codeblock  err回调的参数error %}
var id = navigator.geolocation.watchPosition(sur, err, obj);

<!-- 定期持续的自动获取用于的当前地理位置信息，并同计时器一样有个位置标识。 -->

{% endcodeblock %}

## 四、停止获取位置信息

{% codeblock  %}
navigator.geolocation.clearWatch(id);
{% endcodeblock %}
