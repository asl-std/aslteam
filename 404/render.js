let requestURL = "../lang.json";
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function joinTheme(name)
{
    return document.querySelector("#switcherTheme").href = '../style/themes/' + name + ".css";
}

function getUrlVars(parm)
{
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars[parm];
}

if(getUrlVars("lang") == "en" || getUrlVars("lang") == "ru")
{
    let tempSet = getUrlVars("lang");
    let tempDefault = (tempSet == "en") ? "en" : "ru";
    localStorage.lang = getUrlVars("lang");
}

if(localStorage.lang == null || localStorage.lang == undefined)
    localStorage.lang = (window.navigator.language == undefined) ? "en" : window.navigator.language.slice(0,2);

if(localStorage.theme == null || localStorage.theme == undefined)
{
    joinTheme("dark");
    localStorage.theme = "dark";
}
if(localStorage.theme != null || localStorage.theme != undefined)
{
    joinTheme(localStorage.theme);
}

class render
{
    constructor(params)
    {
        this.data = params;
    }

    renderContent()
    {
        document.querySelector(".container").innerHTML = "";

        function load(data)
        {
            return `
				<div class="notif notif-color">
					<p>${data.top}<p>
					<p>${data.bottom}</p>
					<div class="notif-progress"></div>
				</div>
            `;
        }
		document.querySelector(".container").insertAdjacentHTML( 'afterbegin', load(this.data.error) );
    }

    init()
    {
        this.renderContent();
    }
}

renderHTML = request.onload = function() {
    const DATA = request.response;
    document.documentElement.lang = localStorage.lang;
	const RENDER = new render(DATA[localStorage.lang]);
	RENDER.init();  
}
