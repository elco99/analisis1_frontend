angular.module('AngularScaffold.Services').factory('AuthService', ['$http', 
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://desolate-bayou-96785.herokuapp.com/';
		//var baseUrl = 'http://localhost:8000/';
		return {
			Logout: function(){
				return $http.get(baseUrl +"v1/logout");
			},
			Login: function(payload){
				return $http.post(baseUrl +"v1/login", payload);
			},
			LoginWithPin: function(payload){
				return $http.post(baseUrl + "v1/loginWithPin", payload);
			}
	    };
}]);
