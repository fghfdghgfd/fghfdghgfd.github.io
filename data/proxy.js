var proxys = [
  {
    'id': 'rammerhead',
    'title': "Rammerhead",
    'url': 'https://nowgg.nl/play/roblox-corporation/5349/roblox',
    'image': 'https://lh3.googleusercontent.com/vI2_gJPlrp1gv-b-LlgqhEXGudx4dAPH8eWlnVUbAE4wo0UZ9dTCCvHCHUgkUbZ9BB3rJ74mRTPf0AqyIOgJFK9itizXw0hZenpOLxUzXHi3FZEyLiL0h3Iv5y-1L5CuCA=w517'
  },
  {
    'id': 'interstellar',
    'title': "Interstellar",
    'url': 'https://nowgg.nl/play/roblox-corporation/5349/roblox',
    'image': 'https://lh5.googleusercontent.com/PKPW-u5z5h1NZeFViEj_Fl0KbConp_MUfBTbBvZSuQ2AC8nWglDGGB2ewQbkfR_2I5hyfMow0WcFYY9qTuKtmyHWolBVL9tfT7r3UclTCYVywFtBfaek0kV0CEMsLLCAHw=w200'
  },
  {
    'id': 'shuttle',
    'title': "Shuttle",
    'url': 'https://nowgg.nl/play/roblox-corporation/5349/roblox',
    'image': 'https://lh5.googleusercontent.com/_wi0jWOc5DvPGWw8CmAm4qANRzeuUUpSXxR_bcRzmIRJ9MnCK8NctjyGkDcoeYhEK7GAIRmuozSmRJZWcj8jKsXHhdsPva_MBeKJOlbv9H2HBUL5W25Q2MxISWoRswgmcw=w1080'
  },
  {
    'id': 'tiw',
    'title': "TIW",
    'url': 'https://starttiw.org/',
    'image': 'https://lh5.googleusercontent.com/GhbtVxVUUQe__NZPQmyYWPUPmzHovWeiNx8Veb_RJ2tbmcxLPMizIPW8OnYqIkSc7a7YK9GSfKhhoQuG7Y_lm2apt5bLhxR6dgvQm4I6z_No7sjPL8WYm6guz4hXt49CSw=w500'
  },
]

var customproxys = JSON.parse(localStorage.getItem("customproxys"))
customproxys.forEach(proxy => {
  proxys.push(proxy)
})

console.log("Loaded " + proxys.length + " proxys")
console.log("Loaded " + customproxys.lenfth + " custom proxys")