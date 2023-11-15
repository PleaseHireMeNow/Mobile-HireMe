# Hire Me Project Structure Mobile

  assets
     adaptive-icon.png
     favicon.png
     icon.png
     splash.png
  components
    Features
      Auth
         LoginForm.tsx
      Session
         QuestionItem.tsx
         QuestionList.tsx
      UserDashboard
         UserAvatar.tsx
    Layout
       Footer.tsx
       Header.tsx
       MainLayout.tsx
       SessionLayout.tsx
    Ui
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
   .gitignore
   app.json
   App.tsx
   babel.config.js
   package-lock.json
   package.json
   project-structure-mobile.md
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
