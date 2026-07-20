import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/Lissy93/personal-security-checklist/';
  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p><a href={licenseLink} class="link link-primary">MIT</a> lisansı ile lisanslanmıştır -
      © <a href={authorLink} class="link link-primary">Alicia Sykes</a> 2024 -
      Kaynağı <a href={ghLink} class="link link-primary">GitHub</a> üzerinde görüntüleyin</p>
      <p class="text-sm opacity-60">
        This is the Turkish-translated version of the{' '}
        <a class="link" href="https://github.com/lissy93/personal-security-checklist">
          lissy93/personal-security-checklist
        </a>{' '}
        repo. Original: <a class="link" href="https://digital-defense.io/">https://digital-defense.io/</a>
      </p>
    </aside>
  </footer>
  );
});
