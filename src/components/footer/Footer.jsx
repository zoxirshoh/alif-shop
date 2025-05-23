import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './footer.css';
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
    return (
        <div className="footer">
            <div className="offer">
                <div className="tel">
                    <img src="https://alifshop.uz/_ipx/f_webp,s_328x344/images/illustrations/alifshop-app-uz.png" alt="" />
                </div>
                <div className="text">
                    <h2>Ajoyib takliflar har doim yoningizda</h2>
                    <p>alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</p>
                    <div className="install">
                        <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/play-market-icon.svg" alt="" />
                        <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-store-icon.svg" alt="" />
                        <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-gallery-icon.svg" alt="" />
                    </div>
                </div>
                <div className="qr">
                    <img src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp" alt="" />
                    <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
                </div>
            </div>

            <div className="about">
                <div className="card">
                    <h3>alif shop</h3>
                    <p>alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin...</p>
                    <div className="arr">
                        <h2>Hammasini korish </h2>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
                <div className="card">
                    <h3>Smartfonlar muddatli to'lov asosida</h3>
                    <p>Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning ilovalari va texnik parametrlari tufayli smartfonlar ko'pincha bizning kompyuterlarimiz, kameralarimiz...</p>
                    <div className="arr">
                        <h2>Hammasini korish </h2>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
                <div className="card">
                    <h3>Noutbuklar muddatli to'lov asosida</h3>
                    <p>Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish va shu bilan birga bo'sh vaqtimizni unumli o'tkazish imkoniyatini beradi. Masalan, noutbuk yordamida tezda dunyoning istalgan nuqtasidan, turli xil ishlarni bajarishingiz...</p>
                    <div className="arr">
                        <h2>Hammasini korish </h2>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
                <div className="card">
                    <h3>Jihozlar muddatli to'lov asosida</h3>
                    <p>Bizning online do'konda elektronikadan tashqari, turli xil maishiy texnika mavjud: gaz plitalari, grill tayyorlagichlar, muzlatgichlar, kir yuvish mashinalari, dazmollar, konditsionerlar va boshqa ko'plab almashtirib bo'lmaydigan narsalar...</p>
                    <div className="arr">
                        <h2>Hammasini korish </h2>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            </div>
            <footer>
                <div className="links">
                    <div className="link">
                        <h4>Guvohnoma</h4>
                        <a href="">Sotish uchun umumiy shartlar</a>
                        <a href="">Nizom</a>
                        <a href="">Guvohnoma</a>
                    </div>
                    <div className="link">
                        <h4>Servis</h4>
                        <a href="">Namoz vaqti</a>
                        <a href="">Muddatli to'lov islomda</a>
                        <a href="">alif shopda soting!</a>
                        <a href="">Qaytarish</a>
                    </div>
                    <div className="link">
                        <h4>Tovarlar katalogi</h4>
                        <a href="">Smartfonlar va telefonlar</a>
                        <a href="">Gadjetlar</a>
                        <a href="">Smartfonlar uchun aksessuarlar</a>
                        <a href="">Soat va aksessuarlar</a>
                        <a href="">Tegishli tovarlar</a>
                    </div>
                    <div className="link">
                        <h4>Biz ijtimoiy axborot vositalarida</h4>
                        <div className="media">
                            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp" alt="" />
                            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg" alt="" />
                            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg" alt="" />
                            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg" alt="" />
                            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg" alt="" />
                        </div>
                        <h4>Axborot xizmati</h4>
                        <a href="">@alifshop_uz <MdKeyboardArrowRight /></a>
                        <a href="">+998 555 12 12 12 <MdKeyboardArrowRight /></a>
                    </div>
                </div>



                <hr />


                <div className="yandex">
                    <h4>2025 © alifshop.uz</h4>
                    <img src="https://yandex.ru/cycounter?https://alifshop.uz&theme=dark&lang=ru" alt="" />
                </div>

            </footer>
        </div>
    );
}

export default Footer;