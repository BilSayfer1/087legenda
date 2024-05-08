// let first_btn = document.querySelector('.header__right-block button')
// let close_modal = document.querySelector('.modal__close')
// let first_modal = document.querySelector('.modal')

// // first_btn.onclick = () => {
// //     first_modal.style.display = 'flex'
// // }

// // close_modal.onclick = () => {

// //     first_modal.style.display = 'none'
// // }


// let open_buttons = document.querySelectorAll(`[data-modal]`)
// let close_buttons = document.querySelectorAll(`[data-close]`)
// let modal = document.querySelector(`.modal`)

// function open_close_modal(arr, open) {
//     arr.forEach(button => {
//         button.onclick = () => {
//             modal.classList[open ? "add" : "remove"](`show`, `fade`)
//             document.body.style.overflow = open ? "hidden" : "scroll"
//         }
//     });
// }

// open_close_modal(open_buttons, true)
// open_close_modal(close_buttons, false)

// let btns = document.querySelectorAll('#btns')

// close_modal.onclick = () => {

//     first_modal.style.display = 'none'
//     body.style.overflow = "scroll"

// }

// const slides = document.querySelectorAll('.offer__slide');
// let slidesindex = 0;
// let numcurr = document.querySelector('#current')

// let totalnum = document.querySelector('#total')

// slides.forEach(slide => slide.classList.add('hide', 'fade'));
// slides[slidesindex].classList.remove('hide');

// const next_btn = document.querySelector('.offer__slider-next');
// const prev_btn = document.querySelector('.offer__slider-prev');

// function slidesshow(n) {
//     slides.forEach(slide => slide.classList.add('hide', 'fade'));
//     slides[slidesindex].classList.add('hide');

//     slidesindex = (slidesindex + n) % slides.length;
//     slides[slidesindex].classList.remove('hide');

//     setInterval(() => {
//         seconds.innerHTML--
//         if (seconds.innerHTML <= -1) {
//             seconds.innerHTML = 59
//             minutes.innerHTML--
//         }

//     }, 1000);

//     const offerslider = document.querySelectorAll('.offerslide')
//     const prev_next_btn = document.querySelectorAll('[data-group]')
//     const idx_btn = document.querySelector('#current')
//     let tnt = 0

//     show(tnt)
//     function show(n) {
//         if (n >= offerslider.length) {
//             tnt = 0
//         }

//         if (n < 0) {
//             tnt = offer__slider.length - 1
//         }

//         offer__slider.forEach(slide => slide.classList.add('hide'))
//         offer__slider[tnt].classList.remove('hide')
//     }

//     prev_next_btn.forEach(btn => {
//         btn.onclick = () => {
//             const act = btn.getAttribute('data-group')

//             if (act === 'prev') {
//                 tnt--
//                 idx_btn.innerHTML = tnt
//                 show(tnt)
//             } else {
//                 tnt++
//                 idx_btn.innerHTML = tnt

//                 show(tnt)
//             }
//         }

//     })


// }

// function slidesshow(n) {
//     slides.forEach(slide => {


//         slide.classList.add('hide', 'fade')


//     });

//     slidesindex = (slides.length + slidesindex + n) % slides.length;

//     slides[slidesindex].classList.remove('hide');
// }

// next_btn.onclick = () => {
//     slidesshow(1);
//     numcurr.innerText = "0" + slidesindex
// };

// prev_btn.onclick = () => {
//     slidesshow(-1);
//     numcurr.innerText = "0" + slidesindex

// };


// // let tabcontent = document.querySelectorAll(`.tabcontent`)
// // let buttons = document.querySelectorAll(`[data-group]`)

// // buttons.forEach(btn => {
// //     btn.onclick = () => {
// //         const idx = btn.getAttribute(`data-group`)
// //         tabcontent.forEach(slide => slide.classList.add(`hide`))
// //         tabcontent[idx - 1].classList.remove(`hide`)
// //     }
// // })

// const tab_btns = document.querySelectorAll(`.tabheader__item`)
// const tabcontent = document.querySelectorAll(`.tabcontent`)

// function showTabs(idx) {
//     tabcontent.forEach(slide => slide.classList.add(`hide`, `fade`))
//     tabcontent[idx].classList.remove(`hide`)
// }
// showTabs(0)

// tab_btns.forEach((btn, idx) => {
//     btn.onclick = () => {
//         tab_btns.forEach(el => el.classList.remove(`tabheader__item_active`))
//         btn.classList.add(`tabheader__item_active`)
//         showTabs(idx)
//     }
// })
// let user = {
//     gender: `woman`
// }

// const gender_btns = document.querySelectorAll(`#gender div`)
// const inputs = document.querySelectorAll('.calculating__choose_medium input');

// gender_btns.forEach(btn => {
//     btn.onclick = () => {
//         gender_btns.forEach(el => el.classList.remove(`calculating__choose-item_active`))
//         btn.classList.add(`calculating__choose-item_active`)



//         user.gender = btn.getAttribute(`data-g`)
//     }
// })
// inputs.forEach(inp => {
//     inp.oninput = () => {
//         user[inp.id] = inp.value;
//     };
// });



// cardio_btns.forEach(btn => {
//     btn.onclick = () => {
//         let cardio = btn.getAttribute('data-cardio');

//         cardio_btns.forEach(el => el.classList.remove('calculating__choose-item_active'));
//         btn.classList.add('calculating__choose-item_active');

//         if (user.gender === 'woman') {
//             let result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age);
//             viue.innerHTML = Math.round(result * cardio);
//         } else {
//             let result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age);
//             viue.innerHTML = Math.round(result * cardio);
//         }
//     };
// });

// const deadline = "2025-02-16 00:00"


// function getRemainingTime(endTime) {
//     const t = Date.parse(endTime) - Date.parse(new Date())
//     const days = Math.floor((t / 1000) / 60 / 60 / 24)
//     const hours = Math.floor((t / 1000) / 60 / 60 % 24)
// const minutes = Math.floor((t / 1000) / 60 % 60)
// const seconds = Math.floor((t / 1000) % 60) 


// return {
//     t,
//     days,
//     hours,
//     minutes,
//     seconds
// }
// }

// function setTimer(endTime, selector) {
//     const t = document.querySelector(selector)

//     const days = t.querySelector(`#days`)
//     const hours = t.querySelector(`#hours`)
//     const minutes = t.querySelector(`#minutes`)
//     const seconds = t.querySelector(`#seconds`)
//     const interval = setInterval(updateTimer, 1000)

//     function updateTimer() {
//         const t = getRemainingTime(endTime)


//         if(t.t <= 0) {
//             clearInterval(interval)
//             return
//         }

//         days.innerHTML = setNulls(t.days)
//         hours.innerHTML = setNulls(t.hours)
//         minutes.innerHTML = setNulls(t.minutes)
//         seconds.innerHTML = setNulls(t.seconds)

//         function setNulls(num) {
//             return num < 10 ? `0${num}` : num
//         }
//     }
// }


// setTimer(deadline, `.timer`)





// var defaults = {
//     spread: 360,
//     ticks: 50,
//     gravity: 0,
//     decay: 0.94,
//     startVelocity: 30,
//     colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
//   };

//   function shoot() {
//     confetti({
//       ...defaults,
//       particleCount: 40,
//       scalar: 1.2,
//       shapes: ['star']
//     });

//     confetti({
//       ...defaults,
//       particleCount: 10,
//       scalar: 0.75,
//       shapes: ['circle']
//     });
//   }

//   setTimeout(shoot, 0);
//   setTimeout(shoot, 100);
//   setTimeout(shoot, 200);

let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')


function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"]('show', 'fade')
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)



const slides = document.querySelectorAll('.offer__slide');
let slidesindex = 0;

let num_picture = document.querySelector('#current')


slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');




function slidesshow(n) {
    slides.forEach(slide => {
        slide.classList.add('hide', 'fade')
    });

    slidesindex = (slides.length + slidesindex + n) % slides.length;
    slides[slidesindex].classList.remove('hide');
}

next_btn.onclick = () => {
    slidesshow(1);
    num_picture.innerText = "0" + slidesindex
};

prev_btn.onclick = () => {
    slidesshow(-1);
    num_picture.innerText = "0" + slidesindex

};

const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')


function showTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')
}
showTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader_item_active'))
        btn.classList.add('tavheader__item_active')
        showTabs(idx)
    }
})






const gender_btns = document.querySelectorAll('#gender div')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const cardio_btns = document.querySelectorAll('.calculating__choose_big div')
const result_view = document.querySelector('#result_view')


let user = {
    gender: 'woman'
}

gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        user.gender = btn.getAttribute('data-g')
    }
})

inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.id] = inp.value
    }
})


cardio_btns.forEach(btn => {
    btn.onclick = () => {
        cardio_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let cardio = btn.getAttribute('data-cardio')

        if (user.gender === "woman") {
            let result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age);

            result_view.innerHTML = Math.round(result * cardio)
        } else {
            let result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age);

            result_view.innerHTML = Math.round(result * cardio)
        }
    }

})





function setTimer() {
    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');



    let days = parseInt(daysElement.textContent, 10);
    let hours = parseInt(hoursElement.textContent, 10);
    let minutes = parseInt(minutesElement.textContent, 10);
    let seconds = parseInt(secondsElement.textContent, 10);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    var defaults = {
                        spread: 360,
                        ticks: 50,
                        gravity: 0,
                        decay: 0.94,
                        startVelocity: 30,
                        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
                    };

                    function shoot() {
                        confetti({
                            ...defaults,
                            particleCount: 40,
                            scalar: 1.2,
                            shapes: ['star']
                        });

                        confetti({
                            ...defaults,
                            particleCount: 10,
                            scalar: 0.75,
                            shapes: ['circle']
                        });
                    }

                    setTimeout(shoot, 0);
                    setTimeout(shoot, 100);
                    setTimeout(shoot, 200);
                    return;

                }
            }
        }
    }

    daysElement.textContent = nol(days);
    hoursElement.textContent = nol(hours);
    minutesElement.textContent = nol(minutes);
    secondsElement.textContent = nol(seconds);
}

function nol(number) {
    return (number < 10 ? '0' : '') + number;
}

setInterval(setTimer, 1000)

const svyazForm = document.forms.namedItem("svyaz");

svyazForm.onsubmit = (event) => {
    event.preventDefault();

    let nameInput = document.querySelector("#name").value
    let phoneInput = document.querySelector("#phone").value
    console.log(nameInput, phoneInput);

    let user_data = {
        user_name: nameInput,
        user_number: phoneInput
    };



    console.log(user_data);
};

const headerLinks = document.querySelectorAll(".header__link");

headerLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        modal = document.querySelector(".modal");
        
        modal.scrollIntoView({ behavior: "smooth" });
    });
});









