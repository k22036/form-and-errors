import { describe, expect, test } from "bun:test";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormFailList from "@/components/home/FormFailList";

describe("FormFailList", () => {
  test("shows correct links", () => {
    render(<FormFailList />);
    // リダイレクトあり
    expect(screen.getByText("リダイレクトあり")).toBeInTheDocument();
    expect(screen.getByText("/form/fail?redirect=true")).toBeInTheDocument();
    const linkTrue = screen.getByText("リダイレクトあり").closest("a");
    expect(linkTrue).toHaveAttribute("href", "/form/fail?redirect=true");

    // リダイレクトなし
    expect(screen.getByText("リダイレクトなし")).toBeInTheDocument();
    expect(screen.getByText("/form/fail?redirect=false")).toBeInTheDocument();
    const linkFalse = screen.getByText("リダイレクトなし").closest("a");
    expect(linkFalse).toHaveAttribute("href", "/form/fail?redirect=false");
  });

  test("shows correct title", () => {
    render(<FormFailList />);
    expect(screen.getByText("フォーム（失敗）用リンク")).toBeInTheDocument();
  });
});
