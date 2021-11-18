import axios from 'axios';

class ServerServices {
  public getData = async (content: string, id: string, token: string) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4001/api/admin/v1/${content}/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    } catch (error) {
      console.log(`error: `, error);
    }
  };

  public getChef = async () => {
    console.log('getChef');
  };
}

export default ServerServices;
