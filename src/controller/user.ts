export const getUserProfile = async (req: any, res: any) => {
  return res.json({
    success: true,
    message: "User profile fetched successfully",
    data: {
      id: 1,
      username: "johndoe",
      email: "iQ2pU@example.com",
    },
  });
};
