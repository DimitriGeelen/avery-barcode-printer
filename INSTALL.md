# Installation Instructions

## Ubuntu 22.04 LTS Installation

1. Update your system:
```bash
sudo apt update && sudo apt upgrade
```

2. Install prerequisites:
```bash
sudo apt install curl build-essential git
```

3. Install Node.js from NodeSource repository:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs
```

4. Verify the installation:
```bash
node --version  # Should show v20.x.x
npm --version   # Should show 9.x.x or higher
```

## Application Installation

1. Clone the repository:
```bash
git clone https://github.com/DimitriGeelen/avery-barcode-printer.git
cd avery-barcode-printer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application should automatically open in your default web browser at `http://localhost:3000`

## Troubleshooting

If you encounter any issues during installation:

1. Node.js dependency errors:
```bash
npm clean-cache --force
npm install
```

2. Tailwind CSS issues:
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

3. Permission errors:
```bash
sudo chown -R $USER:$USER .
```

4. Port 3000 already in use:
```bash
# Either free up port 3000:
sudo lsof -i :3000
sudo kill -9 <PID>

# Or start on a different port:
PORT=3001 npm start
```

## Using the Application

1. Select your Avery label template (5160 or 5163)

2. Generate barcodes either:
   - Single barcode: Enter a value directly
   - Multiple barcodes: Check "Generate Range of Barcodes" and enter:
     * Start and end numbers
     * Optional prefix (e.g., "PROD-")
     * Optional suffix (e.g., "-2025")
     * Number padding (e.g., 4 for "0001")

3. Choose barcode format:
   - Code 128 (alphanumeric)
   - EAN-13 (13 digits)
   - UPC (12 digits)
   - Code 39 (alphanumeric)

4. Click "Generate Barcode" or "Generate Barcodes"

5. When ready to print, click "Print Labels"

## System Requirements

- Operating System: Ubuntu 22.04 LTS (recommended)
- Node.js: Version 14 or higher
- NPM: Version 6 or higher
- Memory: 2GB RAM minimum
- Storage: 1GB free space
- Browser: Chrome, Firefox, or Edge (latest versions)

## Production Deployment

For production deployment:

1. Build the application:
```bash
npm run build
```

2. Serve using a static file server:
```bash
# Install serve globally
npm install -g serve

# Serve the build directory
serve -s build
```

Or deploy to a web server of your choice (Apache, Nginx, etc.)

## Support

For issues and support:
1. Check the [GitHub Issues](https://github.com/DimitriGeelen/avery-barcode-printer/issues)
2. Report new issues if needed
3. Contact the maintainer through GitHub