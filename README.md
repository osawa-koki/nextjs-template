# nextjs-template

🌰🌰🌰 Next.jsアプリのテンプレートです。  
よく使用すると思われる`Bootstrap`と`SCSS`は既にインストールしてあります。  

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
