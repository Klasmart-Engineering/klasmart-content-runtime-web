import { Permissions } from "../utils";
import {
    createEmptyPermissions,
    createPermissions,
    createStudentPermissions,
    createTeacherPermissions,
} from "./utils";

const mockEmptyPermissions: Permissions = {
    allowShowHide: false,
    allowCreateShapes: false,
    allowEditShapes: {
        own: false,
        others: false,
    },
    allowDeleteShapes: {
        own: false,
        others: false,
    },
};

const mockTeacherPermissions: Permissions = {
    allowShowHide: true,
    allowCreateShapes: true,
    allowEditShapes: {
        own: true,
        others: true,
    },
    allowDeleteShapes: {
        own: true,
        others: true,
    },
};

const mockStudentPermissions: Permissions = {
    allowShowHide: false,
    allowCreateShapes: false,
    allowEditShapes: {
        own: true,
        others: false,
    },
    allowDeleteShapes: {
        own: true,
        others: false,
    },
};

describe(`Permission utils`, () => {
    test.each([ [ true, mockTeacherPermissions ], [ false, mockStudentPermissions ] ])(`createPermissions hasControls=%s`, (hasControls, expectedValue) => {
        expect(createPermissions(hasControls))
            .toEqual(expectedValue);
    });

    test(`createEmptyPermissions`, () => {
        expect(createEmptyPermissions())
            .toEqual(mockEmptyPermissions);
    });

    test(`createTeacherPermissions`, () => {
        expect(createTeacherPermissions())
            .toEqual(mockTeacherPermissions);
    });

    test(`createStudentPermissions`, () => {
        expect(createStudentPermissions())
            .toEqual(mockStudentPermissions);
    });
});
