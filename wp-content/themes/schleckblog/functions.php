<?php
/**
 * Theme setup and frontend styles.
 *
 * @package Schleckblog
 */

function schleckblog_setup() {
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', 'schleckblog_setup' );

function schleckblog_enqueue_assets() {
	$theme = wp_get_theme();
	wp_enqueue_style(
		'schleckblog-style',
		get_stylesheet_uri(),
		array(),
		$theme->get( 'Version' )
	);

	wp_enqueue_script(
		'schleckblog-language',
		get_theme_file_uri( 'assets/js/language-toggle.js' ),
		array(),
		$theme->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'schleckblog_enqueue_assets' );
