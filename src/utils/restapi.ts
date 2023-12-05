import AsyncStorage from '@react-native-async-storage/async-storage';
import {RESTAPIBuilder} from './RestapiBuilder';

export class RESTAPI {
  private url: string; // request URL
  private builder: RESTAPIBuilder;

  constructor(builder: RESTAPIBuilder) {
    this.url = builder.url;
    this.builder = builder;
  }

  async run() {
    const params = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...this.builder.header,
      },
      method: this.builder.method,
      body: JSON.stringify(this.builder.body),
    };
    if (this.builder.needToken) {
      let jwt = '';
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const tokenData = JSON.parse(userData);
        jwt = tokenData.accessToken;
      }
      params.headers = {
        ...params.headers,
        Authorization: `Bearer ${jwt}`,
      };
    }

    const res = await fetch(this.url, params);
    const data = await res.json();

    if (!res.ok) {
      if (res.status == 419) {
      } else if (res.status == 999) {
      } else if (res.status == 401) {
        console.error('401 Unauthorized');
        return null;
      } else if (res.status == 502) {
        return null;
      }
      throw data.message;
    }
    return data;
  }
}
