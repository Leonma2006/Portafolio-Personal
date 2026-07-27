import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";



const tecnologias = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "SQL",
  "Git",
  "IA",
];

export default function Home() {
  return (
    <main className="
relative
min-h-screen
overflow-hidden
text-white
bg-gradient-to-b
from-black
via-zinc-950
">
  {/* Barra de navegación */}

  <nav
  className="
    fixed
    top-0
    left-0
    w-full
    z-50

    bg-white/5
    backdrop-blur-xl

    border
    border-white/10

    rounded-2xl
  "
>
  <div
    className="
      max-w-6xl
      mx-auto

      px-8
      py-4

      flex
      justify-between
      items-center
    "
  >
    <h1 className="font-bold text-xl">
      Leonardo M. A.
    </h1>

    <div className="flex gap-8 text-zinc-300">
      <a
        href="#inicio"
        className="
          hover:text-cyan-400
          transition
        "
      >
        Inicio
      </a>

      <a
        href="#sobre-mi"
        className="
          hover:text-cyan-400
          transition
        "
      >
        Sobre mí
      </a>

      <a
        href="#proyectos"
        className="
          hover:text-cyan-400
          transition
        "
      >
        Proyectos
      </a>

      <a
        href="#contacto"
        className="
          hover:text-cyan-400
          transition
        "
      >
        Contacto
      </a>
    </div>
  </div>
</nav>


  {/* Fondo pastel animado */}


<div className="fixed inset-0 overflow-hidden z-10 pointer-events-none">
  <div className="fixed -bottom-40 left-0 w-[140%] h-[500px] bg-pink-400/20 blur-[120px] animate-wave1 animate-aurora1" />
  <div className="fixed -bottom-20 left-[-10%] w-[150%] h-[450px] bg-cyan-400/20 blur-[140px] animate-wave2 animate-aurora2" />
  <div className="fixed -bottom-32 left-[5%] w-[130%] h-[550px] bg-violet-400/20 blur-[160px] animate-wave3 animate-aurora3" />
</div>

<section
  id="inicio"
  className="  relative
  text-zinc-300

  hover:text-cyan-400

  transition-all
  duration-300">
</section>


      {/* Hero */}
      <section className="relative z-20 max-w-6xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-sreda">
          LEONARDO MORENO ALBARRAN
        </h1>

        <div className="flex gap-5 mt-6 text-2xl">
          <a
            href="https://instagram.com/leonma2006"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-pink-500
              hover:scale-110
              transition-all
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/leonardo.morenoalbarran/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-blue-500
              hover:scale-110
              transition-all
            "
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/Leonma2006"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-white
              hover:scale-110
              transition-all
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-cyan-400
              hover:scale-110
              transition-all
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-white
              hover:scale-110
              transition-all
            "
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="mt-6 text-xl text-zinc-400 max-w-2xl">
          Soy un estudiante de Ingenieria en Software. Me apasiona demasiado la tecnologia pero sobre
          todo el reto logico de codigicar, aprendiendo desarrollo web, de software (c++, java) 
          y uso de base de datos en ambiente logistico empresarial.
          Actualmente la pagina esta en desarrollo mientras voy aprendiendo nuevas tecnologias y herramientas para mejorar mis habilidades.
        </p>
        <div className="mt-8 "> 
        
        <div className="flex flex-wrap gap-3 mt-8">


  <span className="
 px-4
    py-2

    rounded-full

    bg-cyan-500/5
    backdrop-blur-lg

    border
    border-cyan-500/20

    text-cyan-200

    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
    hover:border-cyan-400/40

    transition-all">
    Next.js
  </span>

  <span className=" px-4
    py-2

    rounded-full

    bg-cyan-500/5
    backdrop-blur-lg

    border
    border-cyan-500/20

    text-cyan-200

    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
    hover:border-cyan-400/40

    transition-all">
    TypeScript
  </span>

  <span className=" px-4
    py-2

    rounded-full

    bg-cyan-500/5
    backdrop-blur-lg

    border
    border-cyan-500/20

    text-cyan-200

    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
    hover:border-cyan-400/40

    transition-all">
    React
  </span>

  <span className=" px-4
    py-2

    rounded-full

    bg-cyan-500/5
    backdrop-blur-lg

    border
    border-cyan-500/20

    text-cyan-200

    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
    hover:border-cyan-400/40

    transition-all">
    Python
  </span>

  <span className=" px-4
    py-2

    rounded-full

    bg-cyan-500/5
    backdrop-blur-lg

    border
    border-cyan-500/20

    text-cyan-200

    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
    hover:border-cyan-400/40

    transition-all">
    IA
  </span>

</div>
</div>
</section>

<section 
id="sobre-mi"
className="max-w-10xl mx-auto px-8 py-20">

  <div
    className="
      bg-white/5
      backdrop-blur-xl
      border border-cyan-500/20
      rounded-3xl
      p-8
    "
  >

    <h3 className="text-cyan-300 font-semibold text-xl">
        TRAYECTORIA
    </h3>

    <p className="text-zinc-400 mt-2">
      Avance en mis estudios universitarios.
    </p>

    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <span>Ingeniería en Sistemas</span>
        <span>22%</span>
      </div>

      <div className="h-3 bg-white/10 rounded-full">
        <div
          className="
            h-full
            w-[22%]

            rounded-full

            bg-gradient-to-r
            from-cyan-400
            to-violet-500

            shadow-[0_0_20px_rgba(34,211,238,0.4)]
          "
        />
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="card">
    <h3 className="text-4xl font-bold text-cyan-300">
      1
    </h3>
    <p>Proyectos</p>
  </div>

  <div className="card">
    <h3 className="text-4xl font-bold text-violet-300">
      2025
    </h3>
    <p>Inicio de portafolio</p>
  </div>

  <div className="card">
    <h3 className="text-4xl font-bold text-sky-300">
      10+
    </h3>
    <p>Tecnologías exploradas</p>
  </div>

</div>

  </div>

</section>


<section className="max-w-6xl mx-auto px-8 py-20">
  <h2 className="text-5xl font-bold ml-8 mb-12">
    Tecnologías y Herramientas
  </h2>

  <p className="text-zinc-400 mb-10">
    Tecnologías que utilizo actualmente y áreas que sigo explorando.
  </p>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Desarrollo Web */}
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border border-white/10

        rounded-3xl
        p-6

        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]

        transition-all
      "
    >
      <h3 className="text-xl font-semibold text-cyan-300 mb-4">
        Desarrollo Web
      </h3>

      <div className="flex flex-wrap gap-2">
        <span className="skill">Next.js</span>
        <span className="skill">React</span>
        <span className="skill">TypeScript</span>
        <span className="skill">HTML</span>
        <span className="skill">CSS</span>
      </div>
    </div>

    {/* Desarrollo Software */}
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border border-white/10

        rounded-3xl
        p-6

        hover:border-violet-400/30
        hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]

        transition-all
      "
    >
      <h3 className="text-xl font-semibold text-violet-300 mb-4">
        Desarrollo de Software
      </h3>

      <div className="flex flex-wrap gap-2">
        <span className="skill">C#</span>
        <span className="skill">C++</span>
      </div>
    </div>

    {/* Bases de Datos */}
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border border-white/10

        rounded-3xl
        p-6

        hover:border-sky-400/30
        hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]

        transition-all
      "
    >
      <h3 className="text-xl font-semibold text-sky-300 mb-4">
        Bases de Datos
      </h3>

      <div className="flex flex-wrap gap-2">
        <span className="skill">SQL</span>
        <span className="skill">SQL Server</span>
      </div>
    </div>

    {/* Herramientas */}
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border border-white/10

        rounded-3xl
        p-6

        hover:border-emerald-400/30
        hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]

        transition-all
      "
    >
      <h3 className="text-xl font-semibold text-emerald-300 mb-4">
        Herramientas
      </h3>

      <div className="flex flex-wrap gap-2">
        <span className="skill">Visual Studio</span>
        <span className="skill">VS Code</span>
        <span className="skill">Git</span>
        <span className="skill">GitHub</span>
      </div>
    </div>

  </div>

  {/* Aprendiendo */}
  <div
    className="
      mt-8

      bg-white/5
      backdrop-blur-xl

      border border-cyan-500/20

      rounded-3xl
      p-6
    "
  >
    <h3 className="text-xl font-semibold text-cyan-300 mb-4">
      Actualmente Aprendiendo
    </h3>

    <div className="flex flex-wrap gap-2">
      <span className="skill">Next.js Avanzado</span>
      <span className="skill">Diseño UI/UX</span>
      <span className="skill">IA</span>
    </div>
  </div>
</section>

  <section
  id="credenciales"
  className="max-w-6xl mx-auto px-8 py-20"
>
  <h2 className="text-5xl font-bold ml-8 mb-12">
    Certificaciones
  </h2>

  <p className="text-zinc-400 mb-12">
    Cursos, certificados y reconocimientos que respaldan mi formación.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    <div
  className="
    bg-white/5
    backdrop-blur-xl
    border border-cyan-500/20
    rounded-3xl
    p-6

    hover:border-cyan-400/40
    hover:bg-white/10

    transition-all
    duration-300
  "
>
  <div className="flex justify-between items-center">

    <div>
      <h3 className="text-xl font-semibold">
        SQL Básico
      </h3>

      <p className="text-zinc-400 text-sm mt-1">
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
        text-xs
      "
    >
      2025
    </span>

  </div>


</div>
  </div>
  <div  className="flex justify-end mt-10">
<a
  href="/credenciales"
  className="
    inline-flex
    items-center

    px-6
    py-3

    rounded-full

    bg-cyan-500/10
    border border-cyan-500/20

    text-cyan-300

    hover:bg-cyan-500/20
    hover:border-cyan-400/40

    transition-all
  "
>
  Ver todas las credenciales →
</a>
</div>
</section>

       {/* Proyectos */} 
<section
  id="proyectos"
  className="max-w-6xl mx-auto px-8 py-20"
>
  <h2 className="text-5xl font-bold ml-8 mb-12">
    Proyectos Destacados
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Proyecto 1 */}
    <div
      className="
    bg-white/5
    backdrop-blur-x1
    border border-cyan-500/20
    rounded-3xl
    overflow-hidden

    hover:scale-[1.02]
    hover:border-cyan-400/40

    transition-all
    duration-300
      "
    >
      <img
        src="/proyecto1.png"
        alt="Proyecto 1"
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

        <h3 className="text-2xl font-bold">
          Sistema de Registros de Entradas y Salidas
        </h3>

        <p className="mt-3 text-zinc-400">
          Aplicación desarrollada con
          C#, Visual Studio y SQL Server para gestión
          de entradas y salidas de un sistema de control de acceso.
        </p>

        <div className="flex gap-2 mt-5">

          <span className="skill">
            C#
          </span>

          <span className="skill">
            Visual Studio
          </span>

          <span className="skill">
            SQL Server
          </span>


<a
  href="https://github.com/Leonma2006/Proyecto-Camiones"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center

    w-10
    h-10

    rounded-full

    bg-white/5
    border border-white/10

    hover:border-cyan-400/40
    hover:bg-cyan-500/10

    hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]

    transition-all
  "
>
  <FaGithub size={20} />
</a>


        </div>


      </div>
    </div>

  </div>
</section>

    </main>
);
}

