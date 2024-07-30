// EFEITO ROLAGEM 
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

// FIM EFEITO ROLAGEM


// FIM EFEITO DO PREÇO

function check() {
	var checkBox = document.getElementById("checbox");
	var text1 = document.getElementsByClassName("text1");
	var text2 = document.getElementsByClassName("text2");
  
	for (var i = 0; i < text1.length; i++) {
	  if (checkBox.checked == true) {
		text1[i].style.display = "block";
		text2[i].style.display = "none";

	  } else if (checkBox.checked == false) {
		text1[i].style.display = "none";
		text2[i].style.display = "block";
	  }
	}
  }
  check();

// EFEITO ROLAGEM 

const myObserver = new IntersectionObserver((entries) => {
	entries.forEach ( (entry) => {
		if(entry.isIntersecting) {
			entry.target.classList.add('show')
		}else{
			entry.target.classList.remove('show')
		}
	})
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element)  => myObserver.observe(element)) 
	
