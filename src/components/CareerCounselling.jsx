export default function CareerCounselling() {
  return (
    <section className="w-full flex flex-col items-center py-20 px-4">

      {/* Heading */}
      <h1
        className="
          text-[34px]
          font-semibold
          text-[#4a4a4a]
          mb-10
          text-center
        "
      >
        Career Counselling 2.0
      </h1>

      {/* Content Box */}
      <div
        className="
          w-full
          max-w-[760px]
          bg-white
          border
          border-[#7a7a7a]
          rounded-[4px]
          px-8
          py-6
          text-left
          text-[17px]
          leading-[1.7]
          text-black
        "
      >
        <p className="mb-6">
          Install LifePage - free Career Counselling App!
        </p>

        <p>
          Invest in your 14 hour LifePage Career Plan to find which Career is best
          for you and how to excel at it.
        </p>
      </div>

      {/* EXTRA SPACE TO SHOW SCROLL */}
      <div className="h-[600px]" />

    </section>
  );
}
