export const cars = [
  { 
    id: 1, name: "Ferrari SF90 Stradale", brand: "Ferrari", category: "Supercar", price: 524815, year: 2024, image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", 
    description: "The SF90 Stradale is Ferrari's first series-production plug-in hybrid, and it is an absolute weapon. By combining a twin-turbo V8 with three electric motors, it delivers a mind-bending 986 horsepower. It launches from 0-60 mph in just 2.5 seconds and feels incredibly planted thanks to its advanced all-wheel-drive system. It's a hypercar experience with daily-driving refinement.",
    specs: { power: "986 hp", torque: "590 lb-ft", topSpeed: "211 mph", zeroTo60: "2.5s", engine: "4.0L V8 Hybrid", transmission: "8-speed DCT" } 
  },
  { 
    id: 2, name: "Lamborghini Revuelto", brand: "Lamborghini", category: "Supercar", price: 608358, year: 2024, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800", 
    description: "The Revuelto is Lamborghini's V12 hybrid masterpiece. It replaces the Aventador and turns the insanity dial up to 11. With over 1,000 horsepower coming from a screaming naturally aspirated V12 and three electric motors, it screams to 9,500 RPM. It features an aggressive aerodynamic design that keeps it glued to the track while looking like a spaceship on the road.",
    specs: { power: "1001 hp", torque: "535 lb-ft", topSpeed: "217 mph", zeroTo60: "2.5s", engine: "6.5L V12 Hybrid", transmission: "8-speed DCT" } 
  },
  { 
    id: 3, name: "McLaren 750S", brand: "McLaren", category: "Supercar", price: 324000, year: 2024, image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800", 
    description: "The 750S is the lightest and most powerful series-production McLaren to date. It focuses on pure driving dynamics and razor-sharp handling. It lacks the heavy hybrid systems of its rivals, making it incredibly agile and engaging on a twisty back road. It's a true driver's car that delivers a visceral, unadulterated supercar experience.",
    specs: { power: "740 hp", torque: "590 lb-ft", topSpeed: "206 mph", zeroTo60: "2.7s", engine: "4.0L Twin-Turbo V8", transmission: "7-speed DCT" } 
  },
  { 
    id: 4, name: "Porsche 911 GT3 RS", brand: "Porsche", category: "Supercar", price: 241300, year: 2024, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", 
    description: "This isn't just a 911; it's a street-legal track car. The GT3 RS features extreme aerodynamics, including a massive swan-neck rear wing that generates incredible downforce. The 4.0-liter flat-six engine revs to 9,000 RPM and sounds glorious. It's not the fastest in a straight line, but it will obliterate almost anything on a race track.",
    specs: { power: "518 hp", torque: "342 lb-ft", topSpeed: "184 mph", zeroTo60: "3.0s", engine: "4.0L Flat-6", transmission: "7-speed PDK" } 
  },
  { 
    id: 5, name: "Bugatti Chiron", brand: "Bugatti", category: "Hypercar", price: 3300000, year: 2023, image: "https://images.unsplash.com/photo-1614026480418-bd11fde6d9fa?w=800", 
    description: "The Chiron is the pinnacle of automotive engineering and luxury. It houses an 8.0-liter quad-turbocharged W16 engine that produces nearly 1,500 horsepower. It was designed to break the 300 mph barrier. It's incredibly heavy but violently fast, offering a level of opulence and speed that only a handful of people in the world will ever experience.",
    specs: { power: "1479 hp", torque: "1180 lb-ft", topSpeed: "261 mph", zeroTo60: "2.4s", engine: "8.0L Quad-Turbo W16", transmission: "7-speed DCT" } 
  },
  { 
    id: 6, name: "Toyota Camry", brand: "Toyota", category: "Sedan", price: 28400, year: 2024, image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800", 
    description: "The Camry is the definition of reliable, practical, and efficient transportation. It's not going to win any drag races, but it will comfortably get you and your family to your destination for hundreds of thousands of miles. It offers great fuel economy, a smooth ride, and modern safety tech, making it one of the best daily drivers on the market.",
    specs: { power: "203 hp", torque: "184 lb-ft", topSpeed: "135 mph", zeroTo60: "7.5s", engine: "2.5L I4", transmission: "8-speed Auto" } 
  },
  { 
    id: 7, name: "Honda Civic", brand: "Honda", category: "Sedan", price: 24950, year: 2024, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800", 
    description: "The Civic is the benchmark for compact cars. It offers a premium interior that punches way above its price class, excellent handling, and bulletproof reliability. It's practical, fun to drive, and holds its value incredibly well. It's the perfect first car or commuter vehicle.",
    specs: { power: "158 hp", torque: "138 lb-ft", topSpeed: "126 mph", zeroTo60: "8.2s", engine: "2.0L I4", transmission: "CVT" } 
  },
  { 
    id: 8, name: "Tesla Model 3", brand: "Tesla", category: "Electric", price: 38990, year: 2024, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800", 
    description: "The Model 3 revolutionized the EV market. It offers instant torque, a minimalist futuristic interior, and access to Tesla's massive Supercharger network. With the ability to receive over-the-air software updates, the car gets better over time. It's a highly efficient, tech-forward daily driver that's incredibly fun to launch off the line.",
    specs: { power: "283 hp", torque: "307 lb-ft", topSpeed: "140 mph", zeroTo60: "5.8s", engine: "Single Motor EV", transmission: "Single-speed" } 
  },
  { 
    id: 9, name: "BMW M3", brand: "BMW", category: "Sport", price: 76000, year: 2024, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", 
    description: "The M3 is the ultimate all-rounder. It's a practical four-door sedan that can comfortably seat five people, but it also has a 473-horsepower twin-turbo inline-six that makes it an absolute monster on the track. It blends luxury, daily usability, and raw performance better than almost any other car on the road.",
    specs: { power: "473 hp", torque: "406 lb-ft", topSpeed: "180 mph", zeroTo60: "4.1s", engine: "3.0L Twin-Turbo I6", transmission: "8-speed Auto" } 
  },
  { 
    id: 10, name: "Ford Mustang GT", brand: "Ford", category: "Sport", price: 42990, year: 2024, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800", 
    description: "The Mustang GT is the iconic American muscle car. Powered by a roaring 5.0L V8, it delivers an intoxicating exhaust note and massive straight-line speed for a relatively affordable price. It's a bit heavy and doesn't handle corners like a European sports car, but it offers an unmatched emotional experience and a huge aftermarket for customization.",
    specs: { power: "480 hp", torque: "415 lb-ft", topSpeed: "166 mph", zeroTo60: "4.2s", engine: "5.0L V8", transmission: "6-speed Manual" } 
  },
];
