# GitHub Copilot Cheat Sheet

Boost your productivity with these essential keyboard shortcuts for GitHub Copilot in Visual Studio Code:

## General Shortcuts

- **Trigger Copilot Suggestions**: `Ctrl + Space` (Windows/Linux) or `Cmd + Space` (macOS)
- **Accept Suggestion**: `Tab`
- **Reject Suggestion**: `Esc`
- **Open Chat View**: `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Shift + I` (macOS)
- **Open Inline Chat**: `Cmd + I` (macOS) or `Ctrl + Alt + I` (Windows/Linux)

## Navigation

- **Cycle Through Suggestions**: `Alt + ]` (Windows/Linux) or `Option + ]` (macOS)
- **Cycle Backward Through Suggestions**: `Alt + [` (Windows/Linux) or `Option + [` (macOS)

## Agent Feature

- **Open Command Palette**: `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS)
- **Activate Copilot Agent**: Search for "Copilot Agent" in the Command Palette.

## Editing

- **Inline Suggestions**: Start typing and Copilot will suggest inline completions.
- **Block Suggestions**: Write a comment describing the code you need, and Copilot will generate a block of code.

## Using Slash Commands in Copilot Chat

- **Accessing Commands**: Type `/` in the Copilot chat to see a list of available commands.
- **Code Generation**: Use commands like `/generate` to request specific code snippets or solutions.
- **Explain Code**: Use `/explain` to get a detailed explanation of a selected piece of code.
- **Refactor Code**: Use `/refactor` to request improvements or optimizations for your code.
- **Debugging Assistance**: Use `/debug` to ask for help identifying and fixing issues in your code.

## Using # Commands in Copilot Chat

- **Inline Instructions**: Use `#` commands to provide inline guidance or context for Copilot. For example, `# TODO: Add error handling` can help Copilot generate relevant suggestions.
- **Annotations**: Use `#` to annotate code and clarify its purpose, improving Copilot's understanding of your intent.
- **Command Menu**: When you type `#` in Copilot Chat, a menu may appear with options for inline commands or annotations. These options allow you to:
  - Add TODOs or refactoring notes.
  - Provide context for specific code blocks.
  - Guide Copilot's behavior with targeted instructions.

## Writing Good Prompts

- Be specific: Provide detailed instructions to guide Copilot effectively. For example, instead of "Write a function," say "Write a function to calculate the sum of an array."
- Use context: Reference existing code or describe the desired outcome clearly.
- Iterate: Refine your prompt if the initial suggestion isn't perfect.

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

## Tips

- Use comments to guide Copilot's suggestions.
- Combine Copilot with other extensions for enhanced workflows.

## Further Resources

- **Copilot Chat Cookbook**: Learn advanced techniques and workflows with the [Copilot Chat Cookbook](https://docs.github.com/en/copilot/copilot-chat-cookbook).
