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
    }
EOL

    # restart nginx
    service nginx restart

ALWAYS

$once = <<ONCE

    # update and upgrade
    apt-get update
    # apt-get upgrade -y

    # install nginx
    apt-get install -y nginx

    # nginx tweaks - sendfile off, remove default server block
    sed -i "s/sendfile on/sendfile off/g" /etc/nginx/nginx.conf
    rm /etc/nginx/sites-enabled/default
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
