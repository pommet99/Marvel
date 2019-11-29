var go;
var clear;


var textName;
var textBirth;
var param;


$(function() {
  go = $("#go");
  clear = $('#clear');
	img = $('#img');
  textName = $('#text_name');
  textBirth = $('#text_birth');
  param = $('#input');
});

function clearData() {
	img.attr('src', '');
  textName.html('');
  textBirth.html(''); 
  param.val('');
}

function submit(){
  var inputValue = $.trim(param.val());
  if (inputValue === '') return;
  
  var swURL = "https://swapi.co/api/people/" + param.val();

  $.ajax({
    type: "GET",
    url: swURL,
    success: function(data){ 
      ajaxSuccess(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       ajaxError();
    }
  });
}

function random() {
   var number = Math.floor(Math.random() * 88) + 1;
	 var swURL = "https://swapi.co/api/people/" + number;

  $.ajax({
    type: "GET",
    url: swURL,
    success: function(data){ 
      ajaxSuccess(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       ajaxError();
    }
  });
}

function ajaxSuccess(data){
  var name = data.name;
  var birth = data.birth_year;
	var imageURI;
	
	
	img.attr('src', imageURI);
  textName.html(name);
  textBirth.html(birth); 
	
  clear.click(function() {
    clearData();
  });
}

function ajaxError(data){
  clearData();
}

