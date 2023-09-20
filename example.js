const ol = document.querySelector('ol')
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")


const heading = document.querySelector("h2")
const phrase = heading.textContent


ol.append(li1)
ol.append(li2)
ol.append(li3)
ol.append(li4)
ol.append(li5)


li1.textContent = phrase.toUpperCase()
li2.textContent = phrase.replace('fox' , 'parrot')
li2.textContent = phrase.replace('dog' , 'eagle')
// li2.textcontent = text.toUpperCase(`the quick brown crow jumps over the lazy eagle`)
li3.textContent = phrase.slice(0, phrase.indexOf('jumps'))
li3.textContent = phrase.slice(phrase.indexOf('x')+2)
