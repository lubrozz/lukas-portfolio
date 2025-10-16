# TODO for next time developing

Use `~~ text ~~` for strikethrough when a task is done. \
Example:

- ~~This task is done~~
- This task is not done

## For next development:

- Figure out why `npm run dev` does not work...\
   `error when starting dev server:
Error: EPERM: operation not permitted, rmdir 'C:\Users\lukas.ostergaard\OneDrive - Abacus Medicine\Desktop\Repos\lukas-portfolio\node_modules\.vite\deps'`\

- Check that the `FitnessLogin` actually works...

- Continue on getting values from the DB to appear in front-end. This includes:
  - The `ExerciseGroup` (rename it to `ExerciseGroup_preview` )
  - Exercise previews in the group. This means getting all the exercises with the `group_id` from table `group_exercises`. The `group_id` is already used to find the name for the group, so nest the mapping of the exercises in the mapping for the group.
