
# Not Another™ <br> Web Development Workflow Template

## About This Template
Welcome to Not Another™'s streamlined web development template! This template is designed to simplify and accelerate your web development process, from coding to deployment. With automated workflows and easy-to-use tools, we aim to enhance your development experience, allowing you to focus on creating amazing web solutions.

## Why Use This Template?
This template is tailored to simplify the entire development lifecycle:
- **Efficient Development:** <br>
  Automates the concatenation and deployment of your JavaScript and CSS files.
- **Streamlined Production Transition:** <br>
  Enables a seamless move from development to production with a single command, minimizing manual intervention.
- **Automated Versioning:** <br>
  Each production deployment is automatically versioned, ensuring clarity and control over your project's lifecycle.
- **Continuous Deployment** <br>
  Integrates with Vercel for continuous deployment, keeping your live site always up-to-date with the latest changes.
- **Easy Production Hosting:** <br>
  Utilizes GitHub Pages and jsDelivr for hosting your production-ready assets, offering fast and reliable content delivery.

## Prerequisites
To effectively use this template, you'll need:
- A GitHub account, preferably as part of the Not Another™ team.
- A Vercel account linked to your GitHub for seamless deployment.
- to ensure you set your cloned repository as public to fully utilize GitHub Pages and jsDelivr. <br>
  (for now, until we shift to GitHub Pro)

<br>

## Setup and Usage Instructions
### Step 1: Clone the Template
1) Use the **Use this template** button to create a new repository from this template.
1) Remember to follow the na13- naming convention for consistency and easy identification. <br>
  (E.g., if your project/client name is `Evnex`, set your repository name to `na13-evnex`

### Step 2: Setting Up Continuous Deployment with Vercel
1) Go to your personal Vercel dashboard. <br>
  *[Open Vercel](https://vercel.com/new) (Use this link, if you are logged in)*
1) Import your newly created repository into Vercel.
1) Project settings will get automatically applied. <br>
  Vercel will automatically deploy your changes to a unique URL (based on the GitHub Repository name). <br>
  Pre-defined deployment settings will automatically ensure that only your built assets are served publicly. 

### Step 3: Start Coding!
1) Go back to your newly created repository on GitHub.
2) Press `.` / 'dot' on your keyboard. <br>
   GitHub Codespaces should be launched automatically.
1) Open the Terminal on your GitHub Codespace. 
1) Run `cp hooks/* .git/hooks/` to set up the automated git hooks. <br><br>
   ```
   cp hooks/* .git/hooks/
   ```
1) Make changes in the pre-defined `src/js` and `src/css` directories.
1) Commit and push your changes to the main branch.
2) Vercel will handle the deployment.
   You'll receive `<script>` and `<link>` with Vercel URLs in the terminal for the latest version of your project.

### Step 4: Transitioning to Production
When you're ready to move your project to production:

1) Run `npm run production` in your GitHub Codespace terminal. <br><br>
   ```
   npm run production
   ```
1) This command will build your project. <br>
   It will update the `gh-pages` branch with the latest build and increment the build version number.
1) You'll receive jsDelivr URLs in the terminal for the latest version of your project. <br>
   Replace your old embedded code in your Webflow project for optimal performance and caching.

## Subsequent Development and Updates
1) Continue to make changes and improvements in the src/js and src/css directories.
2) After making changes, commit and push to the main branch as usual.
3) When you're ready for another production deployment, simply run `npm run production` again to update the production version with incremented versioning. <br><br>
   ```
   npm run production
   ```  

## Versioning Strategy
Our template employs a simple versioning strategy for ease of use and clarity:
- Each production deployment increments the version number by 1.
- This ensures each version is unique, easily identifiable, and can be extracted automatically.

## Troubleshooting Common Issues
- **Vercel Deployment Failures**: <br>
  Ensure your Vercel project settings match the structure of your GitHub repository. <br> Check the Vercel deployment logs for specific error messages.
- **Merge Conflicts**: <br>
  When working collaboratively, regularly pull changes from the `main` branch and communicate with your team to avoid overlapping work.
- **Local Server Issues**: <br>
  If the local server does not start, ensure all dependencies are installed with `npm install` and check for any errors in your console.

## Support
For support or to report any issues, please open an issue in this repository or <br>
contact **Druhin (@Not Another™)** through Team Slack or [email](mailto:druhin@na.studio)
