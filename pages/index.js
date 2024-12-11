const data = [
  {
    id: 1,
    firstname: "",
    lastname: "",
    age: 16,
    hobby: "",
  },
];

export default function Home() {
  return (
    <div>
      <p className="text-center font-bold text-xl my-10">Бие даалт</p>
      <div className="flex items-center flex-col space-y-4 border rounde-lg mx-20">
        <p className="font-semibold my-4">Шаардлага:</p>
        <li>UI/UX design (10 оноо)</li>
        <li>
          Ангийнхаа бүх хүүхдийн мэдээллийг JSON датагаар оруулах (5 оноо)
        </li>
        <li>
          Ангийнхаа бүх хүүхдийн мэдээллийг student хуудсанд List болон Grid
          жагсаалтаар харуулах (5 оноо)
        </li>
        <li>Сурагчдийн нэрээр хайдаг байх (10 оноо)</li>
        <li>Github дээр байршсан байх (5оноо)</li>
      </div>
    </div>
  );
}
