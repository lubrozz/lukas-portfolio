--Group holding exercises, I.E. "Leg day"--
CREATE TABLE exercise_groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

--Definition of an exercise. I.E "Leg press"--
CREATE TABLE exercise_definitions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
);

--Set the number of reps and sets for an exercise within a group. I.E in group "Leg day" exercise "Leg press" has xx reps and xx sets.--
CREATE TABLE group_exercises (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  group_id INTEGER NOT NULL,
  exercise_id INTEGER NOT NULL,
  reps INTEGER,
  sets INTEGER,
  notes TEXT,
  FOREIGN KEY (group_id) REFERENCES exercise_groups(id) ON DELETE CASCADE,
  FOREIGN KEY (exercise_id) REFERENCES exercise_definitions(id)
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password nvarchar(50) NOT NULL,
  create_at DATETIME DEFAULT CURRENT_TIMESTAMP
);



--Below is the first group, exercise and grouping queries.--

--Creates a group--
insert into exercise_groups (name, description)
VALUES ("Upper body", "Upper body exercise group");

--Creates an exercise that can be added to multiple groups--
INSERT INTO exercise_definitions (name, description)
VALUES ("Machine Shoulder Press", "Grips should be aligned with breast");

--Groups an exercise to a group with number of reps and sets. This makes the exercise reps/sets customizable for each group--
INSERT INTO group_exercises(group_id, exercise_id, reps, sets, notes)
VALUES (1, 1, 15, 4, "Focus on breathing");

--Create user--
INSERT INTO users(username, password)
VALUES ("lubrozz", "12345");