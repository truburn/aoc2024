import {
  defaultFontSizes,
  defaultFontWeights,
  FontConstant,
  FontDefinition,
} from "@components/typography/types";
import fontsData from "@constants/fonts.json";
import { Typeset } from "@storybook/blocks";

const fonts = Object.entries(fontsData as FontDefinition);

export function FontStoryBlock() {
  return (
    <>
      <ul>
        {fonts.map(([fontKey, font]: [string, FontConstant]) => (
          <li key={fontKey}>
            <strong>{font.fontFamily}: </strong>
            <code>fonts.{fontKey}</code>
          </li>
        ))}
      </ul>
      {fonts.map(([fontKey, font]: [string, FontConstant]) => {
        const sizes = Object.entries(font.size ?? defaultFontSizes);
        const weights = Object.entries(font.weight ?? defaultFontWeights);

        return (
          <section key={fontKey}>
            <h2 id={`font-${fontKey}`}>{font.fontFamily}</h2>
            <p>{font.description}</p>
            <p>
              <strong>Font Family:</strong> {font.fontFamily}
            </p>
            <p>
              <strong>Key:</strong> <code>fonts.{fontKey}</code>
            </p>
            <p>
              <strong>Font Sizes</strong>
            </p>
            <ul>
              {sizes.map(([sizeKey, size]) => (
                <li key={sizeKey}>
                  <code>
                    fonts.{fontKey}.size.{sizeKey} = {size}
                  </code>
                </li>
              ))}
            </ul>
            <p>
              <strong>Font Weights</strong>
            </p>
            <ul>
              {weights.map(([weightKey, weight]) => (
                <li key={weightKey}>
                  <code>
                    fonts.{fontKey}.weight.{weightKey} = {weight}
                  </code>
                </li>
              ))}
            </ul>
            {weights.map(([weightKey, weight]) => (
              <section key={weightKey}>
                <h3 id={`font-${fontKey}-${weightKey}`}>
                  Font Weight:{" "}
                  <code>
                    {weightKey} ({weight})
                  </code>
                </h3>
                <Typeset
                  fontFamily={font.fontFamily}
                  fontWeight={weight}
                  fontSizes={sizes.map(([_, size]) => size)}
                  sampleText={
                    font.sampleText ??
                    "A very bad quack might jinx zippy fowls."
                  }
                />
              </section>
            ))}
          </section>
        );
      })}
    </>
  );
}
