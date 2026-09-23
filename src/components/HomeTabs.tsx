'use client'

import React, { useState } from 'react'

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState('translator')

  return (
    <section id="what-is-a-driver" aria-labelledby="what-is-heading" style={{ background: 'var(--bg-light)' }} className="block">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">The Basics</span>
          <h2 id="what-is-heading">So… What Exactly Is a Driver?</h2>
          <p>Three small ideas that unlock everything about drivers. Tap a tab to dive in.</p>
        </div>

        <div className="tab-switcher">
          <div className="tab-switcher-nav show-on-desktop" role="tablist">
            <button
              className={`tab-switcher-btn ${activeTab === 'translator' ? 'active' : ''}`}
              onClick={() => setActiveTab('translator')}
              role="tab"
              aria-selected={activeTab === 'translator'}
            >
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" style={{ marginRight: '8px' }}>
                <path
                  d="M3 5h7l3 7-3 7H3M14 5h7l-3 7 3 7h-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              The Translator
            </button>
            <button
              className={`tab-switcher-btn ${activeTab === 'care' ? 'active' : ''}`}
              onClick={() => setActiveTab('care')}
              role="tab"
              aria-selected={activeTab === 'care'}
            >
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" style={{ marginRight: '8px' }}>
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Why You Care
            </button>
            <button
              className={`tab-switcher-btn ${activeTab === 'how' ? 'active' : ''}`}
              onClick={() => setActiveTab('how')}
              role="tab"
              aria-selected={activeTab === 'how'}
            >
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" style={{ marginRight: '8px' }}>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              How It Works
            </button>
          </div>

          <div className="tab-switcher-panels">
            {/* Desktop view: show only active tab */}
            <div className="show-on-desktop">
              {activeTab === 'translator' && (
                <div className="tab-switcher-panel active" role="tabpanel">
                  <div className="tab-panel-grid">
                    <div className="tab-panel-text">
                      <h3>The Friendly Translator</h3>
                      <p>
                        Picture this: you hit "Print." Your document jumps from your screen straight onto paper. But here's the secret — your computer and your device don't actually speak the same language. The driver is the tiny, invisible piece of software in the middle, making sure both sides understand each other clearly.
                      </p>
                      <p>
                        Every piece of hardware connected to your computer — keyboards, speakers, webcams, hard drives, even the screen you're reading this on — needs its own translator. Without one, your operating system would simply shrug and say, "Sorry, I have no idea what that thing is."
                      </p>
                      <p>
                        The clever part? Hardware makers and OS designers agreed long ago on shared "rulebooks" that drivers must follow. That's why the same app can print to thousands of different devices — each device's driver speaks the same shared dialect with the OS.
                      </p>
                    </div>
                    <aside className="tab-panel-aside">
                      <h4>In one breath</h4>
                      <ul className="tab-panel-aside-list ticks">
                        <li>A driver is a translator between hardware and your OS.</li>
                        <li>Every device needs one — keyboards, GPUs, devices, all of it.</li>
                        <li>Standards keep thousands of devices working with one OS.</li>
                      </ul>
                    </aside>
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <div className="tab-switcher-panel active" role="tabpanel">
                  <div className="tab-panel-grid">
                    <div className="tab-panel-text">
                      <h3>Why You Should Actually Care</h3>
                      <p>
                        Drivers quietly decide how good (or how frustrating) your computer feels every day. Smooth video calls? A happy webcam driver. Crisp speaker sound? An audio driver doing its homework. Lag-free games? A graphics driver firing on all cylinders. When drivers are healthy, you don't notice them — and that's exactly the point.
                      </p>
                      <p>
                        Now flip it. A grumpy or outdated driver can make a fast laptop feel like it's stuck in molasses, or be the reason an app suddenly stops responding at the worst possible moment. Because drivers run with deep system access, when they misbehave they can affect the whole operating system.
                      </p>
                      <p>
                        The good news: keeping drivers in shape is one of the easiest, highest-impact things you can do for your PC. A small update can mean smoother gameplay, better battery life, steadier performance, and even small reliability improvements you didn't know about.
                      </p>
                    </div>
                    <aside className="tab-panel-aside">
                      <h4>Daily impact</h4>
                      <ul className="tab-panel-aside-list ticks">
                        <li>Healthy drivers = smooth, invisible experience.</li>
                        <li>Outdated drivers = sluggishness, instability, and unexpected restarts.</li>
                        <li>Updating is the easiest free performance upgrade.</li>
                      </ul>
                    </aside>
                  </div>
                </div>
              )}

              {activeTab === 'how' && (
                <div className="tab-switcher-panel active" role="tabpanel">
                  <div className="tab-panel-grid">
                    <div className="tab-panel-text">
                      <h3>How It All Works (Without the Headache)</h3>
                      <p>
                        Follow a simple click. You press "Save." Your app whispers "save this file" to the operating system. The OS turns to the storage driver and says, "Hey, can you handle this?" The driver translates that polite request into the exact electrical signals your hard drive understands. Done — your file is safe. All of this happens in less time than a blink.
                      </p>
                      <p>
                        Behind the scenes, drivers are stacked like a relay team. Each one has its own job — one talks to the device, another tidies up the data, one handles the physical connection (USB, Wi-Fi, you name it). The request passes runner to runner until it reaches the hardware, and the answer travels back the same way.
                      </p>
                      <p>
                        What's wild is the speed. A typical request bounces through this whole relay in microseconds. You experience it as "instant," but a tiny, very organized conversation just took place.
                      </p>
                    </div>
                    <aside className="tab-panel-aside">
                      <h4>The relay race</h4>
                      <ul className="tab-panel-aside-list ticks">
                        <li>Apps speak to the OS using friendly APIs.</li>
                        <li>The OS hands work to the right driver.</li>
                        <li>The driver speaks the device's exact dialect.</li>
                        <li>Replies travel back up the same stack.</li>
                      </ul>
                    </aside>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile view: show all tabs vertically */}
            <div className="show-on-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* The Translator */}
              <div className="tab-switcher-panel" role="tabpanel">
                <div className="tab-panel-grid" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="tab-panel-text">
                    <h3 style={{ marginBottom: '12px' }}>The Translator</h3>
                    <p style={{ marginBottom: '12px' }}>
                      Picture this: you hit "Print." Your document jumps from your screen straight onto paper. But here's the secret — your computer and your device don't actually speak the same language. The driver is the tiny, invisible piece of software in the middle, making sure both sides understand each other clearly.
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      Every piece of hardware connected to your computer — keyboards, speakers, webcams, hard drives, even the screen you're reading this on — needs its own translator. Without one, your operating system would simply shrug and say, "Sorry, I have no idea what that thing is."
                    </p>
                    <p>
                      The clever part? Hardware makers and OS designers agreed long ago on shared "rulebooks" that drivers must follow. That's why the same app can print to thousands of different devices — each device's driver speaks the same shared dialect with the OS.
                    </p>
                  </div>
                  <aside className="tab-panel-aside" style={{ marginTop: '16px' }}>
                    <h4>In one breath</h4>
                    <ul className="tab-panel-aside-list ticks">
                      <li>A driver is a translator between hardware and your OS.</li>
                      <li>Every device needs one — keyboards, GPUs, devices, all of it.</li>
                      <li>Standards keep thousands of devices working with one OS.</li>
                    </ul>
                  </aside>
                </div>
              </div>

              {/* Why You Care */}
              <div className="tab-switcher-panel" role="tabpanel">
                <div className="tab-panel-grid" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="tab-panel-text">
                    <h3 style={{ marginBottom: '12px' }}>Why You Care</h3>
                    <p style={{ marginBottom: '12px' }}>
                      Drivers quietly decide how good (or how frustrating) your computer feels every day. Smooth video calls? A happy webcam driver. Crisp speaker sound? An audio driver doing its homework. Lag-free games? A graphics driver firing on all cylinders. When drivers are healthy, you don't notice them — and that's exactly the point.
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      Now flip it. A grumpy or outdated driver can make a fast laptop feel like it's stuck in molasses, or be the reason an app suddenly stops responding at the worst possible moment. Because drivers run with deep system access, when they misbehave they can affect the whole operating system.
                    </p>
                    <p>
                      The good news: keeping drivers in shape is one of the easiest, highest-impact things you can do for your PC. A small update can mean smoother gameplay, better battery life, steadier performance, and even small reliability improvements you didn't know about.
                    </p>
                  </div>
                  <aside className="tab-panel-aside" style={{ marginTop: '16px' }}>
                    <h4>Daily impact</h4>
                    <ul className="tab-panel-aside-list ticks">
                      <li>Healthy drivers = smooth, invisible experience.</li>
                      <li>Outdated drivers = sluggishness, instability, and unexpected restarts.</li>
                      <li>Updating is the easiest free performance upgrade.</li>
                    </ul>
                  </aside>
                </div>
              </div>

              {/* How It Works */}
              <div className="tab-switcher-panel" role="tabpanel">
                <div className="tab-panel-grid" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="tab-panel-text">
                    <h3 style={{ marginBottom: '12px' }}>How It Works</h3>
                    <p style={{ marginBottom: '12px' }}>
                      Follow a simple click. You press "Save." Your app whispers "save this file" to the operating system. The OS turns to the storage driver and says, "Hey, can you handle this?" The driver translates that polite request into the exact electrical signals your hard drive understands. Done — your file is safe. All of this happens in less time than a blink.
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      Behind the scenes, drivers are stacked like a relay team. Each one has its own job — one talks to the device, another tidies up the data, one handles the physical connection (USB, Wi-Fi, you name it). The request passes runner to runner until it reaches the hardware, and the answer travels back the same way.
                    </p>
                    <p>
                      What's wild is the speed. A typical request bounces through this whole relay in microseconds. You experience it as "instant," but a tiny, very organized conversation just took place.
                    </p>
                  </div>
                  <aside className="tab-panel-aside" style={{ marginTop: '16px' }}>
                    <h4>The relay race</h4>
                    <ul className="tab-panel-aside-list ticks">
                      <li>Apps speak to the OS using friendly APIs.</li>
                      <li>The OS hands work to the right driver.</li>
                      <li>The driver speaks the device's exact dialect.</li>
                      <li>Replies travel back up the same stack.</li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
