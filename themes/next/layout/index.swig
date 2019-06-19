{% extends '_layout.swig' %}
{% import '_macro/post.swig' as post_template %}
{% import '_macro/sidebar.swig' as sidebar_template %}

{% block title %}
{{ config.title }}{% if theme.index_with_subtitle and config.subtitle %} - {{config.subtitle }}{% endif %}
{% endblock %}
{% block page_class %}
  {% if is_home() %}page-home{% endif -%}
  <link href="http://mydomain.com/my-next-page.htm" rel="prerender" />
{% endblock %}

{% block content %}

  <section id="posts" class="posts-expand">
    {% for post in page.posts %}
      {{ post_template.render(post, true) }}
    {% endfor %}
  </section>

  {% include '_partials/pagination.swig' %}
{% endblock %}
{% block sidebar %}
  {{ sidebar_template.render(false) }}

<div id='Obscuration'></div>
<audio id='music' src='https://music.163.com/song/media/outer/url?id=5255640.mp3'>
<script src='https://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js'></script>
<script>
  var music = document.getElementById('music');
  var Obscuration = document.getElementById('Obscuration');
   $('body').css({
      "overflow-y":"hidden"
    })
  $('#Obscuration').click(function(){
    
    music.play();
    $(this).fadeOut(3000,function(){
      $('body').css({
           "overflow": "scroll"
    })
    })
  })
</script>

{% endblock %}
