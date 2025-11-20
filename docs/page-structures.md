# Page Structure Analysis

## homepage.html

### Purpose

- Type: Home Page
- User Goal: Discover products, navigate to categories, view featured items

### Sections

1. Header: Navigation menu, search bar, user actions (favorites, cart, profile), hamburger menu
2. Hero: Full-screen image background, main title, description, shop now button
3. Shop by Category: 4-category grid with images and titles
4. Featured Products: 4-product grid with images, titles, descriptions, prices, add to cart buttons
5. Footer: Logo, quick links, categories, newsletter signup, social links, copyright
6. Sidebar: Mobile menu (hidden by default)

### Interactive Elements

- Header buttons: person_outline, shopping_cart (with badge), menu (mobile)
- Hero button: Shop Now (anchor link)
- Category cards: Hover scale effect
- Product cards: Hover shadow, Add to Cart buttons
- Footer links: Navigation links, social icons
- Newsletter form: Email input, Subscribe button
- Mobile menu: Toggle visibility

### SEO Metadata

- Title: Modern Fashion E-commerce
- Description: None (no meta description)
- Viewport: width=device-width, initial-scale=1.0

## products_page.html

### Purpose

- Type: Product Listing Page
- User Goal: Browse products with filters, sort options

### Sections

1. Header: Logo, navigation menu, search bar, user buttons, mobile menu button
2. Sidebar: Price Range filters (checkboxes), Brand filters, Size buttons grid
3. Main Content: Page title, sort select, product grid (4 columns responsive)
4. Footer: Not present

### Interactive Elements

- Header buttons: search (with icon), person_outline, shopping_cart (with badge), menu (mobile)
- Filter checkboxes: Price range options
- Size buttons: XS-XXL options, with selection state
- Sort select: Featured, Price Low-High, etc.
- Product cards: Hover scale, Add to Cart buttons
- Mobile menu: Not shown but has button

### SEO Metadata

- Title: Products - Fashion Store
- Description: None
- Viewport: Yes

## product_detail_page.html

### Purpose

- Type: Product Detail Page
- User Goal: View product details, select options, add to cart

### Sections

1. Header: Logo, navigation menu, icons (favorite, cart, user)
2. Main: Two-column layout - left: image gallery, right: product info (title, price, description, size radio buttons, quantity controls), add to cart button, favorite button
3. Footer: Not present

### Interactive Elements

- Navigation menu items
- Image thumbnails: Click to change main image
- Size radio buttons: Select size options
- Quantity buttons: + - controls
- Add to Cart button
- Favorite button (material-icons favorite_border)
- Mobile menu button

### SEO Metadata

- Title: Product Detail Page
- Description: None
- Viewport: Yes

## cart_page.html

### Purpose

- Type: Shopping Cart Page
- User Goal: Review cart items, update quantities, proceed to checkout

### Sections

1. Header: Logo, navigation menu, user icons
2. Main: Cart header, item list (image, name, price, quantity controls, remove), continue shopping link, order summary (subtotal, shipping, total), checkout button
3. Footer: Not present

### Interactive Elements

- Navigation items
- Item quantity: Remove/add buttons with icons
- Remove links
- Continue Shopping link
- Proceed to Checkout button

### SEO Metadata

- Title: Shopping Cart
- Description: None
- Viewport: Yes

## checkout_page.html

### Purpose

- Type: Checkout Page
- User Goal: Enter shipping info, payment details, place order

### Sections

1. Header: Logo, navigation, search bar, user icons
2. Main: Checkout title, two-column - left: shipping info form (name, email, address, city/zip), payment form (credit card radio, card number, expiry/CVV), right: order summary (subtotal, shipping, tax, total), place order button
3. Footer: Not present

### Interactive Elements

- Navigation items
- Form inputs: All text inputs for shipping/payment
- Credit Card radio button
- Place Order button

### SEO Metadata

- Title: Checkout - ShopLogo
- Description: None
- Viewport: Yes

## login.html

### Purpose

- Type: Authentication Page
- User Goal: Login or register for account

### Sections

1. Header: Logo, navigation menu, user icons
2. Main: Max-width card with tabs (Login/Register), login form (email/password, remember me, forgot password), register form (name/email/password, terms checkbox)
3. Footer: Not present

### Interactive Elements

- Tab buttons: Login/Register switching
- Login form: Email input, password input, remember checkbox, sign in button, forgot link
- Register form: Name, email, password inputs, terms checkbox, create account button
- Navigation items

### SEO Metadata

- Title: Account - StyleNest
- Description: None
- Viewport: Yes

## user_profile.html

### Purpose

- Type: User Profile Page
- User Goal: Manage profile, view order history, manage addresses

### Sections

1. Header: Logo, navigation, search, user icons with profile pic
2. Main: Two-column - Sidebar: Profile pic, nav (My Profile, Order History, Saved Addresses, Sign Out), Content: Profile section (first/last/email inputs), Order History table, Saved Addresses grid
3. Footer: Not present

### Interactive Elements

- Navigation items
- Profile section: Edit Profile button
- Order History table: View Details links
- Saved Addresses: Edit/Delete buttons per address, Add New button
- Sidebar nav items

### SEO Metadata

- Title: VogueVerse - My Profile
- Description: None
- Viewport: Yes

## order_management_page.html

### Purpose

- Type: Admin Orders Page
- User Goal: Manage orders, update statuses

### Sections

1. Sidebar: Logo, nav menu (Dashboard, Orders active, Products, etc.), Logout
2. Header: Mobile menu button, page title "Manage Orders", notifications icon, admin avatar/name/email
3. Main: Search bar, status filter dropdown, "New Order" button, orders table (ID, Customer, Date, Total, Status, Actions dropdown), pagination

### Interactive Elements

- Nav menu items
- Search input
- Filter select
- New Order button
- Table rows: Hover effect, Actions dropdown (Set as Shipped/etc.)
- Pagination links

### SEO Metadata

- Title: Admin - Manage Orders
- Description: None
- Viewport: Yes

## product_management_page.html

### Purpose

- Type: Admin Products Page
- User Goal: Manage product catalog, add/edit/delete products

### Sections

1. Sidebar: Logo "Admin Panel", nav menu (Dashboard, Products active, etc.)
2. Main: Page title "Manage Products", "Add New Product" button, products table (checkbox, image/name, category, price, quantity, status badge, edit/delete icons), pagination

### Interactive Elements

- Nav menu items
- Add New Product button
- Table rows: Checkbox, hover effect, edit icons, delete icons
- Pagination links

### SEO Metadata

- Title: Product Management
- Description: None
- Viewport: Yes
