import Form from "./Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 justify-center p-24 text-center">
      <div>
        <h1 className="text-4xl font-bold">Currency Convertor</h1>
        <p className="text-xl">
          This is a simple currency convertor app built with React, Next.js and
          Tailwind CSS.
        </p>
      </div>
      <Form />
    </main>
  );
}
