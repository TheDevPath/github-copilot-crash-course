# GitHub Copilot Crash Course

Welcome to the GitHub Copilot Crash Course! This guide will help you become a power user of GitHub Copilot in Visual Studio Code. By the end of this course, you'll be familiar with its key features, including the new agent feature, and how to use them effectively.

## Table of Contents

1. [Introduction to GitHub Copilot](#introduction-to-github-copilot)
2. [Setting Up GitHub Copilot in VS Code](#setting-up-github-copilot-in-vs-code)
3. [Key Features of GitHub Copilot](#key-features-of-github-copilot)
4. [Using the New Agent Feature](#using-the-new-agent-feature)
5. [Tips and Tricks for Power Users](#tips-and-tricks-for-power-users)
6. [Best Practices for Using GitHub Copilot](#best-practices-for-using-github-copilot)
7. [Writing Tests with GitHub Copilot](#writing-tests-with-github-copilot)
8. [Practice Exercises](#practice-exercises)
9. [Conclusion](#conclusion)

---

## Introduction to GitHub Copilot

GitHub Copilot is an AI-powered code completion tool that helps you write code faster and smarter. It suggests entire lines or blocks of code based on your comments and existing code. This course is designed for developers of all levels who want to maximize their productivity with Copilot.

## Setting Up GitHub Copilot in VS Code

1. Install the GitHub Copilot extension from the VS Code marketplace.
2. Sign in with your GitHub account.
3. Enable Copilot in your settings.
4. Enable Copilot Chat: Ensure that Copilot Chat is activated in your settings to access interactive AI-powered assistance directly within VS Code.

## Key Features of GitHub Copilot

- **Code Suggestions**: Get real-time code suggestions as you type.
- **Context Awareness**: Copilot understands the context of your code to provide relevant suggestions.
- **Multi-Language Support**: Works with a variety of programming languages.
- **Copilot Chat**: Interact with Copilot through a chat interface to ask questions, request code explanations, or get help with debugging.

## Using the New Agent Feature

The new agent feature in GitHub Copilot takes productivity to the next level by:

- Allowing you to interact with Copilot using natural language commands.
- Automating repetitive tasks and workflows.
- Providing intelligent insights and suggestions beyond code completion.

Need help getting agent mode set up? [Check out the setup guide](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode).

### How to Use the Agent Feature

1. Open the command palette in VS Code.
2. Search for "Copilot Agent" and activate it.
3. Use natural language to ask questions or request actions, e.g., "Generate a function to sort an array."
4. Iterate on Suggestions: If the agent's response isn't perfect, refine your prompt or ask for improvements. For example, "Can you optimize this function for performance?"
5. Use Contextual Prompts: Reference existing code or files in your workspace to give the agent more context. For example, "Refactor the function in `server.js` to improve readability."
6. Explore Beyond Code: Use the agent for non-code tasks like generating documentation, creating configuration files, or even writing test cases.
7. Combine with Manual Edits: Use the agent's suggestions as a starting point and refine them manually to suit your specific needs.

## Tips and Tricks for Power Users

- Use comments to guide Copilot's suggestions.
- **Be Specific with Prompts**: Provide detailed and specific instructions to Copilot for better results. For example, instead of saying "Write a function," specify "Write a function to calculate the sum of an array."
- Leverage keyboard shortcuts for faster interactions. [Check out the Copilot Cheat Sheet](./copilot-cheat-sheet.md).
- Combine Copilot with other VS Code extensions for enhanced productivity.
- **Add Contexts**: Provide meaningful comments or code snippets to give Copilot more context, improving the relevance of its suggestions.
- **Add the Codebase to Context**: Use the context menu to include the entire codebase, allowing Copilot to understand your project's structure, patterns, and relationships across files. This enhances the relevance and accuracy of its suggestions.
- **MCP Servers**: Use Copilot to scaffold Model Context Protocol (MCP) servers by prompting it to generate boilerplate code or specific server components.
- **Use Slash Commands in Copilot Chat**: Leverage commands like `/generate`, `/explain`, `/refactor`, and `/debug` to enhance your workflow and get targeted assistance.
- **Use # Commands in Copilot Chat**: Leverage `#` commands to provide inline instructions or context for Copilot. For example, use `# TODO: Add error handling` to guide Copilot's suggestions.
- **Version Control Awareness**: Use Copilot to assist with writing clear and concise commit messages or understanding diffs in version control systems like Git. For example, you can prompt Copilot to "Generate a commit message summarizing these changes."
- **Team Collaboration**: Leverage Copilot in pair programming sessions or code reviews to quickly generate suggestions, refactor code, or explain complex logic to your teammates.
- **Security Awareness**: Ensure that Copilot-generated code adheres to security best practices. Always review suggestions for potential vulnerabilities, such as SQL injection or improper input validation.
- **Use the PRD Template**: For large projects, use our [Product Requirements Document (PRD) Template](./prd-template.md) to define and organize your project requirements effectively.
- **Explore the Copilot Chat Cookbook**: Learn advanced techniques and workflows with the [Copilot Chat Cookbook](https://docs.github.com/en/copilot/copilot-chat-cookbook).

## Best Practices for Using GitHub Copilot

- **Choose the Right Tool**: Use Copilot code completions for repetitive tasks and Copilot Chat for answering questions or generating large sections of code.
- **Create Thoughtful Prompts**: Be specific and break down complex tasks into smaller, manageable prompts.
- **Validate Suggestions**: Always review Copilot's suggestions for accuracy, security, and maintainability.
- **Provide Context**: Open relevant files and close irrelevant ones to help Copilot focus on the task at hand.
- **Stay Updated**: Regularly check for new features and improvements in Copilot.

## Writing Tests with GitHub Copilot

- **Unit Tests**: Use Copilot to generate unit tests for individual functions or methods. Provide clear prompts and review the generated tests for edge cases and completeness.
- **Integration Tests**: Leverage Copilot to write tests that verify interactions between components. Use mocks to simulate external systems.
- **Slash Commands**: Use the `/tests` command in Copilot Chat to quickly generate test suites.
- **Provide Examples**: Open existing test files to give Copilot context about the testing framework and style.

## Practice Exercises

1. Write a function to calculate the factorial of a number using Copilot. This exercise helps you practice algorithmic problem-solving with Copilot.
2. **Learn by Example**: Follow our [Tech Meme Generator API Tutorial](./tech-meme-generator-tutorial.md) to see how Copilot can assist in building a real-world project.
3. Use the agent feature to refactor a piece of code. [Follow the Tech Meme Generator API Tutorial](./tech-meme-generator-tutorial.md) for a practical example.

## Conclusion

Congratulations! You've completed the GitHub Copilot Crash Course. Keep practicing and exploring to unlock the full potential of GitHub Copilot.
