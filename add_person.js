const settings = require("./settings"); // settings.json
const input = process.argv.splice(2)
const firstName = input[0];
const lastName= input[1];
const birthday = input[2];

console.log(firstName, lastName, birthday);

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex('famous_people')
  .insert([{
    first_name: firstName,
    last_name: lastName,
    birthdate: birthday
   }]).finally(=>{
    kinex.destroy()
   });