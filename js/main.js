const overlayBtn = document.querySelector("#overlay-btn");

const overlay = document.querySelector(".overlay");


overlayBtn.addEventListener("click",() =>{

    if(overlay.classList == "overlay"){
        
        overlay.classList = "overlay open";
    }
    else if(overlay.classList.contains("open")){
        
        overlay.classList = "overlay";
        

    }
   
    
});
////////////////

const rollDowns = document.querySelectorAll(".roll-down");
const contents = document.querySelectorAll(".content");

const reset = document.querySelector("#reset");

const search = document.querySelector("#search");


for(const rollDown of rollDowns){
    rollDown.addEventListener("click", () =>{
        if(rollDown.childNodes[3].classList == "content"){
            rollDown.childNodes[3].classList.toggle("flex");
         
        }else if(rollDown.childNodes[3].classList.toggle("flex")){
            rollDown.childNodes[3].classList.toggle("flex");
            
        }
    });
     
}

const array = [rollDowns[0],rollDowns[1],rollDowns[2],rollDowns[3],rollDowns[4],rollDowns[5],rollDowns[6]];


    array[0].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 0){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });

    array[1].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 1){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });

    array[2].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 2){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });

    array[3].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 3){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });

    array[4].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 4){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });

    array[5].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 5){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });

    array[6].addEventListener("click",() =>{
        for(let i = 0;i < array.length;i++){
            if(i == 6){
                continue;
            }else{
                array[i].childNodes[3].classList = "content";
        
            }
        }
    });
    


        document.addEventListener("click",(event) =>{
            
            console.log(event.target.nodeName.toString());
        
                if(event.target.nodeName.toString() === "A" && event.target.parentNode.parentNode.parentNode.classList == "content"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "A" && event.target.parentNode.parentNode.parentNode.classList !== "content"){
                    return;
                }
                if(event.target.nodeName.toString() === "LI" && event.target.parentNode.parentNode.classList == "content"){
                    event.target.parentNode.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "I" && event.target.parentNode.parentNode.parentNode.classList == "content"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "UL" && event.target.parentNode.classList == "content"){
                    event.target.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "SECTION" && event.target.parentNode.parentNode.parentNode.classList == "content"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "P" && event.target.parentNode.parentNode.classList == "content"){
                    
                    event.target.parentNode.parentNode.classList = "content flex";
                    return;
                    
                }
                if(event.target.nodeName.toString() === "BUTTON" && event.target.parentNode.parentNode.classList == "content"){
                    event.target.parentNode.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "BUTTON" && event.target.parentNode.parentNode.classList !== "content"){
                    return;
                }
                if(event.target.nodeName.toString() === "DIV" && event.target.parentNode.classList == "content"){
                    event.target.parentNode.classList = "content flex";
                    return;

                }
                if(event.target.nodeName.toString() === "I" && event.target.parentNode.parentNode.classList == "roll-down"){
                    return;
                }
                if(event.target.nodeName.toString() === "SPAN" && event.target.parentNode.parentNode.classList == "roll-down"){
                    return;
                }
                if(event.target.nodeName.toString() === "P" && event.target.parentNode.parentNode.classList == "roll-down"){
                    return;
                }
    
                if(event.target.nodeName.toString() === "IMG" && event.target.parentNode.parentNode.classList == "roll-down"){
                    return;
                }
                if(event.target.nodeName.toString() === "DIV" && event.target.classList == "roll-down"){
                    return;
                }
                if(event.target.nodeName.toString() === "SPAN" && event.target.parentNode.parentNode.parentNode.classList == "content"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                    return;
                }
                if(event.target.nodeName.toString() === "BUTTON" && event.target.parentNode.classList == "buttons"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                   
                    return;
                }
                if(event.target.nodeName.toString() === "A" && event.target.parentNode.parentNode.classList == "buttons"){
                    event.target.parentNode.parentNode.parentNode.parentNode.classList = "content flex";
                   
                    return;
                }
                if(event.target.nodeName.toString() === "DIV" && event.target.parentNode.classList == "slider-line"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                   
                    return;
                }

                if(event.target.nodeName.toString() === "DIV" && event.target.classList == "slider-line"){
                    event.target.parentNode.parentNode.classList = "content flex";
                   
                    return;
                }

                if(event.target.nodeName.toString() === "INPUT" && event.target.parentNode.classList == "slider-line"){
                    event.target.parentNode.parentNode.parentNode.classList = "content flex";
                   
                    return;
                }


                for(const content of contents){
                    if(content.classList == "content flex"){
    
                        content.classList = "content"

                        
                    }
                }
            
        })

          
//////////////////

reset.addEventListener("click", () =>{
    search.value = "";
});

///////////////////
const flash = document.querySelector(".flash");

flash.addEventListener("click", () =>{
    if(flash.classList == "flash"){
        
        flash.childNodes[1].classList.toggle("green");
        flash.childNodes[3].classList.toggle("green");

    }else if(flash.classList.contains("green")){
        // flash.classList = "flash";
        flash.childNodes[1].classList.toggle("green");
        flash.childNodes[3].classList.toggle("green");

    }
});

const retractBtn = document.querySelector(".roll-left-btn"); 

const retract = document.querySelector(".retract");

const showInfo = document.querySelector(".show-info");

retractBtn.addEventListener("click", () =>{
    if(retract.classList == "retract"){
        // retract.style.transform = "translate(-1000px)";
        showInfo.childNodes[1].textContent = "Show filters";
        retractBtn.childNodes[1].classList = "fa-solid fa-filter";
        retract.classList.toggle("translateX");
    }else if(retract.classList.contains("translateX")){
        showInfo.childNodes[1].textContent = "Hide filters";
        retractBtn.childNodes[1].classList = "fa-solid fa-chevron-left";
        retract.classList.toggle("translateX");
        
    }
});


///////range-slider//////

const rangeRight = document.querySelector(".range-right");

const rangeLeft = document.querySelector(".range-left");

const minResult = document.querySelector(".min-result");

const maxResult = document.querySelector(".max-result");

const resetRange = document.querySelector("#reset-range");


resetRange.addEventListener("click", () =>{
    minResult.innerHTML = "0";
});

rangeRight.addEventListener("input", () =>{
    

    console.log(rangeRight.value)
    if(rangeRight.value <= 723000){
        maxResult.innerHTML = (Math.floor(rangeRight.value / 7000));
    }

    else if(rangeRight.value < 1450000){
        maxResult.innerHTML = Math.floor(rangeRight.value / 145000) + "k";
        
    }

    else if(rangeRight.value <= 2370000){
        maxResult.innerHTML = Math.floor(rangeRight.value / 2370) + "k";
    }

    else if(rangeRight.value <= 3270000){
        maxResult.innerHTML = Math.floor(rangeRight.value / 3270) + "m";
    }

    else if(rangeRight.value >= 4356000){
        maxResult.innerHTML = "435.6b";
    }

    else if(rangeRight.value > 3270000 && rangeRight.value < 4356000){
       
        maxResult.innerHTML = Math.floor(rangeRight.value / 10000) + "b";
    }    
    
});

rangeLeft.addEventListener("input", () =>{
    console.log(rangeLeft.value)
    if(rangeLeft.value <= 723000){
        minResult.innerHTML = (Math.floor(rangeLeft.value / 7000));
    }

    else if(rangeLeft.value < 1450000){
        minResult.innerHTML = Math.floor(rangeLeft.value / 145000) + "k";
        
    }

    else if(rangeLeft.value <= 2370000){
        minResult.innerHTML = Math.floor(rangeLeft.value / 2370) + "k";
    }

    else if(rangeLeft.value <= 3270000){
        minResult.innerHTML = Math.floor(rangeLeft.value / 3270) + "m";
    }

    else if(rangeLeft.value >= 4356000){
        minResult.innerHTML = "435.6b";
    }

    else if(rangeLeft.value > 3270000 && rangeLeft.value < 4356000){
       
        minResult.innerHTML = Math.floor(rangeLeft.value / 10000) + "b";
    }    

});


//////////////////////////////close and roll up////////////////////

const newsRollUp =  document.querySelector(".first-icon");

const newsCloseBtn = document.querySelector(".second-icon");

const containerRollDown =  document.querySelector(".third-icon");

const containerCloseBtn = document.querySelector(".fourth-icon");

const news = document.querySelector(".news-bar");

const newsList = document.querySelector(".news-list");



const rollUpContainer = document.querySelector(".roll-up-container");

newsCloseBtn.addEventListener("click", () =>{
    if(news.classList = "news-bar"){
        news.style.display = "none";
    }
});

newsRollUp.addEventListener("click", () =>{
    if(rollUpContainer.classList = "roll-up-container"){
        rollUpContainer.classList.toggle("up");
        news.style.display = "none";
    
    }
});

containerCloseBtn.addEventListener("click", () =>{
    if(containerCloseBtn.classList = "third-icon"){
        rollUpContainer.style.display = "none";
    }
});

containerRollDown.addEventListener("click", () =>{
    if(rollUpContainer.classList.contains("up")){
        rollUpContainer.classList.toggle("up");
        news.style.display = "flex";
    
    }
});

////////////////////////hamburger-menu////////////

const hamBtn = document.querySelector(".hamburger-menu");

const hamContent = document.querySelector(".hamburger-container");

const hamCover = document.querySelector(".ham-cover");

hamBtn.addEventListener("click", () =>{
    if(hamContent.classList == "hamburger-container"){
        hamContent.classList.toggle("draw-back");
        hamCover.classList.toggle("block");

    }
})

hamCover.addEventListener("click", () =>{
    
    if(hamContent.classList.contains("draw-back")){
        hamCover.classList.toggle("block");
        hamContent.classList.toggle("draw-back");
    }

})

/////////////////////filter///////////

const filterBtn = document.querySelector(".filter");

const filterContainer = document.querySelector(".filter-container");

const closeFilter = document.querySelector(".close-filter");


filterBtn.addEventListener("click", () =>{
    if(filterContainer.classList == "filter-container"){
        filterContainer.classList.toggle("draw-full");
    }
});

closeFilter.addEventListener("click", () =>{
    if(filterContainer.classList.contains("draw-full")){
        filterContainer.classList.toggle("draw-full");

    }
});

/////about btn/////

const aboutBtn = document.querySelector("#about-btn");

const aboutList = document.querySelector(".about-list");

aboutBtn.addEventListener("click", () =>{
    if(aboutList.classList == "about-list"){
        aboutList.classList.toggle("flex");
        aboutBtn.classList = "fa-solid fa-chevron-up";
        // aboutList.parentNode.style.paddingBottom = "220px"
    }else{
        aboutBtn.classList = "fa-solid fa-chevron-down";
        aboutList.classList.toggle("flex");
        // aboutList.parentNode.style.paddingBottom = "0px"

    }
});

////////////select/////////

const onShows = document.querySelectorAll(".on-show");

const options = document.querySelectorAll(".options");



for(const onShow of onShows){
    onShow.addEventListener("click",() =>{
        if(onShow.nextElementSibling.classList == "options"){
            onShow.nextElementSibling.classList.toggle("flex");
        }else{
            onShow.nextElementSibling.classList.toggle("flex");
        }
    });
}

/////////////////////filter range//////////

const filterRangeRight = document.querySelector(".filter-range-right");

const filterRangeLeft = document.querySelector(".filter-range-left");

const filterMinResult = document.querySelector(".filter-min-result");

const filterMaxResult = document.querySelector(".filter-max-result");

const filterResetRange = document.querySelector("#filter-reset-range");


filterResetRange.addEventListener("click", () =>{
    filterMinResult.innerHTML = "0";
    filterMaxResult.innerHTML = "435.6b";
});

filterRangeRight.addEventListener("input", () =>{
    

    console.log(filterRangeRight.value)
    if(filterRangeRight.value <= 723000){
        filterMaxResult.innerHTML = (Math.floor(filterRangeRight.value / 7000));
    }

    else if(rangeRight.value < 1450000){
        filterMaxResult.innerHTML = Math.floor(filterRangeRight.value / 145000) + "k";
        
    }

    else if(filterRangeRight.value <= 2370000){
        filterMaxResult.innerHTML = Math.floor(filterRangeRight.value / 2370) + "k";
    }

    else if(filterRangeRight.value <= 3270000){
        filterMaxResult.innerHTML = Math.floor(filterRangeRight.value / 3270) + "m";
    }

    else if(filterRangeRight.value >= 4356000){
        filterMaxResult.innerHTML = "435.6b";
    }

    else if(filterRangeRight.value > 3270000 && filterRangeRight.value < 4356000){
       
        filterMaxResult.innerHTML = Math.floor(filterRangeRight.value / 10000) + "b";
    }    
    
});

filterRangeLeft.addEventListener("input", () =>{
    console.log(filterRangeLeft.value)
    if(filterRangeLeft.value <= 723000){
        filterMinResult.innerHTML = (Math.floor(filterRangeLeft.value / 7000));
    }

    else if(filterRangeLeft.value < 1450000){
        filterMinResult.innerHTML = Math.floor(filterRangeLeft.value / 145000) + "k";
        
    }

    else if(filterRangeLeft.value <= 2370000){
        filterMinResult.innerHTML = Math.floor(filterRangeLeft.value / 2370) + "k";
    }

    else if(filterRangeLeft.value <= 3270000){
        filterMinResult.innerHTML = Math.floor(filterRangeLeft.value / 3270) + "m";
    }

    else if(filterRangeLeft.value >= 4356000){
        filterMinResult.innerHTML = "435.6b";
    }

    else if(filterRangeLeft.value > 3270000 && filterRangeLeft.value < 4356000){
       
        filterMinResult.innerHTML = Math.floor(filterRangeLeft.value / 10000) + "b";
    }    

});

/////////////////page changer//////////////////

const tilesBtn = document.querySelector(".crypto-tiles-btn"); 

const tableBtn = document.querySelector(".crypto-table-btn");

const cryptoTiles = document.querySelector(".crypto-tiles");

const cryptoTable = document.querySelector(".crypto-table");

const navbar = document.querySelector(".nav-bar");

const menu = document.querySelector(".menu");

const tableTop = document.querySelector(".table-top-row");

const nav = document.querySelector("nav");

const footer = document.querySelector(".footer");

tilesBtn.addEventListener("click",() =>{
   if(cryptoTiles.classList == "crypto-tiles none" && cryptoTable.classList == "crypto-table flex"){
        cryptoTiles.classList = "crypto-tiles";
        cryptoTable.classList = "crypto-table";
        navbar.style.width = "1280px";
        menu.style.width = "1280px";
        footer.style.display = "none";
        

    } 
});

tableBtn.addEventListener("click", () =>{
    if(cryptoTiles.classList == "crypto-tiles" && cryptoTable.classList == "crypto-table"){
        cryptoTiles.classList = "crypto-tiles none";
        cryptoTable.classList = "crypto-table flex";
        navbar.style.width = "1260px";
        menu.style.width = "1260px";
        footer.style.display = "flex";
        
   
    }
});

/////////scroll down//////////

const scrollUp = document.querySelector(".return-scroll-btn");


document.addEventListener("scroll",() =>{
    console.log(window.scrollY)
    if(window.scrollY > 280){
        nav.style.position = "fixed"
        tableTop.style.position = "fixed";
        scrollUp.style.display = "block";    
    }else if(window.scrollY < 280){
        nav.style.position = "static"
        tableTop.style.position = "static";
        scrollUp.style.display = "none";    
    }

});

scrollUp.addEventListener("click",() =>{
    window.scrollTo({top:0,behavior:"smooth"});
});