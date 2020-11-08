var lis = document.querySelectorAll('ul.thumb li');
var     circle = document.querySelector('.circle');

//GETTING EACH LI USING LOOP
//
// for (let i = 0; i < lis.length; i++){
//     lis[i].addEventListener('click', function () {
//         document.querySelector('.starbucks').src = `images/img${i+1}.png`;
//     });
// }

//GETTING EACH LI USING FOREACH
lis.forEach(function (el, order) {
    el.addEventListener('click', function () {
        document.querySelector('.starbucks').src = `images/img${order + 1}.png`;

        switch(order){
            case 0: circle.style.background = '#017143';
            break;
            case 1: circle.style.background = '#eb7495';
                break;
            case 2: circle.style.background = '#d752b1';
                break;
            default:circle.style.background = '#017143';
        }
    })

})