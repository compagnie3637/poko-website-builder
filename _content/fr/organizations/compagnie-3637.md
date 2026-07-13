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
        Fondée en 2008, la Compagnie 3637 co-dirigée par Sophie Linsmaux et Coralie Vanderlinden, crée des spectacles jeune public, qui s’emparent de sujets vastes et complexes à l’image du monde dans lequel nous vivons.

        Avec l’insatisfaction comme moteur de changement, les artistes de la Compagnie 3637 sont convaincu·es qu’offrir aux générations de demain des spectacles engagés et qui, tout en finesse, bousculent les idées reçues peut amener à la construction d’un esprit critique et à des bouleversements intimes et collectifs.

        Via des processus de création en lien direct avec les publics cibles et des processus d’écriture collective, les spectacles de la cie proposent des fables actuelles à hauteur d’enfants où, via le prisme des émotions, les valeurs de liberté, de singularité et de respect des différences constituent les bases fondamentales de leurs récits.

        Au fil des créations, les artistes de la Compagnie3637 ont développé une approche artistique métissant le mot, le mouvement, la marionnette, l’univers sonore, offrant plusieurs modes de transmission. Cette identité s’est forgée et continue de s’inventer en dialogue avec un noyau d’artistes, et de personnalités fidèles à la compagnie: Baptiste Isaia en tant que metteur en scène ou conseiller artistique, Philippe Lecrenier à la composition musicale et Lisa Cogniaux à l’écriture, la dramaturgie ou à la mise en scène, Marie Angibaud et Tania Hansez à la production, diffusion, administration et toute l’équipe de régisseur.euses précieuse et indispensable.
  - type: sectionCollection
    header:
      content: "## Direction artistique"
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
      content: "## Production, admin & diffusion"
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
      content: "## Fondatrices"
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
      content: "## Complices"
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
    content: '{% image src="/_images/21-06-27-edf-36-37.webp", aspectRatio=3, objectPosition="center 75%", class="full-bleed" %}'
  - type: sectionRaw
    content: |-
      {% sectionCollection  %}
      {% sectionHeader  %}
      ## Créations depuis 2008
      {% endsectionHeader %}
      {% collection collection="plays", filters=[], sortCriterias=[{"direction":"asc","by":"yearStart"}], type="layout-none", sortCriterias=[{"direction":"asc","by":"yearStart"}],  tag="ul", class="width-body" %}
      {% raw %}
      {% set notableMentionsStr = item.data.notableMentions | join('. ') %}
      {% if notableMentionsStr %}
      <li><strong>{% link url=item.data.slug, type="internal", collection="plays" %}{% endlink %}</strong>: {{ notableMentionsStr }}</li>
      {% endif %}
      {% endraw %}
      {% endcollection %}

      {% endsectionCollection %}
  - type: sectionGrid
    header:
      content: "## Soutenus par"
    items:
      - content: '{% image src="/_images/logo-wallonie_bruxelles_thtre_danse.webp", alt="logo - théâtre et danse", width=200 %}'
      - content: '{% image src="/_images/logo_wbi.webp", alt="logo - Wallonie Bruxelles international", width=200 %}'
      - content: '{% image src="/_images/logo-fwb.webp", alt="logo - fédération Wallonie Bruxelles", width=200 %}'
    layoutOptions:
      type: grid-fluid
    class: items-center
  - type: sectionGrid
    header:
      content: "## Nous sommes membres"
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
    postalCode: "1180"
    addressLocality: Uccle
    addressCountry: Belgique
  legalAddress:
    streetAddress: Rue de Charleroi 17
    postalCode: "1470"
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
