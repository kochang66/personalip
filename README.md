# 🎯 最終任務 - 個人品牌網站

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive Design](https://img.shields.io/badge/Responsive-Design-blue?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-green?style=for-the-badge&logo=github)
![Google Analytics 4](https://img.shields.io/badge/Google-Analytics_4-ff6f00?style=for-the-badge&logo=googleanalytics&logoColor=white)

👉 [點我前往網站](https://kochang66.github.io/personalip/)

🎈 這是「**六角學院：2025 年 30 天軟體工程師體驗營**」的最終任務作業，目標是製作具備 RWD 響應式設計的個人品牌網站，總共有三頁 RWD 網頁頁面，畫面不可顯示 X 軸，並串接一個網站服務 ✨

---

## 🔧 使用技術與工具

| 類別 | 技術 |
|------|------|
| 前端技術 | HTML、CSS（手刻版）、JavaScript |
| 響應式設計 | CSS Media Queries |
| 圖示庫 | Bootstrap Icons |
| 動畫套件 | AOS.js |
| 網頁字型 | Google Fonts - Noto Sans TC（思源黑體 - 繁體中文）|
| 串接服務 | Google Analytics 4 (GA4) |

---

## 🧱 網站頁面結構

- `index.html`：首頁，含主視覺圖片、關於我、專業服務、部落格、成功案例、訂閱電子報、聯絡資訊等區塊
- `blog.html`：部落格主頁，列表顯示文章卡片，含搜尋與分頁元件
- `article.html`：單篇文章詳細頁面

---

## 🖥️ 響應式設計斷點

- `>= 1296px`：桌機版（三欄卡片）
- `992px ~ 1295px`：平板橫向（兩欄卡片）
- `767px ~ 991px`：平板直向（兩欄卡片）
- `< 767px`：手機版（單欄卡片）

---

## 📈 串接服務

整合 [Google Analytics 4 (GA4)](https://analytics.google.com/) 追蹤網站瀏覽資料，並驗證 GA 成功接收資料

```html
<!-- Google tag (gtag.js) 設定 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📝 作業資訊

- 作業等級：LV3（完成所有 RWD 頁面 + 串接一個網站服務）
- GitHub Repo：[`https://github.com/kochang66/personalip`](https://github.com/kochang66/personalip)
- GitHub Pages：[`https://kochang66.github.io/personalip/`](https://kochang66.github.io/personalip/)

---

## 💡 備註說明

🔗 本作品依據 [六角學院設計稿](https://www.figma.com/design/bBHUp0TeM0yjAlkjtyxQJI/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?node-id=236-1109) 🎨製作，並進行優化與排版調整

---

## ⚠️ 注意事項

- **禁止使用 `overflow-x: hidden` 解決 X 軸問題**
- 所有版面皆符合 RWD 響應式規範
