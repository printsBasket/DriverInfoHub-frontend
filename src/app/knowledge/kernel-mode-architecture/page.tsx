import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Technical Foundation: Kernel-Mode Execution Architecture | Driver Info Hub",
  description:
    "Explore the technical architecture behind kernel-mode drivers — CPU privilege rings, memory protection, direct I/O, and synchronisation primitives explained clearly.",
}

/* ─── Data ─────────────────────────────────────────────── */

const rings = [
  {
    ring: "Ring 0",
    label: "Kernel Mode",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.25)",
    desc: "The most privileged CPU level. Kernel-mode drivers run here with unrestricted access to all CPU features, registers, and system memory.",
    tags: ["Full CPU access", "Direct hardware I/O", "No restrictions"],
    iconPath: "M12 2L14.2 8.6H21.2L15.6 12.6L17.8 19.2L12 15.2L6.2 19.2L8.4 12.6L2.8 8.6H9.8Z",
  },
  {
    ring: "Ring 3",
    label: "User Mode",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.22)",
    desc: "Restricted privilege level for applications and user-mode drivers. All resource access is mediated and controlled by the kernel.",
    tags: ["Sandboxed access", "Kernel-mediated I/O", "System call boundary"],
    iconPath: null,
  },
]

const memoryFeatures = [
  {
    title: "Page Tables",
    icon: "🗂️",
    desc: "Kernel-mode code can directly manipulate page tables to map, remap, or access any physical memory address — bypassing normal user-space restrictions.",
  },
  {
    title: "No Boundary Enforcement",
    icon: "🔓",
    desc: "Drivers are not subject to user-kernel boundary checks. They can freely read or write any virtual or physical address in the system.",
  },
  {
    title: "Direct I/O",
    icon: "⚡",
    desc: "Perform I/O operations directly to hardware ports and memory-mapped device regions without going through user-space API layers.",
  },
]

const syncPrimitives = [
  {
    name: "Spinlocks",
    color: "#0EA5E9",
    icon: "🔄",
    desc: "Busy-wait loops used for extremely short-duration critical sections. The processor keeps polling until the lock is available — ideal when waiting time is measured in nanoseconds.",
    usage: "Short critical sections, ISR contexts",
  },
  {
    name: "Mutexes",
    color: "#2563EB",
    icon: "🔒",
    desc: "Allow a driver to sleep while waiting for exclusive resource access, yielding the CPU to other work. Suitable for potentially longer waits that can tolerate a context switch.",
    usage: "Longer waits, non-interrupt contexts",
  },
  {
    name: "Semaphores",
    color: "#6366F1",
    icon: "🚦",
    desc: "Count-based synchronisation objects that coordinate access between multiple kernel-mode drivers or between driver components that need to signal each other.",
    usage: "Multi-driver coordination, event signalling",
  },
  {
    name: "Interrupt Masking",
    color: "#8B5CF6",
    icon: "🛡️",
    desc: "Temporarily disable hardware interrupts during ultra-critical operations so that an ISR cannot preempt a sequence of instructions that must appear atomic to the hardware.",
    usage: "Hardware-atomic sequences, IRQ handlers",
  },
]

/* ─── Page ──────────────────────────────────────────────── */

export default function KernelModeArchitecture() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--navy)",
          position: "relative",
          overflow: "hidden",
          padding: "80px 0 100px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: "-120px", left: "-80px",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute", bottom: "-100px", right: "-60px",
            width: "420px", height: "420px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "36px" }}>
            <ol
              style={{
                display: "flex", alignItems: "center", flexWrap: "wrap",
                gap: "6px", listStyle: "none", padding: 0, margin: 0,
              }}
            >
              <li>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
                  Home
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>/</li>
              <li>
                <Link href="/knowledge/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
                  Knowledge Hub
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>/</li>
              <li style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", fontWeight: 600 }}>
                Kernel-Mode Architecture
              </li>
            </ol>
          </nav>

          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
              color: "#38BDF8",
              background: "rgba(14,165,233,0.12)",
              border: "1px solid rgba(14,165,233,0.3)",
              padding: "5px 16px", borderRadius: "9999px",
              marginBottom: "20px",
            }}
          >
            Technical Foundation
          </span>

          <h1
            style={{
              color: "#fff",
              marginTop: "0",
              marginBottom: "20px",
              maxWidth: "820px",
              lineHeight: 1.1,
            }}
          >
            The Architecture Behind{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kernel-Mode Execution
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.62)",
              fontSize: "1.12rem", lineHeight: 1.8,
              maxWidth: "680px", marginBottom: "44px",
            }}
          >
            Kernel-mode drivers operate using CPU privilege levels and memory protection mechanisms built
            into modern processors. Understanding these foundations is essential for anyone building or
            debugging low-level system software.
          </p>

          {/* Quick-nav pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { label: "CPU Privilege Rings", href: "#cpu-privilege-rings" },
              { label: "Memory Protection", href: "#memory-protection" },
              { label: "Synchronisation", href: "#synchronisation" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "7px",
                  padding: "8px 18px", borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "13px", fontWeight: 600,
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#38BDF8", flexShrink: 0, display: "inline-block",
                  }}
                />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CPU Privilege Rings ───────────────────────────── */}
      <section id="cpu-privilege-rings" className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center" }}>
            <span className="section-kicker">CPU Architecture</span>
            <h2>CPU Privilege Levels</h2>
            <p style={{ maxWidth: "640px", margin: "0 auto" }}>
              Modern x86/x64 processors support multiple privilege levels — typically called{" "}
              <strong>"rings"</strong>. Each ring enforces a distinct security and access boundary.
            </p>
          </div>

          {/* Ring visualisation */}
          <div
            style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              margin: "56px 0 64px",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "relative",
                width: 340, height: 340, borderRadius: "50%",
                border: "2.5px dashed rgba(99,102,241,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <span
                style={{
                  position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)",
                  background: "#6366F1", color: "#fff",
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
                  padding: "4px 14px", borderRadius: "9999px", whiteSpace: "nowrap",
                }}
              >
                Ring 3 — User Mode
              </span>

              <div
                style={{
                  width: 190, height: 190, borderRadius: "50%",
                  background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 60%, #3B82F6 100%)",
                  boxShadow: "0 0 56px rgba(37,99,235,0.55), 0 0 14px rgba(37,99,235,0.3)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "6px",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L14.2 8.6H21.2L15.6 12.6L17.8 19.2L12 15.2L6.2 19.2L8.4 12.6L2.8 8.6H9.8Z" fill="#fff" opacity="0.95" />
                </svg>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", letterSpacing: "0.05em" }}>
                  RING 0
                </span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px", fontWeight: 600 }}>
                  Kernel Mode
                </span>
              </div>
            </div>
          </div>

          {/* Ring cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {rings.map((r) => (
              <div
                key={r.ring}
                className="animate-fade-in"
                style={{
                  borderRadius: "var(--radius-lg)",
                  border: `1.5px solid ${r.color}20`,
                  background: "#fff",
                  boxShadow: `0 4px 24px ${r.glow}, var(--shadow-sm)`,
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "5px", background: `linear-gradient(90deg, ${r.color} 0%, ${r.color}88 100%)` }} />
                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: 52, height: 52, borderRadius: "14px",
                        background: `linear-gradient(135deg, ${r.color} 0%, ${r.color}cc 100%)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: `0 4px 12px ${r.glow}`,
                      }}
                    >
                      {r.iconPath ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d={r.iconPath} fill="#fff" opacity="0.95" />
                        </svg>
                      ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="8" r="4" fill="#fff" />
                          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                          letterSpacing: "0.1em", color: r.color, marginBottom: "3px",
                        }}
                      >
                        {r.ring}
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>
                        {r.label}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-body)", lineHeight: 1.7, marginBottom: "20px", fontSize: "0.94rem" }}>
                    {r.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {r.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "4px 12px", borderRadius: "9999px",
                          background: `${r.color}10`,
                          border: `1px solid ${r.color}28`,
                          fontSize: "12px", fontWeight: 600, color: r.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Memory Protection ─────────────────────────────── */}
      <section id="memory-protection" className="block" style={{ background: "var(--bg-light)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left — text */}
            <div>
              <span className="section-kicker">Virtual Memory</span>
              <h2>Memory Protection</h2>
              <p>
                Virtual memory systems add an additional security and isolation layer on top of CPU
                privilege rings. Kernel-mode drivers have capabilities that user-mode code fundamentally
                cannot access.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "28px" }}>
                {memoryFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="animate-fade-in"
                    style={{
                      display: "flex", gap: "16px", alignItems: "flex-start",
                      padding: "20px 22px",
                      borderRadius: "var(--radius-md)",
                      background: "#fff",
                      border: "1.5px solid var(--border)",
                      boxShadow: "var(--shadow-xs)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.55rem", width: 48, height: 48,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: "12px",
                        background: "var(--primary-soft)",
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: "6px", color: "var(--text-main)" }}>{f.title}</h4>
                      <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.65 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — code diagram */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "100%", maxWidth: 400,
                  borderRadius: "var(--radius-xl)",
                  background: "var(--navy)",
                  padding: "32px 30px 36px",
                  boxShadow: "0 24px 64px rgba(10,15,30,0.22)",
                }}
              >
                {/* Window chrome */}
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "24px" }}>
                  {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                    <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, display: "inline-block" }} />
                  ))}
                  <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "12px", marginLeft: "8px", fontFamily: "monospace" }}>
                    virtual_memory.c
                  </span>
                </div>

                {[
                  { text: "// Physical Address Space", color: "rgba(255,255,255,0.3)" },
                  { text: "", color: "" },
                  { text: "KERNEL_VIRTUAL_ADDRESS", color: "#60A5FA" },
                  { text: "  → Page Table (Ring 0)", color: "#34D399" },
                  { text: "  → Physical RAM", color: "#34D399" },
                  { text: "  → MMIO Regions", color: "#34D399" },
                  { text: "", color: "" },
                  { text: "USER_VIRTUAL_ADDRESS", color: "#818CF8" },
                  { text: "  → Restricted pages", color: "#F472B6" },
                  { text: "  → No kernel access", color: "#F472B6" },
                  { text: "  → Syscall boundary", color: "#F472B6" },
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "'Fira Code', 'Courier New', monospace",
                      fontSize: "12.5px",
                      lineHeight: "1.95",
                      color: line.color || "transparent",
                    }}
                  >
                    {line.text || "\u00A0"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Synchronisation Primitives ────────────────────── */}
      <section id="synchronisation" className="block">
        <div className="container">
          <div className="section-head" style={{ textAlign: "center" }}>
            <span className="section-kicker">Concurrency</span>
            <h2>Synchronisation Primitives</h2>
            <p style={{ maxWidth: "680px", margin: "0 auto" }}>
              Kernel-mode drivers use specialised synchronisation mechanisms that differ fundamentally
              from their user-space counterparts — because getting them wrong can crash the entire system.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
              gap: "20px",
              marginTop: "52px",
            }}
          >
            {syncPrimitives.map((prim, i) => (
              <div
                key={prim.name}
                className="animate-fade-in"
                style={{
                  borderRadius: "var(--radius-lg)",
                  background: "#fff",
                  border: "1.5px solid var(--border)",
                  padding: "28px 26px 30px",
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute", top: "16px", right: "20px",
                    fontSize: "52px", fontWeight: 900, lineHeight: 1,
                    color: `${prim.color}10`,
                    userSelect: "none",
                  }}
                >
                  {i + 1}
                </span>

                {/* Icon box */}
                <div
                  style={{
                    width: 54, height: 54, borderRadius: "14px",
                    background: `${prim.color}12`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.65rem",
                    marginBottom: "18px",
                    border: `1.5px solid ${prim.color}20`,
                  }}
                >
                  {prim.icon}
                </div>

                <h3 style={{ marginBottom: "10px", fontSize: "1.08rem", color: prim.color }}>{prim.name}</h3>
                <p style={{ fontSize: "0.91rem", lineHeight: 1.7, marginBottom: "18px" }}>{prim.desc}</p>

                {/* Usage badge */}
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "5px 12px", borderRadius: "9999px",
                    background: `${prim.color}0e`,
                    border: `1px solid ${prim.color}22`,
                  }}
                >
                  <span
                    style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: prim.color, flexShrink: 0, display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "11.5px", fontWeight: 600, color: prim.color }}>
                    {prim.usage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summary CTA ───────────────────────────────────── */}
      <section className="block" style={{ background: "var(--bg-light)", paddingTop: "0" }}>
        <div className="container">
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              background: "linear-gradient(135deg, #0A0F1E 0%, #111827 55%, #1C2540 100%)",
              padding: "64px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(10,15,30,0.28)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute", top: "-60px", left: "-40px",
                width: "280px", height: "280px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute", bottom: "-40px", right: "-30px",
                width: "240px", height: "240px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                  color: "#38BDF8",
                  background: "rgba(14,165,233,0.12)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  padding: "5px 16px", borderRadius: "9999px",
                  marginBottom: "20px",
                }}
              >
                Key Takeaway
              </span>

              <h2 style={{ color: "#fff", maxWidth: "700px", margin: "0 auto 18px", lineHeight: 1.2 }}>
                Three pillars that make kernel-mode drivers both powerful and dangerous
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.58)",
                  maxWidth: "620px", margin: "0 auto 40px", lineHeight: 1.8,
                }}
              >
                CPU privilege rings enforce <em>who</em> can execute privileged instructions. Virtual
                memory determines <em>what</em> memory can be accessed. Synchronisation primitives control{" "}
                <em>when</em> critical sections run safely — without any of these, modern operating systems
                could not exist.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <Link className="btn btn-primary" href="/knowledge/">
                  ← Back to Knowledge Hub
                </Link>
                <Link
                  className="btn"
                  href="/drivers/"
                  style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Explore Driver Types
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
