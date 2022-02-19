function lockedProfile() {
   var profile = document.getElementsByClassName("profile");

   for (let i = 0; i < profile.length; i++) {
        let hiddenFields = document.getElementById(`user${i + 1}HiddenFields`);
        let inputLocked = profile[i].querySelectorAll(`input[name="user${i + 1}Locked"]`)[0];
        let btn = profile[i].querySelector('button');

        btn.addEventListener('click', () => {
            if (inputLocked.checked) 
                return;
            if (window.getComputedStyle(hiddenFields).display === 'none') {
                btn.textContent = 'Show less';
                hiddenFields.style.display = 'block';
            } else {
                btn.textContent = 'Show more';
                hiddenFields.style.display = 'none';
            }
        })
    }
}