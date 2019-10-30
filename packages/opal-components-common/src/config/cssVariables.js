const Color = require('color');

function gradientColors(color, count = 10) {
	color = Color(color);

	// let colorSaturation = color.saturationl();
	// let saturationStep = Math.min(colorSaturation / count, (100 - colorSaturation) / count);

	let colorLightness = color.lightness();
	// let lightnessStep = colorLightness / count;
	let lightnessStep = Math.min(colorLightness / count, (100 - colorLightness) / count);

	let steps = [];

	for (let i = 1; i < count; i++) {
		steps.push(
			color
				// .saturationl(colorSaturation - saturationStep * (count - i))
				.lightness(lightnessStep * i)
		);
	}

	steps.push(color.lightness(colorLightness));

	// lightnessStep = (100 - colorLightness) / count;

	for (let i = 1; i < count; i++) {
		steps.push(
			color
				// .saturationl(colorSaturation + saturationStep * i)
				.lightness(colorLightness + lightnessStep * i)
		);
	}

	return steps.map(step =>
		step
			.hsl()
			.string()
			.replace(/ /g, '')
			.replace(/(\d+)\.(\d+)/g, (match, d1, d2) => (+('0.' + d2) < 0.5 ? d1 : +d1 + 1))
	);
}

const defaultColor = 'hsl(208,18%,36%)';
const primaryColor = 'hsl(208,94%,50%)';
const successColor = 'hsl(122,40%,48%)';
const dangerColor = 'hsl(4,90%,58%)';
const warningColor = 'hsl(40,100%,50%)';
const defaultColors = gradientColors(defaultColor);
const primaryColors = gradientColors(primaryColor);
const successColors = gradientColors(successColor);
const dangerColors = gradientColors(dangerColor);
const warningColors = gradientColors(warningColor);

const cssVariables = {
	defaultColor,
	defaultColor50: defaultColors[0],
	defaultColor100: defaultColors[1],
	defaultColor150: defaultColors[2],
	defaultColor200: defaultColors[3],
	defaultColor250: defaultColors[4],
	defaultColor300: defaultColors[5],
	defaultColor350: defaultColors[6],
	defaultColor400: defaultColors[7],
	defaultColor450: defaultColors[8],
	defaultColor500: defaultColor,
	defaultColor550: defaultColors[10],
	defaultColor600: defaultColors[11],
	defaultColor650: defaultColors[12],
	defaultColor700: defaultColors[13],
	defaultColor750: defaultColors[14],
	defaultColor800: defaultColors[15],
	defaultColor850: defaultColors[16],
	defaultColor900: defaultColors[17],
	defaultColor950: defaultColors[18],

	primaryColor,
	primaryColor50: primaryColors[0],
	primaryColor100: primaryColors[1],
	primaryColor150: primaryColors[2],
	primaryColor200: primaryColors[3],
	primaryColor250: primaryColors[4],
	primaryColor300: primaryColors[5],
	primaryColor350: primaryColors[6],
	primaryColor400: primaryColors[7],
	primaryColor450: primaryColors[8],
	primaryColor500: primaryColor,
	primaryColor550: primaryColors[10],
	primaryColor600: primaryColors[11],
	primaryColor650: primaryColors[12],
	primaryColor700: primaryColors[13],
	primaryColor750: primaryColors[14],
	primaryColor800: primaryColors[15],
	primaryColor850: primaryColors[16],
	primaryColor900: primaryColors[17],
	primaryColor950: primaryColors[18],

	successColor,
	successColor50: successColors[0],
	successColor100: successColors[1],
	successColor150: successColors[2],
	successColor200: successColors[3],
	successColor250: successColors[4],
	successColor300: successColors[5],
	successColor350: successColors[6],
	successColor400: successColors[7],
	successColor450: successColors[8],
	successColor500: successColor,
	successColor550: successColors[10],
	successColor600: successColors[11],
	successColor650: successColors[12],
	successColor700: successColors[13],
	successColor750: successColors[14],
	successColor800: successColors[15],
	successColor850: successColors[16],
	successColor900: successColors[17],
	successColor950: successColors[18],

	dangerColor,
	dangerColor50: dangerColors[0],
	dangerColor100: dangerColors[1],
	dangerColor150: dangerColors[2],
	dangerColor200: dangerColors[3],
	dangerColor250: dangerColors[4],
	dangerColor300: dangerColors[5],
	dangerColor350: dangerColors[6],
	dangerColor400: dangerColors[7],
	dangerColor450: dangerColors[8],
	dangerColor500: dangerColor,
	dangerColor550: dangerColors[10],
	dangerColor600: dangerColors[11],
	dangerColor650: dangerColors[12],
	dangerColor700: dangerColors[13],
	dangerColor750: dangerColors[14],
	dangerColor800: dangerColors[15],
	dangerColor850: dangerColors[16],
	dangerColor900: dangerColors[17],
	dangerColor950: dangerColors[18],

	warningColor,
	warningColor50: warningColors[0],
	warningColor100: warningColors[1],
	warningColor150: warningColors[2],
	warningColor200: warningColors[3],
	warningColor250: warningColors[4],
	warningColor300: warningColors[5],
	warningColor350: warningColors[6],
	warningColor400: warningColors[7],
	warningColor450: warningColors[8],
	warningColor500: warningColor,
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

// console.log(cssVariables);
// {
//   defaultColor: 'hsl(208,18%,36%)',
//   defaultColor50: 'hsl(208,18%,4%)',
//   defaultColor100: 'hsl(208,18%,7%)',
//   defaultColor150: 'hsl(208,18%,11%)',
//   defaultColor200: 'hsl(208,18%,14%)',
//   defaultColor250: 'hsl(208,18%,18%)',
//   defaultColor300: 'hsl(208,18%,22%)',
//   defaultColor350: 'hsl(208,18%,25%)',
//   defaultColor400: 'hsl(208,18%,29%)',
//   defaultColor450: 'hsl(208,18%,32%)',
//   defaultColor500: 'hsl(208,18%,36%)',
//   defaultColor550: 'hsl(208,18%,40%)',
//   defaultColor600: 'hsl(208,18%,43%)',
//   defaultColor650: 'hsl(208,18%,47%)',
//   defaultColor700: 'hsl(208,18%,50%)',
//   defaultColor750: 'hsl(208,18%,54%)',
//   defaultColor800: 'hsl(208,18%,58%)',
//   defaultColor850: 'hsl(208,18%,61%)',
//   defaultColor900: 'hsl(208,18%,65%)',
//   defaultColor950: 'hsl(208,18%,68%)',
//   primaryColor: 'hsl(208,94%,50%)',
//   primaryColor50: 'hsl(208,94%,5%)',
//   primaryColor100: 'hsl(208,94%,10%)',
//   primaryColor150: 'hsl(208,94%,15%)',
//   primaryColor200: 'hsl(208,94%,20%)',
//   primaryColor250: 'hsl(208,94%,25%)',
//   primaryColor300: 'hsl(208,94%,30%)',
//   primaryColor350: 'hsl(208,94%,35%)',
//   primaryColor400: 'hsl(208,94%,40%)',
//   primaryColor450: 'hsl(208,94%,45%)',
//   primaryColor500: 'hsl(208,94%,50%)',
//   primaryColor550: 'hsl(208,94%,55%)',
//   primaryColor600: 'hsl(208,94%,60%)',
//   primaryColor650: 'hsl(208,94%,65%)',
//   primaryColor700: 'hsl(208,94%,70%)',
//   primaryColor750: 'hsl(208,94%,75%)',
//   primaryColor800: 'hsl(208,94%,80%)',
//   primaryColor850: 'hsl(208,94%,85%)',
//   primaryColor900: 'hsl(208,94%,90%)',
//   primaryColor950: 'hsl(208,94%,95%)',
//   successColor: 'hsl(122,40%,48%)',
//   successColor50: 'hsl(122,40%,5%)',
//   successColor100: 'hsl(122,40%,10%)',
//   successColor150: 'hsl(122,40%,14%)',
//   successColor200: 'hsl(122,40%,19%)',
//   successColor250: 'hsl(122,40%,24%)',
//   successColor300: 'hsl(122,40%,29%)',
//   successColor350: 'hsl(122,40%,34%)',
//   successColor400: 'hsl(122,40%,38%)',
//   successColor450: 'hsl(122,40%,43%)',
//   successColor500: 'hsl(122,40%,48%)',
//   successColor550: 'hsl(122,40%,53%)',
//   successColor600: 'hsl(122,40%,58%)',
//   successColor650: 'hsl(122,40%,62%)',
//   successColor700: 'hsl(122,40%,67%)',
//   successColor750: 'hsl(122,40%,72%)',
//   successColor800: 'hsl(122,40%,77%)',
//   successColor850: 'hsl(122,40%,82%)',
//   successColor900: 'hsl(122,40%,86%)',
//   successColor950: 'hsl(122,40%,91%)',
//   dangerColor: 'hsl(4,90%,58%)',
//   dangerColor50: 'hsl(4,90%,4%)',
//   dangerColor100: 'hsl(4,90%,8%)',
//   dangerColor150: 'hsl(4,90%,13%)',
//   dangerColor200: 'hsl(4,90%,17%)',
//   dangerColor250: 'hsl(4,90%,21%)',
//   dangerColor300: 'hsl(4,90%,25%)',
//   dangerColor350: 'hsl(4,90%,29%)',
//   dangerColor400: 'hsl(4,90%,34%)',
//   dangerColor450: 'hsl(4,90%,38%)',
//   dangerColor500: 'hsl(4,90%,58%)',
//   dangerColor550: 'hsl(4,90%,62%)',
//   dangerColor600: 'hsl(4,90%,66%)',
//   dangerColor650: 'hsl(4,90%,71%)',
//   dangerColor700: 'hsl(4,90%,75%)',
//   dangerColor750: 'hsl(4,90%,79%)',
//   dangerColor800: 'hsl(4,90%,83%)',
//   dangerColor850: 'hsl(4,90%,87%)',
//   dangerColor900: 'hsl(4,90%,92%)',
//   dangerColor950: 'hsl(4,90%,96%)',
//   warningColor: 'hsl(40,100%,50%)',
//   warningColor50: 'hsl(40,100%,5%)',
//   warningColor100: 'hsl(40,100%,10%)',
//   warningColor150: 'hsl(40,100%,15%)',
//   warningColor200: 'hsl(40,100%,20%)',
//   warningColor250: 'hsl(40,100%,25%)',
//   warningColor300: 'hsl(40,100%,30%)',
//   warningColor350: 'hsl(40,100%,35%)',
//   warningColor400: 'hsl(40,100%,40%)',
//   warningColor450: 'hsl(40,100%,45%)',
//   warningColor500: 'hsl(40,100%,50%)',
//   warningColor550: 'hsl(40,100%,55%)',
//   warningColor600: 'hsl(40,100%,60%)',
//   warningColor650: 'hsl(40,100%,65%)',
//   warningColor700: 'hsl(40,100%,70%)',
//   warningColor750: 'hsl(40,100%,75%)',
//   warningColor800: 'hsl(40,100%,80%)',
//   warningColor850: 'hsl(40,100%,85%)',
//   warningColor900: 'hsl(40,100%,90%)',
//   warningColor950: 'hsl(40,100%,95%)'
// }

module.exports = cssVariables;
