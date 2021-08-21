### Welcome to the arXiv wiki
A collaborative compilation of notes and summaries on [arXiv.org](url) papers.

How to use: Visit any paper on [www.arXiv.org](url). Swap out the “.org” for “.wiki” and you will automatically be taken to the corresponding arXiv wiki page.


#### Anything that could accompany an arXiv paper belongs here

* a high-level summary
* links to talks and presentations
* informal explanations of core concepts
* comments


Recently updated papers
<ul>
{% for member in site.data.recent limit:5 %}
{% capture short_id %}{{ member.id | remove_first: 'abs/' | remove_first: '.md'}}{% endcapture %}
<li><a href="/{{ member.id }}">{{ short_id }}</a>: {{site.data.arxivdata[short_id].title}}</li>
{% endfor %}
</ul>

Want more? [View all papers on the arXiv.wiki](/all).

### Contributing

If you'd like to contribute, search by an arXiv identifier, and click the "Edit this page" button. You must log into GitHub to make edits. Once your first change is approved, you'll receive access to make further changes and invite others.

When writing, both LaTeX math mode (with \$\$) and Markdown are supported.

Top 5 contributors:
<ul>
{% for c in site.data.contributors limit:5 %}
<li><a target="_blank" href="https://github.com/{{ c.id }}">{{ c.id }}</a></li>
{% endfor %}
</ul>
