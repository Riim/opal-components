const Color = require('color');

function gradientColors(color, count = 10) {
	color = Color(color);

	let lightness = color.lightness();
	let lightnessStep = Math.min(lightness / count, (100 - lightness) / count);

	let lightnesses = [];

	for (let i = count; i; ) {
		lightnesses.push(lightness - lightnessStep * --i);
	}

	for (let i = 1; i < count; i++) {
		lightnesses.push(lightness + lightnessStep * i);
	}

	return lightnesses.map(
		step =>
			color
				.lightness(step)
				.hsl()
				.string()
				.replace(/ /g, '')
		// .replace(/(\d+)\.(\d+)/g, (match, num1, num2) =>
		// 	+('0.' + num2) < 0.5 ? num1 : +num1 + 1
		// )
	);
}

const textColor = 'hsl(208,9%,18%)';
const defaultColor = 'hsl(208,18%,36%)';
const primaryColor = 'hsl(208,94%,50%)';
const successColor = 'hsl(122,40%,48%)';
const dangerColor = 'hsl(4,90%,58%)';
const warningColor = 'hsl(40,100%,50%)';
const textColors = gradientColors(textColor);
const defaultColors = gradientColors(defaultColor);
const primaryColors = gradientColors(primaryColor);
const successColors = gradientColors(successColor);
const dangerColors = gradientColors(dangerColor);
const warningColors = gradientColors(warningColor);

const cssColorVariables = {
	grayColor: 'hsl(0,0%,50%)',
	grayColor50: 'hsl(0,0%,5%)',
	grayColor100: 'hsl(0,0%,10%)',
	grayColor150: 'hsl(0,0%,15%)',
	grayColor200: 'hsl(0,0%,20%)',
	grayColor250: 'hsl(0,0%,25%)',
	grayColor300: 'hsl(0,0%,30%)',
	grayColor350: 'hsl(0,0%,35%)',
	grayColor400: 'hsl(0,0%,40%)',
	grayColor450: 'hsl(0,0%,45%)',
	grayColor500: 'hsl(0,0%,50%)',
	grayColor550: 'hsl(0,0%,55%)',
	grayColor600: 'hsl(0,0%,60%)',
	grayColor650: 'hsl(0,0%,65%)',
	grayColor700: 'hsl(0,0%,70%)',
	grayColor750: 'hsl(0,0%,75%)',
	grayColor800: 'hsl(0,0%,80%)',
	grayColor850: 'hsl(0,0%,85%)',
	grayColor900: 'hsl(0,0%,90%)',
	grayColor950: 'hsl(0,0%,95%)',

	textColor: textColors[9],
	textColor50: textColors[0],
	textColor100: textColors[1],
	textColor150: textColors[2],
	textColor200: textColors[3],
	textColor250: textColors[4],
	textColor300: textColors[5],
	textColor350: textColors[6],
	textColor400: textColors[7],
	textColor450: textColors[8],
	textColor500: textColors[9],
	textColor550: textColors[10],
	textColor600: textColors[11],
	textColor650: textColors[12],
	textColor700: textColors[13],
	textColor750: textColors[14],
	textColor800: textColors[15],
	textColor850: textColors[16],
	textColor900: textColors[17],
	textColor950: textColors[18],

	defaultColor: defaultColors[9],
	defaultColor50: defaultColors[0],
	defaultColor100: defaultColors[1],
	defaultColor150: defaultColors[2],
	defaultColor200: defaultColors[3],
	defaultColor250: defaultColors[4],
	defaultColor300: defaultColors[5],
	defaultColor350: defaultColors[6],
	defaultColor400: defaultColors[7],
	defaultColor450: defaultColors[8],
	defaultColor500: defaultColors[9],
	defaultColor550: defaultColors[10],
	defaultColor600: defaultColors[11],
	defaultColor650: defaultColors[12],
	defaultColor700: defaultColors[13],
	defaultColor750: defaultColors[14],
	defaultColor800: defaultColors[15],
	defaultColor850: defaultColors[16],
	defaultColor900: defaultColors[17],
	defaultColor950: defaultColors[18],

	primaryColor: primaryColors[9],
	primaryColor50: primaryColors[0],
	primaryColor100: primaryColors[1],
	primaryColor150: primaryColors[2],
	primaryColor200: primaryColors[3],
	primaryColor250: primaryColors[4],
	primaryColor300: primaryColors[5],
	primaryColor350: primaryColors[6],
	primaryColor400: primaryColors[7],
	primaryColor450: primaryColors[8],
	primaryColor500: primaryColors[9],
	primaryColor550: primaryColors[10],
	primaryColor600: primaryColors[11],
	primaryColor650: primaryColors[12],
	primaryColor700: primaryColors[13],
	primaryColor750: primaryColors[14],
	primaryColor800: primaryColors[15],
	primaryColor850: primaryColors[16],
	primaryColor900: primaryColors[17],
	primaryColor950: primaryColors[18],

	successColor: successColors[9],
	successColor50: successColors[0],
	successColor100: successColors[1],
	successColor150: successColors[2],
	successColor200: successColors[3],
	successColor250: successColors[4],
	successColor300: successColors[5],
	successColor350: successColors[6],
	successColor400: successColors[7],
	successColor450: successColors[8],
	successColor500: successColors[9],
	successColor550: successColors[10],
	successColor600: successColors[11],
	successColor650: successColors[12],
	successColor700: successColors[13],
	successColor750: successColors[14],
	successColor800: successColors[15],
	successColor850: successColors[16],
	successColor900: successColors[17],
	successColor950: successColors[18],

	dangerColor: dangerColors[9],
	dangerColor50: dangerColors[0],
	dangerColor100: dangerColors[1],
	dangerColor150: dangerColors[2],
	dangerColor200: dangerColors[3],
	dangerColor250: dangerColors[4],
	dangerColor300: dangerColors[5],
	dangerColor350: dangerColors[6],
	dangerColor400: dangerColors[7],
	dangerColor450: dangerColors[8],
	dangerColor500: dangerColors[9],
	dangerColor550: dangerColors[10],
	dangerColor600: dangerColors[11],
	dangerColor650: dangerColors[12],
	dangerColor700: dangerColors[13],
	dangerColor750: dangerColors[14],
	dangerColor800: dangerColors[15],
	dangerColor850: dangerColors[16],
	dangerColor900: dangerColors[17],
	dangerColor950: dangerColors[18],

	warningColor: warningColors[9],
	warningColor50: warningColors[0],
	warningColor100: warningColors[1],
	warningColor150: warningColors[2],
	warningColor200: warningColors[3],
	warningColor250: warningColors[4],
	warningColor300: warningColors[5],
	warningColor350: warningColors[6],
	warningColor400: warningColors[7],
	warningColor450: warningColors[8],
	warningColor500: warningColors[9],
	warningColor550: warningColors[10],
	warningColor600: warningColors[11],
	warningColor650: warningColors[12],
	warningColor700: warningColors[13],
	warningColor750: warningColors[14],
	warningColor800: warningColors[15],
	warningColor850: warningColors[16],
	warningColor900: warningColors[17],
	warningColor950: warningColors[18]
};

module.exports = cssColorVariables;
