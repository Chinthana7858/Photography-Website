import axios from "axios";

async function TokenValidate(): Promise<boolean> {
  try {
    const token = localStorage.getItem('jwtToken');
    console.log('Token:', token); // Check if token is present
    if (token) {
      const response = await axios.post('http://localhost:8080/api/v1/user/validateToken', {
        token,
      });
      console.log('Token validation response:', response.data); // Log response from server
      return response.data;
    }
    return false;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
}
