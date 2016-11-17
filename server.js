var express = require('express');// this is source code of webserver express is library to listen to hhtp 
var morgan = require('morgan');// output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
	'article-1':{
title :'Article One|Mohit',
heading:'Articl One',
date :'Nov16,2016',
content:'bakr'
},
    'article-2':{
title :'Article Two|Mohit`',
heading:'Articl Two',
date :'Nov1,2016',
content:'bakr'
},
    'article-3':{
title :'Article Three|Mohit',
heading:'Articl Three',
date :'Nov16,2016',
content:'bakr'
}
}

function createTemplate (data){
	var title =data.title;
	var heading=data.heading;
	var date=data.date;
	var content=data.content;
	
	var html_template =`
	<html>
    <head>
	    <title>
		   ${title}
		</title>
		<meta name= "viewport"  content ="width=device-width, intial-scale=1" />
		<link href="/ui/style.css" rel="stylesheet" />
    </head>
	
	
    <body>
        <div class= "container">
		<div>
		    <a href="/">Home</a>
        </div>
        <hr/>
		<h3>
            ${heading}
        </h3>
		<div>
		    ${date}
		</div>
		<div>
		${content}
	
		</div>		
      
    </body>
</html>
`
;


return html_template
}


app.get('/', function (req, res) {//if /' path is requested , this function is executed
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));//we send content of this file
});

app.get('/:articleNames', function (req, res) {
  var articleNames=req.params.articleNames ;//provides by express framewok
  res.send(createTemplate(articles[articleNames]));//we send content of this file
});










app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
