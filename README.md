# Flowly Landing Page

A clean and responsive landing page built as part of a technical home assignment.

The project includes a contact form with client-side and server-side validation, connected to Airtable through a secure Next.js API route.

## Features

- Responsive landing page
- Clean and modern UI
- Responsive navigation
- Features section
- Contact form
- Client-side form validation
- Server-side validation
- Loading, success, and error states
- Airtable integration
- Secure environment variables
- Next.js API Route
- Responsive design for desktop and mobile

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- Airtable API

## 📁 Project Structure

```text
src/
└── app/
    ├── api/
    │   └── contact/
    │       └── route.js
    │
    ├── components/
    │   ├── ContactForm.jsx
    │   ├── Features.jsx
    │   ├── Footer.jsx
    │   └── NavBar.jsx
    │
    ├── globals.css
    ├── layout.js
    └── page.js

.env.local
README.md
```

## Getting Started
### Clone the repository

```
git clone https://github.com/MiriHarush/flowly-landing.git
cd flowly-landing
```
### Install dependencies
```
npm i 
```
### Configure environment variables
##### Create a .env.local file in the project root:

```
AIRTABLE_TOKEN=your_airtable_token
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_ID=your_airtable_table_id
```
#### Replace the placeholder values with your own Airtable credentials.

### Run the development server
``` 
npm run dev 
```
### open 
```
http://localhost:3000
```

## Form Flow

- User submits the form
        
- Client-side validation
        
- POST /api/contact
        
- Server-side validation
    
- Airtable API
        
- Lead created in Airtable
        
- Success / Error response

## API 

### Create Contact
```
POST /api/contact
```
#### Request body:

```
{
  "name": "Israel Israeli",
  "email": "israel@example.com",
  "phone": "0501234567"
}
```
## Validation

The form validates:

- Name is required
- Email is required
- Email must have a valid format
- Email cannot contain Hebrew characters
- Phone number is required
- Phone number must contain digits only
- Phone number must contain 9–10 digits

Validation is implemented on both the client and server.

## Security
The Airtable Personal Access Token is stored server-side using environment variables.

The client never has direct access to the Airtable credentials.

The API route validates incoming data before sending it to Airtable.

## Responsive Design
The landing page is designed to work across:

- Desktop
- Tablet
- Mobile