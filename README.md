


# Blog Post Management System

A modern, full-featured blog post management application built with React, TypeScript, and Tailwind CSS. This application demonstrates CRUD operations, search and filter functionality, form validation, and proper error handling.

##  Features

- **CRUD Operations**: Create, read, update, and delete blog posts
- **Search Functionality**: Search posts by title or content in real-time
- **Category Filtering**: Filter posts by category with dynamic category generation
- **Combined Filters**: Use search and category filter together for refined results
- **Form Validation**: Client-side validation with helpful error messages
- **Loading States**: Visual feedback during API operations
- **Empty States**: Clear messaging when no posts or no results found
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Delete Confirmation**: Confirmation dialog before deleting posts
- **Type Safety**: Full TypeScript implementation for type safety

##  Technologies Used

- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **JSONPlaceholder** - Fake REST API for testing and prototyping


## Preeview here

[Go Live](https://blog-manager-wheat.vercel.app/)

![screenshot](/public/vectors/Screenshot%20(2).png)
![screenshot](/public/vectors/Screenshot%20(3).png)



##  Installation & Setup

1. **Clone the repository**

```bash
   git clone git@github.com:murtadhoaaishah/blog_manager.git
   cd blog-post-manager
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start the development server**

```bash
   npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

##  Project Structure

```
src/
├── components/
│   ├── BlogForm.tsx          # Form component for creating/editing posts
│   ├── BlogList.tsx          # List container component
│   └── BlogPostCard.tsx      # Individual post card component
├── services/
│   └── blog.service.ts                # API service layer for all HTTP requests
├── types/
│   └── BlogPost.ts           # TypeScript type definitions
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## Architecture & Design Decisions

### Component Structure

- **Separation of Concerns**: Components are separated by functionality (forms, lists, cards)
- **Props Interface**: Clear TypeScript interfaces for all component props

### State Management

- **React Hooks**: All state is managed locally in the main App component

### API Integration

- **Service Layer**: Abstracted API calls into a separate service layer
- **JSONPlaceholder**: Using JSONPlaceholder as the mock API
- **Important Note**: JSONPlaceholder is a fake API - POST/PUT/DELETE operations appear to work but don't persist on the server. The application manages state locally after API calls to simulate persistence.

### Form Validation

- **Client-side Validation**: Built-in validation for all form fields
- **Real-time Feedback**: Error messages displayed immediately
- **Validation Rules**:
  - Title: Required, minimum 5 characters
  - Content: Required, minimum 20 characters
  - Author: Required
  - Category: Required

### Search & Filter Implementation

- **Case-insensitive Search**: Search works on both title and content fields
- **Dynamic Categories**: Categories are automatically extracted from posts
- **Combined Filtering**: Search and category filter work together
- **Performance**: Uses `useMemo` to prevent unnecessary recalculations

### Error Handling

- **Try-Catch Blocks**: All async operations wrapped in error handling
- **User Feedback**: Clear error messages with retry options
- **Loading States**: Visual indicators during API calls

##  UI/UX Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Loading Spinners**: Visual feedback during data fetching
- **Empty States**: Helpful messages when no data is available
- **Hover Effects**: Interactive elements have clear hover states
- **Focus States**: Proper focus indicators for accessibility
- **Color Coding**: Different colors for edit (blue) and delete (red) actions

## 🔍 Key Features Explained

### Search Functionality

The search feature filters posts in real-time as you type, searching through both the title and content of posts. The search is case-insensitive for better user experience.

### Category Filter

Categories are dynamically generated from the posts. Users can filter by a specific category or view all posts. The filter works in combination with the search feature.

### CRUD Operations

- **Create**: Click "Create New Post" button, fill in the form, and submit
- **Read**: All posts are displayed on the main page
- **Update**: Click "Edit" button on any post card, modify the details, and submit
- **Delete**: Click "Delete" button and confirm the action in the dialog

##  Testing the Application

### Manual Testing Steps

1. **View Posts**: On load, verify posts are fetched and displayed
2. **Create Post**: Click "Create New Post" and submit the form
3. **Edit Post**: Click "Edit" on a post, modify it, and save
4. **Delete Post**: Click "Delete" on a post and confirm
5. **Search**: Type in the search box and verify filtering
6. **Category Filter**: Select a category from the dropdown
7. **Combined Filter**: Use search and category filter together
8. **Error Handling**: Disconnect internet and try operations
9. **Validation**: Try submitting empty or invalid form data
10. **Responsive**: Test on different screen sizes


---

**Note**: This application uses JSONPlaceholder (https://jsonplaceholder.typicode.com/) as a fake REST API for demonstration purposes. In a production environment, this would be replaced with a real backend API.