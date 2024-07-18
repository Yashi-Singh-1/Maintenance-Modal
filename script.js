document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById('maintenanceModal');
    var btn = document.getElementById('openMaintenanceModal');
    var closeBtn = document.querySelector('.close');

    // Ensure modal is hidden initially
    modal.style.display = 'none';

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = 'flex';
    }

    // When the user clicks on the button (close), close the modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
