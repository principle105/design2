const formData = [
  {
    title: "How do you commute to school?",
    description: "",
    images: "https://cdn4.iconfinder.com/data/icons/dot/256/public_transportation.png",
    options: {
      "Car": [1,"Use another form of transportation like a bus, train, bicycle or walking to commute to school."],
      "Bus": [3,""],
      "Train": [4,""],
      "Walking": [4,""],
      "Bicycle": [4,""]
    }
  },
  {
    title: "How often do you carpool when traveling by car?",
    description: "",
    images: "https://static.thenounproject.com/png/40506-200.png",
    options: {
      "Always": [3,""],
      "Often": [2,""],
      "Sometimes": [1,"Carpooling can reduce your carbon footprint a lot and can help you save money."],
      "Never": [0,"Carpooling can reduce your carbon footprint a lot and can help you save money."],
      "I don't travel by car": [4,""]
    }
  },
  {
    title: "How often do you eat animal based products?",
    description: "(chicken, pork, fish, beef, eggs, dairy products)",
    images: "https://cdn3.iconfinder.com/data/icons/smart-farm-9/64/Goods-product-fruit-vegetable-agriculture-512.png",
    options: {
      "Never": [4,""],
      "Sometimes": [3,""],
      "Often": [2,"Try to limit your consumption of animal based products. You can start by making one meal a week meat-free and progress from there."],
      "Always": [1,"Try to limit your consumption of animal based products. You can start by making one meal a week meat-free and progress from there."]
    }
  },
  {
    title: "How often do you get a new electronic device?",
    description: "",
    images: "https://cdn1.iconfinder.com/data/icons/electronics-and-devices-14/100/device_electronic_gadget-11-512.png",
    options: {
      "0-1 years": [1,"85-95% of the carbon footprint of an electronic comes from its production. Try to resist buying new electronics often."],
      "1-2 years": [2,"85-95% of the carbon footprint of an electronic comes from its production. Try to resist buying new electronics often."],
      "2-3 years": [3,""],
      "3+ years": [4,""]
    }
  },
  {
    title: "How much of your food is unpackaged or locally grown?",
    description: "(250 miles / 400 km)",
    images: "https://cdn4.iconfinder.com/data/icons/eco-bio-and-zero-waste-1/128/Artboard_20-512.png",
    options: {
      "0-20%": [1,"Buying food in bulk can help reduce the amount of packaging and save money. A lot of grocery stores allow you to bring your own containers."],
      "20-40%": [2,"Buying food in bulk can help reduce the amount of packaging and save money. A lot of grocery stores allow you to bring your own containers."],
      "40-60%": [3,"Buying food in bulk can help reduce the amount of packaging and save money. A lot of grocery stores allow you to bring your own containers."],
      "60%+": [4,""]
    }
  },
  {
    title: "How often do you turn off devices when you are not using them?",
    description: "",
    images: "https://content.mycutegraphics.com/graphics/household/flat-screen-tv-clip-art.png",
    options: {
      "Never": [1,"Turn off lights, TVs, computers and other electronic devices when you do not need them. Some devices use power even when they are turned off so unplugging them can help reduce your energy usage."],
      "Sometimes": [2,"Turn off lights, TVs, computers and other electronic devices when you do not need them. Some devices use power even when they are turned off so unplugging them can help reduce your energy usage."],
      "Often": [3,""],
      "Always": [4,""]
    }
  }
]

export default formData;