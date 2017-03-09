

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

//This function will determine user horoscope based on input:
function horoscope(){
	var userdata = document.getElementById("userinfo").value.toLowerCase();//using .value to get the user's input value.
	document.write(userdata);

//Need to create a for loop. Userinfo to go thru zodiac array.
	for(i=0; i<zodiac.length; i++){
		if(userdata == zodiac[i].sign) {
			document.write("Here is your request: " + zodiac[i].fortune);
			document.write("Stone association: " + zodiac[i].stone);
			document.write("This is your element association: " + zodiac[i].element);
			return
		}
		else {
			document.write("Please resubmit correct zodiac sign.");
		}
	}
}









