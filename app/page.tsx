"use client";

import { FormEvent, useState } from "react";

const discordUrl = "https://discord.gg/N8T5w69zk";

const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>;

function ConnectionMap() {
  return (
    <div className="connection-map" aria-label="Red de perfiles conectados">
      <div className="map-orbit orbit-one" /><div className="map-orbit orbit-two" />
      <div className="map-line line-one" /><div className="map-line line-two" /><div className="map-line line-three" />
      <div className="profile-card profile-react"><span className="dot" />FRONTEND <strong>React</strong></div>
      <div className="profile-card profile-data"><span className="dot" />DATA <strong>Analytics</strong></div>
      <div className="profile-card profile-qa"><span className="dot" />QA <strong>Testing</strong></div>
      <div className="profile-card profile-company"><span className="company-mark">✦</span> EMPRESA <strong>Tech team</strong></div>
      <div className="core-node"><span>TTJ</span></div>
      <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" />
    </div>
  );
}

function Newsletter() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("¡Gracias! Te avisaremos de las próximas novedades.");
  }
  return <section className="newsletter section" aria-labelledby="newsletter-title">
    <div><p className="eyebrow">AL DÍA CON LA COMUNIDAD</p><h2 id="newsletter-title">Que la próxima oportunidad no te encuentre tarde.</h2></div>
    <form onSubmit={submit} noValidate>
      <label htmlFor="email">Tu correo electrónico</label>
      <div className="email-row"><input id="email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required /><button type="submit">Suscribirme <Arrow /></button></div>
      <p className="form-note" aria-live="polite">{message || "Novedades, torneos y oportunidades. Sin ruido."}</p>
    </form>
  </section>;
}

export default function Home() {
  return <>
    <header className="site-header"><a href="#inicio" className="brand" aria-label="TechToJob, inicio"><img src="/techtojob-logo.svg" alt="TechToJob" /></a><nav aria-label="Navegación principal"><a href="#funciona">Cómo funciona</a><a href="#talento">Talento</a><a href="#empresas">Empresas</a><a href="#comunidad">Comunidad</a></nav><a className="button button-small" href={discordUrl} target="_blank" rel="noreferrer">Entrar a Discord <Arrow /></a></header>
    <main>
      <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow"><span className="pulse" /> COMUNIDAD TECH EN ESPAÑOL</p><h1>Tu talento merece estar donde están las oportunidades tech.</h1><p className="hero-description">Conoce profesionales y empresas tecnológicas, comparte lo que sabes hacer y crea conexiones que pueden cambiar tu camino.</p><a className="button" href={discordUrl} target="_blank" rel="noreferrer">Entrar a TechToJob en Discord <Arrow /></a><p className="hero-footnote">Es gratis. La conversación empieza aquí.</p></div><ConnectionMap /></section>
      <section className="intro section"><p className="section-number">01</p><div><p className="eyebrow">MÁS QUE UNA BOLSA DE EMPLEO</p><h2>Las oportunidades no aparecen de la nada. <em>Se construyen.</em></h2></div><p className="intro-text">TechToJob es una comunidad para las personas que están creando el futuro de la tecnología. Un espacio para mostrar tu perfil, aprender de otros y acercarte a quienes buscan exactamente lo que sabes hacer.</p></section>
      <section className="journey section" id="funciona"><div className="section-heading"><p className="eyebrow">ASÍ FUNCIONA</p><h2>De una conversación a una oportunidad.</h2></div><ol className="journey-list"><li><span>01</span><h3>Llegas</h3><p>Entras en una comunidad abierta a la tecnología y a las personas.</p></li><li><span>02</span><h3>Participas</h3><p>Compartes tu stack, ideas y los retos que te mueven.</p></li><li><span>03</span><h3>Conectas</h3><p>Conoces perfiles que suman a tu camino profesional.</p></li><li><span>04</span><h3>Avanzas</h3><p>Las conexiones se convierten en colaboraciones y oportunidades.</p></li></ol></section>
      <section className="audiences section"><article id="talento" className="audience talent"><p className="section-number">02</p><div className="audience-label">PARA TALENTO <span>↘</span></div><h2>Haz visible<br />lo que sabes hacer.</h2><p>Tu stack, tu nivel, tu disponibilidad y tus ganas de construir. Da a tu perfil el espacio que merece.</p><ul><li>Comparte tu especialidad</li><li>Conecta con profesionales</li><li>Descubre oportunidades</li></ul><a href={discordUrl} target="_blank" rel="noreferrer" className="text-link">Encontrar mi comunidad <Arrow /></a></article><article id="empresas" className="audience companies"><p className="section-number">03</p><div className="audience-label">PARA EMPRESAS <span>↙</span></div><h2>Encuentra a las personas que necesitas.</h2><p>Publica tus retos, conecta con perfiles tecnológicos y conoce talento más allá de un currículum.</p><ul><li>Accede a perfiles tech</li><li>Comparte tus necesidades</li><li>Conecta de forma directa</li></ul><a href={discordUrl} target="_blank" rel="noreferrer" className="text-link">Conocer el talento <Arrow /></a></article></section>
      <section id="comunidad" className="community section"><div className="community-head"><p className="eyebrow">ENCUENTRA TU CANAL</p><h2>El sector tech es enorme. Tu comunidad no tiene por qué serlo.</h2><p>Conversa, aprende y comparte con gente que habla tu mismo idioma técnico.</p></div><div className="channels"><span># frontend</span><span># backend</span><span># data</span><span># cybersecurity</span><span># QA</span><span># devops</span><span># UX/UI</span><span># producto</span></div></section>
      <section className="tournaments section"><div className="tournament-art"><div className="bracket b1" /><div className="bracket b2" /><strong>BUILD<br /><i>TOGETHER</i></strong><span className="floating-tag tag-one">RETO ABIERTO</span><span className="floating-tag tag-two">COMUNIDAD</span></div><div><p className="eyebrow">TORNEOS Y RETOS</p><h2>Las oportunidades también se construyen participando.</h2><p>Resuelve, colabora y haz que tu trabajo hable por ti. Nuestros torneos son un lugar para aprender haciendo y darte a conocer.</p><a href={discordUrl} target="_blank" rel="noreferrer" className="button button-dark">Ver retos abiertos <Arrow /></a></div></section>
      <section className="stories section"><div className="section-heading"><p className="eyebrow">VOCES DE LA COMUNIDAD</p><h2>Personas que no se quedaron esperando.</h2></div><div className="story-grid"><article><span>“</span><p>Un espacio para compartir lo que aprendes y encontrar gente que te impulsa.</p><footer><b>Tu historia</b><small>Puede empezar aquí</small></footer></article><article><span>“</span><p>Ideas, retos y contactos: todo lo que una comunidad tech debería tener.</p><footer><b>Tu historia</b><small>Puede empezar aquí</small></footer></article><article className="story-accent"><span>✦</span><p>La próxima conexión importante podría estar a un mensaje de distancia.</p><a href={discordUrl} target="_blank" rel="noreferrer">Entrar a Discord <Arrow /></a></article></div></section>
      <Newsletter />
      <section className="closing section"><p className="eyebrow">¿HABLAMOS?</p><h2>Tu próximo contacto profesional puede empezar con una conversación.</h2><a className="button button-light" href={discordUrl} target="_blank" rel="noreferrer">Entrar a TechToJob en Discord <Arrow /></a></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><img src="/techtojob-logo-negative.svg" alt="TechToJob" /></a><p>Comunidad, talento y oportunidades para quienes construyen tecnología.</p><div><a href="https://www.techtojob.com/" target="_blank" rel="noreferrer">techtojob.com</a><a href={discordUrl} target="_blank" rel="noreferrer">Discord</a></div><small>© {new Date().getFullYear()} TechToJob. Todos los derechos reservados.</small></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "TechToJob", url: "https://www.techtojob.com/", sameAs: [discordUrl], description: "Comunidad tecnológica para conectar talento, empresas y oportunidades." }) }} />
  </>;
}

