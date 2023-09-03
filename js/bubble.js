

document.querySelector('#signin').addEventListener('click', function () {
	console.log('Sign in button click');
});

document.querySelector('#header').addEventListener('click', function ()  {
	console.log('Header click');
});

document.querySelector('#account_links').addEventListener('click', function (event) {
	console.log('Account links click');
	event.stopImmediatePropagation();
});

document.querySelector('#body').addEventListener('click', function () {
	console.log('body click');
});

document.querySelector('#signup').addEventListener('click', function (event) {
	console.log('Sign up button click');
    event.stopPropagation();
});
