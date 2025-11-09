const objectives = [
  { num: 1, title: "Fin de la Pobreza", color: "bg-red-600" },
  { num: 2, title: "Hambre Cero", color: "bg-yellow-600" },
  { num: 3, title: "Salud y Bienestar", color: "bg-red-500" },
  { num: 4, title: "Educación de Calidad", color: "bg-red-400" },
  { num: 5, title: "Igualdad de Género", color: "bg-red-600" },
  { num: 6, title: "Agua Limpia", color: "bg-blue-600" },
  { num: 7, title: "Energía Asequible", color: "bg-yellow-500" },
  { num: 8, title: "Trabajo Decente", color: "bg-red-700" },
  { num: 9, title: "Industria e Innovación", color: "bg-orange-500" },
  { num: 10, title: "Reducir Desigualdades", color: "bg-red-600" },
  { num: 11, title: "Ciudades Sostenibles", color: "bg-yellow-600" },
  { num: 12, title: "Consumo Responsable", color: "bg-orange-600" },
  { num: 13, title: "Acción por el Clima", color: "bg-green-700" },
  { num: 14, title: "Vida Submarina", color: "bg-blue-500" },
  { num: 15, title: "Vida de Ecosistemas", color: "bg-green-600" },
  { num: 16, title: "Paz e Instituciones", color: "bg-blue-900" },
  { num: 17, title: "Alianzas para Lograr", color: "bg-blue-700" },
]

export default function Agenda2030() {
  return (
    <section className="py-8 md:py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Los 17 Objetivos de <span className="text-primary">Desarrollo Sostenible</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          La Agenda 2030 es un plan de acción para las personas, el planeta y la prosperidad.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {objectives.map((obj) => (
          <div
            key={obj.num}
            className={`${obj.color} text-white p-6 rounded-lg hover:shadow-lg transition-all hover:scale-105 cursor-pointer group`}
          >
            <div className="text-3xl font-bold mb-2 group-hover:text-opacity-80">{obj.num}</div>
            <h3 className="font-semibold text-sm leading-tight group-hover:text-opacity-90">{obj.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-lg p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">¿Por qué la Agenda 2030?</h3>
        <p className="text-muted-foreground leading-relaxed">
          Estos 17 objetivos están interconectados y reconocen que la acción en una área afecta los resultados en otras
          áreas, y que el desarrollo debe equilibrar la sostenibilidad social, económica y ambiental. Juntos, los 17
          objetivos nos marcan la ruta hacia un mundo más justo y sostenible.
        </p>
      </div>
    </section>
  )
}
