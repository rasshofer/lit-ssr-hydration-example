import { html } from 'lit';
import '../dist/bundle.js';

export const template = () => html`
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <some-element name="Demo">
        <p>This is child content</p>
      </some-element>
      <script type="module">
        import {
          hasNativeDeclarativeShadowRoots,
          hydrateShadowRoots,
        } from 'https://unpkg.com/@webcomponents/template-shadowroot/template-shadowroot.js';
        if (!hasNativeDeclarativeShadowRoots()) {
          hydrateShadowRoots(document.body);
        }
        import('./dist/bundle.js');
      </script>
    </body>
  </html>
`;
