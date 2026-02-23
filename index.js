require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// قراءة JSON
app.use(express.json());

// ===============================
// مجلد الواجهة (public) موجود بنفس مستوى index.js
// ===============================
const PUBLIC_DIR = path.join(__dirname, "public");

// نخدم الملفات الثابتة (مثل tv.html و admin.html) من /
app.use(express.static(PUBLIC_DIR));

// (اختياري) نخدمها أيضاً من /public/ لتفادي اللخبطة لو كتبت /public/tv.html
app.use("/public", express.static(PUBLIC_DIR));

// ===============================
// API تجريبية للتأكد أن السيرفر يعمل
// ===============================
app.get("/api/settings", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running successfully",
  });
});

// ===============================
// صفحات النظام
// ===============================
app.get("/", (req, res) => {
  res.redirect("/tv");
});

// شاشة العرض
app.get(["/tv", "/tv.html"], (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "tv.html"));
});

// لوحة التحكم
app.get(["/admin", "/admin.html"], (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "admin.html"));
});

// تسجيل الدخول
app.get(["/login", "/login.html"], (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "login.html"));
});

// ===============================
// تشغيل السيرفر
// ===============================
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("\n========================================");
  console.log("🚀 تم تشغيل نظام عرض معهد السلامة المرورية");
  console.log("📺 شاشة العرض:");
  console.log(`   http://localhost:${PORT}/tv`);
  console.log("⚙️ لوحة التحكم:");
  console.log(`   http://localhost:${PORT}/admin`);
  console.log("========================================\n");
});