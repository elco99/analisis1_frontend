angular.module('AngularScaffold.Services').factory('UserService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://desolate-bayou-96785.herokuapp.com/';
		//var baseUrl = 'http://localhost:8000/';
		return {
			Register: function(payload){
				console.log(payload)
	            return $http.post(baseUrl + "v1/register", payload);
        	},
	        GetUser: function(){
      			return $http.get(baseUrl + "v1/getUser");
	        },
	        UpdateUser: function(payload){
	            return $http.post(baseUrl + "v1/updateUser", payload);
        	},
        	GetEmployees: function(){
        		return $http.get(baseUrl + "v1/getEmployees");
        	},
        	ModifyPin: function(payload){
        		return $http.post(baseUrl+"v1/modifyPin",payload);
        	}
	  	};
}]);
