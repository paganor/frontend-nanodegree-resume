// header name and role
var name = "Berto Pagano";
var role = "str8 baller";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
// append to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Berto",
	"role" : "boss of all bosses",
	"contactInfo" : {
		"mobile" : "555-555-5555",
		"email" : "hoodrat@gmail.com"
	},
	"pictureUrl" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGt5feUlzTkkNAPJU5uEk9wQ6trpDVv-T_iE3JfvmxK9av7ynz4Q",
	"welcomeMessage" : "You think this is a motherfucking game?",
	"skills" : ["spit hot fire", "big black man", "spit hot fire"]
};

var work = {
	"jobs" : [
		{
			"position" : "Consultant",
			"employer" : "nonya",
			"years" : 3,
			"city" : "Denver",
			"dates" : "2009 - Present",
			"description" : "Whooo!!! Someone hired me again."
		},
		{
			"position" : "Something Else",
			"employer" : "booyah",
			"years" : 2,
			"city" : "San Fransisco",
			"dates" : "2002 - 2009",
			"description" : "Things happened, I don't wanna talk about it."
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "CU - Boulder",
			"city" : "Boulder, CO",
			"major" : "Business",
			"graduationYear" : 2012
		},
		{
			"name" : "Fake",
			"city" : "Fake, CO",
			"major" : "Fake",
			"graduationYear" : 2012
		}
	]
};

var projects = {
	"projects" : [
		{
			"name" : "Shuttle Bake-Off",
			"year" : 2012,
			"description" : "Shuttle Bake-Off description",
			"image" : "http://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
		},
		{
			"name" : "ESB Inventory",
			"year" : 2013,
			"description" : "ESB Inventory Description",
			"image" : "http://2.bp.blogspot.com/_8WG9e0s-9C8/TVFxnyOe89I/AAAAAAAAAg8/JuOC8XorUzE/s1600/linux-logo.jpg"
		}
	]
};

projects.display = function() {
	
	for (var project in projects.projects) {
		// append to projects
		$("#projects").append(HTMLprojectStart);

		var formattedName = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].year);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		
		$(".project-entry:last").append(formattedName + formattedDate + formattedDesc + formattedImage);
	}
}

projects.display();
// format header information
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));
$("#header").append(HTMLbioPic.replace("%data%", bio.pictureUrl));
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

// format jobs
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(employer+title+dates+description);
	}
}

displayWork();


if (bio.skills.length) {
	// append to header
	$("#header").append(HTMLskillsStart);
	// append skills
	for (skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
}

// internationalize
$("#main").append(internationalizeButton);

function inName(fullName) {
	var names = fullName.split(" ");
	return names[0].substr(0,1).toUpperCase() + names[0].substr(1).toLowerCase() + " " + names[1].toUpperCase();
}

$("#mapDiv").append(googleMap);
initializeMap();
/*
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

// log clicks
function logClicks(x, y) {
	console.log("x = " + x + ", y = " + y);
}
*/
