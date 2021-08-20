let determTheme = document.querySelector("html");
let setTheme = determTheme.classList;
let switcherTheme = document.querySelector("#switcherTheme");

choiceTheme(setTheme.value);

//edit theme code...
document.querySelector(".banner").addEventListener("click", ()=>{
    setTheme.toggle("theme--white");
    choiceTheme(setTheme.value);
});

function choiceTheme(theme)
{
    if(theme == "theme--white")
        joinTheme("white");
    if(theme == "" || theme == undefined)
        joinTheme("default");
}

function joinTheme(name)
{
    switcherTheme.href = 'style/themes/' + name + ".css";
}
;

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
WEBP_TRUE.init();;

const POP_UP = document.querySelector(".pop_up__service");
class Service
{
    defineOption(elem)
    {
        let keysLink = Object.keys(elem);
        let tags = [];

        for( let i = 0; i < keysLink.length; i++ )
        {
            tags += 
            `<div class="service__option">
                <img src="images/${elem[keysLink[i]].imgSrc}" class="service__option__img">
                <h5 class="service__option__tile">${elem[keysLink[i]].tile}</h5>
                <div class="service__option__price">${elem[keysLink[i]].price}</div>
            </div>`;
        }
        return tags;
    }
    openService(item)
    {
        for(let i = 0; i < AREA_SERVICE.children.length; i++ )
        {
            if(!POP_UP.classList.contains("disable"))
                POP_UP.classList.add("disable");
        }
        POP_UP.innerHTML = `
            <div class="service__window">
                <h4 class="service__window__tile">${SERVICE_TEAM[item].tile}</h4>
                <p class="service__window__description description">
                    ${SERVICE_TEAM[item].description}
                </p>
                <div class="service__options container">
                    ${this.defineOption(SERVICE_TEAM[item].params)}
                </div>
                <div class="service__window--exit"></div>
            </div>
        `;
        POP_UP.classList.toggle("disable");
    }
}

const SERVICE = new Service(); 
const AREA_SERVICE = document.querySelector(".service__container");
const SERVICE_EXIT = document.querySelector(".pop_up__service").children;

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


;

class Person
{
    defineLink(name, link)
    {
        let finishedLink;
        switch(name)
        {
            case "vk":
                finishedLink = 
                `<a href="${link}" class="person__links__item" target="_blank">
                    <svg class="person__links__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#7294C7"/>
                        <path d="M22.3546 18.8364C22.3546 18.7742 22.2924 18.7742 22.2924 18.7119C22.0433 18.2138 21.4829 17.5911 20.7357 16.9062C20.3621 16.5948 20.1753 16.3458 20.0507 16.2212C19.8639 15.9722 19.864 15.7854 19.9262 15.5363C19.9885 15.3495 20.2375 15.0381 20.6734 14.4777C20.9225 14.1664 21.047 13.9796 21.2338 13.7928C22.1678 12.5475 22.6037 11.738 22.4792 11.3644L22.4169 11.3021C22.3546 11.2398 22.2924 11.1776 22.1678 11.1776C22.0433 11.1153 21.8565 11.1153 21.6697 11.1776H19.3035C19.2413 11.1776 19.2413 11.1776 19.1167 11.1776C19.0545 11.1776 18.9922 11.1776 18.9922 11.1776H18.9299H18.8677L18.8054 11.2398C18.7431 11.3021 18.7431 11.3021 18.7431 11.3644C18.4941 12.0493 18.1827 12.6097 17.8714 13.2324C17.6846 13.5437 17.4978 13.8551 17.311 14.1041C17.1242 14.3532 16.9996 14.54 16.8751 14.6645C16.7506 14.7891 16.626 14.8513 16.5638 14.9759C16.5015 15.0381 16.377 15.1004 16.377 15.0381C16.3147 15.0381 16.2524 15.0381 16.2524 14.9759C16.1902 14.9136 16.1279 14.8513 16.0656 14.7891C16.0034 14.7268 16.0034 14.6023 15.9411 14.4777C15.9411 14.3532 15.9411 14.2287 15.9411 14.1664C15.9411 14.1041 15.9411 13.9173 15.9411 13.7928C15.9411 13.606 15.9411 13.4815 15.9411 13.4192C15.9411 13.2324 15.9411 12.9833 15.9411 12.7343C15.9411 12.4852 15.9411 12.2984 15.9411 12.1739C15.9411 12.0493 15.9411 11.8625 15.9411 11.738C15.9411 11.5512 15.9411 11.4266 15.9411 11.3644C15.9411 11.3021 15.8789 11.1776 15.8789 11.1153C15.8166 11.053 15.7543 10.9908 15.692 10.9285C15.6298 10.8662 15.5052 10.8662 15.443 10.804C15.1316 10.7417 14.758 10.6794 14.3222 10.6794C13.3259 10.6794 12.641 10.7417 12.3919 10.8662C12.2673 10.9285 12.1428 10.9908 12.0805 11.1153C11.956 11.2398 11.956 11.3021 12.0183 11.3021C12.3296 11.3644 12.5787 11.4889 12.7032 11.6757L12.7655 11.8003C12.8278 11.8625 12.8277 11.9871 12.89 12.1739C12.9523 12.3607 12.9523 12.5475 12.9523 12.7965C12.9523 13.1701 12.9523 13.5437 12.9523 13.7928C12.9523 14.1041 12.89 14.2909 12.89 14.4777C12.89 14.6645 12.8278 14.7891 12.7655 14.8513C12.7032 14.9759 12.7032 15.0381 12.6409 15.0381C12.6409 15.0381 12.6409 15.1004 12.5787 15.1004C12.5164 15.1004 12.4541 15.1627 12.3296 15.1627C12.2673 15.1627 12.1428 15.1004 12.0805 15.0381C11.956 14.9759 11.8315 14.8513 11.7692 14.7268C11.6447 14.6023 11.5201 14.4155 11.3956 14.1664C11.2711 13.9173 11.0843 13.6683 10.9597 13.2947L10.8352 13.0456C10.7729 12.9211 10.6484 12.672 10.5239 12.3607C10.3993 12.0493 10.2748 11.8003 10.1503 11.4889C10.088 11.3644 10.0257 11.3021 9.96347 11.2398H9.9012C9.9012 11.2398 9.83892 11.1776 9.77665 11.1776C9.71439 11.1776 9.65213 11.1153 9.58986 11.1153H7.34824C7.09917 11.1153 6.97464 11.1776 6.91237 11.2398L6.8501 11.3021C6.8501 11.3021 6.8501 11.3644 6.8501 11.4266C6.8501 11.4889 6.8501 11.5512 6.91237 11.6757C7.2237 12.4229 7.59731 13.1701 7.97091 13.9173C8.34451 14.6023 8.71812 15.2249 8.96719 15.6608C9.27852 16.0967 9.52759 16.5326 9.83892 16.9062C10.1503 17.2798 10.3371 17.5288 10.3993 17.6534C10.5239 17.7779 10.5861 17.8402 10.6484 17.9024L10.8352 18.0892C10.9597 18.2138 11.1465 18.4006 11.3956 18.5874C11.6447 18.7742 11.956 18.961 12.2673 19.1478C12.5787 19.3346 12.9523 19.4591 13.3259 19.5837C13.7618 19.7082 14.1354 19.7705 14.509 19.7082H15.443C15.6298 19.7082 15.7543 19.6459 15.8789 19.5214L15.9411 19.4591C15.9411 19.3968 16.0034 19.3968 16.0034 19.3346C16.0034 19.2723 16.0034 19.21 16.0034 19.0855C16.0034 18.8364 16.0034 18.6496 16.0656 18.4628C16.1279 18.276 16.1279 18.1515 16.1902 18.027C16.2525 17.9024 16.3147 17.8402 16.377 17.7779C16.4392 17.7156 16.5015 17.6534 16.5015 17.6534H16.5638C16.6883 17.5911 16.8751 17.6534 16.9997 17.7779C17.1865 17.9024 17.3732 18.0892 17.4978 18.276C17.6223 18.4628 17.8091 18.6496 18.0582 18.8987C18.3073 19.1478 18.4941 19.3346 18.6186 19.3969L18.8054 19.5214C18.9299 19.5837 19.0545 19.6459 19.2413 19.7082C19.4281 19.7705 19.5526 19.7704 19.6771 19.7704L21.7942 19.7082C21.981 19.7082 22.1678 19.6459 22.2924 19.5837C22.4169 19.5214 22.4792 19.4591 22.4792 19.3346C22.4792 19.2723 22.4792 19.1478 22.4792 19.0855C22.3546 18.961 22.3546 18.8987 22.3546 18.8364Z" fill="white"/>
                    </svg>
                </a>`;
            break;
            case "inst":
                finishedLink = 
                `<a href="${link}" class="person__links__item" target="_blank">
                    <svg class="person__links__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
                        <path d="M19.9356 9H10.8144C9.78461 9 9 9.78462 9 10.8144V19.9356C9 20.9654 9.78461 21.75 10.8144 21.75H19.9356C20.9654 21.75 21.75 20.9654 21.75 19.9356V10.8144C21.75 9.78462 20.9654 9 19.9356 9ZM15.375 19.2C17.4837 19.2 19.2 17.5327 19.2 15.5221C19.2 15.1788 19.151 14.7865 19.0529 14.4923H20.1317V19.6904C20.1317 19.9356 19.9356 20.1808 19.6413 20.1808H11.1087C10.8635 20.1808 10.6183 19.9846 10.6183 19.6904V14.4433H11.7462C11.6481 14.7865 11.599 15.1298 11.599 15.4731C11.55 17.5327 13.2663 19.2 15.375 19.2ZM15.375 17.7288C14.0019 17.7288 12.9231 16.65 12.9231 15.326C12.9231 14.0019 14.0019 12.9231 15.375 12.9231C16.7481 12.9231 17.8269 14.0019 17.8269 15.326C17.8269 16.699 16.7481 17.7288 15.375 17.7288ZM20.0827 12.4817C20.0827 12.776 19.8375 13.0212 19.5433 13.0212H18.1702C17.876 13.0212 17.6308 12.776 17.6308 12.4817V11.1577C17.6308 10.8635 17.876 10.6183 18.1702 10.6183H19.5433C19.8375 10.6183 20.0827 10.8635 20.0827 11.1577V12.4817Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="6.375" y1="26.625" x2="26.25" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EEA054"/>
                        <stop offset="0.502762" stop-color="#D64763"/>
                        <stop offset="1" stop-color="#B62A99"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </a>`;
            break;
            case "git":
                finishedLink = 
                `<a href="${link}" class="person__links__item" target="_blank">
                    <svg class="person__links__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C8.37 3 3 8.37 3 15C3 20.31 6.435 24.795 11.205 26.385C11.805 26.49 12.03 26.13 12.03 25.815C12.03 25.53 12.015 24.585 12.015 23.58C9 24.135 8.22 22.845 7.98 22.17C7.845 21.825 7.26 20.76 6.75 20.475C6.33 20.25 5.73 19.695 6.735 19.68C7.68 19.665 8.355 20.55 8.58 20.91C9.66 22.725 11.385 22.215 12.075 21.9C12.18 21.12 12.495 20.595 12.84 20.295C10.17 19.995 7.38 18.96 7.38 14.37C7.38 13.065 7.845 11.985 8.61 11.145C8.49 10.845 8.07 9.615 8.73 7.965C8.73 7.965 9.735 7.65 12.03 9.195C12.99 8.925 14.01 8.79 15.03 8.79C16.05 8.79 17.07 8.925 18.03 9.195C20.325 7.635 21.33 7.965 21.33 7.965C21.99 9.615 21.57 10.845 21.45 11.145C22.215 11.985 22.68 13.05 22.68 14.37C22.68 18.975 19.875 19.995 17.205 20.295C17.64 20.67 18.015 21.39 18.015 22.515C18.015 24.12 18 25.41 18 25.815C18 26.13 18.225 26.505 18.825 26.385C21.2072 25.5808 23.2773 24.0498 24.7438 22.0074C26.2103 19.9651 26.9994 17.5143 27 15C27 8.37 21.63 3 15 3Z" fill="black"/>
                    </svg>
                </a>`;
            break;
            case "teleg":
                finishedLink = 
                `<a href="${link}" class="person__links__item" target="_blank">
                    <svg class="person__links__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#2F89CE"/>
                        <path d="M7.01303 15.2806L10.4616 16.5665L11.8059 20.8918C11.8644 21.184 12.2151 21.2425 12.4489 21.0671L14.3778 19.489C14.5531 19.3136 14.8454 19.3136 15.0792 19.489L18.5277 22.0023C18.7615 22.1777 19.1122 22.0608 19.1707 21.7685L21.7425 9.49399C21.8009 9.20174 21.5087 8.90949 21.2164 9.02639L7.01303 14.5207C6.66232 14.6376 6.66232 15.1637 7.01303 15.2806ZM11.6306 15.9235L18.4108 11.7735C18.5277 11.7151 18.6446 11.8905 18.5277 11.9489L12.975 17.151C12.7996 17.3263 12.6242 17.5601 12.6242 17.8524L12.4489 19.2552C12.4489 19.4305 12.1566 19.489 12.0982 19.2552L11.3968 16.6834C11.2214 16.3911 11.3384 16.0404 11.6306 15.9235Z" fill="white"/>
                    </svg>
                </a>`;
            break;
            case "youtube":
                finishedLink = 
                `<a href="${link}" class="person__links__item" target="_blank">
                    <svg class="person__links__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#F40000"/>
                        <path d="M21.5348 14.1848C21.5348 13.8939 21.4864 13.5545 21.4864 13.1667C21.4379 12.7788 21.3894 12.3909 21.3409 12.0515C21.2439 11.6636 21.0985 11.3727 20.8076 11.1303C20.5652 10.8879 20.2258 10.7424 19.8864 10.6939C18.7712 10.5485 17.1227 10.5 14.8924 10.5C12.6621 10.5 10.9651 10.5485 9.89848 10.6939C9.55909 10.7424 9.2197 10.8879 8.97727 11.1303C8.73485 11.3727 8.54091 11.6636 8.44394 12.0515C8.34697 12.3909 8.29849 12.7303 8.29849 13.1667C8.25 13.5545 8.25 13.8939 8.25 14.1848C8.25 14.4758 8.25 14.8151 8.25 15.3C8.25 15.7848 8.25 16.1727 8.25 16.4152C8.25 16.7061 8.29849 17.0455 8.29849 17.4333C8.34697 17.8212 8.39545 18.2091 8.44394 18.5485C8.54091 18.9364 8.68636 19.2273 8.97727 19.4697C9.2197 19.7121 9.55909 19.8576 9.89848 19.9061C11.0136 20.0515 12.6621 20.1 14.8924 20.1C17.1227 20.1 18.8197 20.0515 19.8864 19.9061C20.2258 19.8576 20.5652 19.7121 20.8076 19.4697C21.05 19.2273 21.2439 18.9364 21.3409 18.5485C21.4379 18.2091 21.4864 17.8697 21.4864 17.4333C21.5349 17.0455 21.5348 16.7061 21.5348 16.4152C21.5348 16.1242 21.5348 15.7848 21.5348 15.3C21.5348 14.8151 21.5348 14.4273 21.5348 14.1848ZM17.4621 15.6879L13.6318 18.0636C13.5833 18.1121 13.4864 18.1606 13.3894 18.1606C13.2924 18.1606 13.2439 18.1606 13.147 18.1121C13.0015 18.0152 12.9045 17.8697 12.9045 17.6758V12.8758C12.9045 12.6818 13.0015 12.5364 13.147 12.4394C13.2924 12.3424 13.4864 12.3424 13.6318 12.4394L17.4621 14.8151C17.6076 14.9121 17.7045 15.0576 17.7045 15.203C17.7045 15.3485 17.6076 15.5909 17.4621 15.6879Z" fill="white"/>
                    </svg>
                </a>`;
            break;
            case "steam":
                finishedLink = 
                `<a href="${link}" class="person__links__item" target="_blank">
                    <svg class="person__links__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="black"/>
                        <g clip-path="url(#clip0)">
                        <path d="M20.7246 6.08587C17.6896 6.08587 15.2137 8.52912 15.1901 11.5415L11.7437 16.4597C10.7821 16.3727 9.95291 16.5712 9.21975 17.0161L4.5 15.1157V20.3058L7.29125 21.4232C7.69453 23.2711 9.35569 24.664 11.3213 24.664C13.4583 24.664 15.2291 23.03 15.4239 20.9493L20.73 17.0896C23.7741 17.0896 26.25 14.6327 26.25 11.5859L26.2491 11.585C26.2491 8.55268 23.7732 6.08587 20.7246 6.08587ZM8.64066 21.9643C9.13547 22.1528 9.63572 22.3603 10.1314 22.5542C11.3703 23.0617 12.7777 22.4573 13.2725 21.2239C13.7727 19.9905 13.1656 18.5985 11.9285 18.1046L10.6661 17.5971C12.5457 17.1802 14.3555 18.5885 14.3564 20.5469C14.3555 22.2253 10.1169 24.7229 8.64066 21.9643ZM20.73 15.2716C18.681 15.2716 17.0162 13.6268 17.0162 11.5859C17.0162 9.55409 18.6765 7.90018 20.73 7.90018C22.7646 7.90018 24.4293 9.55409 24.4293 11.5859C24.4293 13.6322 22.7637 15.2771 20.73 15.2716Z" fill="white"/>
                        <path d="M20.74 8.62893C19.1042 8.62893 17.7793 9.94933 17.7793 11.5788C17.7793 13.2082 19.0997 14.5286 20.74 14.5286C22.3658 14.5286 23.7007 13.2127 23.7007 11.5788C23.7007 9.9448 22.3658 8.62893 20.74 8.62893Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="21.75" height="21.75" fill="white" transform="translate(4.5 4.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>`;
            break;
        }
        return finishedLink;
    }
    openInfo(pres_id)
    {
        let popUp = document.querySelector("#" + pres_id + " .person");
        let getPositions = function()
        {
            let arr = [];
            if(TEAM[pres_id].positions != null)
            {
                for(let i = 0; i < (TEAM[pres_id].positions.length); i++)
                {
                    arr += `<li class="person__position__item">${TEAM[pres_id].positions[i]}</li>`;
                }
            }
            return arr;
        }
        let getLinks = function()
        {
            let linksSocNetwork = TEAM[pres_id].links;
            let arr = [];

            if(linksSocNetwork != null)
            {
                let keysLink = Object.keys(linksSocNetwork)
                let valueLink = Object.values(linksSocNetwork)
                for(let i = 0; i < keysLink.length; i++)
                {
                    arr += this.defineLink( keysLink[i], valueLink[i] );
                }
            }
            
            return arr;
        }

        popUp.innerHTML = `
        <div class="person__top mod--grad">
            <img class="person__top__img" src="images/team/${TEAM[pres_id].img}" alt="Фото члена команды">
            <h3 class="person__top__tile">${TEAM[pres_id].nikname}</h3>
        </div>
        <ul class="person__position">
            ${getPositions()}
        </ul>
        <div class="person__links container">
            ${getLinks.bind(this)()}
        </div><div class="person__line--button mod--grad"></div>`;
        
        popUp.classList.toggle("disable");
    }
}

const PERSON = new Person();
const AREA_PERSON = document.querySelector(".aboutus__container");
const EXTRA_WINDOW = document.querySelector(".extra__window");

for(let i = 0; i < AREA_PERSON.children.length; i++ )
{
    if( TEAM[AREA_PERSON.children[i].id].positions == null && TEAM[AREA_PERSON.children[i].id].links == null )
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

;

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
setStarsReview.defineStars();;