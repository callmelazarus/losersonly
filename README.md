# losersonly


# Bugs
- CSS not incorporated in build as of 10/24 - finding that in the build, the css file lives, but I get a 404 when I inspect the page...
  - not a SOLN: I think it has to do with the fact that the build is made within the nexted losers_only directory, but for it to be deployed on GH, that out directory moves to the root. This means, the reference is now wrong. The changes need to be incoroprated in the .yml file as well. NOPE. this didn't fix things...

# Achievements
- Learned about website hosting and domain names.
- Used Github actions in order to automate building of application! Check out the `move_and_rename.yml` file!
- Used font animations via tailwind config file.

# Lessons
- Setting up the app and connecting the squarespace and github pages took about 30 minutes
- Going thru the configs is a bit stressful as I'm not sure if it will all work, until I test things
- A failed GitHub Actions workflow does not prevent the commit from being applied to your repository.
- sed is a powerful tool for making inline replacements in files, making it perfect for modifying the href in your HTML files within a GitHub Actions workflow.

# Running locally
- The actual Next app lives in 'losers_only' directory, so you need to cd into that directory to work within the app
- in order to run git commands, you need to be in root directory

- npm run dev
- http://localhost:3000

- To 'serve' what is in the 'docs' directory - to simulate what the build looks like in the deployed site:
- `npx serve docs/`

# Deployment - these steps are now automated with GH actions!
- run `npm run export` when in the app to build the app. This will be built out in the 'out' file. 
- Check out the `docs` directory in the root - ensure you keep the CNAME file
- Transfer the `out` file and replace the root `docs`
- You need to transfer that file into the root directory's 'docs' directory. This is where the built site will be referenced via GH.
