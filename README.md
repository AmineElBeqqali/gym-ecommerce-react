# Gym E-commerce React Application


## 📋 Overview

A modern e-commerce platform built with React and Node.js for gym equipment and fitness products. I made this just for fun in a day 🙃 (im just using a JSON file to fetch products)

## ✨ Features

- **Product Catalog** - Browse through a wide range of gym and fitness equipment
- **Search & Filter** - Find products quickly with advanced search and filtering options
- **Shopping Cart** - Add items to cart, modify quantities, and remove products
- **User Authentication** - Create an account, log in, and manage your profile
- **Responsive Design** - Optimized for all screen sizes from mobile to desktop
- **JSON Database** - Fast data retrieval with local JSON database

## 🚀 Technologies Used

- **Frontend:**
  - React 18
  - React Router v6
  - Context API for state management
  - CSS Modules / Styled Components
  - React Icons

- **Backend:**
  - Node.js
  - Express.js
  - JSON file for product database

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmineElBeqqali/gym-ecommerce-react.git
   cd gym-ecommerce-react
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # If you have a separate backend folder
   cd backend
   npm install
   cd ..
   ```

3. **Run the application**
   ```bash
   # Run frontend (from root directory)
   npm start
   
   # Run backend (if in separate directory)
   cd backend
   node server.js
   ```

4. **Open the application**
   Open your browser and navigate to `http://localhost:3000`

## 📂 Project Structure

```
gym-ecommerce-react/
├── public/
│   ├── images/          # Image assets folder
│   ├── video/           # Video assets folder
│   ├── favicon.ico      # Website favicon
│   ├── index.html       # Main HTML file
│   ├── logo192.png      # Logo file (192px)
│   ├── logo512.png      # Logo file (512px)
│   ├── manifest.json    # Web app manifest
│   └── robots.txt       # Robots file for SEO
├── src/
│   ├── cart/            # Cart related components
│   ├── components/      # Reusable React components
│   ├── contexts/        # React Context for state management
│   ├── data/            # JSON data files for products
│   ├── img/             # Image assets used in the app
│   ├── pages/           # Page components
│   ├── App.js           # Main App component
│   ├── index.css        # Global CSS styles
│   └── index.js         # Application entry point
├── .git/                # Git repository folder
├── build/               # Production build folder
├── node_modules/        # Node.js dependencies
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Lock file for package versions
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🔮 Future Enhancements

- User reviews and ratings
- Payment gateway integration
- Admin dashboard for product management
- Wishlist functionality
- Social media sharing options

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

Amine El Beqqali - [GitHub](https://github.com/AmineElBeqqali)

Project Link: [https://github.com/AmineElBeqqali/gym-ecommerce-react](https://github.com/AmineElBeqqali/gym-ecommerce-react)
