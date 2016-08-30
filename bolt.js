	var A0  = "A0";
	var A1  = "A1";
	var A2  = "A2";
	var A3  = "A3";
	var True = "HIGH"
	var False = "LOW"
	var HIGH = "HIGH"
	var LOW  = "LOW"
	var debug = 0

	function digitalWrite(pin,val) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			alert(obj.value);
	    		}

			}
		};
		xmlhttp.open("GET","/digitalWrite?pin="+pin+"&state="+val,true);
		xmlhttp.send();
	}

	function analogWrite(pin,val) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		/*var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			alert(obj.value);
	    		}*/alert(xmlhttp.responseText);


			}
		};
		xmlhttp.open("GET","/analogWrite?pin="+pin+"&value="+val,true);
		xmlhttp.send();
	}

	function digitalRead(pin,element_id) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById(element_id).innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			document.getElementById(element_id).innerHTML = "Pin Val = "+obj.value;
	    		}
	    		else{
	    			document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
	    		}
	    	}
		};
		xmlhttp.open("GET","/digitalRead?pin="+pin,true);
		xmlhttp.send();
	}

	function digitalReadHandler(pin,handler_fn) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById(element_id).innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			handler_fn(obj.value);
	    		}
	    		else{
	    			if(debug == 1){
	    				alert(xmlhttp.responseText);}
	    		}
	    	}
		};
		xmlhttp.open("GET","/digitalRead?pin="+pin,true);
		xmlhttp.send();
	}

	function analogReadHandler(pin,handler_fn) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById(element_id).innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			handler_fn(obj.value);
	    		}
	    		else{
	    			if(debug == 1){
	    				alert(xmlhttp.responseText);}
	    		}
	    	}
		};
		xmlhttp.open("GET","/analogRead?pin="+pin,true);
		xmlhttp.send();
	}

	function analogRead(pin,element_id) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById(element_id).innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			document.getElementById(element_id).innerHTML = "Pin Val = "+obj.value;
	    		}
	    		else{
	    			document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
	    		}
	    	}
		};
		xmlhttp.open("GET","/analogRead?pin="+pin,true);
		xmlhttp.send();
	}

	function setBaud(baud) {
		var xmlhttp = new XMLHttpRequest();
		//var baud = parseInt(document.getElementById("baudset").value);
		//alert(document.getElementById("baudset").value)
		switch(baud) {
			case 2400:
        		baud = 0;
        		break;
    		case 4800:
        		baud = 1;
        		break;
			case 9600:
        		baud = 2;
        		break;
			case 19200:
        		baud = 3;
        		break;
    		default:
        		baud = 2;
		}
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById("demo").innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		//var obj = JSON.parse(xmlhttp.responseText);
	    		//if(obj.success=="1")
	    		{
	    			alert(xmlhttp.responseText);
	    		}

			}
		};
		xmlhttp.open("GET","/serialBegin?baud="+baud,true);
		xmlhttp.send();
	}

	function sendSerialData(serialdata) {
		var xmlhttp = new XMLHttpRequest();
		//var serialdata = document.getElementById("serialdata").value;
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById("demo").innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		//var obj = JSON.parse(xmlhttp.responseText);
	    		//if(obj.success=="1")
	    		{
	    			alert(xmlhttp.responseText);
	    		}

			}
		};
		xmlhttp.open("GET","/serialWrite?data="+serialdata,true);
		xmlhttp.send();
	}

	function readSerialData(element_id) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		//document.getElementById("demo").innerHTML = xmlhttp.responseText;
    		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    		//document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
	    		var obj = JSON.parse(xmlhttp.responseText);
	    		if(obj.success=="1")
	    		{
	    			document.getElementById(element_id).innerHTML = "Pin Val = "+obj.value;
	    		}
	    		else{
	    			document.getElementById(element_id).innerHTML = "Error = "+xmlhttp.responseText;
	    		}
	    	}
		};
		xmlhttp.open("GET","/serialRead",true);
		xmlhttp.send();
	}

	function digitalMultiWrite(pins,values) {
		var cmd = "/digitalMultiWrite?pins=";
		for (i=0; i<pins.length; i++) {
   			cmd += String(pins[i]);
   			if (i < (pins.length - 1)){
   				cmd += ","
   			}
  		}
  		cmd += "&states=";
  		for (i=0; i<values.length; i++) {
   			cmd += String(values[i]);
   			if (i < (pins.length - 1)){
   				cmd += ","
   			}
  		}
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
	    		alert("Javascript Response : "+xmlhttp.responseText);
			}
		};
		xmlhttp.open("GET",cmd,true);
		xmlhttp.send();
	}

	function digitalMultiRead(pins,element_id) {
		var cmd = "/digitalMultiRead?pins=";
		for (i=0; i<pins.length; i++) {
   			cmd += String(pins[i]);
   			if (i < (pins.length - 1)){
   				cmd += ","
   			}
  		}
  		alert(cmd);
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		document.getElementById(element_id).innerHTML = xmlhttp.responseText;
		};
		xmlhttp.open("GET",cmd,true);
		xmlhttp.send();
	}

	function setDebug(bool){
		if (bool == true){
            debug = 1;
		}
		else{
			debug = 0;
		}
	}
