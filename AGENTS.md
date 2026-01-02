# AI Agent Handbook

Role: You are a Senior Full-Stack Engineer. You are building a Next.js frontend that consumes a pre-existing Ktor REST API.

### Integration Architecture

- BFF Pattern: Use Next.js Route Handlers (/app/api/...) or Server Actions to proxy requests to the Ktor backend. This hides the Ktor API URL and credentials from the browser.
- Environment Variables: Store the Ktor Base URL in .env.local. Ensure the agent never hardcodes URLs.
- Contract First: Before coding a UI component, ask me for the Ktor API JSON response structure so you can generate matching TypeScript interfaces.

### Tech Stack

- Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Shadcn/ui.
- Data Fetching: Use fetch with standard Next.js caching.
- Package Manager: Bun.
- UI Design: Tailwind V4 for CSS and Shadcn/ui for UI components.

### Project Structure

```text=
hush-timer-frontend/
├── src/
│   ├── app/                # Next.js App Router (Routing & Layouts only)
│   │   ├── auth/           # Example Feature: Authentication
│   │   │   ├── components/ # Auth-only components (LoginForm, SignupCard)
│   │   │   ├── actions/    # Server Actions for Ktor (loginAction.ts)
│   │   │   ├── types/      # Auth-specific TypeScript interfaces
│   │   │   └── api/        # Fetchers specifically for Ktor Auth endpoints
│   │   ├── dashboard/      # Example Feature: Dashboard
│   │   └── settings/       # Example Feature: User Settings
│   ├── components/         # Global shared UI (shadcn, buttons, inputs)
│   ├── hooks/              # Global shared hooks (useLocalStorage, useDebounce)
│   ├── lib/                # Shared utilities & configurations (api-client.ts, utils.ts)
│   └── types/              # Global shared types/interfaces
├── .cursorrules            # Crucial for Vibe Coding (Instructions for the agent)
├── next.config.ts
└── package.json
```

### Coding Standards for Integration

- Type Mirroring: Create a types/api.ts file. Mirror the Kotlin Data Classes from the Ktor backend into TypeScript Interfaces here.
- Error Handling: Ktor may return specific HTTP status codes (401 for unauthorized, 422 for validation). You must implement robust error boundaries in the UI to catch these.
- Zod Validation: Use the Zod library to validate data coming from the Ktor API before it touches the React components. This prevents "undefined" errors if the backend changes.

### Routing

1. File-System Routing Structure
   Directory: All routes must live in src/app.

Thin Routes: Keep page.tsx files minimal. Their primary job is to fetch data and render a component from the corresponding src/features/[feature-name] directory.

Dynamic Segments: Use square brackets for dynamic routes (e.g., src/app/projects/[id]/page.tsx). Always await params in these components.

Encapsulated Layouts: Use layout.tsx to wrap pages with shared UI (Sidebars, Navbars). UI in layouts should not re-render on nested navigation.

2. Navigation Standards
   Internal Links: Never use standard <a> tags for internal navigation. Always use the next/link component to enable prefetching and client-side transitions.

Client-Side Hooks: Use next/navigation exclusively for routing hooks.

Use useRouter() for programmatic navigation (e.g., router.push()).

Use usePathname() for active link styling.

Use useSearchParams() for handling URL query parameters.

External Links: Use <a> tags with target="\_blank" rel="noopener noreferrer" for external websites only.

3. Data Fetching & Performance
   Server Components First: Prefer Server Components for data fetching. Fetch data from the Ktor backend directly within the page.tsx or a Server Component to eliminate client-side "jank" and reduce bundle size.

Perceived Performance: For every top-level or "main" route, you must create a loading.tsx file.

This file must use Shadcn UI Skeleton components to create a layout that mirrors the actual page content.

Error Handling: Implement error.tsx at the route level to gracefully handle Ktor API failures (e.g., 404 or 500 errors).

4. Ktor Integration via Navigation
   When navigating to a dynamic route (e.g., /project/123), the Server Component should initiate the fetch to the Ktor API immediately.

Use revalidatePath or revalidateTag within Server Actions when data is mutated to ensure the navigation shows the most up-to-date information from the backend.
