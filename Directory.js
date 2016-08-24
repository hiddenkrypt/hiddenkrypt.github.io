/** Directory.js **
 * An array of all loading screens.
 * Loading Screen objects meet the following schema:
 * {
 *	url: <string> a full url to an image file
 *	title: <string> a The title of this screen
 *	credit: <string> The author(s)/creator(s) of the screen
 *	trigger: <function, optional> an optional callback function for
 *			 Special Events. This function should be in SpecialEvents.js
 * }
**/

var loadingScreenDirectory = [
	{
		url:"http://i.imgur.com/J0zYUX2.png",
		title:"The Original",
        credit:"Brett"
	},
    {
		url:"http://i.imgur.com/sDYG7yd.png",
		title:"Sweet Skins and Hella Mods",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/lmMNbwD.png",
		title:"MLG",
        credit:"Mike"
	},
    {
		url:"http://i.imgur.com/7q6bIB0.png",
		title:"/u/",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/Zex9uqR.png",
		title:"Terrorist Town Gazette 01-01",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/AmDjSaW.jpg",
		title:"Safety Record",
        credit:"Brett"
	},
    {
		url:"http://i.imgur.com/qkV5qT9.jpg",
		title:"Atlas Park",
        credit:"Matt"
	},
    {
		url:"http://i.imgur.com/rP04dbU.jpg",
		title:"Winners",
        credit:"Mike, Rav-T"
	},
    {
		url:"http://i.imgur.com/FgbK3qI.jpg",
		title:"Damage Control",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/vvmlkuv.png",
		title:"Postcards",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/qPkc4CV.png",
		title:"Robotnik",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/yFbdPTn.png",
		title:"Don't Forget:",
        credit:"Rav-T"
	},
    {
		url:"http://i.imgur.com/lrmn5ek.png",
		title:"Badmins",
        credit:"Jason"
	},
    {
		url:"http://i.imgur.com/pMCeOiw.png",
		title:"Minimal",
        credit:"Mike, Rav-T"
	},
    {
		url:"http://i.imgur.com/3bBK6Fc.jpg",
		title:"No Fun",
        credit:"Brett"
	},
    {
		url:"http://i.imgur.com/0RDXGqs.jpg",
		title:"Always Sunny in Terrortown",
        credit:"Brett",
        trigger:sunny
    }
];