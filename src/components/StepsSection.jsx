import { Camera, MapPin, LayoutGrid, Send } from "lucide-react";

function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Фотографирај",
      description:
        "Направете јасна слика од проблемот на кој сте наишле во околината.",
      icon: Camera,
    },
    {
      number: "2",
      title: "Лоцирај",
      description: "Автоматски ќе ја откриеме локацијата или внесете ја рачно.",
      icon: MapPin,
    },
    {
      number: "3",
      title: "Опиши",
      description: "Додадете краток опис и категорија за полесно насочување.",
      icon: LayoutGrid,
    },
    {
      number: "4",
      title: "Испрати",
      description:
        "Нашите служби ќе бидат известени веднаш и ќе започнат со работа.",
      icon: Send,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Како до подобар град во 4 чекори?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Пријавувањето е брзо и едноставно, без комплицирани чекори
        </p>

        <div className="relative mt-20">
          <div className="absolute top-7 left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  {/* ICON */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 shadow-sm">
                    <Icon size={28} strokeWidth={2.4} />

                    {/* NUMBER */}
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white group-hover:bg-white group-hover:text-sky-500">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[200px] text-sm text-gray-500 leading-6">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
