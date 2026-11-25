export const navigation = [
  { number: '01', label: 'Inicio', id: 'inicio', tone: 'nav-yellow' },
  { number: '02', label: 'Áreas', id: 'especialidades', tone: 'nav-aqua' },
  { number: '03', label: 'Equipo', id: 'equipo', tone: 'nav-lilac' },
  { number: '04', label: 'Planes', id: 'planes', tone: 'nav-white' },
  { number: '05', label: 'Clínica', id: 'tecnologia', tone: 'nav-green' },
  { number: '06', label: 'Cita', id: 'cita', tone: 'nav-coral' },
]

export const specialties = [
  {
    name: 'Cardiología',
    summary: 'Electrocardiogramas, ecocardio y chequeo preventivo.',
    icon: 'heart',
    tone: 'card-coral',
  },
  {
    name: 'Pediatría',
    summary: 'Control de crecimiento, vacunas y cuidado infantil.',
    icon: 'star',
    tone: 'card-yellow',
  },
  {
    name: 'Odontología',
    summary: 'Limpieza dental, ortodoncia y estética sin dolor.',
    icon: 'tooth',
    tone: 'card-cream',
  },
  {
    name: 'Laboratorio',
    summary: 'Análisis clínicos con resultados digitales el mismo día.',
    icon: 'flask',
    tone: 'card-lilac',
  },
  {
    name: 'Urgencias',
    summary: 'Atención rápida las 24 horas todos los días del año.',
    icon: 'cross',
    tone: 'card-blue',
  },
  {
    name: 'Oftalmología',
    summary: 'Examen visual completo y salud ocular avanzada.',
    icon: 'eye',
    tone: 'card-green',
  },
]

export const doctors = [
  {
    name: 'Dra. Laura Méndez',
    specialty: 'Cardiología Clínica',
    experience: '12 años exp.',
    summary:
      'Especialista en diagnóstico cardiovascular no invasivo y prevención.',
    image:
      'https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=700&q=80',
    alt: 'Doctora del equipo de cardiología',
    tone: 'doctor-aqua',
  },
  {
    name: 'Dr. Carlos Rivas',
    specialty: 'Medicina Interna',
    experience: '15 años exp.',
    summary:
      'Atención integral de adultos y control de enfermedades crónicas.',
    image:
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=700&q=80',
    alt: 'Doctor del equipo de medicina interna',
    tone: 'doctor-yellow',
  },
  {
    name: 'Dra. Sofía Torres',
    specialty: 'Pediatría General',
    experience: '9 años exp.',
    summary: 'Seguimiento infantil, vacunación y urgencias pediátricas.',
    image:
      'https://images.unsplash.com/photo-1666887360364-4919ae373fcb?auto=format&fit=crop&w=700&q=80',
    alt: 'Doctora del equipo de pediatría',
    tone: 'doctor-coral',
  },
]

export const plans = [
  {
    name: 'Esencial',
    price: '$29',
    tone: 'plan-aqua',
    features: [
      'Consultas generales ilimitadas',
      'Telemedicina 24/7',
      '20% dto. en laboratorio',
    ],
  },
  {
    name: 'Familiar',
    price: '$59',
    tone: 'plan-yellow',
    popular: true,
    features: [
      'Hasta 4 integrantes',
      'Pediatría y Odontología incluidas',
      'Urgencias 24H sin copago',
    ],
  },
  {
    name: 'Preventivo+',
    price: '$45',
    tone: 'plan-lilac',
    features: [
      'Chequeo anual completo',
      'Cardiología y Oftalmología',
      'Análisis clínicos incluidos',
    ],
  },
]

export const technology = [
  {
    tag: 'Imagen',
    title: 'Resonancia 3T',
    summary: 'Alta definición en tiempo récord.',
    tone: 'tech-yellow',
  },
  {
    tag: 'App',
    title: 'Historial Cloud',
    summary: 'Tus recetas y estudios en tu móvil.',
    tone: 'tech-aqua',
  },
  {
    tag: 'Lab',
    title: 'Resultados Express',
    summary: 'Entrega digital en menos de 3 horas.',
    tone: 'tech-lilac',
  },
  {
    tag: '24H',
    title: 'Farmacia Propia',
    summary: 'Surtido inmediato al salir de consulta.',
    tone: 'tech-coral',
  },
]

export const appointmentTimes = ['09:00', '11:30', '16:00']

export const appointmentServices = [
  'Medicina General',
  'Cardiología',
  'Pediatría',
  'Odontología',
  'Laboratorio',
  'Oftalmología',
]
