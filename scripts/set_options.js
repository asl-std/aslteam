let contolLang = {
    "preview": document.querySelector(".lang__preview"),
    "contr": document.querySelector(".lang__contr"),
    "ru": document.querySelector("#ru"),
    "en": document.querySelector("#en"),
}

contolLang.preview.addEventListener("click", function() {
    if(contolLang.contr.classList.contains("disable"))
        contolLang.contr.classList.remove("disable");
    else
        contolLang.contr.classList.add("disable");
});

contolLang.ru.addEventListener("click", function() {
    contolLang.preview.textContent = this.textContent;
    contolLang.preview.dataset.lang = this.id;

    contolLang.en.classList.remove("disable")
    this.classList.add("disable");
    contolLang.contr.classList.add("disable");

    // langHeaderAndTile(this.id);
});
contolLang.en.addEventListener("click", function() {

    contolLang.preview.textContent = this.textContent;
    contolLang.preview.dataset.lang = this.id;

    contolLang.ru.classList.remove("disable")
    this.classList.add("disable");
    contolLang.contr.classList.add("disable");

    // langHeaderAndTile(this.id);
});

function langHeaderAndTile(lang)
{
    function getLang(i)
    {
        if(lang == "ru")
        {
            PAGE_TAGS.header.menu[i].textContent = PAGE_TEXT.header.menu.ru[i];
            PAGE_TAGS.tile[i].textContent = PAGE_TEXT.header.menu.ru[i];
        }
        if(lang == "en")
        {
            PAGE_TAGS.header.menu[i].textContent = PAGE_TEXT.header.menu.en[i];
            PAGE_TAGS.tile[i].textContent = PAGE_TEXT.header.menu.en[i]; 
        }
    }
    
    for(let i = 0; i < PAGE_TAGS.header.menu.length; i++)
    {
        getLang(i)
    }
}
