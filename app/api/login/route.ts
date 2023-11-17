interface ResponseBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const response: ResponseBody = await request.json();
  const user = {
    email: response.email,
    password: response.password
  };
  const { password, ...result } = user;

  return new Response(JSON.stringify(result));
}
