module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		textUnderlineOffset: {
			"text-decoration-color": "red",
		},
		fontFamily: {
			mainFont: ["Sora", "sans-serif"],
		},
		extend: {
			colors: {
				"stepn-pink": "#e943ff",
				"stepn-light-purple": "#be8ae9",
				"stepn-blue-off-purple": "#7a50c7",
			},
		},
	},
	plugins: [],
};

/*
fontFamily: {
	mainFont: ["Space Mono", "monospace"],
},



*/
