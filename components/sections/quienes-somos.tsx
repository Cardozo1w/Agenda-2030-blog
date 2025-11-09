export default function QuienesSomos() {
  return (
    <section className="py-8 md:py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Quiénes <span className="text-primary">Somos</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Una organización dedicada a impulsar el cambio sostenible
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "🌍",
            title: "Visión Global",
            description: "Comprendemos los desafíos globales y trabajamos localmente para generar impacto real.",
          },
          {
            icon: "💡",
            title: "Innovación",
            description: "Promovemos soluciones creativas y sostenibles a los problemas más acuciantes del mundo.",
          },
          {
            icon: "🤝",
            title: "Colaboración",
            description: "Creemos que juntos podemos lograr más. Somos una red de expertos y comprometidos.",
          },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-lg p-8 md:p-12">
        <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Facilitar el acceso a información, herramientas y conexiones que empoderen a individuos y organizaciones para
          contribuir activamente al logro de los Objetivos de Desarrollo Sostenible, creando un impacto positivo
          duradero en nuestras comunidades y el planeta.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4">Nuestros Valores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Sostenibilidad", "Integridad", "Inclusión", "Excelencia"].map((value) => (
            <div key={value} className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-foreground font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
