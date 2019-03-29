// this will be the javascript file to hold all of the code for my first app
// create the angular module
(function () {
    'use strict';

    angular.module('App.Services', [])
        .service('ParseService', function ($http) {

            var baseURL = "https://parseapi.back4app.com/";
            //var baseURL = "https://api.parse.com/1/";
            var authenticationHeaders = PARSE__HEADER_CREDENTIALS;

            // these are functions exposed to public
            return {
                /**
                 * default function for logging in user
                 */
                login: function () {

                    var settings = {
                        headers: authenticationHeaders,
                        // params are for query string parameters
                        params: {
                            "username": "admin",
                            "password": "test"
                        }
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'login', settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('login', response);
                            return response.data;
                        });
                },
                /**
                 * returns all of the data
                 */
                getAllObjects: function () {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'classes/stuff/', settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('getAllObjects', response);
                            return response.data;
                        });
                },
                /**
                 * returns individual object by Id
                 */
                deleteObjectById: function (_id) {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.delete(baseURL + 'classes/stuff/' + _id, settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('deleteObjectById', response);
                            return response.data;
                        });
                },
                /**
                 * returns individual object by Id
                 */
                getObjectById: function (_id) {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'classes/stuff/' + _id, settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('getObjectById', response);
                            return response.data;
                        });
                },
                /**
                 * Add a new item in the parse database based on the
                 * objectId specified
                 *
                 * @param   {Object}  _params  name, room
                 * @returns {Promise} [[Description]]
                 */
                addObject: function (_params) {

                    // for POST, we only need to set the authentication header
                    var settings = {
                        headers: authenticationHeaders,
                    };
                    // for POST, we need to specify data to add, AND convert it to
                    // a string before passing it in as seperate parameter data

                    var dataObject = {
                        "name": _params.name,
                        "room": _params.room,
                        //"name": (_params.name ? _params.name : JSON.null),
                        //"room": (_params.room ? _params.room : JSON.null),
                    };

                    var dataObjectString = JSON.stringify(dataObject);

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.post(baseURL + 'classes/stuff', dataObjectString, settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('addObject', response);
                            return response.data;
                        });
                },
                /**
                 * Add a new item in the parse database based on the
                 * objectId specified
                 *
                 * @param   {Object}  _params  name, room, objectId
                 * @returns {Promise} [[Description]]
                 */
                updateObject: function (_params) {

                    // for POST, we only need to set the authentication header
                    var settings = {
                        headers: authenticationHeaders
                    };
                    // for POST, we need to specify data to add, AND convert it to
                    // a string before passing it in as seperate parameter data

                    var dataObject = {
                        "name": (_params.name ? _params.name : JSON.null),
                        "room": (_params.room ? _params.room : JSON.null)
                    };

                    var dataObjectString = JSON.stringify(dataObject);

                    var apiUrl = baseURL + 'classes/stuff/' + _params.objectId;

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.put(apiUrl, dataObjectString, settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('updateObject', response);
                            return response.data;
                        });
                }
            }
        })
})();