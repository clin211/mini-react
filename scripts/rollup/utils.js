import fs from 'fs';
import path from 'path';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/ node_modules');

export function resolvePkgPath (pkgName, isDist) {
    if (isDist) {
        return `${distPath}/${pkgName}`;
    }
    return `${pkgPath}/${pkgName}`;
}

export function getPackageJSON (pkgName) {
    const pkg = `${resolvePkgPath(pkgName)}/package.json`;
    const str = fs.readFileSync(pkg, { encoding: 'utf-8' });
    return JSON.parse(str);
}

export function getBaseRollupPlugins ({
    alias = { __DEV__: true },
    typescript = {}
} = {}) {
    return [replace(alias), cjs(), ts(typescript)];
}
