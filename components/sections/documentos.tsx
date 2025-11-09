export default function Documentos() {
  const documents = [
    {
      title: "Guía Completa de los ODS",
      description: "Documento comprensivo sobre los 17 objetivos, sus metas y indicadores.",
      type: "PDF",
      size: "4.2 MB",
    },
    {
      title: "Informe de Progreso 2024",
      description: "Análisis detallado del progreso hacia la Agenda 2030 en diferentes regiones.",
      type: "PDF",
      size: "6.8 MB",
    },
    {
      title: "Guía de Implementación",
      description: "Pasos prácticos para organizaciones que desean alinear sus operaciones con los ODS.",
      type: "PDF",
      size: "3.5 MB",
    },
    {
      title: "Estadísticas Globales",
      description: "Datos y estadísticas actualizadas sobre el estado de los Objetivos de Desarrollo Sostenible.",
      type: "Excel",
      size: "2.1 MB",
    },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          <span className="text-primary">Documentos</span> y Recursos
        </h2>
        <p className="text-muted-foreground text-lg">Materiales descargables para profundizar en los ODS</p>
      </div>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-start justify-between bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
          >
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {doc.title}
              </h3>
              <p className="text-muted-foreground text-sm">{doc.description}</p>
              <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">{doc.type}</span>
                <span>{doc.size}</span>
              </div>
            </div>
            <button className="ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap">
              Descargar
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
