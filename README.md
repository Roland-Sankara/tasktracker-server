# Tasktracker-server
 This is a to-do application / tasktracker application API which exposes endpoints to facilitate the creation, update, deletion and retrieval of user tasks.

### API host:
- http://localhost:3030 - (Dev Environment)
- https://tasktracker-api.herokuapp.com - (Prod Environment)

### API Documentation:
- [https://documenter.getpostman.com/view/6512450/2s7YYijp6x](https://documenter.getpostman.com/view/6512450/2s7YYijp6x)

### API Postman Collection:
- [Click Here to view/download collection]('./trask-tracker-api.postman_collection.json')

### Entity Relationship Diagram:
- [Click here for ERD](https://lucid.app/lucidchart/29aacc73-4de6-4c19-838c-6957ff33071c/edit?viewport_loc=104%2C109%2C1504%2C703%2C0_0&invitationId=inv_d31f5940-58bf-44dc-9c6e-416dc93f6d6d#)

## Getting started.
1.  Clone the codebase - `git clone https://github.com/Roland-Sankara/tasktracker-server.git` 
2. Create a Postgres Database and add the DB connection in the `.env` under the DATABASE_URL variable
3. Run the command `npm run db-migrate` to standup the DB Schema with the migration files
4. Start the server using `npm start`
5. Follow the API documenation to perform requests. 

