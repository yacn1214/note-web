
	
//variable
const noteList = document.querySelector('#note-list')
// if (document.body.offsetWidth<=240){
// 	document.getElementById('div').remove()
// 	document.getElementById('row').remove()
// 	console.log('rbgufioe')
// }if (document.body.offsetWidth>=240 && document.body.offsetWidth<=500 ){

// }
var io = [];
//eventlisteners
eventlisteners()
function eventlisteners() {
	document.querySelector('#form').addEventListener('submit',newNote)
	function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
}
    	


for (var i = values.length -1 ; i >= 0; i--) {
	// create remove element
	const removebtn = document.createElement('a')
	removebtn.textContent="X"
	removebtn.classList='remove-note'
const li =document.createElement('li')
li.appendChild(document.createTextNode(values[i]))

	li.appendChild(removebtn)
	noteList.appendChild(li)
	removebtn.onclick= function() {
		li.remove()
		localStorage.removeItem(li.textContent.replace('X',''))
	}
}

    return values;
}
io.push(allStorage())

}
//functions
function newNote(e) {
	e.preventDefault()
	// access to the value
	var note = null
	let ok = (document.querySelector('#note').value) == '' ?   note = ' کادرت خالیه که':note=document.querySelector('#note').value
	localStorage.setItem(note,note)
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
		localStorage.removeItem(note)
	}
	noteList.appendChild(li)
}


    function deall() {
	Array.prototype.slice.call(document.getElementsByTagName('li')).forEach(
		function(item) {
			item.remove();

			
		
})
localStorage.clear()
}
			



