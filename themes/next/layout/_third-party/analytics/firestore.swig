{% if theme.firestore.enable %}
  <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
  <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase-firestore.js"></script>
  {% if theme.firestore.bluebird %}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.5.1/bluebird.core.min.js"></script>
  {% endif %}

{% endif %}
