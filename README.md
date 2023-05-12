## Start the project
Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production deployment

[challenge-front-nine.vercel.app](challenge-front-nine.vercel.app)

## Technologies Used

- [Next.js](https://nextjs.org/) (React framework)
- [TypeScript](https://www.typescriptlang.org/) (static typing)
- [Redux-Toolkit](https://redux-toolkit.js.org/) (state management)
- [Styled Components](https://styled-components.com/) (CSS-in-JS)
- [ESLint](https://eslint.org/) (code linting)
- [Axios](https://axios-http.com/) (HTTP requests)
- [React Hook Form](https://react-hook-form.com/) (form handling)
- [Yup](https://www.npmjs.com/package/yup/) (form validation)
- [Frame Motion](https://www.framer.com/motion/) (animations)

## Project Structure (src)

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

## Features Implemented

- [x] Login (local storage | yup validation | form handling)
- [x] Logout
- [x] User list (animations)
- [x] User details (sidebar | animations)
- [x] User details edit
- [x] User posts (animations)
- [x] User posts delete (re-order animation)
- [ ] User albums

States handled with Redux-Toolkit:

- [x] Users
- [x] Posts
- [ ] Albums

Requests handled with Axios:
- [x] [reqres](https://reqres.in/) (login | users)
- [x] [jsonplaceholder](https://jsonplaceholder.typicode.com/) (posts)

## Screenshots

![Login](/screenshots/Login.png "Login")
![User List](/screenshots/UserList.png "User List")
![User Details](/screenshots/UserDetails.png "User Details")

## Improvements

- [x] add loading states
- [x] add more animations
- [x] mobile responsive
- [x] session in local storage
- [ ] add tests
- [ ] error handling
- [ ] remove next.js default styles (I kept those to save time)
