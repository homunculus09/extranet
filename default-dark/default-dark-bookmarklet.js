javascript:(function(){const localVersion="dark-theme-bookmarklet-2";fetch('https://raw.githubusercontent.com/homunculus09/extranet-themes/refs/heads/main/default-dark/version.txt').then(r=>r.text()).then(remoteVersion=>{if(localVersion!==remoteVersion.trim()){alert("Outdated version! Please visit github.com/homunculus09/extranet-themes/ to update!");}else{fetch('https://raw.githubusercontent.com/homunculus09/extranet-themes/refs/heads/main/default-dark/main.js').then(r=>r.text()).then(e=>eval(e)).catch(e=>console.error('Error:',e));}}).catch(e=>console.error('Error:',e));})();
