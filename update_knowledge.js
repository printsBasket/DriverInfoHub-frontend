const fs = require('fs');
const path = require('path');

const categories = ['printer', 'audio', 'network', 'graphics', 'usb', 'system'];

categories.forEach(cat => {
    let driverPath = path.join('src', 'app', 'drivers', cat, 'page.tsx');
    let content = '';
    try {
        content = fs.readFileSync(driverPath, 'utf8');
    } catch (e) {
        console.log(`Could not read ${driverPath}, trying alternative...`);
        driverPath = path.join('src', 'app', 'drivers', `${cat}-drivers`, 'page.tsx');
        try {
            content = fs.readFileSync(driverPath, 'utf8');
        } catch (e2) {
            console.log(`Could not read alternative for ${cat}`);
            return;
        }
    }

    console.log(`Processing ${cat} from ${driverPath}`);

    // Colors to replace
    const colors = 'blue|indigo|sky|cyan|amber|orange|teal|emerald|purple|red|green|yellow|pink|rose|fuchsia|violet';

    // Backgrounds for primary elements
    content = content.replace(new RegExp(`bg-(${colors})-(600|700|800|900)`, 'g'), 'bg-[#024AD8]');
    content = content.replace(new RegExp(`bg-gradient-to-[a-z]+ from-(${colors})-(600|700|800|900) to-(${colors})-(500|600|700|800)`, 'g'), 'bg-gradient-to-r from-[#024AD8] to-[#003BA8]');
    
    // Text colors
    content = content.replace(new RegExp(`text-(${colors})-(600|700|800)`, 'g'), 'text-[#024AD8]');
    
    // Gradient text
    content = content.replace(new RegExp(`from-(${colors})-(600|700|800)`, 'g'), 'from-[#024AD8]');
    content = content.replace(new RegExp(`to-(${colors})-(400|500|600)`, 'g'), 'to-[#003BA8]');
    
    // Light backgrounds
    content = content.replace(new RegExp(`bg-(${colors})-(50|100)`, 'g'), 'bg-[#024AD8]/5');
    content = content.replace(new RegExp(`from-(${colors})-50`, 'g'), 'from-[#024AD8]/5');
    content = content.replace(new RegExp(`to-(${colors})-50`, 'g'), 'to-[#024AD8]/5');
    content = content.replace(new RegExp(`via-(${colors})-50`, 'g'), 'via-[#024AD8]/5');
    
    // Borders
    content = content.replace(new RegExp(`border-(${colors})-(200|300)`, 'g'), 'border-[#024AD8]/20');
    content = content.replace(new RegExp(`border-(${colors})-(400|500)`, 'g'), 'border-[#024AD8]/50');
    content = content.replace(new RegExp(`border-(${colors})-(600|700)`, 'g'), 'border-[#024AD8]');

    // Other specific hero gradients like from-slate-900 via-indigo-900 to-slate-900
    content = content.replace(new RegExp(`via-(${colors})-(800|900)`, 'g'), 'via-[#024AD8]');
    
    // Hover states
    content = content.replace(new RegExp(`hover:text-(${colors})-(600|700)`, 'g'), 'hover:text-[#024AD8]');
    content = content.replace(new RegExp(`hover:border-(${colors})-(300|400)`, 'g'), 'hover:border-[#024AD8]/50');
    content = content.replace(new RegExp(`hover:bg-(${colors})-(50|100)`, 'g'), 'hover:bg-[#024AD8]/10');
    content = content.replace(new RegExp(`hover:bg-(${colors})-(600|700)`, 'g'), 'hover:bg-[#003BA8]');

    // Rename the component
    const functionNameMatch = content.match(/export default function ([a-zA-Z0-9]+)/);
    if (functionNameMatch) {
        const oldName = functionNameMatch[1];
        const newName = `Knowledge${cat.charAt(0).toUpperCase() + cat.replace(/-/g, '').slice(1)}`;
        content = content.replace(`export default function ${oldName}`, `export default function ${newName}`);
    }
    
    // Image paths (just in case they need to be preserved, they are absolute from public so they should be fine)
    // The user also mentioned "make sure all images are visible". Sometimes images are not visible if paths are wrong.
    // The driver pages use `<Image src="/assets/images/something.svg" ... />`. This should be visible everywhere.

    const knowledgePath = path.join('src', 'app', 'knowledge', cat, 'page.tsx');
    
    // Create directory if it doesn't exist
    const dir = path.dirname(knowledgePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(knowledgePath, content);
    console.log(`Updated ${knowledgePath}`);
});
