const fs=require('fs'),path=require('path');
const cp=(from,to,re)=>{fs.mkdirSync(to,{recursive:true});for(const f of fs.readdirSync(from)){const p=path.join(from,f);if(fs.statSync(p).isFile()&&re.test(f))fs.copyFileSync(p,path.join(to,f));}};
cp('node_modules/@electric-sql/pglite/dist','site/vendor/pglite',/^(index\.js|chunk-.*\.js|pglite\.(wasm|data)|initdb\.wasm|pglite\.js|initdb\.js)$/);
cp('node_modules/pyodide','site/vendor/pyodide',/^(pyodide\.(js|mjs)|pyodide\.asm\.(js|mjs|wasm)|python_stdlib\.zip|pyodide-lock\.json)$/);
