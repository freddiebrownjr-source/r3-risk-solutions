
export default function App() {
  return (
    <main style={{
      background:'#050505',
      color:'white',
      minHeight:'100vh',
      fontFamily:'Arial, sans-serif'
    }}>
      <nav style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'24px 60px',
        borderBottom:'1px solid #222'
      }}>
        <img src="/assets/r3-logo.jpg" style={{height:'70px'}} />
        <button style={{
          background:'#d71920',
          color:'white',
          border:'none',
          padding:'14px 22px',
          borderRadius:'12px',
          fontWeight:'bold'
        }}>
          Request Review
        </button>
      </nav>

      <section style={{
        display:'grid',
        gridTemplateColumns:'1.2fr 1fr',
        gap:'60px',
        alignItems:'center',
        padding:'80px 60px'
      }}>
        <div>
          <div style={{
            color:'#ff4d4d',
            marginBottom:'20px',
            fontWeight:'bold',
            letterSpacing:'1px'
          }}>
            FOUNDER-LED EHS + WORKERS' COMP ADVISORY
          </div>

          <h1 style={{
            fontSize:'72px',
            lineHeight:'0.95',
            margin:'0 0 24px 0'
          }}>
            Reduce workplace injuries before they become expensive business problems.
          </h1>

          <p style={{
            color:'#cfcfcf',
            fontSize:'22px',
            lineHeight:'1.6'
          }}>
            R3 Risk Solutions helps organizations reduce workers' compensation costs,
            improve safety performance, and strengthen operational readiness.
          </p>
        </div>

        <div style={{textAlign:'center'}}>
          <img
            src="/assets/maurice-headshot.png"
            style={{
              width:'100%',
              maxWidth:'520px',
              borderRadius:'24px',
              border:'3px solid #222'
            }}
          />
        </div>
      </section>

      <section style={{
        padding:'40px 60px 100px'
      }}>
        <div style={{
          display:'flex',
          gap:'24px',
          alignItems:'center',
          background:'#111',
          border:'1px solid #222',
          borderRadius:'24px',
          padding:'30px'
        }}>
          <img
            src="/assets/maurice-headshot.png"
            style={{
              width:'140px',
              height:'140px',
              objectFit:'cover',
              borderRadius:'20px'
            }}
          />

          <div>
            <h2 style={{fontSize:'36px', marginBottom:'12px'}}>About Maurice Rosser</h2>

            <p style={{
              color:'#cfcfcf',
              fontSize:'18px',
              lineHeight:'1.7',
              maxWidth:'900px'
            }}>
              Maurice Rosser leads R3 Risk Solutions with a practical, operational approach
              to workplace safety, risk reduction, and workers’ compensation strategy.
              The mission is simple: help companies reduce preventable incidents and improve
              long-term business performance.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
