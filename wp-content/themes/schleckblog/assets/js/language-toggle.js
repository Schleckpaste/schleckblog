( function () {
	const toggle = document.querySelector( '[data-language-toggle]' );
	const navigation = document.querySelector( '.site-nav' );
	const languageContent = document.querySelectorAll( '[data-lang-content]' );
	const year = document.querySelector( '[data-current-year]' );

	if ( year ) {
		year.textContent = new Date().getFullYear();
	}

	if ( ! toggle || languageContent.length === 0 ) {
		return;
	}

	let activeLanguage =
		new URL( window.location.href ).searchParams.get( 'lang' ) === 'en'
			? 'en'
			: 'de';

	const setLanguage = ( language, updateUrl = false ) => {
		activeLanguage = language;
		document.documentElement.lang = language;
		document.title =
			language === 'de'
				? 'Schleck Studio – Individuelle WordPress-Websites'
				: 'Schleck Studio – Thoughtful WordPress Websites';
		if ( navigation ) {
			navigation.setAttribute(
				'aria-label',
				language === 'de' ? 'Hauptnavigation' : 'Primary navigation'
			);
		}

		languageContent.forEach( ( element ) => {
			element.hidden = element.dataset.langContent !== language;
		} );

		toggle.textContent = language === 'de' ? 'EN' : 'DE';
		toggle.setAttribute(
			'aria-label',
			language === 'de'
				? 'Switch language to English'
				: 'Sprache auf Deutsch wechseln'
		);

		if ( updateUrl ) {
			const url = new URL( window.location.href );
			if ( language === 'en' ) {
				url.searchParams.set( 'lang', 'en' );
			} else {
				url.searchParams.delete( 'lang' );
			}
			window.history.replaceState(
				null,
				'',
				`${ url.pathname }${ url.search }${ url.hash }`
			);
		}
	};

	toggle.addEventListener( 'click', () => {
		setLanguage( activeLanguage === 'de' ? 'en' : 'de', true );
	} );

	setLanguage( activeLanguage );
} )();
