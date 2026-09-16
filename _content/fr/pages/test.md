---
translationKey: test
order: 7
lang: fr
createdAt: 2026-09-11T09:43:00.000Z
ldType: WebPage
name: test
sections:
  - type: sectionCollection
    header:
      content: '## Spectacles en tournée'
    collection: plays
    sortAndFilterOptions:
      filters:
        - by: tag
          value:
            - past
      exclusions: false
status: draft
---

{% sectionCollection  %}
{% sectionHeader  %}
## Spectacles en tournée
{% endsectionHeader %}
{% collection collection="plays", filters=[{"by":"tag","value":["on-tour"]},{"by":"first","value":2}], sortCriterias=[] %}{% endcollection %}

{% endsectionCollection %}
