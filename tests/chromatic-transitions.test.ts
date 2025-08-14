import { test } from "node:test"
import * as assert from "node:assert/strict"
import ChromaticTransitions from "../src/lib/chromatic-transitions.js"

test("interpolateHsl blends colors", () => {
  const result = ChromaticTransitions.interpolateHsl("#ff0000", "#00ff00", 0.5)
  assert.equal(result.toLowerCase(), "#ffff00")
})

test("complementary generates opposite hue", () => {
  const comp = ChromaticTransitions.complementary("#ff0000")
  assert.equal(comp.toLowerCase(), "#00ffff")
})
