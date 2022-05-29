let fnameCont = document.querySelector('.fname__cont');
let lnameCont = document.querySelector('.lname_cont');
let emailCont = document.querySelector('.email__cont');
let passwordCont = document.querySelector('.password__cont');
let claimBtn = document.querySelector('.btn__claim');

claimBtn.addEventListener('click', _ => {
    console.log(fnameCont.childNodes);

    if (!fnameCont.childNodes[8] && fnameCont.childNodes[3].value === '') {
        let element = document.createElement('div');
        element.innerHTML = `<p class="warning">First Name can't be empty</p>`;
        fnameCont.appendChild(element);

        fnameCont.childNodes[3].classList.toggle("red__border");
        fnameCont.childNodes[6].style.display = 'block';
    } else if (fnameCont.childNodes[8] && fnameCont.childNodes[3].value !== '') {
        fnameCont.removeChild(fnameCont.childNodes[8]);

        fnameCont.childNodes[3].classList.toggle("red__border");
        fnameCont.childNodes[6].style.display = 'none';
    }

    if (!lnameCont.childNodes[8] && lnameCont.childNodes[3].value === '') {
        let element = document.createElement('div');
        element.innerHTML = `<p class="warning">Last Name can't be empty</p>`;
        lnameCont.appendChild(element);

        lnameCont.childNodes[3].classList.toggle("red__border");
        lnameCont.childNodes[6].style.display = 'block';
    } else if (lnameCont.childNodes[8] && lnameCont.childNodes[3].value !== '') {
        lnameCont.removeChild(lnameCont.childNodes[8]);

        lnameCont.childNodes[3].classList.toggle("red__border");
        lnameCont.childNodes[6].style.display = 'none';
    }

    if (!emailCont.childNodes[8] && !validateEmail(emailCont.childNodes[3].value)) {
        let element = document.createElement('div');
        element.innerHTML = `<p class="warning">Looks like this is not an email</p>`;
        emailCont.appendChild(element);

        emailCont.childNodes[3].classList.toggle("red__border");
        emailCont.childNodes[3].classList.toggle("red__text");
        emailCont.childNodes[6].style.display = 'block';

    } else if (emailCont.childNodes[8] && validateEmail(emailCont.childNodes[3].value)) {
        emailCont.removeChild(emailCont.childNodes[8]);

        emailCont.childNodes[3].classList.toggle("red__border");
        emailCont.childNodes[3].classList.toggle("red__text");
        emailCont.childNodes[6].style.display = 'none';
    }

    if (!passwordCont.childNodes[8] && passwordCont.childNodes[3].value === '') {
        let element = document.createElement('div');
        element.innerHTML = `<p class="warning">Password can't be empty</p>`;
        passwordCont.appendChild(element);

        passwordCont.childNodes[3].classList.toggle("red__border");
        passwordCont.childNodes[6].style.display = 'block';
    } else if (passwordCont.childNodes[8] && passwordCont.childNodes[3].value !== '') {
        passwordCont.removeChild(passwordCont.childNodes[8]);

        passwordCont.childNodes[3].classList.toggle("red__border");
        passwordCont.childNodes[6].style.display = 'none';
    }

});

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}