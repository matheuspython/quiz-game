type Question = {
  img: string,
  question:string,
  response1:string,
  response2:string,
  response3: string
  correct: number
}


export const questions: Question[] = [
  {
    img: 'http://pm1.narvii.com/7828/849557d07a9390fc03b546f24fca611a7ac51640r1-736-670v2_uhq.jpg',
    question:'Qual o nome do perssonagem acima?',
    response1:'goku',
    response2:'naruto',
    response3:'luffy',
    correct: 0    
  },
  {
    img: 'https://i.pinimg.com/originals/f0/af/cb/f0afcbce7ed4a7df7b822964501bf995.jpg',
    question:'Qual a akuma no mi de luffy?',
    response1:'mera mera no mi',
    response2:'gomu gomu no mi',
    response3:'banana banana no mi',
    correct: 1
  },
  {
    img: 'https://sm.ign.com/ign_br/screenshot/default/8th-hokage-featured_bfjx.jpg',
    question:'qual o nome da biju do Naruto?',
    response1:'son goku',
    response2:'sasuke',
    response3:'kurama',
    correct: 2
  },
  {
    img: 'https://i0.wp.com/i.pinimg.com/originals/42/1f/dc/421fdc3d35b48908da021a71550a861e.jpg',
    question:'parabens',
    response1:'',
    response2:'',
    response3:'',
    correct: 2
  },
]