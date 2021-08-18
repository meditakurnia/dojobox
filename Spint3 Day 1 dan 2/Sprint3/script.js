//dom selection
//getElementByID() => node

const nodeH1 = document.getElementById('judul');
nodeH1.style.color='white'
nodeH1.style.background='brown'
nodeH1.style.fontFamily='Calibri'

//getElementsByTagName => HTML Collection

const paragraph = document.getElementsByTagName('p')
for(let i=0; i<= (paragraph.length)-1 ; i++){
    paragraph[i].style.background = 'yellow'
}

// paragraph[0].style.background = 'orange'
// paragraph[1].style.background = 'orange'
// paragraph[2].style.background = 'orange'
// paragraph[3].style.background = 'orange'

//document query selector

const p4 = document.querySelector('#b p')
p4.style.fontFamily='calibri'
//root document
const p = document.querySelector('p')
//rubah root
const sectionB = document.getElementById('b')
//root section 8
//const p = sectionB.querySelector('p')

const Pp = document.querySelector('p')

// Pp[2].innerHTML = 'Ini rubah javascript'

// Pp[2].innerHTML = 'Ini rubah dari javascript'

const p2 = document.getElementsByClassName('p2')
p2[0].style.background='orange'