const fs = require('fs');
const path = require('path');

const sourceDir = 'c:/Users/pc/Downloads/driverwise';
const targetDir = 'd:/next-js/PrintSoftDrive/src/app';

const pagesToMigrate = [
  { source: 'about/index.html', target: 'about/page.tsx', name: 'About' },
  { source: 'contact/index.html', target: 'contact/page.tsx', name: 'Contact' },
  { source: 'knowledge/index.html', target: 'knowledge/page.tsx', name: 'Knowledge' },
  { source: 'blog/index.html', target: 'blog/page.tsx', name: 'Blog' },
  { source: 'drivers/index.html', target: 'drivers/page.tsx', name: 'Drivers' },
  { source: 'drivers/printer/index.html', target: 'drivers/printer/page.tsx', name: 'PrinterDrivers' },
  { source: 'drivers/scanner/index.html', target: 'drivers/scanner/page.tsx', name: 'ScannerDrivers' },
  { source: 'drivers/graphics/index.html', target: 'drivers/graphics/page.tsx', name: 'GraphicsDrivers' },
  { source: 'drivers/audio/index.html', target: 'drivers/audio/page.tsx', name: 'AudioDrivers' },
  { source: 'drivers/network/index.html', target: 'drivers/network/page.tsx', name: 'NetworkDrivers' },
  { source: 'drivers/bluetooth/index.html', target: 'drivers/bluetooth/page.tsx', name: 'BluetoothDrivers' },
  { source: 'drivers/usb/index.html', target: 'drivers/usb/page.tsx', name: 'USBDrivers' },
  { source: 'legal/privacy/index.html', target: 'privacy/page.tsx', name: 'Privacy' },
  { source: 'legal/terms/index.html', target: 'terms/page.tsx', name: 'Terms' },
  { source: 'legal/disclaimer/index.html', target: 'disclaimer/page.tsx', name: 'Disclaimer' }
];

function convertHtmlToJsx(html) {
  let jsx = html.substring(html.indexOf('<main id="main">') + 16, html.lastIndexOf('</main>'));
  jsx = jsx.replace(/class="/g, 'className="');
  jsx = jsx.replace(/for="/g, 'htmlFor="');
  jsx = jsx.replace(/<img(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'));
  jsx = jsx.replace(/<input(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'));
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/style="([^"]+)"/g, (match, p1) => {
    const styles = p1.split(';').filter(Boolean).map(s => {
      const parts = s.split(':');
      if(parts.length < 2) return '';
      const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      const value = parts.slice(1).join(':').trim();
      return `${key}: '${value}'`;
    }).join(', ');
    return `style={{ ${styles} }}`;
  });
  jsx = jsx.replace(/href="\.\.\//g, 'href="/');
  jsx = jsx.replace(/href="\.\.\/\.\.\//g, 'href="/');
  jsx = jsx.replace(/src="\.\.\//g, 'src="/');
  jsx = jsx.replace(/src="\.\.\/\.\.\//g, 'src="/');
  
  // Custom links fixing
  jsx = jsx.replace(/href="\/?legal\/privacy\/"/g, 'href="/privacy/"');
  jsx = jsx.replace(/href="\/?legal\/terms\/"/g, 'href="/terms/"');
  jsx = jsx.replace(/href="\/?legal\/disclaimer\/"/g, 'href="/disclaimer/"');

  return jsx;
}

pagesToMigrate.forEach(page => {
  const fullSource = path.join(sourceDir, page.source);
  const fullTarget = path.join(targetDir, page.target);
  
  if (!fs.existsSync(fullSource)) {
    console.log(`Source not found: ${fullSource}`);
    return;
  }
  
  const html = fs.readFileSync(fullSource, 'utf8');
  const jsxContent = convertHtmlToJsx(html);
  
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].replace('DriverWise', 'PrintSoftDrive') : page.name;
  
  const descMatch = html.match(/<meta name="description" content="(.*?)">/);
  const description = descMatch ? descMatch[1].replace(/DriverWise/g, 'PrintSoftDrive') : '';

  const fileContent = `import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
}

export default function ${page.name}() {
  return (
    <>
      ${jsxContent}
    </>
  )
}
`;

  const targetDirPath = path.dirname(fullTarget);
  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true });
  }
  
  fs.writeFileSync(fullTarget, fileContent);
  console.log(`Migrated ${page.name} to ${fullTarget}`);
});
