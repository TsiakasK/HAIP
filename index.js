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


var select_act = document.getElementById("actionID");
for(var i = 0; i < actionList.length; i++) {
	var opt = actionList[i].name;
	var el = document.createElement("option");
	el.text= opt;
	select_act.add(el);
}

function addAction() {
	var action = document.getElementById("action_name");
	if(actionList.includes(action.value)){
		;
	}
	else{
	actionList.push(action.value); 
	update_adropdown();
	
	}
}

function addMessage() {
	var message = document.getElementById("message_name");
	if(msgList.includes(message.value)){
		;
	}
	else{
	msgList.push(message.value); 
	update_pdropdown();
	}
}

function addPattern() {
	var pattern = document.getElementById("pattern_name");
	if(msgList.includes(pattern.value)){
		;
	}
	else{
	patternList.push(pattern.value); 
	}
}

function update_pdropdown(){
	var select = document.getElementById("msg1");
	select.options.length = 0;
	for(var i = 0; i < msgList.length; i++) {
		var opt = msgList[i];
		var el = document.createElement("option");
		el.text= opt;
		select.add(el);
	}
	var select = document.getElementById("msg2");
	select.options.length = 0;
	for(var i = 0; i < msgList.length; i++) {
		var opt = msgList[i];
		var el = document.createElement("option");
		el.text= opt;
		select.add(el);
	}
	var select = document.getElementById("msg3");
	select.options.length = 0;
	for(var i = 0; i < msgList.length; i++) {
		var opt = msgList[i];
		var el = document.createElement("option");
		el.text= opt;
		select.add(el);
	}
}

function update_adropdown(){
	var select = document.getElementById("actionID");
	select.options.length = 0;
	for(var i = 0; i < actionList.length; i++) {
		var opt = actionList[i];
		var el = document.createElement("option");
		el.text= opt;
		select.add(el);
	}
}
