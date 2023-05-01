import { render, screen } from "@testing-library/react";
import { TrendingUsers } from ".";

const mockPopularUsers = [
  {
    user: {
      id: 1,
      avatar_url: "https://example.com/avatar",
      login: "johndoe",
      name: "John Doe",
      followers: 123,
      email: "johndoe@example.com",
    },
    repo: [
      {
        id: 1,
        name: "repo1",
        description: "Repository 1",
        stargazers_count: 456,
      },
    ],
  },
  {
    user: {
      id: 2,
      avatar_url: "https://example.com/avatar2",
      login: "janedoe",
      name: "Jane Doe",
      followers: 789,
      email: "janedoe@example.com",
    },
    repo: [
      {
        id: 2,
        name: "repo2",
        description: "Repository 2",
        stargazers_count: 1011,
      },
    ],
  },
];

describe("TrendingUsers", () => {
  it("should renders the component title", () => {
    render(<TrendingUsers popularUsers={mockPopularUsers} />);
    expect(screen.getByText("Trending Users")).toBeInTheDocument();
  });

  it("should renders user cards for each popular user", () => {
    render(<TrendingUsers popularUsers={mockPopularUsers} />);
    const userCards = screen.getAllByTestId("user-card");
    expect(userCards).toHaveLength(mockPopularUsers.length);
  });






});
