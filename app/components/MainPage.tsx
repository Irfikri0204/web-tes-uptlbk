import Image from "next/image";

export default function MainPage() {
  return (
    <div className="flex h-fit flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-y-4 items-center justify-center bg-purple-600">
        <h1 className="text-4xl text-white font-semibold text-center container">
          Pilih Tes Yang Ingin Kamu Coba!
        </h1>
        <Image
          src="/gambar.png"
          alt="Ilustrasi Tes Kepribadian"
          width={300}
          height={200}
          className="rounded-lg"
          priority
        />
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center bg-gray-100 w-full p-4">
        {[
          {
            href: "https://www.16personalities.com/id/tes-kepribadian",
            label: "Tes Kepribadian By 16 Personalities",
          },
          {
            href: "https://satupersen.net/quiz/tes-kepribadian-mbti/start",
            label: "Tes Tipe Kepribadian By Satu Persen",
          },
          {
            href: "https://satupersen.net/psikotes-online-gratis/tes-love-language/start",
            label: "Tes Love Language By Satu Persen",
          },
          {
            href: "https://tesgayabelajar-uptlbk.vercel.app/",
            label: "Tes Gaya Belajar By UPT LBK UNM",
          },
          {
            href: "https://sqr-uptlbkunm.vercel.app/",
            label: "Tes SRQ-20 By UPT LBK UNM",
          },
        ].map((tes, index) => (
          <a
            key={index}
            href={tes.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 shadow-md rounded-lg w-full text-center transition duration-300 transform hover:scale-100 hover:shadow-lg"
          >
            {tes.label}
          </a>
        ))}
      </div>
    </div>
  );
}
