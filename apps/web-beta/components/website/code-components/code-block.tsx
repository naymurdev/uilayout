import { extractCodeFromFilePath } from '@/lib/code';
import { PreCode } from './pre-code';

type CodeBlockProps = {
  filePath: string;
};

export default function CodeBlock({ filePath }: CodeBlockProps) {
  const fileContent = extractCodeFromFilePath(filePath);
  // console.log('filecontentscodeblocks', fileContent);

  return (
    <>
      <PreCode
        codeblock={{
          value: fileContent,
          lang: 'tsx',
          meta: '',
        }}
        classname={'border-none'}
      />
    </>
  );
}
