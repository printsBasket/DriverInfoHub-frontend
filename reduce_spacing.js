const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Reduce large paddings
            content = content.replace(/py-24 md:py-32/g, 'py-16 md:py-20');
            content = content.replace(/py-20 md:py-28/g, 'py-12 md:py-16');
            content = content.replace(/py-16 md:py-24/g, 'py-10 md:py-14');
            content = content.replace(/py-12 md:py-16/g, 'py-8 md:py-12');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated spacing in ${fullPath}`);
            }
        }
    });
}

const knowledgePath = path.join('src', 'app', 'knowledge');
processDir(knowledgePath);
