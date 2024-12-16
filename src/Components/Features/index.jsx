// Features Section
const Features = () => {
  return (
    <>
      <section className="features py-5  ">
        <div className="container bg-light rounded">
          <h2 className="text-center  fw-bold fs-2   mb-4 p-3 rounded">
            <span
              className="badge text-dark  p-3"
              style={{
                width: "20% !important",
                backgroundColor: "#ddd",
              }}
            >
              {" "}
              چرا ما ؟
            </span>
          </h2>
          <div className="row ">
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i
                  className="bi bi-truck"
                  style={{ fontSize: "50px", color: "#007bff" }}
                ></i>
              </div>
              <h3>ارسال رایگان </h3>
              <p>
                تحویل آنی و لحظه ای ، ارسال رایگان برای خرید بالای 500 هار تومان
                ، ضمانت تحویل کمتر از یک روز برای خرید های درون استانی
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i
                  className="bi bi-arrow-left-right "
                  style={{ fontSize: "50px", color: "#007bff" }}
                ></i>
              </div>
              <h3>مرجوع و تعویض کالا</h3>
              <p>
                امکان بازکشت کالا در صورت دوست نداشتن اجناس خریداری شده
                <span>&nbsp;مرجوع و تعویض در صورت ایراد ونقص در کالا</span>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i
                  className="bi bi-headset"
                  style={{ fontSize: "50px", color: "#007bff" }}
                ></i>
              </div>
              <h3>پشتیبانی آنلاین</h3>
              <p>
                پشتیبانی آنلاین و شبانه روزی ، همین الان بهمون پیام بده تا
                خوشحالمون کنی
                <span className="d-block">😍 با بهترین تجربه کاربری </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
