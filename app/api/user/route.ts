import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';
interface ResponseBody {
  name: string;
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const response: ResponseBody = await request.json();

  const user = await prisma.user.create({
    data: {
      email: response.email,
      name: response.name,
      password: await bcrypt.hash(response.password, 10)
    }
  });

  const { password, ...userWithoutPassword } = user;

  return new Response(JSON.stringify(userWithoutPassword));
}
