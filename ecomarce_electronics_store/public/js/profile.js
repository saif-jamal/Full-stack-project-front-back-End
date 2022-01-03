
// admin show content
const arrow_show = document.getElementById("arrow_show");
const click_show=document.querySelector('.div_second');
const show_box=document.querySelector('.show_box');

var counter_check_admin_show=0;

click_show.addEventListener("click",(e)=>{
    if(counter_check_admin_show===0){
        arrow_show.classList.add('rotate_arrow_admin');
        show_box.classList.add("show__content_oF_admin");
        counter_check_admin_show=1;
    }
    else {
        arrow_show.classList.remove('rotate_arrow_admin');
        show_box.classList.remove("show__content_oF_admin");
        counter_check_admin_show=0;
    }
});

// list aside clicked custome style
const list_clicked0=document.querySelector('.clicked_list0');
const list_clicked1=document.querySelector('.clicked_list1');
const list_clicked2=document.querySelector('.clicked_list2');
const list_clicked3=document.querySelector('.clicked_list3');
const list_clicked4=document.querySelector('.clicked_list4');
const list_clicked5=document.querySelector('.clicked_list5');
const list_clicked6=document.querySelector('.clicked_list6');
const list_clicked7=document.querySelector('.clicked_list7');
const list_clicked8=document.querySelector('.clicked_list8');
const list_clicked9=document.querySelector('.clicked_list9');
const list_clicked10=document.querySelector('.clicked_list10');



const show_box2=document.querySelector('.show_box2');
const show_box3=document.querySelector('.show_box3');

const arrow_show2 = document.getElementById("arrow_show2");
const arrow_show3 = document.getElementById("arrow_show3");

var co0=0,co1=0,co2=0,co3=0,co4=0,co5=0,co6=0,co7=0,co8=0,co9=0,co10=0,count_click2=0,count_click3=0;


list_clicked0.addEventListener('click',()=>{
    if(co0===0){
        list_clicked0.classList.add('customestyleListAside');
        co0=1;
    }
    if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    }else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked1.addEventListener('click',()=>{
    if(co1===0){
        list_clicked1.classList.add('customestyleListAside');
        co1=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    }else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked2.addEventListener('click',()=>{
    if(co2===0){
        list_clicked2.classList.add('customestyleListAside');
        show_box2.classList.add("show__content_oF_admin");
        arrow_show2.classList.add('rotate_arrow_admin');
        co2=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    }else if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }

    if(count_click2==0){
        show_box2.classList.add("show__content_oF_admin");
        arrow_show2.classList.add('rotate_arrow_admin');
        count_click2=1;
    }else {
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        count_click2=0;

    }
});

list_clicked3.addEventListener('click',()=>{
    if(co3===0){
        list_clicked3.classList.add('customestyleListAside');
        co3=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } else if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.add('customestyleListAside');
        // show_box2.classList.remove("show__content_oF_admin");
        // arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked4.addEventListener('click',()=>{
    if(co4===0){
        list_clicked4.classList.add('customestyleListAside');
        co4=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } else if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.add('customestyleListAside');
        // show_box2.classList.remove("show__content_oF_admin");
        // arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked5.addEventListener('click',()=>{
    if(co5===0){
        list_clicked5.classList.add('customestyleListAside');
        show_box3.classList.add("show__content_oF_admin");
        arrow_show3.classList.add('rotate_arrow_admin');
        co5=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } else if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    }
    else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }




    if(count_click3==0){
        show_box3.classList.add("show__content_oF_admin");
        arrow_show3.classList.add('rotate_arrow_admin');
        count_click3=1;
    }else {
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        count_click3=0;
    }
});

list_clicked6.addEventListener('click',()=>{
    if(co6===0){
        list_clicked6.classList.add('customestyleListAside');
        co6=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } else if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.add('customestyleListAside');
        co5=0;
    }
    else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked7.addEventListener('click',()=>{
    if(co7===0){
        list_clicked7.classList.add('customestyleListAside');
        co7=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } else if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.add('customestyleListAside');
        co5=0;
    }
    else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked8.addEventListener('click',()=>{
    if(co8===0){
        list_clicked8.classList.add('customestyleListAside');
        co8=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked9.addEventListener('click',()=>{
    if(co9===0){
        list_clicked9.classList.add('customestyleListAside');
        co9=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co10===1){
        list_clicked10.classList.remove('customestyleListAside');
        co10=0;
    }
});

list_clicked10.addEventListener('click',()=>{
    if(co10===0){
        list_clicked10.classList.add('customestyleListAside');
        co10=1;
    }
    if(co0===1){
        list_clicked0.classList.remove('customestyleListAside');
        co0=0;
    } if(co1===1){
        list_clicked1.classList.remove('customestyleListAside');
        co1=0;
    } else if(co2===1){
        list_clicked2.classList.remove('customestyleListAside');
        show_box2.classList.remove("show__content_oF_admin");
        arrow_show2.classList.remove('rotate_arrow_admin');
        co2=0;
    }else if(co3===1){
        list_clicked3.classList.remove('customestyleListAside');
        co3=0;
    }else if(co4===1){
        list_clicked4.classList.remove('customestyleListAside');
        co4=0;
    }else if(co5===1){
        list_clicked5.classList.remove('customestyleListAside');
        show_box3.classList.remove("show__content_oF_admin");
        arrow_show3.classList.remove('rotate_arrow_admin');
        co5=0;
    }else if(co6===1){
        list_clicked6.classList.remove('customestyleListAside');
        co6=0;
    } else if(co7===1){
        list_clicked7.classList.remove('customestyleListAside');
        co7=0;
    }else if(co8===1){
        list_clicked8.classList.remove('customestyleListAside');
        co8=0;
    }else if(co9===1){
        list_clicked9.classList.remove('customestyleListAside');
        co9=0;
    }
});








// dark mode button
const darkmode =document.querySelector('.darkmodebutton');
const  dashboardCOntent=document.querySelector('.right_side_nav');
const text___changing=document.querySelectorAll('.white___chang');
const bg__chang=document.querySelectorAll('.bg__change');
const modemode=document.getElementById('slideMode');
const formproductchangcolormode = document.querySelectorAll('.bg__change_____formproduct');







// localStorage.setItem('darkmode_color',true);
if(localStorage.getItem('darkmode_color') === null){

    localStorage.setItem('darkmode_color',true);
    dashboardCOntent.classList.add('modeChangeforDarkorLight');

// chang text
    text___changing.forEach(element=>{
        element.classList.add('white_text');
    });

// chang bg
    bg__chang.forEach(element=>{
        element.classList.add('dark_lowww');
    });



    formproductchangcolormode.forEach(element=>{
        element.classList.remove('white_bg_lw');
        element.classList.add('black_bg');

    });


}





// heartbutton.classList.add('heartcolor');

darkmode.addEventListener('click',()=>{
    if(localStorage.getItem('darkmode_color')=='false'){
        localStorage.setItem('darkmode_color',true);
        darkmodedo();
    }

    else if(localStorage.getItem('darkmode_color')=='true'){
        localStorage.setItem('darkmode_color',false);
        darkmodedo();
    }

});
function darkmodedo() {

    if (localStorage.getItem('darkmode_color') == 'true') {

        text___changing.forEach(element=>{
            element.classList.add('white_text');
        });

        bg__chang.forEach(element=>{
            element.classList.add('dark_lowww');
        });

        dashboardCOntent.classList.add('modeChangeforDarkorLight');

        formproductchangcolormode.forEach(element=>{
            element.classList.remove('white_bg_lw');
            element.classList.add('black_bg');

        });

    }
    else if (localStorage.getItem('darkmode_color') == 'false') {
        text___changing.forEach(element=>{
            element.classList.remove('white_text');
        });

        bg__chang.forEach(element=>{
            element.classList.remove('dark_lowww');
        });

        dashboardCOntent.classList.remove('modeChangeforDarkorLight');

        formproductchangcolormode.forEach(element=>{
            element.classList.add('white_bg_lw');
            element.classList.remove('black_bg');

        });
    }

}


    if (localStorage.getItem('darkmode_color') == 'true') {

        darkmodedo();

    }
    else if (localStorage.getItem('darkmode_color') == 'false') {
        modemode.click();
        localStorage.setItem('darkmode_color',false);


        darkmodedo();
    }































// menu button //////////////////////////////////////
let wrapperMenu = document.querySelector('.wrapper-menu');
let menu________ = document.querySelector('.menu__button__');
let leftsidemenu = document.querySelector('.left_side_nav');
let count_menu= 0;
let check__menu=false;
let check__menu2=false;
// let boolean_chek_ifmenubutton_is_active=false;

wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');
    if(count_menu==0){
        leftsidemenu.classList.add('hidesidenav');
        menu________.classList.add('button_show_when_closeasidenav');
        // boolean_chek_ifmenubutton_is_active=true;
        count_menu=1;
    }else {
        leftsidemenu.classList.remove('hidesidenav');
        menu________.classList.remove('button_show_when_closeasidenav');
        count_menu=0;
    }


    if(window.innerWidth<=1200){
        check__menu=true;
        check__menu2=false;

    }else if(window.innerWidth >1200){
        check__menu=false;
        check__menu2=true;
    }

});

let widthscreen;
widthscreen=window.innerWidth;

if(widthscreen<=1200 && count_menu==0){
    wrapperMenu.classList.toggle('open');
    leftsidemenu.classList.add('hidesidenav');
    menu________.classList.add('button_show_when_closeasidenav');
    count_menu=1;
}

window.addEventListener('resize',()=>{

    if(window.innerWidth<=1200){
        widthscreen=1200;
    }else if(window.innerWidth >1200){
        widthscreen=1201;
    }



    if(widthscreen ==1200 && count_menu==0 && check__menu==false){
        wrapperMenu.classList.toggle('open');
        leftsidemenu.classList.add('hidesidenav');
        menu________.classList.add('button_show_when_closeasidenav');
        count_menu=1;
    }


    if(widthscreen == 1201 && count_menu==1 && check__menu2==false){
        wrapperMenu.classList.remove('open');
        leftsidemenu.classList.remove('hidesidenav');
        menu________.classList.remove('button_show_when_closeasidenav');
        count_menu=0;
    }

});





// nav
/////////////////////////////////////////

const nav_____________=document.querySelector('.searchbox__input');
const li__=document.querySelector('.search_right');
const icon_search__=document.querySelector('.search__butt');

li__.addEventListener('mouseover',()=>{
    nav_____________.classList.add('changesearchfield');
    nav_____________.classList.remove('show_text');

    icon_search__.classList.add('icon_change_position');
});

li__.addEventListener('mouseout',()=>{
    nav_____________.classList.remove('changesearchfield');
    nav_____________.classList.add('show_text');
    icon_search__.classList.remove('icon_change_position');
});

