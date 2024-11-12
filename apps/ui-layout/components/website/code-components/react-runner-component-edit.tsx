// @ts-nocheck
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { importCode, Runner, Scope } from 'react-runner';
// import { CodeEditor } from 'react-live-runner';
import { CodeMirror } from 'react-runner-codemirror';
import { ChevronsRight } from 'lucide-react';

const Tab = styled.div`
  display: inline-block;
  color: ${(props) => (props['aria-current'] ? 'steelblue' : 'gray')};
  padding: 4px;
  cursor: pointer;
`;

const withFiles = (scope: Scope, files: Record<string, string>) => {
  const imports: Scope = { ...scope.import };
  const lookup = new Set<string>();
  const importsProxy = new Proxy(imports, {
    getOwnPropertyDescriptor(target, prop) {
      if (target.hasOwnProperty(prop)) {
        return Object.getOwnPropertyDescriptor(target, prop);
      }
      if (files.hasOwnProperty(prop)) {
        return { writable: true, enumerable: true, configurable: true };
      }
    },
    get(target, prop: string) {
      if (prop in target) return target[prop];
      if (files.hasOwnProperty(prop)) {
        if (lookup.has(prop)) {
          throw new Error(
            `Circular dependency detected: ${[...lookup, prop].join(' -> ')}`
          );
        }
        lookup.add(prop);
        return (target[prop] = importCode(files[prop], {
          ...scope,
          import: importsProxy,
        }));
      }
    },
  });

  Object.keys(files).forEach((file) => {
    try {
      imports[file] = importsProxy[file];
      lookup.clear();
    } catch (error) {
      error.filename = file;
      throw error;
    }
  });

  return { ...scope, import: imports };
};

const baseScope = {
  import: {
    react: React,
  },
};

export const ReactRunnerCodeEditor = ({ baseCode }: { baseCode: string }) => {
  // const [codes, setCodes] = useState<string[]>([
  //   todoApp,
  //   todoAddTask,
  //   todoTaskList,
  // ]);
  const [importsError, setImportsError] = useState<string | null>(null);
  const [renderError, setRenderError] = useState<string | null>(null);
  // const [tab, setTab] = useState(0);

  // const scope = useMemo(() => {
  //   try {
  //     const scope = withFiles(baseScope, {
  //       './AddTask.js': codes[1],
  //       './TaskList.js': codes[2],
  //     });
  //     if (importsError) setImportsError(null);
  //     return scope;
  //   } catch (error) {
  //     setImportsError(
  //       `${error.filename ? `[${error.filename}] ` : ''}${error.toString()}`
  //     );
  //   }
  // }, [codes, importsError]);

  return (
    <>
      <div className='grid grid-cols-2'>
        <div className=' h-full '>
          <div className='w-full '>
            {importsError ? (
              <div className='absolute top-0 left-0 w-full bg-red-100 p-2 text-red-600 whitespace-pre-wrap'>
                {importsError}
              </div>
            ) : (
              <Runner
                code={baseCode}
                scope={baseScope}
                onRendered={(error) => {
                  if (error) {
                    setRenderError(error.toString());
                  } else if (renderError) {
                    setRenderError(null);
                  }
                }}
              />
            )}
          </div>
          {renderError && (
            <div className='absolute top-0 left-0 w-full bg-red-100 p-2 text-red-600 whitespace-pre-wrap'>
              {renderError}
            </div>
          )}
        </div>
        <div className=''>
          <CodeMirror
            // filename={`${tab}`}
            defaultValue={baseCode}
            // onChange={(newCode) => {
            //   const newCodes = [...codes];
            //   newCodes[tab] = newCode;
            //   setCodes(newCodes);
            // }}
            className='font-mono text-sm whitespace-pre w-full min-h-full'
          />
        </div>
      </div>

      {/* <div>
        {['App.js', 'AddTask.js', 'TaskList.js'].map((item, idx) => (
          <Tab
            key={item}
            aria-current={idx === tab}
            onClick={() => setTab(idx)}
          >
            {item}
          </Tab>
        ))}
      </div> */}
    </>
  );
};
