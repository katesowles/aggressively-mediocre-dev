---
title: "{{ replace .Name "-" " " | title }}"
slug: "/{{ now.Format "2006-01-02" }}/{{ lower .Name | urlize }}"
date: {{ .Date }}
draft: true
category: ["personal", "professional"]
tag:
  [
    "ADHD",
    "anxiety",
    "career",
    "depression",
    "mental health",
    "neurodiversity",
    "software development",
  ]
---
