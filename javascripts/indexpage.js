var homepage = document.getElementById("header");
var aboutpage = document.getElementById("about");
var projectpage = document.getElementById("projects");
var contactpage = document.getElementById("contact");

function showhome() {
	homepage.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
function showabout() {
	aboutpage.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
function showprojects() {
	projectpage.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
function showcontact() {
	contactpage.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
