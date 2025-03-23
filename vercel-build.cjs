const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Fix for unicorn-magic _toPath issue
  try {
    const unicornDefaultPath = path.resolve('./node_modules/unicorn-magic/default.js');
    if (fs.existsSync(unicornDefaultPath)) {
      console.log('📝 Fixing unicorn-magic module...');
      
      // Read the file content
      let content = fs.readFileSync(unicornDefaultPath, 'utf8');
      
      // Check if it already has a default export to avoid duplicate declarations
      if (!content.includes('export default')) {
        // Add an empty default export if none exists
        content += '\n\nexport default {};';
        fs.writeFileSync(unicornDefaultPath, content);
        console.log('✅ unicorn-magic fixed');
      } else {
        console.log('✅ unicorn-magic already fixed');
      }
    }
  } catch (e) {
    console.log('⚠️ Unable to fix unicorn-magic:', e.message);
  }

  // Check if globby is installed correctly
  try {
    require.resolve('globby');
    console.log('✅ globby found');
  } catch (e) {
    console.log('⚠️ globby not found, installing...');
    execSync('npm install globby@11.1.0 --no-save');
  }

  // Apply any patches (but handle errors gracefully)
  try {
    execSync('npx patch-package || true', { stdio: 'inherit' });
    console.log('✅ patches applied');
  } catch (e) {
    console.log('⚠️ patch-package failed, continuing anyway');
  }

  // Run the Nuxt build with explicit Node path
  console.log('🏗️ Starting Nuxt build...');
  execSync('NODE_OPTIONS=--max-old-space-size=4096 npx nuxt build', { stdio: 'inherit' });
  console.log('✅ Build completed');
} catch (error) {
  console.error('❌ Build failed', error.message);
  process.exit(1);
} 