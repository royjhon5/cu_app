const db = require('../../config/dbConnection');

const adminModel = {
    findAll: function(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM admin_user';
            db.query(query, function(err, results){ 
                if(err){
                    reject(err);
                } else {
                    if (results.length === 0) {
                        resolve(null);
                    } else {
                        const user = results[0];
                        resolve(user);
                    }
                }
            });
        });
    },

    findByIdNumber: function(id_number, callback){
        const query = 'SELECT * FROM admin_user WHERE id_number = ?';
        db.query(query, [id_number], function(err, results){ 
            if(err){
                return callback(err, null)
            }
            if(results.length === 0) {
                return callback(null, null);
            }
            const user = results[0];
            callback(null, user);
        })
    },

    findIdNumberLogin: function(id_number) {
        const query = 'SELECT * FROM admin_user WHERE id_number = ?';
        return new Promise((resolve, reject) => {
          db.query(query, [id_number], function(err, results) {
            if (err) {
              return reject(err);
            }
            if (results.length === 0) {
              return resolve(null);
            }
            const user = results[0];
            resolve(user);
          });
        });
    },

    adminUserIsLoggedIn: function(adminID) {
        const query = 'SELECT * FROM admin_user_session WHERE adminID = ? AND is_active = "true"'
        return new Promise((resolve, reject) => {
          db.query(query, [adminID], function(err, results) {
            if (err) {
              return reject(err);
            }
            if (results.length === 0) {
              return resolve(null);
            }
            const user = results[0];
            resolve(user);
          });
        });
    },

    register: function(user, callback) {
        const query = 'INSERT INTO admin_user SET ?';
        db.query(query, user, function(err, results) {
            if(err){
                return callback(err, null)
            }
            callback(null, results.insertId)
        });
    }
}

module.exports = adminModel;