// items.js
const itemsData = {
  
  /* 🪑 Chairs */
  chair001: {
    title: "Office Chair",
    price: "₹900",
    description: "Ergonomic office chair with adjustable height and back support. Slightly used.",
    image: "images/office chair2.jpeg",
    seller: { name: "Rahul Sharma", email: "rahul@example.com", phone: "‪+91 98765 43210‬" }
  },
  chair002: {
    title: "Plastic Chair (Set of 2)",
    price: "₹600",
    description: "Set of 2 durable plastic chairs, perfect for home or outdoor use.",
    image: "images/plastic chair.jpg",
    seller: { name: "Amit Verma", email: "amit@example.com", phone: "‪+91 91234 56789‬" }
  },
  chair003: {
    title: "Wooden Dining Chair",
    price: "₹750",
    description: "Classic wooden dining chair with strong build quality.",
    image: "images/woodenchair.jpg",
    seller: { name: "Priya Singh", email: "priya@example.com", phone: "‪+91 99887 66554‬" }
  },
  chair004: {
    title: "Folding Chair",
    price: "₹450",
    description: "Lightweight folding chair, easy to carry and store.",
    image: "images/foldingchair.jpg",
    seller: { name: "Sneha Patel", email: "sneha@example.com", phone: "‪+91 90123 45678‬" }
  },
  chair005: {
    title: "Ergonomic Office Chair",
    price: "₹1500",
    description: "High-quality ergonomic chair for long working hours.",
    image: "images/ergochair.jpeg",
    seller: { name: "Vikram Rao", email: "vikram@example.com", phone: "‪+91 99876 54321‬" }
  },
  chair006: {
    title: "Bean Bag Chair",
    price: "₹1200",
    description: "Soft and comfortable bean bag chair for lounging.",
    image: "images/beanbag.jpg",
    seller: { name: "Kavita Nair", email: "kavita@example.com", phone: "‪+91 98712 34567‬" }
  },
  chair007: {
    title: "Bar Stool (Set of 2)",
    price: "₹800",
    description: "Set of 2 stylish bar stools, perfect for kitchen counters.",
    image: "images/barstool.jpeg",
    seller: { name: "Rohan Mehta", email: "rohan@example.com", phone: "‪+91 98123 45678‬" }
  },
  chair008: {
    title: "Wooden Rocking Chair",
    price: "₹1800",
    description: "Traditional wooden rocking chair, very comfortable.",
    image: "images/rockingchair.jpeg",
    seller: { name: "Neha Kapoor", email: "neha@example.com", phone: "‪+91 90987 65432‬" }
  },

  /* 💻 Electronics */
  elec001: {
    title: "HDMI Cable (2 m)",
    price: "₹90",
    description: "Durable HDMI cable, supports full HD and 4K displays.",
    image: "images/hdmi.jpg",
    seller: { name: "Arjun Yadav", email: "arjun@example.com", phone: "‪+91 92345 67890‬" }
  },
  elec002: {
    title: "Laptop Stand",
    price: "₹500",
    description: "Adjustable laptop stand, ideal for study or work.",
    image: "images/laptop stand.jpg",
    seller: { name: "Suman Sharma", email: "suman@example.com", phone: "‪+91 97865 43210‬" }
  },
  elec003: {
    title: "24-inch Monitor",
    price: "₹3900",
    description: "Full HD 24-inch monitor with HDMI and VGA input.",
    image: "images/monitor.jpg",
    seller: { name: "Deepak Kumar", email: "deepak@example.com", phone: "‪+91 91234 56788‬" }
  },
  elec004: {
    title: "Inkjet Printer",
    price: "₹2100",
    description: "All-in-one inkjet printer, supports scanning and copying.",
    image: "images/printer.jpg",
    seller: { name: "Meena Rathi", email: "meena@example.com", phone: "‪+91 98761 23450‬" }
  },
  elec005: {
    title: "Wireless Keyboard",
    price: "₹450",
    description: "Compact wireless keyboard with long battery life.",
    image: "images/wireless keyboard.jpg",
    seller: { name: "Suresh Iyer", email: "suresh@example.com", phone: "‪+91 91111 22334‬" }
  },
  elec006: {
    title: "Bluetooth Speaker",
    price: "₹650",
    description: "Portable Bluetooth speaker with deep bass and clear sound.",
    image: "images/bluetooth speaker.jpg",
    seller: { name: "Pooja Desai", email: "pooja@example.com", phone: "‪+91 93322 44556‬" }
  },
  elec007: {
    title: "1TB External HDD",
    price: "₹1500",
    description: "High-speed external hard drive for backup and storage.",
    image: "images/1TB HDD.jpg",
    seller: { name: "Anil Khanna", email: "anil@example.com", phone: "+91 95544 66778" }
  },
  elec008: {
    title: "Android Tablet",
    price: "₹4200",
    description: "Android tablet with 10-inch display, supports Wi-Fi and SIM.",
    image: "images/tablet.jpg",
    seller: { name: "Swati Gupta", email: "swati@example.com", phone: "+91 97777 88990" }
  },

  /* 🎸 Musical Instruments */
  guitar001: {
    title: "Acoustic Guitar",
    price: "₹2800",
    description: "6-string acoustic guitar, great for beginners and hobbyists.",
    image: "images/guitar.jpg",
    seller: { name: "Kiran Malhotra", email: "kiran@example.com", phone: "+91 92222 33445" }
  },
  guitar002: {
    title: "Electronic Keyboard",
    price: "₹3500",
    description: "61-key electronic keyboard with demo songs.",
    image: "images/Electronic Keyboard.jpeg",
    seller: { name: "Ravi Menon", email: "ravi@example.com", phone: "+91 93333 44556" }
  },
  guitar003: {
    title: "Violin with Bow",
    price: "₹2200",
    description: "Full-size violin with bow and case, perfect for learners.",
    image: "images/violin bow.jpeg",
    seller: { name: "Ananya Roy", email: "ananya@example.com", phone: "+91 94444 55667" }
  },
  guitar004: {
    title: "Junior Drum Set",
    price: "₹4500",
    description: "Compact drum set for kids and beginners.",
    image: "images/drum set.jpeg",
    seller: { name: "Kabir Das", email: "kabir@example.com", phone: "+91 95555 66778" }
  },
  guitar005: {
    title: "Harmonica",
    price: "₹400",
    description: "Pocket-size harmonica, easy to play and carry.",
    image: "images/Harmonica set.jpg",
    seller: { name: "Ritu Jain", email: "ritu@example.com", phone: "+91 97788 66554" }
  },
  guitar006: {
    title: "Ukulele",
    price: "₹1200",
    description: "Small 4-string ukulele, ideal for beginners.",
    image: "images/ukule.jpeg",
    seller: { name: "Mohit Kapoor", email: "mohit@example.com", phone: "+91 92211 33456" }
  },
  guitar007: {
    title: "Flute",
    price: "₹300",
    description: "Indian bamboo flute with sweet tone.",
    image: "images/flute.jpeg",
    seller: { name: "Ayesha Khan", email: "ayesha@example.com", phone: "+91 96677 55432" }
  },
  guitar008: {
    title: "Tambourine",
    price: "₹250",
    description: "Classic tambourine with jingles, used in folk music.",
    image: "images/Tambourine.jpeg",
    seller: { name: "Nikhil Joshi", email: "nikhil@example.com", phone: "+91 93322 44557" }
  },

  /* 🏡 Home Essentials */
  home001: {
    title: "Kitchen Starter Set",
    price: "₹1000",
    description: "Complete kitchen starter kit for students living alone.",
    image: "images/kitchenset.jpeg",
    seller: { name: "Tanvi Sharma", email: "tanvi@example.com", phone: "+91 90012 34567" }
  },
  home002: {
    title: "Rice Cooker",
    price: "₹1500",
    description: "Automatic rice cooker with keep-warm function.",
    image: "images/rice cooker.jpeg",
    seller: { name: "Aman Joshi", email: "aman@example.com", phone: "+91 98877 66554" }
  },
  home003: {
    title: "Iron Box",
    price: "₹500",
    description: "Reliable electric iron for clothes.",
    image: "images/iron.jpeg",
    seller: { name: "Shreya Patel", email: "shreya@example.com", phone: "+91 97766 55443" }
  },
  home004: {
    title: "Induction Cooktop",
    price: "₹1800",
    description: "Energy-efficient induction cooktop, portable.",
    image: "images/induction cooktop.jpg",
    seller: { name: "Manish Yadav", email: "manish@example.com", phone: "+91 96655 44332" }
  },

  /* 🏋 Fitness */
  fit001: {
    title: "Yoga Mat",
    price: "₹350",
    description: "Non-slip yoga mat for daily practice.",
    image: "images/yogamatt.jpg",
    seller: { name: "Meera Rao", email: "meera@example.com", phone: "+91 95544 33221" }
  },
  fit002: {
    title: "Dumbbell Set (5kg x2)",
    price: "₹800",
    description: "Set of 2 dumbbells for home workout.",
    image: "images/dumbbells.jpeg",
    seller: { name: "Akash Malhotra", email: "akash@example.com", phone: "+91 94433 22110" }
  },
  fit003: {
    title: "Resistance Bands",
    price: "₹250",
    description: "Set of 3 resistance bands with different tensions.",
    image: "images/resistance.jpeg",
    seller: { name: "Nidhi Shah", email: "nidhi@example.com", phone: "+91 92222 11334" }
  },
  fit004: {
    title: "Skipping Rope",
    price: "₹150",
    description: "Durable skipping rope for cardio exercise.",
    image: "images/rope.jpeg",
    seller: { name: "Rohit Sen", email: "rohit@example.com", phone: "+91 93311 55677" }
  },

  /* 📱 Gadgets */
  gad001: {
    title: "Smartwatch",
    price: "₹1200",
    description: "Smartwatch with heart rate monitor and notifications.",
    image: "images/smaetwatch.jpg",
    seller: { name: "Ishita Gupta", email: "ishita@example.com", phone: "+91 91122 33445" }
  },
  gad002: {
    title: "Earbuds",
    price: "₹700",
    description: "Wireless earbuds with noise cancellation.",
    image: "images/earpods.jpeg",
    seller: { name: "Raj Mehta", email: "raj@example.com", phone: "+91 94455 66778" }
  },
  gad003: {
    title: "Power Bank (10000 mAh)",
    price: "₹600",
    description: "Fast charging power bank with dual USB output.",
    image: "images/powerbank.jpeg",
    seller: { name: "Simran Arora", email: "simran@example.com", phone: "+91 95566 77889" }
  },
  gad004: {
    title: "Portable Fan",
    price: "₹400",
    description: "Rechargeable portable fan with USB charging.",
    image: "images/fan.jpeg",
    seller: { name: "Ankur Bansal", email: "ankur@example.com", phone: "+91 97777 88991" }
  },

  /* 📚 Study */
  study001: {
    title: "DSA Textbook",
    price: "₹300",
    description: "Data Structures and Algorithms textbook for CS students.",
    image: "images/dsa.jpeg",
    seller: { name: "Varun Jain", email: "varun@example.com", phone: "+91 98888 55443" }
  },
  study002: {
    title: "Python Programming Book",
    price: "₹250",
    description: "Beginner-friendly Python programming guide.",
    image: "images/python.jpeg",
    seller: { name: "Riya Sen", email: "riya@example.com", phone: "+91 97777 33221" }
  },
  study003: {
    title: "Engineering Drawing Kit",
    price: "₹450",
    description: "Complete drawing kit with compass, ruler, set square.",
    image: "images/painting.jpeg",
    seller: { name: "Harsh Kapoor", email: "harsh@example.com", phone: "+91 96655 88990" }
  },
  study004: {
    title: "Calculator (Scientific)",
    price: "₹350",
    description: "Casio scientific calculator, good condition.",
    image: "images/casio calculator.jpg",
    seller: { name: "Mansi Agarwal", email: "mansi@example.com", phone: "+91 95544 22119" }
  },

  /* 🎒 Bags */
  bag001: {
    title: "College Backpack",
    price: "₹600",
    description: "Durable backpack with laptop compartment.",
    image: "images/backpack.jpg",
    seller: { name: "Aditya Mishra", email: "aditya@example.com", phone: "+91 92233 55667" }
  },
  bag002: {
    title: "Laptop Bag",
    price: "₹750",
    description: "Waterproof laptop bag with multiple compartments.",
    image: "images/Laptop Bag.jpeg",
    seller: { name: "Divya Sharma", email: "divya@example.com", phone: "+91 93344 66789" }
  },
  bag003: {
    title: "Tote Bag",
    price: "₹250",
    description: "Eco-friendly cloth tote bag for daily use.",
    image: "images/totebag.jpeg",
    seller: { name: "Sahil Gupta", email: "sahil@example.com", phone: "+91 91122 33446" }
  },
  bag004: {
    title: "Travel Duffel",
    price: "₹950",
    description: "Spacious duffel bag for travel and gym.",
    image: "images/Sports Duffle Bag.jpeg",
    seller: { name: "Pallavi Rao", email: "pallavi@example.com", phone: "+91 97788 11223" }
  }
};
