(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "Anim": {
    	"style_name": "animation"
    },

    "Animdel": {
    	"style_name": "animation-delay"
    },

    "Animdir": {
    	"style_name": "animation-direction",
    	"modifiers": {
    		"a": "alternate",
    		"ar": "alternate-reverse",
    		"n": "normal",
    		"r": "reverse"
    	}
    },

    "Animdur": {
    	"style_name": "animation-duration"
    },

    "Animfm": {
    	"style_name": "animation-fill-mode",
    	"modifiers": {
    		"b": "backwards",
    		"bo": "both",
    		"f": "forwards",
    		"n": "none"
    	}
    },

    "Animic": {
    	"style_name": "animation-iteration-count",
    	"modifiers": {
    		"i": "infinite"
    	}
    },

    "Animn": {
    	"style_name": "animation-name",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Animps": {
    	"style_name": "animation-play-state",
    	"modifiers": {
    		"p": "paused",
    		"r": "running"
    	}
    },

    "Animtf": {
    	"style_name": "animation-timing-function",
    	"modifiers": {
    		"e": "ease",
    		"ei": "ease-in",
    		"eo": "ease-out",
    		"eio": "ease-in-out",
    		"l": "linear",
    		"se": "step-end",
    		"ss": "step-start"
    	}
    },

    "Bd": {
    	"style_name": "border",
    	"modifiers": {
    		"0": "0",
    		"n": "none"
    	}
    },

    "Bdx": {
    	"style_name": ["border-left", "border-right"],
        "isMultiLine": true
    },

    "Bdy": {
    	"style_name": ["border-top", "border-bottom"],
        "isMultiLine": true
    },

    "Bdt": {
    	"style_name": "border-top"
    },

    "Bdend": {
    	"style_name": "border-right"
    },

    "Bdb": {
    	"style_name": "border-bottom"
    },

    "Bdstart": {
    	"style_name": "border-left"
    },

    "Bdc": {
    	"style_name": "border-color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Bdtc": {
    	"style_name": "border-top-color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Bdendc": {
    	"style_name": "border-right-color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Bdbc": {
    	"style_name": "border-bottom-color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Bdstartc": {
    	"style_name": "border-left-color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Bdsp": {
    	"style_name": "border-spacing",
    	"modifiers": {
    		"i": "inherit"
    	}
    },

    "Bds": {
    	"style_name": "border-style",
    	"modifiers": {
    		"d": "dotted",
    		"da": "dashed",
    		"do": "double",
    		"g": "groove",
    		"h": "hidden",
    		"i": "inset",
    		"n": "none",
    		"o": "outset",
    		"r": "ridge",
    		"s": "solid"
    	}
    },

    "Bdts": {
    	"style_name": "border-top-style",
    	"modifiers": {
    		"d": "dotted",
    		"da": "dashed",
    		"do": "double",
    		"g": "groove",
    		"h": "hidden",
    		"i": "inset",
    		"n": "none",
    		"o": "outset",
    		"r": "ridge",
    		"s": "solid"
    	}
    },

    "Bdends": {
    	"style_name": "border-right-style",
    	"modifiers": {
    		"d": "dotted",
    		"da": "dashed",
    		"do": "double",
    		"g": "groove",
    		"h": "hidden",
    		"i": "inset",
    		"n": "none",
    		"o": "outset",
    		"r": "ridge",
    		"s": "solid"
    	}
    },

    "Bdbs": {
    	"style_name": "border-bottom-style",
    	"modifiers": {
    		"d": "dotted",
    		"da": "dashed",
    		"do": "double",
    		"g": "groove",
    		"h": "hidden",
    		"i": "inset",
    		"n": "none",
    		"o": "outset",
    		"r": "ridge",
    		"s": "solid"
    	}
    },

    "Bdstarts": {
    	"style_name": "border-left-style",
    	"modifiers": {
    		"d": "dotted",
    		"da": "dashed",
    		"do": "double",
    		"g": "groove",
    		"h": "hidden",
    		"i": "inset",
    		"n": "none",
    		"o": "outset",
    		"r": "ridge",
    		"s": "solid"
    	}
    },

    "Bdw": {
    	"style_name": "border-width",
    	"modifiers": {
    		"m": "medium",
    		"t": "thin",
    		"th": "thick"
    	}
    },

    "Bdtw": {
    	"style_name": "border-top-width",
    	"modifiers": {
    		"m": "medium",
    		"t": "thin",
    		"th": "thick"
    	}
    },

    "Bdendw": {
    	"style_name": "border-right-width",
    	"modifiers": {
    		"m": "medium",
    		"t": "thin",
    		"th": "thick"
    	}
    },

    "Bdbw": {
    	"style_name": "border-bottom-width",
    	"modifiers": {
    		"m": "medium",
    		"t": "thin",
    		"th": "thick"
    	}
    },

    "Bdstartw": {
    	"style_name": "border-left-width",
    	"modifiers": {
    		"m": "medium",
    		"t": "thin",
    		"th": "thick"
    	}
    },

    "Bdrs": {
    	"style_name": "border-radius"
    },

    "Bdrstend": {
    	"style_name": "border-top-right-radius"
    },

    "Bdrsbend": {
    	"style_name": "border-bottom-right-radius"
    },

    "Bdrsbstart": {
    	"style_name": "border-bottom-left-radius"
    },

    "Bdrststart": {
    	"style_name": "border-top-left-radius"
    },

    "Bg": {
    	"style_name": "background",
    	"modifiers": {
    		"n": "none",
    		"t": "transparent"
    	}
    },

    "Bgi": {
    	"style_name": "background-image",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Bgc": {
    	"style_name": "background-color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Bgcp": {
    	"style_name": "background-clip",
    	"modifiers": {
    		"bb": "border-box",
    		"cb": "content-box",
    		"pb": "padding-box"
    	}
    },

    "Bgo": {
    	"style_name": "background-origin",
    	"modifiers": {
    		"bb": "border-box",
    		"cb": "content-box",
    		"pb": "padding-box"
    	}
    },

    "Bgz": {
    	"style_name": "background-size",
    	"modifiers": {
    		"a": "auto",
    		"ct": "contain",
    		"cv": "cover"
    	}
    },

    "Bga": {
    	"style_name": "background-attachment",
    	"modifiers": {
    		"f": "fixed",
    		"l": "local",
    		"s": "scroll"
    	}
    },

    "Bgp": {
    	"style_name": "background-position",
    	"modifiers": {
    		"start_t": "left 0",
    		"end_t": "right 0",
    		"start_b": "left 100%",
    		"end_b": "right 100%",
    		"start_c": "left center",
    		"end_c": "right center",
    		"c_b": "center 100%",
    		"c_t": "center 0",
    		"c": "center"
    	}
    },

    "Bgpx": {
    	"style_name": "background-position-x",
    	"modifiers": {
    		"start": "left",
    		"end": "right",
    		"c": "50%"
    	}
    },

    "Bgpy": {
    	"style_name": "background-position-y",
    	"modifiers": {
    		"t": "0",
    		"b": "100%",
    		"c": "50%"
    	}
    },

    "Bgr": {
    	"style_name": "background-repeat",
    	"modifiers": {
    		"nr": "no-repeat",
    		"rx": "repeat-x",
    		"ry": "repeat-y",
    		"r": "repeat",
    		"s": "space",
    		"ro": "round"
    	}
    },

    "Bdcl": {
    	"style_name": "border-collapse",
    	"modifiers": {
    		"c": "collapse",
    		"s": "separate"
    	}
    },

    "Bxz": {
    	"style_name": "box-sizing",
    	"modifiers": {
    		"cb": "content-box",
    		"pb": "padding-box",
    		"bb": "border-box"
    	}
    },

    "Bxsh": {
    	"style_name": "box-shadow",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Cl": {
    	"style_name": "clear",
    	"modifiers": {
    		"n": "none",
    		"b": "both",
    		"start": "left",
    		"end": "right"
    	}
    },

    "C": {
    	"style_name": "color",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Ctn": {
    	"style_name": "contain",
    	"modifiers": {
    		"n": "none",
    		"st": "strict",
    		"c": "content",
    		"z": "size",
    		"l": "layout",
    		"s": "style",
    		"p": "paint"
    	}
    },

    "Cnt": {
    	"style_name": "content",
    	"modifiers": {
    		"n": "none",
    		"nor": "normal",
    		"oq": "open-quote",
    		"cq": "close-quote",
    		"noq": "no-open-quote",
    		"ncq": "no-close-quote"
    	}
    },

    "Cur": {
    	"style_name": "cursor",
    	"modifiers": {
    		"a": "auto",
    		"as": "all-scroll",
    		"c": "cell",
    		"cr": "col-resize",
    		"co": "copy",
    		"cro": "crosshair",
    		"d": "default",
    		"er": "e-resize",
    		"ewr": "ew-resize",
    		"g": "grab",
    		"gr": "grabbing",
    		"h": "help",
    		"m": "move",
    		"n": "none",
    		"nd": "no-drop",
    		"na": "not-allowed",
    		"nr": "n-resize",
    		"ner": "ne-resize",
    		"neswr": "nesw-resize",
    		"nwser": "nwse-resize",
    		"nsr": "ns-resize",
    		"nwr": "nw-resize",
    		"p": "pointer",
    		"pr": "progress",
    		"rr": "row-resize",
    		"sr": "s-resize",
    		"ser": "se-resize",
    		"swr": "sw-resize",
    		"t": "text",
    		"vt": "vertical-text",
    		"w": "wait",
    		"wr": "w-resize",
    		"zi": "zoom-in",
    		"zo": "zoom-out"
    	}
    },

    "D": {
    	"style_name": "display",
    	"modifiers": {
    		"n": "none",
    		"b": "block",
    		"f": "flex",
    		"if": "inline-flex",
    		"i": "inline",
    		"ib": "inline-block",
    		"tb": "table",
    		"tbr": "table-row",
    		"tbc": "table-cell",
    		"li": "list-item",
    		"ri": "run-in",
    		"cp": "compact",
    		"itb": "inline-table",
    		"tbcl": "table-column",
    		"tbclg": "table-column-group",
    		"tbhg": "table-header-group",
    		"tbfg": "table-footer-group",
    		"tbrg": "table-row-group"
    	}
    },

    "Fil": {
    	"style_name": "filter",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Blur": {
    	"style_name": "filter: blur",
    	"isFuncStyle": true
    },

    "Brightness": {
    	"style_name": "filter: brightness",
    	"isFuncStyle": true
    },

    "Contrast": {
    	"style_name": "filter: contrast",
    	"isFuncStyle": true
    },

    "Dropshadow": {
    	"style_name": "filter: drop-shadow",
    	"isFuncStyle": true
    },

    "Grayscale": {
    	"style_name": "filter: grayscale",
    	"isFuncStyle": true
    },

    "HueRotate": {
    	"style_name": "filter: hue-rotate",
    	"isFuncStyle": true
    },

    "Invert": {
    	"style_name": "filter: invert",
    	"isFuncStyle": true
    },

    "Opacity": {
    	"style_name": "filter: opacity",
    	"isFuncStyle": true
    },

    "Saturate": {
    	"style_name": "filter: saturate",
    	"isFuncStyle": true
    },

    "Sepia": {
    	"style_name": "filter: sepia",
    	"isFuncStyle": true
    },

    "Flx": {
    	"style_name": "flex",
    	"modifiers": {
    		"a": "auto",
    		"n": "none"
    	}
    },

    "Flxg": {
    	"style_name": "flex-grow"
    },

    "Flxs": {
    	"style_name": "flex-shrink"
    },

    "Flxb": {
    	"style_name": "flex-basis",
    	"modifiers": {
    		"a": "auto",
    		"n": "none"
    	}
    },

    "As": {
    	"style_name": "align-self",
    	"modifiers": {
    		"a": "auto",
    		"fs": "flex-start",
    		"fe": "flex-end",
    		"c": "center",
    		"b": "baseline",
    		"st": "stretch"
    	}
    },

    "Fld": {
    	"style_name": "flex-direction",
    	"modifiers": {
    		"r": "row",
    		"rr": "row-reverse",
    		"c": "column",
    		"cr": "column-reverse"
    	}
    },

    "Flf": {
    	"style_name": "flex-flow",
    	"modifiers": {
    		"r": "row",
    		"rr": "row-reverse",
    		"c": "column",
    		"cr": "column-reverse",
    		"nw": "nowrap",
    		"w": "wrap",
    		"wr": "wrap-reverse"
    	}
    },

    "Ai": {
    	"style_name": "align-items",
    	"modifiers": {
    		"fs": "flex-start",
    		"fe": "flex-end",
    		"c": "center",
    		"b": "baseline",
    		"st": "stretch"
    	}
    },

    "Ac": {
    	"style_name": "align-content",
    	"modifiers": {
    		"fs": "flex-start",
    		"fe": "flex-end",
    		"c": "center",
    		"sb": "space-between",
    		"sa": "space-around",
    		"st": "stretch"
    	}
    },

    "Or": {
    	"style_name": "order"
    },

    "Jc": {
    	"style_name": "justify-content",
    	"modifiers": {
    		"fs": "flex-start",
    		"fe": "flex-end",
    		"c": "center",
    		"sb": "space-between",
    		"sa": "space-around"
    	}
    },

    "Flw": {
    	"style_name": "flex-wrap",
    	"modifiers": {
    		"nw": "nowrap",
    		"w": "wrap",
    		"wr": "wrap-reverse"
    	}
    },

    "Fl": {
    	"style_name": "float",
    	"modifiers": {
    		"n": "none",
    		"start": "left",
    		"end": "right"
    	}
    },

    "Ff": {
    	"style_name": "font-family",
    	"modifiers": {
    		"c": "\"Monotype Corsiva\", \"Comic Sans MS\", cursive",
    		"f": "Capitals, Impact, fantasy",
    		"m": "Monaco, \"Courier New\", monospace",
    		"s": "Georgia, \"Times New Roman\", serif",
    		"ss": "Helvetica, Arial, sans-serif"
    	}
    },

    "Fw": {
    	"style_name": "font-weight",
    	"modifiers": {
    		"100": "100",
    		"200": "200",
    		"300": "300",
    		"400": "400",
    		"500": "500",
    		"600": "600",
    		"700": "700",
    		"800": "800",
    		"900": "900",
    		"b": "bold",
    		"br": "bolder",
    		"lr": "lighter",
    		"n": "normal"
    	}
    },

    "Fz": {
    	"style_name": "font-size"
    },

    "Fs": {
    	"style_name": "font-style",
    	"modifiers": {
    		"n": "normal",
    		"i": "italic",
    		"o": "oblique"
    	}
    },

    "Fv": {
    	"style_name": "font-variant",
    	"modifiers": {
    		"n": "normal",
    		"sc": "small-caps"
    	}
    },

    "H": {
    	"style_name": "height",
    	"modifiers": {
    		"0": "0",
    		"a": "auto",
    		"av": "available",
    		"bb": "border-box",
    		"cb": "content-box",
    		"fc": "fit-content",
    		"maxc": "max-content",
    		"minc": "min-content"
    	}
    },

    "Hy": {
    	"style_name": "hyphens",
    	"modifiers": {
    		"a": "auto",
    		"n": "normal",
    		"m": "manual"
    	}
    },

    "Lts": {
    	"style_name": "letter-spacing",
    	"modifiers": {
    		"n": "normal"
    	}
    },

    "List": {
    	"style_name": "list-style-type",
    	"modifiers": {
    		"n": "none",
    		"d": "disc",
    		"c": "circle",
    		"s": "square",
    		"dc": "decimal",
    		"dclz": "decimal-leading-zero",
    		"lr": "lower-roman",
    		"lg": "lower-greek",
    		"ll": "lower-latin",
    		"ur": "upper-roman",
    		"ul": "upper-latin",
    		"a": "armenian",
    		"g": "georgian",
    		"la": "lower-alpha",
    		"ua": "upper-alpha"
    	}
    },

    "Lisp": {
    	"style_name": "list-style-position",
    	"modifiers": {
    		"i": "inside",
    		"o": "outside"
    	}
    },

    "Lisi": {
    	"style_name": "list-style-image",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Lh": {
    	"style_name": "line-height",
    	"modifiers": {
    		"n": "normal"
    	}
    },

    "M": {
    	"style_name": "margin",
    	"modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "Mx": {
    	"style_name": ["margin-left", "margin-right"],
        "isMultiLine": true,
        "modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "My": {
    	"style_name": ["margin-top", "margin-bottom"],
        "isMultiLine": true,
        "modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "Mt": {
    	"style_name": "margin-top",
    	"modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "Mend": {
    	"style_name": "margin-right",
    	"modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "Mb": {
    	"style_name": "margin-bottom",
    	"modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "Mstart": {
    	"style_name": "margin-left",
    	"modifiers": {
    		"0": "0",
    		"a": "auto"
    	}
    },

    "Mah": {
    	"style_name": "max-height",
    	"modifiers": {
    		"a": "auto",
    		"maxc": "max-content",
    		"minc": "min-content",
    		"fa": "fill-available",
    		"fc": "fit-content"
    	}
    },

    "Maw": {
    	"style_name": "max-width",
    	"modifiers": {
    		"n": "none",
    		"fa": "fill-available",
    		"fc": "fit-content",
    		"maxc": "max-content",
    		"minc": "min-content"
    	}
    },

    "Mih": {
    	"style_name": "min-height",
    	"modifiers": {
    		"a": "auto",
    		"fa": "fill-available",
    		"fc": "fit-content",
    		"maxc": "max-content",
    		"minc": "min-content"
    	}
    },

    "Miw": {
    	"style_name": "min-width",
    	"modifiers": {
    		"a": "auto",
    		"fa": "fill-available",
    		"fc": "fit-content",
    		"ini": "initial",
    		"maxc": "max-content",
    		"minc": "min-content"
    	}
    },

    "O": {
    	"style_name": "outline",
    	"modifiers": {
    		"0": "0",
    		"n": "none"
    	}
    },

    "T": {
    	"style_name": "top",
    	"modifiers": {
    		"a": "auto"
    	}
    },

    "End": {
    	"style_name": "right",
    	"modifiers": {
    		"a": "auto"
    	}
    },

    "B": {
    	"style_name": "bottom",
    	"modifiers": {
    		"a": "auto"
    	}
    },

    "Start": {
    	"style_name": "left",
    	"modifiers": {
    		"a": "auto"
    	}
    },

    "Op": {
    	"style_name": "opacity",
    	"modifiers": {
    		"0": "0",
    		"1": "1"
    	}
    },

    "Ov": {
    	"style_name": "overflow",
    	"modifiers": {
    		"a": "auto",
    		"h": "hidden",
    		"s": "scroll",
    		"v": "visible"
    	}
    },

    "Ovx": {
    	"style_name": "overflow-x",
    	"modifiers": {
    		"a": "auto",
    		"h": "hidden",
    		"s": "scroll",
    		"v": "visible"
    	}
    },

    "Ovy": {
    	"style_name": "overflow-y",
    	"modifiers": {
    		"a": "auto",
    		"h": "hidden",
    		"s": "scroll",
    		"v": "visible"
    	}
    },

    "Ovs": {
    	"style_name": "-webkit-overflow-scrolling",
    	"modifiers": {
    		"a": "auto",
    		"touch": "touch"
    	}
    },

    "P": {
    	"style_name": "padding"
    },

    "Px": {
    	"style_name": ["padding-left", "padding-right"],
        "isMultiLine": true
    },

    "Py": {
    	"style_name": ["padding-top", "padding-bottom"],
        "isMultiLine": true
    },

    "Pt": {
    	"style_name": "padding-top"
    },

    "Pend": {
    	"style_name": "padding-right"
    },

    "Pb": {
    	"style_name": "padding-bottom"
    },

    "Pstart": {
    	"style_name": "padding-left"
    },

    "Pe": {
    	"style_name": "pointer-events",
    	"modifiers": {
    		"a": "auto",
    		"all": "all",
    		"f": "fill",
    		"n": "none",
    		"p": "painted",
    		"s": "stroke",
    		"v": "visible",
    		"vf": "visibleFill",
    		"vp": "visiblePainted",
    		"vs": "visibleStroke"
    	}
    },

    "Pos": {
    	"style_name": "position",
    	"modifiers": {
    		"a": "absolute",
    		"f": "fixed",
    		"r": "relative",
    		"s": "static",
    		"st": "sticky"
    	}
    },

    "Tbl": {
    	"style_name": "table-layout",
    	"modifiers": {
    		"a": "auto",
    		"f": "fixed"
    	}
    },

    "Ta": {
    	"style_name": "text-align",
    	"modifiers": {
    		"c": "center",
    		"e": "end",
    		"end": "right",
    		"j": "justify",
    		"mp": "match-parent",
    		"s": "start",
    		"start": "left"
    	}
    },

    "Tal": {
    	"style_name": "text-align-last",
    	"modifiers": {
    		"a": "auto",
    		"c": "center",
    		"e": "end",
    		"end": "right",
    		"j": "justify",
    		"s": "start",
    		"start": "left"
    	}
    },

    "Td": {
    	"style_name": "text-decoration",
    	"modifiers": {
    		"lt": "line-through",
    		"n": "none",
    		"o": "overline",
    		"u": "underline"
    	}
    },

    "Ti": {
    	"style_name": "text-indent"
    },

    "Tov": {
    	"style_name": "text-overflow",
    	"modifiers": {
    		"c": "clip",
    		"e": "ellipsis"
    	}
    },

    "Tren": {
    	"style_name": "text-rendering",
    	"modifiers": {
    		"a": "auto",
    		"os": "optimizeSpeed",
    		"ol": "optimizeLegibility",
    		"gp": "geometricPrecision"
    	}
    },

    "Tr": {
    	"style_name": "text-replace",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Tt": {
    	"style_name": "text-transform",
    	"modifiers": {
    		"n": "none",
    		"c": "capitalize",
    		"u": "uppercase",
    		"l": "lowercase"
    	}
    },

    "Tsh": {
    	"style_name": "text-shadow",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Trf": {
    	"style_name": "transform"
    },

    "Trfo": {
    	"style_name": "transform-origin",
    	"modifiers": {
    		"t": "top",
    		"t,t": "top top",
    		"t,end": "top right",
    		"t,bottom": "top bottom",
    		"t,start": "top left",
    		"t,c": "top center",
    		"end": "right",
    		"end,t": "right top",
    		"end,end": "right right",
    		"end,bottom": "right bottom",
    		"end,start": "right left",
    		"end,c": "right center",
    		"bottom": "bottom",
    		"bottom,t": "bottom top",
    		"bottom,end": "bottom right",
    		"bottom,bottom": "bottom bottom",
    		"bottom,start": "bottom left",
    		"bottom,c": "bottom center",
    		"start": "left",
    		"start,t": "left top",
    		"start,end": "left right",
    		"start,bottom": "left bottom",
    		"start,start": "left left",
    		"start,c": "left center",
    		"c": "center",
    		"c,t": "center top",
    		"c,end": "center right",
    		"c,bottom": "center bottom",
    		"c,start": "center left",
    		"c,c": "center center"
    	}
    },

    "Trfs": {
    	"style_name": "transform-style",
    	"modifiers": {
    		"f": "flat",
    		"p": "preserve-3d"
    	}
    },

    "Prs": {
    	"style_name": "perspective",
    	"modifiers": {
    		"n": "none"
    	}
    },

    "Prso": {
    	"style_name": "perspective-origin",
    	"modifiers": {
    		"t": "top",
    		"t,t": "top top",
    		"t,end": "top right",
    		"t,bottom": "top bottom",
    		"t,start": "top left",
    		"t,c": "top center",
    		"end": "right",
    		"end,t": "right top",
    		"end,end": "right right",
    		"end,bottom": "right bottom",
    		"end,start": "right left",
    		"end,c": "right center",
    		"bottom": "bottom",
    		"bottom,t": "bottom top",
    		"bottom,end": "bottom right",
    		"bottom,bottom": "bottom bottom",
    		"bottom,start": "bottom left",
    		"bottom,c": "bottom center",
    		"start": "left",
    		"start,t": "left top",
    		"start,end": "left right",
    		"start,bottom": "left bottom",
    		"start,start": "left left",
    		"start,c": "left center",
    		"c": "center",
    		"c,t": "center top",
    		"c,end": "center right",
    		"c,bottom": "center bottom",
    		"c,start": "center left",
    		"c,c": "center center"
    	}
    },

    "Bfv": {
    	"style_name": "backface-visibility",
    	"modifiers": {
    		"h": "hidden",
    		"v": "visible"
    	}
    },

    "Matrix": {
    	"style_name": "transform: matrix",
    	"isFuncStyle": true
    },

    "Matrix3d": {
    	"style_name": "transform: matrix3d",
    	"isFuncStyle": true
    },

    "Rotate": {
    	"style_name": "transform: rotate",
    	"isFuncStyle": true
    },

    "Rotate3d": {
    	"style_name": "transform: rotate3d",
    	"isFuncStyle": true
    },

    "RotateX": {
    	"style_name": "transform: rotateX",
    	"isFuncStyle": true
    },

    "RotateY": {
    	"style_name": "transform: rotateY",
    	"isFuncStyle": true
    },

    "RotateZ": {
    	"style_name": "transform: rotateZ",
    	"isFuncStyle": true
    },

    "Scale": {
    	"style_name": "transform: scale",
    	"isFuncStyle": true
    },

    "Scale3d": {
    	"style_name": "transform: scale3d",
    	"isFuncStyle": true
    },

    "ScaleX": {
    	"style_name": "transform: scaleX",
    	"isFuncStyle": true
    },

    "ScaleY": {
    	"style_name": "transform: scaleY",
    	"isFuncStyle": true
    },

    "Skew": {
    	"style_name": "transform: skew",
    	"isFuncStyle": true
    },

    "SkewX": {
    	"style_name": "transform: skewX",
    	"isFuncStyle": true
    },

    "SkewY": {
    	"style_name": "transform: skewY",
    	"isFuncStyle": true
    },

    "Translate": {
    	"style_name": "transform: translate",
    	"isFuncStyle": true
    },

    "Translate3d": {
    	"style_name": "transform: translate3d",
    	"isFuncStyle": true
    },

    "TranslateX": {
    	"style_name": "transform: translateX",
    	"isFuncStyle": true
    },

    "TranslateY": {
    	"style_name": "transform: translateY",
    	"isFuncStyle": true
    },

    "TranslateZ": {
    	"style_name": "transform: translateZ",
    	"isFuncStyle": true
    },

    "Trs": {
    	"style_name": "transition"
    },

    "Trsde": {
    	"style_name": "transition-delay",
    	"modifiers": {
    		"i": "initial"
    	}
    },

    "Trsdu": {
    	"style_name": "transition-duration"
    },

    "Trsp": {
    	"style_name": "transition-property",
    	"modifiers": {
    		"a": "all"
    	}
    },

    "Trstf": {
    	"style_name": "transition-timing-function",
    	"modifiers": {
    		"e": "ease",
    		"ei": "ease-in",
    		"eo": "ease-out",
    		"eio": "ease-in-out",
    		"l": "linear",
    		"ss": "step-start",
    		"se": "step-end"
    	}
    },

    "Us": {
    	"style_name": "user-select",
    	"modifiers": {
    		"a": "all",
    		"el": "element",
    		"els": "elements",
    		"n": "none",
    		"t": "text",
    		"to": "toggle"
    	}
    },

    "Va": {
    	"style_name": "vertical-align",
    	"modifiers": {
    		"b": "bottom",
    		"bl": "baseline",
    		"m": "middle",
    		"sub": "sub",
    		"sup": "super",
    		"t": "top",
    		"tb": "text-bottom",
    		"tt": "text-top"
    	}
    },

    "V": {
    	"style_name": "visibility",
    	"modifiers": {
    		"v": "visible",
    		"h": "hidden",
    		"c": "collapse"
    	}
    },

    "Whs": {
    	"style_name": "white-space",
    	"modifiers": {
    		"n": "normal",
    		"p": "pre",
    		"nw": "nowrap",
    		"pw": "pre-wrap",
    		"pl": "pre-line"
    	}
    },

    "Whsc": {
    	"style_name": "white-space-collapse",
    	"modifiers": {
    		"n": "normal",
    		"ka": "keep-all",
    		"l": "loose",
    		"bs": "break-strict",
    		"ba": "break-all"
    	}
    },

    "W": {
    	"style_name": "width",
    	"modifiers": {
    		"0": "0",
    		"a": "auto",
    		"bb": "border-box",
    		"cb": "content-box",
    		"av": "available",
    		"minc": "min-content",
    		"maxc": "max-content",
    		"fc": "fit-content"
    	}
    },

    "Wob": {
    	"style_name": "word-break",
    	"modifiers": {
    		"ba": "break-all",
    		"ka": "keep-all",
    		"n": "normal"
    	}
    },

    "Wow": {
    	"style_name": "word-wrap",
    	"modifiers": {
    		"bw": "break-word",
    		"n": "normal"
    	}
    },

    "Z": {
    	"style_name": "z-index",
    	"modifiers": {
    		"a": "auto"
    	}
    },

    "Fill": {
    	"style_name": "fill",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Stk": {
    	"style_name": "stroke",
    	"modifiers": {
    		"t": "transparent",
    		"cc": "currentColor",
    		"n": "none",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "Stkw": {
    	"style_name": "stroke-width",
    	"modifiers": {
    		"i": "inherit"
    	}
    },

    "Stklc": {
    	"style_name": "stroke-linecap",
    	"modifiers": {
    		"i": "inherit",
    		"b": "butt",
    		"r": "round",
    		"s": "square"
    	}
    },

    "Stklj": {
    	"style_name": "stroke-linejoin",
    	"modifiers": {
    		"i": "inherit",
    		"b": "bevel",
    		"r": "round",
    		"m": "miter"
    	}
    }
}

},{}],2:[function(require,module,exports){
module.exports={
    "animation": {
    	"style_name": "Anim"
    },

    "animation-delay": {
    	"style_name": "Animdel"
    },

    "animation-direction": {
    	"style_name": "Animdir",
    	"modifiers": {
    		"alternate": "a",
    		"alternate-reverse": "ar",
    		"normal": "n",
    		"reverse": "r"
    	}
    },

    "animation-duration": {
    	"style_name": "Animdur"
    },

    "animation-fill-mode": {
    	"style_name": "Animfm",
    	"modifiers": {
    		"backwards": "b",
    		"both": "bo",
    		"forwards": "f",
    		"none": "n"
    	}
    },

    "animation-iteration-count": {
    	"style_name": "Animic",
    	"modifiers": {
    		"infinite": "i"
    	}
    },

    "animation-name": {
    	"style_name": "Animn",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "animation-play-state": {
    	"style_name": "Animps",
    	"modifiers": {
    		"paused": "p",
    		"running": "r"
    	}
    },

    "animation-timing-function": {
    	"style_name": "Animtf",
    	"modifiers": {
    		"ease": "e",
    		"ease-in": "ei",
    		"ease-out": "eo",
    		"ease-in-out": "eio",
    		"linear": "l",
    		"step-end": "se",
    		"step-start": "ss"
    	}
    },

    "border": {
    	"style_name": "Bd",
    	"modifiers": {
    		"0": "0",
    		"none": "n"
    	}
    },

    "border-top": {
    	"style_name": "Bdt"
    },

    "border-right": {
    	"style_name": "Bdend"
    },

    "border-bottom": {
    	"style_name": "Bdb"
    },

    "border-left": {
    	"style_name": "Bdstart"
    },

    "border-color": {
    	"style_name": "Bdc",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "border-top-color": {
    	"style_name": "Bdtc",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "border-right-color": {
    	"style_name": "Bdendc",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "border-bottom-color": {
    	"style_name": "Bdbc",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "border-left-color": {
    	"style_name": "Bdstartc",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "border-spacing": {
    	"style_name": "Bdsp",
    	"modifiers": {
    		"inherit": "i"
    	}
    },

    "border-style": {
    	"style_name": "Bds",
    	"modifiers": {
    		"dotted": "d",
    		"dashed": "da",
    		"double": "do",
    		"groove": "g",
    		"hidden": "h",
    		"inset": "i",
    		"none": "n",
    		"outset": "o",
    		"ridge": "r",
    		"solid": "s"
    	}
    },

    "border-top-style": {
    	"style_name": "Bdts",
    	"modifiers": {
    		"dotted": "d",
    		"dashed": "da",
    		"double": "do",
    		"groove": "g",
    		"hidden": "h",
    		"inset": "i",
    		"none": "n",
    		"outset": "o",
    		"ridge": "r",
    		"solid": "s"
    	}
    },

    "border-right-style": {
    	"style_name": "Bdends",
    	"modifiers": {
    		"dotted": "d",
    		"dashed": "da",
    		"double": "do",
    		"groove": "g",
    		"hidden": "h",
    		"inset": "i",
    		"none": "n",
    		"outset": "o",
    		"ridge": "r",
    		"solid": "s"
    	}
    },

    "border-bottom-style": {
    	"style_name": "Bdbs",
    	"modifiers": {
    		"dotted": "d",
    		"dashed": "da",
    		"double": "do",
    		"groove": "g",
    		"hidden": "h",
    		"inset": "i",
    		"none": "n",
    		"outset": "o",
    		"ridge": "r",
    		"solid": "s"
    	}
    },

    "border-left-style": {
    	"style_name": "Bdstarts",
    	"modifiers": {
    		"dotted": "d",
    		"dashed": "da",
    		"double": "do",
    		"groove": "g",
    		"hidden": "h",
    		"inset": "i",
    		"none": "n",
    		"outset": "o",
    		"ridge": "r",
    		"solid": "s"
    	}
    },

    "border-width": {
    	"style_name": "Bdw",
    	"modifiers": {
    		"medium": "m",
    		"thin": "t",
    		"thick": "th"
    	}
    },

    "border-top-width": {
    	"style_name": "Bdtw",
    	"modifiers": {
    		"medium": "m",
    		"thin": "t",
    		"thick": "th"
    	}
    },

    "border-right-width": {
    	"style_name": "Bdendw",
    	"modifiers": {
    		"medium": "m",
    		"thin": "t",
    		"thick": "th"
    	}
    },

    "border-bottom-width": {
    	"style_name": "Bdbw",
    	"modifiers": {
    		"medium": "m",
    		"thin": "t",
    		"thick": "th"
    	}
    },

    "border-left-width": {
    	"style_name": "Bdstartw",
    	"modifiers": {
    		"medium": "m",
    		"thin": "t",
    		"thick": "th"
    	}
    },

    "border-radius": {
    	"style_name": "Bdrs"
    },

    "border-top-right-radius": {
    	"style_name": "Bdrstend"
    },

    "border-bottom-right-radius": {
    	"style_name": "Bdrsbend"
    },

    "border-bottom-left-radius": {
    	"style_name": "Bdrsbstart"
    },

    "border-top-left-radius": {
    	"style_name": "Bdrststart"
    },

    "background": {
    	"style_name": "Bg",
    	"modifiers": {
    		"none": "n",
    		"transparent": "t"
    	}
    },

    "background-image": {
    	"style_name": "Bgi",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "background-color": {
    	"style_name": "Bgc",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "background-clip": {
    	"style_name": "Bgcp",
    	"modifiers": {
    		"border-box": "bb",
    		"content-box": "cb",
    		"padding-box": "pb"
    	}
    },

    "background-origin": {
    	"style_name": "Bgo",
    	"modifiers": {
    		"border-box": "bb",
    		"content-box": "cb",
    		"padding-box": "pb"
    	}
    },

    "background-size": {
    	"style_name": "Bgz",
    	"modifiers": {
    		"auto": "a",
    		"contain": "ct",
    		"cover": "cv"
    	}
    },

    "background-attachment": {
    	"style_name": "Bga",
    	"modifiers": {
    		"fixed": "f",
    		"local": "l",
    		"scroll": "s"
    	}
    },

    "background-position": {
    	"style_name": "Bgp",
    	"modifiers": {
    		"left 0": "start_t",
    		"right 0": "end_t",
    		"left 100%": "start_b",
    		"right 100%": "end_b",
    		"left center": "start_c",
    		"right center": "end_c",
    		"center 100%": "c_b",
    		"center 0": "c_t",
    		"center": "c"
    	}
    },

    "background-position-x": {
    	"style_name": "Bgpx",
    	"modifiers": {
    		"left": "start",
    		"right": "end",
    		"50%": "c"
    	}
    },

    "background-position-y": {
    	"style_name": "Bgpy",
    	"modifiers": {
    		"0": "t",
    		"100%": "b",
    		"50%": "c"
    	}
    },

    "background-repeat": {
    	"style_name": "Bgr",
    	"modifiers": {
    		"no-repeat": "nr",
    		"repeat-x": "rx",
    		"repeat-y": "ry",
    		"repeat": "r",
    		"space": "s",
    		"round": "ro"
    	}
    },

    "border-collapse": {
    	"style_name": "Bdcl",
    	"modifiers": {
    		"collapse": "c",
    		"separate": "s"
    	}
    },

    "box-sizing": {
    	"style_name": "Bxz",
    	"modifiers": {
    		"content-box": "cb",
    		"padding-box": "pb",
    		"border-box": "bb"
    	}
    },

    "box-shadow": {
    	"style_name": "Bxsh",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "clear": {
    	"style_name": "Cl",
    	"modifiers": {
    		"none": "n",
    		"both": "b",
    		"left": "start",
    		"right": "end"
    	}
    },

    "color": {
    	"style_name": "C",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "contain": {
    	"style_name": "Ctn",
    	"modifiers": {
    		"none": "n",
    		"strict": "st",
    		"content": "c",
    		"size": "z",
    		"layout": "l",
    		"style": "s",
    		"paint": "p"
    	}
    },

    "content": {
    	"style_name": "Cnt",
    	"modifiers": {
    		"none": "n",
    		"normal": "nor",
    		"open-quote": "oq",
    		"close-quote": "cq",
    		"no-open-quote": "noq",
    		"no-close-quote": "ncq"
    	}
    },

    "cursor": {
    	"style_name": "Cur",
    	"modifiers": {
    		"auto": "a",
    		"all-scroll": "as",
    		"cell": "c",
    		"col-resize": "cr",
    		"copy": "co",
    		"crosshair": "cro",
    		"default": "d",
    		"e-resize": "er",
    		"ew-resize": "ewr",
    		"grab": "g",
    		"grabbing": "gr",
    		"help": "h",
    		"move": "m",
    		"none": "n",
    		"no-drop": "nd",
    		"not-allowed": "na",
    		"n-resize": "nr",
    		"ne-resize": "ner",
    		"nesw-resize": "neswr",
    		"nwse-resize": "nwser",
    		"ns-resize": "nsr",
    		"nw-resize": "nwr",
    		"pointer": "p",
    		"progress": "pr",
    		"row-resize": "rr",
    		"s-resize": "sr",
    		"se-resize": "ser",
    		"sw-resize": "swr",
    		"text": "t",
    		"vertical-text": "vt",
    		"wait": "w",
    		"w-resize": "wr",
    		"zoom-in": "zi",
    		"zoom-out": "zo"
    	}
    },

    "display": {
    	"style_name": "D",
    	"modifiers": {
    		"none": "n",
    		"block": "b",
    		"flex": "f",
    		"inline-flex": "if",
    		"inline": "i",
    		"inline-block": "ib",
    		"table": "tb",
    		"table-row": "tbr",
    		"table-cell": "tbc",
    		"list-item": "li",
    		"run-in": "ri",
    		"compact": "cp",
    		"inline-table": "itb",
    		"table-column": "tbcl",
    		"table-column-group": "tbclg",
    		"table-header-group": "tbhg",
    		"table-footer-group": "tbfg",
    		"table-row-group": "tbrg"
    	}
    },

    "filter": {
    	"style_name": "Fil",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "filter: blur": {
    	"style_name": "Blur",
    	"isFuncStyle": true
    },

    "filter: brightness": {
    	"style_name": "Brightness",
    	"isFuncStyle": true
    },

    "filter: contrast": {
    	"style_name": "Contrast",
    	"isFuncStyle": true
    },

    "filter: drop-shadow": {
    	"style_name": "Dropshadow",
    	"isFuncStyle": true
    },

    "filter: grayscale": {
    	"style_name": "Grayscale",
    	"isFuncStyle": true
    },

    "filter: hue-rotate": {
    	"style_name": "HueRotate",
    	"isFuncStyle": true
    },

    "filter: invert": {
    	"style_name": "Invert",
    	"isFuncStyle": true
    },

    "filter: opacity": {
    	"style_name": "Opacity",
    	"isFuncStyle": true
    },

    "filter: saturate": {
    	"style_name": "Saturate",
    	"isFuncStyle": true
    },

    "filter: sepia": {
    	"style_name": "Sepia",
    	"isFuncStyle": true
    },

    "flex": {
    	"style_name": "Flx",
    	"modifiers": {
    		"auto": "a",
    		"none": "n"
    	}
    },

    "flex-grow": {
    	"style_name": "Flxg"
    },

    "flex-shrink": {
    	"style_name": "Flxs"
    },

    "flex-basis": {
    	"style_name": "Flxb",
    	"modifiers": {
    		"auto": "a",
    		"none": "n"
    	}
    },

    "align-self": {
    	"style_name": "As",
    	"modifiers": {
    		"auto": "a",
    		"flex-start": "fs",
    		"flex-end": "fe",
    		"center": "c",
    		"baseline": "b",
    		"stretch": "st"
    	}
    },

    "flex-direction": {
    	"style_name": "Fld",
    	"modifiers": {
    		"row": "r",
    		"row-reverse": "rr",
    		"column": "c",
    		"column-reverse": "cr"
    	}
    },

    "flex-flow": {
    	"style_name": "Flf",
    	"modifiers": {
    		"row": "r",
    		"row-reverse": "rr",
    		"column": "c",
    		"column-reverse": "cr",
    		"nowrap": "nw",
    		"wrap": "w",
    		"wrap-reverse": "wr"
    	}
    },

    "align-items": {
    	"style_name": "Ai",
    	"modifiers": {
    		"flex-start": "fs",
    		"flex-end": "fe",
    		"center": "c",
    		"baseline": "b",
    		"stretch": "st"
    	}
    },

    "align-content": {
    	"style_name": "Ac",
    	"modifiers": {
    		"flex-start": "fs",
    		"flex-end": "fe",
    		"center": "c",
    		"space-between": "sb",
    		"space-around": "sa",
    		"stretch": "st"
    	}
    },

    "order": {
    	"style_name": "Or"
    },

    "justify-content": {
    	"style_name": "Jc",
    	"modifiers": {
    		"flex-start": "fs",
    		"flex-end": "fe",
    		"center": "c",
    		"space-between": "sb",
    		"space-around": "sa"
    	}
    },

    "flex-wrap": {
    	"style_name": "Flw",
    	"modifiers": {
    		"nowrap": "nw",
    		"wrap": "w",
    		"wrap-reverse": "wr"
    	}
    },

    "float": {
    	"style_name": "Fl",
    	"modifiers": {
    		"none": "n",
    		"left": "start",
    		"right": "end"
    	}
    },

    "font-family": {
    	"style_name": "Ff",
    	"modifiers": {
    		"\"Monotype Corsiva\", \"Comic Sans MS\", cursive": "c",
    		"Capitals, Impact, fantasy": "f",
    		"Monaco, \"Courier New\", monospace": "m",
    		"Georgia, \"Times New Roman\", serif": "s",
    		"Helvetica, Arial, sans-serif": "ss"
    	}
    },

    "font-weight": {
    	"style_name": "Fw",
    	"modifiers": {
    		"100": "100",
    		"200": "200",
    		"300": "300",
    		"400": "400",
    		"500": "500",
    		"600": "600",
    		"700": "700",
    		"800": "800",
    		"900": "900",
    		"bold": "b",
    		"bolder": "br",
    		"lighter": "lr",
    		"normal": "n"
    	}
    },

    "font-size": {
    	"style_name": "Fz"
    },

    "font-style": {
    	"style_name": "Fs",
    	"modifiers": {
    		"normal": "n",
    		"italic": "i",
    		"oblique": "o"
    	}
    },

    "font-variant": {
    	"style_name": "Fv",
    	"modifiers": {
    		"normal": "n",
    		"small-caps": "sc"
    	}
    },

    "height": {
    	"style_name": "H",
    	"modifiers": {
    		"0": "0",
    		"auto": "a",
    		"available": "av",
    		"border-box": "bb",
    		"content-box": "cb",
    		"fit-content": "fc",
    		"max-content": "maxc",
    		"min-content": "minc"
    	}
    },

    "hyphens": {
    	"style_name": "Hy",
    	"modifiers": {
    		"auto": "a",
    		"normal": "n",
    		"manual": "m"
    	}
    },

    "letter-spacing": {
    	"style_name": "Lts",
    	"modifiers": {
    		"normal": "n"
    	}
    },

    "list-style-type": {
    	"style_name": "List",
    	"modifiers": {
    		"none": "n",
    		"disc": "d",
    		"circle": "c",
    		"square": "s",
    		"decimal": "dc",
    		"decimal-leading-zero": "dclz",
    		"lower-roman": "lr",
    		"lower-greek": "lg",
    		"lower-latin": "ll",
    		"upper-roman": "ur",
    		"upper-latin": "ul",
    		"armenian": "a",
    		"georgian": "g",
    		"lower-alpha": "la",
    		"upper-alpha": "ua"
    	}
    },

    "list-style-position": {
    	"style_name": "Lisp",
    	"modifiers": {
    		"inside": "i",
    		"outside": "o"
    	}
    },

    "list-style-image": {
    	"style_name": "Lisi",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "line-height": {
    	"style_name": "Lh",
    	"modifiers": {
    		"normal": "n"
    	}
    },

    "margin": {
    	"style_name": "M",
    	"modifiers": {
    		"0": "0",
    		"auto": "a"
    	}
    },

    "margin-top": {
    	"style_name": "Mt",
    	"modifiers": {
    		"0": "0",
    		"auto": "a"
    	}
    },

    "margin-right": {
    	"style_name": "Mend",
    	"modifiers": {
    		"0": "0",
    		"auto": "a"
    	}
    },

    "margin-bottom": {
    	"style_name": "Mb",
    	"modifiers": {
    		"0": "0",
    		"auto": "a"
    	}
    },

    "margin-left": {
    	"style_name": "Mstart",
    	"modifiers": {
    		"0": "0",
    		"auto": "a"
    	}
    },

    "max-height": {
    	"style_name": "Mah",
    	"modifiers": {
    		"auto": "a",
    		"max-content": "maxc",
    		"min-content": "minc",
    		"fill-available": "fa",
    		"fit-content": "fc"
    	}
    },

    "max-width": {
    	"style_name": "Maw",
    	"modifiers": {
    		"none": "n",
    		"fill-available": "fa",
    		"fit-content": "fc",
    		"max-content": "maxc",
    		"min-content": "minc"
    	}
    },

    "min-height": {
    	"style_name": "Mih",
    	"modifiers": {
    		"auto": "a",
    		"fill-available": "fa",
    		"fit-content": "fc",
    		"max-content": "maxc",
    		"min-content": "minc"
    	}
    },

    "min-width": {
    	"style_name": "Miw",
    	"modifiers": {
    		"auto": "a",
    		"fill-available": "fa",
    		"fit-content": "fc",
    		"initial": "ini",
    		"max-content": "maxc",
    		"min-content": "minc"
    	}
    },

    "outline": {
    	"style_name": "O",
    	"modifiers": {
    		"0": "0",
    		"none": "n"
    	}
    },

    "top": {
    	"style_name": "T",
    	"modifiers": {
    		"auto": "a"
    	}
    },

    "right": {
    	"style_name": "End",
    	"modifiers": {
    		"auto": "a"
    	}
    },

    "bottom": {
    	"style_name": "B",
    	"modifiers": {
    		"auto": "a"
    	}
    },

    "left": {
    	"style_name": "Start",
    	"modifiers": {
    		"auto": "a"
    	}
    },

    "opacity": {
    	"style_name": "Op",
    	"modifiers": {
    		"0": "0",
    		"1": "1"
    	}
    },

    "overflow": {
    	"style_name": "Ov",
    	"modifiers": {
    		"auto": "a",
    		"hidden": "h",
    		"scroll": "s",
    		"visible": "v"
    	}
    },

    "overflow-x": {
    	"style_name": "Ovx",
    	"modifiers": {
    		"auto": "a",
    		"hidden": "h",
    		"scroll": "s",
    		"visible": "v"
    	}
    },

    "overflow-y": {
    	"style_name": "Ovy",
    	"modifiers": {
    		"auto": "a",
    		"hidden": "h",
    		"scroll": "s",
    		"visible": "v"
    	}
    },

    "-webkit-overflow-scrolling": {
    	"style_name": "Ovs",
    	"modifiers": {
    		"auto": "a",
    		"touch": "touch"
    	}
    },

    "padding": {
    	"style_name": "P"
    },

    "padding-top": {
    	"style_name": "Pt"
    },

    "padding-right": {
    	"style_name": "Pend"
    },

    "padding-bottom": {
    	"style_name": "Pb"
    },

    "padding-left": {
    	"style_name": "Pstart"
    },

    "pointer-events": {
    	"style_name": "Pe",
    	"modifiers": {
    		"auto": "a",
    		"all": "all",
    		"fill": "f",
    		"none": "n",
    		"painted": "p",
    		"stroke": "s",
    		"visible": "v",
    		"visibleFill": "vf",
    		"visiblePainted": "vp",
    		"visibleStroke": "vs"
    	}
    },

    "position": {
    	"style_name": "Pos",
    	"modifiers": {
    		"absolute": "a",
    		"fixed": "f",
    		"relative": "r",
    		"static": "s",
    		"sticky": "st"
    	}
    },

    "table-layout": {
    	"style_name": "Tbl",
    	"modifiers": {
    		"auto": "a",
    		"fixed": "f"
    	}
    },

    "text-align": {
    	"style_name": "Ta",
    	"modifiers": {
    		"center": "c",
    		"end": "e",
    		"right": "end",
    		"justify": "j",
    		"match-parent": "mp",
    		"start": "s",
    		"left": "start"
    	}
    },

    "text-align-last": {
    	"style_name": "Tal",
    	"modifiers": {
    		"auto": "a",
    		"center": "c",
    		"end": "e",
    		"right": "end",
    		"justify": "j",
    		"start": "s",
    		"left": "start"
    	}
    },

    "text-decoration": {
    	"style_name": "Td",
    	"modifiers": {
    		"line-through": "lt",
    		"none": "n",
    		"overline": "o",
    		"underline": "u"
    	}
    },

    "text-indent": {
    	"style_name": "Ti"
    },

    "text-overflow": {
    	"style_name": "Tov",
    	"modifiers": {
    		"clip": "c",
    		"ellipsis": "e"
    	}
    },

    "text-rendering": {
    	"style_name": "Tren",
    	"modifiers": {
    		"auto": "a",
    		"optimizeSpeed": "os",
    		"optimizeLegibility": "ol",
    		"geometricPrecision": "gp"
    	}
    },

    "text-replace": {
    	"style_name": "Tr",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "text-transform": {
    	"style_name": "Tt",
    	"modifiers": {
    		"none": "n",
    		"capitalize": "c",
    		"uppercase": "u",
    		"lowercase": "l"
    	}
    },

    "text-shadow": {
    	"style_name": "Tsh",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "transform": {
    	"style_name": "Trf"
    },

    "transform-origin": {
    	"style_name": "Trfo",
    	"modifiers": {
    		"top": "t",
    		"top top": "t,t",
    		"top right": "t,end",
    		"top bottom": "t,bottom",
    		"top left": "t,start",
    		"top center": "t,c",
    		"right": "end",
    		"right top": "end,t",
    		"right right": "end,end",
    		"right bottom": "end,bottom",
    		"right left": "end,start",
    		"right center": "end,c",
    		"bottom": "bottom",
    		"bottom top": "bottom,t",
    		"bottom right": "bottom,end",
    		"bottom bottom": "bottom,bottom",
    		"bottom left": "bottom,start",
    		"bottom center": "bottom,c",
    		"left": "start",
    		"left top": "start,t",
    		"left right": "start,end",
    		"left bottom": "start,bottom",
    		"left left": "start,start",
    		"left center": "start,c",
    		"center": "c",
    		"center top": "c,t",
    		"center right": "c,end",
    		"center bottom": "c,bottom",
    		"center left": "c,start",
    		"center center": "c,c"
    	}
    },

    "transform-style": {
    	"style_name": "Trfs",
    	"modifiers": {
    		"flat": "f",
    		"preserve-3d": "p"
    	}
    },

    "perspective": {
    	"style_name": "Prs",
    	"modifiers": {
    		"none": "n"
    	}
    },

    "perspective-origin": {
    	"style_name": "Prso",
    	"modifiers": {
    		"top": "t",
    		"top top": "t,t",
    		"top right": "t,end",
    		"top bottom": "t,bottom",
    		"top left": "t,start",
    		"top center": "t,c",
    		"right": "end",
    		"right top": "end,t",
    		"right right": "end,end",
    		"right bottom": "end,bottom",
    		"right left": "end,start",
    		"right center": "end,c",
    		"bottom": "bottom",
    		"bottom top": "bottom,t",
    		"bottom right": "bottom,end",
    		"bottom bottom": "bottom,bottom",
    		"bottom left": "bottom,start",
    		"bottom center": "bottom,c",
    		"left": "start",
    		"left top": "start,t",
    		"left right": "start,end",
    		"left bottom": "start,bottom",
    		"left left": "start,start",
    		"left center": "start,c",
    		"center": "c",
    		"center top": "c,t",
    		"center right": "c,end",
    		"center bottom": "c,bottom",
    		"center left": "c,start",
    		"center center": "c,c"
    	}
    },

    "backface-visibility": {
    	"style_name": "Bfv",
    	"modifiers": {
    		"hidden": "h",
    		"visible": "v"
    	}
    },

    "transform: matrix": {
    	"style_name": "Matrix",
    	"isFuncStyle": true
    },

    "transform: matrix": {
    	"style_name": "Matrix3d",
    	"isFuncStyle": true
    },

    "transform: rotate": {
    	"style_name": "Rotate",
    	"isFuncStyle": true
    },

    "transform: rotate3d": {
    	"style_name": "Rotate3d",
    	"isFuncStyle": true
    },

    "transform: rotatex": {
    	"style_name": "RotateX",
    	"isFuncStyle": true
    },

    "transform: rotatey": {
    	"style_name": "RotateY",
    	"isFuncStyle": true
    },

    "transform: rotatez": {
    	"style_name": "RotateZ",
    	"isFuncStyle": true
    },

    "transform: scale": {
    	"style_name": "Scale",
    	"isFuncStyle": true
    },

    "transform: scale3d": {
    	"style_name": "Scale3d",
    	"isFuncStyle": true
    },

    "transform: scalex": {
    	"style_name": "ScaleX",
    	"isFuncStyle": true
    },

    "transform: scaley": {
    	"style_name": "ScaleY",
    	"isFuncStyle": true
    },

    "transform: skew": {
    	"style_name": "Skew",
    	"isFuncStyle": true
    },

    "transform: skewx": {
    	"style_name": "SkewX",
    	"isFuncStyle": true
    },

    "transform: skewy": {
    	"style_name": "SkewY",
    	"isFuncStyle": true
    },

    "transform: translate": {
    	"style_name": "Translate",
    	"isFuncStyle": true
    },

    "transform: translate3d": {
    	"style_name": "Translate3d",
    	"isFuncStyle": true
    },

    "transform: translatex": {
    	"style_name": "TranslateX",
    	"isFuncStyle": true
    },

    "transform: translatey": {
    	"style_name": "TranslateY",
    	"isFuncStyle": true
    },

    "transform: translatez": {
    	"style_name": "TranslateZ",
    	"isFuncStyle": true
    },

    "transition": {
    	"style_name": "Trs"
    },

    "transition-delay": {
    	"style_name": "Trsde",
    	"modifiers": {
    		"initial": "i"
    	}
    },

    "transition-duration": {
    	"style_name": "Trsdu"
    },

    "transition-property": {
    	"style_name": "Trsp",
    	"modifiers": {
    		"all": "a"
    	}
    },

    "transition-timing-function": {
    	"style_name": "Trstf",
    	"modifiers": {
    		"ease": "e",
    		"ease-in": "ei",
    		"ease-out": "eo",
    		"ease-in-out": "eio",
    		"linear": "l",
    		"step-start": "ss",
    		"step-end": "se"
    	}
    },

    "user-select": {
    	"style_name": "Us",
    	"modifiers": {
    		"all": "a",
    		"element": "el",
    		"elements": "els",
    		"none": "n",
    		"text": "t",
    		"toggle": "to"
    	}
    },

    "vertical-align": {
    	"style_name": "Va",
    	"modifiers": {
    		"bottom": "b",
    		"baseline": "bl",
    		"middle": "m",
    		"sub": "sub",
    		"super": "sup",
    		"top": "t",
    		"text-bottom": "tb",
    		"text-top": "tt"
    	}
    },

    "visibility": {
    	"style_name": "V",
    	"modifiers": {
    		"visible": "v",
    		"hidden": "h",
    		"collapse": "c"
    	}
    },

    "white-space": {
    	"style_name": "Whs",
    	"modifiers": {
    		"normal": "n",
    		"pre": "p",
    		"nowrap": "nw",
    		"pre-wrap": "pw",
    		"pre-line": "pl"
    	}
    },

    "white-space-collapse": {
    	"style_name": "Whsc",
    	"modifiers": {
    		"normal": "n",
    		"keep-all": "ka",
    		"loose": "l",
    		"break-strict": "bs",
    		"break-all": "ba"
    	}
    },

    "width": {
    	"style_name": "W",
    	"modifiers": {
    		"0": "0",
    		"auto": "a",
    		"border-box": "bb",
    		"content-box": "cb",
    		"available": "av",
    		"min-content": "minc",
    		"max-content": "maxc",
    		"fit-content": "fc"
    	}
    },

    "word-break": {
    	"style_name": "Wob",
    	"modifiers": {
    		"break-all": "ba",
    		"keep-all": "ka",
    		"normal": "n"
    	}
    },

    "word-wrap": {
    	"style_name": "Wow",
    	"modifiers": {
    		"break-word": "bw",
    		"normal": "n"
    	}
    },

    "z-index": {
    	"style_name": "Z",
    	"modifiers": {
    		"auto": "a"
    	}
    },

    "fill": {
    	"style_name": "Fill",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "stroke": {
    	"style_name": "Stk",
    	"modifiers": {
    		"transparent": "t",
    		"currentColor": "cc",
    		"none": "n",
    		"aliceblue": "aliceblue",
    		"antiquewhite": "antiquewhite",
    		"aqua": "aqua",
    		"aquamarine": "aquamarine",
    		"azure": "azure",
    		"beige": "beige",
    		"bisque": "bisque",
    		"black": "black",
    		"blanchedalmond": "blanchedalmond",
    		"blue": "blue",
    		"blueviolet": "blueviolet",
    		"brown": "brown",
    		"burlywood": "burlywood",
    		"cadetblue": "cadetblue",
    		"chartreuse": "chartreuse",
    		"chocolate": "chocolate",
    		"coral": "coral",
    		"cornflowerblue": "cornflowerblue",
    		"cornsilk": "cornsilk",
    		"crimson": "crimson",
    		"cyan": "cyan",
    		"darkblue": "darkblue",
    		"darkcyan": "darkcyan",
    		"darkgoldenrod": "darkgoldenrod",
    		"darkgray": "darkgray",
    		"darkgreen": "darkgreen",
    		"darkgrey": "darkgrey",
    		"darkkhaki": "darkkhaki",
    		"darkmagenta": "darkmagenta",
    		"darkolivegreen": "darkolivegreen",
    		"darkorange": "darkorange",
    		"darkorchid": "darkorchid",
    		"darkred": "darkred",
    		"darksalmon": "darksalmon",
    		"darkseagreen": "darkseagreen",
    		"darkslateblue": "darkslateblue",
    		"darkslategray": "darkslategray",
    		"darkslategrey": "darkslategrey",
    		"darkturquoise": "darkturquoise",
    		"darkviolet": "darkviolet",
    		"deeppink": "deeppink",
    		"deepskyblue": "deepskyblue",
    		"dimgray": "dimgray",
    		"dimgrey": "dimgrey",
    		"dodgerblue": "dodgerblue",
    		"firebrick": "firebrick",
    		"floralwhite": "floralwhite",
    		"forestgreen": "forestgreen",
    		"fuchsia": "fuchsia",
    		"gainsboro": "gainsboro",
    		"ghostwhite": "ghostwhite",
    		"gold": "gold",
    		"goldenrod": "goldenrod",
    		"gray": "gray",
    		"green": "green",
    		"greenyellow": "greenyellow",
    		"grey": "grey",
    		"honeydew": "honeydew",
    		"hotpink": "hotpink",
    		"indianred": "indianred",
    		"indigo": "indigo",
    		"ivory": "ivory",
    		"khaki": "khaki",
    		"lavender": "lavender",
    		"lavenderblush": "lavenderblush",
    		"lawngreen": "lawngreen",
    		"lemonchiffon": "lemonchiffon",
    		"lightblue": "lightblue",
    		"lightcoral": "lightcoral",
    		"lightcyan": "lightcyan",
    		"lightgoldenrodyellow": "lightgoldenrodyellow",
    		"lightgray": "lightgray",
    		"lightgreen": "lightgreen",
    		"lightgrey": "lightgrey",
    		"lightpink": "lightpink",
    		"lightsalmon": "lightsalmon",
    		"lightseagreen": "lightseagreen",
    		"lightskyblue": "lightskyblue",
    		"lightslategray": "lightslategray",
    		"lightslategrey": "lightslategrey",
    		"lightsteelblue": "lightsteelblue",
    		"lightyellow": "lightyellow",
    		"lime": "lime",
    		"limegreen": "limegreen",
    		"linen": "linen",
    		"magenta": "magenta",
    		"maroon": "maroon",
    		"mediumaquamarine": "mediumaquamarine",
    		"mediumblue": "mediumblue",
    		"mediumorchid": "mediumorchid",
    		"mediumpurple": "mediumpurple",
    		"mediumseagreen": "mediumseagreen",
    		"mediumslateblue": "mediumslateblue",
    		"mediumspringgreen": "mediumspringgreen",
    		"mediumturquoise": "mediumturquoise",
    		"mediumvioletred": "mediumvioletred",
    		"midnightblue": "midnightblue",
    		"mintcream": "mintcream",
    		"mistyrose": "mistyrose",
    		"moccasin": "moccasin",
    		"navajowhite": "navajowhite",
    		"navy": "navy",
    		"oldlace": "oldlace",
    		"olive": "olive",
    		"olivedrab": "olivedrab",
    		"orange": "orange",
    		"orangered": "orangered",
    		"orchid": "orchid",
    		"palegoldenrod": "palegoldenrod",
    		"palegreen": "palegreen",
    		"paleturquoise": "paleturquoise",
    		"palevioletred": "palevioletred",
    		"papayawhip": "papayawhip",
    		"peachpuff": "peachpuff",
    		"peru": "peru",
    		"pink": "pink",
    		"plum": "plum",
    		"powderblue": "powderblue",
    		"purple": "purple",
    		"red": "red",
    		"rosybrown": "rosybrown",
    		"royalblue": "royalblue",
    		"saddlebrown": "saddlebrown",
    		"salmon": "salmon",
    		"sandybrown": "sandybrown",
    		"seagreen": "seagreen",
    		"seashell": "seashell",
    		"sienna": "sienna",
    		"silver": "silver",
    		"skyblue": "skyblue",
    		"slateblue": "slateblue",
    		"slategray": "slategray",
    		"slategrey": "slategrey",
    		"snow": "snow",
    		"springgreen": "springgreen",
    		"steelblue": "steelblue",
    		"tan": "tan",
    		"teal": "teal",
    		"thistle": "thistle",
    		"tomato": "tomato",
    		"turquoise": "turquoise",
    		"violet": "violet",
    		"wheat": "wheat",
    		"white": "white",
    		"whitesmoke": "whitesmoke",
    		"yellow": "yellow",
    		"yellowgreen": "yellowgreen"
    	}
    },

    "stroke-width": {
    	"style_name": "Stkw",
    	"modifiers": {
    		"inherit": "i"
    	}
    },

    "stroke-linecap": {
    	"style_name": "Stklc",
    	"modifiers": {
    		"inherit": "i",
    		"butt": "b",
    		"round": "r",
    		"square": "s"
    	}
    },

    "stroke-linejoin": {
    	"style_name": "Stklj",
    	"modifiers": {
    		"inherit": "i",
    		"bevel": "b",
    		"round": "r",
    		"miter": "m"
    	}
    }
}

},{}],3:[function(require,module,exports){
var cache = {};
var acssValue;
var cssValue;
var tabId;
var backgroundPage = chrome.extension.getBackgroundPage()

var backgroundPageConnection = chrome.runtime.connect({
    name: "popup"
});

const Acss_to_Css = require("../data/acss_to_css.json");
const Css_to_Acss = require("../data/css_to_acss.json");

var cache = {};

var convertToAcss = function (text) {
    var result, name, value, element, style_name, errorLog;
    result = [];
    errorLog = [];
    text = text.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0];
    for (var style of text.split("\n").filter(x=>(x!==""&&x!=="\n"))) {
        if (style[style.length-1]!==';') style += ";";
        if (!/\((.*)\)/.test(style)) {
            name = ((style.match(/(.*):/) || [])[1] || "").trim();
            value = ((style.match(/:(.*);/) || [])[1] || "").trim();
        } else {
            name = ((style.match(/(.*)\(/) || [])[1] || "").trim();
            value = ((style.match(/\((.*)\)/) || [])[1] || "").trim();
        }
        if (value[0] === "#") value = value.toLowerCase();
        element = Css_to_Acss[name] || {};
        style_name = element.style_name;
        value = (element.modifiers ? (element.modifiers[value] || value) : value);

        style_name ? result.push(`${style_name}(${value})`) : errorLog.push(style);
    }
    return result.join(" ") + (errorLog.length ? "\n\nErrors Parsing:\n" + errorLog.join("\n") : "");
}

var convertToCss = function (text) {
    var result, name, value, element, style_name, errorLog;
    result = [];
    errorLog = [];
    text = text.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0];
    for (var style of text.split(/ (.+?\(.+?\))(?:\:.)?/).filter(x=>(x!==""))) {
        name = ((style.match(/(.+)\(/) || [])[1] || "").trim();
        value = ((style.match(/\((.+)\)/) || [])[1] || "").trim();

        element = Acss_to_Css[name] || {};
        style_name = element.style_name;
        value = (element.modifiers ? (element.modifiers[value] || value) : value);
        if (element.isMultiLine) {
            for (var prop of element.style_name) {
                result.push(`${prop}: ${value};`);
            }
        } else if (element.isFuncStyle) {
            result.push(`${style_name}(${value});`);
        } else if (style_name){
            result.push(`${style_name}: ${value};`);
        } else {
            errorLog.push(style);
        }
    }
    return result.join("\n") + (errorLog.length ? "\n\nErrors Parsing:\n" + errorLog.join("\n") : "");
}

var editPageStyle = function (text) {
    function hyphenLowerToUpper(match) {
        return match[1].toUpperCase();
    };

    var result, name, value, element, style_name, errorLog;
    result = {};
    text = text.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0];
    for (var style of text.split("\n").filter(x=>(x!==""&&x!=="\n"))) {
        if (style[style.length-1]!==';') style += ";";
        if (!/\((.*)\)/.test(style)) {
            name = ((style.match(/(.*):/) || [])[1] || "").trim();
            value = ((style.match(/:(.*);/) || [])[1] || "").trim();
        } else {
            name = ((style.match(/(.*)\(/) || [])[1] || "").trim();
            value = ((style.match(/\((.*)\)/) || [])[1] || "").trim();
        }
        if (value[0] === "#") value = value.toLowerCase();
        name = name.replace(/-[a-z]/, hyphenLowerToUpper);
        result[name] = value;

    }
    console.log(result);
    return result;
}

backgroundPageConnection.onMessage.addListener(function (message) {
    const ACSSbox = document.getElementById("ACSSbox");
    const CSSbox = document.getElementById("CSSbox");

    if (message.name === 'element_query_response') {
        ACSSbox.value = message.info.acss;
        CSSbox.value = message.info.css;
        CSSbox.value = convertToCss(ACSSbox.value);
    }
});

chrome.tabs.query({active: true}, function (tabs) {
    chrome.tabs.executeScript(null, {file: "js/content_script.js"});
    tabId = tabs[0].id
    backgroundPageConnection.postMessage({
        name: 'popup_init',
        tabId: tabId
    });
});


var handler = function (button) {
    const ACSSbox = document.getElementById("ACSSbox");
    const CSSbox = document.getElementById("CSSbox");

    if (button === "update") {
        backgroundPage.requestElementInfo(tabId);

    } else if (button === "Undo") {
        backgroundPage.changePageStyle(tabId, {
            newStyle: editPageStyle(CSSbox.value),
            newClassName: ACSSbox.value.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0]
        });
    } else if (button === "CtoA") {
        ACSSbox.value = convertToAcss(CSSbox.value);
    } else if (button === "AtoC") {
        CSSbox.value = convertToCss(ACSSbox.value);
    }
}

document.addEventListener('DOMContentLoaded',function () {
    document.getElementById("CtoA").addEventListener("click",handler.bind(this, "CtoA"));
    document.getElementById("AtoC").addEventListener("click",handler.bind(this, "AtoC"));
    document.getElementById("Undo").addEventListener("click",handler.bind(this, "Undo"));
    document.getElementById("update").addEventListener("click",handler.bind(this, "update"));
});

},{"../data/acss_to_css.json":1,"../data/css_to_acss.json":2}]},{},[3]);
