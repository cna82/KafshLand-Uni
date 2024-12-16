// Imports
import "./index.css"
// React component
const ContactusPage = () => {
  return (
    <>
      <div class="container contactus-container" dir="rtl">
        <div class="row ">
          <div class="col-md-6  p-5 bg-light mt-4">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  نام و نام خانوادگی
                </label>
                <input type="text" class="form-control" id="name" required  placeholder="نام و نام خانوادگی ..."/>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  ایمیل
                </label>
                <input type="email" class="form-control" id="email" required placeholder="آدرس ایمیل ..."/>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  متن پیام
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                ارسال پیام
              </button>
            </form>
          </div>
          <div class="col-md-6 p-5 mt-4 bg-light border-right">
            <img src="./Images/Contactus/0.png" alt="contat image " className="img-fluid" />
          </div>
        </div>

        <div class="row py-5 px-2 bg-light border-top-custom">
          <div class="col">
            <h4 className="badge bg-success fs-5 mb-4">موقعیت مکانی ما</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7752.295003514409!2d52.32541539436844!3d35.22045182170945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f90ed08231adc5b%3A0x6f840bb96c2dd951!2z2K_Yp9mG2LTar9in2Ycg2KLYstin2K8g2YjYp9it2K8g2q_YsdmF2LPYp9ix!5e0!3m2!1sfa!2s!4v1734264173284!5m2!1sfa!2s"
              width="100%"
              height="300"
              className="rounded"
              style={{
                border: "0",
              }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactusPage;
