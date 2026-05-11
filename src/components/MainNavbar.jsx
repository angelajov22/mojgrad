import logo from "../assets/logo.png";

const MainNavbar = () => {
    const linkClass = "text-gray-700 hover:text-[#0a96f4] text-sm font-medium cursor-pointer transition-colors";
    const activeClass = "text-[#0a96f4] text-sm font-semibold cursor-pointer";

    return (
        <div className="flex items-center px-8 py-3 bg-white border-b border-gray-200 shadow-sm gap-8">
            <div className="flex items-center gap-2 mr-4">
                <div className="w-9 h-9 rounded-full border-2 border-[#0a96f4] flex items-center justify-center bg-white">
                    <img src={logo} alt="logo" className="w-7 h-7 rounded-full object-cover" />
                </div>
                <span className="text-[#0a96f4] font-bold text-base tracking-tight">МојГрад</span>
            </div>

            <span className={linkClass}>Почетна</span>
            <span className={activeClass}>Пријави Проблем</span>
            <span className={linkClass}>Активни Проблеми</span>
            <span className={linkClass}>Мапа</span>
            <span className={linkClass}>За Нас</span>
        </div>
    );
};

export default MainNavbar;
