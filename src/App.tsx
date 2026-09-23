const modules = [
  'Horários',
  'Busca Ativa',
  'Tutoria',
  'Lançamento de Ausências',
  'Alimentação',
  'Transporte',
  'Limpeza',
  'Manutenção Predial',
  'Ocorrências Alunos',
  'Administração',
]

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0b0b0b',
        color: '#f5f5f5',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '32px 20px',
        boxSizing: 'border-box',
      }}
    >
      <section style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: 28 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              display: 'grid',
              placeItems: 'center',
              border: '1px solid #b78b2f',
              color: '#d8ad4a',
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            RC
          </div>

          <h1 style={{ margin: '18px 0 6px', fontSize: 34 }}>
            RC PEI
          </h1>

          <p style={{ margin: 0, color: '#aaa' }}>
            Sistema integrado de gestão escolar PEI
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 14,
          }}
        >
          {modules.map((name) => (
            <article
              key={name}
              style={{
                padding: 20,
                minHeight: 82,
                borderRadius: 18,
                border: '1px solid #292929',
                background: '#141414',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 650,
              }}
            >
              {name}
            </article>
          ))}
        </div>

        <footer style={{ marginTop: 32, color: '#777', fontSize: 13 }}>
          RC PEI · Base React/Vite
        </footer>
      </section>
    </main>
  )
}
