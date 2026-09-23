'use client'

import { Volume2, Wifi, Usb, HardDrive, Bluetooth, Cpu, Monitor, Printer } from 'lucide-react'

const items = [
  { label: 'Printer Drivers',    Icon: Printer  },
  { label: 'Audio & Sound',      Icon: Volume2  },
  { label: 'Wi-Fi & Networking', Icon: Wifi     },
  { label: 'USB & Devices',      Icon: Usb      },
  { label: 'Storage & SSD',      Icon: HardDrive},
  { label: 'Bluetooth',          Icon: Bluetooth},
  { label: 'Chipset & System',   Icon: Cpu      },
  { label: 'Graphics & GPU',     Icon: Monitor  },
]

export default function Marquee() {
  return (
    <div className="mq-wrap" aria-hidden="true">
      {/* fade edges */}
      <div className="mq-fade mq-fade-l" />
      <div className="mq-fade mq-fade-r" />

      <div className="mq-track">
        {/* render 3× so there's always content in view */}
        {[0, 1, 2].flatMap(pass =>
          items.map(({ label, Icon }) => (
            <span key={`${pass}-${label}`} className="mq-item">
              <Icon className="mq-icon" aria-hidden="true" />
              {label}
            </span>
          ))
        )}
      </div>
    </div>
  )
}
