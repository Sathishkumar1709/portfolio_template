var skillArray = [
	{
		skillName : "HTML",
		level : "100%"
	},
	{
		skillName : "CSS",
		level : "90%"
	},
	{
		skillName : "Javascript",
		level : "80%"
	},
	{
		skillName : "Excel",
		level : "90%"
	},
	{
		skillName : "Powerpoint",
		level : "85%"
	},
	{
		skillName : "Photoshop",
		level : "80%"
	}
];
var skill = {
	 skillName : "CSS",
	 level : "100%"
 }
 /*
 <div class="skill-item box-50">
		<div class="skill">
			<h4>PHP</h4>
			<h4>80%</h4>
		</div>
		<div class="progress-bar-bg pbar-lg">
			<div class="progress-bar-80"></div>
		</div>
</div>
*/

 /* ----------- Creating HTML Element in JS ----------*/

function  skillModule(skill)
{
	var progressBar = document.createElement('div'),
		progressBarBg  = document.createElement('div'),
		skillName = document.createElement('h4'),
		skillLevel = document.createElement('h4'),
		skillBox  = document.createElement('div'),
		skillItem  = document.createElement('div');
	
/* ----------- Adding TEXT in HTML Element in JS ----------*/

		skillName.innerText = skill.skillName;
		skillLevel.innerText = skill.level;

/* ----------- Adding ATTRIBUTE in HTML Element in JS ----------*/

		progressBar.setAttribute('class','progress-bar-80');
		progressBarBg.setAttribute('class','progress-bar-bg');
		skillBox.setAttribute('class','skill');
		skillItem.setAttribute('class','skill-item');

/* ----------- Insert HTML Element in another HTML Element in JS ----------*/
		skillBox.append(skillName);
		skillBox.append(skillLevel);
		progressBarBg.append(progressBar);
		skillItem.append(skillBox);
		skillItem.append(progressBarBg);
		
		
		console.log(skillItem);
	
		var skillWrapper = document.getElementById('skill-module');
		skillWrapper.append(skillItem);
		
}
	for(let i=0 ; i< skillArray.length ; i++)
	{
		console.log(skillArray[i]);
	}
	
	