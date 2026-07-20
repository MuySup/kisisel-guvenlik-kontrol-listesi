import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections } from "~/types/PSC";

const currentDir = dirname(fileURLToPath(import.meta.url));

const findYamlPath = (): string => {
  const candidates = [
    resolve(process.cwd(), "../personal-security-checklist.yml"),
    resolve(process.cwd(), "personal-security-checklist.yml"),
    resolve(currentDir, "../../../personal-security-checklist.yml"),
  ];
  return candidates.find((path) => existsSync(path)) || candidates[0];
};

export const useChecklists = routeLoader$(async () => {
  try {
    const yamlText = readFileSync(findYamlPath(), "utf-8");
    return jsyaml.load(yamlText) as Sections;
  } catch {
    return [];
  }
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  useContextProvider(ChecklistContext, checklists);

  return (
    <>
      <Navbar />
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
