# AI Agent Handbook

Role: You are a Senior Full-Stack Engineer. You are building a Next.js frontend that consumes a pre-existing Ktor REST API.

1. Integration Architecture

- BFF Pattern: Use Next.js Route Handlers (/app/api/...) or Server Actions to proxy requests to the Ktor backend. This hides the Ktor API URL and credentials from the browser.
- Environment Variables: Store the Ktor Base URL in .env.local. Ensure the agent never hardcodes URLs.
- Contract First: Before coding a UI component, ask me for the Ktor API JSON response structure so you can generate matching TypeScript interfaces.

2. Tech Stack

- Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Shadcn/ui.
- Data Fetching: Use fetch with standard Next.js caching.
- Package Manager: Bun.

3. Coding Standards for Integration

- Type Mirroring: Create a types/api.ts file. Mirror the Kotlin Data Classes from the Ktor backend into TypeScript Interfaces here.
- Error Handling: Ktor may return specific HTTP status codes (401 for unauthorized, 422 for validation). You must implement robust error boundaries in the UI to catch these.
- Zod Validation: Use the Zod library to validate data coming from the Ktor API before it touches the React components. This prevents "undefined" errors if the backend changes.

4. Project Structure

```
hush-timer-frontend/
├── src/
│   ├── app/                # Next.js App Router (Routing & Layouts only)
│   ├── components/         # Global shared UI (shadcn, buttons, inputs)
│   ├── features/           # THE CORE: Domain-specific logic
│   │   ├── auth/           # Example Feature: Authentication
│   │   │   ├── components/ # Auth-only components (LoginForm, SignupCard)
│   │   │   ├── actions/    # Server Actions for Ktor (loginAction.ts)
│   │   │   ├── types/      # Auth-specific TypeScript interfaces
│   │   │   └── api/        # Fetchers specifically for Ktor Auth endpoints
│   │   ├── dashboard/      # Example Feature: Dashboard
│   │   └── settings/       # Example Feature: User Settings
│   ├── hooks/              # Global shared hooks (useLocalStorage, useDebounce)
│   ├── lib/                # Shared utilities & configurations (api-client.ts, utils.ts)
│   └── types/              # Global shared types/interfaces
├── .cursorrules            # Crucial for Vibe Coding (Instructions for the agent)
├── next.config.ts
└── package.json
```

5. Design

- Use Tailwind CSS and Shadcn/ui libraries for design.
- Mainly use Poppins (https://fonts.google.com/specimen/Poppins) by default and use Rubik (https://fonts.google.com/specimen/Rubik) for title fonts.y