export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-b border-border py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
          <p className="text-primary font-semibold text-sm">ONU - Objetivos de Desarrollo Sostenible</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
          Agenda 2030 para el <span className="text-primary">Desarrollo Sostenible</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Una plataforma comprometida con la transformación global hacia un futuro más equitativo, próspero y sostenible
          para todos.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <div className="inline-flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg">
            <span className="text-2xl font-bold text-primary">17</span>
            <span className="text-sm text-muted-foreground">
              Objetivos de
              <br />
              Desarrollo
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg">
            <span className="text-2xl font-bold text-secondary">193</span>
            <span className="text-sm text-muted-foreground">
              Países
              <br />
              Comprometidos
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg">
            <span className="text-2xl font-bold text-accent">2030</span>
            <span className="text-sm text-muted-foreground">
              Año
              <br />
              Objetivo
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
