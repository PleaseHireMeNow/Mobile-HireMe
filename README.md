# Mobile-Hire Me

## Table of Contents

- [About](#about)
- [Project Structure](#projectstructure)

## About

This is the mobile repository for Hire Me, a application that uses flash cards to help you
train for your next tech interview.

## Project Structure

### 📁 `api`

- `base.ts` determines base URL path for requests, creates requests obj.
- `*.ts` configure requests to a specific data type like `User`, `Question`, etc.
- `agent.ts` encapsulates all requests and exports them to be used in components.

### 📁 `app`

- Contains pages for app. If a file is not prepended with a `_` then it is a page
- Uses expo router. Expo router uses the file path to determine the 'url', which in this case
  the url is just used for routing in mobile app.
- Files prepended with a `_` usually indicate a layout component.
- The top level `_layout.tsx` is the global layout where we can wrap providers, and other
  wrappers that should be available globally.

### 📁 `assets`

- Static assets, fonts, images, icons, etc.

### 📁 `components`

#### 📁 `ui`

- Contains components that are not specific to any feature and can be used anywhere in the app.
  Think buttons, dropdowns, modals, etc.

#### 📁 `features`

- Components specific to a feature like logging in, sessions, user dashboards, etc.
- Example components could be a `LoginForm.tsx`, `QuestionItem.tsx`, `QuestionList.tsx`, `UserAvatar.tsx`, etc.

### 📁 `constants`

- Global variables that don't change throughout the app.
- Example could be color scheme or icon settings.

### 📁 `context`

- Contains reacts context providers used throughout app.

### 📁 `types`

- Typescript types that are needed globally across multiple components.
- `models` - app objects like `User`, `Question`, etc.
- `dtos` - Data Transfer Objects, specific to a request or response data object.
