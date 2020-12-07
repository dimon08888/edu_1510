// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://https://yandex.ru/*
// @grant        none
// ==/UserScript==

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

let yandexInput = document.getElementById("text")[0];
let btnK = document.getElementsByClassName("button_theme_websearch")[1]; //Кнопка поиска в yandex
let words = ["Гобой","Флейта","Как звучит флейта","Балалайка","Фагот","Скрипка","Саксофон"];
let word = words[getRandom(0,words.length)];
if (btnK!=undefined){ // Проверка существования кнопки поиска yandex
    let i = 0;
    let timerId = setInterval(function(){
        yandexInput.value = yandexInput.value + word[i];
        i++;
        if(i == word.length){
            clearInterval(timerId);
            btnK.click();
        }
    },1000);
}else{
    let pageNum = document.getElementsByClassName('.link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem link_js_inited').innerText;
    let linkIsFound = false;
    let links = document.links;
    for(let i=0; i<links.length; i++){
        let link = links[i]
        if(link.href.includes("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")){
            setTimeout(()=>{link.click();},1000);
            linkIsFound = true;
            break;
        }
    }
    if(!linkIsFound && pageNum<10){
        setTimeout(()=>{pnnext.click();},1000)
    }else if (!linkIsFound){
        location.href = "https://https://yandex.ru/";
    }
}
