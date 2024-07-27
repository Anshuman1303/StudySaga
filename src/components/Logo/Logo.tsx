import { Image } from "@mantine/core";
import Link from "next/link";
type propsType = {
  h: string;
};
export default function Logo(props: propsType) {
  return <Image {...props} src="/Assets/Logo/Study.png" alt="logo" />;
}
