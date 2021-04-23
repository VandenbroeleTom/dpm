const API_URL = process.env.NODE_ENV === 'production' ? 'https://dynamic-performance-modelling.herokuapp.com' : 'http://localhost:1235'

export default class ApiClient {

  static async refreshToken(refresh_token: string) {
    const response = await fetch(API_URL + '/api/refresh-token', {
      method: 'POST',
      body: JSON.stringify({ refresh_token }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  static async accessTokens(authorization_code: string) {
    const response = await fetch(API_URL + '/api/access-token', {
      method: 'POST',
      body: JSON.stringify({ code: authorization_code }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

}
