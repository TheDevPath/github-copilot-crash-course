# Building a Tech Meme Generator API with Node.js and Express.js

In this tutorial, we'll create a simple REST API that generates random tech memes. We'll use Node.js and Express.js to build the API. This guide not only shows you how to build the API step-by-step but also provides example prompts for using GitHub Copilot Agent to handle parts of the work for you, demonstrating a productive workflow combining manual coding and AI assistance.

## Prerequisites

- Node.js installed on your system.
- Basic knowledge of JavaScript and REST APIs.

## Step 1: Initialize the Project

1. Create a new folder for your project and navigate to it in your terminal.
2. Run the following command to initialize a new Node.js project:

   ```bash
   npm init -y
   ```

   > **Copilot Agent Prompt**: "Generate a command to initialize a Node.js project with default settings."

3. Install Express.js:

   ```bash
   npm install express
   ```

   > **Copilot Agent Prompt**: "Write a command to install Express.js in a Node.js project."

## Step 2: Set Up the Server

1. Create a file named `server.js`.
2. Add the following code to set up a basic Express server:

   ```javascript
   const express = require('express');
   const app = express();
   const PORT = 3000;

   app.get('/', (req, res) => {
     res.send('Welcome to the Tech Meme Generator API!');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

   > **Copilot Agent Prompt**: "Generate a basic Express.js server that listens on port 3000 and has a root endpoint returning a welcome message."

3. Install `nodemon` to automatically restart the server on file changes:

   ```bash
   npm install --save-dev nodemon
   ```

   > **Copilot Agent Prompt**: " Set up nodemon as a development dependency so we don't have to restart the server manually."

4. Update the `package.json` file to include a `dev` script for running the server with `nodemon`:

   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

   > **Copilot Agent Prompt**: "Add a `dev` script to the package.json file to use nodemon for development."

5. Run the server in development mode:

   ```bash
   npm run dev
   ```

   > **Copilot Agent Prompt**: "Write a command to start the server using nodemon."

   Open your browser and navigate to `http://localhost:3000` to see the welcome message.

## Step 3: Create the Meme Endpoint

1. Add a new route to generate random tech memes:

   ```javascript
   const memes = [
     'When you fix a bug and 10 more appear.',
     'Git commit messages be like: "final final version".',
     'Why does it work? I have no idea.',
     'Code never lies, comments sometimes do.',
     'It works on my machine!',
   ];

   app.get('/meme', (req, res) => {
     const randomMeme = memes[Math.floor(Math.random() * memes.length)];
     res.json({ meme: randomMeme });
   });
   ```

   > **Copilot Agent Prompt**: "Write an Express.js route that returns a random item from an array of tech memes as a JSON response."

2. If you don't already have it running, restart the server and test the `/meme` endpoint:

   ```bash
   npm run dev
   ```

   > **Copilot Agent Prompt**: "Generate a command to restart a Node.js server."

   Navigate to `http://localhost:3000/meme` to see a random tech meme.

## Step 4: Generate Tests with GitHub Copilot

1. **Write a Prompt for Copilot**:

   - Open the `server.js` file in your editor.
   - Use the following prompt in Copilot Chat:

     > "Generate unit tests for the `/meme` endpoint in this Express.js app using Jest. Include tests for successful responses and error handling."

2. **Review and Save the Generated Tests**:

   - Copilot will generate a test suite. Review the code for accuracy and completeness.
   - Save the tests in a new file named `server.test.js`.

   Example generated test:

   ```javascript
   const request = require('supertest');
   const app = require('./server');

   describe('GET /meme', () => {
     it('should return a random meme', async () => {
       const response = await request(app).get('/meme');
       expect(response.status).toBe(200);
       expect(response.body).toHaveProperty('meme');
     });

     it('should handle errors gracefully', async () => {
       // Simulate an error scenario if applicable
       // Example: Mock a function to throw an error
       const response = await request(app).get('/meme');
       expect(response.status).not.toBe(500); // Ensure no server error
     });
   });
   ```

3. **Run the Tests**:

   - Install Jest and Supertest if not already installed:

     ```bash
     npm install --save-dev jest supertest
     ```

   - Add a test script to your `package.json` file:

     ```json
     "scripts": {
         "test": "jest"
     }
     ```

   - Run the tests:

     ```bash
     npm test
     ```

4. **Iterate and Improve**:
   - Use Copilot to refine the tests or add more cases as needed.
   - For example, you can prompt Copilot to add tests for edge cases or additional endpoints.

## Step 5: Deploy the API to Hosting via cPanel

1. **Prepare Your Node.js App**:

   - Ensure your app is ready for deployment and all dependencies are installed.
   - Create a `package.json` file with a `start` script to run your app, e.g., `"start": "node server.js"`.

2. **Log in to cPanel**:

   - Access your Hosting cPanel account. [Sign up for Hosting here](https://hosting.com/?aid=60fb4c7d3befc&bid=9eb88ccd).

3. **Set Up Node.js**:

   - In cPanel, go to the "Setup Node.js App" section.
   - Click "Create Application" and configure the following:
     - **Application Root**: The directory where your app is located.
     - **Application URL**: The URL where your app will be accessible.
     - **Application Startup File**: The entry point of your app (e.g., `server.js`).

4. **Upload Your App**:

   - Use the File Manager in cPanel to upload your app files to the specified directory.
     - Alternatively, use FTP to transfer your files.
     - Optionally, you can use Git to deploy your app directly from a repository. See the [Deploy the API Using Git](#deploy-the-api-using-git) section for details.

5. **Install Dependencies**:

   - In the "Setup Node.js App" section, click "Run NPM Install" to install your app's dependencies.

6. **Start Your App**:

   - In the "Setup Node.js App" section, click "Start Application" to launch your app.

7. **Test Your Deployment**:

   - Visit the Application URL to ensure your app is running correctly.

8. **Monitor and Manage**:
   - Use the cPanel interface to restart, stop, or manage your app as needed.

## Step 6: Deploy the API Using Git

1. **Initialize a Git Repository**:

   - Navigate to your project directory in the terminal.
   - Run the following commands to initialize a Git repository and commit your code:

     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```

2. **Create a Remote Repository**:

   - Go to your Git hosting platform (e.g., GitHub, GitLab, Bitbucket).
   - Create a new repository and copy the remote URL.

3. **Add the Remote Repository**:

   - Link your local repository to the remote repository using the following command:

     ```bash
     git remote add origin <REMOTE_URL>
     ```

4. **Push Your Code**:

   - Push your code to the remote repository:

     ```bash
     git branch -M main
     git push -u origin main
     ```

5. **Deploy from Git**:

   - If your hosting provider supports Git-based deployment (e.g., Vercel, or A2 Hosting):
     - Link your repository to the hosting platform.
     - Configure the deployment settings as required.
     - Push updates to the `main` branch to trigger automatic deployments.

6. **Test Your Deployment**:
   - Visit the deployed application URL to ensure everything is working as expected.

## Example Prompts for GitHub Copilot Agent

Here are some more example prompts you can use with the GitHub Copilot Agent to generate components of the Tech Meme Generator API:

### Setting Up the Server

- "Generate a basic Express.js server that listens on port 3000."
- "Create a route for the root endpoint that returns a welcome message."

### Creating the Meme Endpoint

- "Write a route in Express.js that returns a random item from an array of tech memes."
- "Generate a JSON response for the `/meme` endpoint with a random meme."

### Enhancing the API

- "Add query parameters to the `/meme` endpoint to filter memes by category."
- "Implement error handling for invalid query parameters in the API."

### Deployment

- "Generate a configuration file for deploying this API to Heroku."
- "Write a script to start the server using a `start` command in `package.json`."

### Testing

- "Create a test case for the `/meme` endpoint using Jest."
- "Write a mock test for the random meme generator function."

Use these prompts in the Copilot Agent to quickly scaffold and enhance your API components.

## Conclusion

You've successfully built a Tech Meme Generator API using Node.js and Express.js! Keep experimenting and adding new features.
