import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

const components: MDXComponents = {
  img: ({ alt = "", ...props }) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      alt={alt}
      {...(props as Omit<ImageProps, "alt">)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
