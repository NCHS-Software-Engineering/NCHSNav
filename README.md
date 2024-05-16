# NCHS Nav 

A progressive web app to help you find your way around school.  



## iframe branch  
Our current working demo is only an iframe to Mappedin map of NCHS we created.  
All other development on this project is located on the main branch. 

## Development
Development can be done on any computer with node and npm installed.  

After cloning this repo and `cd`ing,  

Install the project's packages: 
```bash
npm i
```  
  
Next, set up the local environment:  
1. Copy `.env.example` to a new file titled `.env.local`  
2. Create or sign in to a [mapbox account.](https://account.mapbox.com/auth/signin/)  
3. `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` is your mapbox "Default public token"   
4. `DATABASE_URL` should be retrieved from Dr. Miller. He hosts the mysql database. It should be in the form of `mysql://USER:PASSWORD@HOST:PORT/DATABASE` 
5. `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` may also be retrieved from Dr. Miller. These tokens are generated by him and are accessible from his [Google Developer Console.](https://console.developers.google.com/apis/credentials)
  
To run the development server:
```bash
npm run dev
```

## How does this project work?
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We are using the [Next.js app router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router) built on React Server Components.  

To connect to the database, we are using an [Prisma](https://www.prisma.io/), an ORM. To seed the database use `npx prisma db seed`. If errors come up about not having a database connection, you need to set your environment variable for the database url in your shell before running that command. To view our database schema it may be found in prisma/schema.prisma.  

We are using [typescript](https://www.typescriptlang.org/) for type saftey and [tailwindcss](https://tailwindcss.com/) for styling.  

To georeference the pdfs we used [QGIS](https://qgis.org/en/site/about/index.html). Look in mapping-src/ to find source files and georeferenced files.  


## Future work to be completed
This project is no where near completed to the state that we would like it to be. The following is a breif list of functionality that we would like to implement eventualy: 
Google authentication
Navigaion (Routing)
Clickable classrooms
Student schedule / Infinite Campus import

In the future, for when we want to figure out a routing engine, we are looking at either using Indrz or replicating their stack for routing in the backend. 

### [Google Slides Prototype](https://docs.google.com/presentation/d/e/2PACX-1vQ8j8_AKURo8ozA3W5ryQ42I0sR6HpW06JJ_zPJnL5D-XpF8xS6MB6skeSBxa_V2IYZHmngVdcpd5Uy/pub?start=false&loop=false&delayms=60000)
