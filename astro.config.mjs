import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

// Custom remark plugin for pull quotes
function remarkPullquote() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' &&
        node.name === 'pullquote'
      ) {
        const data = node.data || (node.data = {});
        data.hName = 'aside';
        data.hProperties = {
          class: 'pullquote'
        };
      }
    });
  };
}

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkPullquote],
    rehypePlugins: []
  }
});