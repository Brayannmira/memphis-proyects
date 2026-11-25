import { useState } from 'react'
import { Link, ScrollRestoration } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import {
  appointmentServices,
  appointmentTimes,
  doctors,
  plans,
  specialties,
  technology,
} from '../data/clinicData.js'

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v15m0 0 7-7m-7 7-7-7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MedicalCross({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
    </svg>
  )
}

function SpecialtyIcon({ type }) {
  const paths = {
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    star: (
      <path d="m12 2 3 6.2 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.1 3.2L7 14.1 2 9.2l6.9-1L12 2Z" />
    ),
    tooth: (
      <path d="M7.2 3.5c2.2 0 3.4 1.1 4.8 1.1s2.6-1.1 4.8-1.1c2.6 0 4.2 2 4.2 4.8 0 2.1-.9 3.8-1.7 5.8-.9 2.4-1.2 6.4-3.1 6.4-1.6 0-1.9-4.3-4.2-4.3s-2.6 4.3-4.2 4.3c-1.9 0-2.2-4-3.1-6.4C3.9 12.1 3 10.4 3 8.3c0-2.8 1.6-4.8 4.2-4.8Z" />
    ),
    flask: (
      <path d="M9 2h6m-5 0v7l-5.3 9.1A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-2.9L14 9V2m-5 12h8" />
    ),
    cross: <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />,
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function HomePage() {
  const [selectedTime, setSelectedTime] = useState(appointmentTimes[0])
  const [confirmation, setConfirmation] = useState('')

  function handleAppointmentSubmit(event) {
    event.preventDefault()
    setConfirmation(
      'Solicitud preparada. Esta demostración no envía ni guarda tus datos.',
    )
  }

  return (
    <>
      <ScrollRestoration />
      <SiteHeader />

      <main>
        <section id="inicio" className="hero-section page-section">
          <span className="dots-decoration hero-dots" aria-hidden="true" />
          <span className="zigzag-decoration hero-zigzag" aria-hidden="true" />
          <span className="triangle-decoration hero-triangle" aria-hidden="true" />

          <div className="hero-layout content-width">
            <div className="hero-copy">
              <span className="eyebrow">
                <span aria-hidden="true">✦</span>
                Centro Médico Integral
              </span>
              <h1>
                Salud
                <span className="hero-highlight">Sin pausa</span>
              </h1>
              <p className="hero-description">
                Atención médica inmediata, diagnóstico digital y más de 20
                especialistas certificados en un solo lugar.
              </p>
              <div className="hero-stats" aria-label="Indicadores del centro">
                <div className="stat-card">
                  <span className="status-dot status-dot-green" />
                  <strong>24/7</strong>
                </div>
                <div className="stat-card stat-card-lilac">
                  <strong>+15</strong>
                  <span>Áreas</span>
                </div>
                <div className="stat-card stat-card-coral">
                  <strong>15 min</strong>
                  <span>Espera máx.</span>
                </div>
              </div>
              <Link className="primary-button" to="/#especialidades">
                Explorar Áreas
                <ArrowDown />
              </Link>
            </div>

            <div className="hero-visual">
              <span className="hero-medical-badge">
                <MedicalCross />
              </span>
              <div className="framed-image hero-image">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                  alt="Profesional de salud atendiendo a una paciente"
                />
              </div>
              <div className="image-caption">
                <strong>Diagnóstico Digital</strong>
                <span>En vivo</span>
              </div>
              <div className="pulse-badge">
                <span className="pulse-line" aria-hidden="true">
                  ♥
                </span>
                <strong>72 BPM</strong>
              </div>
            </div>
          </div>
        </section>

        <section
          id="especialidades"
          className="specialties-section page-section"
        >
          <span className="circle-decoration specialties-circle" aria-hidden="true" />
          <span className="square-decoration specialties-square" aria-hidden="true" />
          <div className="content-width section-content">
            <div className="specialties-heading-row">
              <SectionHeading
                number="02"
                title="Áreas Médicas"
                description="Tecnología clínica y atención personalizada en cada consulta."
                tone="heading-yellow"
              />
              <div className="director-card">
                <img
                  src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=200&q=80"
                  alt=""
                />
                <div>
                  <strong>Dra. Laura Méndez</strong>
                  <span>Dirección Médica · +20 Especialistas</span>
                </div>
              </div>
            </div>
            <div className="specialties-grid grid grid-cols-2 md:grid-cols-3">
              {specialties.map((specialty) => (
                <article
                  className={`specialty-card ${specialty.tone}`}
                  key={specialty.name}
                >
                  <span className="specialty-icon">
                    <SpecialtyIcon type={specialty.icon} />
                  </span>
                  <h3>{specialty.name}</h3>
                  <p>{specialty.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="team-section page-section">
          <span className="zigzag-decoration team-zigzag" aria-hidden="true" />
          <span className="triangle-decoration team-triangle" aria-hidden="true" />
          <div className="content-width section-content">
            <div className="section-heading-row">
              <SectionHeading
                number="03"
                title="Equipo Médico"
                description="Especialistas certificados con trato cercano y tecnología de punta."
                tone="heading-yellow"
              />
              <span className="doctors-badge">+20 Doctores</span>
            </div>
            <div className="team-grid grid grid-cols-1 md:grid-cols-3">
              {doctors.map((doctor) => (
                <article className="doctor-card" key={doctor.name}>
                  <div className={`doctor-image ${doctor.tone}`}>
                    <img src={doctor.image} alt={doctor.alt} loading="lazy" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="doctor-copy">
                    <h3>{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <p>{doctor.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="planes" className="plans-section page-section">
          <span className="dots-decoration plans-dots" aria-hidden="true" />
          <div className="content-width section-content">
            <SectionHeading
              number="04"
              title="Planes VITA+"
              description="Membresías mensuales sin letras pequeñas ni tiempos de espera."
              tone="heading-coral"
            />
            <div className="plans-grid grid grid-cols-1 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  className={`plan-card ${plan.tone} ${plan.popular ? 'plan-popular' : ''}`}
                  key={plan.name}
                >
                  <div>
                    <div className="plan-label-row">
                      <span className="plan-label">{plan.name}</span>
                      {plan.popular && (
                        <span className="popular-label">Popular</span>
                      )}
                    </div>
                    <p className="plan-price">
                      <strong>{plan.price}</strong>
                      <span>/ mes</span>
                    </p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link className="plan-button" to="/#cita">
                    Elegir {plan.name}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologia" className="technology-section page-section">
          <span className="square-decoration technology-square" aria-hidden="true" />
          <div className="technology-layout content-width">
            <div className="technology-image-card">
              <div className="framed-image technology-image">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
                  alt="Instalaciones modernas del centro médico"
                  loading="lazy"
                />
                <span>Equipamiento 2026</span>
              </div>
              <div className="technology-caption">
                <strong>Salas Digitales</strong>
                <span>Certificación ISO</span>
              </div>
            </div>
            <div className="technology-copy">
              <SectionHeading
                number="05"
                title="Clínica Inteligente"
                description="Infraestructura diseñada para darte diagnósticos precisos en minutos."
                tone="heading-green"
              />
              <div className="technology-grid grid grid-cols-2">
                {technology.map((item) => (
                  <article className="technology-card" key={item.title}>
                    <span className={`technology-tag ${item.tone}`}>
                      {item.tag}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cita" className="appointment-section page-section">
          <span className="chevrons-decoration" aria-hidden="true">
            »
          </span>
          <div className="appointment-layout content-width">
            <form
              className="appointment-form"
              onSubmit={handleAppointmentSubmit}
            >
              <div className="appointment-title-row">
                <div>
                  <h2>Tu Cita</h2>
                  <p>Elige un horario y confirma tu solicitud de turno.</p>
                </div>
                <span className="today-badge">Hoy</span>
              </div>

              <fieldset className="time-fieldset">
                <legend className="sr-only">Selecciona un horario</legend>
                {appointmentTimes.map((time, index) => (
                  <button
                    className={`time-button time-${index + 1} ${selectedTime === time ? 'is-selected' : ''}`}
                    key={time}
                    type="button"
                    aria-pressed={selectedTime === time}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </fieldset>

              <label className="form-field">
                <span className="sr-only">Nombre completo</span>
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Nombre completo"
                  required
                />
              </label>
              <label className="form-field">
                <span className="sr-only">Teléfono o WhatsApp</span>
                <input
                  autoComplete="tel"
                  name="phone"
                  placeholder="Teléfono / WhatsApp"
                  required
                  type="tel"
                />
              </label>
              <label className="form-field">
                <span className="sr-only">Especialidad</span>
                <select name="service" defaultValue={appointmentServices[0]}>
                  {appointmentServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
              <button className="submit-button" type="submit">
                Reservar Ahora <span aria-hidden="true">→</span>
              </button>
              <p className="form-note" aria-live="polite">
                {confirmation}
              </p>
            </form>

            <div className="location-card">
              <div className="framed-image location-image">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
                  alt="Fachada e instalaciones de VITA+"
                  loading="lazy"
                />
                <span>Sede Central</span>
              </div>
              <div className="walk-in-card">
                <h3>Visítanos sin cita previa en Urgencias</h3>
                <p>
                  Estacionamiento gratuito y acceso directo para ambulancias.
                </p>
              </div>
              <div className="location-badges">
                <span>⌖ Av. Central 420</span>
                <a href="tel:8008482">☎ 800-8482</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

export default HomePage
