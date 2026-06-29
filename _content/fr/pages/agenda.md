---
translationKey: agenda
order: 4
lang: fr
createdAt: 2026-06-08T11:09:00.000Z
ldType: WebPage
name: Agenda
eleventyNavigation:
  add: Nav
vars: {}
---

# Agenda

<section aria-labelledby="prochaines-dates">
  <h2 id="prochaines-dates">Prochaines dates</h2>
  {% partial "representationsCalendar.njk", { projects: orfeo.projects | filterCollection({ by: "past", value: false }) | asc("start_date"), showSpectacle: true, parentClass: "palette--tone" } %}
</section>

<section aria-labelledby="dates-passees">
  <h2 id="dates-passees">Dates passées</h2>
  {% partial "representationsCalendar.njk", { projects: orfeo.projects | filterCollection({ by: "past", value: true }) | desc("start_date"), showSpectacle: true, parentClass: "palette-alt" } %}
</section>
