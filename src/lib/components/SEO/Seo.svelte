<script>
	
	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	import OpenGraphComponent from './OpenGraph.svelte';
	/** @type {{title?: import("./types").SvelteSeo['title'], description?: import("./types").SvelteSeo["description"], keywords?: import("./types").SvelteSeo["keywords"], base?: import("./types").SvelteSeo["base"], applicationName?: import("./types").SvelteSeo["applicationName"], themeColor?: import("./types").SvelteSeo["themeColor"], nofollow?: import("./types").SvelteSeo["nofollow"], noindex?: import("./types").SvelteSeo["noindex"], nositelinkssearchbox?: import("./types").SvelteSeo["nositelinkssearchbox"], notranslate?: import("./types").SvelteSeo["notranslate"], canonical?: import("./types").SvelteSeo["canonical"], amp?: import("./types").SvelteSeo["amp"], manifest?: import("./types").SvelteSeo["manifest"], languageAlternates?: import("./types").SvelteSeo["languageAlternates"], twitter?: import("./types").SvelteSeo['twitter'], openGraph?: import('./types').SvelteSeo['openGraph'], facebook?: import("./types").SvelteSeo['facebook'], jsonLd?: import("./types").SvelteSeo['jsonLd'], children?: import('svelte').Snippet}} */
	let {
		title = undefined,
		description = undefined,
		keywords = undefined,
		base = undefined,
		applicationName = undefined,
		themeColor = undefined,
		nofollow = false,
		noindex = false,
		nositelinkssearchbox = false,
		notranslate = false,
		canonical = undefined,
		amp = undefined,
		manifest = undefined,
		languageAlternates = undefined,
		twitter = undefined,
		openGraph = undefined,
		facebook = undefined,
		jsonLd = undefined,
		children
	} = $props();
</script>

<svelte:head>
	{#if title}
		{#key title}
			<title>{title}</title>
		{/key}
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	{#if amp}
		<link rel="amphtml" href={amp} />
	{/if}

	{#if manifest}
		<link rel="manifest" href={manifest} />
	{/if}

	{#if applicationName}
		<meta name="application-name" content={applicationName} />
	{/if}

	{#if languageAlternates}
		{#each languageAlternates as { href, hreflang }}
			<link rel="alternate" {href} {hreflang} />
		{/each}
	{/if}

	{#if themeColor}
		<meta name="theme-color" content={themeColor} />
	{/if}

	{#if base}
		<base href={base} />
	{/if}

	{#if facebook?.appId}
		<meta property="fb:app_id" content={facebook.appId} />
	{/if}

	<meta
		name="robots"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>
	<meta
		name="googlebot"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>

	{#if nositelinkssearchbox}
		<meta name="google" content="nositelinkssearchbox" />
	{/if}

	{#if notranslate}
		<meta name="google" content="notranslate" />
	{/if}

	{#if twitter}
		{#each Object.entries(twitter) as [key, value]}
			{@const transformed = key.replace(/([a-z])([A-Z])/g, '$1:$2').toLowerCase()}
			<!-- The `transformed` variable changes eg, twitter.title into twitter:title
                  It loops over all the properties and changes the '.' into ':'
              -->
			<meta name="twitter:{transformed}" content={value} />
		{/each}
	{/if}

	{#if openGraph}
		<OpenGraphComponent {openGraph} />
	{/if}

	{#if jsonLd}
		{@const data = Object.assign({ '@context': 'https://schema.org' }, jsonLd)}
		{@html `<script type="application/ld+json">${JSON.stringify(data) + '<'}/script>`}
	{/if}

	{@render children?.()}
</svelte:head>
