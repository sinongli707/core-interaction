var draggableItems = Array.from(document.querySelectorAll('.draggable'))

draggableItems.forEach( function(item) {
	item.addEventListener('mousedown', function () {
		item.classList.add('is-active')
	})

	window.addEventListener('mousemove', function (event) {
		if (item.classList.contains('is-active')) {
			console.log(event.pageX, event.pageY)
			item.style.top = event.pageY + 'px'
			item.style.left = event.pageX + 'px'
			console.log(item.style)
		}
	})
})


window.addEventListener('mouseup', function () {
	draggableItems.forEach( function(item) {
		item.classList.remove('is-active')
	})
})
