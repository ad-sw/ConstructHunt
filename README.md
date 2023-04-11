## [Construct(ion) Hunt](http://construct-hunt.herokuapp.com/)
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/158091472-83460d60-1484-4bb2-b518-0d7ca497d279.png" width="750" height="375"></p>
A near pixel-perfect <a href="https://www.producthunt.com/">Product Hunt</a> clone inspired by the similarities between software developers (virtual/digital builders) and architects/landscape architects/city planners/real estate developers (physical builders).<p>
<br>Public participatory design and voting takes place during town/city meetings for sites; many local stakeholders are unaware of these meetings or can't attend them physically due to timing schedule conflicts. This results in public to private spaces not gaining local population input or accurate datasets.</br>
<br>Additionally, many firms don't have the resources to participate in site competitions; meaning those that do tend to overshadow smaller firms (oligopoly market structure).</br>
<br>An online tool like this can enable greater input, participation and transparency through virtual meetings and interaction.</br>

### Fullstack used:
* CSS & HTML (frontend)
* React (frontend)
* Redux (frontend)
* JavaScript (front-to-back)
* Express (backend)
* Sequelize (backend)
* PostgreSQL (backend)
---
## [Database Schema](https://github.com/ad-sw/ConstructHunt/wiki/Database-Schema)

### Features Overview:
* Visitors View
  + Navigation Bar
    - [X] Sign up
    - [X] Log in & log out (registered user or demo account)
  + Homepage 
    - [X] View all products (R)
  + Search Bar
    - [X] Search all products in live dropdown results (R)
  + Product Profile Page
    - [X] View product profile pages for info. and reviews (R)

* Logged-in View
  + Navigation Bar
    - [X] Log in & log out (registered user or demo account)
  + Homepage 
    - [X] Create product (C)
    - [X] View all products (R)
    - [X] Update product (U)
    - [X] Delete product (D)
  + Search Bar
    - [X] Search all products in live dropdown results (R)
  + Product Profile Page
    - [X] View product profile pages for info. and reviews (R)
    - [X] Create review  (C)
    - [X] Update review    (U)
    - [X] Delete review  (D)

## [Features List](https://github.com/ad-sw/ConstructHunt/wiki/Features-List)

### [Home Page](http://construct-hunt.herokuapp.com/)
- Overview product concept with options to sign up or sign in as a registered or demo user.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/158091472-83460d60-1484-4bb2-b518-0d7ca497d279.png" width="750" height="375"></p>

### [Login & Sign Up Modals](http://construct-hunt.herokuapp.com/)
- Sign up and log in as a registered or demo user by clicking on the navbar sign in or sign up buttons, the product sections' upvote buttons, the homepage's get started button, or a product profile page's send review button.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153732149-670cdc97-a73e-43ea-b0c2-64cbff38aea8.PNG" width="370" height="220" opacity=".5">
<img src="https://user-images.githubusercontent.com/86431563/153732151-4ef0eeb7-7c8a-4236-83e2-d90251c309e5.PNG" width="370" height="220" opacity=".5"></p>

### [View Product Profile Modal](http://construct-hunt.herokuapp.com/)
- View a product's profile for more detailed information such as more images of the product, its payment options, tagline, description, category type, featured date, reviews, link to get/visit it, the hunter/product poster, the maker/product creator, and related products.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153799419-b67cef4f-f451-45ed-b385-8b7d488ac169.PNG" width="750" height="375"></p>

### [Edit Product Profile Modal](http://construct-hunt.herokuapp.com/)
- Edit a product's profile by selecting the edit icon to the right of the product's name (dark grey pencil icon on the left-side of the delete x-icon). This will bring you to the edit page where you can make changes and be automatically directed back to the product's page after submission.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153732832-d9923a3c-0d75-45eb-ac1b-0544c8bf7cc9.PNG" width="750" height="375"></p>

### [Edit Review on Product Profile](http://construct-hunt.herokuapp.com/)
- Edit a review you posted on a product by visiting it's pop-up page and selecting the icons there to make an instant change.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153799802-d664bd1b-9986-41f7-8e9c-9b1bc0163857.PNG" width="750" height="375"></p>

### [Live Drop-Down Search Bar](http://construct-hunt.herokuapp.com/)
- Use a live search bar with drop-down results to find certain products by name or all products.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153733367-118aacf0-46cd-40ad-b76b-e25ab89235af.PNG" width="750" height="375"></p>

### [Multi-Page Product Form: Start](http://construct-hunt.herokuapp.com/products/new/1)
- Start the product creation process by selecting the navbar's submit button.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153733444-44db3cba-726e-40d9-b5f2-8139a3b611e6.PNG" width="750" height="375"></p>

### [Post Product: Page 1](http://construct-hunt.herokuapp.com/products/new/2)
- Go through the product form information with visual guides for requirements like word count and a left-side navbar.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153733577-6a013f89-8944-4bec-8bab-efacdba7d39e.PNG" width="750" height="375"></p>

### [Post Product: Page 2](http://construct-hunt.herokuapp.com/products/new/3)
- Go through the product form information with visual guides for requirements like word count and a left-side navbar.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/158121622-3290b3a4-c656-4a65-9fad-6e1b67c0f091.PNG" width="750" height="375"></p>

### [Post Product: Page 3](http://construct-hunt.herokuapp.com/products/new/4)
- Go through the product form information with visual guides for requirements like word count and a left-side navbar.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153733642-5f3f4392-b0dc-428f-a128-10a5198cdfa3.PNG" width="750" height="375"></p>

### [Post Product: Page 4](http://construct-hunt.herokuapp.com/products/new/5)
- Double-check that you've completed all of the product post requirements, and then launch it on the site!
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153733643-db69b7b3-ceb7-4eb1-977c-a74b23f7c3c3.PNG" width="750" height="375"></p>

---
## Local Set Up
This is an example of how to install this on your local computer, versus referencing it off of heroku.com only.

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/ad-sw/ConstructHunt.git
   ```

2. Install NPM packages / dependencies

   ```bash
   npm install
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file
Create a .env file based on the example with proper settings for your development environment. Then run database models, migrations, and seeding commands (i.e. `npx sequelize model:generate`, `npx dotenv sequelize db:migrate`, and `npx dotenv sequelize db:seed:all`).

5. In your source-code editor of choice such as Visual Studio Code, open two terminal windows. Cd one of them into the frontend folder while cd-ing the other into the backend folder. Once inside both of these folders on separate terminal windows, run the `npm start` command to have your browser open `http://localhost:3000/` with the fully-functional project displayed here.
