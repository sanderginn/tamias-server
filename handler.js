import connectToDatabase from './db.js';

// simple Error constructor for handling HTTP error codes
function HTTPError (statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

export async function healthCheck() {
  await connectToDatabase();
  console.log('Connection successful.');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Connection successful.' })
  };
}

export async function createBudget(event) {
  try {
    const { Budget } = await connectToDatabase();
    const budget = await Budget.create(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not create budget.\nError message: ' + err.message
    };
  }
}

export async function getBudget(event) {
  try {
    const { Budget } = await connectToDatabase();
    const budget = await Budget.findByPk(event.pathParameters.id);
    if (!budget) throw new HTTPError(404, `Budget with id: ${event.pathParameters.id} was not found`);
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could not fetch budget.'
    };
  }
}

export async function getAllBudgets() {
  try {
    const { Budget } = await connectToDatabase();
    const budgets = await Budget.findAll();
    return {
      statusCode: 200,
      body: JSON.stringify(budgets)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not fetch budgets.'
    };
  }
}

export async function updateBudget(event) {
  try {
    const input = JSON.parse(event.body);
    const { Budget } = await connectToDatabase();
    const budget = await Budget.findByPk(event.pathParameters.id);
    if (!budget) throw new HTTPError(404, `Budget with id: ${event.pathParameters.id} was not found`);
    
    if (input.startDate) budget.startDate = input.startDate;
    if (input.endDate) budget.endDate = input.endDate;
    await budget.save();
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could not update budget.'
    };
  }
}

export async function deleteBudget(event) {
  try {
    const { Budget } = await connectToDatabase();
    const budget = await Budget.findByPk(event.pathParameters.id);
    if (!budget) throw new HTTPError(404, `Budget with id: ${event.pathParameters.id} was not found`);
    await budget.destroy();
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could not delete budget.'
    };
  }
}