
	var zodiac = [
	{
		sign: "aries",
		element: "fire",
		stone: "diamond",
		fortune:  "Active, Demanding, Determined, Effective, Ambitious"
	},
	{
		sign: "taurus",
		element: "earth",
		stone: "emerald",
		fortune: "Security, Subtle strength, Appreciation, Instruction, Patience"
	},
	{
		sign: "gemini",
		element: "air",
		stone: "aquamarine",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable"
	},
	{
		sign: "cancer",
		element: "water",
		stone: "moonstone",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective"
	},
	{
		sign: "leo",
		element: "fire",
		stone: "peridot",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative"
	},
	{
		sign: "virgo",
		element: "earth",
		stone: "sapphire",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful"
	},
	{
		sign: "libra",
		element: "air",
		stone: "opals",
		fortune: "Balance, Justice, Truth, Beauty, Perfection"
	},
	{
		sign: "scorpio",
		element: "water",
		stone: "topaz",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding"
	},
	{
		sign: "sagittarius",
		element: "fire",
		stone: "turquois",
		fortune: "Philosophical, Motion, Experimentation, Optimism"
	},
	{
		sign: "capricorn",
		element: "earth",
		stone: "garnet",
		fortune: "Determination, Dominance, Perservering, Practical, Willful"
	},
	{
		sign: "aquarius",
		element: "air",
		stone: "amethyst",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous"
	},
	{
		sign: "pisces",
		element: "water",
		stone: "bloodstone",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive"
	}
];


function choice(z, e){
	var row = document.getElementById("choice");
	var main = document.getElementById("main");

	var div = document.createElement('DIV');
	var button = document.createElement('DIV');
	var info = document.createElement('DIV');
	var ul = document.createElement('UL');
	var element = document.createElement('LI');
	var fortune = document.createElement('LI');
	var sign = document.createElement('LI');
	var stone = document.createElement('LI');


	var btnText = document.createTextNode('Pick Again');
	var elementText = document.createTextNode(z.element);
	var fortuneText = document.createTextNode(z.fortune);
	var signText = document.createTextNode(z.sign);
	var stoneText = document.createTextNode(z.stone);

	element.appendChild(elementText);
	fortune.appendChild(fortuneText);
	sign.appendChild(signText);
	stone.appendChild(stoneText);


	ul.appendChild(element);
	ul.appendChild(fortune);
	ul.appendChild(sign);
	ul.appendChild(stone);
	ul.classList.add('text-big');
	info.appendChild(ul);

	info.classList.add("col-xs-8");

	e.classList.remove("col-lg-4");
	e.classList.remove("col-sm-6");
	e.classList.add("col-xs-12");
	e.classList.add("not-clickable");

	button.appendChild(btnText);
	button.setAttribute("onclick", "reset()");

	button.className += " btn btn-lg btn-default col-xs-6 col-xs-offset-3";
	div.className += " col-xs-4 text-center";

	div.appendChild(e);
	div.appendChild(button); 

	row.appendChild(div);
	row.appendChild(info);

	main.className += " disappear";
}

function reset(){
	location.reload();
}

function process(elm){
	for(i=0; i<zodiac.length; i++){
		if(elm.id === zodiac[i].sign){
			choice(zodiac[i], elm);
		}
	}
}