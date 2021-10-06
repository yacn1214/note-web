//variable
const noteList = document.querySelector('#note-list')
if (document.body.offsetWidth<=240){
	document.getElementById('div').remove()
	document.getElementById('row').remove()
	console.log('rbgufioe')
}if (document.body.offsetWidth>=240 && document.body.offsetWidth<=500 ){

}

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
	let ok = (document.querySelector('#note').value) == '' ?   note = ' کادرت خالیه که':note=document.querySelector('#note').value
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
	noteList.appendChild(li)
}

// function addLocalStorage(){
// const notes = getlocal()
// }
// function getlocal() {
// 	let notes;
// 	let getfromLS=localStorage.getItem('notes')
// 	if(getfromLS===null){
// 		notes=[]
// 	}else{
// 		notes = JSON.parse(getfromLS)
// 	}
// 	return notes
// }

function deall() {
	Array.prototype.slice.call(document.getElementsByTagName('li')).forEach(
		function(item) {
			item.remove();
		});

}
