# 1. 更新系统
sudo apt-get update

# 2. 安装依赖
sudo apt-get install -y ca-certificates curl gnupg lsb-release

# 3. 添加 Docker 官方 GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. 添加 Docker 仓库
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. 更新 apt 并安装 Docker
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 6. 启动 Docker 并开机自启
sudo systemctl enable docker
sudo systemctl start docker

# 7. 验证
docker --version
docker compose version

# ================================================

# 1. 更新系统
sudo apt update && sudo apt upgrade -y

# 2. 添加 NodeSource 仓库（Node.js 22）
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

# 3. 安装 Node.js 和 npm
sudo apt install -y nodejs

# 4. 验证
node -v
npm -v

# 5. 安装 pnpm
npm i -g pnpm
pnpm -v
