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

Want more? [View all papers on the arXiv.wiki](https://arxiv.wiki/all).

---

### Contributing

If you'd like to contribute, search by an arXiv identifier, and click the "Edit this page" button. You must log into GitHub to make edits. Once your first change is approved, you'll receive access to make further changes and invite others.

Files are written in Markdown. It is regular text with extra styling. Here is a [2-minute reference on how to use it](https://www.markdownguide.org/cheat-sheet).

Files also support LaTeX math mode:
* Wrap equations with \$\$ on each side, like `$$y = x^2$$`.
* Instead of `|`, use `\vert`.

Top 5 contributors:
<ul>
{% for c in site.data.contributors limit:5 %}
<li><a target="_blank" href="https://github.com/{{ c.id }}">{{ c.id }}</a></li>
{% endfor %}
</ul>
