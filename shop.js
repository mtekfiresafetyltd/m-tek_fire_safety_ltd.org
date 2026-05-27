document.addEventListener("DOMContentLoaded", () => {
  // --------------------------
  // 1. Product data (100 items)
  // --------------------------
  const products = [
    // FIRE 
    {
        id: "F001",
        name: "Box for Breaching Inlet",
        category: "Fire",
        price: 185000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Storage box for fire hydrant breaching inlet.",
        featured: false
    },
    {
        id: "F002",
        name: "Box for 6kg Fire Extinguisher",
        category: "Fire",
        price: 65000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heavy duty storage box for 6kg fire extinguishers.",
        featured: false
    },
    {
        id: "F003",
        name: "Box for 9kg Fire Extinguisher",
        category: "Fire",
        price: 65000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heavy duty storage box for 9kg fire extinguishers.",
        featured: false
    },
    {
        id: "F004",
        name: "Box for Flame Fighting Hose (Bajik)",
        category: "Fire",
        price: 95000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Storage box for Bajik flame fighting hoses.",
        featured: false
    },
    {
        id: "F005",
        name: "Box for Flame Fighting Hose (Stangoz)",
        category: "Fire",
        price: 92000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Storage box for Stangoz flame fighting hoses.",
        featured: false
    },
    {
        id: "F006",
        name: "Box for Flame Fighting Hose (Bryk)",
        category: "Fire",
        price: 98000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Storage box for Bryk flame fighting hoses.",
        featured: false
    },
    {
        id: "F007",
        name: "Box for Flame Fighting Hose (Double Bajik)",
        category: "Fire",
        price: 110000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Storage box for double Bajik flame fighting hoses.",
        featured: false
    },
    {
        id: "F008",
        name: "Breathing Apparatus",
        category: "Fire",
        price: 350000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Professional breathing apparatus for firefighters.",
        featured: true
    },
    {
        id: "F009",
        name: "CO2 2kg Angus",
        category: "Fire",
        price: 32000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2kg Carbon Dioxide fire extinguisher (Angus).",
        featured: true
    },
    {
        id: "F010",
        name: "CO2 3kg Bajik",
        category: "Fire",
        price: 38000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3kg CO2 fire extinguisher (Bajik).",
        featured: false
    },
    {
        id: "F011",
        name: "CO2 5kg Bajik II",
        category: "Fire",
        price: 45000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5kg CO2 fire extinguisher (Bajik II).",
        featured: false
    },
    {
        id: "F012",
        name: "CO2 5kg Angus II",
        category: "Fire",
        price: 46500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5kg CO2 fire extinguisher (Angus II).",
        featured: true
    },
    {
        id: "F013",
        name: "CO2 9kg Angus II",
        category: "Fire",
        price: 130000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg CO2 fire extinguisher (Angus II).",
        featured: false
    },
    {
        id: "F014",
        name: "DCP 1kg Bajik",
        category: "Fire",
        price: 11500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1kg Dry Chemical Powder fire extinguisher (Bajik).",
        featured: false
    },
    {
        id: "F015",
        name: "DCP 2kg Bajik",
        category: "Fire",
        price: 20500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2kg DCP fire extinguisher (Bajik).",
        featured: false
    },
    {
        id: "F016",
        name: "DCP 6kg Bajik I",
        category: "Fire",
        price: 30000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6kg Dry Chemical Powder fire extinguisher (Bajik I).",
        featured: true
    },
    {
        id: "F017",
        name: "DCP 6kg Angus II",
        category: "Fire",
        price: 26000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6kg DCP fire extinguisher (Angus II).",
        featured: true
    },
    {
        id: "F018",
        name: "DCP 9kg Bajik I",
        category: "Fire",
        price: 38000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg DCP fire extinguisher (Bajik I).",
        featured: true
    },
    {
        id: "F019",
        name: "DCP 9kg Angus II",
        category: "Fire",
        price: 36000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg DCP fire extinguisher (Angus II).",
        featured: true
    },
    {
        id: "F020",
        name: "DCP 25kg Bajik II",
        category: "Fire",
        price: 170000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "25kg DCP fire extinguisher (Bajik II).",
        featured: false
    },
    {
        id: "F021",
        name: "DCP 50kg Angus II",
        category: "Fire",
        price: 250000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50kg DCP fire extinguisher (Angus II).",
        featured: false
    },
    {
        id: "F022",
        name: "Fire Ball AFO/Elide",
        category: "Fire",
        price: 20000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Automatic fire suppression ball.",
        featured: true
    },
    {
        id: "F023",
        name: "Fire Blanket (1.2 x 1.8) Plastic Container",
        category: "Fire",
        price: 20000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire blanket in plastic container (1.2m x 1.8m).",
        featured: false
    },
    {
        id: "F024",
        name: "Fire Hose Reel (Stangoz)",
        category: "Fire",
        price: 185000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel (Stangoz brand).",
        featured: true
    },
    {
        id: "F025",
        name: "Fire Hose Reel and Box (Stangoz)",
        category: "Fire",
        price: 375000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel with cabinet/box (Stangoz).",
        featured: false
    },
    {
        id: "F026",
        name: "Fireman Suit (Bulldozer)",
        category: "Fire",
        price: 450000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Professional firefighter suit.",
        featured: true
    },
    {
        id: "F027",
        name: "Hanger (L Shape Silver Cylindrical Tip)",
        category: "Fire",
        price: 1500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire extinguisher wall hanger (L shape).",
        featured: false
    },
    {
        id: "F028",
        name: "Landing Valve",
        category: "Fire",
        price: 95000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hydrant landing valve.",
        featured: false
    },
    {
        id: "F029",
        name: "Manometre (Pressure Gauge)",
        category: "Fire",
        price: 1500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Pressure gauge for fire extinguishers.",
        featured: false
    },
    {
        id: "F030",
        name: "Smoke Detector",
        category: "Fire",
        price: 8500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Photoelectric smoke detector with alarm.",
        featured: true
    },
    {
        id: "F031",
        name: "CO2 3kg Bryk I",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3kg CO2 fire extinguisher (Bryk I).",
        featured: false
    },
    {
        id: "F032",
        name: "CO2 5kg Bryk I",
        category: "Fire",
        price: 55000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5kg CO2 fire extinguisher (Bryk I).",
        featured: false
    },
    {
        id: "F033",
        name: "CO2 25kg Flamesense",
        category: "Fire",
        price: 215000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "25kg CO2 fire extinguisher (Flamesense).",
        featured: false
    },
    {
        id: "F034",
        name: "CO2 50kg",
        category: "Fire",
        price: 250000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50kg CO2 fire extinguisher.",
        featured: false
    },
    {
        id: "F035",
        name: "DCP 1kg Anl Gold/Kbi Gold",
        category: "Fire",
        price: 8500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1kg DCP fire extinguisher (ANL Gold).",
        featured: false
    },
    {
        id: "F036",
        name: "DCP 6kg Bryk I",
        category: "Fire",
        price: 27000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6kg DCP fire extinguisher (Bryk I).",
        featured: false
    },
    {
        id: "F037",
        name: "DCP 9kg Fire Fighter/Unique",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg DCP fire extinguisher (Fire Fighter).",
        featured: false
    },
    {
        id: "F038",
        name: "DCP 10kg Angus II",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "10kg DCP fire extinguisher (Angus II).",
        featured: false
    },
    {
        id: "F039",
        name: "DCP 12kg M-Tek Product",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "12kg DCP fire extinguisher (M-Tek).",
        featured: false
    },
    {
        id: "F040",
        name: "DCP 25kg Bajik II",
        category: "Fire",
        price: 170000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "25kg DCP fire extinguisher (Bajik II).",
        featured: false
    },
    {
        id: "F041",
        name: "DCP 50kg Fire Killer I",
        category: "Fire",
        price: 380000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50kg DCP fire extinguisher (Fire Killer).",
        featured: false
    },
    {
        id: "F042",
        name: "Fire Ball AFO/Elide",
        category: "Fire",
        price: 20000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Automatic fire suppression ball AFO/Elide.",
        featured: true
    },
    {
        id: "F043",
        name: "Fire Blanket (1.0 x 1.0) Plastic Container",
        category: "Fire",
        price: 10000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1.0m x 1.0m fire blanket in plastic container.",
        featured: false
    },
    {
        id: "F044",
        name: "Fire Blanket (1.2 x 1.2) Plastic Container",
        category: "Fire",
        price: 15000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1.2m x 1.2m fire blanket in plastic container.",
        featured: false
    },
    {
        id: "F045",
        name: "Fire Bucket (Small)",
        category: "Fire",
        price: 5500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Small red fire bucket.",
        featured: false
    },
    {
        id: "F046",
        name: "Fire Hose Reel [Bryk]",
        category: "Fire",
        price: 205000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel (Bryk brand).",
        featured: false
    },
    {
        id: "F047",
        name: "Fire Hose Reel [Naffco]",
        category: "Fire",
        price: 370000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel (Naffco brand).",
        featured: false
    },
    {
        id: "F048",
        name: "Fire Hose Reel and Box (Bajik)",
        category: "Fire",
        price: 390000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel complete with box (Bajik).",
        featured: false
    },
    {
        id: "F049",
        name: "Fireman Suit (Bulldozer)",
        category: "Fire",
        price: 450000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full firefighter suit (Bulldozer).",
        featured: true
    },
    {
        id: "F050",
        name: "Fire Tunic (Bajik)",
        category: "Fire",
        price: 180000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Firefighter tunic (Bajik).",
        featured: false
    },
    {
        id: "F051",
        name: "Foam 6 Litres (Mixed Brands)",
        category: "Fire",
        price: 35000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6 litre foam fire extinguisher.",
        featured: false
    },
    {
        id: "F052",
        name: "Foam 50 Litre",
        category: "Fire",
        price: 264000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50 litre foam extinguisher.",
        featured: false
    },
    {
        id: "F053",
        name: "Hand Control Nozzle (Metal)",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Metal hand control fire nozzle.",
        featured: false
    },
    {
        id: "F054",
        name: "Hanger (L Shape Black Fabricated)",
        category: "Fire",
        price: 1000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "L-shape fire extinguisher hanger.",
        featured: false
    },
    {
        id: "F055",
        name: "Landing Valve",
        category: "Fire",
        price: 95000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hydrant landing valve.",
        featured: false
    },
    {
        id: "F056",
        name: "Maintenance Tag (Multiple Colour)",
        category: "Fire",
        price: 100,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire equipment maintenance tag.",
        featured: false
    },
    {
        id: "F057",
        name: "Manometre (Pressure Gauge)",
        category: "Fire",
        price: 1500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire extinguisher pressure gauge.",
        featured: false
    },
    {
        id: "F058",
        name: "Safety Pin",
        category: "Fire",
        price: 100,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire extinguisher safety pin.",
        featured: false
    },
    {
        id: "F059",
        name: "Strap (Fire Extinguisher)",
        category: "Fire",
        price: 1000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire extinguisher carrying strap.",
        featured: false
    },
    {
        id: "F060",
        name: "Valve DCP (9kg/6kg)",
        category: "Fire",
        price: 4500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Replacement valve for 6kg/9kg DCP extinguishers.",
        featured: false
    },
    {
        id: "F061",
        name: "CO2 3kg Stangoz I",
        category: "Fire",
        price: 39500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3kg CO2 fire extinguisher (Stangoz I).",
        featured: false
    },
    {
        id: "F062",
        name: "CO2 5kg Extintore",
        category: "Fire",
        price: 45000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5kg CO2 fire extinguisher (Extintore).",
        featured: false
    },
    {
        id: "F063",
        name: "Coupline 3\" x 2\" Outside Thread",
        category: "Fire",
        price: 18000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose coupling 3\" x 2\" outside thread.",
        featured: false
    },
    {
        id: "F064",
        name: "DCP 6kg Extintore II",
        category: "Fire",
        price: 27000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6kg DCP fire extinguisher (Extintore II).",
        featured: false
    },
    {
        id: "F065",
        name: "DCP 9kg Bizland I",
        category: "Fire",
        price: 37500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg DCP fire extinguisher (Bizland I).",
        featured: false
    },
    {
        id: "F066",
        name: "DCP 25kg Bajik II",
        category: "Fire",
        price: 170000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "25kg DCP fire extinguisher (Bajik II).",
        featured: false
    },
    {
        id: "F067",
        name: "DCP 50kg Angus III",
        category: "Fire",
        price: 200000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50kg DCP fire extinguisher (Angus III).",
        featured: false
    },
    {
        id: "F068",
        name: "Dry Chemical Powder (Per KG)",
        category: "Fire",
        price: 1500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Dry chemical powder refill per kg.",
        featured: false
    },
    {
        id: "F069",
        name: "Fire Blanket (1.8 x 1.8) Plastic Container",
        category: "Fire",
        price: 25000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Large 1.8m x 1.8m fire blanket in plastic container.",
        featured: false
    },
    {
        id: "F070",
        name: "Fire Bucket (Big)",
        category: "Fire",
        price: 5500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Large red fire bucket.",
        featured: false
    },
    {
        id: "F071",
        name: "Fire Extinguisher Labels",
        category: "Fire",
        price: 200,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Labels for DCP 6kg/9kg and CO2 extinguishers.",
        featured: false
    },
    {
        id: "F072",
        name: "Fire Hose (2.5\" 30m Red Canvas)",
        category: "Fire",
        price: 125000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2.5 inch 30m fire hose with adaptors.",
        featured: false
    },
    {
        id: "F073",
        name: "Fire Hose (Duraline 2.5\" 30m)",
        category: "Fire",
        price: 169000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High pressure Duraline fire hose 2.5 inch.",
        featured: false
    },
    {
        id: "F074",
        name: "Fire Hose Reel and Box (Capital Tell)",
        category: "Fire",
        price: 350000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel complete with box.",
        featured: false
    },
    {
        id: "F075",
        name: "Flame Fighting Hose Adaptor 3\"x2\"",
        category: "Fire",
        price: 15000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Male/Female fire hose adaptor.",
        featured: false
    },
    {
        id: "F076",
        name: "Foam 9 Litres Angus",
        category: "Fire",
        price: 55000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9 litre foam fire extinguisher (Angus).",
        featured: false
    },
    {
        id: "F077",
        name: "Foam Compound 200 Litre",
        category: "Fire",
        price: 145000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "200 litre foam concentrate.",
        featured: false
    },
    {
        id: "F078",
        name: "Hand Control Nozzle (Metal/Plastic)",
        category: "Fire",
        price: 27500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Triple purpose branch nozzle.",
        featured: false
    },
    {
        id: "F079",
        name: "Hanger (Round Head Red)",
        category: "Fire",
        price: 2000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Round head fire extinguisher hanger.",
        featured: false
    },
    {
        id: "F080",
        name: "Hanger (Side Type Silver)",
        category: "Fire",
        price: 1500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Side type fire extinguisher hanger.",
        featured: false
    },
    {
        id: "F081",
        name: "Horn (5kg CO2 China)",
        category: "Fire",
        price: 6500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Discharge horn for 5kg CO2 extinguisher.",
        featured: false
    },
    {
        id: "F082",
        name: "Hose (6/9kg DCP Hose)",
        category: "Fire",
        price: 3500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Replacement hose for 6kg/9kg DCP extinguishers.",
        featured: false
    },
    {
        id: "F083",
        name: "Hydrant (Pillar/Pedestrian)",
        category: "Fire",
        price: 400000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Above ground fire hydrant.",
        featured: false
    },
    {
        id: "F084",
        name: "Landing Valve",
        category: "Fire",
        price: 95000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire landing valve.",
        featured: false
    },
    {
        id: "F085",
        name: "Nipple 1kg/2kg DCP",
        category: "Fire",
        price: 500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "DCP extinguisher nipple.",
        featured: false
    },
    {
        id: "F086",
        name: "Spray Jet (Triple Purpose Branch)",
        category: "Fire",
        price: 70000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Triple purpose fire nozzle.",
        featured: false
    },
    {
        id: "F087",
        name: "Valve CO2 (2kg, 3kg & 5kg)",
        category: "Fire",
        price: 9000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "CO2 extinguisher valve.",
        featured: false
    },
    {
        id: "F088",
        name: "Valve DCP 25kg/50kg",
        category: "Fire",
        price: 25000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Valve for large 25kg/50kg DCP extinguishers.",
        featured: false
    },
    {
        id: "F089",
        name: "Water 9 Litre Angus",
        category: "Fire",
        price: 50000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9 litre water fire extinguisher (Angus).",
        featured: false
    },
    {
        id: "F090",
        name: "Water Sprinkler Heads",
        category: "Fire",
        price: 4000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Standard fire sprinkler head.",
        featured: false
    },
    {
        id: "F091",
        name: "CO2 3kg Bizland I",
        category: "Fire",
        price: 38000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3kg CO2 fire extinguisher (Bizland I).",
        featured: false
    },
    {
        id: "F092",
        name: "CO2 5kg Capital Tell",
        category: "Fire",
        price: 45000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5kg CO2 fire extinguisher (Capital Tell).",
        featured: false
    },
    {
        id: "F093",
        name: "CO2 9kg Bajik I",
        category: "Fire",
        price: 135000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg CO2 fire extinguisher (Bajik I).",
        featured: false
    },
    {
        id: "F094",
        name: "DCP 1kg Visa",
        category: "Fire",
        price: 7000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1kg DCP fire extinguisher (Visa).",
        featured: false
    },
    {
        id: "F095",
        name: "DCP 6kg Automatic (Bajik)",
        category: "Fire",
        price: 60000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6kg Automatic DCP fire extinguisher (Bajik).",
        featured: false
    },
    {
        id: "F096",
        name: "DCP 9kg Extintore",
        category: "Fire",
        price: 38000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg DCP fire extinguisher (Extintore).",
        featured: false
    },
    {
        id: "F097",
        name: "DCP 25kg Flamesense",
        category: "Fire",
        price: 155000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "25kg DCP fire extinguisher (Flamesense).",
        featured: false
    },
    {
        id: "F098",
        name: "DCP 50kg Poztan",
        category: "Fire",
        price: 240000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50kg DCP fire extinguisher (Poztan).",
        featured: false
    },
    {
        id: "F099",
        name: "Fire Blanket (1.0 x 1.0) Leather Container",
        category: "Fire",
        price: 10000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire blanket in leather container (1.0m x 1.0m).",
        featured: false
    },
    {
        id: "F100",
        name: "Fire Blanket Chubb (3ft x 3ft)",
        category: "Fire",
        price: 25000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Chubb fire blanket 3ft x 3ft.",
        featured: false
    },
    {
        id: "F101",
        name: "Fire Hose Reel (Bajik)",
        category: "Fire",
        price: 190000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel (Bajik brand).",
        featured: false
    },
    {
        id: "F102",
        name: "Fire Hose Reel and Box (Fire Killer)",
        category: "Fire",
        price: 345000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel with box (Fire Killer).",
        featured: false
    },
    {
        id: "F103",
        name: "Fire Hose Reel and Box (Angus)",
        category: "Fire",
        price: 400000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel with box (Angus).",
        featured: false
    },
    {
        id: "F104",
        name: "Hose (1.5\" Canvas with Adaptors)",
        category: "Fire",
        price: 70000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1.5 inch canvas fire hose with complete adaptors.",
        featured: false
    },
    {
        id: "F105",
        name: "Hose (Duraline 1.5\" 30m)",
        category: "Fire",
        price: 90000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Duraline fire hose 1.5 inch 30m.",
        featured: false
    },
    {
        id: "F106",
        name: "Hose 50kg DCP",
        category: "Fire",
        price: 25000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High pressure hose for 50kg DCP extinguisher.",
        featured: false
    },
    {
        id: "F107",
        name: "Hydrant Key & Bar (Aluminium)",
        category: "Fire",
        price: 0,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hydrant key and bar set.",
        featured: false
    },
    {
        id: "F108",
        name: "Hydrant Stand Pipe (Aluminium)",
        category: "Fire",
        price: 0,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Aluminium hydrant stand pipe.",
        featured: false
    },
    {
        id: "F109",
        name: "Spaceman (Automatic Fire Extinguisher)",
        category: "Fire",
        price: 85000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Automatic fire extinguisher (Spaceman).",
        featured: false
    },
    {
        id: "F110",
        name: "Valve DCP 25kg/50kg Steering",
        category: "Fire",
        price: 15000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Steering type valve for large DCP extinguishers.",
        featured: false
    },
    {
        id: "F111",
        name: "Water Sprinkler Heads 3/4\"",
        category: "Fire",
        price: 6000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3/4 inch fire sprinkler head.",
        featured: false
    },
    {
        id: "F112",
        name: "Water Sprinkler Heads Casing",
        category: "Fire",
        price: 1500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Casing for fire sprinkler heads.",
        featured: false
    },
    {
        id: "F113",
        name: "Box for Flame Fighting Hose (Double Bajik)",
        category: "Fire",
        price: 110000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Storage box for double Bajik flame fighting hoses.",
        featured: false
    },
    {
        id: "F114",
        name: "CO2 3kg Angus",
        category: "Fire",
        price: 35000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3kg CO2 fire extinguisher (Angus).",
        featured: false
    },
    {
        id: "F115",
        name: "CO2 5kg Flame Point",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5kg CO2 fire extinguisher (Flame Point).",
        featured: false
    },
    {
        id: "F116",
        name: "DCP 1kg PJV",
        category: "Fire",
        price: 7000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1kg DCP fire extinguisher (PJV).",
        featured: false
    },
    {
        id: "F117",
        name: "DCP 2kg ECL Gold",
        category: "Fire",
        price: 16000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2kg DCP fire extinguisher (ECL Gold).",
        featured: false
    },
    {
        id: "F118",
        name: "DCP 6kg Bizland",
        category: "Fire",
        price: 35000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "6kg DCP fire extinguisher (Bizland).",
        featured: false
    },
    {
        id: "F119",
        name: "DCP 9kg Keenstop I",
        category: "Fire",
        price: 40000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "9kg DCP fire extinguisher (Keenstop).",
        featured: false
    },
    {
        id: "F120",
        name: "DCP 50kg Flame Sense",
        category: "Fire",
        price: 200000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "50kg DCP fire extinguisher (Flame Sense).",
        featured: false
    },
    {
        id: "F121",
        name: "Fire Blanket (1.2 x 1.2) Leather Container",
        category: "Fire",
        price: 14000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire blanket in leather container.",
        featured: false
    },
    {
        id: "F122",
        name: "Fire Hose Reel Cabinet SFPS",
        category: "Fire",
        price: 340000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire hose reel with cabinet.",
        featured: false
    },
    {
        id: "F123",
        name: "Horn (2/3kg CO2) Short Horn",
        category: "Fire",
        price: 4000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Short discharge horn for CO2 extinguishers.",
        featured: false
    },
    {
        id: "F124",
        name: "Hose (5kg CO2 London Use)",
        category: "Fire",
        price: 4500,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hose for 5kg CO2 extinguisher.",
        featured: false
    },
    {
        id: "F125",
        name: "Hose (Duraline 2.5\" 30m 10Bar)",
        category: "Fire",
        price: 105000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Duraline fire hose 2.5 inch 30m.",
        featured: false
    },
    {
        id: "F126",
        name: "Hydrant (Underground)",
        category: "Fire",
        price: 0,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Underground fire hydrant.",
        featured: false
    },
    {
        id: "F127",
        name: "Water Sprinkler Heads 3/4\"",
        category: "Fire",
        price: 6000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a237c1e0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire sprinkler heads.",
        featured: false
    },
    
    // SAFETY 
    {
        id: "S001",
        name: "Aviation Solar Powered Beacon",
        category: "Safety",
        price: 20000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Solar powered aviation obstruction beacon for towers.",
        featured: true
    },
    {
        id: "S002",
        name: "Caution Cone (50cm)",
        category: "Safety",
        price: 18000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High visibility traffic caution cone 50cm.",
        featured: true
    },
    {
        id: "S003",
        name: "Body Harness",
        category: "Safety",
        price: 25000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full body safety harness for working at height.",
        featured: false
    },
    {
        id: "S004",
        name: "Safety Helmet",
        category: "Safety",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Industrial hard hat safety helmet.",
        featured: true
    },
    {
        id: "S005",
        name: "Reflective Jacket",
        category: "Safety",
        price: 12000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High visibility reflective safety jacket.",
        featured: false
    },
    {
        id: "S006",
        name: "Safety Boots",
        category: "Safety",
        price: 18500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Steel toe industrial safety boots.",
        featured: false
    },
    {
        id: "S007",
        name: "Ear Plugs",
        category: "Safety",
        price: 1500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Disposable ear plugs for noise protection.",
        featured: false
    },
    {
        id: "S008",
        name: "Safety Goggles",
        category: "Safety",
        price: 4500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Anti-fog safety goggles.",
        featured: false
    },
    {
        id: "S009",
        name: "First Aid Kit",
        category: "Safety",
        price: 15000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive workplace first aid kit.",
        featured: true
    },
    {
        id: "S010",
        name: "Fire Exit Sign",
        category: "Safety",
        price: 6500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Photoluminescent fire exit sign.",
        featured: false
    },
    {
        id: "S011",
        name: "Safety Gloves",
        category: "Safety",
        price: 3500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Cut resistant industrial safety gloves.",
        featured: false
    },
    {
        id: "S012",
        name: "Dust Mask",
        category: "Safety",
        price: 1200,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "N95 disposable dust mask.",
        featured: false
    },
    {
        id: "S013",
        name: "Warning Tape",
        category: "Safety",
        price: 4500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Caution and danger barricade tape.",
        featured: false
    },
    {
        id: "S014",
        name: "Emergency Eye Wash Station",
        category: "Safety",
        price: 28000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Portable emergency eye wash station.",
        featured: false
    },
    {
        id: "S015",
        name: "Safety Harness Lanyard",
        category: "Safety",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Shock absorbing safety lanyard.",
        featured: false
    },
    {
        id: "S016",
        name: "Ear Muffs",
        category: "Safety",
        price: 6500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Noise protection earmuffs.",
        featured: false
    },
    {
        id: "S017",
        name: "Face Shield",
        category: "Safety",
        price: 7500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Clear face shield for impact protection.",
        featured: false
    },
    {
        id: "S018",
        name: "Safety Vest",
        category: "Safety",
        price: 9500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High visibility safety vest.",
        featured: false
    },
    {
        id: "S019",
        name: "Hard Hat Liner",
        category: "Safety",
        price: 3500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Winter liner for safety helmet.",
        featured: false
    },
    {
        id: "S020",
        name: "Traffic Cone 75cm",
        category: "Safety",
        price: 25000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Large traffic cone 75cm.",
        featured: false
    },
    {
        id: "S021",
        name: "Spill Kit",
        category: "Safety",
        price: 45000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Chemical spill containment kit.",
        featured: false
    },
    {
        id: "S022",
        name: "Lockout Tagout Kit",
        category: "Safety",
        price: 32000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Lockout Tagout (LOTO) safety kit.",
        featured: false
    },
    {
        id: "S023",
        name: "Safety Sign Board",
        category: "Safety",
        price: 8000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Various safety warning sign boards.",
        featured: false
    },
    {
        id: "S024",
        name: "Respiratory Mask",
        category: "Safety",
        price: 12500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Half face respiratory mask.",
        featured: false
    },
    {
        id: "S025",
        name: "Fall Arrest Harness",
        category: "Safety",
        price: 28000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full body fall arrest harness.",
        featured: false
    },
    {
        id: "S026",
        name: "Welding Helmet",
        category: "Safety",
        price: 18500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Auto darkening welding helmet.",
        featured: false
    },
    {
        id: "S027",
        name: "Knee Pads",
        category: "Safety",
        price: 6500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heavy duty knee protection pads.",
        featured: false
    },
    {
        id: "S028",
        name: "Safety Harness Full Set",
        category: "Safety",
        price: 32000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complete fall protection harness set.",
        featured: false
    },
    {
        id: "S029",
        name: "Caution Wet Floor Sign",
        category: "Safety",
        price: 4500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A-frame wet floor caution sign.",
        featured: false
    },
    {
        id: "S030",
        name: "Chemical Gloves",
        category: "Safety",
        price: 4200,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Nitrile chemical resistant gloves.",
        featured: false
    },
    {
        id: "S031",
        name: "Road Barrier",
        category: "Safety",
        price: 35000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Plastic road barrier / traffic barrier.",
        featured: false
    },
    {
        id: "S032",
        name: "Emergency Torch Light",
        category: "Safety",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Rechargeable emergency torch.",
        featured: false
    },
    {
        id: "S033",
        name: "Safety Ear Defenders",
        category: "Safety",
        price: 7200,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Industrial earmuffs.",
        featured: false
    },
    {
        id: "S034",
        name: "Fire Action Sign",
        category: "Safety",
        price: 5500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire action notice sign.",
        featured: false
    },
    {
        id: "S035",
        name: "Lifting Belt",
        category: "Safety",
        price: 9500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Back support lifting belt.",
        featured: false
    },
    {
        id: "S036",
        name: "Anti-Slip Mat",
        category: "Safety",
        price: 12000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Industrial anti-slip safety mat.",
        featured: false
    },
    {
        id: "S037",
        name: "Emergency Shower",
        category: "Safety",
        price: 125000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Emergency safety shower station.",
        featured: false
    },
    {
        id: "S038",
        name: "Gas Detector",
        category: "Safety",
        price: 45000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Portable multi-gas detector.",
        featured: true
    },
    {
        id: "S039",
        name: "Safety Rope",
        category: "Safety",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High strength safety rope.",
        featured: false
    },
    {
        id: "S040",
        name: "PPE Kit",
        category: "Safety",
        price: 28000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complete personal protective equipment kit.",
        featured: true
    },
    {
        id: "S041",
        name: "Caution Board",
        category: "Safety",
        price: 6500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Various caution safety boards.",
        featured: false
    },
    {
        id: "S042",
        name: "Reflective Vest",
        category: "Safety",
        price: 9500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High visibility reflective vest.",
        featured: false
    },
    {
        id: "S043",
        name: "Safety Harness Kit",
        category: "Safety",
        price: 42000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full safety harness with lanyard kit.",
        featured: false
    },
    {
        id: "S044",
        name: "Noise Meter",
        category: "Safety",
        price: 65000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Digital sound level meter.",
        featured: false
    },
    {
        id: "S045",
        name: "First Aid Box Large",
        category: "Safety",
        price: 25000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Large industrial first aid box.",
        featured: false
    },
    {
        id: "S046",
        name: "Traffic Barrier",
        category: "Safety",
        price: 28000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heavy duty traffic road barrier.",
        featured: false
    },
    {
        id: "S047",
        name: "Safety Torch",
        category: "Safety",
        price: 6500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Rechargeable LED safety torch light.",
        featured: false
    },
    {
        id: "S048",
        name: "Welding Gloves",
        category: "Safety",
        price: 5500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heat resistant welding gloves.",
        featured: false
    },
    {
        id: "S049",
        name: "Evacuation Chair",
        category: "Safety",
        price: 185000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Emergency evacuation chair.",
        featured: false
    },
    {
        id: "S050",
        name: "Safety Shower Sign",
        category: "Safety",
        price: 5500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Emergency safety shower sign.",
        featured: false
    },
    {
        id: "S051",
        name: "Anti Fatigue Mat",
        category: "Safety",
        price: 18500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Anti-fatigue standing mat.",
        featured: false
    },
    {
        id: "S052",
        name: "Gas Cylinder Chain",
        category: "Safety",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Cylinder securing chain.",
        featured: false
    },
    {
        id: "S053",
        name: "Emergency Eye Wash Sign",
        category: "Safety",
        price: 5500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Emergency eye wash station sign.",
        featured: false
    },
    {
        id: "S054",
        name: "Reflective Arm Band",
        category: "Safety",
        price: 2500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High visibility reflective armband.",
        featured: false
    },
    {
        id: "S055",
        name: "Safety Lock",
        category: "Safety",
        price: 3200,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Safety padlock for lockout tagout.",
        featured: false
    },
    {
        id: "S056",
        name: "Spill Pallet",
        category: "Safety",
        price: 95000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Chemical spill containment pallet.",
        featured: false
    },
    {
        id: "S057",
        name: "Fire Blanket",
        category: "Safety",
        price: 12000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fire blanket for emergency use.",
        featured: false
    },
    {
        id: "S058",
        name: "Caution Tape Dispenser",
        category: "Safety",
        price: 8500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Barricade tape dispenser.",
        featured: false
    },
    {
        id: "S059",
        name: "Safety Helmet with Visor",
        category: "Safety",
        price: 12500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Safety helmet with face shield.",
        featured: false
    },
    {
        id: "S060",
        name: "Emergency Response Kit",
        category: "Safety",
        price: 42000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full emergency response kit.",
        featured: true
    },
    {
        id: "S061",
        name: "Hand Sanitizer Station",
        category: "Safety",
        price: 18500,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Wall mounted hand sanitizer station.",
        featured: false
    },
    {
        id: "S062",
        name: "Safety Ladder",
        category: "Safety",
        price: 65000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Industrial safety ladder.",
        featured: false
    },
    {
        id: "S063",
        name: "PPE Storage Cabinet",
        category: "Safety",
        price: 95000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Safety equipment storage cabinet.",
        featured: false
    },
    {
        id: "S064",
        name: "Emergency Light",
        category: "Safety",
        price: 12500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Self-illuminating emergency exit light.",
        featured: false
    },
    {
        id: "S065",
        name: "First Aid Station",
        category: "Safety",
        price: 35000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Wall mounted first aid station.",
        featured: true
    },

//SECURITY
    {
      id: "Q001",
      name: "Handheld Metal Detector",
      category: "Security",
      price: 20000,
      image: "assets/products/metal detector.jpg",
      description: "Hand held safety.",
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
      image: "https://", 
      description: "", 
      featured : false
 
    // SOLAR
    {
        id: "L001",
        name: "1000Watts Satchet Inverter",
        category: "Solar",
        price: 45000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1000Watts portable solar power inverter (Satchet type).",
        featured: true
    },
    {
        id: "L002",
        name: "1.0 KVA Inverter (Fami-Care)",
        category: "Solar",
        price: 65000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1.0 KVA pure sine wave inverter (Fami-Care).",
        featured: true
    },
    {
        id: "L003",
        name: "1.5KVA 24Volts PSW Inverter",
        category: "Solar",
        price: 95000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "1.5KVA 24Volts Pure Sine Wave inverter.",
        featured: false
    },
    {
        id: "L004",
        name: "100AH DCB Suntest Battery",
        category: "Solar",
        price: 85000,
        image: "https://images.unsplash.com/photo-1559302501-4c2c4e5c5c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "100AH deep cycle solar battery (DCB Suntest).",
        featured: true
    },
    {
        id: "L005",
        name: "150AH DCB Suntest Battery",
        category: "Solar",
        price: 125000,
        image: "https://images.unsplash.com/photo-1559302501-4c2c4e5c5c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "150AH deep cycle solar battery (DCB Suntest).",
        featured: false
    },
    {
        id: "L006",
        name: "150AH DCB Toplight Battery",
        category: "Solar",
        price: 120000,
        image: "https://images.unsplash.com/photo-1559302501-4c2c4e5c5c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "150AH deep cycle solar battery (DCB Toplight).",
        featured: false
    },
    {
        id: "L007",
        name: "20A Charge Controller",
        category: "Solar",
        price: 8500,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "20 Amps solar charge controller.",
        featured: false
    },
    {
        id: "L008",
        name: "2200Watts 12Volts Modified Inverter",
        category: "Solar",
        price: 75000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2200Watts 12Volts modified sine wave inverter.",
        featured: false
    },
    {
        id: "L009",
        name: "3.5KVA 24Volts PSW Inverter",
        category: "Solar",
        price: 185000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3.5KVA 24Volts Pure Sine Wave inverter.",
        featured: true
    },
    {
        id: "L010",
        name: "3000Watts 24Volts Modified Inverter",
        category: "Solar",
        price: 135000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3000Watts 24Volts modified sine wave inverter.",
        featured: false
    },
    {
        id: "L011",
        name: "30A Charge Controller",
        category: "Solar",
        price: 12500,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "30 Amps solar charge controller.",
        featured: false
    },
    {
        id: "L012",
        name: "30Watts LED Solar Light",
        category: "Solar",
        price: 18500,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "30Watts LED solar street light.",
        featured: false
    },
    {
        id: "L013",
        name: "36Watts LED Solar Light",
        category: "Solar",
        price: 22000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "36Watts LED solar light.",
        featured: false
    },
    {
        id: "L014",
        name: "3Watts DC Bulb (Plastic)",
        category: "Solar",
        price: 2500,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3Watts DC solar bulb (plastic).",
        featured: false
    },
    {
        id: "L015",
        name: "3Watts DC Bulb (Metal)",
        category: "Solar",
        price: 3200,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "3Watts DC solar bulb (metal).",
        featured: false
    },
    {
        id: "L016",
        name: "40A Charge Controller",
        category: "Solar",
        price: 18500,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "40 Amps solar charge controller.",
        featured: false
    },
    {
        id: "L017",
        name: "500Watts Solar Inverter",
        category: "Solar",
        price: 35000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "500Watts 12V DC to 220V AC solar inverter.",
        featured: false
    },
    {
        id: "L018",
        name: "5Watts DC Bulb",
        category: "Solar",
        price: 1800,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "5Watts DC solar bulb.",
        featured: false
    },
    {
        id: "L019",
        name: "7Watts DC Bulb",
        category: "Solar",
        price: 2200,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "7Watts DC solar bulb.",
        featured: false
    },
    {
        id: "L020",
        name: "Solar Power Pack",
        category: "Solar",
        price: 45000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complete solar power backup pack.",
        featured: true
    },
    {
        id: "L021",
        name: "Solar Fan",
        category: "Solar",
        price: 28500,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "12V DC solar powered fan.",
        featured: false
    },
    {
        id: "L022",
        name: "100Watts Mono Solar Panel",
        category: "Solar",
        price: 45000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "100Watts monocrystalline solar panel.",
        featured: false
    },
    {
        id: "L023",
        name: "200Watts Mono Solar Panel",
        category: "Solar",
        price: 85000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "200Watts monocrystalline solar panel.",
        featured: true
    },
    {
        id: "L024",
        name: "220AH Afriipower Tubular Battery",
        category: "Solar",
        price: 185000,
        image: "https://images.unsplash.com/photo-1559302501-4c2c4e5c5c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "220AH Afriipower tubular solar battery.",
        featured: false
    },
    {
        id: "L025",
        name: "2KVA Inverter",
        category: "Solar",
        price: 145000,
        image: "https://images.unsplash.com/photo-1508514179049-0cf6d5d5c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2KVA solar power inverter.",
        featured: true
    },
    {
        id: "L026",
        name: "200AH Mono Panel Battery",
        category: "Solar",
        price: 165000,
        image: "https://images.unsplash.com/photo-1559302501-4c2c4e5c5c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "200AH solar battery compatible with mono panels.",
        featured: false
    },
    
    //HOME AUTOMATION, ALARM & SURVEILANCE
    {
        id: "H001",
        name: "Baofeng Two Way Radio BF-888",
        category: "Home Automation, Alarm & Surveillance",
        price: 19000,
        image: "https://images.unsplash.com/photo-1517420704952-d9f5bc06ec55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Professional Baofeng BF-888 two-way radio for communication.",
        featured: true
    },
    {
        id: "H002",
        name: "Battery for Baofeng Radio",
        category: "Home Automation, Alarm & Surveillance",
        price: 5000,
        image: "https://images.unsplash.com/photo-1517420704952-d9f5bc06ec55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Replacement battery for Baofeng two-way radio.",
        featured: false
    },
    {
        id: "H003",
        name: "Bell 24VDC Chloride UK",
        category: "Home Automation, Alarm & Surveillance",
        price: 15000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "24VDC fire alarm bell (Chloride UK).",
        featured: false
    },
    {
        id: "H004",
        name: "Bell 24VDC Zeta 6\"",
        category: "Home Automation, Alarm & Surveillance",
        price: 10000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "24VDC Zeta 6 inch alarm bell.",
        featured: false
    },
    {
        id: "H005",
        name: "Call Point Zeta Resettable",
        category: "Home Automation, Alarm & Surveillance",
        price: 18000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Resettable manual call point (Zeta).",
        featured: false
    },
    {
        id: "H006",
        name: "Camera Solar PTZ",
        category: "Home Automation, Alarm & Surveillance",
        price: 150000,
        image: "https://images.unsplash.com/photo-1517420704952-d9f5bc06ec55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Solar powered PTZ security camera.",
        featured: true
    },
    {
        id: "H007",
        name: "Camera Outdoor Winpossee 2.0MP",
        category: "Home Automation, Alarm & Surveillance",
        price: 22500,
        image: "https://images.unsplash.com/photo-1517420704952-d9f5bc06ec55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Outdoor 2.0MP Winpossee security camera.",
        featured: false
    },
    {
        id: "H008",
        name: "DVR Eight Channels Winpossee",
        category: "Home Automation, Alarm & Surveillance",
        price: 73600,
        image: "https://images.unsplash.com/photo-1517420704952-d9f5bc06ec55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "8-channel digital video recorder (Winpossee).",
        featured: false
    },
    {
        id: "H009",
        name: "Heat Detector Chloride UK",
        category: "Home Automation, Alarm & Surveillance",
        price: 13000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heat detector (Chloride UK).",
        featured: false
    },
    {
        id: "H010",
        name: "Smoke Detector Chloride UK",
        category: "Home Automation, Alarm & Surveillance",
        price: 15000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Smoke detector (Chloride UK).",
        featured: true
    },
    {
        id: "H011",
        name: "Siren Kidi",
        category: "Home Automation, Alarm & Surveillance",
        price: 15000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Kidi fire alarm siren.",
        featured: false
    },
    {
        id: "H012",
        name: "Fire Alarm Panel 2 Zone Chloride UK",
        category: "Home Automation, Alarm & Surveillance",
        price: 125000,
        image: "https://images.unsplash.com/photo-1581092160607-9c5b6c8f8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "2 Zone fire alarm panel (Chloride UK).",
        featured: true
    },
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
