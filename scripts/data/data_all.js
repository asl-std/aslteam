const PAGE_TEXT = {
    "header": {
        "menu": {
            "ru": [ "Наши услуги", "Наши работы", "О нас", "Отзывы" ],
            "en": [ "Our services", "Our works", "About us", "Reviews" ]
        }
    },
    "team": {
        "descriptiop": {
            "ru": "Мы относительно молодая студия разработчиков, интересующаяся всем и вся в IT индустрии, остановились в сфере Game-Dev, основной состав состоит из 5 человек, всего нас 11 человек. За время работы студии было проделано немало работы в её границах, мы набрались опыта и теперь готовы вас удивлять.",
            "en": "We are a relatively young studio of developers, interested in everything and everyone in the IT industry, stopped in the field of Game-Dev, the main team consists of 5 people, there are 11 of us. During the work of the studio, a lot of work has been done within its boundaries, we have gained experience and now ready to surprise you."
        }
    },
    "persons": {
        "pers_01": {
            "ru": [ "Руководитель проекта" ],
            "en": [ "Project Manager" ]
        },
        "pers_02": {
            "ru": [ "Веб Разработчик" ],
            "en": [ "Web developer" ]
        },
        "pers_03": {
            "ru": [ "Со-основатель" ],
            "en": [ "Co-founder" ]
        },
        "pers_04": {
            "ru": [ "Программист JAVA/C++" ],
            "en": [ "JAVA / C ++ Programmer" ]
        },
        "pers_05": {
            "ru": [ "Менеджер собщества" ],
            "en": [ "Company manager" ]
        },
    },
    "footer": {
        "left": {
            "ru": [ "©2017 — 2021 asl team. Все права защищены" ],
            "en": [ "©2017 - 2021 asl team. All rights reserved." ]
        },
        "right": {
            "ru": [ "Присоединяйся к нам" ],
            "en": [ "Join us" ]
        },
    },
};

const REVIEWS = {
    "rev_01": {"id": 0, "stars": 5},
    "rev_02": {"id": 1, "stars": 4},
    "rev_03": {"id": 2, "stars": 3},
    "rev_04": {"id": 3, "stars": 2},
    "rev_05": {"id": 4, "stars": 1},
    "rev_06": {"id": 5, "stars": 0}
};



const PAGE_TEXT_KEYS = Object.keys(PAGE_TEXT);
PAGE_TEXT_KEYS.forEach(item => {
    console.log( Fun(item, "ru") );
});


function Fun(key, lang)
{
    let tmpVal;
    switch(key)
    {
        case "header":
            if(lang == "ru")
                tmpVal = PAGE_TEXT[key].menu.ru
            if(lang == "en")
                tmpVal = PAGE_TEXT[key].menu.en
        break;
        case "team":
            if(lang == "ru")
                tmpVal = PAGE_TEXT[key].descriptiop.ru
            if(lang == "en")
                tmpVal = PAGE_TEXT[key].descriptiop.en
        break;
        case "persons":
            tmpVal = {};
            Object.keys( PAGE_TEXT[key] ).forEach(keys => {
                if(lang == "ru")
                    tmpVal[keys] = PAGE_TEXT[key][keys].ru;
                if(lang == "en")
                    tmpVal[keys] = PAGE_TEXT[key][keys].en;
            });
        break;
        case "footer":
            tmpVal = {};
            Object.keys( PAGE_TEXT[key] ).forEach(keys => {
                if(lang == "ru")
                    tmpVal[keys] = PAGE_TEXT[key][keys].ru;
                if(lang == "en")
                    tmpVal[keys] = PAGE_TEXT[key][keys].en;
            });
        break;
    }
    return tmpVal;
}