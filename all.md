
<ul>
{% for member in site.data.all %}
{% capture short_id %}{{ member.id | remove_first: 'abs/' | remove_first: '.md'}}{% endcapture %}
<li><a href="/{{ member.id }}">{{ short_id }}</a>: {{site.data.arxivdata[short_id].title}}</li>
{% endfor %}
</ul>
