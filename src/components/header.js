const links = document.querySelectorAll('.navigation a');
const burgerEl = document.querySelector('.menu-burger-link');
const closeEl = document.querySelector('.menu-close-link');
const dropMenuEl = document.querySelector('.dropdown-menu');
const switchEl = document.getElementById('switch-theme');
const authBtn = document.querySelector(".authorization-btn.dropdown");
const closeFirstModalBtn = document.querySelector("[data-modal-close-up]");
const closeSecondModalBtn = document.querySelector("[data-modal-close-in]");
const signUpBtn = document.querySelector(".sign-link.up");
const signInBtn = document.querySelector(".sign-link.in");
const modalUp = document.querySelector("[data-modal-up]");
const modalIn = document.querySelector("[data-modal-in]");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-up-form.in");
const userNameEls = document.querySelectorAll(".user-name");
const logOutBtn = document.querySelector(".logout-button.dropdown");
const authEl = document.querySelector(".dropdown-authorized");
const authHeaderBtn = document.querySelector(".authorization-btn.header");
const autSubmitHeaderBtn = document.querySelector(".user-account-button");
const navMenuEl = document.querySelector(".navigation-menu");
const logOutHeader = document.querySelector(".logout-group");

let savedTheme = localStorage.getItem("ui-theme");
let KEY = 'userData';
let userInfo = {};
let submitInfo = {};
let feedback;

function toggleActivePage (event) {
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleSwitchEl() {
    switchEl.classList.toggle('checked');
    localStorage.setItem("ui-theme", switchEl.classList.contains('checked') ? 'dark' : 'light');
}
  
switchEl.classList.toggle('checked', savedTheme === 'dark');


function initUser () {
    userNameEls.forEach((element) => {
        element.textContent = userInfo.user_name;
    });
}

function setToLocalStorage (userInfo) {
    let userInfoJSON = JSON.stringify(userInfo);
    localStorage.setItem(KEY, userInfoJSON);
}

function collectFormData(event) {
    event.preventDefault();
    document.body.classList.remove('no-scroll');
    setSubmitStatus();

    const inputs = signUpForm.querySelectorAll('.modal-input');
    inputs.forEach((input) => {
        userInfo[input.id] = input.value;
    });
    setToLocalStorage (userInfo);
    signUpForm.reset();
    initUser ();
    authHeaderBtn.classList.add('visually-hidden');
    autSubmitHeaderBtn.classList.remove('visually-hidden');
    

    closeModal();
    toggleDropMenu();
    
    if (window.innerWidth > 768) {
        closeEl.classList.add('visually-hidden');
        navMenuEl.classList.remove('visually-hidden');

    }
    return userInfo;
  }

function toggleModalWindow () {
    modalUp.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
}

function openSecondModal (event) {
    if (event) {
        event.preventDefault();
    }
    modalUp.classList.add('is-hidden');
    modalIn.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
}

function openFirstModal (event) {
    if (event) {
        event.preventDefault();
    }
    modalUp.classList.remove('is-hidden');
    modalIn.classList.add('is-hidden');
    document.body.classList.add('no-scroll');
    
}

function closeModal () {
    modalUp.classList.add('is-hidden');
    modalIn.classList.add('is-hidden');
    signUpForm.reset();
    signInForm.reset();
    document.body.classList.remove('no-scroll');
}

function toggleDropMenu () {
    dropMenuEl.classList.toggle('visually-hidden');
    burgerEl.classList.toggle('visually-hidden');
    closeEl.classList.toggle('visually-hidden');
    if (dropMenuEl.classList.contains('visually-hidden')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    };

    
}

function setSubmitStatus () {
    sessionStorage.setItem('statusSubmitted', 'true');
}

function checkUserData (event) {
    event.preventDefault();
    const inputs = signInForm.querySelectorAll('.modal-input');
  
    inputs.forEach((input) => {
        submitInfo[input.id] = input.value.trim();
    });
    try {
        const data = localStorage.getItem(KEY);
        if (!data) return;
        feedback = JSON.parse(data);
    } catch (error) {
        console.error(error.message);
      }
     
    if (submitInfo.user_name === feedback.user_name && submitInfo.user_password === feedback.user_password) {
        // isSignUpFormSubmitted = true;
        userInfo.user_name = submitInfo.user_name;
        if (window.innerWidth > 768) {
        authHeaderBtn.classList.toggle('visually-hidden');
        autSubmitHeaderBtn.classList.toggle('visually-hidden');
        navMenuEl.classList.remove('visually-hidden');
        }
        closeModal();
        initUser ();
        setSubmitStatus();
    }
}

function openMenu (event) {
    event.preventDefault();
    let status = '';
    try {
        const data = localStorage.getItem(KEY);
        feedback = JSON.parse(data);
        status = sessionStorage.getItem('statusSubmitted');
        if (status === 'true') {

            authBtn.classList.add('visually-hidden');
            authEl.classList.toggle('visually-hidden');
            userInfo.user_name = feedback.user_name;
            initUser();
            toggleDropMenu();

        } else {
            const data = localStorage.getItem(KEY);
            if (!data) {
                toggleDropMenu();
            } else {
                openSecondModal();
            } 
        }
    } catch {
        console.error(error.message);
    }
}

function openMenuTablet (event) {
    event.preventDefault();
    let status = '';
    try {
        const data = localStorage.getItem(KEY);
        feedback = JSON.parse(data);
        status = sessionStorage.getItem('statusSubmitted');
        if (status === 'true') {
            userInfo.user_name = feedback.user_name;
            initUser();
            navMenuEl.classList.remove('visually-hidden');
            authHeaderBtn.classList.add('visually-hidden');
            autSubmitHeaderBtn.classList.remove('visually-hidden');
            
        } else {
            sessionStorage.removeItem('classChanges');
            const data = localStorage.getItem(KEY);
            if (!data) {
                openFirstModal();
            } else {
                openSecondModal();
            } 
        }
    } catch {
        console.error(error.message);
    }
}

function checkAuth () {
    let status = '';
    try {
        const data = localStorage.getItem(KEY);
        feedback = JSON.parse(data);
        status = sessionStorage.getItem('statusSubmitted');
        if (status === 'true') {
            userInfo.user_name = feedback.user_name;
            initUser();
            authHeaderBtn.classList.add('visually-hidden');
            autSubmitHeaderBtn.classList.remove('visually-hidden');
            
        } 
    } catch {
        console.error(error.message);
    }
}

function makeLogOut () {
    
    // localStorage.clear();
    sessionStorage.clear();
    userInfo = {};
    submitInfo = {};
    if (window.innerWidth < 768) {
        toggleDropMenu();  
    }
    
    authBtn.classList.toggle('visually-hidden');
    authEl.classList.toggle('visually-hidden');
    closeEl.classList.add('visually-hidden');
    logOutHeader.classList.add('visually-hidden');
    authHeaderBtn.classList.toggle('visually-hidden');
}

function askLogout (event) {
    autSubmitHeaderBtn.classList.add('visually-hidden');
    logOutHeader.classList.remove('visually-hidden');
}

function saveClassChanges() {
    const elements = document.querySelectorAll('.save');
    const classList = Array.from(elements).map((element) => element.classList.value);
    sessionStorage.setItem('classChanges', JSON.stringify(classList));
}
  
function restoreClassChanges() {
    
    const data = localStorage.getItem('userData');
    const usersName = JSON.parse(data);
    if (usersName) {
        userInfo.user_name = usersName.user_name;
        initUser ();
      
    }

    const savedChanges = sessionStorage.getItem('classChanges');
    if (savedChanges) {
      const classList = JSON.parse(savedChanges);
      const elements = document.querySelectorAll('.save');
      elements.forEach((element, index) => {
        element.classList.value = classList[index];
      });
    }
}

function doingLogOut (event) {
    if (event.target.closest('.logout-button.header') || event.target.matches('.asking-logout.light')) {
        logOutHeader.classList.add('visually-hidden');
        autSubmitHeaderBtn.classList.remove('visually-hidden');
        authHeaderBtn.classList.add('visually-hidden');
    } else {
        makeLogOut();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    toggleActivePage();
    restoreClassChanges();
});
authBtn.addEventListener('click', openFirstModal);
// authEl.addEventListener('click', openFirstModal);
burgerEl.addEventListener('click', openMenu);
switchEl.addEventListener('change', toggleSwitchEl);
signUpBtn.addEventListener('click', openSecondModal);
signInBtn.addEventListener('click', openFirstModal);
closeFirstModalBtn.addEventListener('click', closeModal);
closeSecondModalBtn.addEventListener('click', closeModal);
signUpForm.addEventListener('submit', collectFormData);
signInForm.addEventListener('submit', checkUserData);
logOutBtn.addEventListener('click', makeLogOut);
authHeaderBtn.addEventListener('click', openMenuTablet);
autSubmitHeaderBtn.addEventListener('click', askLogout);
logOutHeader.addEventListener('click', doingLogOut);

window.addEventListener('beforeunload', saveClassChanges);
