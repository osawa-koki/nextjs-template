# nextjs-template

🌰🌰🌰 Next.jsアプリのテンプレートです。  
よく使用すると思われる`Bootstrap`と`SCSS`は既にインストールしてあります。  

[![ci](https://github.com/osawa-koki/nextjs-template/actions/workflows/ci.yml/badge.svg)](https://github.com/osawa-koki/nextjs-template/actions/workflows/ci.yml)  
[![cd](https://github.com/osawa-koki/nextjs-template/actions/workflows/cd.yml/badge.svg)](https://github.com/osawa-koki/nextjs-template/actions/workflows/cd.yml)  

## 実行方法

```shell
# モジュールのインストール
yarn install

# 開発用実行
yarn dev

# ビルド
yarn build
```

Dockerを使用する場合は以下のコマンドを実行してください。  

```shell
# Dockerイメージのビルド
docker build -t nextjs-template .

# Dockerコンテナの実行
docker run --rm -d -p 80:80 --name nextjs-template nextjs-template
```
