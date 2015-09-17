var projectsData = {

data: [{
    "name":"Gesture Control",
    "id":1,
    "thumb":"project/1-t.png",
    "img":"",
    "tag":["Visual Recognition","C++","OpenCV","Machine Learning"],
    "content":'<iframe src="http://player.vimeo.com/video/107796771?title=0&byline=0&portrait=0" class="video-responsive" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p> Isolate the hand from the webcam feed using Haar cascades, then matched to one of three patterns: Closed fist, open palm, one finger up. Once a gesture for palm is recognized, the isolated hand is fed into the second module, which identifies fingertips and begins tracking them. </p> <p>When a finger is lost in tracking, or does not move for a second, the tracking is stopped, and the movement history of the finger is sent to a vector-based gesture matching software which predicts the command a user has specified. </p>'
},{
    "name":"CRM Web Application",
    "thumb":"project/6-t.png",
    "img":"project/6-1.png",
    "tag":["Web Development","Java","Javascript","SQL","AWS"],
    "content":" <p>Developed the JavaEE based web application with MySQL database, Amazon Web Service(including message and queue), Java Jersey framework and REST API.</p> <p>Designed the user interface using Photoshop and implemented with jQuery, AngularJS, html/css.</p><p>Guided by Professor Donald Ferguson.</p>"

},{
    "name":"Cryogenic Measurement Design",
    "thumb":"project/2-t.png",
    "img":"project/2-1.png",
    "tag":["Physics","Circuit Design","Altium","Labview","Quantum Electronics"],
    "content":"<p>In this system, I set up a series of filters including RC filter, LC filter and powder filter from room temperature to the mixing chamber. I chose proper components to design the mixing chamber filter, designed a triplex PCB with 24 parallel filtering circuit using the conductor-based coplanar waveguide model. After tha parts assembled, the filter was added to the measuring circuit in themixing chamber of the refrigerator, and connected with other filters in higher temperature. Guided by Professor Ning Kang.</p>"
},{
    "name":"Teeume.com",
    "thumb":"project/3-t.png",
    "img":"project/3-1.png",
    "tag":["Web Development","PHP","Javascript","SQL"],
    "content":"<p>Revised the navigation structure and visual design of the website.  Worked with production division to adjust database system for order tracking and demand analysis. Changed the relationship between customer entity and orders and added new features for tracking.</p><p>Click <a href='http://www.teeume.com'>HERE</a> to visit the website.</p>"
},{
    "name":"PISTG",
    "thumb":"project/4-t.png",
    "img":"",
    "tag":["Game Design","GameMaker","Adobe Photoshop","PaintTool SAI"],
    "content":'<iframe src="http://player.vimeo.com/video/55931671?title=0&byline=0&portrait=0&badge=0" class="video-responsive" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><p></p><p>In this game, I tried to visualize the language of some classical Chinese poems. I choose eight sentences each describes a season. I use the objects, actions, routines and  shape of leaves to show the feeling in the poem. When the stages form a circle in the order of seasons, when the first four seasons are over,  reincarnation begins. The seasons will repeat again and again,  you may get lost in the river of time, or you may wake up from the endless nightmare.</p>'
},{
    "name":"BDWMViewer",
    "thumb":"project/5-t.png",
    "img":"project/5-1.png",
    "tag":["Browser Extension","Chrome","Firefox","Javascript","AJAX"],
    "content":"<p>A userscript extension for chrome and firefox, features in short-cuts and image preview for the BBS system of Peking University. Generate a preview display of images in lower hierarchy pages which will improve reading experience on image based pages.</p><p></p>"
},],



category: [{
    "name":"Programming",
    "child":["C++","Java","Javascript"]
},{
    "name":"Design",
    "child":["Graphic Design","Game Design","Circuit Design","Book Design"]
},{
    "name":"Application",
    "child":["Adobe Photoshop","Matlab","Mathematica"]
},{
    "name":"Field",
    "child":["Artificial Intelligence","Control Theory","Electronics","Machine Learning","NLP","Physics","Visual Recognition"]
}]




};
