---
layout: default
title: This is the Blog page
---

# {{ page.title }}


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.date }} - {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>