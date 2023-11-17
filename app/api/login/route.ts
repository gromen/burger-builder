import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

interface ResponseBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const response: ResponseBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: response.email
    }
  });

  if (user && (await bcrypt.compare(response.password, user.password))) {
    const { password, ...userWithoutPassword } = user;

    return new Response(JSON.stringify(userWithoutPassword));
  }

  return new Response(JSON.stringify(null));
}
