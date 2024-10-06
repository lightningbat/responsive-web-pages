let searchItems = document.getElementsByClassName("search-item");
let randClrs = ["#f9f1ff", "#fff1fd", "#f1f4ff", "#f1fdff", "#f1fff2", "#fff1f1", "#fffef1", "#fff8f1"];
for(let searchItem of searchItems){
    let rand_num = Math.floor(Math.random() * (randClrs.length));
    let randClr = randClrs[rand_num];
    searchItem.style.backgroundColor = randClr;
    randClrs.splice(rand_num, 1);
}

let default_visible_searchItems = 4;
let search_item_cont_status = false; // false = collapsed

function set_default_visible_searchItems(){
    let search_item_cont_width = (document.getElementsByClassName("search-items-cont"))[0].offsetWidth;
    if(search_item_cont_width >= 780){
        default_visible_searchItems = 6;
        for(let i=4; i<6; i++){
            searchItems[i].style.display = "block";
        }
    } else{
        if(!search_item_cont_status){
            for(let i=4; i<6; i++){
                searchItems[i].style.display = 'none';
            }
        }
    }
}
set_default_visible_searchItems();

set_search_items_visibility('none')

function set_search_items_visibility(val){
    for(let i=default_visible_searchItems; i<searchItems.length; i++){
        searchItems[i].style.display = val;
    }
}
function see_more_less(el){
    let child_svg = (el.children)[0].children[0];
    let child_text = el.children[1];
    
    if(!search_item_cont_status){
        child_svg.style.transform = "rotate(-90deg)";
        child_text.innerHTML = "See less";
        set_search_items_visibility("block")
        search_item_cont_status = true;
    } else {
        child_svg.style.transform = "rotate(90deg)";
        child_text.innerHTML = "See more";
        set_search_items_visibility("none")
        search_item_cont_status = false;
    }
}

function adjust_blog_post(){
    let blog_post = document.getElementsByClassName("blog");
    let blog_img_height = (blog_post[0].children)[0].offsetHeight;
    for(let i=1; i<blog_post.length; i++){
        blog_post[i].children[0].style.height = (blog_img_height + "px");
    }
}
adjust_blog_post()

function adjust_news_img(){
    let img_cont = document.getElementsByClassName("post-news");
    let img_height = img_cont[0].children[0].offsetHeight;
    img_cont[1].children[0].style.height = img_height + "px";
}
adjust_news_img()

function resizeHandler(){
    adjust_blog_post();
    set_default_visible_searchItems();
    adjust_news_img();
}
window.onresize = resizeHandler;
