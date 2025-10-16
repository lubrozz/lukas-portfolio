
/* 
*   This is a SQLite statements file, here functions are created for inserts, removes, updates, gets etc.
*   This makes the functions able to be used around the app, but stored in one place. 
* 
*   IMPORTANT! All statements are used in the ../server/servers.ts file for actually getting the data from the backend.
* */

/* 
*   db.all = get all results from the query
*   db.get = get only one row from the query
* */

import sqlite3 from 'sqlite3';
import {open, Database} from 'sqlite';

let db: Database<sqlite3.Database, sqlite3.Statement>;

export const initDb = async () => {
    db = await open({
    filename: '.database.db',
    driver: sqlite3.Database
});
}

export const getAllExerciseGroups = async () => {
    return db.all(`
        SELECT *
        FROM exercise_groups`);
}

export const getExerciseGroupName = async (eGroup_id: number) => {
    return db.get(`
        SELECT name
        FROM exercise_groups
        WHERE id = ?`, [eGroup_id]);
}

export const getExercises = async (group_id: number) => {
    return db.all(`
        SELECT ed.name, ge.reps, ge.sets
        FROM group_exercises ge
        JOIN exercise_definitions ed ON ge.exercise_id = ed.id
        WHERE ge.group_id = ?`, [group_id]);
}

export const getUser = async (user_id: number) => {
    return db.get(`
        SELECT *
        FROM users
        WHERE id = ?`, [user_id]);
}