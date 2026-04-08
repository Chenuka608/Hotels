# Commit Convention Guide

This project follows a structured commit message convention to maintain clean and readable git history.

## Format

```
<type>: <subject>

<body>

<footer>
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code changes that neither fix bugs nor add features
- **perf**: Code changes that improve performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to build process, dependencies, or tools

## Subject Line

- Use the imperative, present tense: "add" not "added" or "adds"
- Don't capitalize first letter
- No period (.) at the end
- Maximum 50 characters

## Body

- Use the imperative, present tense
- Include motivation for the change
- Explain what and why, not how
- Lines should be wrapped at 72 characters
- Separate from subject with a blank line

## Footer

- Reference issue tickets (e.g., `Closes #42`)
- List breaking changes

## Examples

```
feat: add hotel search functionality

Add ability to search hotels by location and price range.
Implements full-text search using Algolia API.

Closes #123
```

```
fix: navbar mobile menu not closing on navigation

The mobile hamburger menu remained open after clicking a link.
Added onClick handler to close menu when navigation item is clicked.
```

```
chore: update dependencies

Update Next.js to v14 and Tailwind CSS to v3.4
```
