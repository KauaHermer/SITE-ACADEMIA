// EFEITO ROLAGEM 
function handleHeaderScroll() {
    let header = document.querySelector('#header');

    if (window.innerWidth < 767) {
        header.classList.remove('rolagem'); // Remove a classe se a tela for menor que 767px
        window.removeEventListener("scroll", toggleHeaderClass); // Remove o event listener
    } else {
        window.addEventListener("scroll", toggleHeaderClass); // Adiciona o event listener se a tela for maior
    }
}

function toggleHeaderClass() {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
}

// Executa a função ao carregar a página e ao redimensionar a tela
handleHeaderScroll();
window.addEventListener('resize', handleHeaderScroll);


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
	
