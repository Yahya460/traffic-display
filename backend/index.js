require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// قراءة JSON
app.use(express.json());

// ملفات الواجهة
app.use(express.static(path.join(__dirname, "../public")));

// ===============================
// API تجريبية للتأكد أن السيرفر يعمل
// ===============================
app.get("/api/settings", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running successfully"
  });
});

// ===============================
// صفحات النظام
// ===============================
app.get("/", (req, res) => {
  res.redirect("/tv");
});

app.get("/tv", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tv.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/admin.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// ===============================
// تشغيل السيرفر
// ===============================
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("\n========================================");
  console.log("🚀 تم تشغيل نظام عرض معهد السلامة المرورية");
  console.log("📺 شاشة العرض:");
  console.log(`   http://localhost:${PORT}/tv`);
  console.log("⚙️ لوحة التحكم:");
  console.log(`   http://localhost:${PORT}/admin`);
  console.log("🔐 رمز الدخول: 2026");
  console.log("========================================\n");
});
// test change
