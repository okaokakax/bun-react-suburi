# bun-react-suburi

Bun にランタイムやらせてフレームワークは React でやる試作

# 環境構築までにやったこと

ローカルに bun をインストール（仕方ないので）

```
$ curl -fsSL https://bun.sh/install | bash
$ source ~/.bashrc
```

Vite プロジェクト作成

```
$ bunx create-vite
✔ Project name: … suburi
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC

bun install
```

までやって、Dockerfile 作成して、build して up したら立ち上がった
build もできた
ここまでできた環境を渡せば、各個人のローカル環境に Bun を入れて貰う必要はない

```
bun run build
```

S3 において Cloudfront でページも表示できた
https://web3coder.medium.com/getting-started-with-bun-and-react-db493e689454
https://bun.sh/guides/ecosystem/vite
