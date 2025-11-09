export default function Inicio() {
  return (
    <section className="py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Bienvenido a{" "}
            <span className="text-primary">Nuestra Plataforma</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Nos dedicamos a promover y difundir los Objetivos de Desarrollo
            Sostenible de las Naciones Unidas. A través de esta plataforma,
            compartimos conocimiento, experiencias y mejores prácticas que
            contribuyen a un mundo más sostenible.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Desde iniciativas locales hasta movimientos globales, cada acción
            cuenta en la construcción de un futuro mejor para las generaciones
            presentes y futuras.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <span className="text-foreground">
                Información actualizada sobre los ODS
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <span className="text-foreground">
                Casos de éxito y proyectos inspiradores
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <span className="text-foreground">
                Recursos y documentación de calidad
              </span>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://www.pienzasostenible.com/wp-content/uploads/2018/03/DIAGRAMA_1-1.svg"
            alt="Sostenibilidad"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
