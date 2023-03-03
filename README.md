# nextjs-template

🌰🌰🌰 Next.jsのテンプレートです。  
よく使用すると思われるBootstrapとscssは既にインストールしてあります。  

## 実行方法

```shell
# モジュールのインストール
yarn

# 開発用実行
yarn dev

# ビルド
yarn build
```

## GitHubシークレットの設定

GitHub Actionsで使用するシークレットを設定します。  
これは、GitHubのリポジトリの`Settings`→`Secrets`から設定できます。  
Depricatedなパッケージを使用している場合にその旨を通知します。  

| シークレット名 | 説明 |
| --- | --- |
| SLACK_WEBHOOK_URL | SlackのWebhook URL |
