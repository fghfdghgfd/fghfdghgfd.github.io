var proxys = [

  {
    'id': 'roblox',
    'title': "Roblox",
    'url': 'https://nowgg.nl/play/roblox-corporation/5349/roblox',
    'image': 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht'
  },
]

var customproxys = JSON.parse(localStorage.getItem("customproxys"))
customproxys.forEach(proxy => {
  proxys.push(proxy)
})

console.log("Loaded " + proxys.length + " proxy")
console.log("Loaded " + customproxys.lenfth + " custom proxys")