# Starly by ITC

A clean and modern dashboard for ITC organization management, featuring team overview, statistics, and event tracking.

## 📁 Project Structure

```
itc/
├── src/
│   ├── css/
│   │   └── style.css          # Single consolidated stylesheet
│   ├── js/
│   │   └── app.js             # Simple JavaScript for charts
│   └── index.html             # Main dashboard page
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start

**Simply open** `src/index.html` in your browser - that's it!

Or for live reloading during development:
```powershell
cd c:\Users\dadia\Desktop\projects\itc\src
python -m http.server 8000
```
Then open: http://localhost:8000

## 📄 Features

### Overview Panel
- Member count, playlists, rank, and active tasks statistics
- Color-coded stat cards with icons
- Real-time team progress tracking

### Points Chart
- Bar chart showing points earned by each team
- Powered by Chart.js
- Monthly tracking visualization

### Quick Actions
- Add Member
- Add Event
- Upload Report
- Add Video
- Color-coded action buttons for easy navigation

### Event Cards
- Challenges and Workshops display
- Date and location information
- Quick detail access buttons

### Workshops History
- Complete event history table
- Event name, type, date, and attendance tracking
- Easy-to-read tabular format

### User Profile Sidebar
- User information and status
- Team level progress bar
- Management hub with quick access buttons

## 🎨 Design System

### Colors
- **Primary**: `#FDB022` (Yellow/Orange)
- **Blue**: `#60A5FA`
- **Purple**: `#A78BFA`
- **Pink**: `#F472B6`
- **Orange**: `#FB923C`

### Typography
- **Font Family**: System fonts (-apple-system, Segoe UI, Roboto)
- **Font Sizes**: 12px to 32px
- **Font Weights**: 400, 500, 600, 700

### Spacing
- Base unit: `1rem` (16px)
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## 🛠️ Features

### Current Features
- ✅ Responsive layout with sidebar navigation
- ✅ Interactive data tables with search and filters
- ✅ Statistical cards and KPI displays
- ✅ Calendar interface
- ✅ Chart visualizations (Chart.js integration)
- ✅ Toast notifications
- ✅ Sort functionality for tables
- ✅ CSV export for reports

### To Be Implemented
- ⏳ Backend API integration
- ⏳ User authentication
- ⏳ Real-time data updates
- ⏳ Database connectivity
- ⏳ Form validation
- ⏳ Modal dialogs for CRUD operations
- ⏳ Advanced filtering and pagination

## 📚 Dependencies

### External Libraries
- **Chart.js** (v4.x) - For data visualizations
  - CDN: `https://cdn.jsdelivr.net/npm/chart.js`

### Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions

## 🔧 Customization

### Changing Colors
Edit `src/css/variables.css` to customize the color scheme:
```css
:root {
  --color-primary: #4F46E5;
  --color-secondary: #F59E0B;
  /* ... more variables */
}
```

### Adding New Pages
1. Create HTML file in `src/pages/`
2. Create corresponding CSS in `src/css/pages/`
3. Create JavaScript file in `src/js/`
4. Import CSS in `src/css/main.css`
5. Add navigation link in sidebar

### Modifying Layout
- **Sidebar width**: Change `--sidebar-width` in `variables.css`
- **Header height**: Change `--header-height` in `variables.css`
- **Grid columns**: Modify `.grid-2`, `.grid-3`, `.grid-4` in `layout.css`

## 📝 Code Structure

### CSS Organization
- **Variables**: Global design tokens
- **Reset**: Normalize browser styles
- **Layout**: Page structure and grid
- **Components**: Reusable UI components
- **Pages**: Page-specific styles

### JavaScript Organization
- **main.js**: Global utilities and event handlers
- **charts.js**: Chart initialization and configuration
- **events.js**: Event-specific functionality
- **members.js**: Member management logic
- **reports.js**: Report generation and filters

## 🐛 Troubleshooting

### Charts not displaying
- Ensure Chart.js CDN is loaded
- Check browser console for errors
- Verify canvas elements have proper IDs

### Styles not applying
- Clear browser cache
- Check CSS import order in `main.css`
- Verify file paths are correct

### JavaScript not working
- Ensure scripts are loaded at the end of `<body>`
- Check for console errors
- Verify all required files are linked

## 📄 License

This project is for educational/organizational use.

## 👥 Contributing

To contribute to this project:
1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly across browsers
4. Submit for review

## 📞 Support

For questions or issues, contact the development team or create an issue in the project repository.

---

**Built with ❤️ for ITC Management**
