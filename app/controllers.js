// this will be the javascript file to hold all of the code for my first app
// create the angular module
(function () {
    'use strict';
angular.module('App.Controllers', ['App.Services'])

    // the controllers for each of the states, we are “injecting” the
    // $scope and the specific $state information, these are angular
    // services provided as part of the framework
    .controller('homeCtrl', function ($scope, ParseService) {
        // ----------------------------------------------------------------
        // Declare Public Data & Function
        // ----------------------------------------------------------------
        $scope.itemsList = [];
        $scope.inputItem = {
            value: "",
            name: "",
            room: ""
        };
    
        /**
         *
         * @param _objectId
         */
        $scope.editObject = function editObject(_object) {
    
            var data = null;
            var editedObject = {};
            var objectData = prompt("Enter the Edited Information", _object.name + ", " + _object.room);
    
    
            if (objectData != null) {
                // separate the values
                data = objectData.split(",");
            }
    
            if (objectData && (data.length === 2)) {
    
                // create object parameters to save
                editedObject.name = data[0].trim();
                editedObject.room = data[1].trim();
                editedObject.objectId = _object.objectId;
    
                console.log(JSON.stringify(editedObject));
    
                ParseService.updateObject(editedObject)
                    .then(function itemUpdated(_updatedItem) {
                        alert("Item Updated " + _updatedItem.objectId);
    
                        return populateList();
    
                    }, function errorSaving(_error) {
                        alert("Error Editing Object " + _error)
                    });
            } else {
                if (objectData !== null) {
                    alert("Invalid Input: " + objectData);
                }
            }
        };
    
        /**
         *
         * @param _objectId
         */
        $scope.deleteObject = function editObject(_objectId) {
            ParseService.deleteObjectById(_objectId)
                .then(function itemSaved(_deletedObject) {
                    alert("Item Deleted " + _deletedObject.objectId);
    
                    return populateList();
    
                }, function errorDeleting(_error) {
                    alert("Error Deleting Object " + _objectId)
                });
        };
    
        /**
         * called when user clicks button to add new item
         */
        $scope.addItem = function addItem() {
    
            // separate the values
            var data = $scope.inputItem.value.split(",");
    
            if (data.length === 2) {
                $scope.inputItem.name = data[0].trim();
                $scope.inputItem.room = data[1].trim();
    
                console.log(JSON.stringify($scope.inputItem));
    
                ParseService.addObject($scope.inputItem)
                    .then(function itemSaved(_newItem) {
                        alert("Item Saved", _newItem.objectId);
                        $scope.inputItem = {};
    
                        return populateList();
    
                    }, function errorSaving(_error) {
                        $scope.inputItem = {};
                    });
            } else {
                alert("Invalid Input: " + $scope.inputItem.value);
                $scope.inputItem = {};
            }
        };
        // ----------------------------------------------------------------
        // Declare Private Function
        // ----------------------------------------------------------------
        /**
         * calls the service to get the data to populate the list
         * this function is NOT exposed to view
         */
        function populateList() {
            return ParseService.getAllObjects().then(function (_listData) {
                // successful response from server with data, lets
                // assign to scope variable to display in index.html
                $scope.itemsList = _listData.results;
            });
        }
    
        /**
         * sets up the controller
         *
         * @returns {[[Type]]} [[Description]]
         */
        function initializeController() {
            // To initialize the view, we need to login to Parse
            // using the ParseService
    
            ParseService.login().then(function (_loggedInUser) {
                // successful response from the service, the user is
                // logged in and we have a user object
                alert("User Logged In " + _loggedInUser.username);
    
                // now that we are logged in, lets get some data..
                return populateList();
    
            }, function error(_errorResponse) {
                // if error occurred anywhere above, this code will
                // be executed
                alert("ERROR " + _errorResponse);
            });
        }
    
        // ----------------------------------------------------------------
        // start the controller
        // ----------------------------------------------------------------
        initializeController();
    })
    .controller('detailCtrl', function ($scope, $state, ParseService) {
        $scope.stateInfo = $state.current;
        $scope.params = $state.params;
        $scope.item = {};
       // code to get the object from the ParseService
       ParseService.getObjectById($state.params.objectId).then(function(_data){
           console.log(_data);
           $scope.item = _data;
       }, function (_error) {
           alert("Error". _error.message);
       });
    });
})();