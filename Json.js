var data = {
    "Career Objective":"Looking forward to an opportunity to be active in a dynamic challenging environment where I can utilize my skills to develop my career and growth of the organization",
    
    "Work Experience":[
        {
        "Job title": "Associate Scientist - TN-Water Security and Climate Adaptation Project",
        "Company": "M.S Swaminathan Research Foundation",
        "Location": "Chennai",
        "Start_date": "Sept 2020",
        "End_date": "Present",  
        "Responsibilities":[
            "Understanding the framework for the approach to achieve the objective of the project",
            "Understanding the composite water resource management framework to arrive water budget and water action plan in GP level",
            "Analysed water action plan for more than 200+ GP's",
            "Analysed the spatial and non spatial data for report purpose",
            "Updated the existing framework by adding the advanced method for surface runoff and ground water assessment"
        ]
    },
    {    
        "Job title": "Assistant professor",
        "Company": "Sri Manakula Vinayagar Engineering College",
        "Location": "Puducherry",
        "Start_date": "Aug 2017",
        "End_date": "Aug 2020",  
        "Responsibilities": [ 
            "Class Co-ordinator role",
            "Created materials and exercises for improving the student progress",
            "Taught various subjects like Engineering Mechanics, Mechanics of solids, Mechanics of fluids, Hydrology and Various laboratory",
            "Reviewed the students assignment,Conduct periodical assessment, evaluated their result and suggested some improvement points to students"
        ]
    }
    ],

    "Area of Interest": [
        "Web development",
        "Surface and ground water harvesting structures plan",
        "Project Monitoring",
        "Blogging on Water Conservation Methods"
         ],
   
    "Education": [
        {
            "Degree": "B.E Civil Engineering",
            "Institution": "IFET College of Engineering",
            "University": "Anna University",
            "Project": "Ground water analysis in and around solid water dumping site at cuddalore district",
            "Grade" : "8.23 CGPA (First grade)"
        },

        {
            "Degree": "M.E Irrigation Water Management",
            "Institution":"College of Engineering guindy, Chennai",
            "University":"Anna University - CEG Campus",
            "Project":"Evaluating the water productivity of an irrigation system in varahanadhi river sub basin",
            "Grade":"9.23 CGPA (First grade with distinction)"
        }
    ],
    
    "Skills": ["AutoCAD","Google Earth", "ArcGIS software", "STRUDS", "MS office"],
   
    "Blogs": [
        "https://www.mssrf.org/small-blog/from-water-scarcity-to-sufficiency/",
        "https://www.mssrf.org/small-blog/ensuring-drinking-water-for-coastal-communities/"
    ],
    
    "Achievement": [
        "Won many prizes in paper presentation on the topic of Aerogel,Earthquake resistance structures,Green building",
        "Won second prize in poster presentation on green building topic at Pondicherry engineering college",
        "Attended internal and external workshops related to wastewater management,water harvesting structures",
        "volunteered and Organised the internal college symposium"
    ],
    
    "Training": [
        "Attended one week online training programme on Geo-Spatial Technologies for planning NRM works under MGNREGA",
        "Three week online certificate course in Weather Based on Agro Met Advisory Services through ICT conducted by CAAST-CSWAM",
        "Underwent inplant training to L&T construction for more than a month to learn the desing and discharge of irrigation canal"
    ],
    
    "Reference":[
        "Dr.R.Rengalakshmi, Director, MSSRF, Chennai",
        "Dr.R.Saravanan, Professor, CEG-Anna University, Chennai"
    ]
}

 //for in loop 
let x = data.Training;
 for (let c in x) {
    console.log(c)
 }

//for of loop
let e = data.Training;
for (let y of e) {
  console.log(y); // gives elements in the array
}

 //for each loop
 data.Skills.forEach(b => {
            console.log(b);
});

//for loop
let skills = data.Skills;
for (let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}




  