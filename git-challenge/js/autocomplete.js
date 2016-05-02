$(function(){
  var schools = [
	{ value: 'The University of Texas at Austin'},
	{ value: 'Austin Community College'},
	{ value: 'Texas A&M University'},
	{ value: 'University of Texas at Dallas'},
	{ value: 'Rice University'},
	{ value: 'Southern Methodist University'},
	{ value: 'High School'},
  ];
  
  $('#school').autocomplete({
    lookup: schools
  });
});