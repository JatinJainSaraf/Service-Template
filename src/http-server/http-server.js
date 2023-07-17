module.exports = function makeHttpCallback({ controller }) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        method: req.method,
        headers: req.headers,
      };
  
      try {
        const httpResponse = await controller(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
  };
  