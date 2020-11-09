const connection = require("connection");

function insertQMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function toSql(ob) {
  let arr = [];

  for (let key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  },

  insertOne: function (table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += insertQMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  },

  updateOne: function (table, updatedInfo, cond, cb) {
    const queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += toSql(updatedInfo);
    queryString += " WHERE ";
    queryString += cond;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  deleteOne: function (table, cond, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += cond;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};




module.exports = orm;