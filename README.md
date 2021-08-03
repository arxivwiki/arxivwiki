Welcome to the arXiv wiki. Anything that could accompany an arXiv paper belongs here:

* a high-level summary
* links to talks and presentations
* informal explanations of core concepts
* comments

If you'd like to contribute, search by an arXiv identifier, and click the "Edit this page" button. Once your first change is approved, you'll receive access to make further changes and invite others.

I hope this becomes a useful resource for all kinds of researchers, especially those getting started in a new field.

Recently updated papers:
{% for member in site.data.recent limit:5 %}
[ {{ member.id }}]({{ member.id }})
{% endfor %}