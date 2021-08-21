Welcome to the arXiv wiki. Anything that could accompany an arXiv paper belongs here:

* a high-level summary
* links to talks and presentations
* informal explanations of core concepts
* comments

If you'd like to contribute, search by an arXiv identifier, and click the "Edit this page" button. I use GitHub to manage accounts. Once your first change is approved, you'll receive access to make further changes and invite others.

When writing, both LaTeX math mode (with \$\$) and Markdown are supported.

I hope this becomes a useful resource for all kinds of researchers, especially those getting started in a new field.

<p><button id="randompage">Visit a random page</button></p>

Recently updated papers:
<ul>
{% for member in site.data.recent limit:5 %}
{% capture short_id %}{{ member.id | remove_first: 'abs/' | remove_first: '.md'}}{% endcapture %}
<li><a href="/{{ member.id }}">{{ short_id }}</a>: {{site.data.arxivdata[short_id].title}}</li>
{% endfor %}
</ul>


Top 5 contributors:
<ul>
{% for c in site.data.contributors limit:5 %}
<li><a target="_blank" href="https://github.com/{{ c.id }}">{{ c.id }}</a></li>
{% endfor %}
</ul>
