---
translationKey: agenda
order: 4
lang: fr
createdAt: 2026-06-08T11:09:00.000Z
ldType: WebPage
name: Agenda
eleventyNavigation:
  add: Nav
---

# Agenda

{% wrapper tag="section" %}
## Prochaines dates

{% component "representationsCalendar.njk", { projects: orfeo.projects | filterCollection({ by: "past", value: false }) | asc("start_date"), showSpectacle: true, parentClass: "palette--tone" } %}
{% endwrapper %}

{% wrapper tag="section" %}
## Dates passées

{% component "representationsCalendar.njk", { projects: orfeo.projects | filterCollection({ by: "past", value: true }) | desc("start_date"), showSpectacle: true, parentClass: "palette-alt" } %}
{% endwrapper %}
