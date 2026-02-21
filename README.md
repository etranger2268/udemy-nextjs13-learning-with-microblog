# udemy-nextjs13-learning-with-microblog

<https://www.udemy.com/course/nextjs13_learning_with_microblog/>

## 技術スタック

- [Next.js](https://nextjs.org/)
- [React](https://ja.react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- [Biome](https://biomejs.dev/)
- [Zod](https://zod.dev/)
- [json-server](https://www.npmjs.com/package/json-server) (開発時のテストデータ用)
- [Lefthook](https://github.com/evilmartians/lefthook)
- [Concurrently](https://github.com/open-cli-tools/concurrently)

## 開発

### 1. 依存関係のインストール

プロジェクトの依存関係をインストールします。

``` bash
npm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env.local`（または `.env`）を作成し、必要な値を設定します。

``` bash
cp .env.example .env.local
```

主要な設定項目

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabaseプロジェクトの接続情報
- `UNSPLASH_ACCESS_KEY`: Unsplash APIのアクセスキー（画像取得用）
- `API_URL`: モックサーバー（json-server）のURL（デフォルトは `http://localhost:3001`）

### 3. lefthookの準備

lefthookのgitフックを準備します。

``` bash
npm run prepare
```

### 3. 開発サーバーの起動

Next.js開発サーバーのみを起動する場合

``` bash
npm run dev
```

Next.jsとモックサーバー（json-server）を同時に起動する場合

``` bash
npm run dev:all
```

ファイルの変更を監視し、自動的にブラウザを更新します。

### 4. 型チェック

TypeScriptによる型チェックを実行します。

``` bash
npm run type-check
```

### 5. コードの自動修正

[Biome](https://biomejs.dev/)を使い、リントエラーやフォーマットの問題を自動で修正します。

``` bash
npm run fix
```

### 6. 本番用ビルド

本番用のアプリケーションを`next`ディレクトリにビルドします。  
ビルド前に型チェックとBiomeによるLintチェックが実行されます。

``` bash
npm run build
```

### 7. 本番用プレビュー

ビルドされたアプリケーションをローカルでプレビューします。

``` bash
npm run preview
```

### 8. ビルド成果物の削除

`.next` ディレクトリを削除します。

``` bash
npm run clean
```
