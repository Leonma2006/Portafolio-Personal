export default function Credenciales() {
  return (

    <main>
      <section className="max-w-6xl mx-auto px-8 py-20">

  <h1 className="text-5xl font-bold mb-4">
    Credenciales
  </h1>

  <p className="text-zinc-400 mb-12">
    Certificados, cursos y reconocimientos obtenidos durante mi formación.
  </p>
  <div className="grid md:grid-cols-2 gap-8">

    {/* Credencial */}
    <div
      className="
        bg-white/5
        backdrop-blur-xl
        border border-cyan-500/20
        rounded-3xl
        overflow-hidden

        hover:scale-[1.02]
        hover:border-cyan-400/40

        transition-all
        duration-300
      "
    >

      {/* Imagen */}
      <img
        src="/certificados/sql-basico.jpg"
        alt="SQL Básico"
        className="
          w-full
          h-72
          object-cover

          hover:scale-105
          transition-transform
          duration-500
        "
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <div>
            <h3 className="text-2xl font-bold">
              SQL Básico
            </h3>

            <p className="text-zinc-400 mt-1">
              Microsoft Learn
            </p>
          </div>

          <span
            className="
              px-3 py-1
              rounded-full

              bg-cyan-500/10
              border border-cyan-500/20

              text-cyan-300
              text-sm
            "
          >
            2025
          </span>

        </div>

        <p className="mt-4 text-zinc-400">
          Curso enfocado en consultas SQL,
          filtrado de datos y fundamentos
          de bases de datos relacionales.
        </p>

        <div className="flex justify-end mt-6">

          <a
            href="/documentos/sql-basico.pdf"
            target="_blank"
            className="
              px-4 py-2

              rounded-full

              bg-cyan-500/10
              border border-cyan-500/20

              text-cyan-300

              hover:bg-cyan-500/20
              hover:border-cyan-400/40

              transition-all
            "
          >
            Ver PDF
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}