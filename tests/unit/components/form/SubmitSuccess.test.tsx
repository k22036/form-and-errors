import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubmitSuccess from "@/components/form/SubmitSuccess";

describe("SubmitSuccess", () => {
  test("renders success message correctly", () => {
    render(<SubmitSuccess />);
    expect(screen.getByText("送信が完了しました。")).toBeInTheDocument();
  });
});
