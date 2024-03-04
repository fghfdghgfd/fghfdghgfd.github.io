var proxys = [
  {
    'id': 'rammerhead',
    'title': "Rammerhead",
    'url': 'https://nowgg.nl/play/roblox-corporation/5349/roblox',
    'image': 'https://lh3.googleusercontent.com/vI2_gJPlrp1gv-b-LlgqhEXGudx4dAPH8eWlnVUbAE4wo0UZ9dTCCvHCHUgkUbZ9BB3rJ74mRTPf0AqyIOgJFK9itizXw0hZenpOLxUzXHi3FZEyLiL0h3Iv5y-1L5CuCA=w517'
  },
]

var customproxys = JSON.parse(localStorage.getItem("customproxys"))
customproxys.forEach(proxy => {
  proxys.push(proxy)
})

console.log("Loaded " + proxys.length + " proxys")
console.log("Loaded " + customproxys.lenfth + " custom proxys")
