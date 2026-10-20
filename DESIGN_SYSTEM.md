# دیزاین سیستم میکل

> تاریخ استخراج: ۲۰ اکتبر ۲۰۲۶ — ۱۴۰۵/۰۷/۲۸. منبع: کد موجود در `index.html`، `about.html`، `updates.html` و پوشه `assets/`. این سند وضعیت پیاده‌سازی فعلی را ثبت می‌کند؛ مقادیر CSS آن از روی فایل‌ها استخراج شده‌اند و نتیجه اندازه‌گیری بصری مرورگر نیستند.

## ۱. نحوه استفاده و اولویت منابع

- این فایل مرجع مشترک طراحی پروژه است. پیش از تغییر ظاهر سایت، این سند و `AGENTS.md` را بخوانید.
- دستور جدید و صریح کاربر اولویت دارد. پس از تغییر تأییدشده، این سند را نیز به‌روز کنید.
- «مقیاس تایپوگرافی» مجموعه توکن‌هاست؛ همه کامپوننت‌ها عملاً از همان مقیاس استفاده نمی‌کنند. اندازه نهایی کامپوننت و override صفحه تعیین‌کننده است.
- CSS به صورت inline در هر سه صفحه است؛ stylesheet مشترک خارجی و کتابخانه کامپوننت مستقل وجود ندارد. کپی‌های هدر و فوتر باید هنگام تغییر هماهنگ شوند.
- ترتیب cascade مهم است: استایل پایه، media queryها و در نهایت override اختصاصی صفحه. پیوست CSS عین ترتیب فایل را حفظ می‌کند.
- CSSهای باقی‌مانده از قسمت‌های حذف‌شده را خودکار به رابط کاربری برنگردانید. وجود selector به‌تنهایی به معنی استفاده آن در صفحه نیست.

## ۲. هویت و اصول ظاهری

نام محصول «میکل» است؛ شکل اعراب‌دار «میکِل» نیز در کد وجود دارد. نام قدیمی «میک‌کافه» در متن‌های سایت با «میکل» جایگزین شده است. زبان فارسی، جهت کلی راست‌به‌چپ، پس‌زمینه گرم و روشن، سطوح سفید، سبز تیره برند، تأکید نارنجی، گوشه‌های گرد و سایه‌های نرم مبنای ظاهرند.

فایل‌ها UTF-8 هستند، با `<html lang="fa" dir="rtl">` و `<meta charset="utf-8">`. هنگام ویرایش، خواندن و نوشتن UTF-8 را صریح تعیین کنید. اسکریپت PowerShell دارای متن فارسی را با کدگذاری مناسب اجرا کنید؛ در این پروژه کدگذاری اشتباه قبلاً متن نظرات را خراب کرده است. صحت حروف فارسی را از خود فایل نهایی کنترل کنید.

## ۳. رنگ‌ها و توکن‌های معنایی

| نقش | مقدار | کاربرد |
| --- | --- | --- |
| پس‌زمینه برند | `#F3F1ED` | بدنه و اکثر سکشن‌ها |
| نارنجی برند | `#F17938` | دکمه‌ها، قیمت، عدد تأکیدی، نقاط و نقل‌قول |
| سبز اصلی برند | `#192827` | فوتر، خلاصه خرید، بخش‌هایی از عنوان‌ها و CTA |
| نارنجی تیره | `#cf5d25` | hover لینک و متن تأکیدی |
| hover دکمه اصلی | `#f58a4f` | زمینه دکمه در hover |
| سبز مکمل | `#087f7a` | حالت انتخاب افزونه، گرادیان CTA و حاشیه دکمه |
| سبز مکمل CTA | `#0b6b63` | انتهای گرادیان |
| سطح اصلی | `#fff` | کارت‌ها و پنل‌ها |
| متن بدنه صفحه اصلی / `--ink` | `#1e293b` | مقدار توکن فعلی؛ با سبز برند یکسان نیست |
| متن ثانویه صفحه اصلی / `--muted` | `#64748b` | توضیحات و جزئیات |
| متن صفحات فرعی / `--ink` | `#192827` | override درباره و تاریخچه |
| متن ثانویه صفحات فرعی / `--muted` | `#586966` | override درباره و تاریخچه |
| مرز پایه / `--line` | `#e2e8f0` | حاشیه کارت، پنل و دکمه |
| موفقیت / `--green` | `#15803d` | تیک و تغییر مثبت |
| خطا / `--red` | `#dc2626` | توکن وضعیت خطا |
| نارنجی لطیف | `rgba(241,121,56,.12)` | مربع نقل‌قول و حلقه نقاط |
| سطح انتخاب‌شده | `#f7fbf9` | کارت افزونه فعال |
| متن روی سطح تیره | `#fff`، `#e7ecea` | خلاصه خرید و فوتر |
| متن ثانویه روی تیره | `#b8c4c1`، `#c3d2ce` | توضیح و برچسب خلاصه خرید |
| focus عمومی | `#f59e0b` | outline سه پیکسلی با فاصله سه پیکسل |

توکن‌های آبی `--blue:#2563eb`، `--blue-dark:#1d4ed8` و `--blue-soft:#eff6ff` هنوز در CSS وجود دارند. برخی نمودارها، هاله‌ها، focus ورودی و زمینه آیکون‌ها از آن‌ها استفاده می‌کنند. این‌ها را رنگ اصلی برند جدید تلقی نکنید. گرادیان متحرک دکمه هدر نیز عمداً یک بخش `#3B82F6` دارد. فهرست کامل مقادیر رنگ و CSS در پیوست آمده است.

گرادیان‌های اصلی:

```css
/* CTA سبز */
linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%)
/* قاب انتخاب افزونه */
linear-gradient(125deg,#192827 0%,#087f7a 48%,#f17938 100%)
/* زمینه تصویر بلاگ */
linear-gradient(135deg,#e8eef8,#fff1e9)
```

## ۴. تایپوگرافی

فونت: `IRANSansFaNum`، منبع `assets/IRANSans-FaNum-Medium.ttf`، fallback: `Tahoma, sans-serif`، `font-display:swap`. تنها فایل Medium با `font-weight:500` معرفی شده است. وزن‌های ۴۰۰، ۷۰۰ و ۸۰۰ در CSS درخواست می‌شوند؛ فایل مستقل Regular/Bold در assets وجود ندارد و نباید وجود آن‌ها را فرض کرد.

بدنه پایه: ۱۶px، وزن ۵۰۰، `line-height:1.8`. اندازه‌های rem زیر با فرض اندازه ریشه پیش‌فرض ۱۶px تفسیر می‌شوند؛ مرورگر کاربر می‌تواند این پیش‌فرض را تغییر دهد.

### مقیاس توکن‌ها

| توکن | اندازه | وزن |
| --- | --- | --- |
| `--type-heading-1` | 64px | 700 |
| `--type-heading-2` | 56px | 700 |
| `--type-heading-3` | 48px | 700 |
| `--type-heading-4` | 40px | 700 |
| `--type-heading-5` | 32px | 700 |
| `--type-heading-6` | 24px | 700 |
| `--type-body-1` | 24px | 400 |
| `--type-body-2` | 22px | 400 |
| `--type-button-xl` | 32px | 400 |
| `--type-button-lg` | 28px | 400 |
| `--type-button-md` | 24px | 400 |
| `--type-button-sm` | 20px | 400 |
| `--type-button-xs` | 16px | 400 |

کلاس‌های مصرف: `.type-heading-1` تا `.type-heading-6`، `.type-body-1/2` و `.button-xl/lg/md/sm/xs`. line-height کلاس تیتر ۱٫۳ و بادی ۱٫۶ است. `h1` هیرو line-height برابر ۱٫۲۵ و letter-spacing برابر `-.055em` دارد. `h2` عمومی ۴۰px با line-height ۱٫۳ و letter-spacing برابر `-.045em` است.

### اندازه‌های نهایی مهم

| المان | دسکتاپ | موبایل / استثنا |
| --- | --- | --- |
| تیتر هیرو | 56px (`--type-heading-2`) | 56px در ≤720؛ اندازه ثابت مطابق آخرین دستور کاربر |
| توضیح هیرو | 1.08rem | 1rem در ≤720 |
| عنوان ویدیو | `clamp(12px,2.2vw,34px)`، یک خط | `clamp(12px,3.5vw,20px)` |
| عنوان تعرفه | 32px | قانون عمومی عنوان تعرفه حفظ می‌شود |
| متن کارت افزونه | .86rem / 700 | wrap مجاز |
| عنوان صفحه تاریخچه | 40px | ≤980: 36px؛ ≤720: 28px |
| توضیح صفحه تاریخچه | 18px | 16px |
| تیتر کارت تاریخچه | 20px | 18px |
| متن کارت تاریخچه | 16px | 15px |
| برچسب نسخه | 14px | 13px |
| عنوان درباره ما | 40px | ≤980: 36px؛ ≤720: 28px |
| متن معرفی درباره ما | 18px | 16px |
| تیتر کارت ارزش‌ها | 20px | 18px |
| متن کارت ارزش‌ها | 16px | 15px |
| دعوت پایانی درباره ما | 28px | 24px |
| نام نویسنده نظر | .92rem / 700 | .66rem |
| متن نظر | .9rem، line-height 1.9 | .68rem، line-height 1.75 |

عنوان اصلی صفحه اول اکنون در دسکتاپ و موبایل ۵۶px است و از توکن heading-2 استفاده می‌کند. توکن عمومی H1 همچنان ۶۴px باقی مانده است. عنوان‌های صفحات درباره ما و تاریخچه در دسکتاپ ۴۰px و در موبایل ۲۸px هستند.

## ۵. چیدمان، فاصله و ابعاد

| الگو | مقدار فعلی |
| --- | --- |
| کانتینر دسکتاپ | `min(1160px,calc(100% - 48px))`؛ وسط‌چین |
| کانتینر ≤720px | `min(100% - 32px,560px)` |
| ارتفاع هدر | 78px؛ موبایل 68px |
| scroll offset | `scroll-padding-top:88px` |
| هیرو | `min-height:calc(100svh - 78px)`؛ padding `34px 0 42px` |
| ستون‌های هیرو | `.92fr 1.08fr`؛ gap 42px |
| سکشن محتوایی | padding عمودی 92px؛ موبایل 68px |
| عنوان سکشن | max-width 650px؛ فاصله پایین 42px |
| سکشن ویدیو | `112px 0 34px`؛ موبایل `58px 0 28px` |
| تصویر ویدیو | max-width 860px؛ نسبت 16/9 |
| workflow | ستون‌های `.9fr 1.1fr`؛ gap 55px |
| feature grid | 3 ستون / gap 18px |
| module grid | 4 ستون / gap 14px |
| blog grid | 3 ستون / gap 16px |
| تعرفه | padding `34px 0 38px`؛ عنوان با margin-bottom 18px |
| نظرات | padding عمودی 82px؛ موبایل 58px |
| صفحات فرعی | padding `64px 0 80px`؛ موبایل `40px 0 56px` |

فواصل رایج واقعی: ۴، ۶، ۸، ۹، ۱۰، ۱۲، ۱۴، ۱۶، ۱۸، ۲۰، ۲۲، ۲۴، ۲۸، ۳۰، ۳۲، ۳۶، ۴۰، ۴۲، ۴۸، ۵۵، ۶۴، ۶۸، ۸۰، ۸۲، ۸۸ و ۹۲px. یک مقیاس spacing توکنی مستقل در کد تعریف نشده؛ این اعداد مقادیر مصرف‌شده‌اند، نه ادعای یک سیستم مضارب هشت.

## ۶. سطوح، گوشه‌ها، سایه و لایه‌بندی

- شعاع پایه `--radius:20px`؛ دکمه ۱۲px؛ FAQ و workflow ۱۴px؛ کارت بلاگ و نظر ۱۸px؛ ویدیو و CTA ۲۶px؛ قاب بیرونی پلن ۲۸px؛ badge کپسولی `999px` یا `50%`.
- سایه پایه: `0 20px 50px rgba(30,41,59,.10)`؛ سایه نرم: `0 8px 24px rgba(30,41,59,.07)`.
- blur هدر: `blur(20px) saturate(145%)`؛ زمینه `rgba(243,241,237,.52)` و border با alpha .10.
- کارت‌ها غالباً مرز ۱px و سطح سفید دارند. قاب پلن با padding دو پیکسل، مرز گرادیانی می‌سازد.
- z-index هدر ۲۰؛ skip-link برابر ۱۰۰؛ کارت افزونه عادی صفر و با `.period-open` برابر ۲۰؛ منوی دوره ۳۰ درون همان کارت؛ کارت وسط نظرات ۱؛ برچسب workflow برابر ۲.
- برای dropdown فقط z-index خود منو کافی نیست: کارت والد باید در stacking context بالاتری از کارت‌های همسایه قرار گیرد. حالت `.period-open` را حفظ کنید؛ منو نباید توسط overflow والد بریده شود.

## ۷. کامپوننت‌ها و حالت‌ها

### هدر و ناوبری

`.topbar` sticky در بالای صفحه، دارای backdrop blur. لوگو در `.brand-mark` با ابعاد ۴۶×۴۶ و `object-fit:contain`؛ در ≤420 ابعاد ۳۸×۳۸. نام برند 1.25rem و در ≤420 برابر 1.1rem است. ترتیب لینک‌ها: تعرفه‌ها، بلاگ، تاریخچه به‌روزرسانی، درباره ما. لوگو لینک صفحه اصلی است. در صفحات فرعی anchorها به `index.html#…` اشاره می‌کنند و لینک صفحه جاری `aria-current="page"` دارد.

در ≤720 منوی کشویی با `.menu-toggle`، ابعاد ۴۴×۴۴، `aria-expanded` و `.nav-links.open` فعال می‌شود. پنل از کناره‌ها ۱۶px فاصله دارد، top برابر ۶۰px، padding ۱۲px و radius ۱۴px است. کلیک لینک منو را می‌بندد.

### دکمه‌ها

`.button`: min-height ۴۸px، padding `10px 20px`، gap ۹px، border یک پیکسل، radius ۱۲px، متن ۱۶px / ۴۰۰. آیکون ۱۸×۱۸. hover: `translateY(-2px)` طی .22s.

`.button-primary`: نارنجی و متن سفید؛ `.button-quiet`: سفید با مرز و متن ink. کلاس قدیمی `.button-blue` در پیاده‌سازی فعلی نارنجی است. دکمه هدر «رایگان شروع کنید» min-height ۴۴px و padding `8px 15px` دارد؛ در ≤420 متن .72rem، ارتفاع ۳۸px و padding `6px 8px` می‌شود.

دکمه هدر LightBeam با CSS خالص پیاده شده: `@property --lightbeam-angle`، گرادیان مخروطی، دور کامل ۳٫۲ ثانیه خطی، درخشش داخلی و shine در hover با مدت .45s. این پروژه برای این دکمه به React، framer-motion یا Tailwind وابسته نیست.

### هیرو و کلمات چرخان

تیتر سه خط ثابت دارد: «دخل و خرج»، خط متغیر، «رو مدیریت کن». ترتیب کلمات: «کافی شاپت»، «رستورانت»، «آبمیوه بستنیت»، «فست فودیت». ساختار چهار وجهی 3D با preserve-3d، perspective برابر ۷۰۰px، ارتفاع 1.25em و عمق وجه .625em است. هر گام rotateX برابر منفی ۹۰ درجه است و در برگشت لوپ هم جهت عوض نمی‌شود. انیمیشن transform مدت .68s و easing برابر `cubic-bezier(.65,0,.35,1)` دارد؛ interval کد ۱۶۸۰ms است. یک متن نامرئی اندازه ظرف را ثابت نگه می‌دارد. واژه‌ها تایپ نمی‌شوند.

رسانه فعلی هیرو ویدیوی loop است؛ `autoplay`, `muted`, `loop`, `playsinline` را با markup پیوست تطبیق دهید. کلاس `.hero-illustration` دارای عرض حداکثر ۵۴۰px، نسبت ۱:۱ و object-fit contain است. وجود تصویر `mikel-hero.webp` به معنی نمایش فعلی آن به‌جای ویدیو نیست.

### پیش‌نمایش ویدیو

قاب ۱۶:۹ با radius ۲۶px، پس‌زمینه سبز تیره، تصویر cover و max-width ۸۶۰px. play دایره‌ای ۸۲px با blur و مرکز مطلق؛ موبایل ۶۲px. این بخش فعلاً تصویر جایگزین ویدیو دارد؛ ظاهر play به‌تنهایی اثبات پخش ویدیو نیست. عنوان یک‌خطی و اعداد ۳ نارنجی و بزرگ‌تر با `.result-number` هستند: اندازه 1.28em، وزن ۸۰۰.

### workflow و آکاردئون

تصویر داشبورد با Screenshot (123).png، تصویر سفارش‌گیری با Screenshot (126).png، تصویر فروش با Screenshot (128).png و تصویر هزینه‌ها با Screenshot (131).png جایگزین شده‌اند. برای هر چهار تصویر، crop قبلی غیرفعال است: top و left صفر، width و height صد درصد و object-fit برابر contain؛ بنابراین تصویر کامل داخل همان قاب ثابت دیده می‌شود.

چهار بخش سفارش‌گیری، داشبورد، فروش و هزینه‌ها با `details/summary`، ابتدا بسته. هنگام بازشدن یک مورد، بقیه بسته می‌شوند. علامت + به − تبدیل می‌شود. قاب تصویر نسبت ۱٫۹ دارد و ثابت می‌ماند؛ عکس با opacity .24s محو می‌شود، src پس از ۲۴۰ms تغییر می‌کند و بعد از load تصویر جدید نمایان می‌شود. top عکس منفی ۱۰٪، left منفی ۱۲٫۵٪ و width برابر ۱۲۵٪ است؛ این crop عمدی است. بسته‌شدن همه پنل‌ها آخرین تصویر را پاک نمی‌کند.

### CTA سبز

`.cta-panel` با گرادیان سبز، padding `52px 50px`، radius ۲۶px، gap ۳۰px و نقش‌های دایره‌ای تزئینی؛ متن سفید و توضیح `#d6eee7`. موبایل block، متن وسط، padding `32px 24px` و دکمه تمام‌عرض. این بخش قبلاً آبی بود؛ رنگ فعلی سبز است.

### دکمه‌های نارنجی

دکمه‌های نارنجی (`.button-primary`، `.button-blue`، دکمه CTA و دکمه خرید) از پس‌زمینه نارنجی، حاشیه نورانی چرخان، درخشش و برق گذرای دکمه هدر استفاده می‌کنند؛ در کاهش حرکت، انیمیشن و برق خاموش می‌شوند.

### انتخاب افزونه و خلاصه خرید

- پوسته گرادیانی، پنل راست سفید برای انتخاب و پنل چپ `#192827` برای خلاصه. ستون‌ها `minmax(0,1.15fr) minmax(290px,.85fr)`، gap ۷px و padding ۷px؛ موبایل یک ستون.
- پنل داخلی padding ۱۸px و radius ۲۰px. افزونه‌ها در grid دو ستونه با gap ۸px؛ کارت min-height برابر ۱۱۶px و padding ۹px.
- نام افزونه راست‌چین و قابل شکستن به خط دوم است؛ کنترل دوره بالای چپ و انتخاب وضعیت بالای راست قرار می‌گیرند. متن نباید زیر کنترل دوره برود؛ padding بالای انتخاب ۳۱px و پایین آن ۲۴px است.
- آیکون افزونه ۳۲×۳۲ با radius ۱۰px. انتخاب: مرز سبز مکمل، زمینه `#f7fbf9` و آیکون با زمینه سبز اصلی و متن سفید. hover کارت حرکت منفی ۲px دارد.
- انتخاب با `aria-pressed` و `.is-selected`؛ دوره با `aria-expanded`، `.period-menu.open` و `aria-checked` کنترل می‌شود. یک منوی دوره در لحظه باز است و کلیک بیرون کارت منو را می‌بندد.
- دوره‌ها: یک‌ماهه، سه‌ماهه و یک‌ساله؛ مقدار اولیه سه‌ماهه است. کارت‌ها قیمت را به‌هزار تومان نمایش می‌دهند و جمع خرید با تومان کامل محاسبه می‌شود. مقادیر ماهانه/سه‌ماهه/یک‌ساله به‌ترتیب: منو آنلاین ۳۰۹٬۰۰۰/۸۳۴٬۰۰۰/۲٬۹۶۶٬۰۰۰؛ تخفیف ۱۵۵٬۰۰۰/۴۱۸٬۰۰۰/۱٬۴۸۸٬۰۰۰؛ پرسنل ۱۱۲٬۰۰۰/۳۰۲٬۰۰۰/۱٬۰۷۵٬۰۰۰؛ میز ۲۴۳٬۰۰۰/۶۵۶٬۰۰۰/۲٬۳۳۲٬۰۰۰؛ فیش‌پرینتر ۳۷۰٬۰۰۰/۹۹۹٬۰۰۰/۳٬۵۵۲٬۰۰۰ تومان است.
- برچسب «قیمت کل» روی یک سطر و عدد روی سطر بعدی است. عدد کل `1.55rem / 800`، واحد `.85rem / 700`؛ `direction:ltr` فقط برای چینش رقم‌هاست و قالب‌بندی `Intl.NumberFormat('fa-IR')` است.
- هر رقم کل روی نوار عمودی ارقام ۰ تا ۹ می‌چرخد: ارتفاع 1.1em، عرض .66em، transition برابر .75s با `cubic-bezier(.22,.8,.25,1)`؛ جداکننده عرض .28em دارد.
- صرفه‌جویی در حالت بدون انتخاب صفر است. برای انتخاب ماهانه، صرفه‌جویی صفر است؛ برای سه‌ماهه، سه برابر قیمت ماهانه منهای قیمت سه‌ماهه؛ و برای یک‌ساله، دوازده برابر قیمت ماهانه منهای قیمت سالانه جمع می‌شود. نتیجه منفی به صفر محدود می‌شود.
- قیمت پنج قابلیت طبق مقادیر کاربر در داده ثبت شده‌اند؛ مبلغ کارت‌ها به هزار تومان و جمع خرید به تومان کامل است.
- دکمه نهایی «خرید» است. ظاهر این بخش به معنی وجود پرداخت واقعی یا اتصال سرور نیست.

### سؤالات متداول

حداکثر عرض ۷۸۰px، فاصله آیتم ۱۰px، radius ۱۴px، padding افقی ۱۸px. summary دارای padding عمودی ۱۷px و وزن ۷۰۰ است. پاسخ‌ها با انیمیشن CSS شبکه‌ای از ارتفاع صفر به یک ردیف باز می‌شوند و با fade و حرکت کوتاه رو به پایین همراه‌اند؛ جزئیات با `details/summary` بومی و مستقل از آکاردئون workflow است.

### نظرات کاربران

سه کارت هم‌زمان دیده می‌شود. track برای محاسبه translate افقی LTR است، اما خود کارت و ردیف نام RTL هستند. کارت وسط scale برابر 1.045، opacity یک، مرز نارنجی کم‌رنگ و سایه قوی‌تر دارد؛ دو کارت کناری scale برابر .93 و opacity برابر .74 دارند. حرکت خودکار از راست به چپ است و با cloneهای ابتدا/انتها لوپ می‌شود.

مکث فعلی پس از رسیدن کارت به مرکز **۱۵۰۰ms** و مدت حرکت **۷۲۰ms** است؛ بنابراین فاصله شروع دو حرکت عادی تقریباً ۲۲۲۰ms است. hover کل کاروسل یا focus داخلی autoplay را متوقف می‌کند. فلش‌های دو طرف حرکت دستی دارند. کلیک‌های حین حرکت با قفل animating نادیده گرفته می‌شوند.

فلش دسکتاپ ۴۴×۴۴ و موبایل ۳۲×۳۲؛ کارت min-height برابر ۲۰۵px و موبایل ۲۳۰px. padding کارت ۲۲px و موبایل `12px 9px`. نام کافه و مربع نقل‌قول کنار هم‌اند. مربع ۳۸×۳۸، radius ۱۲px، پس‌زمینه نارنجی با alpha .12 و علامت نارنجی SVG دقیقاً وسط است؛ موبایل ۲۸×۲۸ و radius ۹px. متن‌ها همان پنج نظر اصلی کاربر هستند و نباید دوباره تولید یا بازنویسی شوند.

### بلاگ و فوتر

بلاگ آخرین سکشن محتوایی پیش از فوتر است. کارت با radius ۱۸px، مرز و سطح سفید؛ ناحیه تصویر ۱۲۸px با آیکون ۴۲px؛ padding متن ۱۸px؛ تیتر 1rem و توضیح .82rem. در موبایل تک‌ستونه است.

فوتر با ساختار مرجع Alibaba بازطراحی شده است: اطلاعات برند، آدرس و سه نشان در سمت راست و سه ستون لینک در سمت چپ قرار دارند. ستون‌ها به ترتیب راست‌به‌چپ شامل «درباره میکل» (درباره ما، پشتیبانی)، «راهنما» (تعرفه‌ها، وبلاگ) و «قوانین و اطلاعات» (قوانین و مقررات، حریم خصوصی) هستند. آدرس زیر عنوان برند آمده است. شبکه‌های اجتماعی در پنلی افقی با گرادیان CTA سبز برند و حلقه‌های تزئینی قرار دارند؛ radius برابر ۲۶px، حداقل ارتفاع دسکتاپ ۱۳۶px، سایه برجسته و لوگوی میکل پیش از عنوان است. عنوان با Body Regular برابر ۲۴px نمایش داده می‌شود. آیکن‌های شبکه از فایل فیگما دریافت شده‌اند. کپی‌رایت در نوار پایینی وسط‌چین است. زمینه فوتر سبز اصلی برند #192827، متن روشن و نشان‌های فوتر در کارت‌های روشن هستند. در نمایشگرهای کوچک، محتوا فشرده و ستون‌ها کمتر می‌شوند. پشتیبانی، قوانین و حریم خصوصی بدون لینک‌اند و کپی‌رایت به https://rahkarapp.ir/ پیوند دارد.

### درباره ما

عرض کانتینر همان صفحه اصلی است. هیرو سفید، grid برابر `1.15fr .85fr`، gap ۳۶px، padding ۴۰px و radius ۲۰px؛ لوگو داخل قاب روشن min-height برابر ۲۸۰px و عرض حداکثر ۲۴۰px. کارت‌های ارزش سه ستون، gap ۲۰px، padding ۲۴px و فاصله بالای ۲۴px. موبایل هیرو و کارت‌ها یک‌ستونه، padding هیرو ۲۴px، قاب لوگو حداقل ۲۰۰px و لوگو حداکثر ۱۸۰px است. اندازه نهایی فونت‌ها در جدول تایپوگرافی ثبت شده است.

### تاریخچه به‌روزرسانی

عنوان و لیست حداکثر ۱۰۰۰px؛ فاصله کارت‌ها ۲۰px. کارت نسخه دو ستون `180px minmax(0,1fr)`، gap ۲۸px، padding ۲۸px، radius ۲۰px و سایه نرم دارد. در ≤980 ستون metadata برابر ۱۵۰px و gap برابر ۲۲px می‌شود؛ در ≤720 تک‌ستونه با gap ۱۴px، padding ۲۲px و فاصله کارت‌ها ۱۶px. برچسب نسخه با نقطه نارنجی ۸px و حلقه ۴px است. فونت‌های compact آخرین override معتبرند، نه قواعد بزرگ‌تر بالاتر در CSS.

## ۸. ریسپانسیو و کاهش حرکت

| شرط | اثر مهم |
| --- | --- |
| ≤980px | هیرو و workflow یک‌ستونه؛ حداقل ارتفاع هیرو حذف؛ module دو ستون |
| ≤720px | هدر ۶۸px، منوی موبایل، کانتینر ۵۶۰px، بلاگ و پلن تک‌ستونه؛ feature دو ستون |
| ≤420px | لوگو و CTA هدر کوچک‌تر؛ feature تک‌ستونه؛ ریزتنظیم داشبورد نمایشی |
| ≥721px و ارتفاع ≤760px | فاصله ویدیو `28px 0 22px` و عرض حداکثر ۷۶۰px |
| ≥721px و ارتفاع ≤650px | فاصله ویدیو `14px 0` و عرض حداکثر ۶۰۰px |
| `prefers-reduced-motion:reduce` | smooth scroll حذف؛ animation/transition به .01ms و یک تکرار محدود؛ LightBeam خاموش؛ autoplay نظرات و چرخش واژه‌ها با JS متوقف |

نکته پیاده‌سازی: CSS ارتفاع کوتاه دسکتاپ بر فاصله زیاد بالای ویدیو غلبه می‌کند. ثبت این رفتار به معنی تغییر آن نیست. کاروسل نظرات در موبایل نیز سه کارت نگه می‌دارد؛ اندازه‌های کوچک متن موبایل، واقعیت فعلی کد هستند و ارزیابی خوانایی مستقل لازم دارند.

## ۹. دسترس‌پذیری و قراردادهای تعاملی

- المان‌های بومی `button`، `nav`، `main`، `section`، `details/summary` حفظ شوند. لینک برای پیمایش و button برای تغییر وضعیت است.
- active page با `aria-current`، منو با `aria-expanded` و انتخاب قابلیت با `aria-pressed` مشخص می‌شود؛ وضعیت‌ها همراه ظاهر تغییر کنند.
- cloneهای کاروسل `aria-hidden=true` دارند؛ متن معادل عدد کل از `aria-label` خوانده می‌شود و رقم‌های تزئینی aria-hidden هستند.
- focus عمومی outline ۳px با offset ۳px است. حرکت محدود ترجیح سیستم رعایت شود.
- تصاویر محتوایی alt و تصاویر تزئینی aria-hidden/alt خالی دارند. آیکون‌ها SVG inline و اندازه‌شان وابسته به کامپوننت است؛ فونت آیکون جداگانه وجود ندارد.
- آیکن‌های LinkedIn و Instagram و دو آیکن عمومی پخش در فوتر از فایل [10,000 Free Icons](https://www.figma.com/design/g9t9P84c1NVAvYvs0ePBQY/10-000-Free-Icons---Open-Source-Icon-set--Community-?node-id=1-3) برداشته شده‌اند؛ فایل‌های SVG محلی در `assets/` نگهداری می‌شوند. آیکن YouTube یا Aparat اختصاصی در صفحه انتخاب‌شده موجود نبود، بنابراین از آیکن عمومی Play و Broadcast استفاده شده است.

کد فعلی تضمین انطباق کامل WCAG، ناوبری کلیدی کامل dropdown یا آزمون کنتراست ندارد. این سند استخراج است و ادعای ممیزی دسترس‌پذیری نمی‌کند.

## ۱۰. دارایی‌ها و معماری پروژه

| فایل | نقش |
| --- | --- |
| `assets/IRANSans-FaNum-Medium.ttf` | فونت محلی فارسی با اعداد فارسی |
| `assets/mikel-logo.png` | لوگو و favicon |
| `assets/mikel-hero-loop.mp4` | ویدیوی loop هیرو |
| `assets/mikel-hero.webp` | تصویر هیرو موجود در assets |
| `assets/mikel-video-poster.png` | تصویر پیش‌نمایش بخش ویدیو |
| `assets/workflow-orders.png` | تصویر سفارش‌گیری |
| `assets/workflow-dashboard.png` | تصویر داشبورد |
| `assets/workflow-sales.png` | تصویر فروش |
| `assets/workflow-expenses.png` | تصویر هزینه‌ها |
| `assets/fani.png` | تصویر گواهی ارسالی برای فوتر |
| `assets/shahrak.png` | تصویر شهرک علمی و تحقیقاتی ارسالی برای فوتر |
| `assets/rahkar-logo1.png` | لوگوی شرکت راهکار در فوتر |


پروژه HTML/CSS/JavaScript بدون build است. فایل‌های صفحه و assets باید کنار هم حفظ شوند. مسیرهای رسانه relative هستند. `mikel-site-html.zip` بسته تحویلی است، نه منبع اصلی طراحی. `README.md` و `AGENTS.md` به این فایل ارجاع می‌دهند. این سند خودکار در زمان اجرا خوانده نمی‌شود؛ مرجع انسانی و عامل‌های پروژه است.

## ۱۱. راهنمای نگهداری برای همه چت‌های پروژه

۱. قبل از تغییر، فایل HTML مرتبط و override نهایی آن را بخوانید؛ سند جای مشاهده نسخه جاری کد را نمی‌گیرد.
۲. هنگام افزودن کامپوننت از رنگ‌ها، فونت، container و radius موجود استفاده کنید؛ صرفاً به دلیل نام قدیمی یک کلاس، رنگ آن را آبی نکنید.
۳. اندازه‌های صفحات فرعی، مکث نظرات ۱٫۵ ثانیه، مربع نقل‌قول کم‌رنگ، ترتیب سکشن‌ها، لینک جداگانه درباره/تاریخچه و جهت ثابت مکعب را حفظ کنید مگر کاربر تغییر بخواهد.
۴. متن‌های کاربر را با UTF-8 سالم حفظ کنید. از بازنویسی کل HTML با encoding پیش‌فرض محیط خودداری کنید.
۵. تغییرات واقعی طراحی را در بخش توضیحی، توکن‌ها و پیوست snapshot هماهنگ کنید. snapshot را با CSS قدیمی جایگزین نکنید.
۶. `AGENTS.md` راه کشف خودکار این مرجع برای چت‌هایی است که همین پوشه پروژه را باز می‌کنند. این فایل مجوز سیستم‌عامل یا sandbox چت‌های دیگر را تغییر نمی‌دهد؛ چت باید دسترسی موجود پروژه را داشته باشد.

## ۱۲. پیوست استخراج مستقیم از سورس

بخش‌های بعد توسط اسکریپت از فایل‌های واقعی افزوده می‌شوند: مشخصات و fingerprint منابع، توکن‌های CSS، تمام رنگ‌های literal، CSS کامل هر صفحه با ترتیب cascade، markup بدنه و JavaScript تعامل‌ها. این پیوست جزئیات ریز مانند padding، selectorهای حالت، اعداد نمودار، داده قیمت‌ها، انیمیشن‌ها و media queryها را بدون حذف ثبت می‌کند. برخی قواعد در کد وجود دارند اما در markup فعال نیستند؛ فهرست کلاس‌های بدنه برای تشخیص این تفاوت همراه snapshot آمده است.


### Source snapshot / 2026-10-20

Source directory: C:\Users\LaptopIran\OneDrive\Belgeler\ChatGPT\new mikel

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| index.html | 97809 | 6991d067a8896de605b1cad4a4c4b21097b73e22e1b951827a040a137f2d4058 |
| about.html | 60367 | ca4e46fe63814a7cec83c0fcde243d5a76b1602cfbd44fd31f1e569076bedf14 |
| updates.html | 58826 | 87c3442e52a611826d185b0420c7d9a2c09431ff5fca2f4de755fb4bb7b113bc |

### Assets: exact file inventory

| Path | Bytes |
| --- | ---: |
| assets/fani.png | 13642 |
| assets/figma-broadcast.svg | 956 |
| assets/figma-instagram.svg | 1232 |
| assets/figma-linkedin.svg | 2085 |
| assets/figma-play.svg | 994 |
| assets/IRANSans-FaNum-Medium.ttf | 95744 |
| assets/mikel-hero-loop.mp4 | 269899 |
| assets/mikel-hero.webp | 45260 |
| assets/mikel-logo.png | 98025 |
| assets/mikel-video-poster.png | 2248313 |
| assets/rahkar-logo1.png | 11981 |
| assets/shahrak.png | 31397 |
| assets/workflow-dashboard.png | 237923 |
| assets/workflow-expenses.png | 118483 |
| assets/workflow-orders.png | 197069 |
| assets/workflow-sales.png | 133039 |
### index.html / extracted design and interaction reference

#### CSS custom-property declarations (source order)

| Name | Value |
| --- | --- |
| --blue | #2563eb |
| --blue-dark | #1d4ed8 |
| --blue-soft | #eff6ff |
| --orange | #F17938 |
| --orange-dark | #cf5d25 |
| --ink | #1e293b |
| --muted | #64748b |
| --line | #e2e8f0 |
| --paper | #F3F1ED |
| --white | #fff |
| --green | #15803d |
| --red | #dc2626 |
| --shadow | 0 20px 50px rgba(30, 41, 59, .10) |
| --soft-shadow | 0 8px 24px rgba(30, 41, 59, .07) |
| --radius | 20px |
| --type-heading-1 | 64px |
| --type-heading-2 | 56px |
| --type-heading-3 | 48px |
| --type-heading-4 | 40px |
| --type-heading-5 | 32px |
| --type-heading-6 | 24px |
| --type-body-1 | 24px |
| --type-body-2 | 22px |
| --type-button-xl | 32px |
| --type-button-lg | 28px |
| --type-button-md | 24px |
| --type-button-sm | 20px |
| --type-button-xs | 16px |
| --weight-regular | 400 |
| --weight-bold | 700 |
| --lightbeam-angle | 360deg |

#### Literal CSS color values

`#087f7a`, `#0b6b63`, `#15803d`, `#166534`, `#192827`, `#1d4ed8`, `#1e293b`, `#2563eb`, `#334155`, `#334443`, `#3B82F6`, `#475569`, `#526176`, `#64748b`, `#94a3b8`, `#9a3412`, `#a7e5d9`, `#a85c31`, `#b8c4c1`, `#b9c9c4`, `#bfdbfe`, `#c3d2ce`, `#cbd5e1`, `#cf5d25`, `#d6eee7`, `#d7ddd9`, `#dbe2eb`, `#dc2626`, `#e2e8f0`, `#e5e7e3`, `#e6e9e6`, `#e6edf5`, `#e7ecea`, `#e8eef8`, `#e9e7e1`, `#edf1f6`, `#eef2f7`, `#eff6ff`, `#f0fdf4`, `#f17938`, `#f1f5f3`, `#f1f5f9`, `#f3f1ed`, `#f58a4f`, `#f59e0b`, `#f7fbf9`, `#f8fafc`, `#faf9f7`, `#fbfcfa`, `#fbfcfe`, `#ffedd5`, `#fff`, `#fff1e9`, `#fff7ed`, `rgba(0,0,0,.22)`, `rgba(219,234,254,.55)`, `rgba(226,232,240,.65)`, `rgba(231,236,234,.14)`, `rgba(231,236,234,.15)`, `rgba(241,121,56,.1)`, `rgba(241,121,56,.10)`, `rgba(241,121,56,.12)`, `rgba(241,121,56,.2)`, `rgba(241,121,56,.20)`, `rgba(241,121,56,.23)`, `rgba(241,121,56,.27)`, `rgba(241,121,56,.4)`, `rgba(241,121,56,.48)`, `rgba(243,241,237,.52)`, `rgba(243,241,237,.92)`, `rgba(249,115,22,.12)`, `rgba(25,40,39,.045)`, `rgba(25,40,39,.06)`, `rgba(25,40,39,.07)`, `rgba(25,40,39,.10)`, `rgba(25,40,39,.11)`, `rgba(25,40,39,.12)`, `rgba(25,40,39,.14)`, `rgba(25,40,39,.16)`, `rgba(25,40,39,.18)`, `rgba(25,40,39,.24)`, `rgba(25,40,39,.62)`, `rgba(25,40,39,.68)`, `rgba(25,40,39,.7)`, `rgba(255,255,255,.03)`, `rgba(255,255,255,.04)`, `rgba(255,255,255,.14)`, `rgba(255,255,255,.19)`, `rgba(255,255,255,.34)`, `rgba(255,255,255,.38)`, `rgba(255,255,255,.4)`, `rgba(255,255,255,.7)`, `rgba(255,255,255,.88)`, `rgba(255,255,255,.9)`, `rgba(255,255,255,.95)`, `rgba(30, 41, 59, .07)`, `rgba(30, 41, 59, .10)`, `rgba(30,41,59,.16)`, `rgba(37,99,235,.02)`, `rgba(37,99,235,.025)`, `rgba(37,99,235,.08)`, `rgba(37,99,235,.12)`, `rgba(37,99,235,.2)`, `rgba(8,127,122,.1)`, `rgba(8,127,122,.16)`, `rgba(8,127,122,.28)`, `rgba(8,127,122,.35)`

#### Classes present in the body markup

`addon-card`, `addon-check`, `addon-grid`, `addon-heading`, `addon-icon`, `addon-price`, `addon-select`, `addon-title`, `blog-art`, `blog-body`, `blog-card`, `blog-grid`, `blog-meta`, `blog-section`, `brand`, `brand-mark`, `button`, `button-primary`, `button-quiet`, `container`, `content-section`, `cta-action`, `cta-band`, `cta-copy`, `cta-panel`, `cube-face`, `cube-measure`, `eyebrow`, `eyebrow-dot`, `faq`, `faq-item`, `faq-list`, `feature-card`, `feature-grid`, `feature-icon`, `footer-copyright`, `footer-social-brand`, `footer-social-card`, `footer-social-copy`, `footer-social-icon`, `footer-social-icons`, `footer-social-title`, `footer-logo`, `footer-logos`, `footer-menu`, `header-cta`, `headline-line`, `hero`, `hero-buttons`, `hero-content`, `hero-copy`, `hero-grid`, `hero-illustration`, `highlight`, `ledger-card`, `menu-toggle`, `nav`, `nav-actions`, `nav-links`, `period-menu`, `period-option`, `period-trigger`, `plan-builder`, `plan-builder-shell`, `plan-intro`, `plan-options`, `plan-panel-kicker`, `plan-summary`, `pricing-section`, `product-glow`, `product-wrap`, `result-number`, `save-promise`, `section-head`, `section-kicker`, `selected-list`, `site-footer`, `skip-link`, `summary-caption`, `summary-empty`, `summary-note`, `summary-total`, `testimonial-arrow`, `testimonial-author`, `testimonial-card`, `testimonial-mark`, `testimonial-meta`, `testimonials-carousel`, `testimonials-section`, `testimonials-track`, `testimonials-window`, `topbar`, `total-currency`, `total-label`, `total-price`, `trust-item`, `trust-row`, `typing-word`, `video-label`, `video-play`, `video-preview`, `video-section`, `word-cube`, `workflow`, `workflow-copy`, `workflow-faq`, `workflow-faq-item`, `workflow-grid`, `workflow-shot`, `workflow-visual`, `workflow-visual-label`

<details>
<summary>Complete CSS snapshot: index.html</summary>

```css
    @property --lightbeam-angle {
      syntax: "<angle>";
      inherits: false;
      initial-value: 0deg;
    }
    @font-face { font-family: "IRANSansFaNum"; src: url("assets/IRANSans-FaNum-Medium.ttf") format("truetype"); font-style: normal; font-weight: 500; font-display: swap; }
    :root {
      color-scheme: light;
      --blue: #2563eb;
      --blue-dark: #1d4ed8;
      --blue-soft: #eff6ff;
      --orange: #F17938;
      --orange-dark: #cf5d25;
      --ink: #1e293b;
      --muted: #64748b;
      --line: #e2e8f0;
      --paper: #F3F1ED;
      --white: #fff;
      --green: #15803d;
      --red: #dc2626;
      --shadow: 0 20px 50px rgba(30, 41, 59, .10);
      --soft-shadow: 0 8px 24px rgba(30, 41, 59, .07);
      --radius: 20px;
      /* Typography system — desktop reference scale */
      --type-heading-1: 64px;
      --type-heading-2: 56px;
      --type-heading-3: 48px;
      --type-heading-4: 40px;
      --type-heading-5: 32px;
      --type-heading-6: 24px;
      --type-body-1: 24px;
      --type-body-2: 22px;
      --type-button-xl: 32px;
      --type-button-lg: 28px;
      --type-button-md: 24px;
      --type-button-sm: 20px;
      --type-button-xs: 16px;
      --weight-regular: 400;
      --weight-bold: 700;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 88px; }
    body { margin: 0; background: #F3F1ED; color: var(--ink); font-family: "IRANSansFaNum", Tahoma, sans-serif; font-size: 16px; line-height: 1.8; font-weight: 500; }
    a { color: inherit; text-decoration: none; }
    button, input, textarea { font: inherit; }
    button, a, summary { -webkit-tap-highlight-color: transparent; }
    button, .button, summary { cursor: pointer; }
    :focus-visible { outline: 3px solid #f59e0b; outline-offset: 3px; }
    .container { width: min(1160px, calc(100% - 48px)); margin-inline: auto; }
    .skip-link { position: absolute; top: -60px; inset-inline-start: 16px; z-index: 100; padding: 10px 16px; background: var(--ink); color: #fff; border-radius: 8px; }
    .skip-link:focus { top: 12px; }
    .topbar { height: 78px; display: flex; align-items: center; border-bottom: 1px solid rgba(25,40,39,.10); background: rgba(243,241,237,.52); -webkit-backdrop-filter: blur(20px) saturate(145%); backdrop-filter: blur(20px) saturate(145%); position: sticky; top: 0; z-index: 20; }
    .nav { display: flex; align-items: center; justify-content: space-between; gap: 28px; }
    .brand { display: inline-flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 800; letter-spacing: -.04em; white-space: nowrap; }
    .brand-mark { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 12px; background: transparent; flex:none; }
    .brand-mark img { width: 100%; height: 100%; object-fit: contain; }
    .nav-links { display: flex; align-items: center; gap: clamp(14px,2.1vw,28px); color: #334443; font-size: .88rem; white-space: nowrap; }
    .nav-links a { transition: color .2s ease; }
    .nav-links a:hover { color: var(--orange-dark); }
    .nav-actions { display: flex; align-items: center; gap: 10px; }
    a.button.button-primary.header-cta { white-space: nowrap; min-height: 44px; padding: 8px 15px; position:relative; isolation:isolate; overflow:hidden; border:1px solid transparent; background:linear-gradient(var(--orange),var(--orange)) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box; animation:lightbeam-rotate 3.2s linear infinite; box-shadow:0 0 18px rgba(8,127,122,.16),0 7px 16px rgba(241,121,56,.20); }
    a.button.button-primary.header-cta::before {content:"";position:absolute;inset:2px;border-radius:inherit;background:radial-gradient(ellipse at 50% 120%,rgba(255,255,255,.19),transparent 70%);z-index:-1;pointer-events:none;}
    a.button.button-primary.header-cta::after {content:"";position:absolute;top:0;bottom:0;left:-130%;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.34),transparent);transform:skewX(-22deg);transition:left .45s ease;pointer-events:none;}
    a.button.button-primary.header-cta:hover::after {left:145%;}
    a.button.button-primary.header-cta:hover {box-shadow:0 0 25px rgba(8,127,122,.28),0 10px 22px rgba(241,121,56,.27);}
    @keyframes lightbeam-rotate {to {--lightbeam-angle:360deg;}}
    .login { font-size: .9rem; font-weight: 600; color: #475569; padding: 8px 10px; }
    .button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; padding: 10px 20px; border: 1px solid transparent; border-radius: 12px; font-size:var(--type-button-xs);font-weight:var(--weight-regular); transition: transform .22s ease, box-shadow .22s ease, background .22s ease; }
    .button-xl {font-size:var(--type-button-xl);font-weight:var(--weight-regular);}
    .button-lg {font-size:var(--type-button-lg);font-weight:var(--weight-regular);}
    .button-md {font-size:var(--type-button-md);font-weight:var(--weight-regular);}
    .button-sm {font-size:var(--type-button-sm);font-weight:var(--weight-regular);}
    .button-xs {font-size:var(--type-button-xs);font-weight:var(--weight-regular);}
    .button:hover { transform: translateY(-2px); }
    .button-primary { background: var(--orange); color: #fff; box-shadow: 0 7px 16px rgba(241,121,56,.20); }
    .button-primary:hover { background: #f58a4f; box-shadow: 0 10px 22px rgba(241,121,56,.27); }
    .button-blue { background: var(--orange); color: #fff; box-shadow: 0 8px 18px rgba(241,121,56,.2); }
    .button-blue:hover { background: #f58a4f; }
    .button-quiet { border-color: var(--line); color: var(--ink); background: white; }
    .button-quiet:hover { border-color: #bfdbfe; box-shadow: var(--soft-shadow); }
    .button svg { width: 18px; height: 18px; flex: none; }
    .menu-toggle { display: none; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 12px; background: white; color: var(--ink); }
    .menu-toggle svg { width: 21px; height: 21px; }

    .hero { position: relative; display:flex; align-items:center; min-height:calc(100svh - 78px); overflow:hidden; padding:34px 0 42px; background: radial-gradient(ellipse at 15% 12%, rgba(241,121,56,.10), transparent 35%), linear-gradient(180deg, #F3F1ED 0%, #F3F1ED 90%); }
    .hero::after { content: ""; position: absolute; width: 370px; height: 370px; border: 1px solid rgba(37,99,235,.08); border-radius: 50%; inset-inline-start: -170px; bottom: -220px; box-shadow: 0 0 0 42px rgba(37,99,235,.025), 0 0 0 86px rgba(37,99,235,.02); pointer-events: none; }
    .hero-grid { display: grid; grid-template-columns: .92fr 1.08fr; align-items: center; gap: 42px; position: relative; z-index: 1; }
    .eyebrow { display: inline-flex; align-items: center; gap: 8px; color: #192827; font-weight: 700; font-size: .84rem; }
    .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 4px rgba(241,121,56,.1); }
    h1, h2, h3, p { margin-top: 0; }
    h1 { margin: 17px 0 18px; max-width: 600px; font-size: var(--type-heading-2); line-height: 1.25; letter-spacing: -.055em; font-weight: var(--weight-bold); text-align:start; }
    h2 { font-size:var(--type-heading-4);font-weight:var(--weight-bold); }
    .type-heading-1,.type-heading-2,.type-heading-3,.type-heading-4,.type-heading-5,.type-heading-6 {font-weight:var(--weight-bold);line-height:1.3;}
    .type-heading-1 {font-size:var(--type-heading-1);}
    .type-heading-2 {font-size:var(--type-heading-2);}
    .type-heading-3 {font-size:var(--type-heading-3);}
    .type-heading-4 {font-size:var(--type-heading-4);}
    .type-heading-5 {font-size:var(--type-heading-5);}
    .type-heading-6 {font-size:var(--type-heading-6);}
    .type-body-1 {font-size:var(--type-body-1);font-weight:var(--weight-regular);line-height:1.6;}
    .type-body-2 {font-size:var(--type-body-2);font-weight:var(--weight-regular);line-height:1.6;}
    .headline-line { display:block; }
    h1 .highlight { color: #192827; position: relative; white-space: nowrap; }
    h1 .highlight::after { content: ""; height: 9px; background: rgba(241,121,56,.23); border-radius: 8px; position: absolute; inset-inline: 0; bottom: 2px; z-index: -1; }
    .typing-word { display:inline-grid; grid-template:1fr / 1fr; min-height:1.4em; overflow:visible; perspective:700px; perspective-origin:center center; transform-style:preserve-3d; text-align:start; vertical-align:bottom; }
    .cube-measure,.word-cube { display:block; grid-area:1 / 1; white-space:nowrap; }
    .cube-measure { visibility:hidden; }
    .word-cube { position:relative; height:1.25em; transform:rotateX(var(--cube-turn,0deg)); transform-style:preserve-3d; transition:transform .68s cubic-bezier(.65,0,.35,1); will-change:transform; }
    .cube-face { position:absolute; inset:0; display:block; white-space:nowrap; backface-visibility:hidden; transform-style:preserve-3d; transform-origin:center center; }
    .cube-face:nth-child(1) { transform:translateZ(.625em); }
    .cube-face:nth-child(2) { transform:rotateX(90deg) translateZ(.625em); }
    .cube-face:nth-child(3) { transform:rotateX(180deg) translateZ(.625em); }
    .cube-face:nth-child(4) { transform:rotateX(270deg) translateZ(.625em); }
    @media (prefers-reduced-motion:reduce) { .word-cube { transition:none; } }
    .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    .hero-copy { color: #526176; font-size: 1.08rem; max-width: 520px; margin-bottom: 25px; }
    .hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; }
    .trust-row { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 27px; color: #64748b; font-size: .84rem; }
    .trust-item { display: inline-flex; align-items: center; gap: 7px; }
    .trust-item svg { width: 17px; height: 17px; color: var(--green); }
    .product-wrap { position: relative; direction: rtl; }
    .product-glow { position: absolute; inset: 9% 5% -5% 4%; background: linear-gradient(135deg, rgba(37,99,235,.2), rgba(249,115,22,.12)); filter: blur(35px); border-radius: 40px; }
    .hero-illustration {display:block;position:relative;z-index:1;width:min(100%,540px);height:auto;aspect-ratio:1;object-fit:contain;margin-inline:auto;filter:drop-shadow(0 20px 28px rgba(25,40,39,.12));}
    .dashboard { position: relative; border: 1px solid rgba(255,255,255,.9); border-radius: 21px; background: rgba(255,255,255,.88); box-shadow: 0 26px 70px rgba(30,41,59,.16), 0 0 0 1px rgba(226,232,240,.65); overflow: hidden; backdrop-filter: blur(14px); transform: perspective(1100px) rotateY(-2deg) rotateX(1deg) scale(.88); }
    .dash-top { height: 48px; padding: 0 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #edf1f6; background: rgba(255,255,255,.95); }
    .window-dots { display: flex; gap: 5px; direction: ltr; }
    .window-dots i { width: 7px; height: 7px; border-radius: 50%; background: #dbe2eb; }
    .dash-brand { display: flex; align-items: center; gap: 7px; font-weight: 800; font-size: .76rem; }
    .dash-brand .mini-mark { display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#F3F1ED;color:white;font-size:.69rem;overflow:hidden; }
    .dash-brand .mini-mark img {width:100%;height:100%;object-fit:contain;}
    .dash-user { display:flex;align-items:center;gap:7px;color:#64748b;font-size:.66rem; }
    .avatar { display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#ffedd5;color:#9a3412;font-size:.67rem;font-weight:700; }
    .dash-body { display: grid; grid-template-columns: 55px 1fr; min-height: 350px; }
    .dash-side { border-left: 1px solid #edf1f6; padding: 13px 9px; display:flex; flex-direction:column; align-items:center; gap:11px; background:#fbfcfe; }
    .side-icon { width:31px;height:31px;display:grid;place-items:center;border-radius:9px;color:#94a3b8; }
    .side-icon svg { width:16px;height:16px; }
    .side-icon.active { background:var(--blue-soft);color:#192827; }
    .dash-main { padding: 17px 18px; min-width:0; }
    .dash-heading { display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px; }
    .dash-heading strong { font-size:.88rem; }
    .dash-date { display:flex;align-items:center;gap:4px;color:#64748b;font-size:.62rem;border:1px solid var(--line);border-radius:7px;padding:4px 7px; }
    .dash-date svg { width:12px;height:12px; }
    .metrics { display:grid;grid-template-columns:repeat(3,1fr);gap:9px; }
    .metric { padding:10px 10px 9px;border:1px solid #edf1f6;border-radius:11px;background:#fff;min-width:0; }
    .metric-label { display:block;color:#64748b;font-size:.61rem;margin-bottom:4px;white-space:nowrap; }
    .metric-value { display:block;font-weight:800;font-size:.94rem;letter-spacing:-.03em;white-space:nowrap; }
    .metric-change { display:inline-flex;align-items:center;gap:3px;margin-top:5px;color:var(--green);font-size:.58rem; }
    .metric-change svg { width:11px;height:11px; }
    .dash-lower { display:grid;grid-template-columns:1.6fr .9fr;gap:9px;margin-top:10px; }
    .chart-card,.orders-card { border:1px solid #edf1f6;border-radius:11px;background:white;padding:10px;min-width:0; }
    .chart-head { display:flex;justify-content:space-between;gap:8px;align-items:center;font-size:.65rem;font-weight:700; }
    .chart-head span:last-child { font-weight:500;color:#94a3b8;font-size:.57rem; }
    .chart { width:100%;height:104px;margin-top:6px;overflow:visible; }
    .chart-grid { stroke:#eef2f7;stroke-width:1; }
    .chart-line { fill:none;stroke:var(--blue);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round; }
    .chart-fill { fill:url(#area); }
    .orders-card h3 {font-size:.66rem;margin:0 0 9px;}
    .order-line {display:flex;justify-content:space-between;gap:4px;font-size:.56rem;color:#64748b;padding:5px 0;border-top:1px solid #f1f5f9;}
    .order-line b {color:var(--ink);font-size:.56rem;white-space:nowrap;}
    .status {color:var(--green);background:#f0fdf4;border-radius:20px;padding:0 5px;font-size:.5rem;white-space:nowrap;}
    .dash-tabs { display:flex;align-items:center;gap:8px;margin-top:10px; }
    .dash-tab { border:1px solid var(--line);border-radius:7px;padding:5px 8px;background:white;color:#64748b;font-size:.58rem;cursor:pointer;transition:all .2s ease; }
    .dash-tab[aria-pressed="true"] { background:var(--blue);border-color:var(--blue);color:white; }
    .dash-caption { color:#94a3b8;font-size:.55rem;margin-inline-start:auto; }

    .logo-strip { padding: 22px 0 26px; border-bottom:1px solid #f1f5f9; }
    .logo-strip p { text-align:center;color:#94a3b8;font-size:.83rem;margin:0 0 15px; }
    .logos { display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:clamp(22px,5vw,66px);color:#64748b;font-weight:700; }
    .logo-word {display:inline-flex;align-items:center;gap:7px;font-size:.9rem;opacity:.82;}
    .logo-word svg {width:18px;height:18px;color:#94a3b8;}

    section.content-section { padding: 92px 0; }
    .video-section {padding:112px 0 34px;background:#F3F1ED;}
    .video-section .section-head {max-width:1100px;margin-bottom:15px;}
    .video-section .section-kicker {color:#192827;}
    .video-section h2 {color:#192827;margin-bottom:6px;font-size:clamp(12px,2.2vw,34px);line-height:1.35;white-space:nowrap;}
    .video-section .section-head p {color:var(--muted);}
    .video-preview {position:relative;width:min(100%,860px);aspect-ratio:16/9;margin-inline:auto;overflow:hidden;border:1px solid rgba(25,40,39,.18);border-radius:26px;background:#192827;box-shadow:0 24px 60px rgba(25,40,39,.16);isolation:isolate;}
    .video-preview::after {content:"";position:absolute;inset:35% 0 0;background:linear-gradient(180deg,transparent,rgba(25,40,39,.24));pointer-events:none;}
    .video-preview img {display:block;width:100%;height:100%;object-fit:cover;}
    .video-play {position:absolute;z-index:1;top:50%;left:50%;width:82px;height:82px;display:grid;place-items:center;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.7);border-radius:50%;background:rgba(25,40,39,.7);box-shadow:0 8px 28px rgba(0,0,0,.22);backdrop-filter:blur(8px);}
    .video-play svg {width:27px;height:27px;margin-inline-start:4px;fill:#fff;color:#fff;}
    .video-label {position:absolute;z-index:1;inset-inline-start:18px;top:18px;padding:7px 12px;border:1px solid rgba(255,255,255,.38);border-radius:999px;background:rgba(25,40,39,.62);color:#fff;font-size:.78rem;backdrop-filter:blur(8px);}
    .section-head { max-width: 650px; margin: 0 auto 42px; text-align:center; }
    .section-kicker { color:#192827;font-size:.82rem;font-weight:800;margin-bottom:8px; }
    h2 { font-size:var(--type-heading-4);line-height:1.3;letter-spacing:-.045em;margin-bottom:12px; }
    .section-head p { color:var(--muted);margin:0; }
    .feature-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px; }
    .feature-card { padding:24px 22px 23px;border:1px solid var(--line);border-radius:var(--radius);background:white;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease; }
    .feature-card:hover { transform:translateY(-4px);box-shadow:var(--shadow);border-color:#bfdbfe; }
    .feature-icon { width:46px;height:46px;display:grid;place-items:center;border-radius:14px;background:var(--blue-soft);color:#192827;margin-bottom:17px; }
    .feature-card:nth-child(2) .feature-icon,.feature-card:nth-child(5) .feature-icon {background:#fff7ed;color:var(--orange-dark);}
    .feature-card:nth-child(3) .feature-icon {background:#f0fdf4;color:#15803d;}
    .feature-icon svg { width:23px;height:23px; }
    .feature-card h3 {font-size:1.05rem;margin:0 0 8px;}
    .feature-card p {color:var(--muted);font-size:.91rem;margin:0;}

    .workflow { background:var(--paper); }
    .workflow-grid {display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:55px;}
    .workflow-copy h2 {margin:12px 0;}
    .workflow-faq {display:grid;gap:10px;margin-top:24px;}
    .workflow-faq-item {border:1px solid var(--line);border-radius:14px;background:#fff;padding:0 16px;transition:border-color .2s ease,box-shadow .2s ease;}
    .workflow-faq-item[open] {border-color:rgba(241,121,56,.48);box-shadow:0 8px 22px rgba(25,40,39,.06);}
    .workflow-faq-item summary {position:relative;list-style:none;padding:14px 0;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:12px;cursor:pointer;}
    .workflow-faq-item summary::-webkit-details-marker {display:none;}
    .workflow-faq-item summary::after {content:"+";font-size:1.35rem;font-weight:500;color:var(--orange);line-height:1;}
    .workflow-faq-item[open] summary::after {content:"−";}
    .workflow-faq-item p {color:var(--muted);font-size:.86rem;line-height:1.8;margin:0;padding:0 0 15px;}
    .ledger-card {position:relative;border:1px solid #e6edf5;border-radius:22px;padding:20px;background:white;box-shadow:var(--shadow);overflow:hidden;}
    .workflow-visual {aspect-ratio:1.9;padding:0;isolation:isolate;background:#192827;}
    .workflow-visual::before {display:none;}
    .workflow-shot {position:absolute;top:-10%;left:-12.5%;width:125%;max-width:none;height:auto;transition:opacity .24s ease;}
    .workflow-shot[src$="workflow-dashboard.png"],.workflow-shot[src$="workflow-orders.png"],.workflow-shot[src$="workflow-sales.png"],.workflow-shot[src$="workflow-expenses.png"] {top:0;left:0;width:100%;height:100%;object-fit:contain;}
    .workflow-visual.is-changing .workflow-shot {opacity:0;}
    .workflow-visual-label {position:absolute;z-index:2;right:14px;top:14px;padding:6px 11px;border:1px solid rgba(255,255,255,.4);border-radius:999px;background:rgba(25,40,39,.68);color:#fff;font-size:.72rem;backdrop-filter:blur(8px);}
    .ledger-card::before {content:"";position:absolute;width:200px;height:200px;background:rgba(219,234,254,.55);border-radius:50%;top:-120px;left:-70px;}
    .ledger-title {position:relative;display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:14px;}
    .ledger-title strong {font-size:.96rem;}
    .ledger-title span {font-size:.7rem;color:var(--muted);}
    .ledger-table {position:relative;width:100%;border-collapse:collapse;text-align:right;font-size:.78rem;}
    .ledger-table th {font-size:.68rem;color:#64748b;font-weight:600;background:#f8fafc;}
    .ledger-table th,.ledger-table td {padding:11px 10px;border-bottom:1px solid #eef2f7;}
    .ledger-table tr:last-child td {border:0;}
    .ledger-table td:last-child {font-weight:700;white-space:nowrap;}
    .ledger-foot {position:relative;display:flex;align-items:center;justify-content:space-between;margin-top:13px;padding:11px 12px;border-radius:12px;background:#f0fdf4;color:#166534;font-size:.8rem;font-weight:700;}
    .ledger-foot span:last-child {display:flex;align-items:center;gap:5px;}
    .ledger-foot svg {width:17px;height:17px;}

    .modules {padding:88px 0;background:#F3F1ED;}
    .result-head {max-width:1440px;margin-inline:auto;}
    .result-head h2 {font-size:var(--type-heading-3);line-height:1.45;letter-spacing:-.035em;}
    .result-head p {max-width:1380px;margin:0 auto;font-size:20px;line-height:1.8;}
    .result-number {display:inline-block;color:var(--orange);font-size:1.28em;font-weight:800;line-height:1;vertical-align:-.06em;}
    .module-grid {display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
    .module {padding:20px 18px;border:1px solid var(--line);border-radius:16px;background:#fff;}
    .module-icon {display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:#f1f5f9;color:#334155;margin-bottom:12px;}
    .module-icon svg {width:20px;height:20px;}
    .module h3 {font-size:.95rem;margin:0 0 5px;}
    .module p {font-size:.8rem;color:var(--muted);margin:0;}

    .cta-band {padding:20px 0 88px;}
    .cta-panel {position:relative;overflow:hidden;border-radius:26px;padding:52px 50px;background:linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%);color:white;display:flex;align-items:center;justify-content:space-between;gap:30px;}
    .cta-panel::before,.cta-panel::after {content:"";position:absolute;border:1px solid rgba(255,255,255,.14);border-radius:50%;pointer-events:none;}
    .cta-panel::before {width:330px;height:330px;left:-115px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.04),0 0 0 75px rgba(255,255,255,.03);}
    .cta-panel::after {width:190px;height:190px;right:40%;bottom:-155px;}
    .cta-copy,.cta-action {position:relative;z-index:1;}
    .cta-copy h2 {font-size:clamp(1.65rem,3vw,2.25rem);margin:0 0 8px;}
    .cta-copy p {margin:0;color:#d6eee7;max-width:570px;}
    .cta-action .button {background:var(--orange);color:#fff;white-space:nowrap;}
    .cta-action small {display:block;color:#d6eee7;text-align:center;margin-top:9px;font-size:.72rem;}

    .faq {background:#F3F1ED;}
    .faq-list {max-width:780px;margin:0 auto;display:grid;gap:10px;}
    .faq-item {border:1px solid var(--line);border-radius:14px;background:white;padding:0 18px;}
    .faq-item summary {position:relative;list-style:none;padding:17px 0;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:12px;}
    .faq-item summary::-webkit-details-marker {display:none;}
    .faq-item summary::after {content:"+";font-size:1.35rem;font-weight:500;color:#192827;line-height:1;}
    .faq-item[open] summary::after {content:"−";}
    .faq-item .faq-answer {display:grid;grid-template-rows:0fr;opacity:0;transform:translateY(-8px);transition:grid-template-rows .55s ease,opacity .4s ease,transform .55s cubic-bezier(.22,.8,.25,1);}
    .faq-item[open] .faq-answer {grid-template-rows:1fr;opacity:1;transform:translateY(0);}
    .faq-answer-inner {min-height:0;overflow:hidden;}
    .faq-item p {color:var(--muted);font-size:.9rem;margin:0;padding:0 0 17px;}
    .testimonials-section {padding:82px 0;background:#F3F1ED;}
    .testimonials-carousel {display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:12px;direction:ltr;}
    .testimonials-window {min-width:0;overflow:hidden;padding:12px 0 16px;margin:-12px 0 -16px;}
    .testimonials-track {display:flex;flex-direction:row;direction:ltr;align-items:stretch;gap:16px;will-change:transform;transition:transform .72s cubic-bezier(.22,.75,.2,1);}
    .testimonial-card {display:flex;flex:0 0 auto;flex-direction:column;align-items:flex-start;min-height:205px;padding:22px;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 10px 28px rgba(25,40,39,.045);direction:rtl;text-align:right;opacity:.74;transform:scale(.93);transform-origin:center center;transition:transform .72s cubic-bezier(.22,.75,.2,1),opacity .72s ease,border-color .72s ease,box-shadow .72s ease;}
    .testimonial-card.is-center {position:relative;z-index:1;opacity:1;transform:scale(1.045);border-color:rgba(241,121,56,.48);box-shadow:0 16px 34px rgba(25,40,39,.11);}
    .testimonial-meta {display:flex;align-items:center;gap:12px;direction:rtl;margin-bottom:14px;max-width:100%;}
    .testimonial-mark {display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:12px;background:rgba(241,121,56,.12);color:var(--orange);font-size:1.8rem;font-weight:700;line-height:1;}
    .testimonial-card p {margin:0;color:var(--muted);font-size:.9rem;line-height:1.9;}
    .testimonial-author {margin:0;padding:0;color:#192827;font-size:.92rem;font-weight:700;}
    .testimonial-arrow {display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--line);border-radius:50%;background:#fff;color:#192827;font-size:1.5rem;line-height:1;cursor:pointer;box-shadow:0 6px 18px rgba(25,40,39,.07);transition:background .2s ease,color .2s ease,transform .2s ease;}
    .testimonial-arrow:hover {background:var(--orange);color:#fff;transform:scale(1.06);}
    .testimonial-arrow:focus-visible {outline:3px solid rgba(241,121,56,.4);outline-offset:3px;}
    @media (max-width:720px) {
      .testimonials-section {padding:58px 0;}
      .testimonials-carousel {grid-template-columns:32px minmax(0,1fr) 32px;gap:6px;}
      .testimonials-track {gap:8px;}
      .testimonial-card {min-height:230px;padding:12px 9px;}
      .testimonial-meta {gap:6px;margin-bottom:9px;}
      .testimonial-mark {flex-basis:28px;width:28px;height:28px;font-size:1.35rem;border-radius:9px;}
      .testimonial-card p {font-size:.68rem;line-height:1.75;}
      .testimonial-author {font-size:.66rem;}
      .testimonial-card.is-center {transform:scale(1.035);}
      .testimonial-arrow {width:32px;height:32px;font-size:1.15rem;}
    }
    .pricing-section,.blog-section,.updates-section,.about-section {padding:82px 0;background:#F3F1ED;}
    .blog-section {padding-bottom:132px;}
    .pricing-section {padding:34px 0 38px;}
    .pricing-section .section-head {margin-bottom:18px;}
    .pricing-section .section-head h2 {font-size:32px;margin-bottom:4px;}
    .pricing-section .section-head p {font-size:.82rem;}
    .plan-builder-shell {padding:2px;border-radius:28px;background:linear-gradient(125deg,#192827 0%,#087f7a 48%,#f17938 100%);box-shadow:0 24px 60px rgba(25,40,39,.12);}
    .plan-builder {display:grid;grid-template-columns:minmax(0,1.15fr) minmax(290px,.85fr);gap:7px;padding:7px;border-radius:26px;background:#e9e7e1;}
    .plan-options,.plan-summary {padding:18px;border-radius:20px;background:#fff;}
    .plan-options {display:flex;flex-direction:column;}
    .plan-panel-kicker {display:flex;align-items:center;gap:9px;margin:0 0 4px;color:#192827;font-size:.78rem;font-weight:700;}
    .plan-panel-kicker::before {content:"";width:9px;height:9px;border-radius:50%;background:#f17938;box-shadow:0 0 0 5px rgba(241,121,56,.12);}
    .plan-options h3,.plan-summary h3 {margin:0;color:#192827;font-size:1.08rem;}
    .plan-intro {margin:4px 0 9px;color:var(--muted);font-size:.78rem;}
    .addon-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}
    .addon-card {position:relative;z-index:0;min-height:116px;padding:9px;border:1px solid #e5e7e3;border-radius:14px;background:#fff;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease;}
    .addon-card.period-open {z-index:20;}
    .addon-card:hover {transform:translateY(-2px);border-color:#b9c9c4;box-shadow:0 9px 23px rgba(25,40,39,.07);}
    .addon-card.is-selected {border-color:#087f7a;background:#f7fbf9;box-shadow:0 0 0 2px rgba(8,127,122,.1);}
    .addon-select {display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%;height:100%;padding:31px 0 24px;border:0;background:transparent;color:#192827;text-align:right;font:inherit;cursor:pointer;}
    .addon-heading {display:flex;align-items:flex-start;justify-content:flex-start;gap:10px;width:100%;min-width:0;padding:0;direction:rtl;}
    .addon-icon {display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:10px;background:#f3f1ed;color:#192827;}
    .addon-card.is-selected .addon-icon {background:#192827;color:#fff;}
    .addon-icon svg {width:19px;height:19px;}
    .addon-title {min-width:0;max-width:calc(100% - 48px);font-size:.86rem;font-weight:700;line-height:1.7;text-align:right;white-space:normal;overflow-wrap:anywhere;}
    .addon-check {position:absolute;top:10px;right:10px;display:grid;place-items:center;width:17px;height:17px;border:1px solid #d7ddd9;border-radius:50%;color:transparent;font-size:.65rem;}
    .addon-card.is-selected .addon-check {border-color:#087f7a;background:#087f7a;color:#fff;}
    .period-trigger {position:absolute;top:7px;left:8px;display:flex;align-items:center;gap:4px;padding:3px 6px;border:1px solid #e6e9e6;border-radius:8px;background:#fbfcfa;color:#192827;font:inherit;font-size:.64rem;cursor:pointer;}
    .period-trigger svg {width:12px;height:12px;transition:transform .18s ease;}
    .period-trigger[aria-expanded="true"] svg {transform:rotate(180deg);}
    .period-menu {position:absolute;top:34px;left:8px;z-index:30;display:none;min-width:104px;padding:4px;border:1px solid #e6e9e6;border-radius:10px;background:#fff;box-shadow:0 12px 26px rgba(25,40,39,.14);}
    .period-menu.open {display:grid;gap:2px;}
    .period-option {padding:7px 8px;border:0;border-radius:7px;background:transparent;color:#192827;text-align:right;font:inherit;font-size:.7rem;cursor:pointer;}
    .period-option:hover,.period-option[aria-checked="true"] {background:#f3f1ed;color:#087f7a;}
    .addon-price {position:absolute;right:10px;bottom:8px;display:flex;align-items:baseline;gap:3px;color:#f17938;}
    .addon-price strong {font-size:.82rem;font-weight:800;}
    .addon-price small {font-size:.57rem;color:#a85c31;}
    .plan-summary {display:flex;flex-direction:column;background:#192827;color:#e7ecea;}
    .plan-summary .plan-panel-kicker {color:#c3d2ce;}
    .plan-summary h3 {color:#fff;}
    .summary-caption {margin:4px 0 8px;color:#b8c4c1;font-size:.74rem;}
    .selected-list {display:grid;align-content:start;gap:6px;min-height:44px;margin:0;padding:0;list-style:none;}
    .selected-list li {display:flex;align-items:flex-start;gap:9px;color:#f1f5f3;font-size:.78rem;line-height:1.7;}
    .selected-list li::before {content:"✓";display:grid;place-items:center;flex:none;width:20px;height:20px;margin-top:2px;border-radius:50%;background:rgba(8,127,122,.35);color:#a7e5d9;font-size:.72rem;font-weight:800;}
    .summary-empty {color:#b8c4c1;font-size:.82rem;}
    .summary-stats {display:flex;justify-content:space-between;gap:12px;margin:19px 0 16px;padding:15px 0;border-top:1px solid rgba(231,236,234,.15);border-bottom:1px solid rgba(231,236,234,.15);}
    .summary-stat span,.summary-stat strong {display:block;}
    .summary-stat span {color:#b8c4c1;font-size:.7rem;}
    .summary-stat strong {margin-top:3px;color:#fff;font-size:.9rem;}
    .summary-total {display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:5px;margin-top:10px;padding:10px 0;border-top:1px solid rgba(231,236,234,.15);}
    .total-label {grid-column:1 / -1;color:#c3d2ce;font-size:.95rem;font-weight:700;}
    .total-price {grid-column:1 / 3;display:flex;align-items:center;gap:0;color:#fff;font-size:1.55rem;font-weight:800;line-height:1.15;direction:ltr;font-variant-numeric:tabular-nums;white-space:nowrap;}
    .total-currency {grid-column:3;grid-row:2;color:#fff;font-size:.85rem;font-weight:700;}
    .rolling-digit {display:inline-block;width:.66em;height:1.1em;overflow:hidden;vertical-align:bottom;}
    .rolling-track {display:flex;flex-direction:column;transition:transform .75s cubic-bezier(.22,.8,.25,1);will-change:transform;}
    .rolling-track span {display:block;height:1.1em;line-height:1.1em;text-align:center;}
    .total-separator {display:inline-block;width:.28em;text-align:center;}
    .save-promise {display:flex;flex-direction:column;gap:1px;margin:0 0 10px;color:#fff;}
    .save-promise strong {font-size:1.55rem;font-weight:800;line-height:1.3;}
    .save-promise span {font-size:1rem;font-weight:500;line-height:1.4;}
    .plan-summary .button {width:100%;background:#f17938;color:white;}
    .summary-note {margin:6px 0 0;color:#b8c4c1;text-align:center;font-size:.62rem;}
    .blog-grid {display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
    .blog-card {overflow:hidden;border:1px solid var(--line);border-radius:18px;background:#fff;}
    .blog-art {height:128px;display:grid;place-items:center;background:linear-gradient(135deg,#e8eef8,#fff1e9);color:#192827;}
    .blog-art svg {width:42px;height:42px;}
    .blog-body {padding:18px;}
    .blog-meta {font-size:.72rem;color:var(--muted);margin-bottom:7px;}
    .blog-body h3 {font-size:1rem;line-height:1.6;margin:0 0 7px;}
    .blog-body p {font-size:.82rem;color:var(--muted);margin:0 0 12px;}
    .blog-link {font-size:.82rem;font-weight:700;color:#192827;}
    .update-list {max-width:760px;margin:0 auto;display:grid;gap:13px;}
    .update-item {display:grid;grid-template-columns:130px 1fr;gap:18px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#fff;}
    .update-version {color:var(--orange-dark);font-size:.8rem;font-weight:700;}
    .update-item h3 {font-size:.98rem;margin:0 0 4px;}
    .update-item p {color:var(--muted);font-size:.83rem;margin:0;}
    .about-panel {display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:38px;padding:34px;border-radius:22px;background:#fff;border:1px solid var(--line);}
    .about-panel h2 {margin:8px 0;}
    .about-panel p {color:var(--muted);margin:0;}
    .about-points {display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .about-point {padding:14px;border:1px solid var(--line);border-radius:14px;background:#faf9f7;}
    .about-point strong {display:block;color:#192827;font-size:1.1rem;}
    .about-point span {color:var(--muted);font-size:.75rem;}
    .contact-grid {display:grid;grid-template-columns:.9fr 1.1fr;gap:45px;align-items:start;}
    .contact-copy h2 {margin:10px 0;}
    .contact-copy p {color:var(--muted);}
    .contact-note {display:flex;gap:10px;align-items:flex-start;color:#475569;font-size:.85rem;margin-top:20px;}
    .contact-note svg {width:19px;height:19px;color:#192827;flex:none;margin-top:3px;}
    .form-card {border:1px solid var(--line);border-radius:20px;padding:24px;background:#fff;box-shadow:var(--soft-shadow);}
    .form-row {display:grid;grid-template-columns:1fr 1fr;gap:13px;}
    .field {margin-bottom:14px;}
    .field label {display:block;font-weight:700;font-size:.82rem;margin-bottom:6px;}
    .field input,.field textarea {width:100%;border:1px solid #cbd5e1;border-radius:10px;padding:11px 12px;background:#fff;color:var(--ink);transition:border-color .2s ease,box-shadow .2s ease;}
    .field input::placeholder,.field textarea::placeholder {color:#94a3b8;}
    .field input:focus,.field textarea:focus {outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,.12);}
    .field textarea {min-height:90px;resize:vertical;}
    .form-card .button {width:100%;}
    .site-footer {background:#192827;color:#f8fafc;padding:36px 0 18px;border-top:1px solid #29413e;}
    .footer-main {display:grid;grid-template-columns:minmax(300px,1.8fr) repeat(3,minmax(120px,1fr));align-items:start;gap:30px;direction:rtl;}
    .footer-brand {grid-column:1;grid-row:1;direction:rtl;text-align:right;}
    .footer-links-column:nth-of-type(1) {grid-column:2;grid-row:1;}
    .footer-links-column:nth-of-type(2) {grid-column:3;grid-row:1;}
    .footer-links-column:nth-of-type(3) {grid-column:4;grid-row:1;}
    .footer-brand h2 {margin:0 0 8px;color:#f8fafc;font-size:16px;font-weight:700;line-height:1.8;}
    .footer-address {margin:0;color:#cbd5d1;font-size:12px;font-style:normal;line-height:1.9;}
    .footer-logos {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:start;align-items:center;gap:8px;margin-top:16px;direction:ltr;}
    .footer-logo {display:flex;align-items:center;justify-content:center;min-width:0;height:66px;padding:7px;border:1px solid #e5e7eb;border-radius:9px;background:#fff;}
    .footer-logo img {display:block;width:100%;height:100%;object-fit:contain;}
    .footer-links-column {direction:rtl;text-align:right;}
    .footer-column-title {margin:0 0 10px;color:#f8fafc;font-size:13px;font-weight:700;line-height:1.8;}
    .footer-links-list {display:flex;flex-direction:column;gap:5px;margin:0;padding:0;list-style:none;}
    .footer-links-list a,.footer-links-list span {color:#cbd5d1;font-size:12px;font-weight:400;line-height:1.8;text-decoration:none;transition:color .2s ease;}
    .footer-links-list a:hover {color:#F17938;}
    .site-footer {position:relative;padding-top:82px;}
    .site-footer .container {position:relative;}
.footer-social-card {position:absolute;z-index:3;top:-82px;left:0;right:0;transform:translateY(-50%);display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:136px;padding:24px 32px;overflow:hidden;border:1px solid rgba(255,255,255,.34);border-radius:26px;background:linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%);box-shadow:0 22px 44px rgba(10,31,29,.28),0 7px 16px rgba(10,31,29,.18);direction:ltr;}
.footer-social-card::before,.footer-social-card::after {position:absolute;content:"";border:1px solid rgba(255,255,255,.14);border-radius:50%;pointer-events:none;}
.footer-social-card::before {width:330px;height:330px;left:-115px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.04),0 0 0 75px rgba(255,255,255,.03);}
.footer-social-card::after {width:190px;height:190px;right:40%;bottom:-155px;}
.footer-social-icons {position:relative;z-index:1;display:flex;align-items:center;gap:10px;flex:0 0 auto;}
.footer-social-icon {display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.94);color:#087f7a;box-shadow:0 3px 8px rgba(6,45,41,.16);}
    .footer-social-icon img {display:block;width:22px;height:22px;object-fit:contain;}
.footer-social-copy {position:relative;z-index:1;display:flex;align-items:center;gap:14px;direction:rtl;text-align:right;}
    .footer-social-brand {display:block;width:52px;height:52px;flex:0 0 52px;object-fit:contain;filter:drop-shadow(0 4px 8px rgba(0,0,0,.14));}
.footer-social-title {margin:0;color:#fff;font-size:var(--type-body-1);font-weight:400;line-height:1.8;}
@media(max-width:720px){.site-footer {padding-top:70px;}.footer-social-card {top:-70px;min-height:106px;padding:16px 18px;gap:12px;border-radius:22px;}.footer-social-icons {gap:7px;}.footer-social-icon {width:36px;height:36px;}.footer-social-icon img {width:19px;height:19px;}.footer-social-copy {gap:10px;}.footer-social-brand {width:42px;height:42px;flex-basis:42px;}}
@media(max-width:420px){.site-footer {padding-top:62px;}.footer-social-card {top:-62px;padding:13px 10px;gap:9px;border-radius:18px;}.footer-social-icons {gap:6px;}.footer-social-icon {width:32px;height:32px;}.footer-social-icon img {width:17px;height:17px;}.footer-social-brand {width:36px;height:36px;flex-basis:36px;}}
    .footer-bottom {display:flex;align-items:center;justify-content:center;gap:24px;margin-top:24px;padding-top:15px;border-top:1px solid #35504c;direction:ltr;}
    .footer-copyright {max-width:100%;direction:rtl;text-align:center;}
    .footer-copyright p {margin:0;color:#cbd5d1;font-size:10px;line-height:1.8;}
    .footer-copyright a {color:#f8fafc;text-decoration:none;transition:color .2s ease;}
    .footer-copyright a:hover {color:#F17938;}
    @media(max-width:980px) {
      .footer-main {grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;}
      .footer-brand {grid-column:1/-1;grid-row:1;}
      .footer-links-column {grid-row:auto;}
      .footer-links-column:nth-of-type(1) {grid-column:1;grid-row:2;}
      .footer-links-column:nth-of-type(2) {grid-column:2;grid-row:2;}
      .footer-links-column:nth-of-type(3) {grid-column:1;grid-row:3;}
      .footer-bottom {align-items:center;}
    }
    @media(max-width:720px) {
      .site-footer {padding:28px 0 16px;}
      .footer-main {grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 18px;}
      .footer-brand {grid-column:1/-1;}
      .footer-links-column:nth-of-type(1),.footer-links-column:nth-of-type(2) {grid-row:2;}
      .footer-links-column:nth-of-type(3) {grid-column:1/-1;grid-row:3;}
      .footer-bottom {flex-direction:column;align-items:center;gap:12px;}
      .footer-copyright {max-width:100%;text-align:center;}
    }
    @media(max-width:420px) {
      .footer-main {grid-template-columns:1fr;gap:18px;}
      .footer-brand,.footer-links-column:nth-of-type(1),.footer-links-column:nth-of-type(2),.footer-links-column:nth-of-type(3) {grid-column:1;grid-row:auto;}
      .footer-logos {grid-template-columns:repeat(3,minmax(0,1fr));}
      .footer-bottom {align-items:center;}
      .footer-copyright {text-align:center;}
    }
    @media (max-width: 980px) {
      .hero {min-height:0;padding:38px 0 44px;}
      .hero-grid {grid-template-columns:1fr;gap:42px;}
      .hero-content {max-width:700px;margin-inline:auto;text-align:center;}
      .hero-copy {margin-inline:auto;}
      .hero-buttons,.trust-row {justify-content:center;}
      .product-wrap {width:min(540px,100%);margin:auto;}
      .workflow-grid {grid-template-columns:1fr;gap:35px;}
      .workflow-copy {max-width:700px;}
      .ledger-card {max-width:700px;width:100%;margin-inline:auto;}
      .module-grid {grid-template-columns:repeat(2,1fr);}
      .result-head h2 {font-size:var(--type-heading-4);}
      .result-head p {font-size:18px;}
      .contact-grid {grid-template-columns:1fr;gap:25px;}
    }
    @media (min-width: 721px) and (max-height: 760px) {
      .video-section {padding:28px 0 22px;}
      .video-section .section-head {margin-bottom:10px;}
      .video-preview {width:min(100%,760px);}
    }
    @media (min-width: 721px) and (max-height: 650px) {
      .video-section {padding:14px 0;}
      .video-preview {width:min(100%,600px);}
      .video-section .section-head p {font-size:.8rem;}
    }
    @media (max-width: 720px) {
      .container {width:min(100% - 32px,560px);}
      .topbar {height:68px;}
      .menu-toggle {display:grid;place-items:center;}
      .nav-links {display:none;position:absolute;inset-inline:16px;top:60px;padding:12px;background:rgba(243,241,237,.92);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid rgba(25,40,39,.12);border-radius:14px;box-shadow:var(--shadow);flex-direction:column;align-items:stretch;gap:0;white-space:normal;}
      .nav-links.open {display:flex;}
      .nav-links a {padding:10px 12px;border-radius:8px;}
      .nav-links a:hover {background:var(--paper);}
      .hero {padding:36px 0 42px;}
      h1 {font-size:var(--type-heading-2);}
      h2 {font-size:var(--type-heading-5);}
      .hero-copy {font-size:1rem;}
      .video-section {padding:58px 0 28px;}
      .video-section .section-head {max-width:100%;margin-bottom:12px;}
      .video-section h2 {font-size:clamp(12px,3.5vw,20px);}
      .video-section .section-head p {font-size:.82rem;}
      .video-preview {border-radius:18px;}
      .video-play {width:62px;height:62px;}
      .video-play svg {width:21px;height:21px;}
      .video-label {top:10px;inset-inline-start:10px;font-size:.68rem;}
      .hero-buttons .button {flex:1 1 180px;}
      .trust-row {gap:11px 17px;}
      .dashboard {transform:scale(.88);}
      .dash-body {grid-template-columns:42px 1fr;min-height:315px;}
      .dash-main {padding:12px 10px;}
      .dash-side {padding:12px 5px;}
      .side-icon {width:29px;height:29px;}
      .dash-lower {grid-template-columns:1.4fr .9fr;gap:6px;}
      .metric {padding:8px 6px;}
      .metric-value {font-size:.78rem;}
      .metric-label {font-size:.55rem;}
      .chart-card,.orders-card {padding:8px 6px;}
      .chart {height:88px;}
      .order-line {font-size:.49rem;}
      .logos {gap:16px 25px;}
      .logo-word {font-size:.77rem;}
      section.content-section {padding:68px 0;}
      .feature-grid {grid-template-columns:1fr 1fr;gap:11px;}
      .feature-card {padding:17px 15px;}
      .feature-card p {font-size:.82rem;}
      .feature-card h3 {font-size:.95rem;}
      .module-grid {gap:10px;}
      .module {padding:15px 13px;}
      .plan-builder {grid-template-columns:1fr;}
      .addon-grid {grid-template-columns:repeat(2,minmax(0,1fr));}
      .blog-grid {grid-template-columns:1fr;}
      .about-panel {grid-template-columns:1fr;padding:22px;gap:22px;}
      .update-item {grid-template-columns:1fr;gap:4px;padding:16px;}
      .cta-band {padding-bottom:66px;}
      .cta-panel {padding:32px 24px;display:block;text-align:center;}
      .cta-action {margin-top:22px;}
      .cta-action .button {width:100%;}
      .form-row {grid-template-columns:1fr;gap:0;}
    }
    @media (max-width: 420px) {
      .brand {font-size:1.1rem;}
      .brand-mark {width:38px;height:38px;}
      a.button.button-primary.header-cta {font-size:.72rem;min-height:38px;padding:6px 8px;}
      .dash-top {padding-inline:10px;}
      .dash-user {font-size:0;}
      .metric-value {font-size:.69rem;}
      .metric-change {font-size:.52rem;}
      .dash-heading strong {font-size:.77rem;}
      .dash-date {font-size:.55rem;}
      .dash-tabs {gap:5px;}
      .dash-tab {padding:4px 6px;}
      .feature-grid {grid-template-columns:1fr;}
      .module-grid {grid-template-columns:1fr 1fr;}
      .result-head h2 {font-size:var(--type-heading-5);}
      .result-head p {font-size:16px;}
      .ledger-card {padding:14px 10px;}
      .ledger-table {font-size:.68rem;}
      .ledger-table th,.ledger-table td {padding:9px 5px;}
    }
    @media (prefers-reduced-motion: reduce) {
      *,*::before,*::after {scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;}
      a.button.button-primary.header-cta {animation:none;}
      a.button.button-primary.header-cta::after {display:none;}
    }
      .button-primary,.button-blue,.cta-action .button,.plan-summary .button {position:relative;isolation:isolate;overflow:hidden;border:1px solid transparent;background:linear-gradient(var(--orange),var(--orange)) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box;animation:lightbeam-rotate 3.2s linear infinite;box-shadow:0 0 18px rgba(8,127,122,.16),0 7px 16px rgba(241,121,56,.20);color:#fff;}
    .button-primary::before,.button-blue::before,.cta-action .button::before,.plan-summary .button::before {content:"";position:absolute;inset:2px;border-radius:inherit;background:radial-gradient(ellipse at 50% 120%,rgba(255,255,255,.19),transparent 70%);z-index:-1;pointer-events:none;}
    .button-primary::after,.button-blue::after,.cta-action .button::after,.plan-summary .button::after {content:"";position:absolute;top:0;bottom:0;left:-130%;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.34),transparent);transform:skewX(-22deg);transition:left .45s ease;pointer-events:none;}
    .button-primary:hover::after,.button-blue:hover::after,.cta-action .button:hover::after,.plan-summary .button:hover::after {left:145%;}
    .button-primary:hover,.button-blue:hover,.cta-action .button:hover,.plan-summary .button:hover {background:linear-gradient(#f58a4f,#f58a4f) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box;box-shadow:0 0 25px rgba(8,127,122,.28),0 10px 22px rgba(241,121,56,.27);}
    @media (prefers-reduced-motion:reduce) {
      .button-primary,.button-blue,.cta-action .button,.plan-summary .button {animation:none!important;}
      .button-primary::after,.button-blue::after,.cta-action .button::after,.plan-summary .button::after {display:none!important;}
    }
  
```

</details>

<details>
<summary>Component HTML, content, ARIA states and data attributes: index.html</summary>

```html
  <a class="skip-link" href="#main">رفتن به محتوای اصلی</a>
  <header class="topbar">
    <nav class="nav container" aria-label="ناوبری اصلی">
      <a class="brand" href="#top" aria-label="میکِل، صفحه اصلی">
        <span class="brand-mark" aria-hidden="true"><img src="assets/mikel-logo.png" alt=""></span>
        <span>میکِل</span>
      </a>
      <div class="nav-links" id="nav-links">
        <a href="#pricing">تعرفه‌ها</a>
        <a href="#blog">بلاگ</a>
        <a href="updates.html">تاریخچه‌ی به‌روزرسانی</a>
        <a href="about.html">درباره‌ی ما</a>
      </div>
      <div class="nav-actions">
        <a class="button button-primary header-cta" href="#pricing">رایگان شروع کنید</a>
        <button class="menu-toggle" type="button" aria-label="باز کردن منو" aria-expanded="false" aria-controls="nav-links">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> مدیریت مالی، برای کسب‌وکارهای خوش‌طعم</span>
          <h1 aria-label="دخل و خرج کافی شاپت، رستورانت، آبمیوه بستنیت و فست فودیت رو مدیریت کن"><span class="headline-line">دخل و خرج</span><span class="headline-line"><span class="highlight typing-word" aria-hidden="true"><span class="cube-measure">آبمیوه بستنیت</span><span id="word-cube" class="word-cube"><span class="cube-face">کافی شاپت</span><span class="cube-face">رستورانت</span><span class="cube-face">آبمیوه بستنیت</span><span class="cube-face">فست فودیت</span></span></span></span><span class="headline-line">رو مدیریت کن</span></h1>
          <p class="hero-copy">میکل، اولین اپلیکیشن موبایل برای مدیریت سفارش‌ها، مواد اولیه و دخل‌وخرج کسب‌وکار شما.</p>
          <div class="hero-buttons">
            <a class="button button-primary" href="#pricing">رایگان شروع کنید
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7"/></svg>
            </a>
            <a class="button button-quiet" href="#features">مشاهده امکانات</a>
          </div>
          <div class="trust-row" aria-label="مزیت‌های استفاده">
            <span class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>راه‌اندازی ساده</span>
            <span class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>گزارش‌های لحظه‌ای</span>
            <span class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>مناسب همه کسب‌وکارها</span>
          </div>
        </div>
        <div class="product-wrap" aria-label="تصویر معرفی میکِل برای مدیریت کافه و رستوران">
          <div class="product-glow" aria-hidden="true"></div>
          <img class="hero-illustration" src="assets/mikel-hero.webp" alt="تصویر مفهومی مدیریت کافه و رستوران با ابزارهای دیجیتال" width="1080" height="1080" fetchpriority="high">
        </div>
      </div>
    </section>
    <section class="video-section" aria-labelledby="video-title">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">یک نگاه به میکل</div>
          <h2 id="video-title"><span class="result-number">3</span> ساعت کار روزانه رو توی <span class="result-number">3</span> سوت انجام بده!</h2>
          <p>تجربه‌ی مدیریت روزانه‌ی کسب‌وکارت را یک‌جا ببین.</p>
        </div>
        <div class="video-preview" role="img" aria-label="تصویر موقت پیش‌نمایش ویدیوی معرفی میکل">
          <img src="assets/mikel-video-poster.png" alt="مدیر یک کافه در حال بررسی گزارش‌های فروش و موجودی روی تبلت" width="1672" height="941" loading="lazy">
          <span class="video-label">پیش‌نمایش میکل</span>
          <span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.8c0-.8.9-1.3 1.6-.9l9.1 6.2a1.1 1.1 0 0 1 0 1.8l-9.1 6.2c-.7.5-1.6 0-1.6-.9V5.8Z"/></svg></span>
        </div>
      </div>
    </section>

<section class="content-section workflow" id="workflow">
      <div class="container workflow-grid">
        <div class="workflow-copy"><span class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> تصویر روشن‌تر از کسب‌وکارتان</span><h2>از سفارش تا گزارش مالی، یک مسیر پیوسته</h2>
          <div class="workflow-faq" aria-label="بخش‌های مختلف میکل">
            <details class="workflow-faq-item" data-image="assets/workflow-orders.png" data-alt="نمای سفارش‌گیری میکل در محیط نرم‌افزار">
              <summary>سفارش‌گیری</summary>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </details>
            <details class="workflow-faq-item" data-image="assets/workflow-dashboard.png" data-alt="نمای داشبورد و گزارش‌های میکل">
              <summary>داشبورد</summary>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </details>
            <details class="workflow-faq-item" data-image="assets/workflow-sales.png" data-alt="نمای ثبت فروش‌های میکل">
              <summary>فروش</summary>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </details>
            <details class="workflow-faq-item" data-image="assets/workflow-expenses.png" data-alt="نمای هزینه‌های میکل">
              <summary>هزینه‌ها</summary>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </details>
          </div>
        </div>
        <div class="ledger-card workflow-visual" id="workflow-visual" role="img" aria-label="نمای سفارش‌گیری میکل">
          <img class="workflow-shot" id="workflow-shot" src="assets/workflow-orders.png" alt="نمای سفارش‌گیری میکل در محیط نرم‌افزار" width="1920" height="1080" loading="lazy">
          <span class="workflow-visual-label" id="workflow-visual-label">سفارش‌گیری</span>
        </div>
      </div>
    </section>

<section class="cta-band" aria-label="دعوت به مشاهده‌ی امکانات میکِل">
      <div class="container"><div class="cta-panel"><div class="cta-copy"><h2>امکانات میکِل را متناسب با نیازتان انتخاب کنید</h2><p>از پلن پایه شروع کنید و هر زمان به قابلیت بیشتری نیاز داشتید، آن را اضافه کنید.</p></div><div class="cta-action"><a class="button" href="#pricing">مشاهده‌ی تعرفه‌ها</a><small>پلن خود را با نیازتان تنظیم کنید</small></div></div></div>
    </section>

<section class="content-section" id="features">
      <div class="container">
        <div class="section-head"><div class="section-kicker">همه‌چیز، یک‌جا</div><h2>از صندوق تا سود خالص، با یک نگاه</h2><p>میکِل جریان‌های اصلی کسب‌وکار شما را به هم وصل می‌کند تا تصمیم‌ها بر اساس عددهای واقعی باشند.</p></div>
        <div class="feature-grid">
          <article class="feature-card"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M7 14l4-4 4 3 5-7"/></svg></div><h3>فروش و صندوق</h3><p>فروش هر شیفت و هر کانال را ثبت کنید؛ جمع صندوق با گزارش پایان روز روشن می‌شود.</p></article>
          <article class="feature-card"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg></div><h3>موجودی و مواد اولیه</h3><p>ورود و مصرف مواد را دنبال کنید و پیش از تمام‌شدن اقلام مهم، زودتر باخبر شوید.</p></article>
          <article class="feature-card"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 5h16v14H4zM8 9h8M8 13h5M8 16h3"/><path d="m15 16 2 2 4-5"/></svg></div><h3>حسابداری روزمره</h3><p>هزینه‌ها، دریافتی‌ها و پرداختی‌ها را مرتب ثبت کنید؛ گزارش‌های قابل‌فهم همیشه در دسترس‌اند.</p></article>
          <article class="feature-card"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 19V5m0 14h16M8 16v-4m4 4V8m4 8v-6m4 6V5"/></svg></div><h3>سود و زیان شفاف</h3><p>فروش را کنار هزینه‌ها ببینید و بفهمید کدام روزها، محصولات و شیفت‌ها سودآورترند.</p></article>
          <article class="feature-card"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg></div><h3>دسترسی نقش‌محور</h3><p>اطلاعات را متناسب با نقش هر عضو تیم در دسترس بگذارید و تغییرات را قابل‌پیگیری نگه دارید.</p></article>
          <article class="feature-card"><div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4h16v12H4zM8 20h8M12 16v4"/><path d="M8 9h8M8 12h5"/></svg></div><h3>گزارش در هر لحظه</h3><p>خلاصه‌ی وضعیت شعبه را از هرجا ببینید؛ بدون جمع‌زدن دستی چند فایل و دفتر.</p></article>
        </div>
      </div>
    </section>


    

    

    

    <section class="pricing-section" id="pricing">
      <div class="container">
        <div class="section-head"><div class="section-kicker">تعرفه‌های میکِل</div><h2>پلن پایه را با نیازتان کامل کنید</h2><p>امکانات پیشرفته را هر زمان که نیاز داشتید به پلن پایه اضافه کنید.</p></div>
        <div class="plan-builder-shell"><div class="plan-builder">
          <div class="plan-options"><div class="plan-panel-kicker">سفارشی‌سازی پلن</div><h3>امکانات موردنیازتان را انتخاب کنید</h3><p class="plan-intro">برای هر قابلیت، دوره‌ی اشتراک دلخواهتان را جداگانه انتخاب کنید.</p>
            <div class="addon-grid" aria-label="انتخاب امکانات پیشرفته">
              <article class="addon-card" data-addon="منو آنلاین" data-month="309000" data-quarter="834000" data-year="2966000"><button type="button" class="period-trigger" aria-expanded="false"><span>سه‌ماهه</span><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 7 5 5 5-5"/></svg></button><div class="period-menu" role="radiogroup" aria-label="انتخاب دوره اشتراک منو آنلاین"><button type="button" class="period-option" role="radio" data-period="month" aria-checked="false">یک‌ماهه</button><button type="button" class="period-option" role="radio" data-period="quarter" aria-checked="true">سه‌ماهه</button><button type="button" class="period-option" role="radio" data-period="year" aria-checked="false">یک‌ساله</button></div><button class="addon-select" type="button" aria-pressed="false"><span class="addon-check" aria-hidden="true">✓</span><span class="addon-heading"><span class="addon-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v14H4zM8 9h8M8 13h5m-5 3h8"/></svg></span><span class="addon-title">منو آنلاین</span></span><span class="addon-price"><strong>۸۳۴</strong><small>هزار تومان / سه‌ماهه</small></span></button></article>
              <article class="addon-card" data-addon="مدیریت تخفیف‌ها" data-month="155000" data-quarter="418000" data-year="1488000"><button type="button" class="period-trigger" aria-expanded="false"><span>سه‌ماهه</span><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 7 5 5 5-5"/></svg></button><div class="period-menu" role="radiogroup" aria-label="انتخاب دوره اشتراک مدیریت تخفیف"><button type="button" class="period-option" role="radio" data-period="month" aria-checked="false">یک‌ماهه</button><button type="button" class="period-option" role="radio" data-period="quarter" aria-checked="true">سه‌ماهه</button><button type="button" class="period-option" role="radio" data-period="year" aria-checked="false">یک‌ساله</button></div><button class="addon-select" type="button" aria-pressed="false"><span class="addon-check" aria-hidden="true">✓</span><span class="addon-heading"><span class="addon-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4zM8 10h8M8 14h5"/><path d="m17 4 3 3m0-3-3 3"/></svg></span><span class="addon-title">مدیریت تخفیف‌ها</span></span><span class="addon-price"><strong>۴۱۸</strong><small>هزار تومان / سه‌ماهه</small></span></button></article>
              <article class="addon-card" data-addon="مدیریت پرسنل و سطح دسترسی" data-month="112000" data-quarter="302000" data-year="1075000"><button type="button" class="period-trigger" aria-expanded="false"><span>سه‌ماهه</span><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 7 5 5 5-5"/></svg></button><div class="period-menu" role="radiogroup" aria-label="انتخاب دوره اشتراک مدیریت پرسنل و سطح دسترسی"><button type="button" class="period-option" role="radio" data-period="month" aria-checked="false">یک‌ماهه</button><button type="button" class="period-option" role="radio" data-period="quarter" aria-checked="true">سه‌ماهه</button><button type="button" class="period-option" role="radio" data-period="year" aria-checked="false">یک‌ساله</button></div><button class="addon-select" type="button" aria-pressed="false"><span class="addon-check" aria-hidden="true">✓</span><span class="addon-heading"><span class="addon-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1m1-14a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1"/></svg></span><span class="addon-title">مدیریت پرسنل و سطح دسترسی</span></span><span class="addon-price"><strong>۳۰۲</strong><small>هزار تومان / سه‌ماهه</small></span></button></article>
              <article class="addon-card" data-addon="مدیریت میز" data-month="243000" data-quarter="656000" data-year="2332000"><button type="button" class="period-trigger" aria-expanded="false"><span>سه‌ماهه</span><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 7 5 5 5-5"/></svg></button><div class="period-menu" role="radiogroup" aria-label="انتخاب دوره اشتراک مدیریت میز"><button type="button" class="period-option" role="radio" data-period="month" aria-checked="false">یک‌ماهه</button><button type="button" class="period-option" role="radio" data-period="quarter" aria-checked="true">سه‌ماهه</button><button type="button" class="period-option" role="radio" data-period="year" aria-checked="false">یک‌ساله</button></div><button class="addon-select" type="button" aria-pressed="false"><span class="addon-check" aria-hidden="true">✓</span><span class="addon-heading"><span class="addon-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9h16M6 9v10m12-10v10M3 19h18M8 6h8M10 3h4"/></svg></span><span class="addon-title">مدیریت میز</span></span><span class="addon-price"><strong>۶۵۶</strong><small>هزار تومان / سه‌ماهه</small></span></button></article>
              <article class="addon-card" data-addon="چاپگر (فیش‌پرینتر)" data-month="370000" data-quarter="999000" data-year="3552000"><button type="button" class="period-trigger" aria-expanded="false"><span>سه‌ماهه</span><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 7 5 5 5-5"/></svg></button><div class="period-menu" role="radiogroup" aria-label="انتخاب دوره اشتراک چاپگر"><button type="button" class="period-option" role="radio" data-period="month" aria-checked="false">یک‌ماهه</button><button type="button" class="period-option" role="radio" data-period="quarter" aria-checked="true">سه‌ماهه</button><button type="button" class="period-option" role="radio" data-period="year" aria-checked="false">یک‌ساله</button></div><button class="addon-select" type="button" aria-pressed="false"><span class="addon-check" aria-hidden="true">✓</span><span class="addon-heading"><span class="addon-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8V3h12v5M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6zM17 11h1"/></svg></span><span class="addon-title">چاپگر (فیش‌پرینتر)</span></span><span class="addon-price"><strong>۹۹۹</strong><small>هزار تومان / سه‌ماهه</small></span></button></article>
            </div>
          </div>
          <aside class="plan-summary" aria-live="polite"><div class="plan-panel-kicker">خلاصه‌ی انتخاب شما</div><h3>امکانات انتخابی</h3><p class="summary-caption">دوره‌ی اشتراک هر قابلیت را جداگانه تنظیم کنید.</p><ul class="selected-list" id="selected-addons"><li class="summary-empty">هنوز قابلیتی انتخاب نشده است.</li></ul><div class="summary-total"><span class="total-label">قیمت کل</span><span class="total-price" id="total-price" role="img" aria-label="صفر تومان" dir="ltr">۰</span><span class="total-currency">تومان</span></div><div class="save-promise"><strong id="saving-total">۰ تومان</strong><span>در هزینه‌های خود صرفه‌جویی کنید.</span></div><a class="button" id="plan-quote" href="#pricing">خرید</a></aside>
        </div></div>
      </div>
    </section>

    

    

    

    

    <section class="content-section faq" id="faq">
      <div class="container"><div class="section-head"><div class="section-kicker">سؤالات متداول</div><h2>پیش از شروع، این‌ها را بدانید</h2></div>
        <div class="faq-list">
          <details class="faq-item"><summary>آیا استفاده از میکل رایگان است؟</summary><div class="faq-answer"><div class="faq-answer-inner"><p>بله. نسخه پایه اپلیکیشن مدیریت کافی‌شاپ میکل کاملاً رایگان است. امکانات پیشرفته به‌صورت جداگانه و بر اساس نیاز شما قابل خرید هستند.</p></div></div></details>
          <details class="faq-item"><summary>آیا چند نفر می‌توانند هم‌زمان از میکل استفاده کنند؟</summary><div class="faq-answer"><div class="faq-answer-inner"><p>بله. با قابلیت مدیریت پرسنل می‌توانید چندین دستگاه را به یک حساب متصل کرده و برای هر کارمند سطح دسترسی جداگانه تعریف کنید.</p></div></div></details>
          <details class="faq-item"><summary>آیا میکل به سامانه مالیاتی متصل است؟</summary><div class="faq-answer"><div class="faq-answer-inner"><p>خیر. میکل برای مدیریت داخلی کافی‌شاپ، ثبت فروش، هزینه‌ها و گزارش‌های مالی طراحی شده است و به سامانه مالیاتی متصل نیست.</p></div></div></details>
          <details class="faq-item"><summary>میکل روی چه دستگاه‌هایی اجرا می‌شود؟</summary><div class="faq-answer"><div class="faq-answer-inner"><p>میکل روی گوشی‌های اندروید، آیفون، تبلت و کامپیوترها (نسخه وب) قابل استفاده است.</p></div></div></details>
        </div>
      </div>
    </section>

    
  

    <section class="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker">صدای همراهان میکل</div>
          <h2 id="testimonials-title">نظرات کاربران</h2>
        </div>
        <div class="testimonials-carousel">
          <button class="testimonial-arrow" type="button" data-testimonial-direction="-1" aria-label="نظرهای قبلی">←</button>
          <div class="testimonials-window" tabindex="0" aria-label="نمایش سه نظر کاربر">
            <div class="testimonials-track" id="testimonials-track">
              <article class="testimonial-card">
                <div class="testimonial-meta"><h3 class="testimonial-author">کافه بستنی پرواز</h3><span class="testimonial-mark" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10H3V10zm11 0c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10h-7V10z"/></svg></span></div>
                <p>بخش انبار رو پیشنهاد دادم، گفتن قراره به‌زودی اضافه بشه. امیدوارم اضافه بشه.</p>
              </article>
              <article class="testimonial-card">
                <div class="testimonial-meta"><h3 class="testimonial-author">کافه آکادمی</h3><span class="testimonial-mark" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10H3V10zm11 0c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10h-7V10z"/></svg></span></div>
                <p>مدیریت میزها خیلی جمع‌وجور و راحت شده، مخصوصاً وقتایی که شلوغه.</p>
              </article>
              <article class="testimonial-card">
                <div class="testimonial-meta"><h3 class="testimonial-author">آبمیوه بستنی شاد</h3><span class="testimonial-mark" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10H3V10zm11 0c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10h-7V10z"/></svg></span></div>
                <p>مدیریت پرسنل خیلی راحت‌تر شده و هرکس دسترسی خودش رو داره.</p>
              </article>
              <article class="testimonial-card">
                <div class="testimonial-meta"><h3 class="testimonial-author">کافه کافئین</h3><span class="testimonial-mark" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10H3V10zm11 0c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10h-7V10z"/></svg></span></div>
                <p>فروش‌های قبلی رو راحت می‌بینم، خیلی به کارم میاد. پشتیبانی هم سریع جواب میده.</p>
              </article>
              <article class="testimonial-card">
                <div class="testimonial-meta"><h3 class="testimonial-author">کافه رستوران واران</h3><span class="testimonial-mark" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10H3V10zm11 0c0-4 2-6 6-7v3c-2 .5-3 1.5-3 3h4v10h-7V10z"/></svg></span></div>
                <p>در کل راضیم، کار باهاش راحته. فقط منتظر اضافه شدن باشگاه مشتریانم.</p>
              </article>
            </div>
          </div>
          <button class="testimonial-arrow" type="button" data-testimonial-direction="1" aria-label="نظرهای بعدی">→</button>
        </div>
      </div>
    </section>

    <section class="blog-section" id="blog">
      <div class="container">
        <div class="section-head"><div class="section-kicker">از بلاگ میکِل</div><h2>راهنمای مدیریت بهتر کافه و رستوران</h2><p>موضوع‌هایی برای کنترل موجودی، شناخت هزینه‌ها و تصمیم‌گیری با عددهای دقیق‌تر.</p></div>
        <div class="blog-grid">
          <article class="blog-card"><div class="blog-art" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5"/></svg></div><div class="blog-body"><div class="blog-meta">راهنمای مالی · ۵ دقیقه مطالعه</div><h3>چطور بهای تمام‌شده‌ی هر آیتم منو را حساب کنیم؟</h3><p>با شناخت مواد اولیه و سهم هزینه‌ها، برای قیمت‌گذاری منو تصویر روشن‌تری داشته باشید.</p></div></article>
          <article class="blog-card"><div class="blog-art" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M5 6v14h14V6M9 6V4h6v2M8 11h8M8 15h5"/></svg></div><div class="blog-body"><div class="blog-meta">مدیریت موجودی · ۴ دقیقه مطالعه</div><h3>چند روش ساده برای کم‌کردن دورریز مواد غذایی</h3><p>ثبت منظم خرید و مصرف، نقطه‌ی شروع کنترل ضایعات و برنامه‌ریزی بهتر سفارش‌هاست.</p></div></article>
          <article class="blog-card"><div class="blog-art" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19V5m0 14h16M7 15l4-4 3 2 5-7"/></svg></div><div class="blog-body"><div class="blog-meta">گزارش‌خوانی · ۶ دقیقه مطالعه</div><h3>در گزارش پایان ماه دنبال چه عددهایی بگردیم؟</h3><p>فروش به‌تنهایی کافی نیست؛ هزینه، حاشیه‌ی سود و روند هر بازه را کنار هم بخوانید.</p></div></article>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container">
<div class="footer-social-card">
          <div class="footer-social-icons" aria-label="&#x634;&#x628;&#x6A9;&#x647;&#x200C;&#x647;&#x627;&#x6CC; &#x627;&#x62C;&#x62A;&#x645;&#x627;&#x639;&#x6CC;">
            <span class="footer-social-icon" role="img" aria-label="&#x644;&#x6CC;&#x646;&#x6A9;&#x62F;&#x6CC;&#x646;"><img src="assets/figma-linkedin.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x627;&#x6CC;&#x646;&#x633;&#x62A;&#x627;&#x6AF;&#x631;&#x627;&#x645;"><img src="assets/figma-instagram.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x6CC;&#x648;&#x62A;&#x6CC;&#x648;&#x628;"><img src="assets/figma-play.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x622;&#x67E;&#x627;&#x631;&#x627;&#x62A;"><img src="assets/figma-broadcast.svg" alt=""></span>
          </div>
          <div class="footer-social-copy"><img class="footer-social-brand" src="assets/mikel-logo.png" alt="&#x645;&#x6CC;&#x6A9;&#x644;" width="744" height="744"><h3 class="footer-social-title">&#x645;&#x6CC;&#x6A9;&#x644; &#x631;&#x627; &#x62F;&#x631; &#x634;&#x628;&#x6A9;&#x647;&#x200C;&#x647;&#x627;&#x6CC; &#x627;&#x62C;&#x62A;&#x645;&#x627;&#x639;&#x6CC; &#x62F;&#x646;&#x628;&#x627;&#x644; &#x6A9;&#x646;&#x6CC;&#x62F;</h3></div>
        </div>
              <div class="footer-main">
        <nav class="footer-links-column" aria-label="درباره میکل">
          <h3 class="footer-column-title">درباره میکل</h3>
          <ul class="footer-links-list">
            <li><a href="about.html">درباره ما</a></li>
            <li><span>پشتیبانی</span></li>
          </ul>
        </nav>
        <nav class="footer-links-column" aria-label="راهنما">
          <h3 class="footer-column-title">راهنما</h3>
          <ul class="footer-links-list">
            <li><a href="#pricing">تعرفه ها</a></li>
            <li><a href="#blog">وبلاگ</a></li>
          </ul>
        </nav>
        <nav class="footer-links-column" aria-label="قوانین و اطلاعات">
          <h3 class="footer-column-title">قوانین و اطلاعات</h3>
          <ul class="footer-links-list">
            <li><span>قوانین و مقررات</span></li>
            <li><span>حریم خصوصی</span></li>
          </ul>
        </nav>
        <div class="footer-brand">
          <h2>میکل: پلتفرم مدیریت کافه رستوران‌ها</h2>
          <address class="footer-address">آدرس: اصفهان، میدان آزادی، دانشگاه اصفهان، مرکز رشد علوم انسانی، فناوری‌های نرم و صنایع خلاق</address>
          <div class="footer-logos" aria-label="لوگوها و نشان‌ها">
            <div class="footer-logo"><img src="assets/fani.png" alt="گواهی بررسی فنی سازمان فناوری اطلاعات ایران" width="250" height="231" loading="lazy"></div>
            <div class="footer-logo"><img src="assets/shahrak.png" alt="شهرک علمی و تحقیقاتی اصفهان" width="350" height="420" loading="lazy"></div>
            <a class="footer-logo" href="https://rahkarapp.ir/" aria-label="شرکت راهکار‌های یکپارچه کاربردی"><img src="assets/rahkar-logo1.png" alt="راهکار" width="500" height="157" loading="lazy"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© کلیه حقوق پلتفرم میکل متعلق به <a href="https://rahkarapp.ir/">شرکت راهکار‌های یکپارچه کاربردی</a> می‌باشد.</p>
        </div>
      </div>
    </div>
  </footer>
  <script>
    const wordCube = document.querySelector('#word-cube');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      let cubeTurn = 0;
      window.setInterval(() => {
        cubeTurn -= 90;
        wordCube.style.setProperty('--cube-turn', `${cubeTurn}deg`);
      }, 1680);
    }

    const testimonialTrack = document.querySelector('#testimonials-track');
    const testimonialViewport = document.querySelector('.testimonials-window');
    const testimonialCarousel = document.querySelector('.testimonials-carousel');
    if (testimonialTrack && testimonialViewport && testimonialCarousel) {
      const originalTestimonials = [...testimonialTrack.children];
      const cloneCard = index => {
        const clone = originalTestimonials[index].cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.dataset.carouselClone = 'true';
        return clone;
      };
      testimonialTrack.prepend(cloneCard(originalTestimonials.length - 2), cloneCard(originalTestimonials.length - 1));
      testimonialTrack.append(cloneCard(0), cloneCard(1));
      let testimonialPosition = 1;
      let testimonialStep = 0;
      let testimonialTimer = null;
      let testimonialPaused = false;
      let testimonialAnimating = false;

      function setTestimonialCenter() {
        [...testimonialTrack.children].forEach(card => card.classList.remove('is-center'));
        testimonialTrack.children[testimonialPosition + 1]?.classList.add('is-center');
      }
      function setTestimonialPosition(instant = false) {
        if (instant) testimonialTrack.style.transition = 'none';
        testimonialTrack.style.transform = 'translate3d(' + (-testimonialPosition * testimonialStep) + 'px,0,0)';
        setTestimonialCenter();
        if (instant) {
          testimonialTrack.getBoundingClientRect();
          testimonialTrack.style.transition = '';
        }
      }
      function sizeTestimonials() {
        const gap = parseFloat(getComputedStyle(testimonialTrack).gap) || 16;
        const cardWidth = (testimonialViewport.clientWidth - gap * 2) / 3;
        testimonialStep = cardWidth + gap;
        [...testimonialTrack.children].forEach(card => { card.style.width = cardWidth + 'px'; });
        setTestimonialPosition(true);
      }
      function stopTestimonials() {
        window.clearTimeout(testimonialTimer);
        testimonialTimer = null;
      }
      function scheduleTestimonials() {
        stopTestimonials();
        if (!reduceMotion && !testimonialPaused) {
          testimonialTimer = window.setTimeout(() => moveTestimonials(1), 1500);
        }
      }
      function moveTestimonials(direction) {
        if (testimonialAnimating) return;
        stopTestimonials();
        testimonialAnimating = true;
        testimonialPosition += direction;
        setTestimonialPosition();
        const onTransitionEnd = event => {
          if (event.propertyName !== 'transform') return;
          testimonialTrack.removeEventListener('transitionend', onTransitionEnd);
          if (testimonialPosition === 0) {
            testimonialPosition = originalTestimonials.length;
            setTestimonialPosition(true);
          } else if (testimonialPosition === originalTestimonials.length + 1) {
            testimonialPosition = 1;
            setTestimonialPosition(true);
          }
          testimonialAnimating = false;
          scheduleTestimonials();
        };
        testimonialTrack.addEventListener('transitionend', onTransitionEnd);
      }
      testimonialCarousel.querySelectorAll('[data-testimonial-direction]').forEach(button => {
        button.addEventListener('click', () => moveTestimonials(Number(button.dataset.testimonialDirection)));
      });
      testimonialCarousel.addEventListener('mouseenter', () => { testimonialPaused = true; stopTestimonials(); });
      testimonialCarousel.addEventListener('mouseleave', () => { testimonialPaused = false; scheduleTestimonials(); });
      testimonialCarousel.addEventListener('focusin', () => { testimonialPaused = true; stopTestimonials(); });
      testimonialCarousel.addEventListener('focusout', event => {
        if (!testimonialCarousel.contains(event.relatedTarget)) { testimonialPaused = false; scheduleTestimonials(); }
      });
      sizeTestimonials();
      window.addEventListener('resize', sizeTestimonials);
      scheduleTestimonials();
    }
    const workflowItems = [...document.querySelectorAll('.workflow-faq-item')];
    const workflowVisual = document.querySelector('#workflow-visual');
    const workflowShot = document.querySelector('#workflow-shot');
    const workflowLabel = document.querySelector('#workflow-visual-label');
    let workflowChange = 0;
    workflowItems.forEach(item => item.addEventListener('toggle', () => {
      if (!item.open) return;
      workflowItems.forEach(other => { if (other !== item) other.open = false; });
      const changeId = ++workflowChange;
      workflowVisual.classList.add('is-changing');
      window.setTimeout(() => {
        if (changeId !== workflowChange) return;
        workflowShot.onload = () => {
          if (changeId !== workflowChange) return;
          workflowVisual.classList.remove('is-changing');
          workflowShot.onload = null;
        };
        workflowShot.onerror = () => {
          if (changeId !== workflowChange) return;
          workflowVisual.classList.remove('is-changing');
          workflowShot.onerror = null;
        };
        workflowShot.src = item.dataset.image;
        workflowShot.alt = item.dataset.alt;
        workflowVisual.setAttribute('aria-label', item.dataset.alt);
        workflowLabel.textContent = item.querySelector('summary').textContent;
        if (workflowShot.complete && workflowShot.naturalWidth) {
          workflowVisual.classList.remove('is-changing');
          workflowShot.onload = null;
          workflowShot.onerror = null;
        }
      }, reduceMotion ? 0 : 240);
    }));

    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'باز کردن منو' : 'بستن منو');
      navLinks.classList.toggle('open', !isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'باز کردن منو');
    }));

    const periods = {
      today: { sales: '۱۸,۴۲۰,۰۰۰', orders: '۱۲۸', profit: '۶,۸۸۰,۰۰۰', changes: ['۱۲٪', '۸٪', '۹٪'], points: 'M0 83 C22 72 28 75 47 68 S72 74 93 54 S121 58 143 46 S171 55 190 35 S220 41 241 28 S273 34 300 12' },
      week: { sales: '۱۰۶,۸۰۰,۰۰۰', orders: '۸۶۴', profit: '۳۹,۲۰۰,۰۰۰', changes: ['۹٪', '۱۴٪', '۷٪'], points: 'M0 76 C22 68 30 78 48 57 S76 63 95 47 S124 51 145 38 S173 46 193 30 S219 42 241 25 S277 34 300 14' },
      month: { sales: '۴۸۲,۶۰۰,۰۰۰', orders: '۳,۶۴۲', profit: '۲۲۷,۵۰۰,۰۰۰', changes: ['۱۱٪', '۶٪', '۱۳٪'], points: 'M0 86 C20 78 31 72 48 75 S74 57 94 63 S120 48 143 50 S169 31 191 39 S219 25 240 30 S277 17 300 10' }
    };
    document.querySelectorAll('.dash-tab').forEach(button => button.addEventListener('click', () => {
      const data = periods[button.dataset.period];
      document.querySelectorAll('.dash-tab').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
      ['sales', 'orders', 'profit'].forEach((key, index) => {
        document.querySelector(`[data-value="${key}"]`).textContent = data[key];
        document.querySelector(`[data-change="${key}"]`).textContent = data.changes[index];
      });
      const line = document.querySelector('.chart-line');
      const fill = document.querySelector('.chart-fill');
      line.setAttribute('d', data.points);
      fill.setAttribute('d', `${data.points} V110 H0Z`);
    }));
    const addonCards = [...document.querySelectorAll('.addon-card')];
    const selectedAddons = document.querySelector('#selected-addons');
    const subscriptionPeriods = {
      month: { label: 'یک‌ماهه', unit: 'ماهانه' },
      quarter: { label: 'سه‌ماهه', unit: 'سه‌ماهه' },
      year: { label: 'یک‌ساله', unit: 'سالانه' }
    };
    const formatFa = value => new Intl.NumberFormat('fa-IR').format(value);
    function updateCardPrice(card, period) {
      const amount = card.dataset[period];
      const price = card.querySelector('.addon-price strong');
      const unit = card.querySelector('.addon-price small');
      card.dataset.selectedPeriod = period;
      card.querySelector('.period-trigger span').textContent = subscriptionPeriods[period].label;
      price.textContent = amount ? formatFa(Number(amount) / 1000) : 'قیمت به‌زودی';
      unit.textContent = amount ? `هزار تومان / ${subscriptionPeriods[period].unit}` : '';
      card.querySelectorAll('.period-option').forEach(option => option.setAttribute('aria-checked', String(option.dataset.period === period)));
    }
    let previousTotal = null;
    function renderTotalPrice(value) {
      const container = document.querySelector('#total-price');
      const formatted = new Intl.NumberFormat('fa-IR').format(value);
      container.setAttribute('aria-label', `${formatted} تومان`);
      const previousDigits = previousTotal === null ? [] : [...new Intl.NumberFormat('fa-IR').format(previousTotal)].filter(char => '۰۱۲۳۴۵۶۷۸۹'.includes(char)).reverse();
      container.replaceChildren();
      const digits = '۰۱۲۳۴۵۶۷۸۹';
      let place = 0;
      [...formatted].forEach(char => {
        if (!digits.includes(char)) {
          const separator = document.createElement('span');
          separator.className = 'total-separator';
          separator.textContent = char;
          separator.setAttribute('aria-hidden', 'true');
          container.append(separator);
          return;
        }
        const target = digits.indexOf(char);
        const start = previousDigits[place] ? digits.indexOf(previousDigits[place]) : (previousTotal === null ? target : 0);
        const window = document.createElement('span');
        window.className = 'rolling-digit';
        window.setAttribute('aria-hidden', 'true');
        const track = document.createElement('span');
        track.className = 'rolling-track';
        [...digits].forEach(number => {
          const item = document.createElement('span');
          item.textContent = number;
          track.append(item);
        });
        track.style.transform = `translateY(-${start * 1.1}em)`;
        window.append(track);
        container.append(window);
        requestAnimationFrame(() => { track.style.transform = `translateY(-${target * 1.1}em)`; });
        place++;
      });
      previousTotal = value;
    }
    function updatePlanSummary() {
      const selected = addonCards.filter(card => card.querySelector('.addon-select').getAttribute('aria-pressed') === 'true');
      selectedAddons.innerHTML = selected.length ? selected.map(card => {
        const period = card.dataset.selectedPeriod || 'quarter';
        const amount = card.dataset[period];
        const priceText = amount ? ` · ${formatFa(Number(amount))} تومان` : ' · قیمت به‌زودی اعلام می‌شود';
        return `<li>${card.dataset.addon} · ${subscriptionPeriods[period].label}${priceText}</li>`;
      }).join('') : '<li class="summary-empty">هنوز قابلیتی انتخاب نشده است.</li>';
      const total = selected.reduce((sum, card) => sum + Number(card.dataset[card.dataset.selectedPeriod || 'quarter'] || 0), 0);
      renderTotalPrice(total);
      const savings = selected.reduce((sum, card) => {
        const period = card.dataset.selectedPeriod || 'quarter';
        const monthly = Number(card.dataset.month || 0);
        if (period === 'month') return sum;
        const months = period === 'quarter' ? 3 : 12;
        return sum + Math.max(0, monthly * months - Number(card.dataset[period] || 0));
      }, 0);
      document.querySelector('#saving-total').textContent = `${formatFa(savings)} تومان`;
    }
    addonCards.forEach(card => {
      updateCardPrice(card, 'quarter');
      card.querySelector('.addon-select').addEventListener('click', event => {
        const button = event.currentTarget;
        const active = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(active));
        card.classList.toggle('is-selected', active);
        updatePlanSummary();
      });
      const trigger = card.querySelector('.period-trigger');
      const menu = card.querySelector('.period-menu');
      trigger.addEventListener('click', () => {
        const open = trigger.getAttribute('aria-expanded') !== 'true';
        document.querySelectorAll('.period-menu.open').forEach(openMenu => {
          openMenu.classList.remove('open');
          openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
          openMenu.closest('.addon-card').classList.remove('period-open');
        });
        trigger.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('open', open);
        card.classList.toggle('period-open', open);
      });
      card.querySelectorAll('.period-option').forEach(option => option.addEventListener('click', () => {
        updateCardPrice(card, option.dataset.period);
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        card.classList.remove('period-open');
        updatePlanSummary();
      }));
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.addon-card')) document.querySelectorAll('.period-menu.open').forEach(menu => {
        menu.classList.remove('open');
        menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        menu.closest('.addon-card').classList.remove('period-open');
      });
    });

    updatePlanSummary();

  </script>
```

</details>

<details>
<summary>JavaScript interaction snapshot: index.html</summary>

```javascript
    const wordCube = document.querySelector('#word-cube');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      let cubeTurn = 0;
      window.setInterval(() => {
        cubeTurn -= 90;
        wordCube.style.setProperty('--cube-turn', `${cubeTurn}deg`);
      }, 1680);
    }

    const testimonialTrack = document.querySelector('#testimonials-track');
    const testimonialViewport = document.querySelector('.testimonials-window');
    const testimonialCarousel = document.querySelector('.testimonials-carousel');
    if (testimonialTrack && testimonialViewport && testimonialCarousel) {
      const originalTestimonials = [...testimonialTrack.children];
      const cloneCard = index => {
        const clone = originalTestimonials[index].cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.dataset.carouselClone = 'true';
        return clone;
      };
      testimonialTrack.prepend(cloneCard(originalTestimonials.length - 2), cloneCard(originalTestimonials.length - 1));
      testimonialTrack.append(cloneCard(0), cloneCard(1));
      let testimonialPosition = 1;
      let testimonialStep = 0;
      let testimonialTimer = null;
      let testimonialPaused = false;
      let testimonialAnimating = false;

      function setTestimonialCenter() {
        [...testimonialTrack.children].forEach(card => card.classList.remove('is-center'));
        testimonialTrack.children[testimonialPosition + 1]?.classList.add('is-center');
      }
      function setTestimonialPosition(instant = false) {
        if (instant) testimonialTrack.style.transition = 'none';
        testimonialTrack.style.transform = 'translate3d(' + (-testimonialPosition * testimonialStep) + 'px,0,0)';
        setTestimonialCenter();
        if (instant) {
          testimonialTrack.getBoundingClientRect();
          testimonialTrack.style.transition = '';
        }
      }
      function sizeTestimonials() {
        const gap = parseFloat(getComputedStyle(testimonialTrack).gap) || 16;
        const cardWidth = (testimonialViewport.clientWidth - gap * 2) / 3;
        testimonialStep = cardWidth + gap;
        [...testimonialTrack.children].forEach(card => { card.style.width = cardWidth + 'px'; });
        setTestimonialPosition(true);
      }
      function stopTestimonials() {
        window.clearTimeout(testimonialTimer);
        testimonialTimer = null;
      }
      function scheduleTestimonials() {
        stopTestimonials();
        if (!reduceMotion && !testimonialPaused) {
          testimonialTimer = window.setTimeout(() => moveTestimonials(1), 1500);
        }
      }
      function moveTestimonials(direction) {
        if (testimonialAnimating) return;
        stopTestimonials();
        testimonialAnimating = true;
        testimonialPosition += direction;
        setTestimonialPosition();
        const onTransitionEnd = event => {
          if (event.propertyName !== 'transform') return;
          testimonialTrack.removeEventListener('transitionend', onTransitionEnd);
          if (testimonialPosition === 0) {
            testimonialPosition = originalTestimonials.length;
            setTestimonialPosition(true);
          } else if (testimonialPosition === originalTestimonials.length + 1) {
            testimonialPosition = 1;
            setTestimonialPosition(true);
          }
          testimonialAnimating = false;
          scheduleTestimonials();
        };
        testimonialTrack.addEventListener('transitionend', onTransitionEnd);
      }
      testimonialCarousel.querySelectorAll('[data-testimonial-direction]').forEach(button => {
        button.addEventListener('click', () => moveTestimonials(Number(button.dataset.testimonialDirection)));
      });
      testimonialCarousel.addEventListener('mouseenter', () => { testimonialPaused = true; stopTestimonials(); });
      testimonialCarousel.addEventListener('mouseleave', () => { testimonialPaused = false; scheduleTestimonials(); });
      testimonialCarousel.addEventListener('focusin', () => { testimonialPaused = true; stopTestimonials(); });
      testimonialCarousel.addEventListener('focusout', event => {
        if (!testimonialCarousel.contains(event.relatedTarget)) { testimonialPaused = false; scheduleTestimonials(); }
      });
      sizeTestimonials();
      window.addEventListener('resize', sizeTestimonials);
      scheduleTestimonials();
    }
    const workflowItems = [...document.querySelectorAll('.workflow-faq-item')];
    const workflowVisual = document.querySelector('#workflow-visual');
    const workflowShot = document.querySelector('#workflow-shot');
    const workflowLabel = document.querySelector('#workflow-visual-label');
    let workflowChange = 0;
    workflowItems.forEach(item => item.addEventListener('toggle', () => {
      if (!item.open) return;
      workflowItems.forEach(other => { if (other !== item) other.open = false; });
      const changeId = ++workflowChange;
      workflowVisual.classList.add('is-changing');
      window.setTimeout(() => {
        if (changeId !== workflowChange) return;
        workflowShot.onload = () => {
          if (changeId !== workflowChange) return;
          workflowVisual.classList.remove('is-changing');
          workflowShot.onload = null;
        };
        workflowShot.onerror = () => {
          if (changeId !== workflowChange) return;
          workflowVisual.classList.remove('is-changing');
          workflowShot.onerror = null;
        };
        workflowShot.src = item.dataset.image;
        workflowShot.alt = item.dataset.alt;
        workflowVisual.setAttribute('aria-label', item.dataset.alt);
        workflowLabel.textContent = item.querySelector('summary').textContent;
        if (workflowShot.complete && workflowShot.naturalWidth) {
          workflowVisual.classList.remove('is-changing');
          workflowShot.onload = null;
          workflowShot.onerror = null;
        }
      }, reduceMotion ? 0 : 240);
    }));

    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'باز کردن منو' : 'بستن منو');
      navLinks.classList.toggle('open', !isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'باز کردن منو');
    }));

    const periods = {
      today: { sales: '۱۸,۴۲۰,۰۰۰', orders: '۱۲۸', profit: '۶,۸۸۰,۰۰۰', changes: ['۱۲٪', '۸٪', '۹٪'], points: 'M0 83 C22 72 28 75 47 68 S72 74 93 54 S121 58 143 46 S171 55 190 35 S220 41 241 28 S273 34 300 12' },
      week: { sales: '۱۰۶,۸۰۰,۰۰۰', orders: '۸۶۴', profit: '۳۹,۲۰۰,۰۰۰', changes: ['۹٪', '۱۴٪', '۷٪'], points: 'M0 76 C22 68 30 78 48 57 S76 63 95 47 S124 51 145 38 S173 46 193 30 S219 42 241 25 S277 34 300 14' },
      month: { sales: '۴۸۲,۶۰۰,۰۰۰', orders: '۳,۶۴۲', profit: '۲۲۷,۵۰۰,۰۰۰', changes: ['۱۱٪', '۶٪', '۱۳٪'], points: 'M0 86 C20 78 31 72 48 75 S74 57 94 63 S120 48 143 50 S169 31 191 39 S219 25 240 30 S277 17 300 10' }
    };
    document.querySelectorAll('.dash-tab').forEach(button => button.addEventListener('click', () => {
      const data = periods[button.dataset.period];
      document.querySelectorAll('.dash-tab').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
      ['sales', 'orders', 'profit'].forEach((key, index) => {
        document.querySelector(`[data-value="${key}"]`).textContent = data[key];
        document.querySelector(`[data-change="${key}"]`).textContent = data.changes[index];
      });
      const line = document.querySelector('.chart-line');
      const fill = document.querySelector('.chart-fill');
      line.setAttribute('d', data.points);
      fill.setAttribute('d', `${data.points} V110 H0Z`);
    }));
    const addonCards = [...document.querySelectorAll('.addon-card')];
    const selectedAddons = document.querySelector('#selected-addons');
    const subscriptionPeriods = {
      month: { label: 'یک‌ماهه', unit: 'ماهانه' },
      quarter: { label: 'سه‌ماهه', unit: 'سه‌ماهه' },
      year: { label: 'یک‌ساله', unit: 'سالانه' }
    };
    const formatFa = value => new Intl.NumberFormat('fa-IR').format(value);
    function updateCardPrice(card, period) {
      const amount = card.dataset[period];
      const price = card.querySelector('.addon-price strong');
      const unit = card.querySelector('.addon-price small');
      card.dataset.selectedPeriod = period;
      card.querySelector('.period-trigger span').textContent = subscriptionPeriods[period].label;
      price.textContent = amount ? formatFa(Number(amount) / 1000) : 'قیمت به‌زودی';
      unit.textContent = amount ? `هزار تومان / ${subscriptionPeriods[period].unit}` : '';
      card.querySelectorAll('.period-option').forEach(option => option.setAttribute('aria-checked', String(option.dataset.period === period)));
    }
    let previousTotal = null;
    function renderTotalPrice(value) {
      const container = document.querySelector('#total-price');
      const formatted = new Intl.NumberFormat('fa-IR').format(value);
      container.setAttribute('aria-label', `${formatted} تومان`);
      const previousDigits = previousTotal === null ? [] : [...new Intl.NumberFormat('fa-IR').format(previousTotal)].filter(char => '۰۱۲۳۴۵۶۷۸۹'.includes(char)).reverse();
      container.replaceChildren();
      const digits = '۰۱۲۳۴۵۶۷۸۹';
      let place = 0;
      [...formatted].forEach(char => {
        if (!digits.includes(char)) {
          const separator = document.createElement('span');
          separator.className = 'total-separator';
          separator.textContent = char;
          separator.setAttribute('aria-hidden', 'true');
          container.append(separator);
          return;
        }
        const target = digits.indexOf(char);
        const start = previousDigits[place] ? digits.indexOf(previousDigits[place]) : (previousTotal === null ? target : 0);
        const window = document.createElement('span');
        window.className = 'rolling-digit';
        window.setAttribute('aria-hidden', 'true');
        const track = document.createElement('span');
        track.className = 'rolling-track';
        [...digits].forEach(number => {
          const item = document.createElement('span');
          item.textContent = number;
          track.append(item);
        });
        track.style.transform = `translateY(-${start * 1.1}em)`;
        window.append(track);
        container.append(window);
        requestAnimationFrame(() => { track.style.transform = `translateY(-${target * 1.1}em)`; });
        place++;
      });
      previousTotal = value;
    }
    function updatePlanSummary() {
      const selected = addonCards.filter(card => card.querySelector('.addon-select').getAttribute('aria-pressed') === 'true');
      selectedAddons.innerHTML = selected.length ? selected.map(card => {
        const period = card.dataset.selectedPeriod || 'quarter';
        const amount = card.dataset[period];
        const priceText = amount ? ` · ${formatFa(Number(amount))} تومان` : ' · قیمت به‌زودی اعلام می‌شود';
        return `<li>${card.dataset.addon} · ${subscriptionPeriods[period].label}${priceText}</li>`;
      }).join('') : '<li class="summary-empty">هنوز قابلیتی انتخاب نشده است.</li>';
      const total = selected.reduce((sum, card) => sum + Number(card.dataset[card.dataset.selectedPeriod || 'quarter'] || 0), 0);
      renderTotalPrice(total);
      const savings = selected.reduce((sum, card) => {
        const period = card.dataset.selectedPeriod || 'quarter';
        const monthly = Number(card.dataset.month || 0);
        if (period === 'month') return sum;
        const months = period === 'quarter' ? 3 : 12;
        return sum + Math.max(0, monthly * months - Number(card.dataset[period] || 0));
      }, 0);
      document.querySelector('#saving-total').textContent = `${formatFa(savings)} تومان`;
    }
    addonCards.forEach(card => {
      updateCardPrice(card, 'quarter');
      card.querySelector('.addon-select').addEventListener('click', event => {
        const button = event.currentTarget;
        const active = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(active));
        card.classList.toggle('is-selected', active);
        updatePlanSummary();
      });
      const trigger = card.querySelector('.period-trigger');
      const menu = card.querySelector('.period-menu');
      trigger.addEventListener('click', () => {
        const open = trigger.getAttribute('aria-expanded') !== 'true';
        document.querySelectorAll('.period-menu.open').forEach(openMenu => {
          openMenu.classList.remove('open');
          openMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
          openMenu.closest('.addon-card').classList.remove('period-open');
        });
        trigger.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('open', open);
        card.classList.toggle('period-open', open);
      });
      card.querySelectorAll('.period-option').forEach(option => option.addEventListener('click', () => {
        updateCardPrice(card, option.dataset.period);
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        card.classList.remove('period-open');
        updatePlanSummary();
      }));
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.addon-card')) document.querySelectorAll('.period-menu.open').forEach(menu => {
        menu.classList.remove('open');
        menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        menu.closest('.addon-card').classList.remove('period-open');
      });
    });

    updatePlanSummary();

  
```

</details>

### about.html / extracted design and interaction reference

#### CSS custom-property declarations (source order)

| Name | Value |
| --- | --- |
| --blue | #2563eb |
| --blue-dark | #1d4ed8 |
| --blue-soft | #eff6ff |
| --orange | #F17938 |
| --orange-dark | #cf5d25 |
| --ink | #1e293b |
| --muted | #64748b |
| --line | #e2e8f0 |
| --paper | #F3F1ED |
| --white | #fff |
| --green | #15803d |
| --red | #dc2626 |
| --shadow | 0 20px 50px rgba(30, 41, 59, .10) |
| --soft-shadow | 0 8px 24px rgba(30, 41, 59, .07) |
| --radius | 20px |
| --type-heading-1 | 64px |
| --type-heading-2 | 56px |
| --type-heading-3 | 48px |
| --type-heading-4 | 40px |
| --type-heading-5 | 32px |
| --type-heading-6 | 24px |
| --type-body-1 | 24px |
| --type-body-2 | 22px |
| --type-button-xl | 32px |
| --type-button-lg | 28px |
| --type-button-md | 24px |
| --type-button-sm | 20px |
| --type-button-xs | 16px |
| --weight-regular | 400 |
| --weight-bold | 700 |
| --lightbeam-angle | 360deg |
| --ink | #192827 |
| --muted | #586966 |

#### Literal CSS color values

`#087f7a`, `#0b6b63`, `#15803d`, `#166534`, `#192827`, `#1d4ed8`, `#1e293b`, `#2563eb`, `#334155`, `#334443`, `#3B82F6`, `#475569`, `#526176`, `#586966`, `#64748b`, `#94a3b8`, `#9a3412`, `#a7e5d9`, `#a85c31`, `#b8c4c1`, `#b9c9c4`, `#bfdbfe`, `#c3d2ce`, `#cbd5e1`, `#cf5d25`, `#d6eee7`, `#d7ddd9`, `#dbe2eb`, `#dc2626`, `#e2e8f0`, `#e5e7e3`, `#e6e9e6`, `#e6edf5`, `#e7ecea`, `#e8eef8`, `#e9e7e1`, `#edf1f6`, `#eef2f7`, `#eff6ff`, `#f0fdf4`, `#f17938`, `#f1f5f3`, `#f1f5f9`, `#f3f1ed`, `#f58a4f`, `#f59e0b`, `#f7fbf9`, `#f8f6f1`, `#f8fafc`, `#faf9f7`, `#fbfcfa`, `#fbfcfe`, `#ffedd5`, `#fff`, `#fff1e9`, `#fff7ed`, `rgba(0,0,0,.22)`, `rgba(219,234,254,.55)`, `rgba(226,232,240,.65)`, `rgba(231,236,234,.14)`, `rgba(231,236,234,.15)`, `rgba(241,121,56,.1)`, `rgba(241,121,56,.10)`, `rgba(241,121,56,.12)`, `rgba(241,121,56,.13)`, `rgba(241,121,56,.15)`, `rgba(241,121,56,.2)`, `rgba(241,121,56,.20)`, `rgba(241,121,56,.23)`, `rgba(241,121,56,.27)`, `rgba(241,121,56,.4)`, `rgba(241,121,56,.48)`, `rgba(243,241,237,.52)`, `rgba(243,241,237,.92)`, `rgba(249,115,22,.12)`, `rgba(25,40,39,.045)`, `rgba(25,40,39,.06)`, `rgba(25,40,39,.07)`, `rgba(25,40,39,.08)`, `rgba(25,40,39,.10)`, `rgba(25,40,39,.11)`, `rgba(25,40,39,.12)`, `rgba(25,40,39,.14)`, `rgba(25,40,39,.16)`, `rgba(25,40,39,.18)`, `rgba(25,40,39,.24)`, `rgba(25,40,39,.62)`, `rgba(25,40,39,.68)`, `rgba(25,40,39,.7)`, `rgba(255,255,255,.03)`, `rgba(255,255,255,.04)`, `rgba(255,255,255,.14)`, `rgba(255,255,255,.19)`, `rgba(255,255,255,.34)`, `rgba(255,255,255,.38)`, `rgba(255,255,255,.4)`, `rgba(255,255,255,.7)`, `rgba(255,255,255,.88)`, `rgba(255,255,255,.9)`, `rgba(255,255,255,.95)`, `rgba(30, 41, 59, .07)`, `rgba(30, 41, 59, .10)`, `rgba(30,41,59,.16)`, `rgba(37,99,235,.02)`, `rgba(37,99,235,.025)`, `rgba(37,99,235,.08)`, `rgba(37,99,235,.12)`, `rgba(37,99,235,.2)`, `rgba(8,127,122,.1)`, `rgba(8,127,122,.16)`, `rgba(8,127,122,.28)`, `rgba(8,127,122,.35)`

#### Classes present in the body markup

`about-hero`, `brand`, `brand-art`, `brand-mark`, `button`, `button-primary`, `container`, `eyebrow`, `footer-copyright`, `footer-social-brand`, `footer-social-card`, `footer-social-copy`, `footer-social-icon`, `footer-social-icons`, `footer-social-title`, `footer-logo`, `footer-logos`, `footer-menu`, `header-cta`, `lead`, `main`, `menu-toggle`, `nav`, `nav-actions`, `nav-links`, `next-step`, `site-footer`, `topbar`, `value-card`, `values`

<details>
<summary>Complete CSS snapshot: about.html</summary>

```css
    @property --lightbeam-angle {
      syntax: "<angle>";
      inherits: false;
      initial-value: 0deg;
    }
    @font-face { font-family: "IRANSansFaNum"; src: url("assets/IRANSans-FaNum-Medium.ttf") format("truetype"); font-style: normal; font-weight: 500; font-display: swap; }
    :root {
      color-scheme: light;
      --blue: #2563eb;
      --blue-dark: #1d4ed8;
      --blue-soft: #eff6ff;
      --orange: #F17938;
      --orange-dark: #cf5d25;
      --ink: #1e293b;
      --muted: #64748b;
      --line: #e2e8f0;
      --paper: #F3F1ED;
      --white: #fff;
      --green: #15803d;
      --red: #dc2626;
      --shadow: 0 20px 50px rgba(30, 41, 59, .10);
      --soft-shadow: 0 8px 24px rgba(30, 41, 59, .07);
      --radius: 20px;
      /* Typography system — desktop reference scale */
      --type-heading-1: 64px;
      --type-heading-2: 56px;
      --type-heading-3: 48px;
      --type-heading-4: 40px;
      --type-heading-5: 32px;
      --type-heading-6: 24px;
      --type-body-1: 24px;
      --type-body-2: 22px;
      --type-button-xl: 32px;
      --type-button-lg: 28px;
      --type-button-md: 24px;
      --type-button-sm: 20px;
      --type-button-xs: 16px;
      --weight-regular: 400;
      --weight-bold: 700;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 88px; }
    body { margin: 0; background: #F3F1ED; color: var(--ink); font-family: "IRANSansFaNum", Tahoma, sans-serif; font-size: 16px; line-height: 1.8; font-weight: 500; }
    a { color: inherit; text-decoration: none; }
    button, input, textarea { font: inherit; }
    button, a, summary { -webkit-tap-highlight-color: transparent; }
    button, .button, summary { cursor: pointer; }
    :focus-visible { outline: 3px solid #f59e0b; outline-offset: 3px; }
    .container { width: min(1160px, calc(100% - 48px)); margin-inline: auto; }
    .skip-link { position: absolute; top: -60px; inset-inline-start: 16px; z-index: 100; padding: 10px 16px; background: var(--ink); color: #fff; border-radius: 8px; }
    .skip-link:focus { top: 12px; }
    .topbar { height: 78px; display: flex; align-items: center; border-bottom: 1px solid rgba(25,40,39,.10); background: rgba(243,241,237,.52); -webkit-backdrop-filter: blur(20px) saturate(145%); backdrop-filter: blur(20px) saturate(145%); position: sticky; top: 0; z-index: 20; }
    .nav { display: flex; align-items: center; justify-content: space-between; gap: 28px; }
    .brand { display: inline-flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 800; letter-spacing: -.04em; white-space: nowrap; }
    .brand-mark { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 12px; background: transparent; flex:none; }
    .brand-mark img { width: 100%; height: 100%; object-fit: contain; }
    .nav-links { display: flex; align-items: center; gap: clamp(14px,2.1vw,28px); color: #334443; font-size: .88rem; white-space: nowrap; }
    .nav-links a { transition: color .2s ease; }
    .nav-links a:hover { color: var(--orange-dark); }
    .nav-actions { display: flex; align-items: center; gap: 10px; }
    a.button.button-primary.header-cta { white-space: nowrap; min-height: 44px; padding: 8px 15px; position:relative; isolation:isolate; overflow:hidden; border:1px solid transparent; background:linear-gradient(var(--orange),var(--orange)) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box; animation:lightbeam-rotate 3.2s linear infinite; box-shadow:0 0 18px rgba(8,127,122,.16),0 7px 16px rgba(241,121,56,.20); }
    a.button.button-primary.header-cta::before {content:"";position:absolute;inset:2px;border-radius:inherit;background:radial-gradient(ellipse at 50% 120%,rgba(255,255,255,.19),transparent 70%);z-index:-1;pointer-events:none;}
    a.button.button-primary.header-cta::after {content:"";position:absolute;top:0;bottom:0;left:-130%;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.34),transparent);transform:skewX(-22deg);transition:left .45s ease;pointer-events:none;}
    a.button.button-primary.header-cta:hover::after {left:145%;}
    a.button.button-primary.header-cta:hover {box-shadow:0 0 25px rgba(8,127,122,.28),0 10px 22px rgba(241,121,56,.27);}
    @keyframes lightbeam-rotate {to {--lightbeam-angle:360deg;}}
    .login { font-size: .9rem; font-weight: 600; color: #475569; padding: 8px 10px; }
    .button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; padding: 10px 20px; border: 1px solid transparent; border-radius: 12px; font-size:var(--type-button-xs);font-weight:var(--weight-regular); transition: transform .22s ease, box-shadow .22s ease, background .22s ease; }
    .button-xl {font-size:var(--type-button-xl);font-weight:var(--weight-regular);}
    .button-lg {font-size:var(--type-button-lg);font-weight:var(--weight-regular);}
    .button-md {font-size:var(--type-button-md);font-weight:var(--weight-regular);}
    .button-sm {font-size:var(--type-button-sm);font-weight:var(--weight-regular);}
    .button-xs {font-size:var(--type-button-xs);font-weight:var(--weight-regular);}
    .button:hover { transform: translateY(-2px); }
    .button-primary { background: var(--orange); color: #fff; box-shadow: 0 7px 16px rgba(241,121,56,.20); }
    .button-primary:hover { background: #f58a4f; box-shadow: 0 10px 22px rgba(241,121,56,.27); }
    .button-blue { background: var(--orange); color: #fff; box-shadow: 0 8px 18px rgba(241,121,56,.2); }
    .button-blue:hover { background: #f58a4f; }
    .button-quiet { border-color: var(--line); color: var(--ink); background: white; }
    .button-quiet:hover { border-color: #bfdbfe; box-shadow: var(--soft-shadow); }
    .button svg { width: 18px; height: 18px; flex: none; }
    .menu-toggle { display: none; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 12px; background: white; color: var(--ink); }
    .menu-toggle svg { width: 21px; height: 21px; }

    .hero { position: relative; display:flex; align-items:center; min-height:calc(100svh - 78px); overflow:hidden; padding:34px 0 42px; background: radial-gradient(ellipse at 15% 12%, rgba(241,121,56,.10), transparent 35%), linear-gradient(180deg, #F3F1ED 0%, #F3F1ED 90%); }
    .hero::after { content: ""; position: absolute; width: 370px; height: 370px; border: 1px solid rgba(37,99,235,.08); border-radius: 50%; inset-inline-start: -170px; bottom: -220px; box-shadow: 0 0 0 42px rgba(37,99,235,.025), 0 0 0 86px rgba(37,99,235,.02); pointer-events: none; }
    .hero-grid { display: grid; grid-template-columns: .92fr 1.08fr; align-items: center; gap: 42px; position: relative; z-index: 1; }
    .eyebrow { display: inline-flex; align-items: center; gap: 8px; color: #192827; font-weight: 700; font-size: .84rem; }
    .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 4px rgba(241,121,56,.1); }
    h1, h2, h3, p { margin-top: 0; }
    h1 { margin: 17px 0 18px; max-width: 600px; font-size: var(--type-heading-1); line-height: 1.25; letter-spacing: -.055em; font-weight: var(--weight-bold); text-align:start; }
    h2 { font-size:var(--type-heading-4);font-weight:var(--weight-bold); }
    .type-heading-1,.type-heading-2,.type-heading-3,.type-heading-4,.type-heading-5,.type-heading-6 {font-weight:var(--weight-bold);line-height:1.3;}
    .type-heading-1 {font-size:var(--type-heading-1);}
    .type-heading-2 {font-size:var(--type-heading-2);}
    .type-heading-3 {font-size:var(--type-heading-3);}
    .type-heading-4 {font-size:var(--type-heading-4);}
    .type-heading-5 {font-size:var(--type-heading-5);}
    .type-heading-6 {font-size:var(--type-heading-6);}
    .type-body-1 {font-size:var(--type-body-1);font-weight:var(--weight-regular);line-height:1.6;}
    .type-body-2 {font-size:var(--type-body-2);font-weight:var(--weight-regular);line-height:1.6;}
    .headline-line { display:block; }
    h1 .highlight { color: #192827; position: relative; white-space: nowrap; }
    h1 .highlight::after { content: ""; height: 9px; background: rgba(241,121,56,.23); border-radius: 8px; position: absolute; inset-inline: 0; bottom: 2px; z-index: -1; }
    .typing-word { display:inline-grid; grid-template:1fr / 1fr; min-height:1.4em; overflow:visible; perspective:700px; perspective-origin:center center; transform-style:preserve-3d; text-align:start; vertical-align:bottom; }
    .cube-measure,.word-cube { display:block; grid-area:1 / 1; white-space:nowrap; }
    .cube-measure { visibility:hidden; }
    .word-cube { position:relative; height:1.25em; transform:rotateX(var(--cube-turn,0deg)); transform-style:preserve-3d; transition:transform .68s cubic-bezier(.65,0,.35,1); will-change:transform; }
    .cube-face { position:absolute; inset:0; display:block; white-space:nowrap; backface-visibility:hidden; transform-style:preserve-3d; transform-origin:center center; }
    .cube-face:nth-child(1) { transform:translateZ(.625em); }
    .cube-face:nth-child(2) { transform:rotateX(90deg) translateZ(.625em); }
    .cube-face:nth-child(3) { transform:rotateX(180deg) translateZ(.625em); }
    .cube-face:nth-child(4) { transform:rotateX(270deg) translateZ(.625em); }
    @media (prefers-reduced-motion:reduce) { .word-cube { transition:none; } }
    .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    .hero-copy { color: #526176; font-size: 1.08rem; max-width: 520px; margin-bottom: 25px; }
    .hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; }
    .trust-row { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 27px; color: #64748b; font-size: .84rem; }
    .trust-item { display: inline-flex; align-items: center; gap: 7px; }
    .trust-item svg { width: 17px; height: 17px; color: var(--green); }
    .product-wrap { position: relative; direction: rtl; }
    .product-glow { position: absolute; inset: 9% 5% -5% 4%; background: linear-gradient(135deg, rgba(37,99,235,.2), rgba(249,115,22,.12)); filter: blur(35px); border-radius: 40px; }
    .hero-illustration {display:block;position:relative;z-index:1;width:min(100%,540px);height:auto;aspect-ratio:1;object-fit:contain;margin-inline:auto;filter:drop-shadow(0 20px 28px rgba(25,40,39,.12));}
    .dashboard { position: relative; border: 1px solid rgba(255,255,255,.9); border-radius: 21px; background: rgba(255,255,255,.88); box-shadow: 0 26px 70px rgba(30,41,59,.16), 0 0 0 1px rgba(226,232,240,.65); overflow: hidden; backdrop-filter: blur(14px); transform: perspective(1100px) rotateY(-2deg) rotateX(1deg) scale(.88); }
    .dash-top { height: 48px; padding: 0 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #edf1f6; background: rgba(255,255,255,.95); }
    .window-dots { display: flex; gap: 5px; direction: ltr; }
    .window-dots i { width: 7px; height: 7px; border-radius: 50%; background: #dbe2eb; }
    .dash-brand { display: flex; align-items: center; gap: 7px; font-weight: 800; font-size: .76rem; }
    .dash-brand .mini-mark { display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#F3F1ED;color:white;font-size:.69rem;overflow:hidden; }
    .dash-brand .mini-mark img {width:100%;height:100%;object-fit:contain;}
    .dash-user { display:flex;align-items:center;gap:7px;color:#64748b;font-size:.66rem; }
    .avatar { display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#ffedd5;color:#9a3412;font-size:.67rem;font-weight:700; }
    .dash-body { display: grid; grid-template-columns: 55px 1fr; min-height: 350px; }
    .dash-side { border-left: 1px solid #edf1f6; padding: 13px 9px; display:flex; flex-direction:column; align-items:center; gap:11px; background:#fbfcfe; }
    .side-icon { width:31px;height:31px;display:grid;place-items:center;border-radius:9px;color:#94a3b8; }
    .side-icon svg { width:16px;height:16px; }
    .side-icon.active { background:var(--blue-soft);color:#192827; }
    .dash-main { padding: 17px 18px; min-width:0; }
    .dash-heading { display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px; }
    .dash-heading strong { font-size:.88rem; }
    .dash-date { display:flex;align-items:center;gap:4px;color:#64748b;font-size:.62rem;border:1px solid var(--line);border-radius:7px;padding:4px 7px; }
    .dash-date svg { width:12px;height:12px; }
    .metrics { display:grid;grid-template-columns:repeat(3,1fr);gap:9px; }
    .metric { padding:10px 10px 9px;border:1px solid #edf1f6;border-radius:11px;background:#fff;min-width:0; }
    .metric-label { display:block;color:#64748b;font-size:.61rem;margin-bottom:4px;white-space:nowrap; }
    .metric-value { display:block;font-weight:800;font-size:.94rem;letter-spacing:-.03em;white-space:nowrap; }
    .metric-change { display:inline-flex;align-items:center;gap:3px;margin-top:5px;color:var(--green);font-size:.58rem; }
    .metric-change svg { width:11px;height:11px; }
    .dash-lower { display:grid;grid-template-columns:1.6fr .9fr;gap:9px;margin-top:10px; }
    .chart-card,.orders-card { border:1px solid #edf1f6;border-radius:11px;background:white;padding:10px;min-width:0; }
    .chart-head { display:flex;justify-content:space-between;gap:8px;align-items:center;font-size:.65rem;font-weight:700; }
    .chart-head span:last-child { font-weight:500;color:#94a3b8;font-size:.57rem; }
    .chart { width:100%;height:104px;margin-top:6px;overflow:visible; }
    .chart-grid { stroke:#eef2f7;stroke-width:1; }
    .chart-line { fill:none;stroke:var(--blue);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round; }
    .chart-fill { fill:url(#area); }
    .orders-card h3 {font-size:.66rem;margin:0 0 9px;}
    .order-line {display:flex;justify-content:space-between;gap:4px;font-size:.56rem;color:#64748b;padding:5px 0;border-top:1px solid #f1f5f9;}
    .order-line b {color:var(--ink);font-size:.56rem;white-space:nowrap;}
    .status {color:var(--green);background:#f0fdf4;border-radius:20px;padding:0 5px;font-size:.5rem;white-space:nowrap;}
    .dash-tabs { display:flex;align-items:center;gap:8px;margin-top:10px; }
    .dash-tab { border:1px solid var(--line);border-radius:7px;padding:5px 8px;background:white;color:#64748b;font-size:.58rem;cursor:pointer;transition:all .2s ease; }
    .dash-tab[aria-pressed="true"] { background:var(--blue);border-color:var(--blue);color:white; }
    .dash-caption { color:#94a3b8;font-size:.55rem;margin-inline-start:auto; }

    .logo-strip { padding: 22px 0 26px; border-bottom:1px solid #f1f5f9; }
    .logo-strip p { text-align:center;color:#94a3b8;font-size:.83rem;margin:0 0 15px; }
    .logos { display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:clamp(22px,5vw,66px);color:#64748b;font-weight:700; }
    .logo-word {display:inline-flex;align-items:center;gap:7px;font-size:.9rem;opacity:.82;}
    .logo-word svg {width:18px;height:18px;color:#94a3b8;}

    section.content-section { padding: 92px 0; }
    .video-section {padding:112px 0 34px;background:#F3F1ED;}
    .video-section .section-head {max-width:1100px;margin-bottom:15px;}
    .video-section .section-kicker {color:#192827;}
    .video-section h2 {color:#192827;margin-bottom:6px;font-size:clamp(12px,2.2vw,34px);line-height:1.35;white-space:nowrap;}
    .video-section .section-head p {color:var(--muted);}
    .video-preview {position:relative;width:min(100%,860px);aspect-ratio:16/9;margin-inline:auto;overflow:hidden;border:1px solid rgba(25,40,39,.18);border-radius:26px;background:#192827;box-shadow:0 24px 60px rgba(25,40,39,.16);isolation:isolate;}
    .video-preview::after {content:"";position:absolute;inset:35% 0 0;background:linear-gradient(180deg,transparent,rgba(25,40,39,.24));pointer-events:none;}
    .video-preview img {display:block;width:100%;height:100%;object-fit:cover;}
    .video-play {position:absolute;z-index:1;top:50%;left:50%;width:82px;height:82px;display:grid;place-items:center;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.7);border-radius:50%;background:rgba(25,40,39,.7);box-shadow:0 8px 28px rgba(0,0,0,.22);backdrop-filter:blur(8px);}
    .video-play svg {width:27px;height:27px;margin-inline-start:4px;fill:#fff;color:#fff;}
    .video-label {position:absolute;z-index:1;inset-inline-start:18px;top:18px;padding:7px 12px;border:1px solid rgba(255,255,255,.38);border-radius:999px;background:rgba(25,40,39,.62);color:#fff;font-size:.78rem;backdrop-filter:blur(8px);}
    .section-head { max-width: 650px; margin: 0 auto 42px; text-align:center; }
    .section-kicker { color:#192827;font-size:.82rem;font-weight:800;margin-bottom:8px; }
    h2 { font-size:var(--type-heading-4);line-height:1.3;letter-spacing:-.045em;margin-bottom:12px; }
    .section-head p { color:var(--muted);margin:0; }
    .feature-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px; }
    .feature-card { padding:24px 22px 23px;border:1px solid var(--line);border-radius:var(--radius);background:white;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease; }
    .feature-card:hover { transform:translateY(-4px);box-shadow:var(--shadow);border-color:#bfdbfe; }
    .feature-icon { width:46px;height:46px;display:grid;place-items:center;border-radius:14px;background:var(--blue-soft);color:#192827;margin-bottom:17px; }
    .feature-card:nth-child(2) .feature-icon,.feature-card:nth-child(5) .feature-icon {background:#fff7ed;color:var(--orange-dark);}
    .feature-card:nth-child(3) .feature-icon {background:#f0fdf4;color:#15803d;}
    .feature-icon svg { width:23px;height:23px; }
    .feature-card h3 {font-size:1.05rem;margin:0 0 8px;}
    .feature-card p {color:var(--muted);font-size:.91rem;margin:0;}

    .workflow { background:var(--paper); }
    .workflow-grid {display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:55px;}
    .workflow-copy h2 {margin:12px 0;}
    .workflow-faq {display:grid;gap:10px;margin-top:24px;}
    .workflow-faq-item {border:1px solid var(--line);border-radius:14px;background:#fff;padding:0 16px;transition:border-color .2s ease,box-shadow .2s ease;}
    .workflow-faq-item[open] {border-color:rgba(241,121,56,.48);box-shadow:0 8px 22px rgba(25,40,39,.06);}
    .workflow-faq-item summary {position:relative;list-style:none;padding:14px 0;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:12px;cursor:pointer;}
    .workflow-faq-item summary::-webkit-details-marker {display:none;}
    .workflow-faq-item summary::after {content:"+";font-size:1.35rem;font-weight:500;color:var(--orange);line-height:1;}
    .workflow-faq-item[open] summary::after {content:"−";}
    .workflow-faq-item p {color:var(--muted);font-size:.86rem;line-height:1.8;margin:0;padding:0 0 15px;}
    .ledger-card {position:relative;border:1px solid #e6edf5;border-radius:22px;padding:20px;background:white;box-shadow:var(--shadow);overflow:hidden;}
    .workflow-visual {aspect-ratio:1.9;padding:0;isolation:isolate;background:#192827;}
    .workflow-visual::before {display:none;}
    .workflow-shot {position:absolute;top:-10%;left:-12.5%;width:125%;max-width:none;height:auto;transition:opacity .24s ease;}
    .workflow-visual.is-changing .workflow-shot {opacity:0;}
    .workflow-visual-label {position:absolute;z-index:2;right:14px;top:14px;padding:6px 11px;border:1px solid rgba(255,255,255,.4);border-radius:999px;background:rgba(25,40,39,.68);color:#fff;font-size:.72rem;backdrop-filter:blur(8px);}
    .ledger-card::before {content:"";position:absolute;width:200px;height:200px;background:rgba(219,234,254,.55);border-radius:50%;top:-120px;left:-70px;}
    .ledger-title {position:relative;display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:14px;}
    .ledger-title strong {font-size:.96rem;}
    .ledger-title span {font-size:.7rem;color:var(--muted);}
    .ledger-table {position:relative;width:100%;border-collapse:collapse;text-align:right;font-size:.78rem;}
    .ledger-table th {font-size:.68rem;color:#64748b;font-weight:600;background:#f8fafc;}
    .ledger-table th,.ledger-table td {padding:11px 10px;border-bottom:1px solid #eef2f7;}
    .ledger-table tr:last-child td {border:0;}
    .ledger-table td:last-child {font-weight:700;white-space:nowrap;}
    .ledger-foot {position:relative;display:flex;align-items:center;justify-content:space-between;margin-top:13px;padding:11px 12px;border-radius:12px;background:#f0fdf4;color:#166534;font-size:.8rem;font-weight:700;}
    .ledger-foot span:last-child {display:flex;align-items:center;gap:5px;}
    .ledger-foot svg {width:17px;height:17px;}

    .modules {padding:88px 0;background:#F3F1ED;}
    .result-head {max-width:1440px;margin-inline:auto;}
    .result-head h2 {font-size:var(--type-heading-3);line-height:1.45;letter-spacing:-.035em;}
    .result-head p {max-width:1380px;margin:0 auto;font-size:20px;line-height:1.8;}
    .result-number {display:inline-block;color:var(--orange);font-size:1.28em;font-weight:800;line-height:1;vertical-align:-.06em;}
    .module-grid {display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
    .module {padding:20px 18px;border:1px solid var(--line);border-radius:16px;background:#fff;}
    .module-icon {display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:#f1f5f9;color:#334155;margin-bottom:12px;}
    .module-icon svg {width:20px;height:20px;}
    .module h3 {font-size:.95rem;margin:0 0 5px;}
    .module p {font-size:.8rem;color:var(--muted);margin:0;}

    .cta-band {padding:20px 0 88px;}
    .cta-panel {position:relative;overflow:hidden;border-radius:26px;padding:52px 50px;background:linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%);color:white;display:flex;align-items:center;justify-content:space-between;gap:30px;}
    .cta-panel::before,.cta-panel::after {content:"";position:absolute;border:1px solid rgba(255,255,255,.14);border-radius:50%;pointer-events:none;}
    .cta-panel::before {width:330px;height:330px;left:-115px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.04),0 0 0 75px rgba(255,255,255,.03);}
    .cta-panel::after {width:190px;height:190px;right:40%;bottom:-155px;}
    .cta-copy,.cta-action {position:relative;z-index:1;}
    .cta-copy h2 {font-size:clamp(1.65rem,3vw,2.25rem);margin:0 0 8px;}
    .cta-copy p {margin:0;color:#d6eee7;max-width:570px;}
    .cta-action .button {background:var(--orange);color:#fff;white-space:nowrap;}
    .cta-action small {display:block;color:#d6eee7;text-align:center;margin-top:9px;font-size:.72rem;}

    .faq {background:#F3F1ED;}
    .faq-list {max-width:780px;margin:0 auto;display:grid;gap:10px;}
    .faq-item {border:1px solid var(--line);border-radius:14px;background:white;padding:0 18px;}
    .faq-item summary {position:relative;list-style:none;padding:17px 0;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:12px;}
    .faq-item summary::-webkit-details-marker {display:none;}
    .faq-item summary::after {content:"+";font-size:1.35rem;font-weight:500;color:#192827;line-height:1;}
    .faq-item[open] summary::after {content:"−";}
    .faq-item p {color:var(--muted);font-size:.9rem;margin:0;padding:0 0 17px;}
    .testimonials-section {padding:82px 0;background:#F3F1ED;}
    .testimonials-carousel {display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:12px;direction:ltr;}
    .testimonials-window {min-width:0;overflow:hidden;padding:12px 0 16px;margin:-12px 0 -16px;}
    .testimonials-track {display:flex;flex-direction:row;direction:ltr;align-items:stretch;gap:16px;will-change:transform;transition:transform .72s cubic-bezier(.22,.75,.2,1);}
    .testimonial-card {display:flex;flex:0 0 auto;flex-direction:column;align-items:flex-start;min-height:205px;padding:22px;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 10px 28px rgba(25,40,39,.045);direction:rtl;text-align:right;opacity:.74;transform:scale(.93);transform-origin:center center;transition:transform .72s cubic-bezier(.22,.75,.2,1),opacity .72s ease,border-color .72s ease,box-shadow .72s ease;}
    .testimonial-card.is-center {position:relative;z-index:1;opacity:1;transform:scale(1.045);border-color:rgba(241,121,56,.48);box-shadow:0 16px 34px rgba(25,40,39,.11);}
    .testimonial-meta {display:flex;align-items:center;gap:12px;direction:rtl;margin-bottom:14px;max-width:100%;}
    .testimonial-mark {display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:12px;background:rgba(241,121,56,.12);color:var(--orange);font-size:1.8rem;font-weight:700;line-height:1;}
    .testimonial-card p {margin:0;color:var(--muted);font-size:.9rem;line-height:1.9;}
    .testimonial-author {margin:0;padding:0;color:#192827;font-size:.92rem;font-weight:700;}
    .testimonial-arrow {display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--line);border-radius:50%;background:#fff;color:#192827;font-size:1.5rem;line-height:1;cursor:pointer;box-shadow:0 6px 18px rgba(25,40,39,.07);transition:background .2s ease,color .2s ease,transform .2s ease;}
    .testimonial-arrow:hover {background:var(--orange);color:#fff;transform:scale(1.06);}
    .testimonial-arrow:focus-visible {outline:3px solid rgba(241,121,56,.4);outline-offset:3px;}
    @media (max-width:720px) {
      .testimonials-section {padding:58px 0;}
      .testimonials-carousel {grid-template-columns:32px minmax(0,1fr) 32px;gap:6px;}
      .testimonials-track {gap:8px;}
      .testimonial-card {min-height:230px;padding:12px 9px;}
      .testimonial-meta {gap:6px;margin-bottom:9px;}
      .testimonial-mark {flex-basis:28px;width:28px;height:28px;font-size:1.35rem;border-radius:9px;}
      .testimonial-card p {font-size:.68rem;line-height:1.75;}
      .testimonial-author {font-size:.66rem;}
      .testimonial-card.is-center {transform:scale(1.035);}
      .testimonial-arrow {width:32px;height:32px;font-size:1.15rem;}
    }
    .pricing-section,.blog-section,.updates-section,.about-section {padding:82px 0;background:#F3F1ED;}
    .pricing-section {padding:34px 0 38px;}
    .pricing-section .section-head {margin-bottom:18px;}
    .pricing-section .section-head h2 {font-size:32px;margin-bottom:4px;}
    .pricing-section .section-head p {font-size:.82rem;}
    .plan-builder-shell {padding:2px;border-radius:28px;background:linear-gradient(125deg,#192827 0%,#087f7a 48%,#f17938 100%);box-shadow:0 24px 60px rgba(25,40,39,.12);}
    .plan-builder {display:grid;grid-template-columns:minmax(0,1.15fr) minmax(290px,.85fr);gap:7px;padding:7px;border-radius:26px;background:#e9e7e1;}
    .plan-options,.plan-summary {padding:18px;border-radius:20px;background:#fff;}
    .plan-options {display:flex;flex-direction:column;}
    .plan-panel-kicker {display:flex;align-items:center;gap:9px;margin:0 0 4px;color:#192827;font-size:.78rem;font-weight:700;}
    .plan-panel-kicker::before {content:"";width:9px;height:9px;border-radius:50%;background:#f17938;box-shadow:0 0 0 5px rgba(241,121,56,.12);}
    .plan-options h3,.plan-summary h3 {margin:0;color:#192827;font-size:1.08rem;}
    .plan-intro {margin:4px 0 9px;color:var(--muted);font-size:.78rem;}
    .addon-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}
    .addon-card {position:relative;z-index:0;min-height:116px;padding:9px;border:1px solid #e5e7e3;border-radius:14px;background:#fff;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease;}
    .addon-card.period-open {z-index:20;}
    .addon-card:hover {transform:translateY(-2px);border-color:#b9c9c4;box-shadow:0 9px 23px rgba(25,40,39,.07);}
    .addon-card.is-selected {border-color:#087f7a;background:#f7fbf9;box-shadow:0 0 0 2px rgba(8,127,122,.1);}
    .addon-select {display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%;height:100%;padding:31px 0 24px;border:0;background:transparent;color:#192827;text-align:right;font:inherit;cursor:pointer;}
    .addon-heading {display:flex;align-items:flex-start;justify-content:flex-start;gap:10px;width:100%;min-width:0;padding:0;direction:rtl;}
    .addon-icon {display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:10px;background:#f3f1ed;color:#192827;}
    .addon-card.is-selected .addon-icon {background:#192827;color:#fff;}
    .addon-icon svg {width:19px;height:19px;}
    .addon-title {min-width:0;max-width:calc(100% - 48px);font-size:.86rem;font-weight:700;line-height:1.7;text-align:right;white-space:normal;overflow-wrap:anywhere;}
    .addon-check {position:absolute;top:10px;right:10px;display:grid;place-items:center;width:17px;height:17px;border:1px solid #d7ddd9;border-radius:50%;color:transparent;font-size:.65rem;}
    .addon-card.is-selected .addon-check {border-color:#087f7a;background:#087f7a;color:#fff;}
    .period-trigger {position:absolute;top:7px;left:8px;display:flex;align-items:center;gap:4px;padding:3px 6px;border:1px solid #e6e9e6;border-radius:8px;background:#fbfcfa;color:#192827;font:inherit;font-size:.64rem;cursor:pointer;}
    .period-trigger svg {width:12px;height:12px;transition:transform .18s ease;}
    .period-trigger[aria-expanded="true"] svg {transform:rotate(180deg);}
    .period-menu {position:absolute;top:34px;left:8px;z-index:30;display:none;min-width:104px;padding:4px;border:1px solid #e6e9e6;border-radius:10px;background:#fff;box-shadow:0 12px 26px rgba(25,40,39,.14);}
    .period-menu.open {display:grid;gap:2px;}
    .period-option {padding:7px 8px;border:0;border-radius:7px;background:transparent;color:#192827;text-align:right;font:inherit;font-size:.7rem;cursor:pointer;}
    .period-option:hover,.period-option[aria-checked="true"] {background:#f3f1ed;color:#087f7a;}
    .addon-price {position:absolute;right:10px;bottom:8px;display:flex;align-items:baseline;gap:3px;color:#f17938;}
    .addon-price strong {font-size:.82rem;font-weight:800;}
    .addon-price small {font-size:.57rem;color:#a85c31;}
    .plan-summary {display:flex;flex-direction:column;background:#192827;color:#e7ecea;}
    .plan-summary .plan-panel-kicker {color:#c3d2ce;}
    .plan-summary h3 {color:#fff;}
    .summary-caption {margin:4px 0 8px;color:#b8c4c1;font-size:.74rem;}
    .selected-list {display:grid;align-content:start;gap:6px;min-height:44px;margin:0;padding:0;list-style:none;}
    .selected-list li {display:flex;align-items:flex-start;gap:9px;color:#f1f5f3;font-size:.78rem;line-height:1.7;}
    .selected-list li::before {content:"✓";display:grid;place-items:center;flex:none;width:20px;height:20px;margin-top:2px;border-radius:50%;background:rgba(8,127,122,.35);color:#a7e5d9;font-size:.72rem;font-weight:800;}
    .summary-empty {color:#b8c4c1;font-size:.82rem;}
    .summary-stats {display:flex;justify-content:space-between;gap:12px;margin:19px 0 16px;padding:15px 0;border-top:1px solid rgba(231,236,234,.15);border-bottom:1px solid rgba(231,236,234,.15);}
    .summary-stat span,.summary-stat strong {display:block;}
    .summary-stat span {color:#b8c4c1;font-size:.7rem;}
    .summary-stat strong {margin-top:3px;color:#fff;font-size:.9rem;}
    .summary-total {display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:5px;margin-top:10px;padding:10px 0;border-top:1px solid rgba(231,236,234,.15);}
    .total-label {grid-column:1 / -1;color:#c3d2ce;font-size:.95rem;font-weight:700;}
    .total-price {grid-column:1 / 3;display:flex;align-items:center;gap:0;color:#fff;font-size:1.55rem;font-weight:800;line-height:1.15;direction:ltr;font-variant-numeric:tabular-nums;white-space:nowrap;}
    .total-currency {grid-column:3;grid-row:2;color:#fff;font-size:.85rem;font-weight:700;}
    .rolling-digit {display:inline-block;width:.66em;height:1.1em;overflow:hidden;vertical-align:bottom;}
    .rolling-track {display:flex;flex-direction:column;transition:transform .75s cubic-bezier(.22,.8,.25,1);will-change:transform;}
    .rolling-track span {display:block;height:1.1em;line-height:1.1em;text-align:center;}
    .total-separator {display:inline-block;width:.28em;text-align:center;}
    .save-promise {display:flex;flex-direction:column;gap:1px;margin:0 0 10px;color:#fff;}
    .save-promise strong {font-size:1.55rem;font-weight:800;line-height:1.3;}
    .save-promise span {font-size:1rem;font-weight:500;line-height:1.4;}
    .plan-summary .button {width:100%;background:#f17938;color:white;}
    .summary-note {margin:6px 0 0;color:#b8c4c1;text-align:center;font-size:.62rem;}
    .blog-grid {display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
    .blog-card {overflow:hidden;border:1px solid var(--line);border-radius:18px;background:#fff;}
    .blog-art {height:128px;display:grid;place-items:center;background:linear-gradient(135deg,#e8eef8,#fff1e9);color:#192827;}
    .blog-art svg {width:42px;height:42px;}
    .blog-body {padding:18px;}
    .blog-meta {font-size:.72rem;color:var(--muted);margin-bottom:7px;}
    .blog-body h3 {font-size:1rem;line-height:1.6;margin:0 0 7px;}
    .blog-body p {font-size:.82rem;color:var(--muted);margin:0 0 12px;}
    .blog-link {font-size:.82rem;font-weight:700;color:#192827;}
    .update-list {max-width:760px;margin:0 auto;display:grid;gap:13px;}
    .update-item {display:grid;grid-template-columns:130px 1fr;gap:18px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#fff;}
    .update-version {color:var(--orange-dark);font-size:.8rem;font-weight:700;}
    .update-item h3 {font-size:.98rem;margin:0 0 4px;}
    .update-item p {color:var(--muted);font-size:.83rem;margin:0;}
    .about-panel {display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:38px;padding:34px;border-radius:22px;background:#fff;border:1px solid var(--line);}
    .about-panel h2 {margin:8px 0;}
    .about-panel p {color:var(--muted);margin:0;}
    .about-points {display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .about-point {padding:14px;border:1px solid var(--line);border-radius:14px;background:#faf9f7;}
    .about-point strong {display:block;color:#192827;font-size:1.1rem;}
    .about-point span {color:var(--muted);font-size:.75rem;}
    .contact-grid {display:grid;grid-template-columns:.9fr 1.1fr;gap:45px;align-items:start;}
    .contact-copy h2 {margin:10px 0;}
    .contact-copy p {color:var(--muted);}
    .contact-note {display:flex;gap:10px;align-items:flex-start;color:#475569;font-size:.85rem;margin-top:20px;}
    .contact-note svg {width:19px;height:19px;color:#192827;flex:none;margin-top:3px;}
    .form-card {border:1px solid var(--line);border-radius:20px;padding:24px;background:#fff;box-shadow:var(--soft-shadow);}
    .form-row {display:grid;grid-template-columns:1fr 1fr;gap:13px;}
    .field {margin-bottom:14px;}
    .field label {display:block;font-weight:700;font-size:.82rem;margin-bottom:6px;}
    .field input,.field textarea {width:100%;border:1px solid #cbd5e1;border-radius:10px;padding:11px 12px;background:#fff;color:var(--ink);transition:border-color .2s ease,box-shadow .2s ease;}
    .field input::placeholder,.field textarea::placeholder {color:#94a3b8;}
    .field input:focus,.field textarea:focus {outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,.12);}
    .field textarea {min-height:90px;resize:vertical;}
    .form-card .button {width:100%;}
    .site-footer {background:#192827;color:#f8fafc;padding:36px 0 18px;border-top:1px solid #29413e;}
    .footer-main {display:grid;grid-template-columns:minmax(300px,1.8fr) repeat(3,minmax(120px,1fr));align-items:start;gap:30px;direction:rtl;}
    .footer-brand {grid-column:1;grid-row:1;direction:rtl;text-align:right;}
    .footer-links-column:nth-of-type(1) {grid-column:2;grid-row:1;}
    .footer-links-column:nth-of-type(2) {grid-column:3;grid-row:1;}
    .footer-links-column:nth-of-type(3) {grid-column:4;grid-row:1;}
    .footer-brand h2 {margin:0 0 8px;color:#f8fafc;font-size:16px;font-weight:700;line-height:1.8;}
    .footer-address {margin:0;color:#cbd5d1;font-size:12px;font-style:normal;line-height:1.9;}
    .footer-logos {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:start;align-items:center;gap:8px;margin-top:16px;direction:ltr;}
    .footer-logo {display:flex;align-items:center;justify-content:center;min-width:0;height:66px;padding:7px;border:1px solid #e5e7eb;border-radius:9px;background:#fff;}
    .footer-logo img {display:block;width:100%;height:100%;object-fit:contain;}
    .footer-links-column {direction:rtl;text-align:right;}
    .footer-column-title {margin:0 0 10px;color:#f8fafc;font-size:13px;font-weight:700;line-height:1.8;}
    .footer-links-list {display:flex;flex-direction:column;gap:5px;margin:0;padding:0;list-style:none;}
    .footer-links-list a,.footer-links-list span {color:#cbd5d1;font-size:12px;font-weight:400;line-height:1.8;text-decoration:none;transition:color .2s ease;}
    .footer-links-list a:hover {color:#F17938;}
    .site-footer {position:relative;padding-top:82px;}
    .site-footer .container {position:relative;}
.footer-social-card {position:absolute;z-index:3;top:-82px;left:0;right:0;transform:translateY(-50%);display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:136px;padding:24px 32px;overflow:hidden;border:1px solid rgba(255,255,255,.34);border-radius:26px;background:linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%);box-shadow:0 22px 44px rgba(10,31,29,.28),0 7px 16px rgba(10,31,29,.18);direction:ltr;}
.footer-social-card::before,.footer-social-card::after {position:absolute;content:"";border:1px solid rgba(255,255,255,.14);border-radius:50%;pointer-events:none;}
.footer-social-card::before {width:330px;height:330px;left:-115px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.04),0 0 0 75px rgba(255,255,255,.03);}
.footer-social-card::after {width:190px;height:190px;right:40%;bottom:-155px;}
.footer-social-icons {position:relative;z-index:1;display:flex;align-items:center;gap:10px;flex:0 0 auto;}
.footer-social-icon {display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.94);color:#087f7a;box-shadow:0 3px 8px rgba(6,45,41,.16);}
    .footer-social-icon img {display:block;width:22px;height:22px;object-fit:contain;}
.footer-social-copy {position:relative;z-index:1;display:flex;align-items:center;gap:14px;direction:rtl;text-align:right;}
    .footer-social-brand {display:block;width:52px;height:52px;flex:0 0 52px;object-fit:contain;filter:drop-shadow(0 4px 8px rgba(0,0,0,.14));}
.footer-social-title {margin:0;color:#fff;font-size:var(--type-body-1);font-weight:400;line-height:1.8;}
@media(max-width:720px){.site-footer {padding-top:70px;}.footer-social-card {top:-70px;min-height:106px;padding:16px 18px;gap:12px;border-radius:22px;}.footer-social-icons {gap:7px;}.footer-social-icon {width:36px;height:36px;}.footer-social-icon img {width:19px;height:19px;}.footer-social-copy {gap:10px;}.footer-social-brand {width:42px;height:42px;flex-basis:42px;}}
@media(max-width:420px){.site-footer {padding-top:62px;}.footer-social-card {top:-62px;padding:13px 10px;gap:9px;border-radius:18px;}.footer-social-icons {gap:6px;}.footer-social-icon {width:32px;height:32px;}.footer-social-icon img {width:17px;height:17px;}.footer-social-brand {width:36px;height:36px;flex-basis:36px;}}
    .footer-bottom {display:flex;align-items:center;justify-content:center;gap:24px;margin-top:24px;padding-top:15px;border-top:1px solid #35504c;direction:ltr;}
    .footer-copyright {max-width:100%;direction:rtl;text-align:center;}
    .footer-copyright p {margin:0;color:#cbd5d1;font-size:10px;line-height:1.8;}
    .footer-copyright a {color:#f8fafc;text-decoration:none;transition:color .2s ease;}
    .footer-copyright a:hover {color:#F17938;}
    @media(max-width:980px) {
      .footer-main {grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;}
      .footer-brand {grid-column:1/-1;grid-row:1;}
      .footer-links-column {grid-row:auto;}
      .footer-links-column:nth-of-type(1) {grid-column:1;grid-row:2;}
      .footer-links-column:nth-of-type(2) {grid-column:2;grid-row:2;}
      .footer-links-column:nth-of-type(3) {grid-column:1;grid-row:3;}
      .footer-bottom {align-items:center;}
    }
    @media(max-width:720px) {
      .site-footer {padding:28px 0 16px;}
      .footer-main {grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 18px;}
      .footer-brand {grid-column:1/-1;}
      .footer-links-column:nth-of-type(1),.footer-links-column:nth-of-type(2) {grid-row:2;}
      .footer-links-column:nth-of-type(3) {grid-column:1/-1;grid-row:3;}
      .footer-bottom {flex-direction:column;align-items:center;gap:12px;}
      .footer-copyright {max-width:100%;text-align:center;}
    }
    @media(max-width:420px) {
      .footer-main {grid-template-columns:1fr;gap:18px;}
      .footer-brand,.footer-links-column:nth-of-type(1),.footer-links-column:nth-of-type(2),.footer-links-column:nth-of-type(3) {grid-column:1;grid-row:auto;}
      .footer-logos {grid-template-columns:repeat(3,minmax(0,1fr));}
      .footer-bottom {align-items:center;}
      .footer-copyright {text-align:center;}
    }
    @media (max-width: 980px) {
      .hero {min-height:0;padding:38px 0 44px;}
      .hero-grid {grid-template-columns:1fr;gap:42px;}
      .hero-content {max-width:700px;margin-inline:auto;text-align:center;}
      .hero-copy {margin-inline:auto;}
      .hero-buttons,.trust-row {justify-content:center;}
      .product-wrap {width:min(540px,100%);margin:auto;}
      .workflow-grid {grid-template-columns:1fr;gap:35px;}
      .workflow-copy {max-width:700px;}
      .ledger-card {max-width:700px;width:100%;margin-inline:auto;}
      .module-grid {grid-template-columns:repeat(2,1fr);}
      .result-head h2 {font-size:var(--type-heading-4);}
      .result-head p {font-size:18px;}
      .contact-grid {grid-template-columns:1fr;gap:25px;}
    }
    @media (min-width: 721px) and (max-height: 760px) {
      .video-section {padding:28px 0 22px;}
      .video-section .section-head {margin-bottom:10px;}
      .video-preview {width:min(100%,760px);}
    }
    @media (min-width: 721px) and (max-height: 650px) {
      .video-section {padding:14px 0;}
      .video-preview {width:min(100%,600px);}
      .video-section .section-head p {font-size:.8rem;}
    }
    @media (max-width: 720px) {
      .container {width:min(100% - 32px,560px);}
      .topbar {height:68px;}
      .menu-toggle {display:grid;place-items:center;}
      .nav-links {display:none;position:absolute;inset-inline:16px;top:60px;padding:12px;background:rgba(243,241,237,.92);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid rgba(25,40,39,.12);border-radius:14px;box-shadow:var(--shadow);flex-direction:column;align-items:stretch;gap:0;white-space:normal;}
      .nav-links.open {display:flex;}
      .nav-links a {padding:10px 12px;border-radius:8px;}
      .nav-links a:hover {background:var(--paper);}
      .hero {padding:36px 0 42px;}
      h1 {font-size:clamp(var(--type-heading-5),8vw,var(--type-heading-3));}
      h2 {font-size:var(--type-heading-5);}
      .hero-copy {font-size:1rem;}
      .video-section {padding:58px 0 28px;}
      .video-section .section-head {max-width:100%;margin-bottom:12px;}
      .video-section h2 {font-size:clamp(12px,3.5vw,20px);}
      .video-section .section-head p {font-size:.82rem;}
      .video-preview {border-radius:18px;}
      .video-play {width:62px;height:62px;}
      .video-play svg {width:21px;height:21px;}
      .video-label {top:10px;inset-inline-start:10px;font-size:.68rem;}
      .hero-buttons .button {flex:1 1 180px;}
      .trust-row {gap:11px 17px;}
      .dashboard {transform:scale(.88);}
      .dash-body {grid-template-columns:42px 1fr;min-height:315px;}
      .dash-main {padding:12px 10px;}
      .dash-side {padding:12px 5px;}
      .side-icon {width:29px;height:29px;}
      .dash-lower {grid-template-columns:1.4fr .9fr;gap:6px;}
      .metric {padding:8px 6px;}
      .metric-value {font-size:.78rem;}
      .metric-label {font-size:.55rem;}
      .chart-card,.orders-card {padding:8px 6px;}
      .chart {height:88px;}
      .order-line {font-size:.49rem;}
      .logos {gap:16px 25px;}
      .logo-word {font-size:.77rem;}
      section.content-section {padding:68px 0;}
      .feature-grid {grid-template-columns:1fr 1fr;gap:11px;}
      .feature-card {padding:17px 15px;}
      .feature-card p {font-size:.82rem;}
      .feature-card h3 {font-size:.95rem;}
      .module-grid {gap:10px;}
      .module {padding:15px 13px;}
      .plan-builder {grid-template-columns:1fr;}
      .addon-grid {grid-template-columns:repeat(2,minmax(0,1fr));}
      .blog-grid {grid-template-columns:1fr;}
      .about-panel {grid-template-columns:1fr;padding:22px;gap:22px;}
      .update-item {grid-template-columns:1fr;gap:4px;padding:16px;}
      .cta-band {padding-bottom:66px;}
      .cta-panel {padding:32px 24px;display:block;text-align:center;}
      .cta-action {margin-top:22px;}
      .cta-action .button {width:100%;}
      .form-row {grid-template-columns:1fr;gap:0;}
    }
    @media (max-width: 420px) {
      .brand {font-size:1.1rem;}
      .brand-mark {width:38px;height:38px;}
      a.button.button-primary.header-cta {font-size:.72rem;min-height:38px;padding:6px 8px;}
      .dash-top {padding-inline:10px;}
      .dash-user {font-size:0;}
      .metric-value {font-size:.69rem;}
      .metric-change {font-size:.52rem;}
      .dash-heading strong {font-size:.77rem;}
      .dash-date {font-size:.55rem;}
      .dash-tabs {gap:5px;}
      .dash-tab {padding:4px 6px;}
      .feature-grid {grid-template-columns:1fr;}
      .module-grid {grid-template-columns:1fr 1fr;}
      .result-head h2 {font-size:var(--type-heading-5);}
      .result-head p {font-size:16px;}
      .ledger-card {padding:14px 10px;}
      .ledger-table {font-size:.68rem;}
      .ledger-table th,.ledger-table td {padding:9px 5px;}
    }
    @media (prefers-reduced-motion: reduce) {
      *,*::before,*::after {scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;}
      a.button.button-primary.header-cta {animation:none;}
      a.button.button-primary.header-cta::after {display:none;}
    }
      .main {padding:70px 0 96px;}
    .about-hero {position:relative;overflow:hidden;display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center;padding:clamp(28px,6vw,78px);border:1px solid rgba(25,40,39,.08);border-radius:30px;background:rgba(255,255,255,.9);box-shadow:0 24px 60px rgba(25,40,39,.07);}
    .about-hero::before {content:"";position:absolute;width:390px;height:390px;left:-140px;top:-150px;border-radius:50%;background:radial-gradient(circle,rgba(241,121,56,.15),transparent 68%);pointer-events:none;}
    .eyebrow {display:inline-flex;align-items:center;gap:9px;margin-bottom:12px;color:var(--green);font-size:.88rem;font-weight:700;}
    .eyebrow::before {content:"";width:9px;height:9px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 5px rgba(241,121,56,.13);}
    h1 {margin:0 0 16px;font-size:clamp(2.35rem,5vw,4rem);line-height:1.25;letter-spacing:-.04em;color:#192827;}
    .lead {max-width:760px;margin:0;color:#526176;font-size:clamp(1rem,1.8vw,1.25rem);line-height:2;}
    .brand-art {position:relative;display:grid;place-items:center;min-height:300px;border-radius:24px;background:linear-gradient(145deg,#f8f6f1,#fff);}
    .brand-art img {width:min(70%,260px);height:auto;object-fit:contain;filter:drop-shadow(0 16px 26px rgba(25,40,39,.12));}
    .values {display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px;}
    .value-card {padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff;}
    .value-card h2 {margin:0 0 8px;color:#192827;font-size:1.15rem;}
    .value-card p {margin:0;color:var(--muted);font-size:.9rem;}
    .next-step {margin-top:40px;text-align:center;}
    .next-step h2 {margin:0 0 18px;color:#192827;font-size:clamp(1.5rem,3vw,2rem);}
    /* About page follows the homepage layout, brand and navigation. */
    :root {--ink:#192827;--muted:#586966;}
    .main {min-height:calc(100svh - 78px);padding:64px 0 80px;}
    .about-hero {grid-template-columns:1.15fr .85fr;gap:36px;padding:40px;border-radius:var(--radius);border-color:var(--line);box-shadow:var(--soft-shadow);}
    .about-hero h1 {max-width:none;margin:0 0 18px;font-size:40px;font-weight:var(--weight-bold);line-height:1.5;letter-spacing:-.035em;color:#192827;}
    .about-hero .eyebrow {color:#192827;font-size:16px;}
    .lead {font-size:18px;font-weight:var(--weight-regular);line-height:1.9;color:var(--muted);}
    .brand-art {min-height:280px;border-radius:var(--radius);background:linear-gradient(145deg,#F3F1ED,#fff);}
    .brand-art img {width:min(70%,240px);}
    .values {gap:20px;margin-top:24px;}
    .value-card {padding:24px;border-radius:var(--radius);border-color:var(--line);box-shadow:var(--soft-shadow);}
    .value-card h2 {font-size:20px;font-weight:var(--weight-bold);line-height:1.5;}
    .value-card p {font-size:16px;font-weight:var(--weight-regular);line-height:1.9;color:var(--muted);}
    .next-step {margin-top:48px;}
    .next-step h2 {font-size:28px;line-height:1.5;}
    .nav-links a[aria-current="page"] {color:var(--orange-dark);}
    @media(max-width:980px) {.about-hero{gap:24px;padding:30px}.about-hero h1{font-size:36px}.brand-art{min-height:250px}}
    @media(max-width:720px) {.main{padding:40px 0 56px}.about-hero{grid-template-columns:1fr;gap:24px;padding:24px}.about-hero h1{font-size:28px}.lead{font-size:16px}.brand-art{min-height:200px}.brand-art img{max-width:180px}.values{grid-template-columns:1fr;gap:16px}.value-card h2{font-size:18px}.value-card p{font-size:15px}.next-step{margin-top:32px}.next-step h2{font-size:24px}}
      .button-primary,.button-blue,.cta-action .button,.plan-summary .button {position:relative;isolation:isolate;overflow:hidden;border:1px solid transparent;background:linear-gradient(var(--orange),var(--orange)) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box;animation:lightbeam-rotate 3.2s linear infinite;box-shadow:0 0 18px rgba(8,127,122,.16),0 7px 16px rgba(241,121,56,.20);color:#fff;}
    .button-primary::before,.button-blue::before,.cta-action .button::before,.plan-summary .button::before {content:"";position:absolute;inset:2px;border-radius:inherit;background:radial-gradient(ellipse at 50% 120%,rgba(255,255,255,.19),transparent 70%);z-index:-1;pointer-events:none;}
    .button-primary::after,.button-blue::after,.cta-action .button::after,.plan-summary .button::after {content:"";position:absolute;top:0;bottom:0;left:-130%;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.34),transparent);transform:skewX(-22deg);transition:left .45s ease;pointer-events:none;}
    .button-primary:hover::after,.button-blue:hover::after,.cta-action .button:hover::after,.plan-summary .button:hover::after {left:145%;}
    .button-primary:hover,.button-blue:hover,.cta-action .button:hover,.plan-summary .button:hover {background:linear-gradient(#f58a4f,#f58a4f) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box;box-shadow:0 0 25px rgba(8,127,122,.28),0 10px 22px rgba(241,121,56,.27);}
    @media (prefers-reduced-motion:reduce) {
      .button-primary,.button-blue,.cta-action .button,.plan-summary .button {animation:none!important;}
      .button-primary::after,.button-blue::after,.cta-action .button::after,.plan-summary .button::after {display:none!important;}
    }
  
```

</details>

<details>
<summary>Component HTML, content, ARIA states and data attributes: about.html</summary>

```html
  <header class="topbar">
    <nav class="nav container" aria-label="ناوبری اصلی">
      <a class="brand" href="index.html#top" aria-label="میکِل، صفحه اصلی">
        <span class="brand-mark" aria-hidden="true"><img src="assets/mikel-logo.png" alt=""></span>
        <span>میکِل</span>
      </a>
      <div class="nav-links" id="nav-links">
        <a href="index.html#pricing">تعرفه‌ها</a>
        <a href="index.html#blog">بلاگ</a>
        <a href="updates.html">تاریخچه‌ی به‌روزرسانی</a>
        <a href="about.html" aria-current="page">درباره‌ی ما</a>
      </div>
      <div class="nav-actions">
        <a class="button button-primary header-cta" href="index.html#pricing">رایگان شروع کنید</a>
        <button class="menu-toggle" type="button" aria-label="باز کردن منو" aria-expanded="false" aria-controls="nav-links">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </nav>
  </header>
  <main class="main container">
    <section class="about-hero" aria-labelledby="about-title">
      <div><span class="eyebrow">درباره‌ی میکل</span><h1 id="about-title">مدیریت ساده‌تر، برای وقت بیشتر کنار مشتری</h1><p class="lead">میکل برای این ساخته شده که مدیریت روزانه‌ی کسب‌وکارهای غذایی روشن‌تر و ساده‌تر باشد. فروش، هزینه‌ها، موجودی و سفارش‌ها در یک تجربه‌ی منظم کنار هم قرار می‌گیرند تا حساب‌وکتاب روزانه وقت کمتری از شما بگیرد.</p></div>
      <div class="brand-art" aria-hidden="true"><img src="assets/mikel-logo.png" alt=""></div>
    </section>
    <section class="values" aria-label="حوزه‌های مدیریت در میکل">
      <article class="value-card"><h2>فروش و سفارش‌ها</h2><p>ثبت فروش و مرور سفارش‌های روزانه در یک نمای مرتب.</p></article>
      <article class="value-card"><h2>هزینه و موجودی</h2><p>مدیریت خریدها و مواد اولیه برای دید بهتر به دخل‌وخرج.</p></article>
      <article class="value-card"><h2>گزارش‌های روشن</h2><p>مرور خلاصه‌ی عملکرد برای تصمیم‌گیری آگاهانه‌تر.</p></article>
    </section>
    <section class="next-step"><h2>با میکل، شروع مدیریت آسان‌تر است</h2><a class="button button-primary" href="index.html#pricing">مشاهده‌ی امکانات و تعرفه‌ها</a></section>
  </main>
  <footer class="site-footer">
    <div class="container">
<div class="footer-social-card">
          <div class="footer-social-icons" aria-label="&#x634;&#x628;&#x6A9;&#x647;&#x200C;&#x647;&#x627;&#x6CC; &#x627;&#x62C;&#x62A;&#x645;&#x627;&#x639;&#x6CC;">
            <span class="footer-social-icon" role="img" aria-label="&#x644;&#x6CC;&#x646;&#x6A9;&#x62F;&#x6CC;&#x646;"><img src="assets/figma-linkedin.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x627;&#x6CC;&#x646;&#x633;&#x62A;&#x627;&#x6AF;&#x631;&#x627;&#x645;"><img src="assets/figma-instagram.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x6CC;&#x648;&#x62A;&#x6CC;&#x648;&#x628;"><img src="assets/figma-play.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x622;&#x67E;&#x627;&#x631;&#x627;&#x62A;"><img src="assets/figma-broadcast.svg" alt=""></span>
          </div>
          <div class="footer-social-copy"><img class="footer-social-brand" src="assets/mikel-logo.png" alt="&#x645;&#x6CC;&#x6A9;&#x644;" width="744" height="744"><h3 class="footer-social-title">&#x645;&#x6CC;&#x6A9;&#x644; &#x631;&#x627; &#x62F;&#x631; &#x634;&#x628;&#x6A9;&#x647;&#x200C;&#x647;&#x627;&#x6CC; &#x627;&#x62C;&#x62A;&#x645;&#x627;&#x639;&#x6CC; &#x62F;&#x646;&#x628;&#x627;&#x644; &#x6A9;&#x646;&#x6CC;&#x62F;</h3></div>
        </div>
              <div class="footer-main">
        <nav class="footer-links-column" aria-label="درباره میکل">
          <h3 class="footer-column-title">درباره میکل</h3>
          <ul class="footer-links-list">
            <li><a href="about.html">درباره ما</a></li>
            <li><span>پشتیبانی</span></li>
          </ul>
        </nav>
        <nav class="footer-links-column" aria-label="راهنما">
          <h3 class="footer-column-title">راهنما</h3>
          <ul class="footer-links-list">
            <li><a href="index.html#pricing">تعرفه ها</a></li>
            <li><a href="index.html#blog">وبلاگ</a></li>
          </ul>
        </nav>
        <nav class="footer-links-column" aria-label="قوانین و اطلاعات">
          <h3 class="footer-column-title">قوانین و اطلاعات</h3>
          <ul class="footer-links-list">
            <li><span>قوانین و مقررات</span></li>
            <li><span>حریم خصوصی</span></li>
          </ul>
        </nav>
        <div class="footer-brand">
          <h2>میکل: پلتفرم مدیریت کافه رستوران‌ها</h2>
          <address class="footer-address">آدرس: اصفهان، میدان آزادی، دانشگاه اصفهان، مرکز رشد علوم انسانی، فناوری‌های نرم و صنایع خلاق</address>
          <div class="footer-logos" aria-label="لوگوها و نشان‌ها">
            <div class="footer-logo"><img src="assets/fani.png" alt="گواهی بررسی فنی سازمان فناوری اطلاعات ایران" width="250" height="231" loading="lazy"></div>
            <div class="footer-logo"><img src="assets/shahrak.png" alt="شهرک علمی و تحقیقاتی اصفهان" width="350" height="420" loading="lazy"></div>
            <a class="footer-logo" href="https://rahkarapp.ir/" aria-label="شرکت راهکار‌های یکپارچه کاربردی"><img src="assets/rahkar-logo1.png" alt="راهکار" width="500" height="157" loading="lazy"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© کلیه حقوق پلتفرم میکل متعلق به <a href="https://rahkarapp.ir/">شرکت راهکار‌های یکپارچه کاربردی</a> می‌باشد.</p>
        </div>
      </div>
    </div>
  </footer>
  <script>
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'باز کردن منو' : 'بستن منو');
      navLinks.classList.toggle('open', !isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'باز کردن منو');
    }));

  </script>
```

</details>

<details>
<summary>JavaScript interaction snapshot: about.html</summary>

```javascript
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'باز کردن منو' : 'بستن منو');
      navLinks.classList.toggle('open', !isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'باز کردن منو');
    }));

  
```

</details>

### updates.html / extracted design and interaction reference

#### CSS custom-property declarations (source order)

| Name | Value |
| --- | --- |
| --blue | #2563eb |
| --blue-dark | #1d4ed8 |
| --blue-soft | #eff6ff |
| --orange | #F17938 |
| --orange-dark | #cf5d25 |
| --ink | #1e293b |
| --muted | #64748b |
| --line | #e2e8f0 |
| --paper | #F3F1ED |
| --white | #fff |
| --green | #15803d |
| --red | #dc2626 |
| --shadow | 0 20px 50px rgba(30, 41, 59, .10) |
| --soft-shadow | 0 8px 24px rgba(30, 41, 59, .07) |
| --radius | 20px |
| --type-heading-1 | 64px |
| --type-heading-2 | 56px |
| --type-heading-3 | 48px |
| --type-heading-4 | 40px |
| --type-heading-5 | 32px |
| --type-heading-6 | 24px |
| --type-body-1 | 24px |
| --type-body-2 | 22px |
| --type-button-xl | 32px |
| --type-button-lg | 28px |
| --type-button-md | 24px |
| --type-button-sm | 20px |
| --type-button-xs | 16px |
| --weight-regular | 400 |
| --weight-bold | 700 |
| --lightbeam-angle | 360deg |
| --ink | #192827 |
| --muted | #586966 |

#### Literal CSS color values

`#087f7a`, `#0b6b63`, `#15803d`, `#166534`, `#192827`, `#1d4ed8`, `#1e293b`, `#2563eb`, `#334155`, `#334443`, `#3B82F6`, `#475569`, `#526176`, `#586966`, `#64748b`, `#94a3b8`, `#9a3412`, `#a7e5d9`, `#a85c31`, `#b8c4c1`, `#b9c9c4`, `#bfdbfe`, `#c3d2ce`, `#cbd5e1`, `#cf5d25`, `#d6eee7`, `#d7ddd9`, `#dbe2eb`, `#dc2626`, `#e2e8f0`, `#e5e7e3`, `#e6e9e6`, `#e6edf5`, `#e7ecea`, `#e8eef8`, `#e9e7e1`, `#edf1f6`, `#eef2f7`, `#eff6ff`, `#f0fdf4`, `#f17938`, `#f1f5f3`, `#f1f5f9`, `#F3F1ED`, `#f58a4f`, `#f59e0b`, `#f7fbf9`, `#f8fafc`, `#faf9f7`, `#fbfcfa`, `#fbfcfe`, `#ffedd5`, `#fff`, `#fff1e9`, `#fff7ed`, `rgba(0,0,0,.22)`, `rgba(219,234,254,.55)`, `rgba(226,232,240,.65)`, `rgba(231,236,234,.14)`, `rgba(231,236,234,.15)`, `rgba(241,121,56,.1)`, `rgba(241,121,56,.10)`, `rgba(241,121,56,.12)`, `rgba(241,121,56,.2)`, `rgba(241,121,56,.20)`, `rgba(241,121,56,.23)`, `rgba(241,121,56,.27)`, `rgba(241,121,56,.4)`, `rgba(241,121,56,.48)`, `rgba(243,241,237,.52)`, `rgba(243,241,237,.92)`, `rgba(249,115,22,.12)`, `rgba(25,40,39,.045)`, `rgba(25,40,39,.06)`, `rgba(25,40,39,.07)`, `rgba(25,40,39,.10)`, `rgba(25,40,39,.11)`, `rgba(25,40,39,.12)`, `rgba(25,40,39,.14)`, `rgba(25,40,39,.16)`, `rgba(25,40,39,.18)`, `rgba(25,40,39,.24)`, `rgba(25,40,39,.62)`, `rgba(25,40,39,.68)`, `rgba(25,40,39,.7)`, `rgba(255,255,255,.03)`, `rgba(255,255,255,.04)`, `rgba(255,255,255,.14)`, `rgba(255,255,255,.19)`, `rgba(255,255,255,.34)`, `rgba(255,255,255,.38)`, `rgba(255,255,255,.4)`, `rgba(255,255,255,.7)`, `rgba(255,255,255,.88)`, `rgba(255,255,255,.9)`, `rgba(255,255,255,.95)`, `rgba(30, 41, 59, .07)`, `rgba(30, 41, 59, .10)`, `rgba(30,41,59,.16)`, `rgba(37,99,235,.02)`, `rgba(37,99,235,.025)`, `rgba(37,99,235,.08)`, `rgba(37,99,235,.12)`, `rgba(37,99,235,.2)`, `rgba(8,127,122,.1)`, `rgba(8,127,122,.16)`, `rgba(8,127,122,.28)`, `rgba(8,127,122,.35)`

#### Classes present in the body markup

`brand`, `brand-mark`, `button`, `button-primary`, `container`, `footer-copyright`, `footer-social-brand`, `footer-social-card`, `footer-social-copy`, `footer-social-icon`, `footer-social-icons`, `footer-social-title`, `footer-logo`, `footer-logos`, `footer-menu`, `header-cta`, `menu-toggle`, `nav`, `nav-actions`, `nav-links`, `section-head`, `section-kicker`, `site-footer`, `topbar`, `update-item`, `update-list`, `updates-main`, `update-version`

<details>
<summary>Complete CSS snapshot: updates.html</summary>

```css
    @property --lightbeam-angle {
      syntax: "<angle>";
      inherits: false;
      initial-value: 0deg;
    }
    @font-face { font-family: "IRANSansFaNum"; src: url("assets/IRANSans-FaNum-Medium.ttf") format("truetype"); font-style: normal; font-weight: 500; font-display: swap; }
    :root {
      color-scheme: light;
      --blue: #2563eb;
      --blue-dark: #1d4ed8;
      --blue-soft: #eff6ff;
      --orange: #F17938;
      --orange-dark: #cf5d25;
      --ink: #1e293b;
      --muted: #64748b;
      --line: #e2e8f0;
      --paper: #F3F1ED;
      --white: #fff;
      --green: #15803d;
      --red: #dc2626;
      --shadow: 0 20px 50px rgba(30, 41, 59, .10);
      --soft-shadow: 0 8px 24px rgba(30, 41, 59, .07);
      --radius: 20px;
      /* Typography system — desktop reference scale */
      --type-heading-1: 64px;
      --type-heading-2: 56px;
      --type-heading-3: 48px;
      --type-heading-4: 40px;
      --type-heading-5: 32px;
      --type-heading-6: 24px;
      --type-body-1: 24px;
      --type-body-2: 22px;
      --type-button-xl: 32px;
      --type-button-lg: 28px;
      --type-button-md: 24px;
      --type-button-sm: 20px;
      --type-button-xs: 16px;
      --weight-regular: 400;
      --weight-bold: 700;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 88px; }
    body { margin: 0; background: #F3F1ED; color: var(--ink); font-family: "IRANSansFaNum", Tahoma, sans-serif; font-size: 16px; line-height: 1.8; font-weight: 500; }
    a { color: inherit; text-decoration: none; }
    button, input, textarea { font: inherit; }
    button, a, summary { -webkit-tap-highlight-color: transparent; }
    button, .button, summary { cursor: pointer; }
    :focus-visible { outline: 3px solid #f59e0b; outline-offset: 3px; }
    .container { width: min(1160px, calc(100% - 48px)); margin-inline: auto; }
    .skip-link { position: absolute; top: -60px; inset-inline-start: 16px; z-index: 100; padding: 10px 16px; background: var(--ink); color: #fff; border-radius: 8px; }
    .skip-link:focus { top: 12px; }
    .topbar { height: 78px; display: flex; align-items: center; border-bottom: 1px solid rgba(25,40,39,.10); background: rgba(243,241,237,.52); -webkit-backdrop-filter: blur(20px) saturate(145%); backdrop-filter: blur(20px) saturate(145%); position: sticky; top: 0; z-index: 20; }
    .nav { display: flex; align-items: center; justify-content: space-between; gap: 28px; }
    .brand { display: inline-flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 800; letter-spacing: -.04em; white-space: nowrap; }
    .brand-mark { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 12px; background: transparent; flex:none; }
    .brand-mark img { width: 100%; height: 100%; object-fit: contain; }
    .nav-links { display: flex; align-items: center; gap: clamp(14px,2.1vw,28px); color: #334443; font-size: .88rem; white-space: nowrap; }
    .nav-links a { transition: color .2s ease; }
    .nav-links a:hover { color: var(--orange-dark); }
    .nav-actions { display: flex; align-items: center; gap: 10px; }
    a.button.button-primary.header-cta { white-space: nowrap; min-height: 44px; padding: 8px 15px; position:relative; isolation:isolate; overflow:hidden; border:1px solid transparent; background:linear-gradient(var(--orange),var(--orange)) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box; animation:lightbeam-rotate 3.2s linear infinite; box-shadow:0 0 18px rgba(8,127,122,.16),0 7px 16px rgba(241,121,56,.20); }
    a.button.button-primary.header-cta::before {content:"";position:absolute;inset:2px;border-radius:inherit;background:radial-gradient(ellipse at 50% 120%,rgba(255,255,255,.19),transparent 70%);z-index:-1;pointer-events:none;}
    a.button.button-primary.header-cta::after {content:"";position:absolute;top:0;bottom:0;left:-130%;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.34),transparent);transform:skewX(-22deg);transition:left .45s ease;pointer-events:none;}
    a.button.button-primary.header-cta:hover::after {left:145%;}
    a.button.button-primary.header-cta:hover {box-shadow:0 0 25px rgba(8,127,122,.28),0 10px 22px rgba(241,121,56,.27);}
    @keyframes lightbeam-rotate {to {--lightbeam-angle:360deg;}}
    .login { font-size: .9rem; font-weight: 600; color: #475569; padding: 8px 10px; }
    .button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; padding: 10px 20px; border: 1px solid transparent; border-radius: 12px; font-size:var(--type-button-xs);font-weight:var(--weight-regular); transition: transform .22s ease, box-shadow .22s ease, background .22s ease; }
    .button-xl {font-size:var(--type-button-xl);font-weight:var(--weight-regular);}
    .button-lg {font-size:var(--type-button-lg);font-weight:var(--weight-regular);}
    .button-md {font-size:var(--type-button-md);font-weight:var(--weight-regular);}
    .button-sm {font-size:var(--type-button-sm);font-weight:var(--weight-regular);}
    .button-xs {font-size:var(--type-button-xs);font-weight:var(--weight-regular);}
    .button:hover { transform: translateY(-2px); }
    .button-primary { background: var(--orange); color: #fff; box-shadow: 0 7px 16px rgba(241,121,56,.20); }
    .button-primary:hover { background: #f58a4f; box-shadow: 0 10px 22px rgba(241,121,56,.27); }
    .button-blue { background: var(--orange); color: #fff; box-shadow: 0 8px 18px rgba(241,121,56,.2); }
    .button-blue:hover { background: #f58a4f; }
    .button-quiet { border-color: var(--line); color: var(--ink); background: white; }
    .button-quiet:hover { border-color: #bfdbfe; box-shadow: var(--soft-shadow); }
    .button svg { width: 18px; height: 18px; flex: none; }
    .menu-toggle { display: none; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 12px; background: white; color: var(--ink); }
    .menu-toggle svg { width: 21px; height: 21px; }

    .hero { position: relative; display:flex; align-items:center; min-height:calc(100svh - 78px); overflow:hidden; padding:34px 0 42px; background: radial-gradient(ellipse at 15% 12%, rgba(241,121,56,.10), transparent 35%), linear-gradient(180deg, #F3F1ED 0%, #F3F1ED 90%); }
    .hero::after { content: ""; position: absolute; width: 370px; height: 370px; border: 1px solid rgba(37,99,235,.08); border-radius: 50%; inset-inline-start: -170px; bottom: -220px; box-shadow: 0 0 0 42px rgba(37,99,235,.025), 0 0 0 86px rgba(37,99,235,.02); pointer-events: none; }
    .hero-grid { display: grid; grid-template-columns: .92fr 1.08fr; align-items: center; gap: 42px; position: relative; z-index: 1; }
    .eyebrow { display: inline-flex; align-items: center; gap: 8px; color: #192827; font-weight: 700; font-size: .84rem; }
    .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 4px rgba(241,121,56,.1); }
    h1, h2, h3, p { margin-top: 0; }
    h1 { margin: 17px 0 18px; max-width: 600px; font-size: var(--type-heading-1); line-height: 1.25; letter-spacing: -.055em; font-weight: var(--weight-bold); text-align:start; }
    h2 { font-size:var(--type-heading-4);font-weight:var(--weight-bold); }
    .type-heading-1,.type-heading-2,.type-heading-3,.type-heading-4,.type-heading-5,.type-heading-6 {font-weight:var(--weight-bold);line-height:1.3;}
    .type-heading-1 {font-size:var(--type-heading-1);}
    .type-heading-2 {font-size:var(--type-heading-2);}
    .type-heading-3 {font-size:var(--type-heading-3);}
    .type-heading-4 {font-size:var(--type-heading-4);}
    .type-heading-5 {font-size:var(--type-heading-5);}
    .type-heading-6 {font-size:var(--type-heading-6);}
    .type-body-1 {font-size:var(--type-body-1);font-weight:var(--weight-regular);line-height:1.6;}
    .type-body-2 {font-size:var(--type-body-2);font-weight:var(--weight-regular);line-height:1.6;}
    .headline-line { display:block; }
    h1 .highlight { color: #192827; position: relative; white-space: nowrap; }
    h1 .highlight::after { content: ""; height: 9px; background: rgba(241,121,56,.23); border-radius: 8px; position: absolute; inset-inline: 0; bottom: 2px; z-index: -1; }
    .typing-word { display:inline-grid; grid-template:1fr / 1fr; min-height:1.4em; overflow:visible; perspective:700px; perspective-origin:center center; transform-style:preserve-3d; text-align:start; vertical-align:bottom; }
    .cube-measure,.word-cube { display:block; grid-area:1 / 1; white-space:nowrap; }
    .cube-measure { visibility:hidden; }
    .word-cube { position:relative; height:1.25em; transform:rotateX(var(--cube-turn,0deg)); transform-style:preserve-3d; transition:transform .68s cubic-bezier(.65,0,.35,1); will-change:transform; }
    .cube-face { position:absolute; inset:0; display:block; white-space:nowrap; backface-visibility:hidden; transform-style:preserve-3d; transform-origin:center center; }
    .cube-face:nth-child(1) { transform:translateZ(.625em); }
    .cube-face:nth-child(2) { transform:rotateX(90deg) translateZ(.625em); }
    .cube-face:nth-child(3) { transform:rotateX(180deg) translateZ(.625em); }
    .cube-face:nth-child(4) { transform:rotateX(270deg) translateZ(.625em); }
    @media (prefers-reduced-motion:reduce) { .word-cube { transition:none; } }
    .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    .hero-copy { color: #526176; font-size: 1.08rem; max-width: 520px; margin-bottom: 25px; }
    .hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; }
    .trust-row { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 27px; color: #64748b; font-size: .84rem; }
    .trust-item { display: inline-flex; align-items: center; gap: 7px; }
    .trust-item svg { width: 17px; height: 17px; color: var(--green); }
    .product-wrap { position: relative; direction: rtl; }
    .product-glow { position: absolute; inset: 9% 5% -5% 4%; background: linear-gradient(135deg, rgba(37,99,235,.2), rgba(249,115,22,.12)); filter: blur(35px); border-radius: 40px; }
    .hero-illustration {display:block;position:relative;z-index:1;width:min(100%,540px);height:auto;aspect-ratio:1;object-fit:contain;margin-inline:auto;filter:drop-shadow(0 20px 28px rgba(25,40,39,.12));}
    .dashboard { position: relative; border: 1px solid rgba(255,255,255,.9); border-radius: 21px; background: rgba(255,255,255,.88); box-shadow: 0 26px 70px rgba(30,41,59,.16), 0 0 0 1px rgba(226,232,240,.65); overflow: hidden; backdrop-filter: blur(14px); transform: perspective(1100px) rotateY(-2deg) rotateX(1deg) scale(.88); }
    .dash-top { height: 48px; padding: 0 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #edf1f6; background: rgba(255,255,255,.95); }
    .window-dots { display: flex; gap: 5px; direction: ltr; }
    .window-dots i { width: 7px; height: 7px; border-radius: 50%; background: #dbe2eb; }
    .dash-brand { display: flex; align-items: center; gap: 7px; font-weight: 800; font-size: .76rem; }
    .dash-brand .mini-mark { display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#F3F1ED;color:white;font-size:.69rem;overflow:hidden; }
    .dash-brand .mini-mark img {width:100%;height:100%;object-fit:contain;}
    .dash-user { display:flex;align-items:center;gap:7px;color:#64748b;font-size:.66rem; }
    .avatar { display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#ffedd5;color:#9a3412;font-size:.67rem;font-weight:700; }
    .dash-body { display: grid; grid-template-columns: 55px 1fr; min-height: 350px; }
    .dash-side { border-left: 1px solid #edf1f6; padding: 13px 9px; display:flex; flex-direction:column; align-items:center; gap:11px; background:#fbfcfe; }
    .side-icon { width:31px;height:31px;display:grid;place-items:center;border-radius:9px;color:#94a3b8; }
    .side-icon svg { width:16px;height:16px; }
    .side-icon.active { background:var(--blue-soft);color:#192827; }
    .dash-main { padding: 17px 18px; min-width:0; }
    .dash-heading { display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px; }
    .dash-heading strong { font-size:.88rem; }
    .dash-date { display:flex;align-items:center;gap:4px;color:#64748b;font-size:.62rem;border:1px solid var(--line);border-radius:7px;padding:4px 7px; }
    .dash-date svg { width:12px;height:12px; }
    .metrics { display:grid;grid-template-columns:repeat(3,1fr);gap:9px; }
    .metric { padding:10px 10px 9px;border:1px solid #edf1f6;border-radius:11px;background:#fff;min-width:0; }
    .metric-label { display:block;color:#64748b;font-size:.61rem;margin-bottom:4px;white-space:nowrap; }
    .metric-value { display:block;font-weight:800;font-size:.94rem;letter-spacing:-.03em;white-space:nowrap; }
    .metric-change { display:inline-flex;align-items:center;gap:3px;margin-top:5px;color:var(--green);font-size:.58rem; }
    .metric-change svg { width:11px;height:11px; }
    .dash-lower { display:grid;grid-template-columns:1.6fr .9fr;gap:9px;margin-top:10px; }
    .chart-card,.orders-card { border:1px solid #edf1f6;border-radius:11px;background:white;padding:10px;min-width:0; }
    .chart-head { display:flex;justify-content:space-between;gap:8px;align-items:center;font-size:.65rem;font-weight:700; }
    .chart-head span:last-child { font-weight:500;color:#94a3b8;font-size:.57rem; }
    .chart { width:100%;height:104px;margin-top:6px;overflow:visible; }
    .chart-grid { stroke:#eef2f7;stroke-width:1; }
    .chart-line { fill:none;stroke:var(--blue);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round; }
    .chart-fill { fill:url(#area); }
    .orders-card h3 {font-size:.66rem;margin:0 0 9px;}
    .order-line {display:flex;justify-content:space-between;gap:4px;font-size:.56rem;color:#64748b;padding:5px 0;border-top:1px solid #f1f5f9;}
    .order-line b {color:var(--ink);font-size:.56rem;white-space:nowrap;}
    .status {color:var(--green);background:#f0fdf4;border-radius:20px;padding:0 5px;font-size:.5rem;white-space:nowrap;}
    .dash-tabs { display:flex;align-items:center;gap:8px;margin-top:10px; }
    .dash-tab { border:1px solid var(--line);border-radius:7px;padding:5px 8px;background:white;color:#64748b;font-size:.58rem;cursor:pointer;transition:all .2s ease; }
    .dash-tab[aria-pressed="true"] { background:var(--blue);border-color:var(--blue);color:white; }
    .dash-caption { color:#94a3b8;font-size:.55rem;margin-inline-start:auto; }

    .logo-strip { padding: 22px 0 26px; border-bottom:1px solid #f1f5f9; }
    .logo-strip p { text-align:center;color:#94a3b8;font-size:.83rem;margin:0 0 15px; }
    .logos { display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:clamp(22px,5vw,66px);color:#64748b;font-weight:700; }
    .logo-word {display:inline-flex;align-items:center;gap:7px;font-size:.9rem;opacity:.82;}
    .logo-word svg {width:18px;height:18px;color:#94a3b8;}

    section.content-section { padding: 92px 0; }
    .video-section {padding:112px 0 34px;background:#F3F1ED;}
    .video-section .section-head {max-width:1100px;margin-bottom:15px;}
    .video-section .section-kicker {color:#192827;}
    .video-section h2 {color:#192827;margin-bottom:6px;font-size:clamp(12px,2.2vw,34px);line-height:1.35;white-space:nowrap;}
    .video-section .section-head p {color:var(--muted);}
    .video-preview {position:relative;width:min(100%,860px);aspect-ratio:16/9;margin-inline:auto;overflow:hidden;border:1px solid rgba(25,40,39,.18);border-radius:26px;background:#192827;box-shadow:0 24px 60px rgba(25,40,39,.16);isolation:isolate;}
    .video-preview::after {content:"";position:absolute;inset:35% 0 0;background:linear-gradient(180deg,transparent,rgba(25,40,39,.24));pointer-events:none;}
    .video-preview img {display:block;width:100%;height:100%;object-fit:cover;}
    .video-play {position:absolute;z-index:1;top:50%;left:50%;width:82px;height:82px;display:grid;place-items:center;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.7);border-radius:50%;background:rgba(25,40,39,.7);box-shadow:0 8px 28px rgba(0,0,0,.22);backdrop-filter:blur(8px);}
    .video-play svg {width:27px;height:27px;margin-inline-start:4px;fill:#fff;color:#fff;}
    .video-label {position:absolute;z-index:1;inset-inline-start:18px;top:18px;padding:7px 12px;border:1px solid rgba(255,255,255,.38);border-radius:999px;background:rgba(25,40,39,.62);color:#fff;font-size:.78rem;backdrop-filter:blur(8px);}
    .section-head { max-width: 650px; margin: 0 auto 42px; text-align:center; }
    .section-kicker { color:#192827;font-size:.82rem;font-weight:800;margin-bottom:8px; }
    h2 { font-size:var(--type-heading-4);line-height:1.3;letter-spacing:-.045em;margin-bottom:12px; }
    .section-head p { color:var(--muted);margin:0; }
    .feature-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px; }
    .feature-card { padding:24px 22px 23px;border:1px solid var(--line);border-radius:var(--radius);background:white;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease; }
    .feature-card:hover { transform:translateY(-4px);box-shadow:var(--shadow);border-color:#bfdbfe; }
    .feature-icon { width:46px;height:46px;display:grid;place-items:center;border-radius:14px;background:var(--blue-soft);color:#192827;margin-bottom:17px; }
    .feature-card:nth-child(2) .feature-icon,.feature-card:nth-child(5) .feature-icon {background:#fff7ed;color:var(--orange-dark);}
    .feature-card:nth-child(3) .feature-icon {background:#f0fdf4;color:#15803d;}
    .feature-icon svg { width:23px;height:23px; }
    .feature-card h3 {font-size:1.05rem;margin:0 0 8px;}
    .feature-card p {color:var(--muted);font-size:.91rem;margin:0;}

    .workflow { background:var(--paper); }
    .workflow-grid {display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:55px;}
    .workflow-copy h2 {margin:12px 0;}
    .workflow-faq {display:grid;gap:10px;margin-top:24px;}
    .workflow-faq-item {border:1px solid var(--line);border-radius:14px;background:#fff;padding:0 16px;transition:border-color .2s ease,box-shadow .2s ease;}
    .workflow-faq-item[open] {border-color:rgba(241,121,56,.48);box-shadow:0 8px 22px rgba(25,40,39,.06);}
    .workflow-faq-item summary {position:relative;list-style:none;padding:14px 0;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:12px;cursor:pointer;}
    .workflow-faq-item summary::-webkit-details-marker {display:none;}
    .workflow-faq-item summary::after {content:"+";font-size:1.35rem;font-weight:500;color:var(--orange);line-height:1;}
    .workflow-faq-item[open] summary::after {content:"−";}
    .workflow-faq-item p {color:var(--muted);font-size:.86rem;line-height:1.8;margin:0;padding:0 0 15px;}
    .ledger-card {position:relative;border:1px solid #e6edf5;border-radius:22px;padding:20px;background:white;box-shadow:var(--shadow);overflow:hidden;}
    .workflow-visual {aspect-ratio:1.9;padding:0;isolation:isolate;background:#192827;}
    .workflow-visual::before {display:none;}
    .workflow-shot {position:absolute;top:-10%;left:-12.5%;width:125%;max-width:none;height:auto;transition:opacity .24s ease;}
    .workflow-visual.is-changing .workflow-shot {opacity:0;}
    .workflow-visual-label {position:absolute;z-index:2;right:14px;top:14px;padding:6px 11px;border:1px solid rgba(255,255,255,.4);border-radius:999px;background:rgba(25,40,39,.68);color:#fff;font-size:.72rem;backdrop-filter:blur(8px);}
    .ledger-card::before {content:"";position:absolute;width:200px;height:200px;background:rgba(219,234,254,.55);border-radius:50%;top:-120px;left:-70px;}
    .ledger-title {position:relative;display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:14px;}
    .ledger-title strong {font-size:.96rem;}
    .ledger-title span {font-size:.7rem;color:var(--muted);}
    .ledger-table {position:relative;width:100%;border-collapse:collapse;text-align:right;font-size:.78rem;}
    .ledger-table th {font-size:.68rem;color:#64748b;font-weight:600;background:#f8fafc;}
    .ledger-table th,.ledger-table td {padding:11px 10px;border-bottom:1px solid #eef2f7;}
    .ledger-table tr:last-child td {border:0;}
    .ledger-table td:last-child {font-weight:700;white-space:nowrap;}
    .ledger-foot {position:relative;display:flex;align-items:center;justify-content:space-between;margin-top:13px;padding:11px 12px;border-radius:12px;background:#f0fdf4;color:#166534;font-size:.8rem;font-weight:700;}
    .ledger-foot span:last-child {display:flex;align-items:center;gap:5px;}
    .ledger-foot svg {width:17px;height:17px;}

    .modules {padding:88px 0;background:#F3F1ED;}
    .result-head {max-width:1440px;margin-inline:auto;}
    .result-head h2 {font-size:var(--type-heading-3);line-height:1.45;letter-spacing:-.035em;}
    .result-head p {max-width:1380px;margin:0 auto;font-size:20px;line-height:1.8;}
    .result-number {display:inline-block;color:var(--orange);font-size:1.28em;font-weight:800;line-height:1;vertical-align:-.06em;}
    .module-grid {display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
    .module {padding:20px 18px;border:1px solid var(--line);border-radius:16px;background:#fff;}
    .module-icon {display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:#f1f5f9;color:#334155;margin-bottom:12px;}
    .module-icon svg {width:20px;height:20px;}
    .module h3 {font-size:.95rem;margin:0 0 5px;}
    .module p {font-size:.8rem;color:var(--muted);margin:0;}

    .cta-band {padding:20px 0 88px;}
    .cta-panel {position:relative;overflow:hidden;border-radius:26px;padding:52px 50px;background:linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%);color:white;display:flex;align-items:center;justify-content:space-between;gap:30px;}
    .cta-panel::before,.cta-panel::after {content:"";position:absolute;border:1px solid rgba(255,255,255,.14);border-radius:50%;pointer-events:none;}
    .cta-panel::before {width:330px;height:330px;left:-115px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.04),0 0 0 75px rgba(255,255,255,.03);}
    .cta-panel::after {width:190px;height:190px;right:40%;bottom:-155px;}
    .cta-copy,.cta-action {position:relative;z-index:1;}
    .cta-copy h2 {font-size:clamp(1.65rem,3vw,2.25rem);margin:0 0 8px;}
    .cta-copy p {margin:0;color:#d6eee7;max-width:570px;}
    .cta-action .button {background:var(--orange);color:#fff;white-space:nowrap;}
    .cta-action small {display:block;color:#d6eee7;text-align:center;margin-top:9px;font-size:.72rem;}

    .faq {background:#F3F1ED;}
    .faq-list {max-width:780px;margin:0 auto;display:grid;gap:10px;}
    .faq-item {border:1px solid var(--line);border-radius:14px;background:white;padding:0 18px;}
    .faq-item summary {position:relative;list-style:none;padding:17px 0;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:12px;}
    .faq-item summary::-webkit-details-marker {display:none;}
    .faq-item summary::after {content:"+";font-size:1.35rem;font-weight:500;color:#192827;line-height:1;}
    .faq-item[open] summary::after {content:"−";}
    .faq-item p {color:var(--muted);font-size:.9rem;margin:0;padding:0 0 17px;}
    .testimonials-section {padding:82px 0;background:#F3F1ED;}
    .testimonials-carousel {display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:12px;direction:ltr;}
    .testimonials-window {min-width:0;overflow:hidden;padding:12px 0 16px;margin:-12px 0 -16px;}
    .testimonials-track {display:flex;flex-direction:row;direction:ltr;align-items:stretch;gap:16px;will-change:transform;transition:transform .72s cubic-bezier(.22,.75,.2,1);}
    .testimonial-card {display:flex;flex:0 0 auto;flex-direction:column;align-items:flex-start;min-height:205px;padding:22px;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 10px 28px rgba(25,40,39,.045);direction:rtl;text-align:right;opacity:.74;transform:scale(.93);transform-origin:center center;transition:transform .72s cubic-bezier(.22,.75,.2,1),opacity .72s ease,border-color .72s ease,box-shadow .72s ease;}
    .testimonial-card.is-center {position:relative;z-index:1;opacity:1;transform:scale(1.045);border-color:rgba(241,121,56,.48);box-shadow:0 16px 34px rgba(25,40,39,.11);}
    .testimonial-meta {display:flex;align-items:center;gap:12px;direction:rtl;margin-bottom:14px;max-width:100%;}
    .testimonial-mark {display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:12px;background:rgba(241,121,56,.12);color:var(--orange);font-size:1.8rem;font-weight:700;line-height:1;}
    .testimonial-card p {margin:0;color:var(--muted);font-size:.9rem;line-height:1.9;}
    .testimonial-author {margin:0;padding:0;color:#192827;font-size:.92rem;font-weight:700;}
    .testimonial-arrow {display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--line);border-radius:50%;background:#fff;color:#192827;font-size:1.5rem;line-height:1;cursor:pointer;box-shadow:0 6px 18px rgba(25,40,39,.07);transition:background .2s ease,color .2s ease,transform .2s ease;}
    .testimonial-arrow:hover {background:var(--orange);color:#fff;transform:scale(1.06);}
    .testimonial-arrow:focus-visible {outline:3px solid rgba(241,121,56,.4);outline-offset:3px;}
    @media (max-width:720px) {
      .testimonials-section {padding:58px 0;}
      .testimonials-carousel {grid-template-columns:32px minmax(0,1fr) 32px;gap:6px;}
      .testimonials-track {gap:8px;}
      .testimonial-card {min-height:230px;padding:12px 9px;}
      .testimonial-meta {gap:6px;margin-bottom:9px;}
      .testimonial-mark {flex-basis:28px;width:28px;height:28px;font-size:1.35rem;border-radius:9px;}
      .testimonial-card p {font-size:.68rem;line-height:1.75;}
      .testimonial-author {font-size:.66rem;}
      .testimonial-card.is-center {transform:scale(1.035);}
      .testimonial-arrow {width:32px;height:32px;font-size:1.15rem;}
    }
    .pricing-section,.blog-section,.updates-section,.about-section {padding:82px 0;background:#F3F1ED;}
    .pricing-section {padding:34px 0 38px;}
    .pricing-section .section-head {margin-bottom:18px;}
    .pricing-section .section-head h2 {font-size:32px;margin-bottom:4px;}
    .pricing-section .section-head p {font-size:.82rem;}
    .plan-builder-shell {padding:2px;border-radius:28px;background:linear-gradient(125deg,#192827 0%,#087f7a 48%,#f17938 100%);box-shadow:0 24px 60px rgba(25,40,39,.12);}
    .plan-builder {display:grid;grid-template-columns:minmax(0,1.15fr) minmax(290px,.85fr);gap:7px;padding:7px;border-radius:26px;background:#e9e7e1;}
    .plan-options,.plan-summary {padding:18px;border-radius:20px;background:#fff;}
    .plan-options {display:flex;flex-direction:column;}
    .plan-panel-kicker {display:flex;align-items:center;gap:9px;margin:0 0 4px;color:#192827;font-size:.78rem;font-weight:700;}
    .plan-panel-kicker::before {content:"";width:9px;height:9px;border-radius:50%;background:#f17938;box-shadow:0 0 0 5px rgba(241,121,56,.12);}
    .plan-options h3,.plan-summary h3 {margin:0;color:#192827;font-size:1.08rem;}
    .plan-intro {margin:4px 0 9px;color:var(--muted);font-size:.78rem;}
    .addon-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}
    .addon-card {position:relative;z-index:0;min-height:116px;padding:9px;border:1px solid #e5e7e3;border-radius:14px;background:#fff;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease;}
    .addon-card.period-open {z-index:20;}
    .addon-card:hover {transform:translateY(-2px);border-color:#b9c9c4;box-shadow:0 9px 23px rgba(25,40,39,.07);}
    .addon-card.is-selected {border-color:#087f7a;background:#f7fbf9;box-shadow:0 0 0 2px rgba(8,127,122,.1);}
    .addon-select {display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%;height:100%;padding:31px 0 24px;border:0;background:transparent;color:#192827;text-align:right;font:inherit;cursor:pointer;}
    .addon-heading {display:flex;align-items:flex-start;justify-content:flex-start;gap:10px;width:100%;min-width:0;padding:0;direction:rtl;}
    .addon-icon {display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:10px;background:#f3f1ed;color:#192827;}
    .addon-card.is-selected .addon-icon {background:#192827;color:#fff;}
    .addon-icon svg {width:19px;height:19px;}
    .addon-title {min-width:0;max-width:calc(100% - 48px);font-size:.86rem;font-weight:700;line-height:1.7;text-align:right;white-space:normal;overflow-wrap:anywhere;}
    .addon-check {position:absolute;top:10px;right:10px;display:grid;place-items:center;width:17px;height:17px;border:1px solid #d7ddd9;border-radius:50%;color:transparent;font-size:.65rem;}
    .addon-card.is-selected .addon-check {border-color:#087f7a;background:#087f7a;color:#fff;}
    .period-trigger {position:absolute;top:7px;left:8px;display:flex;align-items:center;gap:4px;padding:3px 6px;border:1px solid #e6e9e6;border-radius:8px;background:#fbfcfa;color:#192827;font:inherit;font-size:.64rem;cursor:pointer;}
    .period-trigger svg {width:12px;height:12px;transition:transform .18s ease;}
    .period-trigger[aria-expanded="true"] svg {transform:rotate(180deg);}
    .period-menu {position:absolute;top:34px;left:8px;z-index:30;display:none;min-width:104px;padding:4px;border:1px solid #e6e9e6;border-radius:10px;background:#fff;box-shadow:0 12px 26px rgba(25,40,39,.14);}
    .period-menu.open {display:grid;gap:2px;}
    .period-option {padding:7px 8px;border:0;border-radius:7px;background:transparent;color:#192827;text-align:right;font:inherit;font-size:.7rem;cursor:pointer;}
    .period-option:hover,.period-option[aria-checked="true"] {background:#f3f1ed;color:#087f7a;}
    .addon-price {position:absolute;right:10px;bottom:8px;display:flex;align-items:baseline;gap:3px;color:#f17938;}
    .addon-price strong {font-size:.82rem;font-weight:800;}
    .addon-price small {font-size:.57rem;color:#a85c31;}
    .plan-summary {display:flex;flex-direction:column;background:#192827;color:#e7ecea;}
    .plan-summary .plan-panel-kicker {color:#c3d2ce;}
    .plan-summary h3 {color:#fff;}
    .summary-caption {margin:4px 0 8px;color:#b8c4c1;font-size:.74rem;}
    .selected-list {display:grid;align-content:start;gap:6px;min-height:44px;margin:0;padding:0;list-style:none;}
    .selected-list li {display:flex;align-items:flex-start;gap:9px;color:#f1f5f3;font-size:.78rem;line-height:1.7;}
    .selected-list li::before {content:"✓";display:grid;place-items:center;flex:none;width:20px;height:20px;margin-top:2px;border-radius:50%;background:rgba(8,127,122,.35);color:#a7e5d9;font-size:.72rem;font-weight:800;}
    .summary-empty {color:#b8c4c1;font-size:.82rem;}
    .summary-stats {display:flex;justify-content:space-between;gap:12px;margin:19px 0 16px;padding:15px 0;border-top:1px solid rgba(231,236,234,.15);border-bottom:1px solid rgba(231,236,234,.15);}
    .summary-stat span,.summary-stat strong {display:block;}
    .summary-stat span {color:#b8c4c1;font-size:.7rem;}
    .summary-stat strong {margin-top:3px;color:#fff;font-size:.9rem;}
    .summary-total {display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:5px;margin-top:10px;padding:10px 0;border-top:1px solid rgba(231,236,234,.15);}
    .total-label {grid-column:1 / -1;color:#c3d2ce;font-size:.95rem;font-weight:700;}
    .total-price {grid-column:1 / 3;display:flex;align-items:center;gap:0;color:#fff;font-size:1.55rem;font-weight:800;line-height:1.15;direction:ltr;font-variant-numeric:tabular-nums;white-space:nowrap;}
    .total-currency {grid-column:3;grid-row:2;color:#fff;font-size:.85rem;font-weight:700;}
    .rolling-digit {display:inline-block;width:.66em;height:1.1em;overflow:hidden;vertical-align:bottom;}
    .rolling-track {display:flex;flex-direction:column;transition:transform .75s cubic-bezier(.22,.8,.25,1);will-change:transform;}
    .rolling-track span {display:block;height:1.1em;line-height:1.1em;text-align:center;}
    .total-separator {display:inline-block;width:.28em;text-align:center;}
    .save-promise {display:flex;flex-direction:column;gap:1px;margin:0 0 10px;color:#fff;}
    .save-promise strong {font-size:1.55rem;font-weight:800;line-height:1.3;}
    .save-promise span {font-size:1rem;font-weight:500;line-height:1.4;}
    .plan-summary .button {width:100%;background:#f17938;color:white;}
    .summary-note {margin:6px 0 0;color:#b8c4c1;text-align:center;font-size:.62rem;}
    .blog-grid {display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
    .blog-card {overflow:hidden;border:1px solid var(--line);border-radius:18px;background:#fff;}
    .blog-art {height:128px;display:grid;place-items:center;background:linear-gradient(135deg,#e8eef8,#fff1e9);color:#192827;}
    .blog-art svg {width:42px;height:42px;}
    .blog-body {padding:18px;}
    .blog-meta {font-size:.72rem;color:var(--muted);margin-bottom:7px;}
    .blog-body h3 {font-size:1rem;line-height:1.6;margin:0 0 7px;}
    .blog-body p {font-size:.82rem;color:var(--muted);margin:0 0 12px;}
    .blog-link {font-size:.82rem;font-weight:700;color:#192827;}
    .update-list {max-width:760px;margin:0 auto;display:grid;gap:13px;}
    .update-item {display:grid;grid-template-columns:130px 1fr;gap:18px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#fff;}
    .update-version {color:var(--orange-dark);font-size:.8rem;font-weight:700;}
    .update-item h3 {font-size:.98rem;margin:0 0 4px;}
    .update-item p {color:var(--muted);font-size:.83rem;margin:0;}
    .about-panel {display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:38px;padding:34px;border-radius:22px;background:#fff;border:1px solid var(--line);}
    .about-panel h2 {margin:8px 0;}
    .about-panel p {color:var(--muted);margin:0;}
    .about-points {display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .about-point {padding:14px;border:1px solid var(--line);border-radius:14px;background:#faf9f7;}
    .about-point strong {display:block;color:#192827;font-size:1.1rem;}
    .about-point span {color:var(--muted);font-size:.75rem;}
    .contact-grid {display:grid;grid-template-columns:.9fr 1.1fr;gap:45px;align-items:start;}
    .contact-copy h2 {margin:10px 0;}
    .contact-copy p {color:var(--muted);}
    .contact-note {display:flex;gap:10px;align-items:flex-start;color:#475569;font-size:.85rem;margin-top:20px;}
    .contact-note svg {width:19px;height:19px;color:#192827;flex:none;margin-top:3px;}
    .form-card {border:1px solid var(--line);border-radius:20px;padding:24px;background:#fff;box-shadow:var(--soft-shadow);}
    .form-row {display:grid;grid-template-columns:1fr 1fr;gap:13px;}
    .field {margin-bottom:14px;}
    .field label {display:block;font-weight:700;font-size:.82rem;margin-bottom:6px;}
    .field input,.field textarea {width:100%;border:1px solid #cbd5e1;border-radius:10px;padding:11px 12px;background:#fff;color:var(--ink);transition:border-color .2s ease,box-shadow .2s ease;}
    .field input::placeholder,.field textarea::placeholder {color:#94a3b8;}
    .field input:focus,.field textarea:focus {outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,.12);}
    .field textarea {min-height:90px;resize:vertical;}
    .form-card .button {width:100%;}
    .site-footer {background:#192827;color:#f8fafc;padding:36px 0 18px;border-top:1px solid #29413e;}
    .footer-main {display:grid;grid-template-columns:minmax(300px,1.8fr) repeat(3,minmax(120px,1fr));align-items:start;gap:30px;direction:rtl;}
    .footer-brand {grid-column:1;grid-row:1;direction:rtl;text-align:right;}
    .footer-links-column:nth-of-type(1) {grid-column:2;grid-row:1;}
    .footer-links-column:nth-of-type(2) {grid-column:3;grid-row:1;}
    .footer-links-column:nth-of-type(3) {grid-column:4;grid-row:1;}
    .footer-brand h2 {margin:0 0 8px;color:#f8fafc;font-size:16px;font-weight:700;line-height:1.8;}
    .footer-address {margin:0;color:#cbd5d1;font-size:12px;font-style:normal;line-height:1.9;}
    .footer-logos {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:start;align-items:center;gap:8px;margin-top:16px;direction:ltr;}
    .footer-logo {display:flex;align-items:center;justify-content:center;min-width:0;height:66px;padding:7px;border:1px solid #e5e7eb;border-radius:9px;background:#fff;}
    .footer-logo img {display:block;width:100%;height:100%;object-fit:contain;}
    .footer-links-column {direction:rtl;text-align:right;}
    .footer-column-title {margin:0 0 10px;color:#f8fafc;font-size:13px;font-weight:700;line-height:1.8;}
    .footer-links-list {display:flex;flex-direction:column;gap:5px;margin:0;padding:0;list-style:none;}
    .footer-links-list a,.footer-links-list span {color:#cbd5d1;font-size:12px;font-weight:400;line-height:1.8;text-decoration:none;transition:color .2s ease;}
    .footer-links-list a:hover {color:#F17938;}
    .site-footer {position:relative;padding-top:82px;}
    .site-footer .container {position:relative;}
.footer-social-card {position:absolute;z-index:3;top:-82px;left:0;right:0;transform:translateY(-50%);display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:136px;padding:24px 32px;overflow:hidden;border:1px solid rgba(255,255,255,.34);border-radius:26px;background:linear-gradient(120deg,#192827 0%,#087f7a 58%,#0b6b63 100%);box-shadow:0 22px 44px rgba(10,31,29,.28),0 7px 16px rgba(10,31,29,.18);direction:ltr;}
.footer-social-card::before,.footer-social-card::after {position:absolute;content:"";border:1px solid rgba(255,255,255,.14);border-radius:50%;pointer-events:none;}
.footer-social-card::before {width:330px;height:330px;left:-115px;top:-210px;box-shadow:0 0 0 35px rgba(255,255,255,.04),0 0 0 75px rgba(255,255,255,.03);}
.footer-social-card::after {width:190px;height:190px;right:40%;bottom:-155px;}
.footer-social-icons {position:relative;z-index:1;display:flex;align-items:center;gap:10px;flex:0 0 auto;}
.footer-social-icon {display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.94);color:#087f7a;box-shadow:0 3px 8px rgba(6,45,41,.16);}
    .footer-social-icon img {display:block;width:22px;height:22px;object-fit:contain;}
.footer-social-copy {position:relative;z-index:1;display:flex;align-items:center;gap:14px;direction:rtl;text-align:right;}
    .footer-social-brand {display:block;width:52px;height:52px;flex:0 0 52px;object-fit:contain;filter:drop-shadow(0 4px 8px rgba(0,0,0,.14));}
.footer-social-title {margin:0;color:#fff;font-size:var(--type-body-1);font-weight:400;line-height:1.8;}
@media(max-width:720px){.site-footer {padding-top:70px;}.footer-social-card {top:-70px;min-height:106px;padding:16px 18px;gap:12px;border-radius:22px;}.footer-social-icons {gap:7px;}.footer-social-icon {width:36px;height:36px;}.footer-social-icon img {width:19px;height:19px;}.footer-social-copy {gap:10px;}.footer-social-brand {width:42px;height:42px;flex-basis:42px;}}
@media(max-width:420px){.site-footer {padding-top:62px;}.footer-social-card {top:-62px;padding:13px 10px;gap:9px;border-radius:18px;}.footer-social-icons {gap:6px;}.footer-social-icon {width:32px;height:32px;}.footer-social-icon img {width:17px;height:17px;}.footer-social-brand {width:36px;height:36px;flex-basis:36px;}}
    .footer-bottom {display:flex;align-items:center;justify-content:center;gap:24px;margin-top:24px;padding-top:15px;border-top:1px solid #35504c;direction:ltr;}
    .footer-copyright {max-width:100%;direction:rtl;text-align:center;}
    .footer-copyright p {margin:0;color:#cbd5d1;font-size:10px;line-height:1.8;}
    .footer-copyright a {color:#f8fafc;text-decoration:none;transition:color .2s ease;}
    .footer-copyright a:hover {color:#F17938;}
    @media(max-width:980px) {
      .footer-main {grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;}
      .footer-brand {grid-column:1/-1;grid-row:1;}
      .footer-links-column {grid-row:auto;}
      .footer-links-column:nth-of-type(1) {grid-column:1;grid-row:2;}
      .footer-links-column:nth-of-type(2) {grid-column:2;grid-row:2;}
      .footer-links-column:nth-of-type(3) {grid-column:1;grid-row:3;}
      .footer-bottom {align-items:center;}
    }
    @media(max-width:720px) {
      .site-footer {padding:28px 0 16px;}
      .footer-main {grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 18px;}
      .footer-brand {grid-column:1/-1;}
      .footer-links-column:nth-of-type(1),.footer-links-column:nth-of-type(2) {grid-row:2;}
      .footer-links-column:nth-of-type(3) {grid-column:1/-1;grid-row:3;}
      .footer-bottom {flex-direction:column;align-items:center;gap:12px;}
      .footer-copyright {max-width:100%;text-align:center;}
    }
    @media(max-width:420px) {
      .footer-main {grid-template-columns:1fr;gap:18px;}
      .footer-brand,.footer-links-column:nth-of-type(1),.footer-links-column:nth-of-type(2),.footer-links-column:nth-of-type(3) {grid-column:1;grid-row:auto;}
      .footer-logos {grid-template-columns:repeat(3,minmax(0,1fr));}
      .footer-bottom {align-items:center;}
      .footer-copyright {text-align:center;}
    }
    @media (max-width: 980px) {
      .hero {min-height:0;padding:38px 0 44px;}
      .hero-grid {grid-template-columns:1fr;gap:42px;}
      .hero-content {max-width:700px;margin-inline:auto;text-align:center;}
      .hero-copy {margin-inline:auto;}
      .hero-buttons,.trust-row {justify-content:center;}
      .product-wrap {width:min(540px,100%);margin:auto;}
      .workflow-grid {grid-template-columns:1fr;gap:35px;}
      .workflow-copy {max-width:700px;}
      .ledger-card {max-width:700px;width:100%;margin-inline:auto;}
      .module-grid {grid-template-columns:repeat(2,1fr);}
      .result-head h2 {font-size:var(--type-heading-4);}
      .result-head p {font-size:18px;}
      .contact-grid {grid-template-columns:1fr;gap:25px;}
    }
    @media (min-width: 721px) and (max-height: 760px) {
      .video-section {padding:28px 0 22px;}
      .video-section .section-head {margin-bottom:10px;}
      .video-preview {width:min(100%,760px);}
    }
    @media (min-width: 721px) and (max-height: 650px) {
      .video-section {padding:14px 0;}
      .video-preview {width:min(100%,600px);}
      .video-section .section-head p {font-size:.8rem;}
    }
    @media (max-width: 720px) {
      .container {width:min(100% - 32px,560px);}
      .topbar {height:68px;}
      .menu-toggle {display:grid;place-items:center;}
      .nav-links {display:none;position:absolute;inset-inline:16px;top:60px;padding:12px;background:rgba(243,241,237,.92);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid rgba(25,40,39,.12);border-radius:14px;box-shadow:var(--shadow);flex-direction:column;align-items:stretch;gap:0;white-space:normal;}
      .nav-links.open {display:flex;}
      .nav-links a {padding:10px 12px;border-radius:8px;}
      .nav-links a:hover {background:var(--paper);}
      .hero {padding:36px 0 42px;}
      h1 {font-size:clamp(var(--type-heading-5),8vw,var(--type-heading-3));}
      h2 {font-size:var(--type-heading-5);}
      .hero-copy {font-size:1rem;}
      .video-section {padding:58px 0 28px;}
      .video-section .section-head {max-width:100%;margin-bottom:12px;}
      .video-section h2 {font-size:clamp(12px,3.5vw,20px);}
      .video-section .section-head p {font-size:.82rem;}
      .video-preview {border-radius:18px;}
      .video-play {width:62px;height:62px;}
      .video-play svg {width:21px;height:21px;}
      .video-label {top:10px;inset-inline-start:10px;font-size:.68rem;}
      .hero-buttons .button {flex:1 1 180px;}
      .trust-row {gap:11px 17px;}
      .dashboard {transform:scale(.88);}
      .dash-body {grid-template-columns:42px 1fr;min-height:315px;}
      .dash-main {padding:12px 10px;}
      .dash-side {padding:12px 5px;}
      .side-icon {width:29px;height:29px;}
      .dash-lower {grid-template-columns:1.4fr .9fr;gap:6px;}
      .metric {padding:8px 6px;}
      .metric-value {font-size:.78rem;}
      .metric-label {font-size:.55rem;}
      .chart-card,.orders-card {padding:8px 6px;}
      .chart {height:88px;}
      .order-line {font-size:.49rem;}
      .logos {gap:16px 25px;}
      .logo-word {font-size:.77rem;}
      section.content-section {padding:68px 0;}
      .feature-grid {grid-template-columns:1fr 1fr;gap:11px;}
      .feature-card {padding:17px 15px;}
      .feature-card p {font-size:.82rem;}
      .feature-card h3 {font-size:.95rem;}
      .module-grid {gap:10px;}
      .module {padding:15px 13px;}
      .plan-builder {grid-template-columns:1fr;}
      .addon-grid {grid-template-columns:repeat(2,minmax(0,1fr));}
      .blog-grid {grid-template-columns:1fr;}
      .about-panel {grid-template-columns:1fr;padding:22px;gap:22px;}
      .update-item {grid-template-columns:1fr;gap:4px;padding:16px;}
      .cta-band {padding-bottom:66px;}
      .cta-panel {padding:32px 24px;display:block;text-align:center;}
      .cta-action {margin-top:22px;}
      .cta-action .button {width:100%;}
      .form-row {grid-template-columns:1fr;gap:0;}
    }
    @media (max-width: 420px) {
      .brand {font-size:1.1rem;}
      .brand-mark {width:38px;height:38px;}
      a.button.button-primary.header-cta {font-size:.72rem;min-height:38px;padding:6px 8px;}
      .dash-top {padding-inline:10px;}
      .dash-user {font-size:0;}
      .metric-value {font-size:.69rem;}
      .metric-change {font-size:.52rem;}
      .dash-heading strong {font-size:.77rem;}
      .dash-date {font-size:.55rem;}
      .dash-tabs {gap:5px;}
      .dash-tab {padding:4px 6px;}
      .feature-grid {grid-template-columns:1fr;}
      .module-grid {grid-template-columns:1fr 1fr;}
      .result-head h2 {font-size:var(--type-heading-5);}
      .result-head p {font-size:16px;}
      .ledger-card {padding:14px 10px;}
      .ledger-table {font-size:.68rem;}
      .ledger-table th,.ledger-table td {padding:9px 5px;}
    }
    @media (prefers-reduced-motion: reduce) {
      *,*::before,*::after {scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;}
      a.button.button-primary.header-cta {animation:none;}
      a.button.button-primary.header-cta::after {display:none;}
    }
      /* Updates page: uses the homepage design system and shared navigation. */
    :root {--ink:#192827;--muted:#586966;}
    .updates-main {min-height:calc(100svh - 78px);padding:64px 0 80px;}
    .updates-main .section-head {max-width:1000px;margin-bottom:42px;}
    .updates-main h1 {max-width:none;margin:12px 0 18px;text-align:center;font-size:var(--type-heading-1);line-height:1.3;}
    .updates-main .section-head p {max-width:860px;margin-inline:auto;font-size:var(--type-body-2);font-weight:var(--weight-regular);line-height:1.8;}
    .update-list {max-width:1000px;margin-inline:auto;display:grid;gap:20px;}
    .update-item {display:grid;grid-template-columns:180px minmax(0,1fr);align-items:start;gap:28px;padding:28px;border:1px solid var(--line);border-radius:var(--radius);background:var(--white);box-shadow:var(--soft-shadow);}
    .update-version {display:inline-flex;align-items:center;gap:8px;color:var(--orange-dark);font-size:var(--type-button-xs);font-weight:var(--weight-bold);padding-top:5px;}
    .update-version::before {content:"";width:8px;height:8px;flex:none;border-radius:50%;background:var(--orange);box-shadow:0 0 0 4px rgba(241,121,56,.12);}
    .update-item h2 {font-size:var(--type-heading-6);font-weight:var(--weight-bold);line-height:1.5;margin:0 0 12px;color:#192827;}
    .update-item p {margin:0;font-size:var(--type-body-2);font-weight:var(--weight-regular);color:var(--muted);line-height:1.8;}
    .nav-links a[aria-current="page"] {color:var(--orange-dark);}
    @media(max-width:980px) {.updates-main h1{font-size:var(--type-heading-3)}.update-item{grid-template-columns:150px minmax(0,1fr);gap:22px}}
    @media(max-width:720px) {.updates-main{min-height:calc(100svh - 68px);padding:40px 0 56px}.updates-main h1{font-size:var(--type-heading-5)}.updates-main .section-head{margin-bottom:28px}.updates-main .section-head p,.update-item p{font-size:18px}.update-item{grid-template-columns:1fr;gap:14px;padding:22px}.update-item h2{font-size:var(--type-heading-6)}.update-list{gap:16px}}
    /* Compact typography for the updates page. */
    .updates-main h1 {font-size:40px;line-height:1.45;}
    .updates-main .section-head p {font-size:18px;}
    .update-item h2 {font-size:20px;margin-bottom:8px;}
    .update-item p {font-size:16px;line-height:1.9;}
    .update-version {font-size:14px;}
    @media(max-width:980px) {.updates-main h1{font-size:36px;}}
    @media(max-width:720px) {.updates-main h1{font-size:28px;}.updates-main .section-head p{font-size:16px;}.update-item h2{font-size:18px;}.update-item p{font-size:15px;}.update-version{font-size:13px;}}
      .button-primary,.button-blue,.cta-action .button,.plan-summary .button {position:relative;isolation:isolate;overflow:hidden;border:1px solid transparent;background:linear-gradient(var(--orange),var(--orange)) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box;animation:lightbeam-rotate 3.2s linear infinite;box-shadow:0 0 18px rgba(8,127,122,.16),0 7px 16px rgba(241,121,56,.20);color:#fff;}
    .button-primary::before,.button-blue::before,.cta-action .button::before,.plan-summary .button::before {content:"";position:absolute;inset:2px;border-radius:inherit;background:radial-gradient(ellipse at 50% 120%,rgba(255,255,255,.19),transparent 70%);z-index:-1;pointer-events:none;}
    .button-primary::after,.button-blue::after,.cta-action .button::after,.plan-summary .button::after {content:"";position:absolute;top:0;bottom:0;left:-130%;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.34),transparent);transform:skewX(-22deg);transition:left .45s ease;pointer-events:none;}
    .button-primary:hover::after,.button-blue:hover::after,.cta-action .button:hover::after,.plan-summary .button:hover::after {left:145%;}
    .button-primary:hover,.button-blue:hover,.cta-action .button:hover,.plan-summary .button:hover {background:linear-gradient(#f58a4f,#f58a4f) padding-box,conic-gradient(from var(--lightbeam-angle),#192827 0deg,#192827 238deg,#087F7A 270deg,#3B82F6 304deg,#192827 330deg,#192827 360deg) border-box;box-shadow:0 0 25px rgba(8,127,122,.28),0 10px 22px rgba(241,121,56,.27);}
    @media (prefers-reduced-motion:reduce) {
      .button-primary,.button-blue,.cta-action .button,.plan-summary .button {animation:none!important;}
      .button-primary::after,.button-blue::after,.cta-action .button::after,.plan-summary .button::after {display:none!important;}
    }
  
```

</details>

<details>
<summary>Component HTML, content, ARIA states and data attributes: updates.html</summary>

```html
  <header class="topbar">
    <nav class="nav container" aria-label="ناوبری اصلی">
      <a class="brand" href="index.html#top" aria-label="میکِل، صفحه اصلی">
        <span class="brand-mark" aria-hidden="true"><img src="assets/mikel-logo.png" alt=""></span>
        <span>میکِل</span>
      </a>
      <div class="nav-links" id="nav-links">
        <a href="index.html#pricing">تعرفه‌ها</a>
        <a href="index.html#blog">بلاگ</a>
        <a href="updates.html" aria-current="page">تاریخچه‌ی به‌روزرسانی</a>
        <a href="about.html">درباره‌ی ما</a>
      </div>
      <div class="nav-actions">
        <a class="button button-primary header-cta" href="index.html#pricing">رایگان شروع کنید</a>
        <button class="menu-toggle" type="button" aria-label="باز کردن منو" aria-expanded="false" aria-controls="nav-links">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </nav>
  </header>
  <main class="updates-main">
    <div class="container">
      <div class="section-head"><div class="section-kicker">تاریخچه‌ی به‌روزرسانی</div><h1>تغییرات میکِل را دنبال کنید</h1><p>این بخش برای نمایش شفاف قابلیت‌ها و اصلاحات هر نسخه در نظر گرفته شده است.</p></div>
      <div class="update-list">
        <article class="update-item"><div class="update-version">نسخه‌ی نمایشی · ۱.۰</div><div><h2>معرفی محصول و پیش‌نمایش داشبورد</h2><p>صفحه‌ی معرفی میکِل، پیش‌نمایش گزارش فروش و بخش‌های تعرفه، بلاگ، تاریخچه‌ی به‌روزرسانی و درباره‌ی ما اضافه شد.</p></div></article>
        <article class="update-item"><div class="update-version">در مسیر توسعه</div><div><h2>انتشار تغییرات نرم‌افزار</h2><p>پس از اتصال این صفحه به محصول واقعی، در اینجا قابلیت‌های تازه و اصلاحات نسخه‌ها ثبت می‌شوند.</p></div></article>
      </div>
    </div>
  </main>
  <footer class="site-footer">
    <div class="container">
<div class="footer-social-card">
          <div class="footer-social-icons" aria-label="&#x634;&#x628;&#x6A9;&#x647;&#x200C;&#x647;&#x627;&#x6CC; &#x627;&#x62C;&#x62A;&#x645;&#x627;&#x639;&#x6CC;">
            <span class="footer-social-icon" role="img" aria-label="&#x644;&#x6CC;&#x646;&#x6A9;&#x62F;&#x6CC;&#x646;"><img src="assets/figma-linkedin.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x627;&#x6CC;&#x646;&#x633;&#x62A;&#x627;&#x6AF;&#x631;&#x627;&#x645;"><img src="assets/figma-instagram.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x6CC;&#x648;&#x62A;&#x6CC;&#x648;&#x628;"><img src="assets/figma-play.svg" alt=""></span>
            <span class="footer-social-icon" role="img" aria-label="&#x622;&#x67E;&#x627;&#x631;&#x627;&#x62A;"><img src="assets/figma-broadcast.svg" alt=""></span>
          </div>
          <div class="footer-social-copy"><img class="footer-social-brand" src="assets/mikel-logo.png" alt="&#x645;&#x6CC;&#x6A9;&#x644;" width="744" height="744"><h3 class="footer-social-title">&#x645;&#x6CC;&#x6A9;&#x644; &#x631;&#x627; &#x62F;&#x631; &#x634;&#x628;&#x6A9;&#x647;&#x200C;&#x647;&#x627;&#x6CC; &#x627;&#x62C;&#x62A;&#x645;&#x627;&#x639;&#x6CC; &#x62F;&#x646;&#x628;&#x627;&#x644; &#x6A9;&#x646;&#x6CC;&#x62F;</h3></div>
        </div>
              <div class="footer-main">
        <nav class="footer-links-column" aria-label="درباره میکل">
          <h3 class="footer-column-title">درباره میکل</h3>
          <ul class="footer-links-list">
            <li><a href="about.html">درباره ما</a></li>
            <li><span>پشتیبانی</span></li>
          </ul>
        </nav>
        <nav class="footer-links-column" aria-label="راهنما">
          <h3 class="footer-column-title">راهنما</h3>
          <ul class="footer-links-list">
            <li><a href="index.html#pricing">تعرفه ها</a></li>
            <li><a href="index.html#blog">وبلاگ</a></li>
          </ul>
        </nav>
        <nav class="footer-links-column" aria-label="قوانین و اطلاعات">
          <h3 class="footer-column-title">قوانین و اطلاعات</h3>
          <ul class="footer-links-list">
            <li><span>قوانین و مقررات</span></li>
            <li><span>حریم خصوصی</span></li>
          </ul>
        </nav>
        <div class="footer-brand">
          <h2>میکل: پلتفرم مدیریت کافه رستوران‌ها</h2>
          <address class="footer-address">آدرس: اصفهان، میدان آزادی، دانشگاه اصفهان، مرکز رشد علوم انسانی، فناوری‌های نرم و صنایع خلاق</address>
          <div class="footer-logos" aria-label="لوگوها و نشان‌ها">
            <div class="footer-logo"><img src="assets/fani.png" alt="گواهی بررسی فنی سازمان فناوری اطلاعات ایران" width="250" height="231" loading="lazy"></div>
            <div class="footer-logo"><img src="assets/shahrak.png" alt="شهرک علمی و تحقیقاتی اصفهان" width="350" height="420" loading="lazy"></div>
            <a class="footer-logo" href="https://rahkarapp.ir/" aria-label="شرکت راهکار‌های یکپارچه کاربردی"><img src="assets/rahkar-logo1.png" alt="راهکار" width="500" height="157" loading="lazy"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© کلیه حقوق پلتفرم میکل متعلق به <a href="https://rahkarapp.ir/">شرکت راهکار‌های یکپارچه کاربردی</a> می‌باشد.</p>
        </div>
      </div>
    </div>
  </footer>
  <script>
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'باز کردن منو' : 'بستن منو');
      navLinks.classList.toggle('open', !isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'باز کردن منو');
    }));

  </script>
```

</details>

<details>
<summary>JavaScript interaction snapshot: updates.html</summary>

```javascript
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'باز کردن منو' : 'بستن منو');
      navLinks.classList.toggle('open', !isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'باز کردن منو');
    }));

  
```

</details>
