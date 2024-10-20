# losersonly


# Bugs
- CSS not incorporated in build as of 10/24

# Achievements
- Learned about website hosting
- Learned about Github actions in order to automate building
- Created a simple NextJS app

# Lessons
- Setting up the app and connecting the squarespace and github pages took about 30 minutes
- Going thru the configs is a bit stressful as I'm not sure if it will all work, until I test things
- A failed GitHub Actions workflow does not prevent the commit from being applied to your repository.

# Running locally
- The actual Next app lives in 'losers_only' directory, so you need to cd into that directory to work within the app
- in order to run git commands, you need to be in root directory

- npm run dev
- http://localhost:3000

# Deployment
- run `npm run build` then `npm run export` when in the app to build the app. This will be built out in the 'out' file. 
- Check out the `docs` directory in the root - ensure you keep the CNAME file
- Transfer the `out` file and replace the root `docs`
- You need to transfer that file into the root directory's 'docs' directory. This is where the built site will be referenced via GH.
