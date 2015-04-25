sudo apt-get update
sudo apt-get install -y wget

wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker `whoami`

sudo curl -L https://github.com/docker/fig/releases/download/1.0.1/fig-`uname -s`-`uname -m` > /usr/local/bin/fig
sudo chmod +x /usr/local/bin/fig
