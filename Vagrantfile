# -*- mode: ruby -*-
# vi: set ft=ruby :

$IP = "192.168.9.17"
$MEM = "1024"

# set up our provisioning scripts as ruby variables
$always = <<ALWAYS
cat > /etc/nginx/sites-enabled/site <<'EOL'
    server {
        listen 80;
        server_name tskr.dev;
        root /var/www/app;
        index index.html index.htm;

        try_files $uri $uri/ /index.html =404;
    }

    server {
        listen 80;
        server_name cdn.tskr.dev;
        root /var/www/cdn;
        index index.html index.htm;

        try_files $uri $uri/ /index.html =404;

        # enable CORS
        location / {
            if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';

                # Custom headers and headers various browsers *should* be OK with but aren't
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';

                # Tell client that this pre-flight info is valid for 20 days
                add_header 'Access-Control-Max-Age' 1728000;
                add_header 'Content-Type' 'text/plain charset=UTF-8';
                add_header 'Content-Length' 0;
                return 204;
            }
            if ($request_method = 'POST') {
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
            }
            if ($request_method = 'GET') {
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
            }
        }
    }

    server {
        listen 80;
        server_name api.tskr.dev;
        root /var/www/api/app;

        location / {
            index index.php index.html index.htm;
            try_files $uri /index.php?$query_string;
        }

        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
EOL

    # restart nginx
    service nginx restart

    # update jspm packages
    cd /var/www/cdn/js && jspm install

ALWAYS

$once = <<ONCE

    # add repo for php-7
    add-apt-repository ppa:ondrej/php

    # update and upgrade
    apt-get update
    # apt-get upgrade -y

    # install nginx
    apt-get install -y nginx

    # nginx tweaks - sendfile off, remove default server block
    sed -i "s/sendfile on/sendfile off/g" /etc/nginx/nginx.conf
    rm /etc/nginx/sites-enabled/default

    # install php7 fpm
    apt-get install -y php7.0-fpm

    # install node and npm
    curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -
    apt-get install -y nodejs

    # install zip and git
    apt-get install -y zip
    apt-get install -y git

    # install jspm globally
    npm install -g jspm@0.16

ONCE

Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: $IP
    config.vm.synced_folder ".", "/var/www"
    config.vm.provider "virtualbox" do |vb|
        vb.memory = $MEM
    end
    config.vm.provision "once", type: "shell", inline: $once
    config.vm.provision "always", type: "shell", inline: $always, run: "always" 
end
