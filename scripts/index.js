class Webp
{
    eventsAttach()
    {
        this.testWebP(function (support) {

            if (support == true) {
                document.querySelector('body').classList.add('webp');
            } else {
                document.querySelector('body').classList.add('no-webp');
            }
        });
    }
    testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    init()
    {
        this.eventsAttach();
    }
}

const WEBP_TRUE = new Webp();
WEBP_TRUE.init();
// Coockie
function addCoockie(name, value) {
	document.cookie = name + '=' + value;
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Определение языка
function setLang()
{
    return DATABASE[localStorage.lang];
}

/* LANG */
/* LANG */
if(localStorage.lang == null || localStorage.lang == undefined)
    localStorage.lang = (window.navigator.language == undefined) ? "ru" : window.navigator.language.slice(0,2);

// раскрывает\убирает панель
DATA_LANG.preview.addEventListener("click", () => {
    if(DATA_LANG.contr.classList.contains("disable"))
        DATA_LANG.contr.classList.remove("disable");
    else
        DATA_LANG.contr.classList.add("disable");
});

// Управляет изменением панели языка
DATA_LANG.set.addEventListener("click", function(e) {
    addCoockie("lang", this.dataset.setLang);

    e.target.dataset.setLang = DATA_LANG.preview.dataset.lang;
    e.target.textContent = DATA_LANG.preview.textContent;

    DATA_LANG.preview.dataset.lang = getCookie("lang");
    DATA_LANG.preview.textContent = getCookie("lang");
    document.documentElement.lang = getCookie("lang");

    DATA_LANG.contr.classList.add("disable");

    localStorage.lang = getCookie("lang");
    bodyLang();
});

// Утановка языков в панели языка
(() => {
    let temp;
    (localStorage.lang == "ru") ? temp = "en" : temp = "ru";

    DATA_LANG.set.dataset.setLang = temp;
    DATA_LANG.set.textContent = temp;

    document.documentElement.lang = localStorage.lang;
    DATA_LANG.preview.dataset.lang = localStorage.lang;
    DATA_LANG.preview.textContent = localStorage.lang;
})();

function bodyLang()
{
    for(let i = 0; i < TAG_MENU.length; i++)
        TAG_MENU[i].children[0].textContent = setLang().MENU[i];
    for(let i = 0; i < TAG_TITLE.length; i++)
        document.querySelector("#" + TAG_TITLE[i] + " .title").textContent = setLang().MENU[i];

    TAG_ABOUT_DESCRIPTION.textContent = setLang().ABOUT_DESCRIPTION;
    TAG_FOOTER.left.textContent = setLang().LICENCE_FOOTER;
    TAG_FOOTER.right.textContent = setLang().TEXT_FOOTER;
};
/* #LANG# */



                  
                  
/* SERVICE */
/* SERVICE */
AREA_SERVICE.addEventListener("click", (e)=>{ 
    if(e.target.closest(".service__item"))
    {
        SERVICE.openService(e.target.closest(".service__item").id);
    }
    if( SERVICE_EXIT[0].children[3].classList.contains("service__window--exit") )
    {
        SERVICE_EXIT[0].children[3].addEventListener("click", ()=>{
            POP_UP.classList.add("disable");
        });
    }
});
POP_UP.addEventListener("click", (e)=>{ 
    if(e.target.classList.contains("pop_up__service"))
    { 
        if(!e.target.classList.contains("disable"))
        {
            POP_UP.classList.add("disable");
        }
    }
});
/* #SERVICE# */




/* WORKS */
function worksOutput()
{
    let works = Object.keys(setLang().WORKS_TEAM);
    let tags = [];

    function tagsWork(tag, context)
    {
        return `<${( tag == "a"? "a href='" + context.link + "'" : "div" )} class="works__item">
            <div class="works__item__top container">
                <img class="works__item__img" src="images/${context.img}" alt="Картинка достижения">
                <h3 class="works__item__tile">${context.title}</h3>
            </div>
            <p class="works__item__content">
                ${context.text}
            </p>
        </${( tag == "a"? "a" : "div" )}>`;
    }

    for( let i = 0; i < works.length; i++ )
    {
        if(setLang().WORKS_TEAM[works[i]].link == null)
            tags += tagsWork("", setLang().WORKS_TEAM[works[i]]);
        else
            tags += tagsWork("a", setLang().WORKS_TEAM[works[i]]);
    }

    return tags;
}

const TAG_WORKS = document.querySelector(".works__container");
TAG_WORKS.innerHTML = worksOutput();
/* TEAM */
/* TEAM */
for(let i = 0; i < AREA_PERSON.children.length; i++ )
{
    if( setLang().TEAM[AREA_PERSON.children[i].id].positions == null && setLang().TEAM[AREA_PERSON.children[i].id].links == null )
        AREA_PERSON.children[i].children[3].classList.add("disable");
}

AREA_PERSON.addEventListener("click", (e)=>{ 
    if(e.target.closest(".aboutus__extra--button"))
    {
        for(let i = 0; i < AREA_PERSON.children.length; i++ )
        {
            if(!AREA_PERSON.children[i].children[4].classList.contains("disable"))
                AREA_PERSON.children[i].children[4].classList.add("disable");
        }
    
        if(e.target.length === 0)
        {
            if(!AREA_PERSON.children[i].children[4].classList.contains("disable"))
                AREA_PERSON.children[i].children[4].classList.add("disable");
        }
        
        PERSON.openInfo(e.target.closest(".aboutus__item").id);
    }
});

document.addEventListener("click", (e)=>{
    if(!e.target.closest(".aboutus__extra--button") && !e.target.closest(".extra__window"))
    {
        for(let i = 0; i < AREA_PERSON.children.length; i++ )
        {
            if(!AREA_PERSON.children[i].children[4].classList.contains("disable"))
            {
                AREA_PERSON.children[i].children[4].classList.add("disable");
            }
        }
    }
});
/* #TEAM# */

/* THEMES */
const DETERM_THEME = document.querySelector("html");
const SET_THEME = DETERM_THEME.classList;
const SWITCHER_THEME = document.querySelector("#switcherTheme");
const VAR_THEME = {"DEF": "default", "WHITE": "theme--white"};

/* SET THEME */
if(localStorage.theme != null || localStorage.theme != undefined)
{
    let themeTemp;
    themeTemp = localStorage.theme == VAR_THEME.DEF ? VAR_THEME.DEF : VAR_THEME.WHITE;

    console.log(themeTemp, "1");
    SET_THEME.add(themeTemp);
    choiceTheme(themeTemp);
}
else
    choiceTheme(VAR_THEME.DEF);

/* THEMES */
//edit theme code...
document.querySelector(".banner").addEventListener("click", () =>
{
    let themeTemp, unThemeTemp;

    if(localStorage.theme != VAR_THEME.WHITE && localStorage.theme != VAR_THEME.DEF)
        themeTemp = VAR_THEME.WHITE;
    else
    {
        if(localStorage.theme == VAR_THEME.DEF)
        {
            themeTemp = VAR_THEME.WHITE;
            unThemeTemp = localStorage.theme;
        }
        else
        {
            themeTemp = VAR_THEME.DEF;
            unThemeTemp = localStorage.theme;
        }
    }

    SET_THEME.add(themeTemp);
    SET_THEME.remove(unThemeTemp);

    localStorage.theme = themeTemp;
    choiceTheme(themeTemp);
});

function choiceTheme(theme)
{
    if(theme == VAR_THEME.WHITE)
        joinTheme("white");
    if(theme == "" || theme == undefined || theme == VAR_THEME.DEF)
        joinTheme(VAR_THEME.DEF);
}

function joinTheme(name)
{
    SWITCHER_THEME.href = 'style/themes/' + name + ".css";
}
/* #THEMES# */

/* STARS */
class Stars
{
    defineStars()
    {
        let areaReviews = document.querySelector(".reviews__container").children;
        for (let i = 0; i < areaReviews.length; i++)
        {
            for(let item in REVIEWS)
            {
                if(item == areaReviews[i].dataset.id)
                {
                    for(let k = 0; k < REVIEWS[item].stars; k++)
                    {
                        areaReviews[i].querySelector(".review__stars").children[k].classList.add("star__icon--true");
                    }
                }
            }
        }
    }
}

let setStarsReview = new Stars();
setStarsReview.defineStars();


// config open/close
// const SWITCHER = document.querySelector(".switcher");
// SWITCHER.addEventListener("click", () => {
// 	SWITCHER.classList.toggle("hide");
// });

// document.addEventListener("click", (e) => {
// 	console.log(e.target);
// 	(SWITCHER.classList.contains("hide")) ? null : SWITCHER.classList.add("hide");
// });
// #Lang extra-tags
bodyLang();
// #Servise
SERVICE.servicePreviews();
