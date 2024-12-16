// Imports
import "./index.css";
import Describe from "../Describe";

// React component
const AboutusPage = () => {
  return (
    <div className="about-container">
      <>
        <header className="hero bg-light text-white text-center py-5">
          <div className="container">
            <h1 className="display-4">درباره ما</h1>
            <p className="lead">نگاهی به دستاورد ها و اهداف پیش روی ما </p>
            <ul class="list-group">
              <li class="list-group-item">
                کسب رتبه اول بیشترین فروش اینرنتی کالا
              </li>
              <li class="list-group-item">راه اندازی شعب خارجی مجموعه</li>
              <li class="list-group-item">زیر مجموعه گیری های جدید</li>
              <li class="list-group-item">باز شدن فروش به صورت ریموت</li>
              <li class="list-group-item">
                کسب رتبه بهترین سایت فروشگاهی از نظر کاربران
              </li>
            </ul>
          </div>
        </header>

        <section className="py-5 hero text-light  ">
          <div className="container ">
            <h2 className="text-center mb-4"> چرا کفشلند ؟</h2>
            <p className="text-center">
              ما یک تیم بسیار وسیع متشکل از بیش از هزاران کارمند حضوری و غیر
              حضوری هستیم و سالانه بیش از 10 میلیون فروش کالا داریم ، ما به صورت
              مستقیم وارد کننده انواع کتونی های اورجینال با ضمانت اصیل بودن
              هستیم
            </p>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">بزرگترین دستاورد کفشلند چیه ؟</h2>
            <p className="text-center">
              فروش بیش از 10 هزار کفش در روز به صورت متوسط شارژ کردن روزانه بیش
              از 20 هزار کالای اتمام موجودی
            </p>
          </div>
        </section>

        <Describe />
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">نگاهی به تیم ما </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="./Images/Aboutus/0.png"
                    className="card-img-top rounded-circle mx-auto mt-3 about-img"
                    alt="Team Member 1"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">سینا نعیمی</h5>
                    <p className="card-text">Front-end Developer </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="./Images/Aboutus/1.png"
                    className="card-img-top rounded-circle mx-auto mt-3 about-img"
                    alt="Team Member 2"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">سارا محسنی</h5>
                    <p className="card-text">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="./Images/Aboutus/2.png"
                    className="card-img-top rounded-circle mx-auto mt-3 about-img"
                    alt="Team Member 3"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">علی عظیمی</h5>
                    <p className="card-text">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
export default AboutusPage;
