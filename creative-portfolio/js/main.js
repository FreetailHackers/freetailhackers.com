let personTemplate = Handlebars.compile(document.getElementById('person').innerHTML);
let text = "Arjun Kunjilwar\\tLorem Epsum ditum blah blah blah cblah blah\\tme.jpg\nArjun Kunjilwar\\tLorem Epsum ditum blah blah blah cblah blah\\tme.jpg"
let collages = null

let widthBreakPoints = [768, 992, 1200]
let widthIndex = 3 // html starts off with 4 collages per row, but this may not be correct if the user loads page on smaller screen
let startIndex = 0 //the collage index for the leftmost collage visible on the screen


document.addEventListener('DOMContentLoaded', () => {
    // fetch('data/person-info.txt').then(response => response.text()).then(
    //     text => {
            let lines = text.split('\n')
            let grid = document.querySelector('#biography-container')
            let row = null
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].split('\\t')
                if (!row) {
                    row = document.createElement('div')
                    row.className = 'row'
                } 
                row.innerHTML += createPerson(line[0], line[1], line[2])
                if (i % 2 == 1) {
                    //row is full
                    grid.innerHTML += row.outerHTML
                    row = null
                }                
            }
            if (row != null) {
                grid.innerHTML += row.innerHTML
            }
        // }
    // )

    collages = document.querySelectorAll('.collage-container')
    resizeIfNecessary()
    $('#portfolio-carousel').on('slide.bs.carousel', function (e) {
        startIndex = (e.to) * (widthIndex + 1)
    })

})

$(window).resize(resizeIfNecessary);

function resizeIfNecessary() {
    let newWidthIndex = getWidthIndex()
    if (newWidthIndex != widthIndex) {
        // need to resize carousel
        widthIndex = newWidthIndex
        //remove all carousel nodes
        let carousel = document.getElementsByClassName("carousel-inner")[0];
        while (carousel.firstChild) {
            carousel.removeChild(carousel.firstChild);
        }
        // add back
        let itemsPerRow = widthIndex + 1
        let itemIndex = 0
        let rowNum = 0;
        while (itemIndex < collages.length) {
            let carousel_item = document.createElement("div")
            carousel_item.className = 'carousel-item'
            let row = document.createElement("div")
            row.className = 'row'
            for (let i = 0; i < itemsPerRow && itemIndex < collages.length; i++) {
                row.innerHTML += (collages[(rowNum * itemsPerRow) + itemIndex]).outerHTML
                if (itemIndex == startIndex) {
                    carousel_item.className = 'carousel-item active'
                }
                itemIndex += 1
            }
            carousel_item.innerHTML += row.outerHTML
            carousel.innerHTML += carousel_item.outerHTML
        }
        rowNum += 1
    }
}

function createPerson(name, bio, image_url) {
    let context = {name: name, bio: bio, image_url: image_url};
    return personTemplate(context);
}

function getWidthIndex() {
    let i = 0;
    for (; i < widthBreakPoints.length; i++) {
       if ($(window).width() < widthBreakPoints[i]) {
           break;
       } 
    }
    return i;
}

