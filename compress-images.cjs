#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Konfiguration
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;
const INPUT_DIR = './public/images';
const BACKUP_DIR = './backup-images';

console.log('🖼️  Bildkomprimierung gestartet...');

// Prüfe ob ImageMagick installiert ist
try {
  execSync('convert -version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ ImageMagick ist nicht installiert!');
  console.log('📥 Installiere es mit:');
  console.log('   macOS: brew install imagemagick');
  console.log('   Ubuntu: sudo apt-get install imagemagick');
  console.log('   Windows: https://imagemagick.org/script/download.php');
  process.exit(1);
}

// Erstelle Backup-Ordner
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  console.log(`📁 Backup-Ordner erstellt: ${BACKUP_DIR}`);
}

// Funktion um alle Bilder zu finden
function findImages(dir) {
  const images = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      images.push(...findImages(filePath));
    } else if (/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)) {
      images.push(filePath);
    }
  }
  
  return images;
}

// Funktion um Bildgröße zu prüfen
function getImageSize(imagePath) {
  const stats = fs.statSync(imagePath);
  return {
    bytes: stats.size,
    mb: (stats.size / (1024 * 1024)).toFixed(2)
  };
}

// Funktion um Bild zu komprimieren
function compressImage(imagePath) {
  const originalSize = getImageSize(imagePath);
  
  // Skip kleine Bilder (unter 1MB)
  if (originalSize.bytes < 1024 * 1024) {
    console.log(`⏭️  ${imagePath} (${originalSize.mb}MB - bereits klein)`);
    return;
  }
  
  console.log(`🔄 Komprimiere ${imagePath} (${originalSize.mb}MB)...`);
  
  // Erstelle Backup
  const backupPath = path.join(BACKUP_DIR, path.basename(imagePath));
  fs.copyFileSync(imagePath, backupPath);
  
  // Konvertiere zu JPG und komprimiere
  const tempPath = imagePath + '.temp.jpg';
  const convertCmd = `convert "${imagePath}" -resize ${MAX_WIDTH}x${MAX_HEIGHT}> -quality ${QUALITY} "${tempPath}"`;
  
  try {
    execSync(convertCmd, { stdio: 'ignore' });
    
    // Ersetze Original mit komprimierter Version
    fs.renameSync(tempPath, imagePath.replace(/\.(png|PNG)$/i, '.jpg'));
    
    // Lösche Original wenn es umbenannt wurde
    if (imagePath.toLowerCase().endsWith('.png')) {
      fs.unlinkSync(imagePath);
    }
    
    const newSize = getImageSize(imagePath.replace(/\.(png|PNG)$/i, '.jpg'));
    const savings = ((originalSize.bytes - newSize.bytes) / originalSize.bytes * 100).toFixed(1);
    
    console.log(`✅ ${imagePath} → ${originalSize.mb}MB → ${newSize.mb}MB (${savings}% gespart)`);
    
  } catch (error) {
    console.error(`❌ Fehler bei ${imagePath}:`, error.message);
    // Lösche temp Datei falls vorhanden
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

// Hauptfunktion
function main() {
  console.log(`📂 Suche Bilder in ${INPUT_DIR}...`);
  
  const images = findImages(INPUT_DIR);
  console.log(`🔍 ${images.length} Bilder gefunden`);
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  // Berechne ursprüngliche Gesamtgröße
  images.forEach(imagePath => {
    totalOriginalSize += getImageSize(imagePath).bytes;
  });
  
  console.log(`📊 Ursprüngliche Gesamtgröße: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)}MB\n`);
  
  // Komprimiere alle Bilder
  images.forEach(compressImage);
  
  // Berechne neue Gesamtgröße
  images.forEach(imagePath => {
    const newPath = imagePath.replace(/\.(png|PNG)$/i, '.jpg');
    if (fs.existsSync(newPath)) {
      totalNewSize += getImageSize(newPath).bytes;
    } else if (fs.existsSync(imagePath)) {
      totalNewSize += getImageSize(imagePath).bytes;
    }
  });
  
  const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('\n🎉 Komprimierung abgeschlossen!');
  console.log(`📊 Neue Gesamtgröße: ${(totalNewSize / (1024 * 1024)).toFixed(2)}MB`);
  console.log(`💾 Gesamtersparnis: ${totalSavings}%`);
  console.log(`📁 Backup erstellt in: ${BACKUP_DIR}`);
  
  console.log('\n⚠️  WICHTIG: Du musst jetzt die Dateiendungen in deinem Code aktualisieren:');
  console.log('   .PNG → .jpg');
  console.log('   .JPG → .jpg');
}

main();