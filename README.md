# chanryPortfolioV2

Chanry 的個人網站，第二代版本（2025）

## 特色

- React + TypeScript + Vite 前端專案
- 元件：作品區、技能、經歷、聯絡等

## 技術棧

- React
- TypeScript
- Vite

## 快速開始（本機開發）

1. 取得專案

```bash
git clone https://github.com/chanryTW/chanryPortfolioV2.git
cd chanryPortfolioV2
```

2. 安裝套件

```bash
npm install
# 或者使用 yarn
# yarn
```

3. 啟動開發伺服器

```bash
npm run dev
# 或者
# yarn dev
```

## 常用指令（package.json scripts）

- npm run dev — 本機開發
- npm run build — 建置生產檔案
- npm run preview — 在本機預覽建置後的產出

## 專案結構（重點檔案）

- `App.tsx`, `index.tsx` — 進入點
- `components/` — 共用 UI 元件
- `components/sections/` — 各頁區段（About、Works、Contact 等）
- `locales/` — 多國語系文字（en/ja/zh）