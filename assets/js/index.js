const toggler = document.querySelector(".nav__toggler");
const navList = document.querySelector(".nav");

toggler.addEventListener("click", (e) => {
    console.log("clicked");
    navList.classList.toggle("nav__expanded");
});

// export default index.js;