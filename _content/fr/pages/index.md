---
translationKey: index
order: 1
lang: fr
createdAt: 2026-06-08T10:53:00.000Z
ldType: WebPage
name: Accueil
eleventyNavigation:
  add: Nav
vars: {}
pageStyles: |-
  main > h1::before {
    inset: 0 0 50%;
  }
---

{% htmlPartial "home-logo-title.njk" %}

Depuis 2008, la Compagnie 3637 - basée en Belgique - explore le théâtre - et bien plus encore - pour et autour des jeunes avec le désir de s’emparer de sujets vastes et complexes à l’image du monde dans lequel nous vivons. Nous mêlons les formes, les languages, les énergies -mots, mouvement, marionnette, sons - pour créer un espace de liberté, de singularité, d’écoute. Nous voulons offrir aux jeunes - et à toustes celleux qui les accompagnent - un théâtre vivant, engagé, qui ne donne pas de réponses toutes faites, mais invite à penser, ressentir, débattre, imaginer. Un théâtre qui bouscule, questionne, fait grandir.

{% link url="spectacles", type="internal", collection="pages", class="button-alt h1" %}{% endlink %}

{% sectionCollection  %}
{% sectionHeader  %}
## Actu'
{% endsectionHeader %}
{% collection collection="actus", filters=[], sortCriterias=[{"by":"date","direction":"desc"}], type="faux-masonry", class="columns", itemPartial="card-actu" %}{% endcollection %}

{% endsectionCollection %}

{% htmlPartial "instagram-embed.njk" %}

{% wrapper tag="div" %}
{% image src="/_images/019.webp", aspectRatio=3, class="full-bleed" %}
{% endwrapper %}

{% sectionCollection  %}
{% sectionHeader  %}
## Spectacles en tournée
{% endsectionHeader %}
{% collection collection="plays", filters=[{"by":"tag","value":["on-tour"]}], sortCriterias=[], type="switcher", widthWrap="var(--width-prose)", itemPartial="card-play-visual" %}{% endcollection %}

{% endsectionCollection %}
