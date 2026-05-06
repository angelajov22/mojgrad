import { BarChart3, Clock, CheckCircle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Јан", prijaveni: 45, reseni: 38 },
  { month: "Фев", prijaveni: 52, reseni: 42 },
  { month: "Мар", prijaveni: 48, reseni: 45 },
  { month: "Апр", prijaveni: 61, reseni: 50 },
  { month: "Мај", prijaveni: 55, reseni: 52 },
  { month: "Јун", prijaveni: 68, reseni: 58 },
];

function StatsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-5">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={20} className="text-sky-500" />
            <h3 className="text-base font-semibold text-gray-900">
              Месечна ефикасност
            </h3>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="prijaveni"
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  fillOpacity={0.2}
                />

                <Area
                  type="monotone"
                  dataKey="reseni"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Транспарентноста е наш приоритет.
          </h2>

          <p className="mt-6 max-w-xl text-gray-600 leading-7">
            Секоја пријава е јавно достапна и нејзиниот статус може да се следи
            во реално време. Општината е должна да одговори во рок од 48 часа.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition duration-200 transform hover:scale-105 hover:shadow-lg">
              <Clock size={22} className="text-gray-700" />
              <div>
                <p className="text-lg font-bold text-gray-900">42ч</p>
                <p className="text-xs text-gray-500">ВРЕМЕ ЗА ОДГОВОР</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition duration-200 transform hover:scale-105 hover:shadow-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <CheckCircle size={18} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">89%</p>
                <p className="text-xs text-gray-500">УСПЕШНО РЕШЕНИ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
