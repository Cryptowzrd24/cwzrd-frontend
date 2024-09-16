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
      throw new Error(errorResponse.error || 'Login failed');
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
        body: JSON.stringify({ name, email, password }),
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Sign Up failed');
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/forgot-password/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.error || 'Some error occured! Please try again.',
      );
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const verifyEmail = async (key: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/verify-email/${key}`,
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || errorResponse.message);
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const resetPassword = async ({
  password,
  rePassword,
  verificationKey,
}: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/reset-password/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${decodeURIComponent(verificationKey.trim())}`,
        },
        body: JSON.stringify({
          new_password: password,
          confirm_password: rePassword,
        }),
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.error ||
          errorResponse.detail ||
          'Failed to change password! Please try again',
      );
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};
