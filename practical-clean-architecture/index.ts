import express from 'express';

/**************************************************
 * Request
 *************************************************/
interface Request {
  user: string,
  info: any,
  category: string,
  phone: string,
  id?: number,
}

const isDuplicated = (request: Request, requestToCompare: Request) =>
  request.user === requestToCompare.user
      && request.category === requestToCompare.category
      && request.phone === requestToCompare.phone;

/**************************************************
 * Data management - Repository
 *************************************************/

const repository = (function() {
  const requests: Request[] = [];
  let id = 1;

  const findAllRequests = (): Request[] => requests;

  const saveRequest = (request: Request): number => {
    const createdRequest = {
      ...request,
      id,
    };

    requests.push(createdRequest);

    id += 1;

    return createdRequest.id;
  }

  return {
    findAll: findAllRequests,
    save: saveRequest,
  }
})();

/**************************************************
 * Create Request
 *************************************************/

const createRequest = (request: Request): number | Error => {
  const requests = repository.findAll();

  const hasDuplicatedRequest = requests.some(
    r =>isDuplicated(r, request)
  );

  if (hasDuplicatedRequest) {
    return new Error('Duplicated request')
  }

  return repository.save(request);
}

/**************************************************
 * API - Route
 *************************************************/

const route = (req: express.Request, res: express.Response) => {
  let statusCode: number;
  let body: string | object;

  try {
    const { user, info, category, phone } = req.body;
    const request = {
      user,
      info,
      category,
      phone,
    };

    const requestCreatedId = createRequest(request);

    if(requestCreatedId instanceof Error) {
      statusCode = 409
      body = (requestCreatedId as Error).message
    } else {
      statusCode = 200
      body = { id: requestCreatedId }
    }

  } catch(error) {
    console.log(error);
    statusCode = 500
    body = (error as Error).message
  }

  res.status(statusCode).send(body)
}

/**************************************************
 * Express
 *************************************************/

const app = express();
app.use(express.json());
const PORT = 8000;

app.post('/request', route);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
