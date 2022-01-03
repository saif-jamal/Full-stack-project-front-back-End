// navbar list clicked
// const navbar_clicked = document.querySelectorAll(".main_navitem");
//
//
// navbar_clicked.forEach(function (elem){
//     elem.addEventListener('click',()=>{
//         elem.classList.add('navbarlistclicked');
//     });
//
//     elem.classList.add('navbarlistclicked');
//     elem.style.backgroundColor="red";
// });
//

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



// chart code here............................................................/////////////////////////////////////////////


// chart1 type bar here///////////////////////////////////////////////////////////////

const labels1 = [
    'ja',
    'Fe',
    "Ma",
    'Ap',
    'Mai',
    'Ju',
    'Jul',
    'Au',
    'Se',
    'Oc',
    'No',
    'De',
];
const data1 = {
    labels: labels1,
    datasets: [{
        label: 'Website view',
        data: [478, 410, 270, 695, 488, 414, 270,410,495,600,690,840],
        backgroundColor: 'rgb(255, 255, 255)',

    }]

};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        color:"#fff",
    },
};
const myChart1 = new Chart(
    document.getElementById('mycanvas1'),
    config1
);


// chart2 type line///////////////////////////////////////////////////////////////////////

const labels2 = [
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S',
];
const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Daily Sales',
        backgroundColor: 'rgb(253,253,253)',
        borderColor: 'rgb(248,248,248)',
        data: [10, 18, 9, 18, 22, 20, 39],
        fill: true,
        backgroundColor: 'rgb(255, 0, 0, 0.2)',
        tension: 0.1,
        borderColor:'#fff'
    }]
};
const config2 = {
    type: 'line',
    data: data2,
    options: {
        color:"#fff",
    },

};
const myChart2 = new Chart(
    document.getElementById('mycanvas2'),
    config2
);

// chart 3 type line /////////////////////////////////////////////////////////////

const labels3 = [
    '12am',
    '3pm',
    '6pm',
    '9pm',
    '12pm',
    '3am',
    '6am',
    '9am',
];
const data3 = {
    labels: labels3,
    datasets: [{
        label: 'Products Sales',
        backgroundColor: 'rgb(253,253,253)',
        borderColor: 'rgb(248,248,248)',
        data: [200, 685, 400, 250, 240, 210, 204,200],
        fill: false,
        backgroundColor: 'rgb(255, 0, 0, 0.2)',
        tension: 0.1,
        borderColor:'#fff'
    }]
};
const config3 = {
    type: 'line',
    data: data3,
    options: {
        color:"#fff",
    },

};
const myChart3 = new Chart(
    document.getElementById('mycanvas3'),
    config3
);




// employee///////////////////////////////////////////////////////////////////////////////////////











// dark mode button
const darkmode =document.querySelector('.darkmodebutton');
const  dashboardCOntent=document.querySelector('.right_side_nav');
const cardchangcolor=document.querySelectorAll('.card_change_color');
const cardchangcolor2=document.querySelectorAll('p');
const cardchangcolor3=document.querySelectorAll('i');
const cardchangcolor4=document.querySelectorAll('span');
const text_cha=document.querySelectorAll('.text_change_color');
const  prograssbar=document.querySelectorAll('.progress-bar');
const  h6heading=document.querySelectorAll('h6');
const text_exceptioncolor=document.querySelectorAll('.text__exception_change_color');
const heartbutton=document.getElementById('heartButton');

const input_text_field=document.querySelectorAll('input');




// localStorage.setItem('darkmode_color',true);
if(localStorage.getItem('darkmode_color') === null){

    localStorage.setItem('darkmode_color',true);
    dashboardCOntent.classList.add('modeChangeforDarkorLight');


    cardchangcolor.forEach(element=>{
        element.classList.add('colorforcard');
        element.classList.add('text_color');
    });

    text_cha.forEach(element=>{
        element.classList.add('text_color');
    });

    input_text_field.forEach(element=>{
        element.classList.add('text-white');
    });

    h6heading.forEach(element=>{
        element.classList.add('text_color');
    });
    prograssbar.forEach(element=>{
        element.classList.remove('bg-dark');
    });

    cardchangcolor2.forEach(element=>{

        element.classList.add('text-white');
    });
    cardchangcolor3.forEach(element=>{

        element.classList.add('text-white');
    });
    cardchangcolor4.forEach(element=>{

        element.classList.add('text-white');
    });

    text_exceptioncolor.forEach(element=>{

        element.classList.add('text-white');
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

        cardchangcolor.forEach(element => {
            element.classList.add('colorforcard');
            element.classList.add('text_color');
        });

        text_exceptioncolor.forEach(element => {

            element.classList.add('text-white');
        });

        text_cha.forEach(element => {
            element.classList.add('text_color');
        });
        h6heading.forEach(element => {
            element.classList.add('text_color');
        });
        prograssbar.forEach(element => {
            element.classList.remove('bg-dark');
        });

        cardchangcolor2.forEach(element => {

            element.classList.add('text-white');
        });
        cardchangcolor3.forEach(element => {

            element.classList.add('text-white');
        });
        cardchangcolor4.forEach(element => {

            element.classList.add('text-white');
        });

        dashboardCOntent.classList.add('modeChangeforDarkorLight');
        count_dark = 1;

    }
    else if (localStorage.getItem('darkmode_color') == 'false') {
        cardchangcolor.forEach(element => {
            element.classList.remove('colorforcard');
            element.classList.remove('text_color');
        });


        text_cha.forEach(element => {
            element.classList.remove('text_color');
        });
        h6heading.forEach(element => {
            element.classList.remove('text_color');
        });
        prograssbar.forEach(element => {
            element.classList.add('bg-dark');
        });

        cardchangcolor2.forEach(element => {

            element.classList.remove('text-white');
        });
        cardchangcolor3.forEach(element => {

            element.classList.remove('text-white');
        });
        cardchangcolor4.forEach(element => {

            element.classList.remove('text-white');
        });

        text_exceptioncolor.forEach(element => {

            element.classList.add('text-white');
        });
        // heartbutton.classList.add('heartcolor');
        dashboardCOntent.classList.remove('modeChangeforDarkorLight');
        count_dark = 0;
    }

}

if (localStorage.getItem('darkmode_color') == 'true') {
    cardchangcolor.forEach(element => {
        element.classList.add('colorforcard');
        element.classList.add('text_color');
    });

    text_exceptioncolor.forEach(element => {

        element.classList.add('text-white');
    });

    text_cha.forEach(element => {
        element.classList.add('text_color');
    });
    h6heading.forEach(element => {
        element.classList.add('text_color');
    });
    prograssbar.forEach(element => {
        element.classList.remove('bg-dark');
    });

    cardchangcolor2.forEach(element => {

        element.classList.add('text-white');
    });
    cardchangcolor3.forEach(element => {

        element.classList.add('text-white');
    });
    cardchangcolor4.forEach(element => {

        element.classList.add('text-white');
    });

    dashboardCOntent.classList.add('modeChangeforDarkorLight');
    count_dark = 1;

}
else if (localStorage.getItem('darkmode_color') == 'false') {
    darkmode.click();
    localStorage.setItem('darkmode_color',false);

    cardchangcolor.forEach(element => {
        element.classList.remove('colorforcard');
        element.classList.remove('text_color');
    });


    text_cha.forEach(element => {
        element.classList.remove('text_color');
    });
    h6heading.forEach(element => {
        element.classList.remove('text_color');
    });
    prograssbar.forEach(element => {
        element.classList.add('bg-dark');
    });

    cardchangcolor2.forEach(element => {

        element.classList.remove('text-white');
    });
    cardchangcolor3.forEach(element => {

        element.classList.remove('text-white');
    });
    cardchangcolor4.forEach(element => {

        element.classList.remove('text-white');
    });

    text_exceptioncolor.forEach(element => {

        element.classList.add('text-white');
    });
    // heartbutton.classList.add('heartcolor');
    dashboardCOntent.classList.remove('modeChangeforDarkorLight');
    count_dark = 0;
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

