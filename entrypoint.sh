#!/bin/sh
set -eu

node -e "const fs=require('fs');const cfg=Object.fromEntries(Object.entries(process.env).filter(([k,v])=>k.startsWith('APP_')&&v!==undefined));fs.writeFileSync('/app/dist/runtime-config.js', 'window.__APP_CONFIG__ = ' + JSON.stringify(cfg) + ';\\n');"

exec "$@"
