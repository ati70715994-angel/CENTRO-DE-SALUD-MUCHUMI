const ilustraciones = {
  ambulancia: `
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#0C3B60"/>
      <circle cx="330" cy="40" r="24" fill="#E6B800" opacity="0.85"/>
      <rect x="0" y="145" width="400" height="35" fill="#00875A"/>
      <rect x="95" y="65" width="175" height="72" rx="10" fill="#FFFFFF"/>
      <path d="M270 85 H315 L335 112 V137 H270 Z" fill="#FFFFFF"/>
      <rect x="278" y="92" width="32" height="20" rx="3" fill="#bae6fd"/>
      <rect x="165" y="53" width="26" height="12" rx="4" fill="#dc2626"/>
      <rect x="135" y="82" width="12" height="36" fill="#00875A"/>
      <rect x="123" y="94" width="36" height="12" fill="#00875A"/>
      <circle cx="145" cy="140" r="18" fill="#172B4D"/>
      <circle cx="145" cy="140" r="8" fill="#cbd5e1"/>
      <circle cx="295" cy="140" r="18" fill="#172B4D"/>
      <circle cx="295" cy="140" r="8" fill="#cbd5e1"/>
    </svg>`,
  comunitaria: `
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#e0f2fe"/>
      <rect x="0" y="140" width="400" height="40" fill="#00875A"/>
      <polygon points="80,85 200,35 320,85" fill="#0C3B60"/>
      <rect x="100" y="85" width="200" height="60" fill="#FFFFFF"/>
      <rect x="188" y="52" width="24" height="24" rx="4" fill="#FFFFFF"/>
      <rect x="197" y="56" width="6" height="16" fill="#00875A"/>
      <rect x="192" y="61" width="16" height="6" fill="#00875A"/>
      <circle cx="150" cy="112" r="10" fill="#00875A"/>
      <circle cx="200" cy="112" r="10" fill="#E6B800"/>
      <circle cx="250" cy="112" r="10" fill="#0C3B60"/>
    </svg>`,
  vacunacion: `
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#dcfce7"/>
      <path d="M200 28 L260 52 V98 C260 132 232 152 200 162 C168 152 140 132 140 98 V52 Z" fill="#00875A"/>
      <path d="M200 38 L250 58 V96 C250 124 226 142 200 150 C174 142 150 124 150 96 V58 Z" fill="#FFFFFF"/>
      <rect x="193" y="68" width="14" height="52" rx="3" fill="#0C3B60"/>
      <rect x="174" y="87" width="52" height="14" rx="3" fill="#0C3B60"/>
      <circle cx="295" cy="55" r="16" fill="#E6B800"/>
    </svg>`
};

const modulos = {
  ambulancias: {
    navId: 'nav-ambulancias',
    badge: 'Sistema de Referencia 24/7',
    titulo: 'Reportes de Entregas y Operatividad de Ambulancia',
    subtitulo: 'Traslados asistidos hacia hospitales de Lambayeque y Chiclayo con conductor permanente.',
    items: [
      {
        fecha: '18 Nov 2026 • C.S. Mochumí I-3',
        titulo: 'Operatividad continua de Ambulancia Institucional 24/7',
        resumen: 'Unidad asistencial equipada con oxígeno medicinal, desfibrilador y conductor permanente para referencias oportunas.',
        detalle: 'El Centro de Salud de Mochumí garantiza el traslado seguro de emergencias obstétricas y pacientes críticos hacia hospitales de mayor complejidad en Lambayeque y Chiclayo, articulando con toda la Microrred Mochumí.',
        svg: ilustraciones.ambulancia
      },
      {
        fecha: '04 Nov 2026 • Microrred Mochumí',
        titulo: 'Soporte de referencia para Puestos de Maravillas, Paredones y Punto Cuatro',
        resumen: 'Cobertura coordinada de emergencias médicas en los anexos rurales del distrito.',
        detalle: 'Como cabecera de microrred, nuestra unidad móvil brinda respaldo inmediato a los puestos de salud periféricos, asegurando atención prehospitalaria oportuna con calidez humana.',
        svg: ilustraciones.ambulancia
      }
    ]
  },
  comunitaria: {
    navId: 'nav-comunitaria',
    badge: 'Prevención y Promoción',
    titulo: 'Campañas de Salud Comunitaria y Ambiental',
    subtitulo: 'Atención integral, CRED, salud materna y monitoreo preventivo en Mochumí.',
    items: [
      {
        fecha: '14 Nov 2026 • Caseríos de Mochumí',
        titulo: 'Jornada Integral: Medicina, Obstetricia, CRED y Odontología',
        resumen: 'Más de 650 pobladores accedieron a tamizaje de anemia, control prenatal y atención odontológica gratuita.',
        detalle: 'En coordinación con agentes comunitarios y la Municipalidad de Mochumí, nuestras brigadas acercaron la cartera de servicios I-3 y orientación en Telemedicina (Teleatiende MINSA) a las familias rurales.',
        svg: ilustraciones.comunitaria
      },
      {
        fecha: '28 Oct 2026 • Salud Ambiental',
        titulo: 'Programa de Monitoreo de Metales Pesados y Salud Ambiental',
        resumen: 'Tamizaje preventivo de laboratorio y vigilancia nutricional en la cuenca de Mochumí.',
        detalle: 'Intervención de campo especializada para el seguimiento sanitario y evaluación nutricional de niños y gestantes frente a riesgos hídricos en el distrito.',
        svg: ilustraciones.comunitaria
      }
    ]
  },
  vacunacion: {
    navId: 'nav-vacunacion',
    badge: 'UPSS Enfermería e Inmunizaciones',
    titulo: 'Campañas Vacunatorias y Esquema Nacional',
    subtitulo: '“Protege a tu familia: participemos juntos en la Gran Jornada de Vacunación Integral”.',
    items: [
      {
        fecha: '09 Nov 2026 • Distrito de Mochumí',
        titulo: 'Gran Jornada de Vacunación Integral por la salud de Mochumí',
        resumen: 'Aplicación gratuita de vacunas del esquema regular, influenza, neumococo y VPH.',
        detalle: 'Brigadas de enfermería recorrieron sectores urbanos y anexos rurales completando esquemas de inmunización en niños menores de 5 años, gestantes y adultos mayores.',
        svg: ilustraciones.vacunacion
      },
      {
        fecha: '22 Oct 2026 • Instituciones Educativas',
        titulo: 'Barrido sanitario escolar y control de crecimiento (CRED)',
        resumen: 'Protección inmunológica y desparasitación preventiva en coordinación con colegios locales.',
        detalle: 'Con autorización de los padres de familia, el personal asistencial aplicó dosis preventivas y entregó constancias actualizadas de vacunación.',
        svg: ilustraciones.vacunacion
      }
    ]
  },
  prensa: {
    navId: 'nav-prensa',
    badge: 'Transparencia Institucional',
    titulo: 'Archivo de Prensa y Comunicados Oficiales',
    subtitulo: 'Documentos normativos, notas de prensa y avances de inversión pública.',
    esTabla: true,
    boletines: [
      {
        codigo: 'NP-014-2026',
        fecha: '18 Nov 2026',
        titulo: 'C.S. Mochumí fortalece sistema de referencia 24/7 y atención por Teleatiende MINSA',
        contenido: 'El Centro de Salud de Mochumí (Categoría I-3, RENIPRESS 00004380) informa a la comunidad que mantiene operativo su servicio de urgencias y ambulancia las 24 horas, además de teleconsultas con especialistas regionales.'
      },
      {
        codigo: 'NP-013-2026',
        fecha: '09 Nov 2026',
        titulo: 'Avance del Proyecto PROINVERSIÓN (CUI 2609511) para ampliación del Centro Materno Infantil',
        contenido: 'Se continúa gestionando el proyecto de inversión pública por S/ 21 Millones bajo la modalidad de Obras por Impuestos para modernizar la infraestructura materna e infantil en beneficio de todo el distrito.'
      },
      {
        codigo: 'COM-008-2026',
        fecha: '28 Oct 2026',
        titulo: 'Cronograma oficial de monitoreo de salud ambiental y vacunación distrital',
        contenido: 'Conforme a la RDE N.° 089-2024-GR.LAMB/GERESA-DESIP, se publican las fechas de intervención comunitaria en Maravillas, Paredones Muy Finca y Punto Cuatro.'
      }
    ]
  }
};

function marcarNavActivo(id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(id);
  if (btn) btn.classList.add('active');
}

function irInicio(actualizarHash = true) {
  document.getElementById('vista-menu').classList.remove('hidden');
  document.getElementById('vista-detalle').classList.add('hidden');
  document.getElementById('crumb-actual').textContent = 'Menú de Módulos';
  marcarNavActivo('nav-inicio');
  if (actualizarHash) history.replaceState(null, '', '#');
}

function abrirModulo(clave, actualizarHash = true) {
  const data = modulos[clave];
  if (!data) return irInicio(false);

  document.getElementById('vista-menu').classList.add('hidden');
  document.getElementById('vista-detalle').classList.remove('hidden');
  document.getElementById('crumb-actual').textContent = data.titulo;
  document.getElementById('detalle-badge').textContent = data.badge;
  document.getElementById('detalle-titulo').textContent = data.titulo;
  document.getElementById('detalle-subtitulo').textContent = data.subtitulo;
  marcarNavActivo(data.navId);

  if (actualizarHash) history.replaceState(null, '', '#' + clave);

  const contenedor = document.getElementById('detalle-contenido');
  if (data.esTabla) {
    contenedor.innerHTML = `
      <table class="tabla-prensa">
        <thead>
          <tr><th>Código</th><th>Fecha</th><th>Comunicado Oficial</th><th>Acción</th></tr>
        </thead>
        <tbody>
          ${data.boletines.map((b, i) => `
            <tr>
              <td><strong>${b.codigo}</strong></td>
              <td>${b.fecha}</td>
              <td>${b.titulo}</td>
              <td><button type="button" class="btn-ver" onclick="verBoletin(${i})">Leer</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>`;
  } else {
    contenedor.innerHTML = `
      <div class="cards-grid">
        ${data.items.map((item, i) => `
          <article class="report-card">
            ${item.svg}
            <div class="report-body">
              <span class="report-date">${item.fecha}</span>
              <h3>${item.titulo}</h3>
              <p>${item.resumen}</p>
              <button type="button" class="btn-ver" onclick="verReporte('${clave}', ${i})">Ver reporte completo</button>
            </div>
          </article>
        `).join('')}
      </div>`;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function verReporte(clave, index) {
  const item = modulos[clave].items[index];
  document.getElementById('visor-cuerpo').innerHTML = `
    ${item.svg}
    <span class="report-date">${item.fecha}</span>
    <h3 style="margin: 6px 0 10px; color: #0C3B60;">${item.titulo}</h3>
    <p style="font-size: 0.92rem; line-height: 1.6;">${item.detalle}</p>
  `;
  document.getElementById('visor').showModal();
}

function verBoletin(index) {
  const b = modulos.prensa.boletines[index];
  document.getElementById('visor-cuerpo').innerHTML = `
    <span class="badge">${b.codigo} • ${b.fecha}</span>
    <h3 style="margin: 8px 0 12px; color: #0C3B60;">${b.titulo}</h3>
    <p style="font-size: 0.92rem; line-height: 1.6;">${b.contenido}</p>
  `;
  document.getElementById('visor').showModal();
}

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (modulos[hash]) {
    abrirModulo(hash, false);
  }
});