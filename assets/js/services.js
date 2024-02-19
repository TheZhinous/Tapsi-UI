const informationList = [
  {
    id: "nav-classic-tab",
    desc: "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
    imageUrl: "./assets/imgs/services/illus-classic.webp",
    title: "تپسی کلاسیک",
  },
  {
    id: "nav-tell-tab",
    desc: "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
    imageUrl: "./assets/imgs/services/illus-tel.webp",
    title: "تپسی تلفنی",
  },
  {
    id: "nav-line-tab",
    desc: "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود.",
    imageUrl: "./assets/imgs/services/illus-line.webp",
    title: "تپسی لاین",
  },
  {
    id: "nav-motopeyk-tab",
    desc: "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
    imageUrl: "./assets/imgs/services/illus-motopeyk.webp",
    title: "موتوپیک",
  },
  {
    id: "nav-autopeyk-tab",
    desc: "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.",
    imageUrl: "./assets/imgs/services/illus-autopeyk.webp",
    title: "اتوپیک",
  },
  {
    id: "nav-plus-tab",
    desc: "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
    imageUrl: "./assets/imgs/services/illus-plus.webp",
    title: "تپسی پلاس",
  },
  {
    id: "nav-hamyar-tab",
    desc: "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
    imageUrl: "./assets/imgs/services/illus-hamyar.webp",
    title: "همیار",
  },
];

const tabs = [...document.querySelectorAll(".tab")];
let serviceImage = document.querySelector(".feature__image");
let serviceDesc = document.querySelector(".feature__description");
let serviceTitle = document.querySelector(".feature__title");

console.log(serviceImage);

tabs.map((tab) => {
  tab.addEventListener("click", (e) => {
    serviceImage.src = " ";
    const id = e.target.id;
    informationList.forEach((service) => {
      if (id === service.id) {
        // tab.classList.add("active");
        serviceImage.src = service.imageUrl;
        serviceTitle.innerText = service.title;
        serviceDesc.innerText = service.desc;
      }
    });
  });
});
