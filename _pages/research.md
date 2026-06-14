---
title: "Research"
permalink: /research/
layout: single
author_profile: false
description: "Research overview, working papers, and publications."
---

## Working Papers

{% assign working_papers = site.publications | where: "status", "working-paper" | sort: "date" | reverse %}
{% if working_papers.size > 0 %}
  <div class="record-grid">
    {% for item in working_papers %}
      {% include publication-card.html item=item %}
    {% endfor %}
  </div>
{% else %}
  <p class="empty-state"></p>
{% endif %}

## Publications

{% assign published_work = site.publications | where: "status", "published" | sort: "date" | reverse %}
{% if published_work.size > 0 %}
  <div class="record-grid">
    {% for item in published_work %}
      {% include publication-card.html item=item %}
    {% endfor %}
  </div>
{% else %}
  <p class="empty-state"></p>
{% endif %}
