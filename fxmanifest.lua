fx_version 'cerulean'
game 'gta5'

author 'Your Name'
description 'Car Radio Interface for QBCore'
version '1.0.0'

ui_page 'web/dist/index.html'

client_scripts {
    'client/main.lua',
}

server_scripts {
    'server/main.lua',
}

files {
    'web/dist/index.html',
    'web/dist/**/*',
}