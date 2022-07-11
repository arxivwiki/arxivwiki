Welcome to the **arXiv wiki**: a place for notes and summaries of arXiv.org papers.

Visit any paper on arXiv.org. Swap out the “.org” for “.wiki” and you will automatically be taken to the corresponding arXiv wiki page.

Anything that could accompany an arXiv paper belongs here:

* a high-level summary
* links to talks and presentations
* informal explanations of core concepts
* comments

See a list of all annotated papers by clicking the "All" button.
Click the "Random" button to find something new.


---

### Recently updated

<div style="margin-bottom: 10px;">
{% for member in site.data.recent limit:5 %}
{% capture short_id %}{{ member.id | remove_first: 'abs/' | remove_first: '.md'}}{% endcapture %}
<div class="linktopage">
<div><a href="/abs/{{short_id}}"><b>{{site.data.arxivdata[short_id].title}}</b></a></div>
<div>{{site.data.arxivdata[short_id].authors}}</div>
</div>
{% endfor %}
</div>

---

### View papers by tag

Every paper can be marked with one or more tags.

<p>
{% assign tagpages = site.pages | where:"dir", "/tag/" | sort: 'count' | reverse %}
<div>{% for p in tagpages %}
{% assign tag_name = p.name | remove_first: '.md'%}
<code><a href="https://arxiv.wiki/tag/{{ tag_name }}"><nobr>{{ tag_name }}</nobr></a>&nbsp;({{ p.count }})</code><br/>
{% endfor %}
</div>
</p>

---

### How to contribute

Search an arXiv identifier and click the "Edit this page" button. You must log into GitHub to make edits. Once your first change is approved, you'll receive access to make further changes.

Please remember each paper on the arXiv was written by someone. Please be civil and respectful online.

Files are written in Markdown. It is regular text with extra styling. Here is a [2-minute reference on how to use it](https://www.markdownguide.org/cheat-sheet).

Files also support LaTeX math mode:
* Wrap equations with \$\$ on each side, like `$$y = x^2$$`.
* Instead of `|`, use `\vert`.

---

### Top 5 contributors

<ul>
{% for c in site.data.contributors limit:5 %}
<li><a target="_blank" href="https://github.com/{{ c.id }}">{{ c.id }}</a></li>
{% endfor %}
</ul>

---

### License

Except where otherwise noted, the original content in this website can be
shared, remixed, and reused under the terms of the
[Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) License.
