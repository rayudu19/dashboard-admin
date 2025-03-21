import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

// Fetch dashboard data (mock or real API call)
export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard`);
    return response.data; // Data from the API
  } catch (error) {
    console.error('Error fetching dashboard data', error);
    return {
      chartData: [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
      ],
      progress: 60,
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      ],
    };
  }
};

// Fetch users (mock or real API call)
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    return [
      { id: 1, name: 'Anwar', email: 'Anwar@example.com', role: 'Admin' },
      { id: 2, name: 'Rayudu', email: 'Rayudu@example.com', role: 'User' },
    ];
  }
};

// Fetch reports (mock or real API call)
export const fetchReports = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reports`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reports', error);
    return [
      { id: 1, title: 'Sales Report', date: '2023-03-21' },
      { id: 2, title: 'User Growth Report', date: '2023-03-22' },
    ];
  }
};
