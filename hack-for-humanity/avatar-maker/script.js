const headwear = ["", "sensei eyes.svg", "sensei beard.svg"]

const accessories = ["", "Skii .svg",
  "Artist hat.svg",
  "winter hat.svg",
  "skii handle.svg",
  "chef hat.svg",
  "Sensei hat.svg",
  "peace sprout.svg",
  "Love balloon.svg",
  "sensei shoes.svg",
  "chef spoon.svg",
  "Farmer Carrot.svg",
  "Farmer shovel.svg",
  "farmer hat.svg",
  "left glove.svg",
  "Hacker computer.svg",
  "Hacker sunglasses.svg",
  "Love headband.svg",
  "Artist brush.svg",
  "Artist paint .svg",
  "ukrain flag.svg",
  "winter scarf.svg",
  "right glove.svg",
  "skii earmuff.svg"]

const outfits = ["", "skii jacket.svg", "Chef Apron.svg", "Farmer clothes.svg", "Artist apron.svg", "Hacker sweater.svg", "peace t-shirt.svg", "love dress.svg"]

const headwearSuppClasses = {
  "": "emptyImg",
  "sensei eyes.svg": "headwearSupp0", "sensei beard.svg": "headwearSupp1"
}

const outfitSuppClasses = {
  "": "emptyImg",
  "skii jacket.svg": "outfitSupp0",
  "Hacker sweater.svg": "outfitSupp1",
  "peace t-shirt.svg": "outfitSupp1",
  "Chef Apron.svg": "outfitSupp2",
  "Farmer clothes.svg": "outfitSupp3",
  "Artist apron.svg": "outfitSupp2",
  "love dress.svg": "outfitSupp4",
}

const accessorySuppClasses = {
  "": "emptyImg",
  "Skii .svg": "accessorySupp5",
  "Artist hat.svg": "accessorySupp0",
  "winter hat.svg": "accessorySupp1",
  "skii handle.svg": "accessorySupp6",
  "chef hat.svg": "accessorySupp3",
  "Sensei hat.svg": "accessorySupp2",
  "peace sprout.svg": "accessorySupp7",
  "Asset 6.svg": "accessorySupp8",
  "Love balloon.svg": "accessorySupp9",
  "sensei shoes.svg": "accessorySupp19",
  "chef spoon.svg": "accessorySupp12",
  "Farmer Carrot.svg": "accessorySupp20",
  "Farmer shovel.svg": "accessorySupp11",
  "farmer hat.svg": "accessorySupp2",
  "left glove.svg": "accessorySupp4",
  "Hacker computer.svg": "accessorySupp10",
  "Hacker sunglasses.svg": "accessorySupp14",
  "Love headband.svg": "accessorySupp16",
  "Artist brush.svg": "accessorySupp13",
  "Artist paint .svg": "accessorySupp10",
  "ukrain flag.svg": "accessorySupp17",
  "winter scarf.svg": "accessorySupp18",
  "right glove.svg": "accessorySupp8",
  "skii earmuff.svg": "accessorySupp15"
}

// Checks if the source of the current image, is empty
function emptySource(type) {
  return ("https://Penguin-avatar-maker.prudent.repl.co/" + type + "/").toUpperCase();
}

// Changes image source given the type & index
function changeItem(spot, type) {
  var image = document.querySelector("#" + type)
  if (type == "outfits") {
    image.style.opacity = "70%"
    const newSrc = outfits[spot]
    image.src = "Images/outfits/" + newSrc
    image.classList = "outfitBase";
    image.classList.add(outfitSuppClasses[newSrc])
  }
  if (type == "accessories") {
    image.style.opacity = "70%"
    const newSrc = accessories[spot]
    image.src = "Images/accessories/" + newSrc;
    image.classList = "accessoryBase";
    image.classList.add(accessorySuppClasses[newSrc]);
  }
  if (type == "headwear") {
    image.style.opacity = "70%"
    const newSrc = headwear[spot]
    image.src = "Images/headwear/" + newSrc;
    image.classList = "headwearBase";
    image.classList.add(headwearSuppClasses[newSrc]);
  }
  if (spot == 0) {
    image.classList = "";
    image.classList.add('emptyImg');
  } else {
    if (image.classList.contains('emptyImg')) {
      image.classList.remove('emptyImg');
    }
  }
}

// 
function updateSpot(spot, array, incr) {
  if (incr) {
    if (spot == (array.length - 1)) {
      return 0;
    } else {
      return spot + 1
    }
  } else {
    if (spot == 0) {
      return (array.length - 1)
    } else {
      return spot - 1
    }
  }
}

// Checks if the current class has an empty class listing
function empty(type) {
  return document.querySelector("#" + type).classList.contains("emptyImg") || document.querySelector("#" + type).classList.length == 0;
}

// Creates a copy of the given image element
function saveImg(imgSrc, prevClassList) {
  const newEl = document.createElement('img')
  newEl.src = imgSrc
  newEl.classList = prevClassList
  newEl.classList.add("temporary")
  trackr++
  const identifier = trackr.toString()
  newEl.classList.add("img" + identifier)
    document.body.querySelector("#exporting").appendChild(newEl)
}

// Creates an edit button for the new saved image
function createEditButton(imgSrc) {
  const editContainer = document.createElement('div')
  editContainer.classList.add('editContainer')
  const imgTag = document.createElement('img')
  imgTag.src = imgSrc
  imgTag.classList.add('imgTag')
  editContainer.appendChild(imgTag)
  const delBtn = document.createElement('button')
  delBtn.innerText = "Remove"
  delBtn.classList.add('delBtn')
  const delIdentifier = 'btn' + trackr.toString()
  delBtn.classList.add(delIdentifier)
  editContainer.appendChild(delBtn)
  document.querySelector('.temp').appendChild(editContainer)
}

// Deletes the image
function delImg(id) {
  const idClass = '.img' + id.substring(3)
  document.querySelector(idClass).remove()
  const pressedBtn = document.querySelector('.' + id)
  const lilImg = pressedBtn.previousElementSibling
  const parent = pressedBtn.parentElement
  pressedBtn.remove()
  lilImg.remove()
  parent.remove()
}

// Checks if the image has not already been saved by the user
function notDupe(type) {
  const existingEls = document.querySelectorAll('.temporary')
  for (i = 0; i < existingEls.length; i++) {
    if (existingEls[i].src == document.querySelector("#" + type).src) {
      return false
    }
  }
  return true
}

// If the conditions are met, this function will save the current images that the user currently has.
function save() {
  if (!empty("headwear") && notDupe("headwear")) {
    let prevClassList = document.querySelector("#headwear").classList
    let imgSrc = document.querySelector("#headwear").src
    saveImg(imgSrc, prevClassList)
    createEditButton(imgSrc)
  }
  if (!empty("accessories") && notDupe("accessories")) {
    let prevClassList = document.querySelector("#accessories").classList
    let imgSrc = document.querySelector("#accessories").src
    saveImg(imgSrc, prevClassList)
    createEditButton(imgSrc)
  }
  if (!empty("outfits") && notDupe("outfits")) {
    let prevClassList = document.querySelector("#outfits").classList
    let imgSrc = document.querySelector("#outfits").src
    saveImg(imgSrc, prevClassList)
    createEditButton(imgSrc)
  }
}

let headwearSpot = 0;
let outfitSpot = 0;
let accessorySpot = 0;

let trackr = 0

document.addEventListener('click', function(event) {
  if (event.target.matches('.topButtonBack')) {
    headwearSpot = updateSpot(headwearSpot, headwear, false)
    changeItem(headwearSpot, "headwear")
  }
  if (event.target.matches('.midButtonBack')) {
    outfitSpot = updateSpot(outfitSpot, outfits, false)
    changeItem(outfitSpot, "outfits")
  }
  if (event.target.matches('.lowButtonBack')) {
    accessorySpot = updateSpot(accessorySpot, accessories, false)
    changeItem(accessorySpot, "accessories")
  }
  if (event.target.matches('.topButtonForward')) {
    headwearSpot = updateSpot(headwearSpot, headwear, true)
    changeItem(headwearSpot, "headwear")
  }
  if (event.target.matches('.midButtonForward')) {
    outfitSpot = updateSpot(outfitSpot, outfits, true)
    changeItem(outfitSpot, "outfits")
  }
  if (event.target.matches('.lowButtonForward')) {
    accessorySpot = updateSpot(accessorySpot, accessories, true)
    changeItem(accessorySpot, "accessories")
  }
  if (event.target.matches('.saveBtn')) {
    save()
  }
  if (event.target.matches('.downloadBtn')) {
    console.log("download")

    domtoimage.toBlob(document.getElementById('exporting'))
      .then(function(blob) {
        window.saveAs(blob, 'avatar.png');
      });

  }
  if (event.target.matches('.delBtn')) {
    delImg(event.target.classList[1])
  }
}, false);