---
translationKey: index
order: 1
lang: fr
createdAt: 2026-06-08T10:53:00.000Z
ldType: WebPage
name: Accueil
eleventyNavigation:
  add: Nav
pageStyles: |-
  main > h1::before {
    inset: 0 0 50%;
  }
---

<!-- {% image src="/_images/compagnie-3637-logo-black-01.svg", alt="Compagnie 3637", width=300, class="h3 mx-auto", loading="eager", wrapper="h1" %} -->
<h1 aria-label="Compagnie 3637">{% partial "logo.njk", { style: "inline-size:calc(2*var(--step-6-8));" } %}</h1>

Depuis 2008, à Bruxelles, la Compagnie 3637 explore le théâtre - et bien plus encore - pour et autour des jeunes avec le désir de s’emparer de sujets vastes et complexes à l’image du monde dans lequel nous vivons. Nous mêlons les formes, les languages, les énergies -mots, mouvement, marionnette, sons - pour créer un espace de liberté, de singularité, d’écoute. Nous voulons offrir aux jeunes - et à toustes celleux qui les accompagnent - un théâtre vivant, engagé, qui ne donne pas de réponses toutes faites, mais invite à penser, ressentir, débattre, imaginer. Un théâtre qui bouscule, questionne, fait grandir.

{% sectionCollection  %}
{% sectionHeader  %}

## Spectacles en tournée

{% endsectionHeader %}
{% collection collection="plays", filters=[{"by":"tag","value":["on-tour"]}], sortCriterias=[], type="reel", itemWidth="min(30rem,90%)", itemPartial="card-play-detailed" %}{% endcollection %}

{% endsectionCollection %}

{% wrapper tag="div" %}
{% image src="/_images/019.webp", aspectRatio=3 %}
{% endwrapper %}

{% sectionCollection  %}
{% sectionHeader  %}

## Actu'

{% endsectionHeader %}
{% collection collection="actus", filters=[{"value":4,"by":"first"}], sortCriterias=[{"direction":"desc","by":"datePublished"}], type="layout-none", class="columns", itemPartial="card-actu" %}{% endcollection %}

{% endsectionCollection %}

{% htmlPartial "instagram-embed.njk" %}
