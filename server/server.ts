import express, { Request, Response } from "express";
import cors from "cors";
import {getAllExerciseGroups, getExerciseGroupName, getExercises, getUser, initDb} from "../db/statements";

const app = express(); // Web server
app.use(cors()); // allow frontend to call backend
app.use(express.json());

await initDb();

/**
 *  IMPORTANT! This file is to actually get the requested data. The functions with the queries are in ../db/statements.ts
 * 
 *  The api calls below all have the same structure
 *  The 'app.get("/api/groups", ...) is just the URL that the frontend calls. It is purely a name.
 *      If an ID is needed, you can show it with :id ('/api/groups/:id') and in the frontend a variable is used instead.
 * 
 *  The call gets a request. Example is an ID that is then passed to the function that holds the SQL query.
 *  The response is the query result returned in JSON format.
 */

app.get("/api/groups", async (req: Request, res: Response) => {
  const groups = await getAllExerciseGroups();
  res.json(groups);
});

app.get("/api/groups/:id", async (req: Request, res: Response) => {
  const group = await getExerciseGroupName(Number(req.params.id));
  res.json(group);
});

app.get("/api/groups/:id/exercises", async (req: Request, res: Response) => {
  const exercises = await getExercises(Number(req.params.id));
  res.json(exercises);
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
    const user = await getUser(Number(req.params.id));
    res.json(user);
})

const port = process.env.PORT || 4000;
app.listen(4000, () => console.log("✅ Server running at http://localhost:4000"));