# Java Academy - Student Learning Platform

A comprehensive web-based learning platform for teaching Java programming to beginners.

## Features

### 🎓 Complete Learning Experience
- **Home Page**: Course overview with 6 core Java topics
- **Tutorials & Lessons**: 5 comprehensive lessons covering:
  - Getting Started with Java
  - Variables and Data Types
  - Control Flow (If/Else Statements)
  - Loops (For and While)
  - Methods (Functions)
  
  Each lesson includes code examples, key points, and explanations.

- **Resources**: Learning materials including:
  - Java Cheat Sheet
  - Beginner's Handbook
  - Code Examples Collection
  - Practice Problems
  - External Links
  - Recommended Books

- **Assignments**: 5 homework assignments with difficulty levels:
  1. **Easy**: Hello World - 30 minutes
  2. **Medium**: Calculator Program - 1 week
  3. **Medium**: Grade Converter - 1 week
  4. **Medium**: Number Guessing Game - 1 week (Loops & Conditionals)
  5. **Hard**: Array Statistics - 1 week (Arrays & Methods)

- **Student Login System**:
  - Login/Logout functionality
  - Student dashboard showing progress
  - Personalized welcome message
  - Demo credentials: username: `student` | password: `123`

### 🎨 User Interface
- Beautiful gradient color scheme (Purple & Blue)
- Responsive design (works on desktop and mobile)
- Sticky navigation bar
- Smooth animations and transitions
- Collapsible content sections
- Professional card-based layout

### ⌨️ Keyboard Shortcuts
- **Ctrl + H**: Go to Home
- **Ctrl + T**: Go to Tutorials
- **Ctrl + R**: Go to Resources
- **Ctrl + A**: Go to Assignments

## How to Use

### Opening the Website
1. Open `index.html` in your web browser
2. You'll see the Java Academy homepage

### Navigation
- Click on navigation menu items to browse sections
- Or use the keyboard shortcuts above

### Login
1. Click "Login" in the navigation menu
2. Use demo credentials: 
   - Username: `student`
   - Password: `123`
3. View your personalized dashboard
4. Click "Logout" to exit

### Viewing Tutorials
1. Go to **Tutorials & Lessons**
2. Click "View Tutorial" to expand each lesson
3. Study the code examples and key points

### Accessing Resources
1. Go to **Resources**
2. Download PDFs and materials (links are placeholders)
3. View external links to official documentation

### Completing Assignments
1. Go to **Assignments & Homework**
2. Click "View Details" to see full assignment requirements
3. Follow the instructions and submissibility guidelines
4. Track your progress in the dashboard

## File Structure

```
HTML/
├── index.html          # Main website file
├── style.css           # All styling and responsive design
├── script.js           # Interactive features and login
├── pictures/           # Folder for any images
└── README.md          # This file
```

## Customization Guide

### Adding New Topics
1. Add a new card to the course overview section in `index.html`
2. Create a new tutorial item with code examples

### Adding More Lessons
1. Copy the tutorial item structure
2. Add your content between the `<div id="tutorial#" class="tutorial-content hidden">` tags

### Adding More Assignments
1. Copy an assignment card
2. Update the title, difficulty level, deadline, and requirements
3. Add a new `<div id="assignment#" class="assignment-details hidden">` section

### Changing Colors
In `style.css`, modify these gradient colors:
- Primary color: `#667eea` (purple-blue)
- Secondary color: `#764ba2` (darker purple)

Replace with your preferred colors.

### Adding Real Login
For production use, you'll need:
1. A backend server (Node.js, Python, Java)
2. A database to store student credentials
3. Update the `handleLogin()` function in `script.js`
4. Add session management and security features

## Features to Add in the Future

- [ ] Student registration form
- [ ] Database integration for real login
- [ ] Assignment submission system
- [ ] Automatic code grading
- [ ] Discussion forum
- [ ] Video tutorials integration
- [ ] Quiz system for each lesson
- [ ] Student progress tracking
- [ ] Certificate generation
- [ ] Mobile app version

## Browser Compatibility

Works on:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Modern mobile browsers

## Tips for Teachers

1. **Customize the demo credentials** in `index.html` line with your actual student usernames
2. **Update assignment deadlines** based on your course calendar
3. **Add external links** to YouTube, GitHub, or documentation
4. **Create downloadable resources** and update the links in the Resources section
5. **Use keyboard shortcuts** to navigate quickly during demonstrations

## Support & Questions

For issues or questions about customization, refer to the code comments in:
- `index.html` - Content structure
- `style.css` - Styling and layout
- `script.js` - Interactivity and login logic

---

**Happy Teaching! 🎓**
