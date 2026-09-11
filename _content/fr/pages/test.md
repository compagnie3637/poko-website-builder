---
translationKey: test
order: 7
lang: fr
createdAt: 2026-09-11T09:43:00.000Z
ldType: WebPage
status: draft
name: test
sections:
  - type: sectionCollection
    header:
      content: |-
        ## STRUCTURED SECTION

        {% link url="index", type="internal", collection="pages" %}{% endlink %}
    collection: plays
    sortAndFilterOptions:
      exclusions: false
      keepVisible:
        enabled: true
        fallbackMessage: FB {% link url="index", type="internal", collection="pages" %}home{% endlink %}
---

{% sectionCollection  %}
{% sectionHeader  %}
# Collection Inline
{% endsectionHeader %}
{% collection collection="plays", filters=[{"by":"tag","value":["soon"]}], sortCriterias=[], keepVisible={"fallbackMessage":""} %}{% endcollection %}

{% endsectionCollection %}

{% sections %}{% endsections %}
