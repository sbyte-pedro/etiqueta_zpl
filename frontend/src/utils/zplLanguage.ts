import type { Monaco } from '@monaco-editor/react';

/**
 * Registers a lightweight ZPL (Zebra Programming Language) syntax highlighter.
 * Idempotent — safe to call on every editor mount; only registers once.
 *
 * ZPL is command-oriented: caret (^) and tilde (~) prefixes introduce two-letter
 * commands (e.g. ^FO, ^FD, ~SD), each optionally followed by comma-separated
 * parameters. ^FD ... ^FS delimits literal field data.
 */
export const ZPL_LANGUAGE_ID = 'zpl';

let registered = false;

export function registerZplLanguage(monaco: Monaco): void {
  if (registered) return;
  const alreadyThere = monaco.languages.getLanguages().some((l: { id: string }) => l.id === ZPL_LANGUAGE_ID);
  if (alreadyThere) {
    registered = true;
    return;
  }

  monaco.languages.register({ id: ZPL_LANGUAGE_ID });

  monaco.languages.setMonarchTokensProvider(ZPL_LANGUAGE_ID, {
    defaultToken: '',
    tokenizer: {
      root: [
        // Field data: ^FD <literal text> up to ^FS
        [/(\^FD)/, { token: 'keyword.command', next: '@fieldData' }],
        // Commands: ^XX or ~XX (two alphanumeric chars)
        [/[\^~][A-Za-z0-9]{2}/, 'keyword.command'],
        // Numeric parameters
        [/-?\d+(\.\d+)?/, 'number'],
        // Parameter separator
        [/,/, 'delimiter'],
        // Everything else is plain text
        [/[^\^~,]+/, 'string'],
      ],
      fieldData: [
        [/\^FS/, { token: 'keyword.command', next: '@pop' }],
        [/[^\^]+/, 'string.escape'],
        [/\^/, 'string.escape'],
      ],
    },
  });

  monaco.languages.setLanguageConfiguration(ZPL_LANGUAGE_ID, {
    comments: {},
    brackets: [],
    autoClosingPairs: [],
  });

  registered = true;
}
