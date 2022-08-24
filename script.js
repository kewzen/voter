

const titleedit = () =>{
    var cinp = document.getElementById("close-edit")
    var inp = document.getElementById("tited")
    console.log(inp.style.display)
    if (inp.style.display == 'none' ){
        cinp.style.display = 'block'
        inp.style.display = 'block'
    }

    
   
}

const closeedit = () => {
    var cinp = document.getElementById("close-edit")
var inp = document.getElementById("tited")
var title = document.getElementById("title-vote")
console.log(title.textContent)
title.textContent = inp.value
cinp.style.display = 'none'
inp.style.display = 'none'
}

const editfirst = () =>{
 var elem = document.getElementById("first-variant")
 var elem2 = document.getElementById("close-second")
 elem.style.display = 'block'
 elem2.style.display = 'block'
}

const editsecond = () =>{
    var elem = document.getElementById("second-variant")
    var elem2 = document.getElementById("close-first")
    elem.style.display = 'block'
    elem2.style.display = 'block'
}

const closefirst = () =>{
    var elem = document.getElementById("close-first")
    var elem2 = document.getElementById("second-variant")
    var elem3 = document.getElementById("second-v")
    elem3.textContent = elem2.value
    elem.style.display = 'none'
    elem2.style.display = 'none'

}

const closesecond = () =>{
    var elem = document.getElementById("close-second")
    var elem2 = document.getElementById("first-variant")
    var elem3 = document.getElementById("first-v")
    elem3.textContent = elem2.value
    elem.style.display = 'none'
    elem2.style.display = 'none'
    
}

const addfirst = () =>{
 var elem = document.getElementById("first-result")
 var elem2 = document.getElementById("votes-first")
 
 

 elem.value++
 elem2.textContent = elem.value
}

const addsecond = () =>{
    var elem = document.getElementById("second-result")
    var elem2 = document.getElementById("votes-second")
    
   
    elem.value++
    elem2.textContent = elem.value
}