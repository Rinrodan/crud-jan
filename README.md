## Docker postgres
```bash
$ docker run -itd -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -p 5600:5600 -v --name postgres postgres
```

- dfc3c4a74f9809633f261cb5b999967945e44dcc91bdd83510f8df5afb0ca9dc

```bash
$ docker ps -a // ### find the first three digits of the server
$ docker exec -it dfc3c4a74f9809633f261cb5b999967945e44dcc91bdd83510f8df5afb0ca9dc bash
$ postgres --version
$ psql -U user
```
```bash
user=#
user=# \l
 Name    | Owner | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules | Access privileges 
-----------+-------+----------+-----------------+------------+------------+------------+-----------+-------------------
 postgres  | user  | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 template0 | user  | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/user          +

 user=# \c postgres
 You are now connected to database "postgres" as user "user".

 postgres=#
 postgres=# \du
                              List of roles
 Role name |                         Attributes                         
-----------+------------------------------------------------------------
 user      | Superuser, Create role, Create DB, Replication, Bypass RLS

 postgres-# \dn
      List of schemas
  Name  |       Owner       
--------+-------------------
 public | pg_database_owner
(1 row)
```

## make a migration
$ npx knex migrate:make 20231204_user_table

```
```javascript
// add in the new migration file

exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary;
        table.string('fname');
        table.string('lname');
        table.string('email').unique().notNullable();
        table.string('username').unique();
        table.string('password');
        table.string('imageurl')
})
};
// and
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users', table => {
})};
```
```bash
## To migrate, run 
$ npx knex migrate:latest
```

```bash
## To create a seed file, run 
$ npx knex seed:make seed_name
## To run seed files:
$ npx knex seed:run
```