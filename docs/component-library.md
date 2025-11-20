# Component Library

## Headers

### E-commerce Header

- Structure: Logo, navigation menu (Home, Categories, Products, etc.), search bar, user icons (favorites, cart with badge, profile), mobile menu button
- Classes: bg-white or primary, sticky top-0, backdrop-blur
- Responsive: Hidden nav on mobile, search hidden on mobile
- Found in: homepage.html, products_page.html, product_detail_page.html, cart_page.html, checkout_page.html, login.html, user_profile.html
- Variations: Some have primary background instead of white

## Product Cards

### Featured Product Card

- Structure: Image (w-full h-64 object-cover), title (font-semibold), description, price (font-bold text-primary), add-to-cart button
- Classes: bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow
- Responsive: Grid layout 1-4 cols
- Found in: homepage.html, products_page.html

### Cart Product Item

- Structure: Image (w-24 h-24 rounded-md), title, price, details (color/size), quantity controls (remove/add buttons), remove link
- Classes: flex py-6 divide-y
- Responsive: Stacking on mobile
- Found in: cart_page.html

### Admin Product Table Row

- Structure: Checkbox, image (w-10 h-10 rounded-md), name, category, price, quantity, status badge, edit/delete icons
- Classes: bg-white border-b hover:bg-slate-50
- Found in: product_management_page.html

## Forms

### Login/Register Tabs

- Structure: Tabs buttons, form fields with icons
- Found in: login.html

### Checkout Form

- Structure: Grid inputs for shipping/payment
- Found in: checkout_page.html

## Buttons

### Primary Button

- Classes: bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors
- Variations: Different sizes (px-8 py-3)
- Found in: All pages (add to cart, place order, etc.)

### Secondary Button

- Classes: border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-100
- Found in: homepage.html (View All Products)

## Sidebars

### Filter Sidebar

- Structure: Price checkboxes, Brand checkboxes, Size buttons grid
- Classes: bg-white p-6 rounded-lg shadow-sm
- Found in: products_page.html

### Admin Sidebar

- Structure: Logo, nav items with icons, logout
- Classes: w-64 bg-white border-r
- Found in: order_management_page.html, product_management_page.html

## Tables

### Data Table

- Structure: Thead with bold headers, tbody rows with hover, pagination nav
- Found in: user_profile.html (orders), order_management_page.html (orders), product_management_page.html (products)

## Layout Components

### Two-Column Grid

- Classes: grid grid-cols-1 lg:grid-cols-3 (with span-2 + span-1)
- Found in: product_detail_page.html, checkout_page.html

### Category Grid

- Classes: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
- Found in: homepage.html, user_profile.html (addresses)

### Product Grid

- Classes: grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6
- Found in: products_page.html

## Status Badges

### Order Status Badges

- Classes: px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800, etc.
- Found in: order_management_page.html, product_management_page.html

## Navigation

### Sidebar Nav

- Structure: Items with icons and text, active state
- Found in: user_profile.html, order_management_page.html, product_management_page.html

### Mobile Menu

- Trigger: Hamburger button
- Found in: All header variations

## Order Summary

- Structure: Subtotal, shipping, total lines, checkout button
- Found in: cart_page.html, checkout_page.html

## Quantity Controls

- Structure: Minus button, display span, plus button
- Classes: border rounded-md flex items-center
- Found in: product_detail_page.html, cart_page.html
