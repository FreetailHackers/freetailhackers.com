let personTemplate = Handlebars.compile(document.getElementById('person').innerHTML);
let text = "Arjun Kunjilwar\\tLorem Epsum ditum blah blah blah cblah blah\\tme.jpg\nArjun Kunjilwar\\tLorem Epsum ditum blah blah blah cblah blah\\tme.jpg"
let collages = null

let widthBreakPoints = [768, 992, 1200]
let widthIndex = -1


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
            widthIndex = getWidthIndex()
        // }
    // )

    collages = document.querySelectorAll('.collage-container')
    console.log(collages)

})

$(window).resize(function() {
    let newWidthIndex = getWidthIndex()
    console.log(newWidthIndex)
    console.log(widthIndex)
    if (newWidthIndex != widthIndex) {
        console.log("YOWHAT")
        // need to resize carousel
        widthIndex = newWidthIndex
        //remove all carousel nodes
        let carousel = document.getElementsByClassName("carousel-inner")[0];
        while (carousel.firstChild) {
            carousel.removeChild(carousel.firstChild);
        }
        // add back 
        let numRows = collages.length / (widthIndex + 1)
        let itemsPerRow = widthIndex + 1
        for (let row = 0; i < numRows; i++) {
            let carousel_item = document.createElement("div")
            carousel_item.className = 'carousel-item'
            let row = document.createElement("div")
            row.className = 'row'
            for (let item = 0; item < itemsPerRow; item++) {
                row.appendChild(collages[(row * itemsPerRow) + item])
            } 
            carousel_item.appendChild(row)
            carousel.appendChild(carousel_item)
        }
    }
  });

function createPerson(name, bio, image_url) {
    let context = {name: name, bio: bio, image_url: image_url};
    return personTemplate(context);
}

function getWidthIndex() {
    let i = 0;
    console.log($(window.width))
    for (; i < widthBreakPoints.length; i++) {
       if ($(window.width) < widthBreakPoints[i]) {
           break;
       } 
    }
    return i;
}