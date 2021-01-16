export const waveImages = {
	0: require('./images/0.svg'),
	1: require('./images/1.svg'),
	2: require('./images/2.svg'),
	3: require('./images/3.svg'),
	4: require('./images/4.svg'),
	5: require('./images/5.svg'),
	6: require('./images/6.svg')
};

export const letterList = [
	'a', 'b', 'c', 'd', 'e', 'f',
	'g', 'h', 'i', 'j', 'k', 'l',
	'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x',
	'y', 'z'
];

export const colorList = [
	['#3196FA', '#0066cc'],
	['#FF606B', '#db313d'],
	['#FF9D34', '#df5f14'],
	['#945EF7', '#7230e9'],
	['#F24FC4', '#ce1299'],
	['#6a5cff', '#3d2bfb'],
	['#58C148', '#159d00']
];

export const getColors = (letter) => {
	let letterIndex = 0;
	if (letter) {
		let index = letterList.findIndex(item => item === letter);
		if (index > -1) {
			letterIndex = index;
		}
	}
	return {
		colorIndex: letterIndex % 7,
		currentColors: colorList[letterIndex % 7]
	};
};

