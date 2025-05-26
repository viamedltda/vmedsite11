import React from "react";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>+ VIAMED</h1>
        <nav>
          <a href="#inicio">INÍCIO</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-text">
          <h2>Centro de Avaliação de Condutores</h2>
          <p>Agende sua avaliação online pelo WhatsApp</p>
          <a href="https://wa.me/5547989297591" target="_blank" rel="noopener noreferrer">
            <button>AGENDAR CONSULTA</button>
          </a>
        </div>
        <img src="/fachada.jpg" alt="Fachada Viamed" />
      </section>

      <section className="info-grid">
        <div className="info-item">
          <h3>HORÁRIO DE ATENDIMENTO</h3>
          <p>Segunda a sexta<br />10:00 — 16:00</p>
        </div>
        <div className="info-item">
          <h3>FORMAS DE PAGAMENTO</h3>
          <p>Cartão de débito<br />Cartão de crédito<br />PIX, Dinheiro</p>
        </div>
        <div className="info-item">
          <h3>ENDEREÇO</h3>
          <p>Rua Rio do Sul, 63 Sala 01<br />Centro, Blumenau - SC<br />CEP: 89012-422</p>
        </div>
      </section>

      <section className="about" id="sobre">
        <h3>SOBRE A CLÍNICA</h3>
        <p>A Viamed é uma clínica credenciada pelo DETRAN-SC (credenciamento nº 0047), especializada na avaliação de condutores para primeira habilitação, adição e mudança de categoria da CNH. Atendemos com horário agendado, oferecendo qualidade, agilidade e uma equipe qualificada para garantir um processo seguro e eficiente.</p>
      </section>

      <section className="contact" id="contato">
        <h3>CONTATO</h3>
        <p><strong>WhatsApp e ligações:</strong> (47) 98929-7591</p>
        <p><strong>E-mail:</strong> viamed@outlook.com.br</p>
      </section>

      <iframe
        title="Mapa Viamed"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1424067604187!2d-49.0715!3d-26.9149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e6c6edcfb2b%3A0x18cba4bb0c3cfc8c!2sRua%20Rio%20do%20Sul%2C%2063%20-%20Centro%2C%20Blumenau%20-%20SC%2C%2089012-422!5e0!3m2!1spt-BR!2sbr!4v1685041474814!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
      ></iframe>

      <footer className="footer">
        <p>Viamed Serviços Médicos LTDA — CNPJ: 57.834.361/0001-50</p>
      </footer>
    </div>
  );
}

export default App;
