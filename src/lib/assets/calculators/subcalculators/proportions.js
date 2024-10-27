import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';

export default [
	{
		label: 'Obliczanie proporcji',
		component: Controllers,
		controllers: [
			{
				id: 'a',
				element: 'input',
				attributes: {
					type: 'number',
					placeholder: 'A'
				}
			},
			{
				id: 'c',
				element: 'input',
				attributes: {
					type: 'number',
					placeholder: 'C'
				}
			},
			{
				id: 'icon',
				element: 'icon',
				name: 'equal',
				ignore: true
			},
			{
				id: 'b',
				element: 'input',
				attributes: {
					type: 'number',
					placeholder: 'B'
				}
			},
			{
				id: 'd',
				element: 'input',
				attributes: {
					type: 'number',
					placeholder: 'D'
				}
			}
		],
		buttons: [
			{
				label: 'Oblicz',
				action: (dataset) => {
					const { a, b, c, d } = { ...dataset };
					if ([a, b, c, d].filter((x) => !!x).length < 3) {
						return { error: 'Podaj 3 wartości, żeby móc obliczyć proporcję.' };
					}
					const p = {
						a: parseFloat(a),
						b: parseFloat(b),
						c: parseFloat(c),
						d: parseFloat(d)
					};

					let result = 0;
					if (!isNaN(p?.a) && !isNaN(p?.b)) {
						if ((!isNaN(p?.c) && isNaN(p?.d)) || (!isNaN(p?.c) && !isNaN(p?.d))) {
							//Jeśli D jest pusty lub wszystkie są uzupełnione, zmień odtatni (D)
							result = (p?.c * p?.b) / p?.a;
							dataset.d = result;
						} else if (!isNaN(p?.d) && isNaN(p?.c)) {
							result = (p?.a * p?.d) / p?.b;
							dataset.c = result;
						}
					} else if (!isNaN(p?.c) && !isNaN(p?.d)) {
						if (!isNaN(p?.a) && isNaN(p?.b)) {
							result = (p?.a * p?.d) / p?.c;
							dataset.b = result;
						} else if (!isNaN(p?.b) && isNaN(p?.a)) {
							result = (p?.c * p?.b) / p?.d;
							dataset.a = result;
						}
					}

					return { dataset };
				}
			}
		],
		layout: {
			gridTemplate: '"a icon c" "b icon d" / auto 20px auto',
			responsive: false
		}
	}
];
