require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// قراءة JSON
app.use(express.json());

// مجلد الواجهة (public) — بما إن index.js صار في الجذر
const publicDir = path.join(__dirname, "public");

// يخلي الملفات تنفتح مباشرة مثل: /tv.html و /logo.png
app.use(express.static(publicDir));

// (اختياري) يخليها تشتغل حتى لو كتبت /public/tv.html
app.use("/public", express.static(publicDir));

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

app.get("/tv", (req, res) => {
  res.sendFile(path.join(publicDir, "tv.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(publicDir, "admin.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(publicDir, "login.html"));
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
  console.log("🔐 رمز الدخول:", process.env.ADMIN_PIN || "2026");
  console.log("========================================\n");
});