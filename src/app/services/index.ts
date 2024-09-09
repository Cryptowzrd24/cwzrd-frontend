interface LoginProps {
  email: string;
  password: string;
}

interface SignUpProps extends LoginProps {
  name: string;
}

export const login = async ({ email, password }: LoginProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/login/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Login failed');
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const signUp = async ({ email, password, name }: SignUpProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/register/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email, password }),
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Sign Up failed');
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};
