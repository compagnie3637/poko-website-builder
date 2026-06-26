---
translationKey: spectacles
order: 2
lang: fr
createdAt: 2026-06-08T11:05:00.000Z
ldType: WebPage
name: Spectacles
sections:
  - type: sectionCollection
    header:
      content: '## En tournée'
    layoutOptions:
      type: reel
      itemWidth: min(30rem,90%)
      noBar: false
    collection: plays
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - on-tour
      exclusions: false
    itemPartial: card-play-detailed
  - type: sectionCollection
    header:
      content: '## Prochainement'
    layoutOptions:
      type: reel
      itemWidth: min(30rem,90%)
      noBar: false
    collection: plays
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - soon
      exclusions: false
    itemPartial: card-play-detailed
  - type: sectionCollection
    sectionWrapper:
      class: buggy
    header:
      content: '## Passés'
    layoutOptions:
      type: reel
      itemWidth: min(30rem,90%)
      noBar: false
    collection: plays
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - past
      exclusions: false
    itemPartial: card-play-detailed
eleventyNavigation:
  add: Nav
---

# Spectacles

Ici, tu découvriras l’ensemble des créations de la compagnie.

Des spectacles qui explorent le monde avec sensibilité, humour et honnêteté. Chaque projet naît d’un besoin urgent de raconter, de questionner, de bousculer un peu. Parcours-les, laisse-toi surprendre, et plonge dans les univers que nous façonnons pour les jeunes… et pour tous ceux qui veulent encore s’émerveiller.

{% link url="agenda", type="internal", collection="pages" %}{% endlink %}

{% sections %}{% endsections %}
