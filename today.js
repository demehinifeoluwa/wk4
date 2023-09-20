const myName =document.querySelector('ul :first-child')
myName.innerText += ' ife'

const details  = document.querySelectorAll('li')
details[1].innerText += '14'
details[2].innerText += 'Curent Affairs'

const president = document.getElementsByTagName('li')
president[3].textContent += ' Tinubu'
president[4].innerHTML += 'Seyi <strong>Makinde</strong>'

const champion = document.getElementById('soccer')
champion.innerHTML += ' Argentina'

// alert(champion.innerHTML)

const tennis = document.getElementsByClassName('tennis')
tennis[0].innerText += ' Novak Djukovic'
tennis[1].innerText += ' Coco Golf'


//virtual DOM
const sect = document.createElement('section')
const para1 = document.createElement('p')
const para2 = document.createElement('p')

const body = document.querySelector('body')
body.append(sect)
sect.append(para1)
sect.append(para2)

para1.innerHTML = `My name is ${myName.innerText.slice(myName.innerText.indexOf(': ')+1)} and I am ${details[1].innerText.slice(details[1].innerText.indexOf(': ')+1)} years old. <br/>
i love <em>${details[2].innerText.slice(details[2].innerText.indexOf(':')+1)}.<em>`

para2.textContent = para1.innerText.toLowerCase() //takes everything in para1 and puts in lowercase

const text = para1.textContent

para2.textContent = text.toUpperCase()

para2.textContent = `The text has ${text.length} characters.`

para2.textContent = text.replace('ife', 'Demehin')

para2.textContent = text.replaceAll('a','e')

para2.textContent = text.indexOf('am',28)

para2.textContent = text.lastIndexOf('am', 20)

para2.textContent = text.slice(20)

para2.textContent = text.slice(text.indexOf('i love'))

para2.textContent = text.split('20')

para2.textContent = text.charAt()

para2.textContent = `bright`.concat('ade', 'jare', 'richard')


para2.textContent = text.includes('ife')
para2.textContent = text.includes