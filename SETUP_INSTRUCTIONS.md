# Setup Instructions for PrintPro

## Prerequisites

Before running this project, you need to install Node.js and npm.

### Installing Node.js and npm

1. **Download Node.js**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version
   - Choose the Windows installer (.msi file)

2. **Install Node.js**
   - Run the downloaded .msi file
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation**
   - Open a new Command Prompt or PowerShell window
   - Run these commands:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers for both

## Project Setup

Once Node.js and npm are installed:

1. **Navigate to the project directory**
   ```bash
   cd C:\Users\DELL\Desktop\frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application should load automatically

## Alternative: Using Yarn

If you prefer using Yarn instead of npm:

1. **Install Yarn**
   ```bash
   npm install -g yarn
   ```

2. **Install dependencies with Yarn**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```

## Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Node.js is not installed or not in PATH
   - Restart your terminal after installation
   - Reinstall Node.js if needed

2. **Port 3000 is already in use**
   - The development server will automatically try port 3001
   - Or manually kill the process using port 3000

3. **Dependencies fail to install**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules folder and package-lock.json
   - Run `npm install` again

### Getting Help

- Check the [Node.js documentation](https://nodejs.org/en/docs/)
- Visit [npm documentation](https://docs.npmjs.com/)
- Review the project README.md for more details

## Project Features

Once running, you'll have access to:

- **Homepage** (`/`) - Landing page with featured products
- **Product Catalog** (`/catalog`) - Browse all products by category
- **Product Customization** (`/customize/:id`) - Customize specific products
- **Shopping Cart** (`/cart`) - Manage your cart and checkout

## Next Steps

After the application is running:

1. Explore the different pages and features
2. Try adding products to cart
3. Test the customization options
4. Review the code structure in the `src` folder
5. Customize the design or add new features as needed

Happy coding! 🎨



