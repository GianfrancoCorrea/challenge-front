## Getting Started
Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies

- [Next.js](https://nextjs.org/) (React framework)
- [TypeScript](https://www.typescriptlang.org/) (static typing)
- [Redux-Toolkit](https://redux-toolkit.js.org/) (state management)
- [Styled Components](https://styled-components.com/) (CSS-in-JS)
- [ESLint](https://eslint.org/) (code linting)
- [Axios](https://axios-http.com/) (HTTP requests)
- [React Hook Form](https://react-hook-form.com/) (form handling)
- [Yup](https://www.npmjs.com/package/yup/) (form validation)
- [Frame Motion](https://www.framer.com/motion/) (animations)

## Project Structure

```
.(src) 
├── app (main app)
│   ├── redux (redux store, slices, etc)
│   ├── components (reusable components)
│   │   ├── [component] (component folder)
│   │   │   ├── index.tsx (exported component)
│   │   │   ├── [component].tsx (component)
│   │   │   ├── [component].styled.tsx (styled component)
│   ├── [page] (login page)
│   │    ├── components (page component folder)
│   │    │   ├── [component].tsx (component)
│   │    │   ├── [component].styled.tsx (styled component)
│   │    ├── page.tsx (page component from Next.js)
│   ├── page.tsx (main page)
├── shared (shared utilities)
│   ├── assets (images, icons, etc)
│   ├── components (reusable components)
│   ├── hooks (custom hooks)
│   ├── interfaces (typescript interfaces)
│   ├── services (api services)
│   ├── constants.ts (constants)

```

## Features

- [x] Login (local storage | yup validation | form handling)
- [x] Logout
- [x] User list (animations)
- [x] User details (sidebar | animations)
- [x] User details edit
- [x] User posts (animations)
- [x] User posts delete (re-order animation)
- [] User albums

States handled with Redux-Toolkit:

- [x] Users
- [x] Posts
- [] Albums

## Screenshots

![Login](/screenshots/Login.png?raw=true "Login")
![User List](/screenshots/UserList.png?raw=true "User List")
![User Details](/screenshots/UserDetails.png?raw=true "User Details")
