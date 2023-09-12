describe('Reqres dan Gorest API Testing', () => {

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = randomString + "@gmail.com"
    return email
  }

  function randomName(){
    const randomString = Math.random().toString(36).substring(2, 10)
    const name = randomString
    return name
  }

  let emailAddress = randomEmail()
  let name = randomName()
  let bodyData = {
    "name": name,
    "email": emailAddress,
    "gender": "female",
    "status": "active"
}

  it('get list user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })

  it('create user', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        "name": "elvanisa",
        "job": "Quality Assurance"
    }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).has.property("name", "elvanisa")
    })
  })
  
  it('create user Gorest', () => {
    cy.log('name' + name)
    cy.log('email' + emailAddress)
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer 71b8a9ca7dee570a8a5c5186b7c0b5b1b1fc2baadc8c3ffefa14f6339ba152ff'
      },
      body: bodyData
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })

  it.skip('update user Gorest', () => {
    cy.log('name' + name)
    cy.log('email' + emailAddress)
    cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer 71b8a9ca7dee570a8a5c5186b7c0b5b1b1fc2baadc8c3ffefa14f6339ba152ff'
      },
      body: bodyData
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })
})