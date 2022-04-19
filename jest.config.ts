import type { Config } from '@jest/types';
import { defaults } from "jest-config";

const config: Config.InitialOptions = {
    verbose: false,
    preset: `ts-jest`,
    testEnvironment: `jsdom`,
    testPathIgnorePatterns: [ `/node_modules/` ],
    setupFilesAfterEnv: [ `<rootDir>/setupTests.ts` ],
    moduleDirectories: [ `node_modules` ],
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        `ts`,
        `tsx`,
    ],
    moduleNameMapper: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "\\.(css|less|svg|png)$": `<rootDir>/tests/mocks/transformer.ts`,
    },
    maxWorkers: `50%`,
};

export default config;
