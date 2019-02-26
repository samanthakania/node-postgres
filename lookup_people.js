const pg = require("pg");
const settings = require("./settings"); // settings.json
const myArgs = process.argv.slice(2);


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE first_name = $1::text`,[myArgs[0]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
  result.rows.forEach(function(person){
    console.log(`${person.first_name}, ${person.last_name}, ${person.birthdate}`);
  })
    client.end();
  });
});