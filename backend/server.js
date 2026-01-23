import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "uni_dashboard",
  password: "01928374Th=",
  port: 5432,
});
db.connect(); 