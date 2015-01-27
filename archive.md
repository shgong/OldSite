---
layout: default
title: Archive
---

<div class="text-muted">
{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
</div>