# MiKel-dsajfkljasdkfljalsk



## Shared project design reference

Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the complete extracted design system. Project chats and agents should follow [AGENTS.md](AGENTS.md).


## صفحه‌های ابزار و وبلاگ

منوی «ابزارها» به صفحه‌های tool-online-menu.html، tool-discounts.html، tool-staff.html، tool-tables.html و tool-printer.html وصل است. پایه tool-inventory.html و tool-loyalty.html ساخته شده و گزینه‌های منوی آن‌ها فعلاً غیرفعال‌اند. blog.html صفحه خالی وبلاگ است. همه این صفحه‌ها هدر و فوتر مشترک و main خالی دارند.

فایل‌های assets/site-interactions.css و assets/site-interactions.js منوی ابزارها، توضیح کارت‌ها و انیمیشن تکرارپذیر سوالات متداول را کنترل می‌کنند. صفحه‌های پایه از assets/page-base.css استفاده می‌کنند.


## مرجع مشترک استایل همه صفحه‌ها

هر ۱۱ صفحه فونت، رنگ‌ها، کانتینر، هدر، دکمه‌ها و فوتر را از assets/design-system.css دریافت می‌کنند. assets/page-base.css چیدمان و تایپوگرافی فشرده همه صفحات داخلی را تعیین می‌کند. assets/site-interactions.css و assets/site-interactions.js تعامل‌های مشترک را تکمیل می‌کنند. فایل فونت نسبت به پوشه CSS بارگذاری می‌شود؛ CSS صفحه‌ها را دوباره به‌صورت inline کپی نکنید. متن‌های تاییدشده و محتوای خالی ابزارها و وبلاگ حفظ شده‌اند.


نمای موبایل: تصویر هیرو قبل از تیتر ۲۸ پیکسلی می‌آید. نام کارت‌های خرید ۱۱ پیکسل و علامت توضیح در ستون جداست. assets/testimonials.js در موبایل یک نظر افقی و در دسکتاپ سه نظر نشان می‌دهد؛ مکث ۱٫۵ ثانیه و فلش‌های دستی حفظ شده‌اند.


کاهش اندازه متن فقط برای موبایل تا عرض ۷۲۰ پیکسل است. اندازه دسکتاپ به قبل برگشته: تیتر اصلی ۵۶، عنوان صفحات داخلی ۴۰ (تبلت ۳۶) و متن پایه ۱۶ پیکسل. موبایل تیتر اصلی ۲۸، عنوان داخلی ۲۴، عنوان کارت خرید ۱۱ و متن پایه ۱۴ پیکسل دارد.

منوی موبایل: پنل کناری مات از سمت چپ با لایه سبز و محوشدگی پشت صفحه، کنترل بستن و Escape؛ پیاده‌سازی مشترک در assets/site-interactions.css و assets/site-interactions.js.
