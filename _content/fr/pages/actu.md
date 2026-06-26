---
translationKey: actu
order: 6
lang: fr
createdAt: 2026-06-08T11:47:00.000Z
ldType: WebPage
name: Actu'
eleventyNavigation:
  add: Nav
---

# Actu'

{% sectionCollection  %}

{% collection collection="actus", filters=[{"value":4,"by":"first"}], sortCriterias=[{"direction":"desc","by":"datePublished"}], type="layout-none", class="columns", itemPartial="card-actu" %}{% endcollection %}

{% endsectionCollection %}
