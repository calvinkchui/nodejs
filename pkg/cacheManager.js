
module.exports = {
  test: function() {
    console.log("test cache-manager()")

    var cacheManager = require('cache-manager');
    var memoryCache = cacheManager.caching({ store: 'memory', max: 100, ttl: 10/*seconds*/ });
    var ttl = 5;
    // Note: callback is optional in set() and del().   
    /*
    memoryCache.set('foo', 'bar', {ttl: ttl}, function(err) {
        if (err) { throw err; }
     
        memoryCache.get('foo', function(err, result) {
            console.log(result);
            // >> 'bar'
            memoryCache.del('foo', function(err) {});
        });
    });
    */

    // Render result:
    function getUser(id, cb) {
      console.log("wait...");
      setTimeout(function() {
        console.log("Returning user from slow database.");
        cb(null, { id: id, name: 'Bob' });
      }, 100);
    }

    var userId = 123;
    var key = 'user_' + userId;

    // Note: ttl is optional in wrap()
    memoryCache.wrap(key, function(cb) {
      getUser(userId, cb);
    }, { ttl: ttl }, function(err, user) {
      console.log("#1 1st:")
      console.log(user);

      // Second time fetches user from memoryCache
      memoryCache.wrap(key, function(cb) {
        getUser(userId, cb);
      }, function(err, user) {
        console.log("#1 2nd:");
        console.log(user);
      });
    });


    var parm = { id: 222 }
    var key2 = 'r1:' + JSON.stringify(parm);
    memoryCache.wrap(key2, function(cb) {
      getUser(parm.id, cb);
    }, { ttl: ttl }, function(err, user) {
       console.log("#2a ");
       console.log(user);
    });

    key2 = 'r1:' + JSON.stringify(parm);
    memoryCache.wrap(key2, function(cb) {
      getUser(parm.id, cb);
    }, { ttl: ttl }, function(err, user) {
       console.log("#2b");
       console.log(user);       
    });

    console.log("test cache-manager end")
  }
}
