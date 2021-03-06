export default [
  {
    version: 1,
    onUpgrade(event) {
      return new Promise((resolve, reject) => {
        const db = event.target.result;
        try {
          db.createObjectStore('areas', { keyPath: 'tid' });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  },
];
