let requestURL = "../lang.json";
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
					<li class="item"><a href="/">${data.I1}</a></li>
					<li class="active item"><a>${data.I2}</a></li>
					<li class="item"><a href="/reviews">${data.I3}</a></li>
            `;
        }
		
		document.querySelectorAll(".item").forEach(e => e.remove());
        document.querySelector(".navbar-nav").insertAdjacentHTML( 'afterbegin', HTML_MENU(this.data.main.menu) );
    }

    renderFooter()
    {
        document.querySelector(".footer-left").textContent = this.data.main.leftfooter;
        document.querySelector(".footer-text").textContent = this.data.main.rightfooter;
    }

    init()
    {
        this.renderMenu();
        this.renderFooter();
    }
}

class renderReviews
{
    constructor(params)
    {
        this.data = params;
    }

    renderContent()
    {
        document.querySelector(".plugins-container").innerHTML = "";

        function HTML_COMMENTS(data)
        {

			let VK = "", Spigot = "", Polymart = "", MCMarket = "", GitHub = "";
            if(data.links.VK){VK = `<div class="VK"><a class="VK-button" href="${data.links.VK}" title="VK"></a></div>`}
			if(data.links.Spigot){Spigot = `<div class="Spigot"><a class="Spigot-button" href="${data.links.Spigot}" title="Spigot"></a></div>`}
			if(data.links.Polymart){Polymart = `<div class="Polymart"><a class="Polymart-button" href="${data.links.Polymart}" title="Polymart"></a></div>`}
			if(data.links.MCMarket){MCMarket = `<div class="MCMarket"><a class="MCMarket-button" href="${data.links.MCMarket}" title="MC-Market"></a></div>`}
			if(data.links.GitHub){GitHub = `<div class="GitHub"><a class="GitHub-button" href="${data.links.GitHub}" title="GitHub"></a></div>`}

			let freewrap = "", free = "paid"; if(data.free){freewrap = "free-wrap";free = "free";}

            return `
			<div class="plugin">
				<div class="plugin-wrap ${freewrap}">
					<div class="plugin-image">
						<a><img src="${data.image}"></a>
						<div class="shadow"></div>
						<div class="actions">
							<div class="actions-btn">
								<div class="add-to-links">
								${VK}${Spigot}${Polymart}${MCMarket}${GitHub}
								</div>
							</div>
						</div>
					</div>
					<div class="plugin-list">
						<h3 class="${free}">${data.name}</h3>
						<div class="version">${data.version}</div>
					</div>
				</div>
			</div>
            `;
        }

        for(let i = 1; i <= Object.keys(this.data.plugins).length; i++)
        {
            document.querySelector(".plugins-container").insertAdjacentHTML( 'afterbegin', HTML_COMMENTS(this.data.plugins[i]) );
        }
    }

    init()
    {
        this.renderContent();
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
	
	const RenderReviews = new renderReviews(DATA[localStorage.lang]);
	RenderReviews.init();
}