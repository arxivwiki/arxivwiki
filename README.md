Welcome to the **arXiv wiki**: a place for notes and summaries of arXiv.org papers.

Visit any paper on arXiv.org. Swap out the “.org” for “.wiki” and you will automatically be taken to the corresponding arXiv wiki page.

Anything that could accompany an arXiv paper belongs here:

* a high-level summary
* links to talks and presentations
* informal explanations of core concepts
* comments

---

Recently updated papers:

<ul>
{% for member in site.data.recent limit:5 %}
{% capture short_id %}{{ member.id | remove_first: 'abs/' | remove_first: '.md'}}{% endcapture %}
<li><a href="/{{ member.id }}">{{ short_id }}</a>: {{site.data.arxivdata[short_id].title}}</li>
{% endfor %}
</ul>

<p>
{% assign tagpages = site.pages | where:"dir", "/tag/" %}
View papers by tag:
<div>{% for p in tagpages %}
{% assign tag_name = p.name | remove_first: '.md'%}
<code><a href="https://arxiv.wiki/tag/{{ tag_name }}"><nobr>{{ tag_name }}</nobr></a>&nbsp;</code>
{% endfor %}
</div>
</p>

Want more? [View all papers on the arXiv.wiki](https://arxiv.wiki/all).

---

### Contributing

If you'd like to contribute, search by an arXiv identifier, and click the "Edit this page" button. You must log into GitHub to make edits. Once your first change is approved, you'll receive access to make further changes.

Please remember each paper on the arXiv was written by someone. Please be civil and respectful online.

Files are written in Markdown. It is regular text with extra styling. Here is a [2-minute reference on how to use it](https://www.markdownguide.org/cheat-sheet).

Files also support LaTeX math mode:
* Wrap equations with \$\$ on each side, like `$$y = x^2$$`.
* Instead of `|`, use `\vert`.

You can add tags by adding these three lines to the top of a page:
```
---
tags: [QAOA, local-algorithms]
---
```

Top 5 contributors:
<ul>
{% for c in site.data.contributors limit:5 %}
<li><a target="_blank" href="https://github.com/{{ c.id }}">{{ c.id }}</a></li>
{% endfor %}
</ul>
