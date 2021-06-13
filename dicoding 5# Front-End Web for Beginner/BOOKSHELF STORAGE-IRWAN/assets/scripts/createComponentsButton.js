function createButton(buttonTypeClass, eventListener) {
	const button = document.createElement('button');
	button.classList.add(buttonTypeClass);

	button.addEventListener('click', function(event) {
		eventListener(event);
	});

	return button;
}

function createCheckButton() {
	return createButton('check-button', function(event) {
		addTaskBookToFinished(event.target.parentElement);
	});
}

function createEditButton() {
	return createButton('edit-button', function(event) {
		addTaskBookToFinished(event.target.parentElement);
	});
}

function createTrashButton() {
	return createButton('trash-button', function(event) {
		messageActionButton(event);
	});
}

function createUndoButton() {
	return createButton('undo-button', function(event) {
		undoTaskBookFromFinished(event.target.parentElement);
	});
}

function messageActionButton(event) {
		const modalMessageAction = document.getElementById('modalMessageAction');
	    modalMessageAction.style.display = 'block';	

		const btnDelete = document.getElementById('btnDelete');
		const btnCancel = document.getElementById('btnCancel');

		btnDelete.addEventListener('click', function() {
			removeTaskBookFromFinished(event.target.parentElement);
		    modalMessageAction.style.display = 'none';	
		});

		btnCancel.addEventListener('click', function() {
		    modalMessageAction.style.display = 'none';	
		});

		return btnDelete;
}
