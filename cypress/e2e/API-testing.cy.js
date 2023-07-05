describe('API Testing', () => {
  // get list users
  it('Get List User', () => {
    cy.request('GET','api/users?page=2')
    .its('status').should('eq',200)
  })

  // get single user

  it('Get Single User', () => {
    cy.request('GET','api/users/2')
    .its('status').should('eq',200)
    
  });


  // get single user not found

  it('Get Single User Not Found', () => {
    // cy.request('GET','api/users/23')
    // .its('status').should('eq',404)

    cy.request({
      method: 'GET',
      url: 'api/users/23',
      failOnStatusCode: false
      }).then((response) => {
      // Lakukan asser atau manipulasi lain dengan respons 200
      // Misalnya, memeriksa pesan kesalahan atau status respons
    
      // Contoh asser: Memeriksa status respons
      expect(response.status).to.eq(404)
    })
    
  });


  // get list resource

  it('Get List Resource', () => {
    cy.request({
      method: 'GET',
      url: '/api/unknown',
      failOnStatusCode: false
      }).then((response) => {
      // Lakukan asser atau manipulasi lain dengan respons 200
      // Misalnya, memeriksa pesan kesalahan atau status respons
    
      // Contoh asser: Memeriksa status respons
      expect(response.status).to.eq(200)
    })
    
  });

  // get single resource

  it('Get Single Resource', () => {
    cy.request({
      method: 'GET',
      url: 'api/unknown/2',
      failOnStatusCode: false
      }).then((response) => {
      // Lakukan asser atau manipulasi lain dengan respons 200
      // Misalnya, memeriksa pesan kesalahan atau status respons
    
      // Contoh asser: Memeriksa status respons
      expect(response.status).to.eq(200)
    })
  
  });

  // get single resource not found
  it('Single Resource Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'api/unknown/23',
      failOnStatusCode: false
      }).then((response) => {
      // Lakukan asser atau manipulasi lain dengan respons 200
      // Misalnya, memeriksa pesan kesalahan atau status respons
    
      // Contoh asser: Memeriksa status respons
      expect(response.status).to.eq(404)
    })
    
  });

  // post create

  it('Post Create', () => {
    cy.request('POST', 'api/users', {
      "name": "bhasri",
      "job": "leader QA"
    }).then((response) => {
      // Memeriksa status respons
      expect(response.status).to.eq(201)
    })
  });

  

  // put update

  it('Put Update', () => {
    cy.request('PUT', 'api/users/2', {
      "name": "sholeh",
      "job": "ceo Gudang Tahoe"
    }).then((response) => {
      // Memeriksa status respons
      expect(response.status).to.eq(200)
    })
    
  });

  // patch update

  it('Patch Update', () => {
    cy.request('PATCH', 'api/users/2', {
      "name": "sholeh",
      "job": "ceo Tahoe Taqwaw"
    }).then((response) => {
      // Memeriksa status respons
      expect(response.status).to.eq(200)
    })
  });

 // delete 

 it('Delete', () => {
  cy.request('DELETE', 'api/users/2').then((response) => {
    // Memeriksa status respons
    expect(response.status).to.eq(204);
  })
 });


//  post register

 it('Post Register', () => {
  cy.request('POST', 'api/register', {
  email: 'eve.holt@reqres.in',
  password: 'pistol'
  })
    .then((response) => {
    // Memeriksa status respons
    expect(response.status).to.eq(200);
  
    // Memeriksa body respons
    expect(response.body).to.deep.equal({
      id: 4,
    token: 'QpwL5tke4Pnpja7X4'
      })
    })
  });

  // post register unsuccesfully

 it('Post Register Unsuccesfully', () => {
  cy.request({
    method: 'POST',
    url: 'api/register',
    body: {
      email: 'sydney@fife'
    },
    failOnStatusCode: false
      }).then((response) => {
        // Memeriksa status respons
        expect(response.status).to.eq(400);
      
        // Memeriksa body respons
        expect(response.body).to.deep.equal({
          error: 'Missing password'
        })
      })
 });

//  post login succesfully

 it('Login Success', () => {

  cy.request({
    method: 'POST',
    url: '/api/login',
    body: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    },
    failOnStatusCode: false
  }).then((response) => {
    // Memeriksa status respons
    expect(response.status).to.eq(200);
  
    // Memeriksa body respons
    expect(response.body).to.deep.equal({
      token: 'QpwL5tke4Pnpja7X4'
    })
  })  
 });

//  post login unsuccesfully

it('Login Unsuccesfuly', () => {
  cy.request({
    method: 'POST',
    url: '/api/login',
    body: {
      email: 'peter@klaven'
    },
    failOnStatusCode: false
      }).then((response) => {
        // Memeriksa status respons
        expect(response.status).to.eq(400);
      
        // Memeriksa body respons
        expect(response.body).to.deep.equal({
          error: 'Missing password'
        })
      })
  
});

});