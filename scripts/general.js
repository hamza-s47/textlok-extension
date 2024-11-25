function formToggle(show, hide) {
    let showForm = document.getElementById(show);
    let hideForm = document.getElementById(hide);

    if (showForm && hideForm) {
        hideForm.classList.add('hidden');
        showForm.classList.remove('hidden');
    } else {
        console.error('Elements not found:', show, hide);
    }
}
