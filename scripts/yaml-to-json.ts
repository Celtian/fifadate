import { mkdirSync, writeFileSync } from 'fs';
import { readFileSync } from 'fs-extra';
import { load } from 'js-yaml';
import { dirname, join } from 'path';
import { cwd } from 'process';
import { Field, Fifa, Table } from '../src';

/**
 * @desription it reads 'config' folder
 */
const readConfig = (fifa: Fifa, table: Table): Field[] => {
  let json: Field[] = [];
  try {
    const yaml = readFileSync(join(cwd(), 'config', fifa, `${table}.yml`)).toString();
    json = load(yaml) as Field[] || [];
  } catch (e) {
    console.warn(e);
    return [];
  }
  return json;
};

/**
 * @description it removes all data in config folder
 */
const clearConfigFolder = (): void => {
  mkdirSync(join(cwd(), 'src', 'config'), { recursive: true });
}

/**
 * @description it creates files inside config folder
 */
const generateConfigFolder = (): void => {
  for (const fifa of Object.values(Fifa)) {
    for (const table of Object.values(Table)) {
      console.log(fifa + ' ' + table);
      const json: Field[] = readConfig(fifa as Fifa, table as Table);
      const outputFile: string = join(cwd(), 'src', 'config', fifa, `${table}.json`);
      const data: string = JSON.stringify(json, null, 2);
      mkdirSync(dirname(outputFile), { recursive: true });
      writeFileSync(outputFile, data);
    }
  }
}

/**
 * @description it generates index.ts
 */
const generateIndex = (): void => {
  const line: string[] = [];
  for (const fifa of Object.values(Fifa)) {
    for (const table of Object.values(Table)) {
      line.push(`export { default as ${fifa}_${table} } from './${fifa}/${table}.json';`)
    }
  }
  const output: string = join(cwd(), 'src', 'config', 'index.ts');
  writeFileSync(output, line.join('\n'));
}

/**
 * @description it generates 'src/shared/config.ts'
 */
const generateConfig = (): void => {
  const line: string[] = [];

  line.push(`import { Field, Fifa, Table } from './interfaces';`);
  line.push('import {');
  for (const fifa of Object.values(Fifa)) {
    for (const table of Object.values(Table)) {
      line.push(`\t${fifa}_${table},`);
    }
  }
  line.push('} from \'../config\';')
  line.push('\n');

  for (const fifa of Object.keys(Fifa)) {
    line.push(`const read${fifa}Table = (table: Table): Field[] => {`);

    line.push('\tswitch (table) {');

    for (const [key, value] of Object.entries(Table)) {
      line.push(`\t\tcase Table.${key}:`);
      line.push(`\t\t\treturn ${fifa.toLowerCase()}_${value} as Field[];`);
    }

    line.push(`\t\tdefault:`);
    line.push(`\t\t\treturn [];`);
    line.push('\t}');

    line.push('}');
    line.push('\n');
  }

  line.push(`export const fifaTableConfig = (fifa: Fifa, table: Table): Field[] => {`);
  line.push('\tswitch (fifa) {')
  for (const fifa of Object.keys(Fifa)) {
    line.push(`\t\tcase Fifa.${fifa}:`);
    line.push(`\t\t\treturn read${fifa}Table(table)`);
  }
  line.push(`\t\tdefault:`);
  line.push(`\t\t\treturn [];`);
  line.push('\t}');
  line.push('}');

  const output: string = join(cwd(), 'src', 'shared', 'config.ts');
  writeFileSync(output, line.join('\n'));
}


clearConfigFolder();
generateConfigFolder();
generateIndex();
generateConfig();
