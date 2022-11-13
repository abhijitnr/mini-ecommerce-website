# ROUTER-PROJECT-ABHIJIT-BISWAS

## Content of Project ( Components )

## \*\* REACT CART 1 TABLE CONTENT

### 1. Navbar.jsx

        - Home Page
        - Product Page
        - Aout Us Page
        - FAQ Page
        - Contact Us Page
        - Shopping cart icon

### 2. Home.jsx

        - A full size banner for website

### 3. Footer.jsx

        - Social media icons
        - FAQ
        - Job opportunities

### 4. AllRoutes.jsx

        - It will contain all the route path

## \*\* REACT CART 2 TABLE CONTENT

### 1. Products.jsx

        - Fetch the product from json server & append on the DOM
        - Show image, title, price and more details button
        - Redirects to single product page to show the all information of the peoduct

### 2. SingleProductPage.jsx

        - Details of the product
        - Add to cart button

### 3. PageNotFound.jsx

        - If route path is invalid it will redirect on this page
        - It will show 404 error and page not found

## \*\* REACT CART 3 TABLE CONTENT

### 1. ShoppingCart.jsx

        - It will show the all added product in cart
        - It will follow the route "/shoppingcart"
        - Place order button
        - Total Price
        - Total Item
        - If not authenticate then it will redirect signin page

### 2. SignIn.jsx

        - If user not signin it will redirect to this signin page

### 3. AuthContext.jsx

        - It will contain AuthContext and AuthContextProvider
        - It will pass the authentication method

### 4. PrivateRoute.jsx

        - This page will redirect to signin page when user visit first time
