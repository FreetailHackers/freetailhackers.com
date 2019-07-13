let personTemplate = Handlebars.compile(document.getElementById('person').innerHTML);
let text = "Arjun Kunjilwar\\tLorem Epsum ditum blah blah blah cblah blah\\tme.jpg\nArjun Kunjilwar\\tLorem Epsum ditum blah blah blah cblah blah\\tme.jpg"

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
})

function createPerson(name, bio, image_url) {
    let context = {name: name, bio: bio, image_url: image_url};
    return personTemplate(context);
}