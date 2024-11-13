function curt1() {
	document.getElementById('curt').style.height = '100vh';
        document.getElementById('curt').style.marginTop = '0vh';
        document.getElementById('curt').style.transition = '0.2s';
}
function curt2() {
	document.getElementById('curt').style.marginTop = '-5vh';
        document.getElementById('curt').style.transition = '0.2s';
}
function curt3() {
	document.getElementById('part1').style.marginTop = '-100vh';
	document.getElementById('part1').style.transition = '1s';
}
function magician1() {
	var styles = getComputedStyle(document.getElementById('bird'));
    if (styles.top == '651px') {
	document.getElementById('bird').style.top = '563px';
	document.getElementById('bird').style.transition = '0.5s';
	document.getElementById('rabbit').style.top = '651px';
	document.getElementById('rabbit').style.transition = '0.5s';
	} else {
	document.getElementById('bird').style.top = '651px';
	document.getElementById('bird').style.transition = '0.5s';
	document.getElementById('rabbit').style.top = '563px';
	document.getElementById('rabbit').style.transition = '0.5s';
	}
	
}
function lamp3() {
var styles = getComputedStyle(document.getElementById('rabbit'));
    if(styles.display == 'none'){
	document.getElementById('triangle').style.display = 'block';
        document.getElementById('triangle').style.transition = '0.2s';
	document.getElementById('rabbit').style.display = 'block';
	document.getElementById('hat').style.display = 'block';
	document.getElementById('magic').style.display = 'block';
	document.getElementById('bird').style.display = 'block';
	
	}
	else{
	document.getElementById('triangle').style.display = 'none';
        document.getElementById('triangle').style.transition = '0.2s';
	document.getElementById('rabbit').style.display = 'none';
	document.getElementById('hat').style.display = 'none';
	document.getElementById('magic').style.display = 'none';
	document.getElementById('bird').style.display = 'none';
	document.getElementById('lamp').style.transition = '1s';
	}
}