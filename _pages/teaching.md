---
layout: single
title: "Teaching"
permalink: /teaching/
author_profile: false
description: "Teaching activity of Francesco Sbrana."
---

Teaching activity, courses, and workshops will be listed here.

{% assign teaching_items = site.teaching | sort: "date" | reverse %}
{% if teaching_items.size > 0 %}
  <div class="record-grid">
    {% for item in teaching_items %}
      {% include teaching-card.html item=item %}
    {% endfor %}
  </div>
{% else %}
  <p class="empty-state">Teaching entries will appear here once they are added to <code>_teaching/</code>.</p>
{% endif %}
