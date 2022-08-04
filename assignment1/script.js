window.onscroll = function () {
  myFunction();
};
const height = window.innerHeight;
function myFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector('nav').classList.add('changeBackground');
  } else {
    document.querySelector('nav').classList.remove('changeBackground');
  }
}

const showbtn = document.querySelector('#toggle-btn');
const closebtn = document.querySelector('#nav-toggle-btn');

const show = () => {
  document.querySelector('nav').className = 'show';
  showbtn.style.display = 'none';
};

const hide = () => {
  document.querySelector('nav').className = 'hide';
  showbtn.style.display = 'unset';
};

function validation() {
  var form = document.getElementById('form');
  var email = document.getElementById('mail').value;
  var error = document.getElementById('error');
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    error.innerHTML = 'Your email is valid.';
    error.style.color = '#00ff00';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    error.innerHTML = 'Please Enter Valid Email address';
    error.style.color = '#ff0000';
  }
  // if(email==""){
  //     form.classList.remove("valid");
  //     form.classList.remove("invalid");
  //     error.innerHTML=''
  //     error.style.color='#00ff00'
  // }
}

//local Storage
localStorage.setItem('rollno', 'UE195081');

const rollno = localStorage.getItem('rollno');
console.log(rollno);

//cookie
document.cookie="Nitun Singh";
document.cookie="2023";
