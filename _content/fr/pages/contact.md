---
translationKey: contact
order: 5
lang: fr
createdAt: 2026-06-08T11:20:00.000Z
ldType: WebPage
name: Contact
sections:
  - type: sectionGrid
    items:
      - content: '## Direction artistique { .h3 }'
eleventyNavigation:
  add: Nav
---

# Contact

{% sectionGrid  %}

{% grid type="grid-fluid", gap="var(--step-4)", columns=3, class="width-prose" %}
{% gridItem class="text-center flow" %}
## Direction artistique { .h3 }

{% sectionCollection class="flow space:--step--4", tag="div" %}

{% collection collection="people", filters=[{"by":"tag","value":["art-direction"]}], sortCriterias=[], type="flow", itemPartial="card-person-contact-info" %}{% endcollection %}

{% endsectionCollection %}
{% endgridItem %}
{% gridItem class="text-center flow" %}
## Coordination générale { .h3 }

{% sectionCollection class="flow space:--step--4", tag="div" %}

{% collection collection="people", filters=[{"by":"tag","value":["coordination"]}], sortCriterias=[], type="flow", itemPartial="card-person-contact-info" %}{% endcollection %}

{% endsectionCollection %}
{% endgridItem %}
{% gridItem class="text-center flow" %}
## Diffusion { .h3 }

{% sectionCollection class="flow space:--step--4", tag="div" %}

{% collection collection="people", filters=[{"by":"tag","value":["diffusion"]}], sortCriterias=[], type="flow", itemPartial="card-person-contact-info" %}{% endcollection %}

{% endsectionCollection %}
{% endgridItem %}
{% gridItem class="text-center flow" %}
## Régie générale { .h3 }

{% htmlPartial "card-person-contact-info.njk", {"name":"Amélie Dubois & Brice Tellier","email":"technique@compagnie3637.be"} %}
{% endgridItem %}
{% endgrid %}

{% endsectionGrid %}

{% wrapper tag="section", class='text-center palette-darker bleed-bg' %}
::: div
{% link url="https://www.facebook.com/Compagnie3637/", type="external" %}{% icon "tablerOutline:brand-facebook", width="30", height="30" %}{% endlink %}

{% link url="https://www.instagram.com/compagnie3637/", type="external" %}{% icon "tablerOutline:brand-instagram", width="30", height="30" %}{% endlink %}

{% link url="https://www.youtube.com/@Compagnie3637", type="external" %}{% icon "tablerOutline:brand-youtube", width="30", height="30" %}{% endlink %}

:::

{% link url="http://www.compagnie3637.be/contact/", type="external", class="button uppercase" %}Newsletter [TODO]{% endlink %}
{% endwrapper %}

{% image src="/_images/cie3637_les-de-uesobe-ueisseurs2_cre-uedit-marie-he-uele-cne-tercafs.webp", aspectRatio=4, class="full-bleed px-0 max-inline-[160rem]" %}

{% wrapper tag="section" %}
Compagnie 3637 ASBL { .h2 }

Siège social: Rue de Charleroi, 17 – 1470 Genappe - Belgique
Bureau: c/o Le Bocal – Rue Van Eyck 11A- 1050 Bruxelles - Belgique

N°ENTREPRISE: 0807 233 604 – RPM NIVELLES
{% endwrapper %}
