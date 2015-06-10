/**
* @description 
* Global User. Model
* humpback-model created at Tue Jun 09 2015 14:23:16 GMT-0400 (EDT)
**/
angular.module('models.user', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, UserService){
	
	console.log("listening to user changes");
    $sailsSocket.subscribe('user', function(envelope){
        //console.log(envelope);
        UserService.handler[envelope.verb](envelope)
    });

    return DS.defineResource({
        name: 'user',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, user) {
            console.log(id, "User Expired");
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/user',
        baseUrl: '/api',
        
        /**
        * @description 
        * Model's Life Cycle Callbacks
        * http://www.js-data.io/v1.5.8/docs/dsdefaults
        **/
        beforeInject: function(resource, data){
           //console.log(data);
        },
        beforeCreate: function (resource, data, cb) {
            cb(null, data);
        },
        beforeUpdate: function(resource, data, cb){
            cb(null, data);
        },
        afterUpdate: function(resource, data, cb){
            cb(null, data);
        },
        afterCreate: function (resource, data, cb) {
            cb(null, data);
        },
        beforeDestroy: function (resource, data, cb) {
            cb(null, data);
        },
        afterDestroy: function (resource, data, cb) {
            cb(null, data);
        },

        /**
        * @description 
        * Define's Relations to the Model 
        * 
        **/
        relations:{
            
        }
    });
})

/**
* @description 
* The UserService factory Exposes Handler and Service methods for the User Server Side Model
* 
**/
.factory('UserService',function(DS, $sailsSocket){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a User is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        "use strict";
        DS.inject('user', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a User is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        "use strict";
        DS.eject('user', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a User is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        "use strict";
        console.log(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('user', envelope.data);
        }else{
            DS.refresh('user',envelope.id);
        }

    };

    /**
    * @description 
    * When a User model's collection is added to, inject it into the User Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        "use strict";
        console.log(envelope);
    };

    /**
    * @description 
    * When a User model's collection is detracted from eject it from the User Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        "use strict";
        console.log(envelope);
    };

    /**
    * @description 
    * When a User model is messaged 
    * 
    **/
    _handler.messaged = function(envelope){
        "use strict";
        console.log(envelope);
    };

	return {
		service : _service,
		handler : _handler
	}
});