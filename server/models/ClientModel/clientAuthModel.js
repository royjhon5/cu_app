const db = require('../../config/dbConnection')


const clientModel = {
    findIdNumberLogin: function(id_number) {
      const query = 'SELECT * FROM client_user WHERE id_number = ?';
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
    findIdNumberRegister: function(id_number) {
        const query = 'SELECT * FROM client_user WHERE id_number = ?';
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

    findUserEmail: function(email) {
      const query = 'SELECT * FROM client_user WHERE email = ?';
      return new Promise((resolve, reject) => {
        db.query(query, [email], function(err, results) {
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

    register: async function(user, req, res) {
        try {
            const query = 'INSERT INTO client_user SET ?';
            db.query(query, [user], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Server Error');
                } else {
                    res.status(200).send('Insert Successfully');
                }
            })
        } catch (err) {
            console.err(err)
        }
    },

    incrementFailedAttempts: function(user_id) {
      const query = 'UPDATE client_user SET failed_login_attempts = failed_login_attempts + 1 WHERE id = ?'
      return new Promise((resolve, reject) => {
          db.query(query, [user_id], function(err, results) {
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

    isDisable: function(user_id) {
      const query = 'UPDATE client_user SET is_disable = 1 WHERE id = ?'
      return new Promise((resolve, reject) => {
          db.query(query, [user_id], function(err, results) {
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

    resetFailedAttempts: function(user_id) {
      const query = 'UPDATE client_user SET failed_login_attempts = 0 WHERE id = ?'
      return new Promise((resolve, reject) => {
          db.query(query, [user_id], function(err, results) {
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
}

module.exports = clientModel;