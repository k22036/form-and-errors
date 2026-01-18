import { describe, expect, test } from "bun:test";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormSuccessList from "@/components/home/FormSuccessList";

describe("FormSuccessList", () => {
  test("shows correct links", () => {
    render(<FormSuccessList />);
    // リダイレクトあり
    expect(screen.getByText("リダイレクトあり")).toBeInTheDocument();
    expect(screen.getByText("/form/success?redirect=true")).toBeInTheDocument();
    const linkTrue = screen.getByText("リダイレクトあり").closest("a");
    expect(linkTrue).toHaveAttribute("href", "/form/success?redirect=true");

    // リダイレクトなし
    expect(screen.getByText("リダイレクトなし")).toBeInTheDocument();
    expect(
      screen.getByText("/form/success?redirect=false"),
    ).toBeInTheDocument();
    const linkFalse = screen.getByText("リダイレクトなし").closest("a");
    expect(linkFalse).toHaveAttribute("href", "/form/success?redirect=false");
  });

  test("shows correct title", () => {
    render(<FormSuccessList />);
    expect(screen.getByText("フォーム（成功）用リンク")).toBeInTheDocument();
  });
});
