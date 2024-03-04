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
  {
    'id': 'polaris',
    'title': "Polaris",
    'url': 'https://polarislearning.org/',
    'image': 'https://lh3.googleusercontent.com/RVG7kTQx1zfk8GPdNK43BsD2HkdQ0n_A4dqMbksiaCR50f9A_S_0ZLZJ9qqhZKT2JJkTJD1zHPCRVvKY4h1N63kfPViDt_34Lhlq1oBpPt4sSibL_Ml0cMHZYqn5lECjhw=w2560'
  },
  {
    'id': 'emerald',
    'title': "Emerald",
    'url': 'https://calllmemaybe.cddo.cc/',
    'image': 'https://lh5.googleusercontent.com/gm0szIkffTKlm4uFFDTXu3-TYdsEAAdECiWa2ImXoB9LUQ0Je-neDNLylbkaMHru4HYO9vfLF2k1Ri5rXDYM6uCeXR75UU--jNwT8mApcR-Zm4wyVOqGt3jYE7Tj5PzC8A=w1080'
  },
  {
    'id': 'math-orbit',
    'title': "Math Orbit",
    'url': 'https://letslearn-math.xyz/',
    'image': 'https://lh7-us.googleusercontent.com/B2Cu7Dj5A5ZvkN5MaE7scNIqSf4lK1_UgZkLCGpFZD07a7LCyYFJO5M_c6qVhMKkUy5W-1O8-q1bKg1wu4fbTtidIr6cRiYw0fGaNH4xhGs7zFYRkW2_v3o1YK-hxGfB_SDQxiwXmhTqZLoh80eBTZFS4U9nfw'
  },
]

var customproxys = JSON.parse(localStorage.getItem("customproxys"))
customproxys.forEach(proxy => {
  proxys.push(proxy)
})

console.log("Loaded " + proxys.length + " proxys")
console.log("Loaded " + customproxys.lenfth + " custom proxys")