import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    (text: { toString: () => string }) => {
      if (typeof text === 'string' || typeof text === 'number') {
        navigator.clipboard.writeText(text.toString());
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, timeout);
      } else {
        console.error('Cannot copy typeof ' + typeof text + ' to clipboard');
      }
    },
    [timeout]
  );

  return [isCopied, copy];
}
