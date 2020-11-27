---
title: "{{ replace .Name "-" " " | title }}"
url: "/{{ lower .Name }}"
date: {{ .Date }}
draft: true
---
