document.addEventListener("DOMContentLoaded", () => {
  // --------------------------
  // 1. Product data (100 items)
  // --------------------------
  const products = [
    // FIRE (20)
    {
      id: "F001",
      name: "3kg DCP Fire Extinguisher",
      category: "Fire",
      price: 18000,
      image: "https://via.placeholder.com/400x280?text=3kg+DCP+Extinguisher",
      description: "Portable dry chemical powder extinguisher suitable for offices, shops and homes.",
      featured: true
    },
    {
      id: "F002",
      name: "6kg DCP Fire Extinguisher",
      category: "Fire",
      price: 25000,
      image: "https://via.placeholder.com/400x280?text=6kg+DCP+Extinguisher",
      description: "Medium-size DCP extinguisher for commercial facilities and small industrial sites.",
      featured: true
    },
    {
      id: "F003",
      name: "9kg DCP Fire Extinguisher",
      category: "Fire",
      price: 32000,
      image: "https://via.placeholder.com/400x280?text=9kg+DCP+Extinguisher",
      description: "Heavy-duty dry chemical powder extinguisher for warehouses and factories.",
      featured: true
    },
    {
      id: "F004",
      name: "5kg CO₂ Fire Extinguisher",
      category: "Fire",
      price: 35000,
      image: "https://via.placeholder.com/400x280?text=5kg+CO2+Extinguisher",
      description: "Carbon dioxide extinguisher ideal for electrical panels, server rooms and offices.",
      featured: true
    },
    {
      id: "F005",
      name: "2kg CO₂ Fire Extinguisher",
      category: "Fire",
      price: 26000,
      image: "https://via.placeholder.com/400x280?text=2kg+CO2+Extinguisher",
      description: "Compact CO₂ extinguisher suitable for small offices and control rooms.",
      featured: false
    },
    {
      id: "F006",
      name: "9L Foam Fire Extinguisher",
      category: "Fire",
      price: 34000,
      image: "https://via.placeholder.com/400x280?text=Foam+Extinguisher",
      description: "Foam extinguisher for flammable liquid fires and general protection.",
      featured: false
    },
    {
      id: "F007",
      name: "9L Water Fire Extinguisher",
      category: "Fire",
      price: 28000,
      image: "https://via.placeholder.com/400x280?text=Water+Extinguisher",
      description: "Water-based extinguisher suitable for Class A fires involving solid combustibles.",
      featured: false
    },
    {
      id: "F008",
      name: "Automatic Ceiling Mounted Extinguisher",
      category: "Fire",
      price: 45000,
      image: "https://via.placeholder.com/400x280?text=Automatic+Extinguisher",
      description: "Automatic fire extinguisher for server rooms, generator houses and storage areas.",
      featured: true
    },
    {
      id: "F009",
      name: "Fire Blanket 1.2m x 1.2m",
      category: "Fire",
      price: 9000,
      image: "https://via.placeholder.com/400x280?text=Fire+Blanket",
      description: "Compact fire blanket suitable for kitchens and small workspaces.",
      featured: false
    },
    {
      id: "F010",
      name: "Fire Blanket 1.8m x 1.8m",
      category: "Fire",
      price: 14000,
      image: "https://via.placeholder.com/400x280?text=Large+Fire+Blanket",
      description: "Large fire blanket for industrial kitchens and workshops.",
      featured: false
    },
    {
      id: "F011",
      name: "Fire Hose Reel Complete Set",
      category: "Fire",
      price: 165000,
      image: "https://via.placeholder.com/400x280?text=Fire+Hose+Reel",
      description: "Wall-mounted fire hose reel with valve, nozzle and 30m hose.",
      featured: true
    },
    {
      id: "F012",
      name: "Fire Hydrant Valve",
      category: "Fire",
      price: 95000,
      image: "https://via.placeholder.com/400x280?text=Hydrant+Valve",
      description: "Landing valve for external or internal fire hydrant systems.",
      featured: false
    },
    {
      id: "F013",
      name: "Auto Fire Ball",
      category: "Fire",
      price: 220000,
      image: "m-tek_fire_-_safety_ltd.org/assets/products/Auto Fire Ball.jpg",
      description: "Inlet connection for fire brigade to boost water into hydrant network.",
      featured: true
    },
    {
      id: "F014",
      name: "Manual Fire Alarm Call Point",
      category: "Fire",
      price: 18000,
      image: "https://via.placeholder.com/400x280?text=Manual+Call+Point",
      description: "Break glass fire alarm call point for manual activation of alarm system.",
      featured: false
    },
    {
      id: "F015",
      name: "Conventional Fire Alarm Control Panel (4 Zone)",
      category: "Fire",
      price: 220000,
      image: "https://via.placeholder.com/400x280?text=Fire+Alarm+Panel",
      description: "4-zone conventional fire alarm panel for small to medium buildings.",
      featured: true
    },
    {
      id: "F016",
      name: "Smoke Detector (Photoelectric)",
      category: "Fire",
      price: 9500,
      image: "https://via.placeholder.com/400x280?text=Smoke+Detector",
      description: "Ceiling-mounted smoke detector for early fire detection.",
      featured: false
    },
    {
      id: "F017",
      name: "Heat Detector (Fixed Temperature)",
      category: "Fire",
      price: 9800,
      image: "https://via.placeholder.com/400x280?text=Heat+Detector",
      description: "Heat detector for kitchens, plant rooms and dusty environments.",
      featured: false
    },
    {
      id: "F018",
      name: "Fire Alarm Sounder with Strobe",
      category: "Fire",
      price: 18500,
      image: "https://via.placeholder.com/400x280?text=Alarm+Sounder",
      description: "Combined sounder and strobe beacon for fire alarm notification.",
      featured: false
    },
    {
      id: "F019",
      name: "Fire Exit Signage (Photoluminescent)",
      category: "Fire",
      price: 6500,
      image: "https://via.placeholder.com/400x280?text=Exit+Sign",
      description: "Glow-in-the-dark fire exit sign for escape routes and emergency exits.",
      featured: false
    },
    {
      id: "F020",
      name: "Fireproof Safe – Medium",
      category: "Fire",
      price: 250000,
      image: "https://via.placeholder.com/400x280?text=Fireproof+Safe",
      description: "Fire-resistant safe suitable for important documents, cash and valuables.",
      featured: true
    },

    // SAFETY (20)
    {
      id: "S001",
      name: "High-Visibility Safety Vest – Reflective",
      category: "Safety",
      price: 4500,
      image: "https://via.placeholder.com/400x280?text=Hi-Vis+Vest",
      description: "Reflective safety vest for site workers, traffic control and security staff.",
      featured: true
    },
    {
      id: "S002",
      name: "Industrial Safety Helmet – Red",
      category: "Safety",
      price: 3500,
      image: "https://via.placeholder.com/400x280?text=Safety+Helmet",
      description: "Impact-resistant safety helmet with adjustable strap for head protection.",
      featured: true
    },
    {
      id: "S003",
      name: "Full Body Safety Harness with Lanyard",
      category: "Safety",
      price: 38000,
      image: "https://via.placeholder.com/400x280?text=Safety+Harness",
      description: "Full body harness with shock-absorbing lanyard for work at height.",
      featured: false
    },
    {
      id: "S004",
      name: "Safety Goggles – Anti-Fog",
      category: "Safety",
      price: 4000,
      image: "https://via.placeholder.com/400x280?text=Safety+Goggles",
      description: "Protective eyewear against dust, splashes and flying particles.",
      featured: false
    },
    {
      id: "S005",
      name: "Industrial Ear Muff – Noise Protection",
      category: "Safety",
      price: 7500,
      image: "https://via.placeholder.com/400x280?text=Ear+Muffs",
      description: "Hearing protection for noisy environments such as factories and sites.",
      featured: false
    },
    {
      id: "S006",
      name: "Nitrile-Coated Safety Gloves",
      category: "Safety",
      price: 2500,
      image: "https://via.placeholder.com/400x280?text=Safety+Gloves",
      description: "Durable gloves for handling equipment and general maintenance tasks.",
      featured: false
    },
    {
      id: "S007",
      name: "Chemical Resistant Gloves – Long Cuff",
      category: "Safety",
      price: 5800,
      image: "https://via.placeholder.com/400x280?text=Chemical+Gloves",
      description: "Gloves designed to protect against chemicals and cleaning agents.",
      featured: false
    },
    {
      id: "S008",
      name: "Steel Toe Safety Boots – Black",
      category: "Safety",
      price: 19500,
      image: "https://via.placeholder.com/400x280?text=Safety+Boots",
      description: "Steel toe, slip-resistant work boots for industrial and construction sites.",
      featured: true
    },
    {
      id: "S009",
      name: "Reflective Rain Coat – Long",
      category: "Safety",
      price: 15000,
      image: "https://via.placeholder.com/400x280?text=Reflective+Raincoat",
      description: "Waterproof rain coat with reflective strips for outdoor workers.",
      featured: false
    },
    {
      id: "S010",
      name: "Disposable Coverall – White",
      category: "Safety",
      price: 6500,
      image: "https://via.placeholder.com/400x280?text=Coverall",
      description: "Lightweight disposable coverall for painting, cleaning and light tasks.",
      featured: false
    },
    {
      id: "S011",
      name: "Flame-Resistant Coverall – Orange",
      category: "Safety",
      price: 28000,
      image: "https://via.placeholder.com/400x280?text=FR+Coverall",
      description: "Flame-resistant coverall for oil & gas, welding and hot work operations.",
      featured: true
    },
    {
      id: "S012",
      name: "Half-Face Respirator Mask with Cartridges",
      category: "Safety",
      price: 18500,
      image: "https://via.placeholder.com/400x280?text=Respirator+Mask",
      description: "Reusable respirator mask for protection against dusts, fumes and vapours.",
      featured: false
    },
    {
      id: "S013",
      name: "Dust Mask – Box of 50",
      category: "Safety",
      price: 6000,
      image: "https://via.placeholder.com/400x280?text=Dust+Mask",
      description: "Disposable dust masks for low-level dust and non-toxic particles.",
      featured: false
    },
    {
      id: "S014",
      name: "First Aid Box – Wall Mounted (Medium)",
      category: "Safety",
      price: 22000,
      image: "https://via.placeholder.com/400x280?text=First+Aid+Box",
      description: "Fully stocked first aid box for offices and small facilities.",
      featured: true
    },
    {
      id: "S015",
      name: "First Aid Refill Kit",
      category: "Safety",
      price: 10500,
      image: "https://via.placeholder.com/400x280?text=First+Aid+Refill",
      description: "Refill pack for standard first aid kits and boxes.",
      featured: false
    },
    {
      id: "S016",
      name: "Emergency Eye Wash Bottle – 500ml",
      category: "Safety",
      price: 8500,
      image: "https://via.placeholder.com/400x280?text=Eye+Wash",
      description: "Portable eye wash solution for laboratories and workshops.",
      featured: false
    },
    {
      id: "S017",
      name: "Safety Cones – Reflective (750mm)",
      category: "Safety",
      price: 5200,
      image: "https://via.placeholder.com/400x280?text=Safety+Cone",
      description: "Traffic and hazard cones for demarcation and temporary barriers.",
      featured: false
    },
    {
      id: "S018",
      name: "Floor Safety Sign – Caution Wet Floor",
      category: "Safety",
      price: 9500,
      image: "https://via.placeholder.com/400x280?text=Wet+Floor+Sign",
      description: "Foldable caution sign for cleaning and spill areas.",
      featured: false
    },
    {
      id: "S019",
      name: "Spill Kit – General Purpose",
      category: "Safety",
      price: 58000,
      image: "https://via.placeholder.com/400x280?text=Spill+Kit",
      description: "Absorbent pads, socks and PPE for spill response.",
      featured: false
    },
    {
      id: "S020",
      name: "Lockout/Tagout Kit – Basic",
      category: "Safety",
      price: 74000,
      image: "https://via.placeholder.com/400x280?text=LOTO+Kit",
      description: "Basic lockout/tagout kit for equipment isolation and maintenance safety.",
      featured: true
    },

    // SECURITY (20)
    {
      id: "Q001",
      name: "Handheld Metal Detector",
      category: "Security",
      price: 38000,
      image: "https://via.placeholder.com/400x280?text=Handheld+Detector",
      description: "Portable metal detector for access control and event security.",
      featured: true
    },
    {
      id: "Q002",
      name: "Walk-Through Metal Detector Gate",
      category: "Security",
      price: 680000,
      image: "https://via.placeholder.com/400x280?text=Walk-Through+Detector",
      description: "Full-height walk-through detector gate for high-traffic entry points.",
      featured: true
    },
    {
      id: "Q003",
      name: "Under Vehicle Inspection Mirror",
      category: "Security",
      price: 42000,
      image: "https://via.placeholder.com/400x280?text=Under+Vehicle+Mirror",
      description: "Inspection mirror with torch for under-vehicle checks.",
      featured: false
    },
    {
      id: "Q004",
      name: "Security Torch – Rechargeable",
      category: "Security",
      price: 15000,
      image: "https://via.placeholder.com/400x280?text=Security+Torch",
      description: "Heavy-duty rechargeable torch for guards and patrols.",
      featured: false
    },
    {
      id: "Q005",
      name: "Expandable Baton – Rubber Grip",
      category: "Security",
      price: 11500,
      image: "https://via.placeholder.com/400x280?text=Security+Baton",
      description: "Expandable baton for security personnel and patrol teams.",
      featured: false
    },
    {
      id: "Q006",
      name: "Traffic Baton – LED",
      category: "Security",
      price: 8500,
      image: "https://via.placeholder.com/400x280?text=Traffic+Baton",
      description: "Illuminated baton for traffic control and emergency scenes.",
      featured: false
    },
    {
      id: "Q007",
      name: "Door Contact Sensor – Magnetic",
      category: "Security",
      price: 6500,
      image: "https://via.placeholder.com/400x280?text=Door+Contact",
      description: "Magnetic contact sensor for doors and windows.",
      featured: false
    },
    {
      id: "Q008",
      name: "Vibration/Shock Sensor",
      category: "Security",
      price: 7200,
      image: "https://via.placeholder.com/400x280?text=Shock+Sensor",
      description: "Sensor to detect forced entry attempts on doors, windows or safes.",
      featured: false
    },
    {
      id: "Q009",
      name: "Panic Button – Wired",
      category: "Security",
      price: 8000,
      image: "https://via.placeholder.com/400x280?text=Panic+Button",
      description: "Emergency panic button for offices, banks and receptions.",
      featured: false
    },
    {
      id: "Q010",
      name: "Siren – 30W External",
      category: "Security",
      price: 16500,
      image: "https://via.placeholder.com/400x280?text=Siren",
      description: "Loud external siren for security alarm systems.",
      featured: false
    },
    {
      id: "Q011",
      name: "Standalone PIR Motion Sensor Alarm",
      category: "Security",
      price: 21000,
      image: "https://via.placeholder.com/400x280?text=PIR+Alarm",
      description: "Motion sensor alarm for shops, stores and small offices.",
      featured: false
    },
    {
      id: "Q012",
      name: "Security Control Panel – 8 Zone",
      category: "Security",
      price: 185000,
      image: "https://via.placeholder.com/400x280?text=Security+Panel",
      description: "8-zone control panel for wired security alarm systems.",
      featured: true
    },
    {
      id: "Q013",
      name: "RFID Access Control Reader",
      category: "Security",
      price: 38000,
      image: "https://via.placeholder.com/400x280?text=RFID+Reader",
      description: "Proximity card reader for restricted access doors.",
      featured: false
    },
    {
      id: "Q014",
      name: "Electronic Door Lock – Fail Secure",
      category: "Security",
      price: 62000,
      image: "https://via.placeholder.com/400x280?text=Door+Lock",
      description: "Electric door lock for access control systems.",
      featured: false
    },
    {
      id: "Q015",
      name: "Time Attendance & Access Control Terminal",
      category: "Security",
      price: 185000,
      image: "https://via.placeholder.com/400x280?text=Attendance+Terminal",
      description: "Biometric time and access control terminal for offices.",
      featured: true
    },
    {
      id: "Q016",
      name: "Bullet CCTV Camera – 2MP",
      category: "Security",
      price: 32000,
      image: "https://via.placeholder.com/400x280?text=Bullet+CCTV",
      description: "Outdoor bullet camera for perimeter surveillance.",
      featured: false
    },
    {
      id: "Q017",
      name: "Dome CCTV Camera – 2MP",
      category: "Security",
      price: 30000,
      image: "https://via.placeholder.com/400x280?text=Dome+CCTV",
      description: "Indoor dome camera for offices and stores.",
      featured: false
    },
    {
      id: "Q018",
      name: "4 Channel DVR – HD",
      category: "Security",
      price: 78000,
      image: "https://via.placeholder.com/400x280?text=4CH+DVR",
      description: "Digital video recorder for small CCTV systems.",
      featured: false
    },
    {
      id: "Q019",
      name: "8 Channel DVR – HD",
      category: "Security",
      price: 115000,
      image: "https://via.placeholder.com/400x280?text=8CH+DVR",
      description: "8-channel DVR for larger CCTV deployments.",
      featured: false
    },
    {
      id: "Q020",
      name: "CCTV Power Supply – 12V 10A",
      category: "Security",
      price: 18500,
      image: "https://via.placeholder.com/400x280?text=CCTV+PSU",
      description: "Central power supply unit for multiple CCTV cameras.",
      featured: false
    },

    // SOLAR (20)
    {
      id: "L001",
      name: "Solar Panel – 100W Monocrystalline",
      category: "Solar",
      price: 42000,
      image: "https://via.placeholder.com/400x280?text=100W+Panel",
      description: "100W solar panel suitable for small DC systems and lighting.",
      featured: true
    },
    {
      id: "L002",
      name: "Solar Panel – 200W Monocrystalline",
      category: "Solar",
      price: 78000,
      image: "https://via.placeholder.com/400x280?text=200W+Panel",
      description: "200W solar panel for home and office backup systems.",
      featured: true
    },
    {
      id: "L003",
      name: "Solar Panel – 300W Monocrystalline",
      category: "Solar",
      price: 115000,
      image: "https://via.placeholder.com/400x280?text=300W+Panel",
      description: "High output panel for hybrid and off-grid solar installations.",
      featured: false
    },
    {
      id: "L004",
      name: "Solar Charge Controller – 20A PWM",
      category: "Solar",
      price: 25000,
      image: "https://via.placeholder.com/400x280?text=20A+Controller",
      description: "20A PWM controller for small solar power setups.",
      featured: false
    },
    {
      id: "L005",
      name: "Solar Charge Controller – 40A MPPT",
      category: "Solar",
      price: 68000,
      image: "https://via.placeholder.com/400x280?text=40A+MPPT",
      description: "High efficiency MPPT controller for medium solar systems.",
      featured: true
    },
    {
      id: "L006",
      name: "Deep Cycle Battery – 12V 100Ah",
      category: "Solar",
      price: 175000,
      image: "https://via.placeholder.com/400x280?text=100Ah+Battery",
      description: "Sealed maintenance-free battery for solar backup power.",
      featured: false
    },
    {
      id: "L007",
      name: "Deep Cycle Battery – 12V 200Ah",
      category: "Solar",
      price: 295000,
      image: "https://via.placeholder.com/400x280?text=200Ah+Battery",
      description: "High capacity battery for larger solar and inverter systems.",
      featured: false
    },
    {
      id: "L008",
      name: "Inverter – 1.5kVA / 12V",
      category: "Solar",
      price: 220000,
      image: "https://via.placeholder.com/400x280?text=1.5kVA+Inverter",
      description: "Pure sine wave inverter for basic home or office loads.",
      featured: false
    },
    {
      id: "L009",
      name: "Inverter – 3.5kVA / 24V",
      category: "Solar",
      price: 360000,
      image: "https://via.placeholder.com/400x280?text=3.5kVA+Inverter",
      description: "Suitable for medium-sized homes and small offices.",
      featured: true
    },
    {
      id: "L010",
      name: "Inverter – 5kVA / 48V",
      category: "Solar",
      price: 520000,
      image: "https://via.placeholder.com/400x280?text=5kVA+Inverter",
      description: "High-capacity inverter for larger homes and businesses.",
      featured: true
    },
    {
      id: "L011",
      name: "Solar Flood Light – 60W",
      category: "Solar",
      price: 28000,
      image: "https://via.placeholder.com/400x280?text=60W+Flood+Light",
      description: "Stand-alone solar floodlight for security and yard lighting.",
      featured: false
    },
    {
      id: "L012",
      name: "Solar Street Light – 100W All-in-One",
      category: "Solar",
      price: 65000,
      image: "https://via.placeholder.com/400x280?text=100W+Street+Light",
      description: "Integrated solar street light for roads, estates and compounds.",
      featured: false
    },
    {
      id: "L013",
      name: "Solar Home Lighting Kit – 3 Bulbs",
      category: "Solar",
      price: 35000,
      image: "https://via.placeholder.com/400x280?text=Home+Lighting+Kit",
      description: "Small solar lighting kit for rural homes and small shops.",
      featured: false
    },
    {
      id: "L014",
      name: "DC LED Bulb – 12V 9W",
      category: "Solar",
      price: 2500,
      image: "https://via.placeholder.com/400x280?text=DC+LED+Bulb",
      description: "Energy-efficient DC bulb for solar lighting systems.",
      featured: false
    },
    {
      id: "L015",
      name: "MC4 Solar Connector Set",
      category: "Solar",
      price: 4500,
      image: "https://via.placeholder.com/400x280?text=MC4+Connectors",
      description: "Pair of MC4 connectors for solar panel connections.",
      featured: false
    },
    {
      id: "L016",
      name: "DC Breaker – 63A",
      category: "Solar",
      price: 12000,
      image: "https://via.placeholder.com/400x280?text=DC+Breaker",
      description: "Circuit breaker for DC solar protection and isolation.",
      featured: false
    },
    {
      id: "L017",
      name: "PV Combiner Box – 4 In 1 Out",
      category: "Solar",
      price: 135000,
      image: "https://via.placeholder.com/400x280?text=Combiner+Box",
      description: "Combiner box for multiple string solar installations.",
      featured: false
    },
    {
      id: "L018",
      name: "Solar Fan – 16\" DC Standing Fan",
      category: "Solar",
      price: 42000,
      image: "https://via.placeholder.com/400x280?text=Solar+Fan",
      description: "DC solar standing fan for homes and kiosks.",
      featured: false
    },
    {
      id: "L019",
      name: "Solar Charge Controller – 60A MPPT",
      category: "Solar",
      price: 125000,
      image: "https://via.placeholder.com/400x280?text=60A+MPPT",
      description: "High current MPPT controller for large battery banks.",
      featured: false
    },
    {
      id: "L020",
      name: "Inverter Battery Trolley – Double",
      category: "Solar",
      price: 38000,
      image: "https://via.placeholder.com/400x280?text=Battery+Trolley",
      description: "Metal trolley for neat installation of inverter batteries.",
      featured: false
    },

    // HOME AUTOMATION, ALARM & SURVEILLANCE (20)
    {
      id: "H001",
      name: "Wi-Fi Smart Bulb – RGB",
      category: "Home Automation, Alarm & Surveillance",
      price: 9500,
      image: "https://via.placeholder.com/400x280?text=Smart+Bulb",
      description: "App-controlled smart bulb with colour changing and scheduling.",
      featured: true
    },
    {
      id: "H002",
      name: "Smart Wi-Fi Plug",
      category: "Home Automation, Alarm & Surveillance",
      price: 12000,
      image: "https://via.placeholder.com/400x280?text=Smart+Plug",
      description: "Remote on/off control for appliances via mobile app.",
      featured: false
    },
    {
      id: "H003",
      name: "Smart Wi-Fi Indoor Camera – 1080p",
      category: "Home Automation, Alarm & Surveillance",
      price: 28000,
      image: "https://via.placeholder.com/400x280?text=WiFi+Indoor+Camera",
      description: "Indoor IP camera with motion detection and two-way audio.",
      featured: true
    },
    {
      id: "H004",
      name: "Smart Wi-Fi Outdoor Camera – 1080p",
      category: "Home Automation, Alarm & Surveillance",
      price: 36000,
      image: "https://via.placeholder.com/400x280?text=WiFi+Outdoor+Camera",
      description: "Weatherproof outdoor camera for home and perimeter monitoring.",
      featured: false
    },
    {
      id: "H005",
      name: "Wireless Intruder Alarm Panel Kit",
      category: "Home Automation, Alarm & Surveillance",
      price: 185000,
      image: "https://via.placeholder.com/400x280?text=Wireless+Alarm+Kit",
      description: "Complete wireless alarm kit with sensors, siren and remote control.",
      featured: true
    },
    {
      id: "H006",
      name: "Wireless Door/Window Sensor – Pack of 2",
      category: "Home Automation, Alarm & Surveillance",
      price: 15500,
      image: "https://via.placeholder.com/400x280?text=Wireless+Contact",
      description: "Magnetic door/window sensors for alarm and automation systems.",
      featured: false
    },
    {
      id: "H007",
      name: "Wireless PIR Motion Detector",
      category: "Home Automation, Alarm & Surveillance",
      price: 16500,
      image: "https://via.placeholder.com/400x280?text=Wireless+PIR",
      description: "Motion detector for wireless alarm and smart home setups.",
      featured: false
    },
    {
      id: "H008",
      name: "Smart Video Doorbell",
      category: "Home Automation, Alarm & Surveillance",
      price: 38000,
      image: "https://via.placeholder.com/400x280?text=Video+Doorbell",
      description: "Video doorbell with mobile notifications and two-way audio.",
      featured: true
    },
    {
      id: "H009",
      name: "Standalone GSM Alarm Dialer",
      category: "Home Automation, Alarm & Surveillance",
      price: 52000,
      image: "https://via.placeholder.com/400x280?text=GSM+Alarm+Dialer",
      description: "Sends SMS/call alerts when connected to sensors or panel outputs.",
      featured: false
    },
    {
      id: "H010",
      name: "Smart Home Hub – Wi-Fi + Zigbee",
      category: "Home Automation, Alarm & Surveillance",
      price: 52000,
      image: "https://via.placeholder.com/400x280?text=Smart+Hub",
      description: "Hub for integrating multiple smart home devices and scenes.",
      featured: false
    },
    {
      id: "H011",
      name: "Smart Smoke Detector – Wi-Fi",
      category: "Home Automation, Alarm & Surveillance",
      price: 26000,
      image: "https://via.placeholder.com/400x280?text=Smart+Smoke+Detector",
      description: "Wi-Fi smoke detector with app alerts and history logging.",
      featured: false
    },
    {
      id: "H012",
      name: "Smart Gas Leak Detector",
      category: "Home Automation, Alarm & Surveillance",
      price: 28000,
      image: "https://via.placeholder.com/400x280?text=Gas+Leak+Detector",
      description: "Detects gas leaks and sends audible and app notifications.",
      featured: false
    },
    {
      id: "H013",
      name: "NVR – 8 Channel IP",
      category: "Home Automation, Alarm & Surveillance",
      price: 185000,
      image: "https://via.placeholder.com/400x280?text=8CH+NVR",
      description: "Network video recorder for IP camera systems.",
      featured: false
    },
    {
      id: "H014",
      name: "PoE Switch – 8 Port",
      category: "Home Automation, Alarm & Surveillance",
      price: 65000,
      image: "https://via.placeholder.com/400x280?text=PoE+Switch",
      description: "Power over Ethernet switch for powering IP cameras and devices.",
      featured: false
    },
    {
      id: "H015",
      name: "Indoor Wi-Fi PTZ Camera",
      category: "Home Automation, Alarm & Surveillance",
      price: 42000,
      image: "https://via.placeholder.com/400x280?text=PTZ+Camera",
      description: "Pan-tilt-zoom camera for flexible indoor surveillance.",
      featured: false
    },
    {
      id: "H016",
      name: "Smart IR Remote Controller",
      category: "Home Automation, Alarm & Surveillance",
      price: 16000,
      image: "https://via.placeholder.com/400x280?text=IR+Remote",
      description: "Controls TV, AC and other IR appliances via mobile app.",
      featured: false
    },
    {
      id: "H017",
      name: "Smart Door Lock – Keypad & RFID",
      category: "Home Automation, Alarm & Surveillance",
      price: 185000,
      image: "https://via.placeholder.com/400x280?text=Smart+Door+Lock",
      description: "Smart door lock with PIN, card and key access options.",
      featured: true
    },
    {
      id: "H018",
      name: "Ceiling Microphone for CCTV Audio",
      category: "Home Automation, Alarm & Surveillance",
      price: 8500,
      image: "https://via.placeholder.com/400x280?text=CCTV+Mic",
      description: "Discreet microphone for CCTV audio monitoring.",
      featured: false
    },
    {
      id: "H019",
      name: "Cable – RG59 + Power Roll (100m)",
      category: "Home Automation, Alarm & Surveillance",
      price: 42000,
      image: "https://via.placeholder.com/400x280?text=RG59+Cable",
      description: "Combined coax and power cable for CCTV installations.",
      featured: false
    },
    {
      id: "H020",
      name: "Cable – Cat6 UTP Network Cable (305m)",
      category: "Home Automation, Alarm & Surveillance",
      price: 98000,
      image: "https://via.placeholder.com/400x280?text=Cat6+Cable",
      description: "Ethernet cable roll for network and IP camera infrastructure.",
      featured: false
    }
  ];

  // --------------------------
  // 2. Elements
  // --------------------------
  const productGrid = document.getElementById("productGrid");
  const topPicksTrack = document.querySelector(".top-picks-track");
  const categoryFilters = document.getElementById("categoryFilters");
  const searchInput = document.getElementById("productSearch");

  const cartDrawer = document.querySelector(".cart-drawer");
  const cartBackdrop = document.querySelector(".cart-drawer-backdrop");
  const openCartButtons = document.querySelectorAll(".open-cart, .cart-toggle");
  const closeCartButton = document.querySelector(".cart-close");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCountEls = document.querySelectorAll(".cart-count");

  const checkoutWhatsAppBtn = document.getElementById("checkoutWhatsApp");
  const checkoutEmailBtn = document.getElementById("checkoutEmail");
  const customerNameInput = document.getElementById("customerName");
  const customerPhoneInput = document.getElementById("customerPhone");
  const customerAddressInput = document.getElementById("customerAddress");
  const customerNoteInput = document.getElementById("customerNote");
  const clearCartBtn = document.getElementById("clearCart");

  const topPicksPrev = document.querySelector(".top-picks-prev");
  const topPicksNext = document.querySelector(".top-picks-next");

  // --------------------------
  // 3. State
  // --------------------------
  let currentCategory = "All";
  let searchQuery = "";
  let cart = loadCart();

  const whatsappNumber = "2348033498452";
  const orderEmail = "mtekfiresafetyltd@gmail.com";

  // --------------------------
  // 4. Helpers
  // --------------------------
  function formatNaira(amount) {
    if (!amount && amount !== 0) return "Price on request";
    try {
      return "₦" + amount.toLocaleString("en-NG");
    } catch {
      return "₦" + amount;
    }
  }

  function saveCart() {
    localStorage.setItem("mtekCart", JSON.stringify(cart));
  }

  function loadCart() {
    try {
      const stored = localStorage.getItem("mtekCart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  function openCart() {
    if (!cartDrawer || !cartBackdrop) return;
    cartDrawer.classList.add("open");
    cartBackdrop.classList.add("visible");
    document.body.classList.add("no-scroll");
  }

  function closeCart() {
    if (!cartDrawer || !cartBackdrop) return;
    cartDrawer.classList.remove("open");
    cartBackdrop.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  }

  // --------------------------
  // 5. Rendering
  // --------------------------
  function getFilteredProducts() {
    return products.filter((p) => {
      const matchCategory =
        currentCategory === "All" || p.category === currentCategory;
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery) ||
        (p.description || "").toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });
  }

  function renderProducts() {
    if (!productGrid) return;
    const list = getFilteredProducts();

    if (!list.length) {
      productGrid.innerHTML =
        '<p style="color:#6b7280;font-size:0.9rem;">No products match your search/filter.</p>';
      return;
    }

    const html = list
      .map((p) => {
        return `
          <article class="product-card">
            <img src="${p.image}"
                 alt="${p.name}"
                 loading="lazy">
            <div class="product-card-body">
              <h3 class="product-card-title">${p.name}</h3>
              <div class="product-card-category">${p.category}</div>
              <div class="product-card-price">${formatNaira(p.price)}</div>
              <p class="product-card-desc">${p.description || ""}</p>
              <div class="product-card-footer">
                <button
                  class="btn btn-primary btn-small add-to-cart"
                  data-id="${p.id}">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    productGrid.innerHTML = html;
  }

  function renderTopPicks() {
    if (!topPicksTrack) return;
    const topPicks = products.filter((p) => p.featured);

    const html = topPicks
      .map((p) => {
        return `
          <article class="top-pick-card">
            <img src="${p.image}"
                 alt="${p.name}"
                 loading="lazy">
            <div class="top-pick-body">
              <h3 class="top-pick-title">${p.name}</h3>
              <div class="top-pick-price">${formatNaira(p.price)}</div>
              <p>${p.description || ""}</p>
              <button
                class="btn btn-primary btn-small add-to-cart"
                data-id="${p.id}">
                Add to Cart
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    topPicksTrack.innerHTML = html;
  }

  function renderCart() {
    if (!cartItemsContainer || !cartTotalEl) return;

    if (!cart.length) {
      cartItemsContainer.innerHTML =
        '<p style="font-size:0.9rem;color:#6b7280;">Your cart is empty.</p>';
      cartTotalEl.textContent = "₦0";
      cartCountEls.forEach((el) => (el.textContent = "0"));
      return;
    }

    let total = 0;
    const html = cart
      .map((item) => {
        const lineTotal = (item.price || 0) * item.qty;
        total += lineTotal;
        return `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
              <p class="cart-item-title">${item.name}</p>
              <p class="cart-item-meta">${formatNaira(
                item.price
              )} × ${item.qty}</p>
            </div>
            <div class="cart-item-actions">
              <div class="cart-qty-controls">
                <button class="cart-qty-btn cart-qty-dec" type="button">-</button>
                <span class="cart-qty-value">${item.qty}</span>
                <button class="cart-qty-btn cart-qty-inc" type="button">+</button>
              </div>
              <button class="cart-remove-btn" type="button">Remove</button>
            </div>
          </div>
        `;
      })
      .join("");

    cartItemsContainer.innerHTML = html;
    cartTotalEl.textContent = formatNaira(total);
    cartCountEls.forEach((el) => (el.textContent = String(cart.length)));
  }

  // --------------------------
  // 6. Cart operations
  // --------------------------
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existing = cart.find((item) => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }
    saveCart();
    renderCart();
    openCart();
  }

  function updateCartQty(productId, delta) {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((i) => i.id !== productId);
    }
    saveCart();
    renderCart();
  }

  function removeCartItem(productId) {
    cart = cart.filter((i) => i.id !== productId);
    saveCart();
    renderCart();
  }

  // --------------------------
  // 7. Filters & search
  // --------------------------
  if (categoryFilters) {
    categoryFilters.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const category = btn.getAttribute("data-category");
      if (!category) return;
      currentCategory = category;

      categoryFilters
        .querySelectorAll(".chip")
        .forEach((chip) => chip.classList.remove("chip-active"));
      btn.classList.add("chip-active");

      renderProducts();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      renderProducts();
    });
  }

  // --------------------------
  // 8. Event delegation for Add to Cart
  // --------------------------
  if (productGrid) {
    productGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".add-to-cart");
      if (!btn) return;
      const id = btn.getAttribute("data-id");
      if (id) addToCart(id);
    });
  }

  if (topPicksTrack) {
    topPicksTrack.addEventListener("click", (e) => {
      const btn = e.target.closest(".add-to-cart");
      if (!btn) return;
      const id = btn.getAttribute("data-id");
      if (id) addToCart(id);
    });
  }

  // --------------------------
  // 9. Cart drawer events
  // --------------------------
  if (openCartButtons.length && cartDrawer && cartBackdrop) {
    openCartButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openCart();
      })
    );

    cartBackdrop.addEventListener("click", closeCart);
  }

  if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCart);
  }

  if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", (e) => {
      const itemEl = e.target.closest(".cart-item");
      if (!itemEl) return;
      const id = itemEl.getAttribute("data-id");
      if (!id) return;

      if (e.target.classList.contains("cart-qty-inc")) {
        updateCartQty(id, 1);
      } else if (e.target.classList.contains("cart-qty-dec")) {
        updateCartQty(id, -1);
      } else if (e.target.classList.contains("cart-remove-btn")) {
        removeCartItem(id);
      }
    });
  }

  // --------------------------
  // 10. Top picks carousel nav
  // --------------------------
  if (topPicksTrack && topPicksPrev && topPicksNext) {
    topPicksPrev.addEventListener("click", () => {
      topPicksTrack.scrollBy({ left: -280, behavior: "smooth" });
    });
    topPicksNext.addEventListener("click", () => {
      topPicksTrack.scrollBy({ left: 280, behavior: "smooth" });
    });
  }

  // --------------------------
  // 11. Checkout (WhatsApp & Email) + Clear cart
  // --------------------------
  function buildOrderSummary() {
    if (!cart.length) return "";

    let text = "M-Tek Fire & Safety Ltd - Online Order\n\n";
    text += "Items:\n";
    cart.forEach((item, index) => {
      const lineTotal = (item.price || 0) * item.qty;
      text += `${index + 1}. ${item.name} (x${item.qty}) - ${formatNaira(
        item.price
      )} each, ${formatNaira(lineTotal)} total\n`;
    });

    const total = cart.reduce(
      (sum, item) => sum + (item.price || 0) * item.qty,
      0
    );
    text += `\nSubtotal: ${formatNaira(total)}\n\n`;

    text += "Customer details:\n";
    text += `Name: ${customerNameInput.value.trim()}\n`;
    text += `Phone: ${customerPhoneInput.value.trim()}\n`;
    text += `Address: ${customerAddressInput.value.trim()}\n`;
    const note = customerNoteInput.value.trim();
    if (note) {
      text += `Note: ${note}\n`;
    }

    text +=
      "\nPlease confirm availability, delivery cost and payment details.\n";
    return text;
  }

  function validateCustomerForm() {
    if (!cart.length) {
      alert("Your cart is empty. Please add at least one product.");
      return false;
    }
    if (!customerNameInput.value.trim()) {
      alert("Please enter your name.");
      customerNameInput.focus();
      return false;
    }
    if (!customerPhoneInput.value.trim()) {
      alert("Please enter your phone number.");
      customerPhoneInput.focus();
      return false;
    }
    if (!customerAddressInput.value.trim()) {
      alert("Please enter your delivery address.");
      customerAddressInput.focus();
      return false;
    }
    return true;
  }

  if (checkoutWhatsAppBtn) {
    checkoutWhatsAppBtn.addEventListener("click", () => {
      if (!validateCustomerForm()) return;
      const summary = buildOrderSummary();
      const encoded = encodeURIComponent(summary);
      const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
      window.open(url, "_blank");
    });
  }

  if (checkoutEmailBtn) {
    checkoutEmailBtn.addEventListener("click", () => {
      if (!validateCustomerForm()) return;
      const summary = buildOrderSummary();
      const subject = encodeURIComponent("New Order – M-Tek Online Shop");
      const body = encodeURIComponent(summary);
      const mailto = `mailto:${encodeURIComponent(
        orderEmail
      )}?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (!cart.length) {
        alert("Your cart is already empty.");
        return;
      }
      if (confirm("Clear all items from your cart?")) {
        cart = [];
        saveCart();
        renderCart();
      }
    });
  }

  // --------------------------
  // 12. Initial render
  // --------------------------
  renderTopPicks();
  renderProducts();
  renderCart();
});
