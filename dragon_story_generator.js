/* design code for a dragon story generator */

function makeDragonstory() {
	var storyBegins = ["One day", "Once upon a time", "One night", "It was hell of a storm when", "The mightiest of them all", "Small as he was", "It all began when", "It all started when", "One sunny day", "It was very rainy when", "On summers eve"];
	var dragonName = ["Telemah", "Aorin", "Ashmah", "Paarthanax", "Alduin", "Toothless", "Saphira", "Norbert", "Smaug", "Draco"];
	var storyCulminate = ["came to a village and burned it all to the ground.", "won a beauty competition.", "lost a fight against another dragon.", "ate a cheesecake and decided never to do it again.", "befriended a bunny.", "met his arch nemesis Jiggly Puff.", "transformed into a human.", "gave a kiss to Lilly.", "learned how to make magic muffins!", "victoriously defeated a dragon hunter.", "won a poker contest against Nigal and Arthur.", "gave a speech to his people and became a president.", "got stuck into a box.", "helped a grandma cross the road."];
	
	var rand1 = Math.floor(Math.random() * storyBegins.length);
	var rand2 = Math.floor(Math.random() * dragonName.length);
	var rand3 = Math.floor(Math.random() * storyCulminate.length);
	document.getElementById("message").innerHTML = storyBegins[rand1] + " " +dragonName[rand2] + " " + storyCulminate[rand3];
}


/*
window.onload = function() {
	var count = 0;
	var message = "You clicked me ";
	var div = document.getElementById("message");
	
	var button = document.getElementById("clickme");
	button.onclick = function() {
		count++;
		div.innerHTML = message + count + " times!";
	};
}
*/
