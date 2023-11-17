interface ResponseBody {
  name: string;
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const response: ResponseBody = await request.json();

  const user = {
    name: response.name,
    email: response.email,
    password: response.password
  };

  const { password, ...result } = user;

  return new Response(JSON.stringify(result));
}
