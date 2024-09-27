export const subscribeNewsletter = async ({ email }: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      },
    );
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.email || 'Failed to subscribe! Please try again',
      );
    }
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};
