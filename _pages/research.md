---
title: "Research"
permalink: /research/
layout: single
author_profile: false
description: "Research overview, working papers, and publications."
---

I am an applied microeconomist specializing in crime and conflict.

## Working Papers

{% assign working_papers = site.publications | where: "status", "working-paper" | sort: "date" | reverse %}
{% if working_papers.size > 0 %}
  <div class="record-grid">
    {% for item in working_papers %}
      {% include publication-card.html item=item %}
    {% endfor %}
  </div>
{% else %}
  <p class="empty-state">Working paper entries will appear here once they are added to <code>_publications/</code>.</p>
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
  <p class="empty-state">Published work will appear here once it is added to <code>_publications/</code>.</p>
{% endif %}
