---

layout: default
title: "Previous Editions"

---

<main>
<section class="grid container all-stories">
	<div class="col max-width">
		<h1 class="section-header">{{ page.title }}</h1>
	</div>
	{% for article in site.posts %}
		{% if article.category == "Archived" %}
			<article class="article">
				<div class="col two-third no-right">
					<a class="permalink" href="{{ article.PDFurl }}">
						<span class="article-type">Archived</span>
						<h1 class="article-headline">{{ article.title }}</h1>
						<h2 class="article-subhead">{{ article.subtitle }}</h2>
						<span class="article-byline">With {{ article.author }} as Editor</span>
					</a>
				</div>
			</article>
		{% endif %}
	{% endfor %}
</section>
</main>