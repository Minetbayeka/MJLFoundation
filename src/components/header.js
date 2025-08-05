window.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector('.header');

const headerContent = `
     <header class="header">
    <!-- navbar -->
    <nav class="navbar">
      <div class="logo"><img src="../../assets/images/logo.png"> MJL Foundation</div>
          <button class="menu-toggle" aria-label="Toggle menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      <ul class="nav-links">
      <div class="nav-center-links">
       <li><a href="../home/home.html">Home</a></li>
        <li><a href="../about/About.html">About</a></li>
        <li><a href="../projects/Project.html">Projects</a></li>
        <li><a href="../blog/Blog.html">Blog</a></li>
        <li><a href="../get-involved/GetInvolved.html">Get Involved</a></li>
        <li><a href="../contact/Contact.html">Contact</a></li>
        </div>
        <li><a href="../donations/Donation.html" class="donate-btn"><i class="fas fa-heart"></i>  Donate</a></li>
      </ul>
      
      
    </nav>

</header>
`
header.innerHTML = headerContent;
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');


  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');

  });

});

