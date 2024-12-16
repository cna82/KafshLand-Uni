const Describe = () => {
  return (
    <>
      <section className="description py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="text-end">نکات مثبت</h3>
              <p dir="rtl" className="mt-3">
                با هر قدم متفاوت تر ظاهر شوید
                <ul className="mt-3 d-flex flex-column gap-3     ">
                  <li>کفش‌های شما، بیانگر استایل شما هستند</li>
                  <li>با اعتماد به نفس قدم بردارید</li>
                  <li>کفش‌های خاص و منحصربه‌فرد برای شما</li>
                  <li>جایی که راحتی و زیبایی به هم می‌رسند</li>
                </ul>
              </p>
              <p dir="rtl">
                دوست داری تمامی این ویژگی هارا داشته باشی ؟ خب چرا عجله نمیکنی
                تا تایمت تموم نشده سریع تر ثبت سفارش کن تا از دستت نپره کفشیو ک
                میخوای رو
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <img
                src="./Images/products/Nike/4.png"
                className="img-fluid"
                alt="Product/Service Image"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>ویژگی ها</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle"></i> ضمانت اصیل بودن تمام
                  کالا با مهر معتبر شرکت
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> ضمانت بازگشت وجه در
                  صورت عدم پسند کالا
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> پشتیبانی آنلاین و 24
                  ساعته شبانه روز و تمام رو های هفته
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> ارسال رایگان برای خرید
                  های بیشتر 500 هزار تومان
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Describe;
