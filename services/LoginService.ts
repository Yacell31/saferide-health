import  User  from '../models/User'; // Assuming the User class is in a separate file

class LoginService {
  async loginUser(username: string, password: string): Promise<User | null> {
    // Make your API request here and fetch the response
    const response = await fetch('/api/getUser', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Login request failed');
    }

    const data = await response.json();

   
    if (data) {
      // Returning an instance of the User class for the matching user
      return new User(data.username);
    }

    // Return null if no user was found
    return null;
  }
}

export default LoginService;