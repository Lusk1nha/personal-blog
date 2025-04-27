import { APP_DESCRIPTION, APP_NAME } from "@/constants";
import { metadata } from "../app/layout";
import { describe, it, expect } from "@jest/globals";

describe("Root Next layout", () => {
  describe("metadata", () => {
    it("should be exported", () => {
      expect(metadata).toBeDefined();
    });

    it("should contain a `title` and `description`", () => {
      expect(metadata).toHaveProperty("title");
      expect(metadata).toHaveProperty("description");
    });

    it("should have a title equals to APP_NAME", () => {
      expect(metadata.title).toBe(APP_NAME);
    });

    it("should have a description equals to APP_DESCRIPTION", () => {
      expect(metadata.description).toBe(APP_DESCRIPTION);
    });
  });
});
