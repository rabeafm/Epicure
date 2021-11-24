import axios from 'axios';

class ServerServices {
  // public getChef = (id: any) => {
  //   console.log('getChef', id);
  //   return { id };
  // };

  // public getChefs = () => {
  //   console.log('getChefs');
  //   return [{}];
  // };

  // public getDish = (id: any) => {
  //   console.log('getDish', id);
  //   return { id };
  // };
  // public getDishes = () => {
  //   console.log('getDishes');
  //   return [{}];
  // };
  // public getRestaurant = (id: any) => {
  //   console.log('getRestaurant', id);
  //   return { id };
  // };
  // public getRestaurants = () => {
  //   console.log('getRestaurants');
  //   return [{}];
  // };

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
}

export default ServerServices;
