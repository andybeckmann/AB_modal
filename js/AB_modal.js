function setCookie(key, value, expiration) {
	document.cookie = key + '=' + value + '; expires=' + expiration + '; path=/';
}

function modal() {

	let modalWindow = document.getElementById('modal'),
		closeButton = document.getElementById('modal--close'),
		expirationDate = new Date();

	if (document.cookie.split('; ').find(row => row.startsWith('popup_closed'))) {
		modalWindow.style.display = 'none';
	}
		
	expirationDate.setHours(expirationDate.getUTCHours() + 12);

	closeButton.addEventListener('click', function() {
		modalWindow.style.display = 'none';
		setCookie('popup_closed', 'true', expirationDate);
	});

	window.onkeydown = function (e) {
		if (e.keyCode == 27) {
			modalWindow.style.display = 'none';
			setCookie('popup_closed', 'true', expirationDate);
		}
	};
}