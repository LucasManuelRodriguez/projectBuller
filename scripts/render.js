export function renderDate(boxPrint,picture) {
    boxPrint.innerHTML+=`<div class="slider-box_picture">
                                    <img class="slider_picture" src="${picture.src}" alt="${picture.alt}">
                               </div>`
}
