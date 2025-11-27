"use client";
const Page = () => {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

  return (
    <div>
      <div className="dark min-h-screen w-full">
        <div className=" max-w-3xl min-h-screen mx-auto px-6 pt-16">
          <h1 className="text-4xl font-semibold text-background">Today</h1>
          <div className="text-xl mt-6 text-background">
            {formatted} <span className="">• Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
