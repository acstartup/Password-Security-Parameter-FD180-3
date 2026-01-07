# Password Security Parameter (FD180: #3/100)

A dynamic password validation web application with real-time feedback and comprehensive security requirements.

## Features
- Real-time password validation as you type
- Visual feedback with green checkmarks and red X's for each requirement
- Password confirmation matching with visual indicators
- Comprehensive validation rules:
  - Minimum 8 characters
  - At least one special symbol (@, !, $, etc.)
  - At least one uppercase letter (A-Z)
  - At least one lowercase letter (a-z)
  - At least one number (0-9)
- Dynamic alert messages showing specific requirements not met
- Confirm password field with color-coded outline (green/red)
- Sign up button with validation on click

## How to Run
1. Open `index.html` in your web browser
2. Enter a password in the "Password" field
3. Watch real-time validation feedback appear below
4. Enter the same password in "Confirm Password" field
5. Click "Button" to attempt sign up
6. If requirements aren't met, an alert will show which ones are missing
7. If all requirements are met, you'll see a success message

## Files
- `index.html` - Main page structure with password input fields and validation UI
- `js/script.js` - Password validation logic and dynamic feedback system
- `src/input.css` - Tailwind CSS configuration
- `dist/output.css` - Compiled Tailwind CSS output

## Tools/Languages
- **JavaScript** - 60%
- **HTML** - 35%
- **CSS (Tailwind)** - 5%

## What I Learned
- `classList.add()` and `classList.remove()` for changing CSS inside JS file. Seperating different actions in classList with (`border-green-500`, `outline-black`)
- Utilizing `.replace` for search and filter (takes out what isn't in the `/[]/`):
  - Detecting special characters with `replace(/[^a-zA-Z0-9\s-_]/, '')`
  - Checking for uppercase letters with `replace(/[A-Z]/)`
  - Validating numbers with `replace(/[0-9]/)`
- Strings & variables in a string utilizng `${text}` front ticks & ${}
- Using Tailwind CSS for responsive UI, `border-...-...`, `outline-...-...`, `w-...`
- More advanced dynamic alerts w/ ``alert(`${text}`)`` & `text += "✓ Lowercase letter (a-z)"`

- Better CS logic thinking
- Better attempt at Clean Code w/ simplifying functions

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!
