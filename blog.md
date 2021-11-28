---
layout: default
title: This is the Blog page
---

# {{ page.title }}

This page displays the blog entries in a list view. You can also see that the sample posts are displayed by their tag attributes.


{% for tag in site.tags %}
<h3>{{ tag [0] }}</h3>
<ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>


{% endfor %}
