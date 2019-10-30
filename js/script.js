var write_us=document.querySelector(".write");
var popup=document.querySelector(".write-us");
var close=document.querySelector(".button-close");
var input_name=popup.querySelector("[name=name]");
var input_email=popup.querySelector("[name=email]");
var form = popup.querySelector(".popup-form");
var isStorageSupport = true;
var loginStorage = "";
var emailStorage = "";

try {
  loginStorage = localStorage.getItem("login");
  emailStorage = localStorage.getItem("email");
} catch (error) {
  isStorageSupport = false;
}

write_us.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("write-none");
	popup.classList.add("write-show");
	if(loginStorage) {
		login.value=loginStorage;
	}
	if(emailStorage) {
		email.value=emailStorage;
	}
	login.focus();
});
		
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("write-none");
	popup.classList.remove("write-show");
	popup.classList.remove("write-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();	
		popup.classList.remove("write-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("write-error");		
		popup.classList.remove("write-error");
		popup.offsetWidth=popup.offsetWidth;
		popup.classList.add("write-error");
	} 
	else {
		if(isStorageSupport) {
			localStorage.setItem("login",login.value);
			localStorage.setItem("email",email.value);
			alert("Форма отправлена!");
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode===27){
		if(popup.classList.contains("write-show")) {
			evt.preventDefault();
			popup.classList.add("write-none");
			popup.classList.remove("write-show");
			popup.classList.remove("write-error");
		}
	}
});