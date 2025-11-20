# Navigation Flow

## Site Map

```
Home
├── Categories (Shop by Category)
│   ├── Shoes
│   ├── Shirts
│   ├── Pants
│   └── Caps
├── Products (Product listings with filters/sorting)
├── Product Detail (with options, add to cart)
├── Cart (review, update, checkout)
├── Checkout (forms, payment, place order)
├── Login/Register (tabs)
├── User Profile
│   ├── My Profile (edit)
│   ├── Order History
│   └── Saved Addresses
├── Admin Panel
    ├── Dashboard
    ├── Orders Management (table, update status)
    └── Products Management (table, add/edit/delete)
```

## User Flows

### Shopping Flow

1. Home → Categories (via category cards or nav menu)
2. Categories → Products (filtered by category)
3. Products → Product Detail (via product card)
4. Product Detail → Cart (add to cart button)
5. Cart → Checkout (proceed to checkout button)
6. Checkout → Confirmation (place order)

### Authentication Flow

1. Any page → Login (via header profile icon)
2. Login → Register (tab switch) or Login → User Profile
3. Register → User Profile (after registration)

### Profile Management Flow

1. Home → User Profile (via header profile icon)
2. User Profile → Edit Profile (forms)
3. User Profile → Order Details (via order links)
4. User Profile → Add/Edit Addresses (forms)

### Admin Flow

1. Home → Login (admin login)
2. Login → Admin Dashboard
3. Dashboard → Orders Management (update statuses)
4. Dashboard → Products Management (CRUD operations)

## Interactive Elements Map

| Element               | Location            | Action         | Destination                         |
| --------------------- | ------------------- | -------------- | ----------------------------------- |
| "Shop Now" Button     | Home Hero           | Navigate       | /products                           |
| Category Card         | Home Categories     | Navigate       | /products?category=shoes            |
| Product Card          | Home/Products       | Navigate       | /product-detail                     |
| "Add to Cart"         | Product Card/Detail | Add Item       | Update cart state, navigate to cart |
| Cart Icon             | Header              | Navigate       | /cart                               |
| "Proceed to Checkout" | Cart                | Navigate       | /checkout                           |
| Profile Icon          | Header              | Navigate       | /login or /profile                  |
| "Sign In"             | Login Form          | Authenticate   | /profile                            |
| "Create Account"      | Register Form       | Create Account | /profile                            |
| Order History Items   | Profile             | Navigate       | /order-details                      |
| Address Edit          | Profile             | Open Form      | Inline edit addresses               |
| Admin Sidebar Links   | Admin Pages         | Navigate       | /admin/\*/                          |
| Table Actions         | Admin Tables        | Update/Delete  | Inline updates or forms             |
| Search Bar            | Header              | Filter         | Update page results                 |
| Filters/Sort          | Products            | Filter/Sort    | Update product grid                 |

## Data Flow

- **Cart State**: Persists across pages, updates on add/remove
- **User Session**: Login state, profile data
- **Form Submissions**: Checkout → API (not shown), register → create account
- **Admin Updates**: Table actions → backend updates status

## API References

Not explicitly referenced in code, but implied for:

- Product listings
- Cart operations
- User auth
- Order management
- Payment processing
