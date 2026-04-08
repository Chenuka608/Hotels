# Contributing to LuxeStay

Thank you for your interest in contributing to the LuxeStay luxury hotel showcase website!

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies with `npm install`
4. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Commit using the [commit convention](./COMMIT_CONVENTION.md)
7. Push to your fork and submit a pull request

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── layout.tsx   # Root layout with navbar
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── components/       # Reusable React components
│   └── Navbar.tsx   # Navigation component
└── lib/             # Utility functions and helpers
```

## Coding Standards

- Use TypeScript for all components
- Follow ES6+ conventions
- Use Tailwind CSS for styling
- Ensure your code is responsive and mobile-friendly
- Write clean, self-documenting code with meaningful variable names

## Commit Guidelines

Please follow our [commit convention](./COMMIT_CONVENTION.md) for all commits. This helps maintain a clean and readable git history.

## Code Review

All pull requests will be reviewed for:
- Code quality and consistency
- Adherence to commit conventions
- Proper TypeScript typing
- Mobile responsiveness
- Performance implications
- Documentation updates

## Questions?

Feel free to open an issue with the "question" label for any questions about the project or development process.

Thank you for contributing!
