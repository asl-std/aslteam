let requestURL = "/lang.json";
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Set lang params
if(getUrlVars("lang") == "ru" || getUrlVars("lang") == "en")
{
    let tempSet = getUrlVars("lang");
    let tempDefault = (tempSet == "en") ? "ru" : "en";
    localStorage.lang = getUrlVars("lang");
    setDefaultTheme(tempSet, tempDefault);
}

// Set lang default
if(localStorage.lang == null || localStorage.lang == undefined)
    localStorage.lang = (window.navigator.language == undefined) ? "ru" : window.navigator.language.slice(0,2);
if(localStorage.lang != null || localStorage.lang != undefined)
{
    let tempSet = (localStorage.lang == "ru") ? "ru" : "en";
    let tempDefault = (tempSet == "ru") ? "en" : "ru";
    setDefaultTheme(tempSet, tempDefault);
}

// Set theme default
if(localStorage.theme == null || localStorage.theme == undefined)
{
    joinTheme("dark");
    localStorage.theme = "dark";
}
if(localStorage.theme != null || localStorage.theme != undefined)
{
    joinTheme(localStorage.theme);

    let tempSet = (localStorage.theme == "dark") ? "dark" : "white";
    let tempDefault = (tempSet == "dark") ? "white" : "dark";

    document.querySelector("#theme .setting__preview").classList.remove(tempDefault+"-mod");
    document.querySelector("#theme .setting__preview").classList.add(tempSet+"-mod");
    document.querySelector("#theme .setting__preview").dataset.mod = tempSet;

    document.querySelector("#list-theme .setting__preview").classList.remove(tempSet+"-mod");
    document.querySelector("#list-theme .setting__preview").classList.add(tempDefault+"-mod");
    document.querySelector("#list-theme .setting__preview").dataset.mod = tempDefault;
}

// Классы, объекты, функции
// render
class renderContent
{
    constructor(params)
    {
        this.data = params;
    }

    renderMenu()
    {
        function HTML_MENU(data)
        {
            return `
					<li class="active stick"><a>${data.I1}</a></li>
					<li class="stick"><a href="/plugins">${data.I2}</a></li>
					<li class="stick"><a href="/reviews">${data.I3}</a></li>
            `;
        }
		
		document.querySelectorAll(".stick").forEach(e => e.remove());
        document.querySelector(".navbar-right").insertAdjacentHTML( 'afterbegin', HTML_MENU(this.data.main.menu) );
    }

    renderFooter()
    {
        document.querySelector(".footer-left").textContent = this.data.main.leftfooter;
        document.querySelector(".footer-text").textContent = this.data.main.rightfooter;
    }
	
	renderTitle()
    {
		const _0x3d2721=_0x4d79;function _0x4d79(_0xa91712,_0x41b63e){const _0x243c4f=_0x243c();return _0x4d79=function(_0x4d797c,_0x31f544){_0x4d797c=_0x4d797c-0x1b9;let _0x4d0f07=_0x243c4f[_0x4d797c];return _0x4d0f07;},_0x4d79(_0xa91712,_0x41b63e);}(function(_0x2a4970,_0x23e51e){const _0x69d1e4=_0x4d79,_0x2d0ab9=_0x2a4970();while(!![]){try{const _0x5b06e7=parseInt(_0x69d1e4(0x1c1))/0x1+-parseInt(_0x69d1e4(0x1c9))/0x2*(-parseInt(_0x69d1e4(0x1ba))/0x3)+-parseInt(_0x69d1e4(0x1c7))/0x4+-parseInt(_0x69d1e4(0x1b9))/0x5*(-parseInt(_0x69d1e4(0x1ca))/0x6)+-parseInt(_0x69d1e4(0x1bb))/0x7+-parseInt(_0x69d1e4(0x1c6))/0x8*(-parseInt(_0x69d1e4(0x1c5))/0x9)+parseInt(_0x69d1e4(0x1cd))/0xa*(-parseInt(_0x69d1e4(0x1c0))/0xb);if(_0x5b06e7===_0x23e51e)break;else _0x2d0ab9['push'](_0x2d0ab9['shift']());}catch(_0x5911f7){_0x2d0ab9['push'](_0x2d0ab9['shift']());}}}(_0x243c,0x94dc8));function _0x243c(){const _0x2348bf=['open','https://raw.githubusercontent.com/KwilzOne/GloomDS/whitewolf/title.txt','3790mzCshU','4240zmzEqM','30abCCOx','4187099rIjZIW','text','onload','response','GET','37345aiHpPc','597723HfFgrR','#title','send','innerHTML','2427075DphoJg','32FKuTCw','3994332APPcLy','querySelector','129134JHvYXn','8286ZQzXJS'];_0x243c=function(){return _0x2348bf;};return _0x243c();}let i=new XMLHttpRequest(),f=_0x3d2721(0x1cc);i[_0x3d2721(0x1cb)](_0x3d2721(0x1bf),f),i['responseType']=_0x3d2721(0x1bc),i[_0x3d2721(0x1bd)]=function(){const _0x4d31bc=_0x3d2721;document[_0x4d31bc(0x1c8)](_0x4d31bc(0x1c2))[_0x4d31bc(0x1c4)]=i[_0x4d31bc(0x1be)];},i[_0x3d2721(0x1c3)]();
    }

    init()
    {
        this.renderMenu();
        this.renderFooter();
		this.renderTitle();
    }
}

// Buttons
function openSetting(event)
{
    let path;

    if(event.classList.contains("setting__preview"))
    {
        path = document.querySelector( "#"+event.parentNode.parentNode.id+" .setting--list" );
        if(event.parentNode.parentNode.id == "list-lang" || event.parentNode.parentNode.id == "list-theme")
            path = document.querySelector( "#"+event.parentNode.parentNode.id+".setting--list" );
            
        path.classList.toggle("disable");

        if(event.parentNode.parentNode.id == "setting")
            if(path.classList.contains("disable"))
                document.querySelectorAll(".setting--list").forEach( item => { item.classList.add("disable"); });
    }
}
function settingSetParams(event)
{
    let tempDefault, tempSet;

    if(event.classList.contains("setting__preview"))
    {
        if(Object.keys(event.dataset).length != 0)
        {
            if(event.dataset.lang)
            {
                if(event.dataset.status == "set")
                {
                    tempDefault = document.querySelector("#lang .setting__preview").dataset.lang;
                    tempSet = event.dataset.lang;

                    document.querySelector("#lang .setting__preview").textContent = tempSet;
                    document.querySelector("#lang .setting__preview").dataset.lang = tempSet;

                    event.textContent = tempDefault;
                    event.dataset.lang = tempDefault;

                    localStorage.lang = tempSet;
                    renderHTML();
                }
            }
            if(event.dataset.mod)
            {
                if(event.dataset.status == "set")
                {
                    tempDefault = document.querySelector("#theme .setting__preview").dataset.mod;
                    tempSet = event.dataset.mod;

                    document.querySelector("#theme .setting__preview").classList.remove(tempDefault+"-mod");
                    document.querySelector("#theme .setting__preview").classList.add(tempSet+"-mod");
                    document.querySelector("#theme .setting__preview").dataset.mod = tempSet;

                    event.classList.remove(tempSet+"-mod");
                    event.classList.add(tempDefault+"-mod");
                    event.dataset.mod = tempDefault;

                    joinTheme(tempSet);
                    localStorage.theme = tempSet;
                }
            }
        }
    }
}

function joinTheme(name)
{
    return document.querySelector("#switcherTheme").href = './style/themes/' + name + ".css";
}

function getUrlVars(parm)
{
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars[parm];
}

function setDefaultTheme(tempSet, tempDefault)
{
    document.querySelector("#lang .setting__preview").textContent = tempSet;
    document.querySelector("#lang .setting__preview").dataset.lang = tempSet;

    document.querySelector("#list-lang .setting__preview").textContent = tempDefault;
    document.querySelector("#list-lang .setting__preview").dataset.lang = tempDefault;
}

// Open setting
document.querySelector(".setting").addEventListener("click", (e) => openSetting(e.target));
// Close 
document.body.addEventListener("click", (e) => {
    if(!e.target.classList.contains("setting__preview"))
        if(!document.querySelector(".setting--list").classList.contains("disable"))
            document.querySelectorAll(".setting--list").forEach( item => { item.classList.add("disable"); });
});
// Set params
document.querySelector(".setting").addEventListener("click", (e) => settingSetParams(e.target));

renderHTML = request.onload = function() {
    const DATA = request.response;
    document.documentElement.lang = localStorage.lang;
	
	const RenderContent = new renderContent(DATA[localStorage.lang]);
	RenderContent.init();
}

WORKS = function() {
    const DATA = request.response;
    document.documentElement.lang = localStorage.lang;
	
	const RENDER_WORKS = new renderWorks(DATA[localStorage.lang]);
	RENDER_WORKS.init();
}