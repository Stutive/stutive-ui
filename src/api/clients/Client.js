import client from 'axios';

export default client.create({
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (Array.isArray(param)) {
        const p = param.join(',');
        searchParams.append(key, p);
      } else {
        searchParams.append(key, param);
      }
    }
    return searchParams.toString();
  }
});
