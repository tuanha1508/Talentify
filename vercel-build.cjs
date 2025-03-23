const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Fix for unicorn-magic _toPath issue - completely replace the file with a safe version
  try {
    const unicornDefaultPath = path.resolve('./node_modules/unicorn-magic/default.js');
    if (fs.existsSync(unicornDefaultPath)) {
      console.log('📝 Creating safe version of unicorn-magic module...');
      
      // Create a safe version of the file without any toPath declarations
      const safeContent = `
// Safe version of unicorn-magic
export async function delay({seconds, milliseconds} = {}) {
  const duration = (seconds || 0) * 1000 + (milliseconds || 0);
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
`;
      
      // Write the safe version (overwriting the original)
      fs.writeFileSync(unicornDefaultPath, safeContent);
      console.log('✅ unicorn-magic replaced with safe version');
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

  // Skip patch-package for safety
  console.log('⏩ Skipping patch-package to avoid conflicts');

  // Run the Nuxt build with explicit Node path
  console.log('🏗️ Starting Nuxt build...');
  execSync('NODE_OPTIONS=--max-old-space-size=4096 npx nuxt build', { stdio: 'inherit' });
  console.log('✅ Build completed');
} catch (error) {
  console.error('❌ Build failed', error.message);
  process.exit(1);
} 