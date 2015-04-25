if ! which wget > /dev/null; then
    sudo apt-get update
    sudo apt-get install -y wget
fi

if ! which docker > /dev/null; then
    wget -qO- https://get.docker.com/ | sh
    sudo usermod -aG docker `whoami`
fi

if ! which fig > /dev/null; then
    sudo curl -L https://github.com/docker/fig/releases/download/1.0.1/fig-`uname -s`-`uname -m` > /usr/local/bin/fig
    sudo chmod +x /usr/local/bin/fig
fi
