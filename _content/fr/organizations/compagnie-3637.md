---
translationKey: compagnie-3637
order: 3
lang: fr
createdAt: 2026-06-03T11:20:00.000Z
ldType: Organization
name: Compagnie 3637
sections:
  - type: sectionTwoColumns
    itemLeft:
      content: '{% image src="/_images/team_mars26.webp", class="radius-card" %}'
    itemRight:
      content: |-
        Fondée en 2008, la Compagnie 3637 aujourd’hui dirigée par Sophie Linsmaux et Coralie Vanderlinden, crée des spectacles jeune et tout public qui s’emparent de sujets vastes et complexes à l’image du monde dans lequel nous vivons et pour lequel les artistes de la compagnie ressentent une urgence à (ré)affirmer, (ré)introduire une place pour chacun, pour des visions du monde différentes, dans la défense d’un vrai vivre-ensemble, multiple et diversifié. En ce sens, les valeurs de liberté, de singularité et de respect des différences constituent leurs valeurs fondamentales.

        Au fil des créations et de façon organique, la mixité des formes, des langages, des univers artistiques, est devenue leur identité. Issues d’horizons différents et mues par diverses sensibilités, elles ont développé une approche artistique métissant le mot, le mouvement, la marionnette, l’univers sonore, etc. offrant plusieurs modes de transmission et donc des lignes d’interprétation diverses. Pour chaque spectacle, un langage scénique spécifique est recherché. Il est fondamentalement lié au propos et au public qu’il cherche à rencontrer. Cette identité s’est forgée et continue de s’inventer en dialogue avec un noyau d’artistes fidèles à la compagnie: Baptiste Isaia en tant que metteur en scène ou conseiller artistique, Philippe Lecrenier à la composition musicale et Lisa Cogniaux à l’écriture et la dramaturgie ou à la mise en scène.

        Avec l’insatisfaction comme moteur de changement et de remise en question, les artistes de la Compagnie 3637 sont convaincu·es qu’offrir aux générations de demain des spectacles engagés et qui, tout en finesse, bousculent les idées reçues peut amener à la construction d’un esprit critique et à des bouleversements intimes et collectifs.
  - type: sectionCollection
    header:
      content: '## Direction artistique'
    layoutOptions:
      type: flow
      gap: var(--step-4)
    collection: people
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - art-direction
      exclusions: false
    itemPartial: card-person-detailed
  - type: sectionCollection
    header:
      content: '## Production, admin & diffusion'
    layoutOptions:
      type: cluster
    collection: people
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - prod-admin-diffusion
      exclusions: false
    itemPartial: card-person-photo
  - type: sectionCollection
    header:
      content: '## Fondatrices'
    collection: people
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - founder
      exclusions: false
    itemPartial: card-person-name-only
  - type: sectionCollection
    header:
      content: "## Organe d'administration"
    layoutOptions:
      type: cluster
      gap: var(--step-4)
    collection: people
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - administrator
      exclusions: false
    itemPartial: card-person-name-only
  - type: sectionCollection
    header:
      content: '## Complices'
    layoutOptions:
      type: grid-fluid
      columns: 4
    collection: people
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - accomplices
      exclusions: false
    itemPartial: card-person-accomplice
  - type: sectionRaw
    content: '{% image src="/_images/21-06-27-edf-36-37.webp", aspectRatio=3, objectPosition="center 75%" %}'
  - type: sectionRaw
    content: |-
      {% sectionCollection  %}
      {% sectionHeader  %}
      ## Créations depuis 2009
      {% endsectionHeader %}
      {% collection collection="plays", filters=[], sortCriterias=[{"direction":"asc","by":"yearStart"}], type="layout-none", sortCriterias=[{"direction":"asc","by":"yearStart"}],  tag="ul" %}
      {% raw %}
      {% set prizesStr = item.data.prizes | join(', ') %}
      <li><strong>{% link url=item.data.slug, type="internal", collection="plays" %}{% endlink %}</strong>{{ ":" if prizesStr }} {{ prizesStr }}</li>
      {% endraw %}
      {% endcollection %}

      {% endsectionCollection %}
  - type: sectionGrid
    header:
      content: '## Soutenus par'
    items:
      - content: '{% image src="/_images/logo-wallonie_bruxelles_thtre_danse.webp", alt="logo - théâtre et danse", width=200 %}'
      - content: '{% image src="/_images/logo_wbi.webp", alt="logo - Wallonie Bruxelles international", width=200 %}'
      - content: '{% image src="/_images/logo-fwb.webp", alt="logo - fédération Wallonie Bruxelles", width=200 %}'
    layoutOptions:
      type: grid-fluid
    class: items-center
  - type: sectionGrid
    header:
      content: '## Nous sommes membres'
    items:
      - content: '{% image src="/_images/logo-ctej.webp", alt="logo - Chambre des théâtres pour l''enfance et la jeunesse", width=200 %}'
      - content: '{% image src="/_images/logo-assitej.webp", alt="logo - Assite J", width=200 %}'
      - content: '{% image src="/_images/logo-lacoop.webp", alt="logo - La coop ASBL", width=200 %}'
      - content: '{% image src="/_images/logo-centre-culturel-de-braine-lalleud.svg", alt="logo - Centre culturel de Braine l''Alleud", width=200 %}'
      - content: '{% image src="/_images/logo-le-bocal.webp", alt="logo - Le bocal", width=200 %}'
    layoutOptions:
      type: grid-fluid
    class: items-center
eleventyNavigation:
  add: Nav
  title: Compagnie
metadata:
  title: Compagnie 3637
  legalName: Compagnie 3637 ASBL
  address:
    streetAddress: Av. Brugmann 482
    postalCode: '1180'
    addressLocality: Uccle
    addressCountry: Belgique
  legalAddress:
    streetAddress: Rue de Charleroi 17
    postalCode: '1470'
    addressLocality: Genappe
    addressCountry: Belgique
  vatID: BE0807.233.604
  links:
    - name: facebook
      url: https://facebook.com/compagnie3637
    - name: instagram
      url: https://instagram.com/compagnie3637
    - name: youtube
      url: https://youtube.com/compagnie3637
pageStyles: |-
  img {
      filter: grayscale(1);
  }
---

# Qui sommes-nous?

{% sections %}{% endsections %}
