import jwt, { JwtPayload } from 'jsonwebtoken';
interface SignOption {
  expiresIn: string | number;
}

const DEFAULT_OPTION: SignOption = {
  expiresIn: '1h'
};

export function signJwt(
  payload: JwtPayload,
  options: SignOption = DEFAULT_OPTION
) {
  const secretKey = process.env.SECRET_KEY;

  return jwt.sign(payload, secretKey!, options);
}

export function verifyJwT(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    return decoded as JwtPayload;
  } catch (error) {
    console.error(error);
    return null;
  }
}
