//variable
const noteList = document.querySelector('#note-list')

//eventlisteners
eventlisteners()
function eventlisteners() {
	document.querySelector('#form').addEventListener('submit',newNote)
}
//functions
function newNote(e) {
	e.preventDefault()
	// access to the value
	var note = null
	let ok = (document.querySelector('#note').value) == '' ?   note = 'داپش کادرت خالیه که':note=document.querySelector('#note').value
	document.querySelector('#note').value= ''
	// create remove element
	const removebtn = document.createElement('a')
	removebtn.textContent="X"
	removebtn.classList='remove-note'
	
	// Create tag <li> 
	const li =document.createElement('li')
	li.appendChild(document.createTextNode(note))
	
	//adding remove button to the li
	li.appendChild(removebtn)
	removebtn.onclick= function() {
		li.remove()
	}
	//adding li to the note-list
	noteList.appendChild(li)
	addLocalStorage()
}
let go = document.getElementById('del')
go.onclick=function() {
	noteList.remove()
}

function addLocalStorage(){

}