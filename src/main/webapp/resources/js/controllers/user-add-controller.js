angular
	.module('main')
	.controller('UserAddController', ['$scope','$rootScope','UserService'
		, function($scope , $rootScope , UserService ){
		
		$scope.user = {};
		
		
		$scope.submitForm = function( ){
			if( $scope.userAddForm.$valid ){
				UserService.addUser( $scope.user );
				
				$scope.message = "Usuario cadastrado!";
			}
		}
		
	}])
	.controller('UserEditController', ['$scope','$rootScope','$routeParams','UserService'
		, function($scope , $rootScope , $routeParams , UserService ){
		
		$scope.user = { name : "Usuario selecionado " + $routeParams.userId };
		
		
		$scope.submitForm = function( ){
			if( $scope.userAddForm.$valid ){
				UserService.addUser( $scope.user );
				
				$scope.message = "Usuario cadastrado!";
			}
		}
		
	}])
	;