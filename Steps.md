# BuyIt-DriveIt Project Setup Guide

This guide provides step-by-step instructions to set up a modern web application using Next.js, ShadCN UI, Clerk authentication, Supabase backend, and Arcjet for security. Follow these sequential steps to build a similar project.

## Project Initialization

1. Create a new Next.js application:
   ```bash
   npx create-next-app@latest buyit_drivit
   ```

## UI Framework Setup

2. Set up ShadCN UI for modern component styling:
   - Visit [ShadCN UI Documentation](https://ui.shadcn.com/docs/installation/next)
   - Follow their installation guide for Next.js
   - Install required dependencies
   - Set up the components system

## Authentication Integration

3. Implement Clerk for authentication:
   - Create an account at [Clerk Dashboard](https://dashboard.clerk.com/apps)
   - Create a new application in the Clerk dashboard
   - Install Clerk dependencies:
     ```bash
     npm install @clerk/nextjs
     ```
   - Configure environment variables with your Clerk API keys
   - Set up authentication components and middleware

## Basic Layout Structure

4. Modify the application layout:

   - Edit `./app/layout.ts` to create your base layout structure
   - Implement ClerkProvider to handle authentication context
   - Define metadata and other layout essentials

5. Create reusable components:
   - Develop Header component with navigation and authentication state
   - Create Footer component with site information
   - Import both components into your layout file

## Backend as a Service

6. Set up Supabase as your Backend as a Service:
   - Create an account at [Supabase Dashboard](https://supabase.com/)
   - Create a new project
   - Set up your database schema and tables
   - Install Supabase client:
     ```bash
     npm install @supabase/supabase-js
     ```
   - Configure environment variables with your Supabase URL and keys
   - Create service files to handle database operations

## Security Enhancement

7. Implement Arcjet for rate-limiting and security:
   - Sign up at [Arcjet](https://arcjet.com/)
   - Install Arcjet dependencies:
     ```bash
     npm install @arcjet/next
     ```
   - Configure Arcjet middleware to protect your API routes and pages
   - Set up rate-limiting rules and security policies

## UI Creation with AI Assistance

8. Use Create.xyz to design complex page layouts:

   - Visit [Create](https://www.create.xyz/)
   - Design your pages using their AI-powered interface
   - Once satisfied with a page design, publish it

9. Integrate AI-created pages into your application:

   - Locate the "Embed Project" tab in Create.xyz
   - Copy the iframe embed code
   - Create the corresponding page in your Next.js app (e.g., `waitlist/page.tsx`)
   - Paste the iframe code into your page component

10. Configure security for embedded content:

    - Edit `next.config.mjs` to allow iframe embedding:

    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      async headers() {
        return [
          {
            source: "/embed",
            headers: [
              {
                key: "Content-Security-Policy",
                value:
                  "frame-src 'self' https://buyit-drivit-waitlist.created.app",
              },
            ],
          },
        ];
      },
    };

    export default nextConfig;
    ```

11. Install [Prisma](https://www.prisma.io/): `npm i -D prisma` && `npm i @prisma/client`

    - Initialize prisma: `npx prisma init` && `npx prisma generate`
    - After initializing, go to `prisma/schema.prisma`, since we are using Supabase we will have to include the DIRECT_URL from Supabase as well.
    - Database Design using [Eraser](https://www.eraser.io/):

      - Admin Management System, here we create a table for this because we want the flexibility of adding more Dealers in the future instead of coupling the entire system to only one dealer:

        - DealershipInfo(info about the dealer) - One-to-One, Composite Relationship - WorkingHours

      - Client-Side System:
        - User(the users) - One-to-One, Composite Relationship - UserSavedCar
        - User(the users) - One-to-One, Composite Relationship - TestDriveBooking
        - Car(the cars) - One-to-One, Composite Relationship - UserSavedCar
        - Car(the cars) - One-to-One, Composite Relationship - TestDriveBooking

    - Then create the migration to Supabase with `npx prisma migrate dev --name nameOfMigration`
    - Create the prismaClient, your should import PrismaClient from the folder generated from running `npx prisma generate`

    ```jsx
    import { PrismaClient } from "./generated/prisma/client";
    ```

12. Using [Google Gemini](), go to the site and generate an API Key and paste in .env file.
    - Install the packages `npm i @google/generative-ai`

## Final Steps

11. Test your application thoroughly:

    - Verify authentication flows
    - Test database operations
    - Ensure embedded content displays correctly
    - Check responsive design across devices

12. Deploy your application:
    - Choose a hosting provider (Vercel, Netlify, etc.)
    - Configure environment variables in your hosting platform
    - Deploy your application

By following these steps sequentially, you'll create a modern web application with authentication, database functionality, security measures, and professionally designed UI components.
