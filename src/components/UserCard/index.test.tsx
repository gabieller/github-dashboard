import { render, screen } from "@testing-library/react";
import { UserCard } from ".";

const user = {
  login: "testuser",
  avatar_url: "https://example.com/testuser.png",
  name: "Test User",
  email: "testuser@example.com",
  followers: 10,
};

const repos = [
  {
    name: "testrepo",
    stargazers_count: 5,
    description: "A test repository",
  },
];

describe("UserCard", () => {
  it("should renders the user's name or login", () => {
    render(<UserCard user={user} repos={repos} />);
    const userName = screen.getByText("Test User");
    expect(userName).toBeInTheDocument();
  });

  it("should renders the user's email or login", () => {
    render(<UserCard user={user} repos={repos} />);
    const userEmail = screen.getByTestId("email");
    expect(userEmail.textContent).toEqual("testuser@example.com");
  });

  it("should renders the user's follower count", () => {
    render(<UserCard user={user} repos={repos} />);
    const followerCount = screen.getByText("10 followers");
    expect(followerCount).toBeInTheDocument();
  });

  it("should renders the user's first repository name and star count", () => {
    render(<UserCard user={user} repos={repos} />);
    const repoName = screen.getByText("testrepo");
    expect(repoName).toBeInTheDocument();
    const starCount = screen.getByText("5");
    expect(starCount).toBeInTheDocument();
  });
});
