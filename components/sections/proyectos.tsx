export default function Proyectos() {
  const projects = [
    {
      title: "Iniciativa de Energía Comunitaria",
      description: "Instalación de paneles solares en comunidades rurales para garantizar acceso a energía limpia.",
      ods: "ODS 7",
    },
    {
      title: "Programa de Educación Ambiental",
      description: "Capacitación en prácticas sostenibles para jóvenes líderes en ciudades emergentes.",
      ods: "ODS 4 & 13",
    },
    {
      title: "Red de Agricultura Urbana",
      description: "Huertos comunitarios en espacios urbanos para promover seguridad alimentaria.",
      ods: "ODS 2 & 11",
    },
    {
      title: "Conservación de Ecosistemas Marinos",
      description: "Proyectos de restauración y protección de arrecifes de coral amenazados.",
      ods: "ODS 14",
    },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Nuestros <span className="text-primary">Proyectos</span>
        </h2>
        <p className="text-muted-foreground text-lg">Iniciativas que están generando impacto real en el mundo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                {project.title}
              </h3>
              <span className="ml-3 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                {project.ods}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
