actionList = [];
msgList = []; 
patternList = []; 

var actionList = [
    {
      "aID": 1,
	  "name": "annotate-sample",
      "primitive": "provide", 
	  "X-type": "output",
	  "isXarray": 0,
	  "Y-type": "input", 
	  "isXarray": 0,
	  "Xop": "", 
	  "Yop": "", 
	  "XYop": "map", 
	  "description": "assign an output value - label (Y) for a given sample (X)"
    },
	{
      "aID": 2,
	  "name": "select-sample",
      "primitive": "provide", 
	  "X-type": "input",
	  "isXarray": 0,
	  "Y-type": "input", 
	  "isXarray": 1,
	  "Xop": "select", 
	  "Yop": "", 
	  "XYop": "",
	  "description": "select a sample (X) from a list of samples (Y)"
    },
	{
      "aID": 3,
	  "name": "request-sample-class",
      "primitive": "request", 
	  "X-type": "output",
	  "isXarray": 0,
	  "Y-type": "input", 
	  "isXarray": 0,
	  "Xop": "", 
	  "Yop": "", 
	  "XYop": "map", 
	  "description": "ask for a label (Y) for a given sample (X)"
    }, 
	{
      "aID": 4,
	  "name": "request-new-sample",
      "primitive": "request", 
	  "X-type": "input",
	  "isXarray": 0,
	  "Y-type": "", 
	  "isXarray": 0,
	  "Xop": "", 
	  "Yop": "", 
	  "XYop": "create", 
	  "description": "ask for a new sample (X)"
    }, 
	{
      "aID": 5,
	  "name": "evaluate-prediction",
      "primitive": "provide", 
	  "X-type": "feedback",
	  "isXarray": 0,
	  "Y-type": "input, output", 
	  "isXarray": 0,
	  "Xop": "", 
	  "Yop": "", 
	  "XYop": "map", 
	  "description": "evaluate a mapping X-->Y"
    }, 
	{
      "aID": 6,
	  "name": "request-prediction-XAI",
      "primitive": "request", 
	  "X-type": "feedback",
	  "isXarray": 0,
	  "Y-type": "input, output", 
	  "isXarray": 0,
	  "Xop": "", 
	  "Yop": "", 
	  "XYop": "map", 
	  "description": "ask for explanations for a mapping X --> Y"
    }
  ]

var select_act = document.getElementById("sel_action");
alert(select_act);
for(var i = 0; i < actionList.length; i++) {
	var opt = actionList[i].name;
	var el = document.createElement("option");
	el.text= opt;
	select_act.add(el);
}

function addAct(){
	var obj_name = select_act.value;
	result = actionList.filter(({ name }) => obj_name.includes(name));
	alert(result[0].description); 
}
