import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "@/components/Loading";

describe("Loading", () => {
  test("renders loading spinner and text", () => {
    render(<Loading />);
    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
    expect(screen.getByText("読み込み中...")).toBeInTheDocument();
  });
});
