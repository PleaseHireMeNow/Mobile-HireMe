# Hire Me Project Structure Mobile

  api
     account-requests.ts
     agent.ts
     base.ts
  assets
     adaptive-icon.png
     favicon.png
     icon.png
     splash.png
  components
    features
      Auth
         LoginForm.tsx
      Session
         QuestionItem.tsx
         QuestionList.tsx
      UserDashboard
         UserAvatar.tsx
    layout
       Footer.tsx
       Header.tsx
       MainLayout.tsx
       SessionLayout.tsx
    ui
      Buttons
         MainButton.tsx
         SecondaryButton.tsx
      Dropdowns
      Inputs
      Modals
  pages
     HomePage.tsx
     LoginPage.tsx
     SessionPage.tsx
     UserDashboardPage.tsx
  types
    dtos
       UserDto.ts
    models
       Question.ts
       Session.ts
       User.ts
    requests
       ErrorResponse.ts
       Response.ts
   .gitignore
   app.json
   App.tsx
   babel.config.js
   package-lock.json
   package.json
   ✗ project-structure-mobile.md
   tsconfig.json

## Root Level 
Contains `App.tsx` where we render the react app. 
Routing either needs to go into `App.tsx` or possibly a routes folder, this is undecided as of now.
Root level also contains `tsconfig`, should contain a `.prettierrc`, eventually a `tailwindconfig`
once we add tailwind, and any other config files needed.

## Pages

Simple, contains the components for each page. Each page component is responsible for the structure of the page.
Page components are also responsible for the logic needed and decide which child components should be rendered.

## Components 
### features
The Features directory has components tied to a feature that are re usable but only re usable for a certain 
feature. For example a `LoginForm` or a `QuestionList` are good to separate from the page component for further
abstraction, but don't relate to other parts of the app, and cannot be reused in that way.

### Layout
Layout components are wrappers or components contained on the outer edge of the wrapper.
Example: 

`Some Page Component`
```typescriptreact
<MainLayout>
    <...pageContent />
</MainLayout>
```

`Main Layout Component`
```typescriptreact
<div className="...tailwindClasses" >
    <Header />
        {children}
    <Footer />
</div>
```

### Ui 
These Components can be reused and are not dependent on feature. Buttons, that take a list of props
and can be customized but also contain base styles and javascript, or a dropdown or modal could
be other examples of this, they don't care about what information or action items are given, 
but they take care of the style, javascript necessary for interactivity, and accessibility
(especially important on dropdowns, or modals).


## API CALLS
  api
     account-requests.ts
     agent.ts
     base.ts

API Calls we will create objects which contain the request and error 
handling can be taken care of in base.ts.

Example of `base.ts`

```typescript
import axios, { AxiosError, AxiosResponse } from 'axios';
import { store } from '../store/store.ts';
import { USER_ACTIONS } from '../store/actions/userActions.ts';

// set default base
axios.defaults.baseURL =
  import.meta.env.MODE === 'development' ? 'http://localhost:5000/api' : '/api';
axios.defaults.withCredentials = true;
// parse data from response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// attach token to axios request if there is one
axios.interceptors.request.use((config) => {
  const token = store.getState().common.token;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// intercept the response
axios.interceptors.response.use(
  (response) => response,
  (e: AxiosError) => {
    const { data, status } = e.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.error) {
          console.error(data.error);
          throw data.error;
        } else {
          throw new Error('Bad Request');
        }
      case 401:
        if (status === 401 && localStorage.getItem('jwt')) {
          store.dispatch({ type: USER_ACTIONS.LOGOUT_ASYNC });
        }
        if (data.error) {
          console.error(data.error);
        }
        break;
    }

    return Promise.reject(data.error);
  }
);
export const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};
```

We can this import this into a file like `account-requests.ts`
```typescript
import { requests } from './base.ts';
import { User, UserLogin, UserRegister } from '../models/user.ts';

// user specific requests
export const Account = {
  getCurrentUser: () => requests.get<User>('/account'),
  login: (user: UserLogin) => requests.post<User>('/account/login', user),
  register: (user: UserRegister) =>
    requests.post<User>('/account/register', user),
  refreshToken: () => requests.post<User>('/account/refresh-token', {}),
};
```

And finally we import each request type object into `agent.ts`
```typescript
import { Account } from './account-requests.ts';
import { Question } from './question-requests.ts'; // other request objects
import { Session } from './session-requests.ts';

const agent = {
  Account,
  Question,
  Session
};

export default agent;
```

Then using the request

```typescript
import agent from '../../api/agent.ts'

export default function SomeComponent() {
    useEffect(() => {
        agent.Account.login(user)
            .then(user => setUser(user))
            .catch(e => setError(e))
        }, [])
}
```

## Types 

Types are split into 3 folders:
1. `dtos` Stands for data transfer object, this might be a different object format then what we shape it into after requests.
2. `models` Models our entities, for example a user or a question:
```typescript
interface User {
    username: string;
    email: string;
    session: Session;
    history: History;
}

interface Question {
    question: string;
    answer: string;
    isReviewed: boolean;
}
```
3. Requests the shape of our http request responses 
```typescript
interface Response<T> {
    meta: string;
    responseCode: string | number;
    data: T
}
```

Finally global state needs to be decided on


