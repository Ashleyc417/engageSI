# EngageSI

## About

EngageSI is a web application tailored for California State University, Fullerton's Supplemental Instruction (SI) Program. It provides an intuitive platform designed to streamline session management, boost student participation, and track SI engagement. 

## Tech Stack

EngageSI is built using the following technologies:

- SvelteKit
- JavaScript
- Supabase

## Setup / Development

Create a [Supabase](https://supabase.com/) project. You will need to create the `user_profile`, `user_si_sessions` and `attendance_logs` yourself in Supabase.

Clone the repository and install all the dependencies:

```bash
git clone https://github.com/Ashleyc417/engageSI
cd engageSI
npm install
```

Create a new `.env`, following the `.env.example` template for the keys needed to connect to Supabase:

```env
PUBLIC_SUPABASE_URL=""
PUBLIC_SUPABASE_ANON_KEY=""
```

Then start the development process:

```bash
npm run dev
```

To build and start in production mode:

```bash
npm run build
npm run preview
```