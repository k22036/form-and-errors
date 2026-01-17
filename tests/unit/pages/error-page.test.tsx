import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import ErrorPage from "@/app/error/page";
import "@testing-library/jest-dom";

describe("ErrorPage", () => {
  test("renders error message correctly", () => {
    render(<ErrorPage />);
    expect(screen.getByText("障害発生")).toBeInTheDocument();
  });
});
