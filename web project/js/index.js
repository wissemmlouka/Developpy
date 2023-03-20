document.getElementById("fa-bars").addEventListener("click", () => {
  if (document.getElementById("fa-bars").className == "fas fa-bars") {
    document.getElementById("fa-bars").classList.add("fa-times");
    document.getElementById("nav").classList.add("nav-toggle");
  } else {
    document.getElementById("fa-bars").className = "fas fa-bars";
    document.getElementById("nav").className = "navbar";
  }
});

window.addEventListener("scroll", () => {
  document.getElementById("fa-bars").className = "fas fa-bars";
  document.getElementById("nav").className = "navbar";
  if (window.scrollY > 30) {
    document.getElementById("header").className = "header-active";
  } else {
    document.getElementById("header").className = "header";
  }

  var sections = document.querySelectorAll("section");
  var sectionsArray = [...sections];

  sectionsArray.forEach((element) => {
    var id = element.id;
    var heigth = element.scrollHeight;
    var offset = element.offsetTop - 200;
    var top = window.scrollY;

    if (top >= offset && top < offset + heigth) {
      var links = document.querySelectorAll(".navbar li a");
      var linkssArray = [...links];
      linkssArray.forEach((element) => {
        if (element) element.classList.remove("active");
      });
      var activeLink = document.querySelector(".navbar li #" + id + "Link");
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

function setPageToLocalStorage(page) {
  localStorage.setItem("page", page);
}

/* 
$('section').each(function(){
    var id=$(this).attr('id');
    var heigth=$(this).heigth();
    var offset=$(this).offset().top - 200;
    var top =$(window).scrollTop();
    if(top>= offset && top < offset + heigth ){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#'+id+'"]').addClass('active');

    }
}) */
