var templates = document.querySelectorAll('template')

templates.forEach(template=> {
	var els = template.content.querySelectorAll('img,iframe');

	els.forEach(el=> el.setAttribute('loading', 'lazy'))
})
