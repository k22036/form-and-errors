import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubmitFail from "@/components/form/SubmitFail";

describe("SubmitFail", () => {
  test("renders fail message correctly", () => {
    render(<SubmitFail />);
    expect(screen.getByText("送信に失敗しました。")).toBeInTheDocument();
  });
});
