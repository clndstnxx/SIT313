import faker from 'faker'
const staffList =[
    { 
      "key": 0,
      "avatar" : faker.image.technics(),
      "title" : faker.commerce.productAdjective(),
      "desc" : faker.lorem.words(),
      "username" : faker.internet.userName()
    },
    {   
      "key": 1,
      "avatar" : faker.image.imageUrl(),
      "title" : faker.commerce.productAdjective(),
      "desc" : faker.lorem.words(),
      "username" : faker.internet.userName()
    },
    {   
      "key": 2,
      "avatar" : faker.image.business(),
      "title" : faker.commerce.productAdjective(),
      "desc" : faker.lorem.words(),
      "username" : faker.internet.userName()
    },
]

export default staffList