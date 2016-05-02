$(function(){
  var schools = [
	{ value: 'The University of Texas at Austin'},
	{ value: 'The University of Texas at Arlington'},
	{ value: 'The University of Texas at Dallas'},
	{ value: 'The University of Texas at El Paso'},
	{ value: 'The University of Texas Rio Grande Valley'},
	{ value: 'The University of Texas at San Antonio'},
	{ value: 'The University of Texas at Tyler'},
	{ value: 'The University of Texas of the Permian Basin'},
	{ value: 'Austin Community College'},
	{ value: 'St. Edwards University'},
	{ value: 'Texas State University'},
	{ value: 'Texas A&M University'},
	{ value: 'Texas A&M University - Corpus Christi'},
	{ value: 'Texas A&M University - San Antonio'},
	{ value: 'Texas A&M University - Kingsville'},
	{ value: 'Texas A&M University - Texakarna'},
	{ value: 'Texas A&M University - Commerce'},
	{ value: 'Texas A&M University - Central Texas'},
	{ value: 'Texas A&M International University'},
	{ value: 'West Texas A&M University'},
	{ value: 'Tarleton State University'},
	{ value: 'Southwestern University'},
	{ value: 'Rice University'},
	{ value: 'Southern Methodist University'},
	{ value: 'Trinity University'},
	{ value: 'University of North Texas'},
	{ value: 'High School'},
  ];
  
  $('#school').autocomplete({
    lookup: schools
  });
});