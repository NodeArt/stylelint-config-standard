'use strict';

module.exports = {
	extends: ['stylelint-config-standard-scss', '@stanzilla/stylelint-config-rational-order'],
	plugins: [
		'stylelint-order',
		'@stanzilla/stylelint-config-rational-order/plugin',
		'stylelint-high-performance-animation',
		'stylelint-declaration-strict-value',
		'stylelint-declaration-block-no-ignored-properties',
	],
	rules: {
		'no-empty-source': [
			true,
			{
				severity: 'warning',
			},
		],
		'plugin/no-low-performance-animation-properties': [
			true,
			{
				severity: 'warning',
			},
		],
		'scale-unlimited/declaration-strict-value': [
			['/color$/', 'font-size', 'font-family', 'font-weight'],
		], // stylelint-declaration-strict-value
		'order/properties-order': [],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': false,
			},
		],
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements'],
			},
		],
		'no-descending-specificity': true,
		'plugin/declaration-block-no-ignored-properties': true, // stylelint-declaration-block-no-ignored-properties
	},
};
