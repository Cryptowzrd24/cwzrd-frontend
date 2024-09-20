export const getPopularNfts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/nft/popular/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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