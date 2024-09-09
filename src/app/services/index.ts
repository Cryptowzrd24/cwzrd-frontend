interface LoginProps {
  email: string;
  password: string;
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
