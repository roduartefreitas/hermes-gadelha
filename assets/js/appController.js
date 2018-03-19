angular.module('bacanaApp').controller('appController', ctrl);

function ctrl($scope) {
	$scope.mailModal = {};

	/*
	 * from: https://stackoverflow.com/questions/6809053/simple-jquery-php-and-jsonp-example
	 */
	$scope.sendMail = function (_mail) {
		$.getJSON('http://hg-mail-sender.epizy.com/mail.php?callback=?', 'mail=' + _mail, function (_response) {
			$scope.mailModal = {
				status: _response.status,
				msg: _response.msg
			};

			alert(_response.status + "\n\n" + _response.msg);
		});

	}
}