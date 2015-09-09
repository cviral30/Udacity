var formattedName = HTMLheaderName.replace("%data%", "Viral Chonkar");
$("#header").append(formattedName);

var formattedBio = HTMLheaderRole.replace("%data%", "Developer");
$("#header").append(formattedBio);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/viral.jpg")
$("#header").append(formattedBioPic);

$("#header").append(HTMLskillsStart);
var skills = ["Awesomeness", " Positive attitude", " Good team player"];

var formattedSkils = HTMLskills.replace("%data%", skills)
$("#header").append(formattedSkils);

var bio = 
{
	"Name" : "Viral Chonkar",
	"Role" : "Developer",
	"Contacts" : 
	{
		"Mobile" : "91+9869809167",
		"Mail" : "cviral30@gmail.com",
		"GitHub" : "cviral30",
		"Location" : "Gokul Residency, Mumbai"
	} 
	
}
	
var formattedMobile = HTMLmobile.replace("%data%", bio.Contacts.Mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.Contacts.Mail);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.Contacts.GitHub);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.Contacts.Location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);





var education = 
{
	"Schools" :[
	{
		"Name" : "SVPVV",
		"Location" : "Sardar Vallabhbhai Patel Vidyalaya, Kandivali West,Mumbai",
		"Degree" : "SSC",
		"Year" : "2009"
	},
	{
		"Name" : "SVPVV",
		"Location" : "Sardar Vallabhbhai Patel Vidyalaya, Kandivali West, Mumbai",
		"Degree" : "HSC",
		"Year" : "2011"
	},
	{
		"Name" : "SAKEC",
		"Location" : "Shah And Anchor Kutchhi Engineering College, Chembur, Mumbai",
		"Degree" : "BE[I.T.]",
		"Year" : "2015"
	}
	]
}

for (school in education.Schools)
{
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.Schools[school].Name);
	$(".education-entry:last").append(formattedSchoolName);

	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[school].Degree);
	$(".education-entry:last").append(formattedSchoolDegree);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.Schools[school].Location);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolYear = HTMLschoolDates.replace("%data%", education.Schools[school].Year);
	$(".education-entry:last").append(formattedSchoolYear);
}

var work = 
{
	"Jobs" :[
	{
		"Employer" : "AJACKUS",
		"Title" : "Web Developer",
		"Year" : "11/08/2015 - Till Today",
		"Location" : "Prathamesh Residency, New Dadabhai Rd, Gilbert Hill, Andheri West, Mumbai, Maharashtra 400058",
		"Description" : "We work for not just our development but we work for company's development. Toghether we code and toghether we enjoy. We work as a team and that's our greatest power."
	},
	]
}

for (job in work.Jobs)
{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.Jobs[job].Employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.Jobs[job].Title);
	var formattedYear = HTMLworkDates.replace("%data%", work.Jobs[job].Year);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.Jobs[job].Description);

	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedYear + formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);

}

var projects = 
{
	"Projects" : [
	{
		"Title" : "Intro to HTML and CSS with ud304",
		"Dates" : "21/08/2015",
		"Description" : "Introduction to HTML and CSS course by Udacity. Which contains an assignment of HTML page with CSS using bootstrap.",
		"Images" : ["http://placehold.it/100x100/e33"]
	},
	{
		"Title" : "Git and GitHub",
		"Dates" : "30/08/2015",
		"Description" : "Git and GitHub in which we come to know how to use Git and GitHub. Git is a version-control. GitHub is a application of Git.",
		"Images" : ["http://placehold.it/100x100/000"]
	}
	]
}


for (project in projects.Projects)
{
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.Projects[project].Title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.Projects[project].Dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.Projects[project].Description);
	$(".project-entry:last").append(formattedProjectDescription);

	if (projects.Projects[project].Images.length > 0)
	{
		for (image in projects.Projects[project].Images)
		{
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.Projects[project].Images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}		
	}	
}

$("#mapDiv").append(googleMap);
