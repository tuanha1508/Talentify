const { execSync } = require('child_process');

try {
  // Check if globby is installed correctly
  try {
    require.resolve('globby');
    console.log('✅ globby found');
  } catch (e) {
    console.log('⚠️ globby not found, installing...');
    execSync('npm install globby@11.1.0 --no-save');
  }

  // Apply any patches
  try {
    execSync('npx patch-package', { stdio: 'inherit' });
    console.log('✅ patches applied');
  } catch (e) {
    console.log('⚠️ patch-package failed', e.message);
  }

  // Run the Nuxt build
  console.log('🏗️ Starting Nuxt build...');
  execSync('npx nuxt build', { stdio: 'inherit' });
  console.log('✅ Build completed');
} catch (error) {
  console.error('❌ Build failed', error.message);
  process.exit(1);
} 